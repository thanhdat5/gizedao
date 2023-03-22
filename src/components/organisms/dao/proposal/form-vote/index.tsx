import { Button, Card, CardBody, CardHeader, Text } from '@chakra-ui/react';
import GZGroupRadio from 'components/organisms/common/group-radio';
import styled from 'styled-components';


const GZProposalVote = () => {
  return (
    <StyledCard>
      <StyledCardHeader >
				<Text color="#fff" fontWeight="600" fontSize="16px">Cast your vote</Text>
			</StyledCardHeader>
      <CardBody p="30px 30px 20px 30px" bg="#1B2332" >
        <GZGroupRadio options={["Yes! add the option", "No"]} labelButton="Vote"/>
      </CardBody>
    </StyledCard>
  )
}

export default GZProposalVote;

const StyledCard = styled(Card)`
	border: 1px solid rgba(78, 95, 131, 0.7) !important;
	margin-bottom: 20px;
	border-radius: 10px !important;
	box-shadow: 0px 4px 4px rgba(191, 207, 232, 0.04) !important;
	transition: all 0.2s;
`;

const StyledCardHeader = styled(CardHeader)`
  font-size: 16px;
  font-weight: 600;
  color: "#fff";
  background: "#242E42";
  padding: 16px 20px;
  
`