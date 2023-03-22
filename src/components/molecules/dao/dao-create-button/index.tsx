import { Box, Flex, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import GZIconAdd from "components/atoms/icons/Add";
import { APP_ROUTE } from "constants/route";

type GZDAOSmallCardProps = {
  onClick?: () => void;
};
const GZDAOCreateButton = ({ onClick }: GZDAOSmallCardProps) => {
  const navigate = useNavigate();

  return (
    <Flex
      gap="12px"
      cursor="pointer"
      onClick={() => navigate(APP_ROUTE.CREATE_DAO)}
    >
      <Flex
        alignItems="center"
        justifyContent="center"
        w="40px"
        h="40px"
        borderRadius="50%"
        bg="#181C2C"
      >
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
  );
};
export default GZDAOCreateButton;
