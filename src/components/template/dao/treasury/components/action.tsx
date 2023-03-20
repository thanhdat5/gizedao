import { Box, Button, Flex, Text } from "@chakra-ui/react";

type Props = {
    icon: JSX.Element;
    title: string;
    description: string;
    onClick: () => void;
}
const GZWalletAction = ({
    icon,
    title,
    description,
    onClick
}: Props) => {
    return <Button
        onClick={onClick}
        p="16px 12px"
        h="100%"
        backgroundColor="#242E42"
        borderRadius="8px"
        border="0"
        display="flex"
        justifyContent="space-between"
        _hover={
            {
                backgroundColor: "#1B2332"
            }
        }
    >
        <Flex
            mr="12px"
            minW="36px"
            w="36px"
            h="36px"
            bg="rgba(0, 206, 107, 0.1)"
            borderRadius="8px"
            alignItems="center"
            justifyContent="center"
        >
            {icon}
        </Flex>
        <Flex
            direction="column"
            flex="1"
            alignItems="flex-start"
            textAlign="left"
            mr="12px"
        >
            <Text
                mb="0"
                fontWeight="600"
                fontSize="14px"
                lineHeight="20px"
                letterSpacing="-0.24px"
                color="#FFFFFF"
            >
                {title}
            </Text>
            <Text
                mb="0"
                fontWeight="400"
                fontSize="13px"
                lineHeight="18px"
                letterSpacing="-0.08px"
                color="#94A7C6"
                whiteSpace="normal"
            >
                {description}
            </Text>
        </Flex>
        <Box ml="auto">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M6.03151 13.5856C5.70806 13.3269 5.65562 12.8549 5.91438 12.5315L9.53956 7.99997L5.91438 3.46849C5.65562 3.14505 5.70806 2.67308 6.03151 2.41432C6.35495 2.15556 6.82692 2.208 7.08568 2.53145L11.0857 7.53145C11.3048 7.80537 11.3048 8.19458 11.0857 8.46849L7.08568 13.4685C6.82692 13.7919 6.35495 13.8444 6.03151 13.5856Z" fill="#00CE6B" />
            </svg>
        </Box>
    </Button>
}
export default GZWalletAction;