import { Flex, IconButton, Image, Menu, MenuButton, MenuItem, MenuList, Text } from "@chakra-ui/react";
import GZIconProfile from "components/atoms/icons/Profile";
import { FaPlus } from "react-icons/fa";

type GZDaoInfoProps = {
    image?: string;
    name: string;
    description: string;
}
const GZLogoCard = ({ image, name, description }: GZDaoInfoProps) => {
    return <Flex gap="10px">
        <Flex
            alignItems="center"
            justifyContent="center"
            w="48px"
            h="48px"
            borderRadius="50%"
            bg="#242E42"
            overflow="hidden"
        >
            {image ? <Image
                borderRadius='full'
                boxSize="48px"
                src={image}
                alt={name}
            /> : <GZIconProfile />
            }
        </Flex>
        <Flex justifyContent="center" direction="column" flex={1} alignItems="flex-start">
            <Text
                fontWeight="400"
                fontSize="14px"
                lineHeight="140%"
                letterSpacing="0.008em"
                color="#BFCFE8"
                mb="0"
            >
                {name}
            </Text>
            <Text
                fontWeight="400"
                fontSize="10px"
                lineHeight="140%"
                letterSpacing="0.008em"
                color="#94A7C6"
                mb="0"
            >
                {description}
            </Text>
        </Flex>
        <Menu>
            <MenuButton
                p={0}
                minW="auto"
                as={IconButton}
                aria-label='Options'
                icon={<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 10.2666L4 6.26665L4.93333 5.33331L8 8.39998L11.0667 5.33331L12 6.26665L8 10.2666Z" fill="#94A7C6" />
                </svg>
                }
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
export default GZLogoCard