import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import GZWalletImage from "../../../../molecules/common/wallet-image";

type Props = {
    addedWallets?: any[];
    onAddWallet: () => void;
}
const GZWallet = ({
    addedWallets = [],
    onAddWallet
}: Props) => {
    return <Box
        p="12px 24px 24px"
        bg="#242E42"
        borderRadius="8px"
        mb="24px"
    >
        <Flex
            gap="16px"
            mb="8px"
            justifyContent="space-between"
            alignItems="center"
        >
            <Text
                fontWeight="700"
                fontSize="17px"
                lineHeight="21px"
                letterSpacing="-0.41px"
                color="#FFFFFF"
            >
                Wallets
                <Text as="span" ml="8px" color="#94A7C6">{addedWallets.length}</Text>
            </Text>
            <Button
                type="button"
                variant="ghost"
                size="md"
                color="#00CE6B"
                fontWeight="600"
                fontSize="15px"
                lineHeight="24px"
                letterSpacing="-0.24px"
                onClick={onAddWallet}
            >
                Add wallet
            </Button>
        </Flex>
        <Flex
            direction="column"
            gap="24px"
        >
            {
                addedWallets?.map((w, idx) => (
                    <Flex key={idx}>
                        <GZWalletImage image={w.image} />
                        <Flex flex="1" flexDirection="column">
                            <Text
                                fontWeight="600"
                                fontSize="15px"
                                lineHeight="24px"
                                letterSpacing="-0.24px"
                                color="#FFFFFF"
                                mb="0"
                            >
                                {w.name}
                                <Text
                                    as="span"
                                    ml="8px"
                                    fontWeight="400"
                                    fontSize="14px"
                                    lineHeight="20px"
                                    letterSpacing="-0.24px"
                                    color="#94A7C6"
                                >
                                    {w.address}
                                </Text>
                            </Text>
                            <Text
                                mb="8px"
                                fontWeight="400"
                                fontSize="14px"
                                lineHeight="20px"
                                letterSpacing="-0.24px"
                                color="#94A7C6"
                            >
                                {w.balance}
                            </Text>
                            <Box
                                display="inline-flex"
                                alignItems="center"
                            >
                                {
                                    w.assets.map((a: any, idx: number) => (
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
                                    fontWeight="400"
                                    fontSize="13px"
                                    lineHeight="18px"
                                    letterSpacing="-0.08px"
                                    color="#94A7C6"
                                >
                                    {w.assets.length} assets
                                </Text>
                            </Box>
                        </Flex>
                    </Flex>
                ))
            }
        </Flex>
    </Box>
}
export default GZWallet;