import { useState } from "react";
import * as Yup from "yup";
import { UserModal } from "../../../../types/user";
import GZEditProfile from "../../../template/auth/edit-profile/editform";

const GZEditProfilePage = () => {
  const initialValues: UserModal = {
    id: "",
    avatar:
      "https://static.fotor.com/app/features/img/aiimage/scenes/a%20realistic%20fox%20in%20the%20lake%20generated%20by%20ai%20image%20creator.png",
    coverImage: "https://i.ibb.co/br6jLVy/Frame-99552.png",
    displayName: "",
    walletAddr: "",
    ercWalletAddr: "",
    publicUrl: "",
    bio: "",
    persionalSite: "",
    twitter: "",
    telegram: "",
    discord: "",
    linkedIn: "",
    youTube: "",
    instagram: "",
  };

  const UserShema = Yup.object().shape({
    displayName: Yup.string().max(255, "Too Long!").required("Required"),
    walletAddr: Yup.string().required("Required"),
    ercWalletAddr: Yup.string().required("Required"),
    bio: Yup.string().max(500, "Too Long!").required("Required"),
    persionalSite: Yup.string().url("Invalid url"),
  });

  const [isEdit, setisEdit] = useState(true);
  const handleSubmit = (values: any) => {
    debugger;
  };

  return (
    <>
      <GZEditProfile
        isEdit={isEdit}
        setisEdit={setisEdit}
        initialValues={initialValues}
        validationSchema={UserShema}
        onSubmit={handleSubmit}
      />
    </>
  );
};
export default GZEditProfilePage;
