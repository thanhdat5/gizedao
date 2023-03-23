import { Box } from "@chakra-ui/react";
import GZDivider from "components/molecules/common/divider";
import GZLogoCard from "components/molecules/common/logo-card";
import { LAYOUT_SETTING } from "constants/layout";
import GIZSideBarMenuExpand from "../sidebar-menu-expand";


type Props = {
    expanded?: boolean;
    menuConfig?:any
}
const GZSidebarExpand = ({
    expanded = false,
    menuConfig
}: Props) => {
    return <Box
        width={LAYOUT_SETTING.SIDEBAR_EXPAND_WIDTH}
        height="100vh"
        position='fixed'
        zIndex={1000}
        top={0}
        left={expanded ? LAYOUT_SETTING.SIDEBAR_WIDTH : '-100%'}
        background="#171F30"
        transition="all ease-in-out .3s"
        p="20px 16px"
    >
        <GZLogoCard
            image="https://static.fotor.com/app/features/img/aiimage/scenes/a%20realistic%20fox%20in%20the%20lake%20generated%20by%20ai%20image%20creator.png"
            name="GizeDAO"
            description="1000 Members"
        />
        <GZDivider spacing="8px" />
        <Box
            pt="12px"
        >
            <GIZSideBarMenuExpand menuConfigItems={menuConfig}/>
        </Box>
    </Box>
}
export default GZSidebarExpand