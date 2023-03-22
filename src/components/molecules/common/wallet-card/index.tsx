import { Box, Button, Flex, Image, Text } from "@chakra-ui/react"

type Props = {
    image?: string;
    title: string;
    description: string;
    onClick: () => void;
    isAddButton?: boolean;
}
const GZWalletCard = ({
    image,
    title,
    description,
    isAddButton = false,
    onClick
}: Props) => {
    return <Button
        w="100%"
        type="button"
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        p="10px"
        h="auto"
        borderRadius="8px"
        border={0}
        onClick={onClick}
        backgroundColor="transparent"
        _hover={
            {
                backgroundColor: "#1B2332"
            }
        }
    >
        <Flex
            justifyContent="center"
            alignItems="center"
            minW="40px"
            w="40px"
            h="40px"
            borderRadius="50%"
            overflow="hidden"
            mr="16px"
            bg="rgba(217, 217, 217, 0.14)"
        >
            {
                isAddButton ? <>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_213_22753)">
                            <path fillRule="evenodd" clipRule="evenodd" d="M12 2.25C12.5523 2.25 13 2.69772 13 3.25V11H20.75C21.3023 11 21.75 11.4477 21.75 12C21.75 12.5523 21.3023 13 20.75 13H13V20.75C13 21.3023 12.5523 21.75 12 21.75C11.4477 21.75 11 21.3023 11 20.75V13H3.25C2.69772 13 2.25 12.5523 2.25 12C2.25 11.4477 2.69772 11 3.25 11H11V3.25C11 2.69772 11.4477 2.25 12 2.25Z" fill="#94A7C6" />
                        </g>
                        <defs>
                            <clipPath id="clip0_213_22753">
                                <rect width="24" height="24" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                </> : <>
                    {
                        image ? <Image src={image} alt="" w="100%" h="100%" objectFit="cover" /> :
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_213_22721)">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M3.25 12C3.25 7.16751 7.16751 3.25 12 3.25C16.8325 3.25 20.75 7.16751 20.75 12C20.75 16.8325 16.8325 20.75 12 20.75C7.16751 20.75 3.25 16.8325 3.25 12ZM12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C17.9371 22.75 22.75 17.9371 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25ZM13 7.5C13 6.94772 12.5523 6.5 12 6.5C11.4477 6.5 11 6.94772 11 7.5V11H7.5C6.94772 11 6.5 11.4477 6.5 12C6.5 12.5523 6.94772 13 7.5 13H11V16.5C11 17.0523 11.4477 17.5 12 17.5C12.5523 17.5 13 17.0523 13 16.5V13H16.5C17.0523 13 17.5 12.5523 17.5 12C17.5 11.4477 17.0523 11 16.5 11H13V7.5Z" fill="#94A7C6" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_213_22721">
                                        <rect width="24" height="24" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                    }
                </>
            }

        </Flex>
        <Flex
            direction="column"
            flex="1"
            alignItems="flex-start"
        >
            <Text
                mb="0"
                fontWeight="600"
                fontSize="15px"
                lineHeight="24px"
                letterSpacing="-0.24px"
                color="#FFFFFF"
            >
                {title}
            </Text>
            <Text
                mb="0"
                fontWeight="400"
                fontSize="14px"
                lineHeight="20px"
                letterSpacing="-0.24px"
                color="#94A7C6"
            >
                {description}
            </Text>
        </Flex>
        <Box ml="auto">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M6.03151 13.5856C5.70806 13.3269 5.65562 12.8549 5.91438 12.5315L9.53956 7.99997L5.91438 3.46849C5.65562 3.14505 5.70806 2.67308 6.03151 2.41432C6.35495 2.15556 6.82692 2.208 7.08568 2.53145L11.0857 7.53145C11.3048 7.80537 11.3048 8.19458 11.0857 8.46849L7.08568 13.4685C6.82692 13.7919 6.35495 13.8444 6.03151 13.5856Z" fill="#4E5F83" />
            </svg>
        </Box>
    </Button>
}
export default GZWalletCard