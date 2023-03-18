import GZUserProfileEdit from "../../../template/auth/edit-profile"
import { useEffect, useState } from 'react';

interface Request {
    displayName: string,
    moveWalletAddress: string,
    eRCWalletAddress: string,
    publicURL: string,
    bio: string,
    personalSite: string,
    tweeterLink: string,
    telegramLink: string,
    discordLink: string,
    linkedLink: string,
    youTubeLink: string,
    instagramLink: string,
    coverImage: string,
    avatar: string
}

const GZUserEditProfilePage = () => {
    const [initialValues] = useState({
        displayName: 'test',
        moveWalletAddress: "test1",
        eRCWalletAddress: "test1",
        publicURL: "http://abc.test",
        bio: "This is GizeDAO Support Team profile to have a quick access to customize your DAO. To contact support team, please write your questions to the link above",
        personalSite: 'http://abc.test',
        tweeterLink: 'http://abc.test',
        telegramLink: 'http://abc.test',
        discordLink: 'http://abc.test',
        linkedLink: 'http://abc.test',
        youTubeLink: 'http://abc.test',
        instagramLink: 'http://abc.test',
        coverImage: 'https://i.ibb.co/br6jLVy/Frame-99552.png',
        avatar: 'https://static.fotor.com/app/features/img/aiimage/scenes/a%20realistic%20fox%20in%20the%20lake%20generated%20by%20ai%20image%20creator.png'
    })
    const [isEdit, setisEdit] = useState(true);
    const onSave = (values: Request) => {
        // todo
        console.log(values);

    }

    return <>
        <GZUserProfileEdit isEdit={isEdit} setisEdit={setisEdit} initialValues={initialValues} onSave={onSave} />
    </>
}
export default GZUserEditProfilePage
