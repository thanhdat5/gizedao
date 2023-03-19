import { useState } from "react";
import { ICreateDaoModel } from "../../../../types/dao";
import GZInvitationCodeModal from "../../../organisms/common/invitation-code-modal";
import GZCreateDAO from "../../../template/dao/create";
import * as Yup from 'yup';

const GZCreateDAOPage = () => {
  const [showInvitation, setShowInvitation] = useState(true);
  const [invitationCode, setInvitationCode] = useState("");
  const [validateInvitationMsg, setValidateInvitationMsg] = useState("");
  const initialValues: ICreateDaoModel = {
    id: '',
    avatar: 'https://imgv3.fotor.com/images/blog-cover-image/part-blurry-image.jpg',
    cover: 'https://imgv3.fotor.com/images/blog-cover-image/part-blurry-image.jpg',
    chain: '',
    name: '111',
    about: '',
    category: '',
    website: '',
    publicUrl: '',
    twitter: '',
    discord: '',
    github: '',
    telegram: '',
    instagram: '',
    hideSpaceFromHomepage: false
  }

  const CreateDAOSchema = Yup.object().shape({
    cover: Yup.string()
      .required('Required'),
    chain: Yup.string()
      .required('Required'),
    name: Yup.string()
      .max(255, 'Too Long!')
      .required('Required'),
    about: Yup.string()
      .max(500, 'Too Long!')
      .required('Required'),
    category: Yup.string()
      .max(255, 'Too Long!')
      .required('Required'),
    website: Yup.string().url('Invalid url'),
  });

  const handleSubmitInvitationModal = (code: string) => {
    if (code !== "123") {
      setValidateInvitationMsg("Invitation Code is invalid.");
      return;
    }

    setInvitationCode(code);
    setValidateInvitationMsg("");
    setShowInvitation(false);
  }

  const handleCloseInvitationModal = () => {
    setShowInvitation(false);
  }

  const handleBack = () => {

  }

  const handleSubmit = (values: any) => {
    debugger
  }

  return <>
    {showInvitation ? <GZInvitationCodeModal
      errorMessage={validateInvitationMsg}
      onSubmit={handleSubmitInvitationModal}
      onDismiss={handleCloseInvitationModal}
    /> : <></>}
    <GZCreateDAO
      chains={['111', '222']}
      categories={['111', '222']}
      initialValues={initialValues}
      validationSchema={CreateDAOSchema}
      onBack={handleBack}
      onSubmit={handleSubmit}
    />
  </>;
};

export default GZCreateDAOPage;
