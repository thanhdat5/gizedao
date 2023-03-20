import React from 'react'
import GZProfile from '../../../template/dao/profile';

const GZDAOProfilePage = () => {
    const profileInfo = {
        coverImage: "https://i.ibb.co/br6jLVy/Frame-99552.png",
        avatar: "https://bit.ly/code-beast",
        member :'1000 Members',
        name: "GizeDAO",
        bio: "GizeDAO is an all-in-one platform for starting, managing, and growing your decentralized autonomous organization (DAO). Our platform provides a comprehensive suite of tools to help you launch and manage your own DAO, including features such as creating and selling NFTs, managing treasury, setting governance, and more. Our mission is to empower individuals and organizations to take control of their communities and assets through decentralized technology.",
      };
      return (
        <>
          <GZProfile profileInfo={profileInfo} />
        </>
      );
    };


export default GZDAOProfilePage