import { Box, Flex, Image, Text } from "@chakra-ui/react";
import GZIconProfile from "../../../atoms/icons/Profile";

type GZDAOSmallCardProps = {
    data: any;
    size?: string;
}
const GZDAOSmallCard = ({ data, size = "40px" }: GZDAOSmallCardProps) => {
    return <Flex gap="12px">
        <Flex
            alignItems="center"
            justifyContent="center"
            w={size}
            h={size}
            borderRadius="50%"
            bg="#242E42"
            overflow="hidden"
        >
            {data.image ? <Image
                borderRadius='full'
                boxSize={size}
                src={data.image}
                alt={data.name}
            /> : <GZIconProfile />
            }
        </Flex>
        <Box>
            <Text
                fontWeight="400"
                fontSize="16px"
                lineHeight="140%"
                color="#BFCFE8"
                mb="0"
            >
                {data.name}
            </Text>
            <Text
                fontWeight="400"
                fontSize="14px"
                lineHeight="125%"
                color="rgba(148, 167, 198, 0.7)"
                mb="0"
            >
                Joined {data.joinedDate}
            </Text>
        </Box>
    </Flex>
}
export default GZDAOSmallCard