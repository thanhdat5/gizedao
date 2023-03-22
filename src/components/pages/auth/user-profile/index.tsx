import GZUserProfile from "components/template/auth/user-profile";

const GZUserProfilePage = () => {
  const userInfo = {
    coverImage: "https://i.ibb.co/br6jLVy/Frame-99552.png",
    avatar: "https://bit.ly/code-beast",
    name: "Lavender",
    bio: "This is GizeDAO Support Team profile to have a quick access to customize your DAO. To contact support team, please write your questions to the link above",
    daos: [
      // {
      //     image: "https://ik.imagekit.io/l3jhuoqd2/img/icons/linkCard-launchpad.png",
      //     name: "DAOMaker",
      //     joinedData: "Nov 09, 2022"
      // }, {
      //     image: "https://assets.website-files.com/61accf1d4dff7dd5e8357917/61b1f6e53a88e3cbec8ad53f_breeder%20dao%20logo%20lottie_full-gradient.svg",
      //     name: "BreederDAO",
      //     joinedData: "Nov 09, 2022"
      // }
    ],
  };
  return (
    <>
      <GZUserProfile userInfo={userInfo} />
    </>
  );
};
export default GZUserProfilePage;
