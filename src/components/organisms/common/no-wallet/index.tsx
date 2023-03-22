import { Box, Button, Text } from "@chakra-ui/react"

type Props = {
    title: string;
    description?: string;
    onAdd: () => void;
}
const GZNoWallet = ({ title, description = "", onAdd }: Props) => {
    return <Box
        p="24px 24px 48px"
        bg="#242E42"
        border="1px solid #252B36"
        borderRadius="8px"
        textAlign="center"
    >
        <Box
            w="504px"
            maxW="100%"
            margin="0 auto"
        >
            <Text
                mb="16px"
                fontWeight="700"
                fontSize="24px"
                lineHeight="28px"
                letterSpacing="0.36px"
                color="#FFFFFF"
            >
                {title}
            </Text>
            {
                description && (
                    <Text
                        mb="24px"
                        fontWeight="400"
                        fontSize="15px"
                        lineHeight="24px"
                        letterSpacing="-0.24px"
                        color="#94A7C6"
                    >
                        {description}
                    </Text>
                )
            }
            <Button
                colorScheme="green"
                fontWeight="600"
                onClick={onAdd}
                size="md"
                color="#222222"
                _hover={
                    {
                        color: '#fff'
                    }
                }
            >
                Add wallet
            </Button>
        </Box>
    </Box>
}
export default GZNoWallet