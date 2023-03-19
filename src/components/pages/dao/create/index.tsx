import { useState } from "react";
import { ICreateDaoModel } from "../../../../types/dao";
import GZInvitationCodeModal from "../../../organisms/common/invitation-code-modal";
import GZCreateDAO from "../../../template/dao/create";

const GZCreateDAOPage = () => {
  const [showInvitation, setShowInvitation] = useState(true);
  const [invitationCode, setInvitationCode] = useState("");
  const [validateInvitationMsg, setValidateInvitationMsg] = useState("");
  const initialValues: ICreateDaoModel = {
    id: '',
    avatar: '',
    cover: '',
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
      onBack={handleBack}
      onSubmit={handleSubmit}
    />
  </>;
};

export default GZCreateDAOPage;
