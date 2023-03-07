import { Box, Flex, IconButton, Image, Menu, MenuButton, MenuItem, MenuList, Text } from "@chakra-ui/react";
import { FaPlus } from "react-icons/fa";
import GZIconMore from "../../../atoms/icons/More";
import GZIconProfile from "../../../atoms/icons/Profile";

type GZDaoInfoProps = {
    image?: string;
    name: string;
    address: string;
}
const GZDaoInfo = ({ image, name, address }: GZDaoInfoProps) => {
    return <Flex gap="10px">
        <Flex
            alignItems="center"
            justifyContent="center"
            w="40px"
            h="40px"
            borderRadius="50%"
            bg="#242E42"
            overflow="hidden"
        >
            {image ? <Image
                borderRadius='full'
                boxSize="40px"
                src={image}
                alt={name}
            /> : <GZIconProfile />
            }
        </Flex>
        <Box flex={1}>
            <Text
                fontWeight="400"
                fontSize="16px"
                lineHeight="140%"
                color="#94A7C6"
                mb="0"
            >
                {name}
            </Text>
            <Text
                fontWeight="400"
                fontSize="13px"
                lineHeight="150%"
                color="rgba(148, 167, 198, 0.7)"
                mb="0"
            >
                {address}
            </Text>
        </Box>
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
    </Flex>
}
export default GZDaoInfo