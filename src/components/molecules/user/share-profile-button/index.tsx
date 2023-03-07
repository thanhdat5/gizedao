import { Button, Text } from "@chakra-ui/react";
import GZIconShare from "../../../atoms/icons/Share";

type GZShareProfileButtonProps = {
    onClick?: () => void;
}
const GZShareProfileButton = ({
    onClick
}: GZShareProfileButtonProps) => {
    return <Button
        type="button"
        onClick={onClick}
        backgroundColor="#242E42"
        borderRadius="5px"
        display="inline-flex"
        alignItems="center"
        justifyContent="center"
        transition='all 0.2s cubic-bezier(.08,.52,.52,1)'
        border='1px solid #242E42'
        w="137px"
        h="40px"
        padding="10px 12px"
        _hover={{
            borderColor: 'rgba(191, 207, 232, 0.1)'
        }}
        _active={{
            bg: '#394662',
            borderColor: '#394662'
        }}
        _focus={{
            bg: '#394662',
            borderColor: '#394662'
        }}
    >
        <GZIconShare />
        <Text
            ml="6px"
            fontWeight="600"
            fontSize="14px"
            lineHeight="140%"
            color="#FFFFFF"
        >
            Share profile
        </Text>
    </Button>
}
export default GZShareProfileButton