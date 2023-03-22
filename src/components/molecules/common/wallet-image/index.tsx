import { Flex, Image } from "@chakra-ui/react";
type Props = {
    image?: string;
    ml?: string;
    mr?: string;
}
const GZWalletImage = ({
    image,
    ml = "0",
    mr = "16px"
}: Props) => {
    return <Flex
        w="40px"
        h="40px"
        minW="40px"
        borderRadius="50%"
        overflow="hidden"
        bg="rgba(217, 217, 217, 0.14)"
        alignItems="center"
        justifyContent="center"
        ml={ml}
        mr={mr}
    >
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
    </Flex>
}
export default GZWalletImage;