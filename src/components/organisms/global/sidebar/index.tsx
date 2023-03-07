import { Box, Button, Flex, Menu, MenuButton, MenuList, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { FaToggleOff, FaToggleOn } from "react-icons/fa";
import { Link } from "react-router-dom";
import { LAYOUT_SETTING } from "../../../../constants";
import { APP_ROUTE } from "../../../../constants/route";
import GZIconAdd from "../../../atoms/icons/Add";
import GZIconDashboard from "../../../atoms/icons/Dashboard";
import GZIconIntegrations from "../../../atoms/icons/Integrations";
import GZIconNotification from "../../../atoms/icons/Notification";
import GZIconProfile from "../../../atoms/icons/Profile";
import GZIconSettings from "../../../atoms/icons/Settings";
import GZIconWhiteMode from "../../../atoms/icons/WhiteMode";
import GZDaoInfo from "../../../molecules/dao/dao-info";
import GZDivider from "../../../molecules/global/divider";
import GZIconButton from "../../../molecules/global/icon-button";
import GZLogoImageButton from "../../../molecules/global/logo-image-button";
import GZMenuItem from "../../../molecules/global/menu-item";
import GZUserImageButton from "../../../molecules/user/user-image-button";

const GZSidebar = () => {
    const { toggleColorMode } = useColorMode();
    const SwitchIcon = useColorModeValue(FaToggleOn, FaToggleOff)
    return <Flex
        w={LAYOUT_SETTING.SIDEBAR_WIDTH}
        background="#0F1725"
        height="100vh"
        position='fixed'
        zIndex={999}
        top={0}
        left={0}
        padding="20px 12px"
        flexDirection="column"
        alignItems="center"
        justifyContent="space-between"
    >
        <Box height="65px">
            <GZLogoImageButton />
            <GZDivider />
        </Box>
        <Flex
            direction="column"
            overflowX="hidden"
            overflowY="auto"
            height='calc(100vh - 65px - 81px)'
            gap="8px"
        >
            <GZIconButton icon={<GZIconDashboard />} />
            <GZIconButton icon={<GZIconAdd />} />
        </Flex>
        <Box height="81px">
            <GZDivider spacing="16px" />
            <Menu placement="right">
                <MenuButton>
                    <GZUserImageButton src="https://static.fotor.com/app/features/img/aiimage/scenes/a%20realistic%20fox%20in%20the%20lake%20generated%20by%20ai%20image%20creator.png" />
                </MenuButton>
                <MenuList
                    minW="300px"
                    borderRadius="10px"
                    pt="17px"
                    pb="9px"
                    mb="20px"
                    _dark={{
                        bg: "#1B2332"
                    }}
                >
                    <Box px="16px">
                        <GZDaoInfo
                            image="https://static.fotor.com/app/features/img/aiimage/scenes/a%20realistic%20fox%20in%20the%20lake%20generated%20by%20ai%20image%20creator.png"
                            name="Blockchain DAO"
                            address="0xF28BA7525...76117749330"
                        />
                    </Box>
                    <GZDivider spacing="16px" />
                    <Box px="8px">
                        <GZMenuItem icon={<GZIconNotification />} label="Notification" />
                        <GZMenuItem icon={<GZIconSettings />} label="Settings" />
                    </Box>
                    <GZDivider spacing="16px" />
                    <Box px="8px">
                        <GZMenuItem icon={<GZIconIntegrations />} label="Integrations" />
                        <GZMenuItem icon={<GZIconProfile />} label="Edit profile" as={Link} href={APP_ROUTE.EDIT_PROFILE} />
                    </Box>
                    <GZDivider spacing="16px" />
                    <Box px="8px" mb="12px">
                        <GZMenuItem icon={<GZIconWhiteMode />} rightIcon={<SwitchIcon />} label="White mode" onClick={toggleColorMode} />
                    </Box>
                    <Box px="16px">
                        <Button variant="outline" colorScheme="gray" w="100%" size="md">Log out</Button>
                    </Box>
                </MenuList>
            </Menu>
        </Box>
    </Flex>
}
export default GZSidebar;