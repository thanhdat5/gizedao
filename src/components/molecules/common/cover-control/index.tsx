import { Box, Input, Text } from "@chakra-ui/react";

type Props = {
    image?: string;
    onChange?: (e: any) => void;
}
const GZCoverImageControl = ({ image, onChange }: Props) => {
    return <Box
        bg="#242E42"
        border="1px solid rgba(78, 95, 131, 0.7)"
        borderRadius="5px"
        display="inline-flex"
        alignItems="center"
        position="relative"
        p="9px 24px"
        h="38px"
        cursor="pointer"
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
            Choose files to upload
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

}
export default GZCoverImageControl