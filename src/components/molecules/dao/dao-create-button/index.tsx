import { Box, Flex, Text } from "@chakra-ui/react";
import GZIconAdd from "../../../atoms/icons/Add";

type GZDAOSmallCardProps = {
    onClick?: () => void;
}
const GZDAOCreateButton = ({ onClick }: GZDAOSmallCardProps) => {
    return <Flex gap="12px" cursor="pointer" onClick={onClick}>
        <Flex alignItems="center" justifyContent="center" w="40px" h="40px" borderRadius="50%" bg="#181C2C">
            <GZIconAdd />
        </Flex>
        <Box>
            <Text
                fontWeight="400"
                fontSize="16px"
                lineHeight="140%"
                color="#BFCFE8"
                mb="0"
            >
                Create DAO
            </Text>
            <Text
                fontWeight="400"
                fontSize="14px"
                lineHeight="125%"
                color="rgba(148, 167, 198, 0.7)"
                mb="0"
            >
                To grow your community in a minutes
            </Text>
        </Box>
    </Flex>
}
export default GZDAOCreateButton