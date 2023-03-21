import { Button, Text } from "@chakra-ui/react"

type Props = {
    icon: JSX.Element;
    label: string;
    isActive?: boolean;
    onClick: () => void;
}
const GZTabItem = ({ icon, label, isActive, onClick }: Props) => {
    return <Button
        colorScheme="ghost"
        border="0"
        p="10px 16px"
        display="inline-flex"
        alignItems="content"
        gap="12px"
        backgroundColor="#242E42"
        borderRadius="8px"
        color={isActive ? "#05E46B" : "#A2A8B4"}
        _hover={
            {
                backgroundColor: "#1B2332"
            }
        }
        onClick={onClick}
    >
        {icon ? icon : <></>}
        {
            label ? <Text
                as="span"
                fontWeight="600"
                fontSize="14px"
                lineHeight="20px"
                letterSpacing="-0.24px"
            >
                {label}
            </Text> : <></>
        }
    </Button>
}
export default GZTabItem