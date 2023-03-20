import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import GZIconProfile1 from "components/atoms/icons/Item-1";
import GZIconProfile2 from "components/atoms/icons/Item-2";
import GZIconProfile3 from "components/atoms/icons/Item-3";
import GZIconProfile4 from "components/atoms/icons/Item-4";
import styled from "styled-components";

const GZNavProfile = () => {
  return (
    <Flex gap="20px" color="#fff">
      <Box>
        <StyledText>Supported Chains</StyledText>
        <Flex gap="12px">
          <GZIconProfile1 />
          <GZIconProfile2 />
          <GZIconProfile3 />
          <GZIconProfile4 />
        </Flex>
      </Box>
      <StyledBox>
        <StyledText>Sector</StyledText>
        <Text>#Investment</Text>
      </StyledBox>
      <Box>
        <StyledText>Token</StyledText>
        <Text>-</Text>
      </Box>
    </Flex>
  );
};

export default GZNavProfile;

const StyledBox = styled(Box)`
padding : 0 20px;
border-left:1px solid rgba(78, 95, 131, 0.7);
border-right:1px solid rgba(78, 95, 131, 0.7);
`
const StyledText = styled(Text)`
    margin-bottom : 12px;
    font-size:14px;
    font-weight:400;
`