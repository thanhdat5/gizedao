import { Box, Button, Flex, Text } from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import GZIconArrowDown from "../../../atoms/icons/ArrowDown";
import GZDAOCreateButton from "../../../molecules/dao/dao-create-button";
import GZDAOSmallCard from "../../../molecules/dao/dao-small-card";
import GZDivider from "../../../molecules/global/divider";

type GZDAOJoinedProps = {
  daos?: any[];
};
const GZDAOJoined = ({ daos = [] }: GZDAOJoinedProps) => {
  return (
    <Box
      w="400px"
      maxW="30%"
      padding={`20px 20px ${daos.length ? "12px" : "32px"}`}
      background="#1B2332"
      boxShadow="0px 4px 4px rgba(191, 207, 232, 0.04)"
      borderRadius="10px"
    >
      <Flex
        gap="10px"
        fontWeight="400"
        fontSize="18px"
        lineHeight="110%"
        color="#BFCFE8"
        mb="14px"
      >
        <Text as="span">{daos.length ? "DAO Joined" : "Memberships"}</Text>
        <Text as="span">{daos.length}</Text>
      </Flex>
      {!daos.length ? (
        <>
          <Text
            mt="10px"
            fontWeight="400"
            fontSize="14px"
            lineHeight="140%"
            color="#94A7C6"
            mb="0"
          >
            You're not joined any DAO organization yet
          </Text>
          <GZDivider spacing="16px" />
          <GZDAOCreateButton />
        </>
      ) : (
        <>
          {daos.map((dao, idx) => (
            <Box key={idx}>
              <GZDAOSmallCard data={dao} />
              <GZDivider spacing="16px" />
            </Box>
          ))}
          <Button as={Link} variant="link" h="24px" w="100%" to="/">
            <Text
              fontWeight="400"
              fontSize="16px"
              lineHeight="140%"
              color="#FFFFFF"
              mr="4px"
            >
              See more
            </Text>
            <GZIconArrowDown />
          </Button>
        </>
      )}
    </Box>
  );
};
export default GZDAOJoined;
