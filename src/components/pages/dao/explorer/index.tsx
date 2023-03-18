import GIZExploreDAO from "../../../template/dao/explore"

const GIZExploreDAOPage = () => {
    const eploreItemsInfo = [{
        alt: 'DAOMaker1',
        src: "/images/item-1.png",
        text: "DAOMaker1"       
    },{
        alt: 'DAOMaker2',
        src: "",
        text: "DAOMake2r"       
    },{
        alt: 'DAOMaker3',
        src: "/images/item-3.png",
        text: "DAOMaker3"       
    },{
        alt: 'DAOMaker4',
        src: "/images/item-1.png",
        text: "DAOMaker4"       
    },{
        alt: 'DAOMaker5',
        src: "/images/item-2.png",
        text: "DAOMaker5"       
    },{
        alt: 'DAOMaker6',
        src: "https://bit.ly/code-beast",
        text: "DAOMaker6"       
    },{
        alt: 'DAOMaker7',
        src: "https://bit.ly/code-beast",
        text: "DAOMaker7"       
    },{
        alt: 'DAOMaker8',
        src: "https://bit.ly/code-beast",
        text: "DAOMaker8"       
    }]
    return <>
        <GIZExploreDAO  exploreItemInfo={eploreItemsInfo} />
    </>
}
export default GIZExploreDAOPage