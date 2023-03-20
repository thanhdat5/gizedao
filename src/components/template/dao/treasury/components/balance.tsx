import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import { IWalletAsset } from "../../../../../types/wallet";

type Props = {
    balance: string;
    assets?: IWalletAsset[];
    onReceive: () => void;
    onSend: () => void;
}
const GZWalletBalance = ({
    balance,
    assets,
    onReceive,
    onSend
}: Props) => {
    return <Box
        p="22px 24px"
        bg="#242E42"
        borderRadius="8px"
        mb="16px"
    >
        <Text
            mb="8px"
            fontWeight="700"
            fontSize="24px"
            lineHeight="28px"
            letterSpacing="0.36px"
            color="#FFFFFF"
        >
            {balance}
        </Text>
        <Text
            mb="16px"
            fontWeight="400"
            fontSize="14px"
            lineHeight="20px"
            letterSpacing="-0.24px"
            color="#94A7C6"
        >
            Total funds
        </Text>
        <Box
            display="inline-flex"
            alignItems="center"
            mb="16px"
            p="6px 12px"
            bg="rgba(191, 207, 232, 0.08)"
            borderRadius="8px"
        >
            {
                assets?.map((a, idx) => (
                    <Box
                        key={idx}
                        w={idx === 0 ? "20px" : "24px"}
                        h={idx === 0 ? "20px" : "24px"}
                        borderRadius="50%"
                        overflow="hidden"
                        border={idx === 0 ? 0 : "2px #343A46 solid"}
                        ml={idx === 0 ? 0 : '-6px'}
                    >
                        <Image
                            src={a.image}
                            alt={a.name}
                            w="100%"
                            h="100%"
                            objectFit="cover"
                        />
                    </Box>
                ))
            }
            <Text
                ml="8px"
                mb="0"
                fontWeight="600"
                fontSize="14px"
                lineHeight="20px"
                letterSpacing="-0.24px"
                color="#FFFFFF"
            >
                {assets?.length} assets
            </Text>
        </Box>
        <Flex justifyContent="flex-end" gap="12px">
            <Button type="button" colorScheme="gray" onClick={onReceive}>Receive</Button>
            <Button type="button" colorScheme="green" onClick={onSend}>Send</Button>
        </Flex>
    </Box>
}
export default GZWalletBalance