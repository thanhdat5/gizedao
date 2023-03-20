import { Box, Flex, Table, TableContainer, Tbody, Td, Text, Th, Thead, Tr } from "@chakra-ui/react"
import { IWalletAsset } from "../../../../../types/wallet";
import GZWalletImage from "../../../../molecules/common/wallet-image";

type Props = {
    assets?: IWalletAsset[];
}
const GZWalletAssets = ({
    assets
}: Props) => {
    return <Box
        p="20px 24px"
        bg="#242E42"
        borderRadius="8px"
    >
        <Flex
            alignItems="center"
            mb="14px"
        >
            <Text
                mb="0"
                fontWeight="700"
                fontSize="17px"
                lineHeight="21px"
                letterSpacing="-0.41px"
                color="#FFFFFF"
            >
                Assets
                <Text as="span" ml="8px" color="#94A7C6">{assets?.length}</Text>
            </Text>
            <Box ml="2px">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M8.03151 15.5856C7.70806 15.3269 7.65562 14.8549 7.91438 14.5315L11.5396 9.99997L7.91438 5.46849C7.65562 5.14505 7.70806 4.67308 8.03151 4.41432C8.35495 4.15556 8.82692 4.208 9.08568 4.53145L13.0857 9.53145C13.3048 9.80537 13.3048 10.1946 13.0857 10.4685L9.08568 15.4685C8.82692 15.7919 8.35495 15.8444 8.03151 15.5856Z" fill="#94A7C6" />
                </svg>
            </Box>
        </Flex>
        <TableContainer>
            <Table border={0}>
                <Thead>
                    <Tr
                        fontWeight="600"
                        fontSize="13px"
                        lineHeight="18px"
                        letterSpacing="-0.08px"
                        color="#94A7C6"
                    >
                        <Th border="0" textTransform="none" fontFamily="Inter" p="0 0 2px">Type</Th>
                        <Th border="0" textTransform="none" fontFamily="Inter" p="0 0 2px" textAlign="right">Balance</Th>
                        <Th border="0" textTransform="none" fontFamily="Inter" p="0 0 2px" textAlign="right">Price, USD</Th>
                        <Th border="0" textTransform="none" fontFamily="Inter" p="0 0 2px" textAlign="right">Value, USD</Th>
                    </Tr>
                </Thead>
                <Tbody
                    fontWeight="400"
                    fontSize="15px"
                    lineHeight="24px"
                    letterSpacing="-0.24px"
                    color="#FFFFFF"
                    verticalAlign="middle"
                >
                    {
                        assets?.map((a, idx) => (
                            <Tr key={idx}>
                                <Td border="0" p="8px 0">
                                    <Flex alignItems="center">
                                        <GZWalletImage image={a.image} />
                                        <Text as="span" fontWeight="600">
                                            {a.name}
                                        </Text>
                                    </Flex>
                                </Td>
                                <Td border="0" p="8px 10px" textAlign="right">{a.balance}</Td>
                                <Td border="0" p="8px 10px" textAlign="right">{a.priceUSD}</Td>
                                <Td border="0" p="8px 0" textAlign="right">
                                    <Text mb="0">{a.valueUSD}</Text>
                                    <Text
                                        mb="0"
                                        fontWeight="700"
                                        fontSize="10px"
                                        lineHeight="12px"
                                        letterSpacing="0.25px"
                                        color={a.percent > 0 ? '#32D74B' : '#FF455C'}
                                    >
                                        {`${a.percent > 0 ? '+' : ''}${a.percent}%`}
                                    </Text>
                                </Td>
                            </Tr>
                        ))
                    }
                </Tbody>
            </Table>
        </TableContainer>
    </Box>
}
export default GZWalletAssets