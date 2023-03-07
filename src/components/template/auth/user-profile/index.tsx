import { Box, Flex, IconButton, Menu, MenuButton, MenuItem, MenuList, Text } from "@chakra-ui/react"
import { FaDiscord, FaPlus, FaTelegram, FaTwitter, FaYoutube } from "react-icons/fa"
import GZIconMore from "../../../atoms/icons/More"
import GZIconButton from "../../../molecules/global/icon-button"
import GZShareProfileButton from "../../../molecules/user/share-profile-button"
import GZDAOJoined from "../../../organisms/dao/joined-dao"
import GZUserAvatar from "../../../organisms/user/avatar"
import GZUserCover from "../../../organisms/user/cover"

type GZUserProfileProps = {
    userInfo: any;
}
const GZUserProfile = ({ userInfo }: GZUserProfileProps) => {
    return <>
        <Flex direction="row" gap="46px" alignItems="flex-start">
            <Box
                flex="1"
                background="#1B2332"
                boxShadow="0px 4px 4px rgba(191, 207, 232, 0.04)"
                borderRadius="12px"
            >
                <GZUserCover src={userInfo.coverImage} />
                <Box mt="-72px" ms="32px" position="relative">
                    <GZUserAvatar size="140px" src={userInfo.avatar} name={userInfo.name} />
                    <Box position="absolute" bottom="0" right="32px" cursor="pointer">
                        <Menu>
                            <MenuButton
                                p={0}
                                minW="auto"
                                as={IconButton}
                                aria-label='Options'
                                icon={<GZIconMore />}
                                variant='link'
                            />
                            <MenuList>
                                <MenuItem icon={<FaPlus />} command='⌘T'>
                                    New Tab
                                </MenuItem>
                            </MenuList>
                        </Menu>
                    </Box>
                </Box>
                <Box p="32px 32px 40px">
                    <Text
                        mb="16px"
                        fontWeight="600"
                        fontSize="24px"
                        lineHeight="135%"
                        color="#FFFFFF"
                    >
                        {userInfo.name}
                    </Text>
                    <Text
                        mb="28px"
                        fontWeight="400"
                        fontSize="16px"
                        lineHeight="150%"
                        color="#BFCFE8">
                        {userInfo.bio}
                    </Text>
                    <Flex gap="20px">
                        <GZShareProfileButton />
                        <Flex gap="12px">
                            <GZIconButton w="38px" h="38px" p="9px" icon={<FaTwitter size="18px" />} />
                            <GZIconButton w="38px" h="38px" p="9px" icon={<FaTelegram size="18px" />} />
                            <GZIconButton w="38px" h="38px" p="9px" icon={<FaYoutube size="18px" />} />
                            <GZIconButton w="38px" h="38px" p="9px" icon={<FaDiscord size="18px" />} />
                        </Flex>
                    </Flex>
                </Box>
            </Box>
            <GZDAOJoined daos={userInfo.daos || []} />
        </Flex>
    </>
}
export default GZUserProfile