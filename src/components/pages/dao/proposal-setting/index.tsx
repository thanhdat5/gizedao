import GZInvitationCodeModal from "components/organisms/common/invitation-code-modal";
import GZCreateDAO from "components/template/dao/create";
import GZProposalSetting from "components/template/dao/proposal-setting";
import { useState } from "react";
import { ICreateDaoModel } from "types/dao";
import { IProposalSettingModel } from "types/proposal";
import * as Yup from 'yup';

const GZProposalSettingPage = () => {

  const initialValues: IProposalSettingModel = {
    id: '',
    cover:'https://imgv3.fotor.com/images/blog-cover-image/part-blurry-image.jpg' ,
    title: '',
    description:'',
    discussion:'',
    type:''
  }

  const CreateDAOSchema = Yup.object().shape({
    // cover: Yup.string()
    //   .required('Required'),
    title: Yup.string()
      .max(255, 'Too Long!')
      .required('Field is required'),
  });

  const handleBack = () => {

  }
  const handlePreview = () => {

  }

  const handleSubmit = (values: any) => {
    debugger
  }

  return <>
    <GZProposalSetting
      initialValues={initialValues}
      validationSchema={CreateDAOSchema}
      onBack={handleBack}
      onPreview={handlePreview}
      onSubmit={handleSubmit}
    />
  </>;
};

export default GZProposalSettingPage;
 