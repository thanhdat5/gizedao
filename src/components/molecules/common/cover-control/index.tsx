import { Box, Image, Input, Text } from "@chakra-ui/react";

type Props = {
    image?: string;
    text:string
    onChange?: (e: any) => void;
    onRemove?: () => void;
}
const GZCoverImageControl = ({ image,text, onChange, onRemove }: Props) => {
    return <Box>
        {
            image ? <>
                <Box w="444px" maxW="100%" h="126px" mb="12px" borderRadius="8px" overflow="hidden">
                    <Image src={image} alt="" objectFit="cover" w="100%" h="100%" />
                </Box>
                <Box
                    className="gz-field-file"
                    bg="#242E42"
                    border="1px solid rgba(78, 95, 131, 0.7)"
                    borderRadius="5px"
                    display="inline-flex"
                    alignItems="center"
                    position="relative"
                    p="9px 24px"
                    h="38px"
                    cursor="pointer"
                    mr="6px"
                    onClick={onRemove}
                    transition="all ease-in-out .3s"
                    _hover={
                        {
                            background: '#394662'
                        }
                    }
                >
                    <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.875 4.375L5.65625 16.875C5.69336 17.5973 6.21875 18.125 6.90625 18.125H14.0938C14.784 18.125 15.2996 17.5973 15.3438 16.875L16.125 4.375" stroke="#F04438" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M3.625 4.375H17.375H3.625Z" fill="#F04438" />
                        <path d="M3.625 4.375H17.375" stroke="#F04438" strokeWidth="1.25" strokeMiterlimit="10" strokeLinecap="round" />
                        <path d="M8 4.375V2.8125C7.99964 2.68929 8.02364 2.56722 8.07063 2.45331C8.11761 2.33941 8.18666 2.23591 8.27378 2.14879C8.36091 2.06166 8.4644 1.99262 8.57831 1.94563C8.69221 1.89865 8.81428 1.87464 8.9375 1.875H12.0625C12.1857 1.87464 12.3078 1.89865 12.4217 1.94563C12.5356 1.99262 12.6391 2.06166 12.7262 2.14879C12.8133 2.23591 12.8824 2.33941 12.9294 2.45331C12.9764 2.56722 13.0004 2.68929 13 2.8125V4.375M10.5 6.875V15.625M7.6875 6.875L8 15.625M13.3125 6.875L13 15.625" stroke="#F04438" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <Text ml="10px" mb="0" fontSize="14px" color="#F04438">Remove image</Text>
                </Box>
            </> : <></>
        }
        <Box
            className="gz-field-file"
            bg="#242E42"
            border="1px solid rgba(78, 95, 131, 0.7)"
            borderRadius="5px"
            display="inline-flex"
            alignItems="center"
            position="relative"
            p="9px 24px"
            h="38px"
            cursor="pointer"
            transition="all ease-in-out .3s"
            _hover={
                {
                    background: '#394662'
                }
            }
        >
            <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M10.0001 2.5V12.5M10.0001 2.5L6.66675 5.83333M10.0001 2.5L13.3334 5.83333M1.66675 14.1667L2.18425 16.2375C2.27438 16.5981 2.48243 16.9182 2.77536 17.1469C3.06828 17.3757 3.42926 17.4999 3.80091 17.5H16.1992C16.5709 17.4999 16.9319 17.3757 17.2248 17.1469C17.5177 16.9182 17.7258 16.5981 17.8159 16.2375L18.3334 14.1667"
                    stroke="#94A7C6"
                    strokeWidth="1.66667"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>

            <Text ml="10px" mb="0" fontSize="14px" color="#BFCFE8">
                {text}
            </Text>

            <Input
                cursor="pointer"
                type="file"
                height="100%"
                width="100%"
                position="absolute"
                top="0"
                left="0"
                opacity="0"
                aria-hidden="true"
                accept="image/*"
                onChange={onChange}
            />
        </Box>
    </Box>

}
export default GZCoverImageControl