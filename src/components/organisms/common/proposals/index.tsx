import {
  Box,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Flex,
  Tag,
  Text,
} from "@chakra-ui/react";
import React from "react";
import styled from "styled-components";
import GZIconActive from "../../../atoms/icons/Active";
import GZIconClosed from "../../../atoms/icons/Closed";
import GZAvatarImage from "../avatar";
type GZProposalProps = {
  data?: any;
};
const GZProposal = ({ data }: GZProposalProps) => {
  return (
    <>
      {data.map((item:any) => (
        <StyledCard key={item.id}>
          <CardHeader p="30px">
            <Flex alignItems="center" justifyContent="space-between">
              <Flex alignItems="center" gap="20px">
                <GZAvatarImage size="30" src={item.avatar} />
                <Text>{item.name}</Text>
                <Tag size="lg" color="#fff" backgroundColor="#0075FF">
                  {item.tag}
                </Tag>
              </Flex>
              <Flex alignItems="center" gap="10px">
                  <Box>
                    {item.status === "Active" ? <GZIconActive /> : <GZIconClosed  />}
                  </Box>
                  <Box color={item.status === "Active" ? "#00B900" : "#94A7C6"}>
                    {item.status}
                  </Box>
              </Flex>
            </Flex>
          </CardHeader>
          <CardBody p="0 30px">
            <Text mb="24px" fontSize="20px" fontWeight="600">
              {item.title}
            </Text>
            <Text fontSize="14px" fontWeight="400" color="#94A7C6">
              {item.content}
            </Text>
          </CardBody>
          <CardFooter
            justifyContent="space-between"
            alignItems="center"
            p="30px"
          >
            <Box>
              <Text color='#94A7C6'>{item.time}</Text>
            </Box>
            <Box border="1px solid #4E5F83" borderRadius="5px" p="10px 14px">
              <Text>Total Vote: {item.totalVote}</Text>
            </Box>
          </CardFooter>
        </StyledCard>
      ))}
    </>
  );
};

export default GZProposal;

const StyledCard = styled(Card)`
  border: 1px solid rgba(78, 95, 131, 0.7)!important;
  margin-bottom: 20px;
  border-radius: 10px !important;
  box-shadow: 0px 4px 4px rgba(191, 207, 232, 0.04) !important;
`;
