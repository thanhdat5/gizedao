import {
  Avatar,
	Box,
	Card,
	CardBody,
	CardHeader,
	Text,
	WrapItem
} from '@chakra-ui/react';
import styled from 'styled-components';

type GZListVoteProps = {
	voteData: any;
};

const GZListVote = ({ voteData }: GZListVoteProps) => {
	return (
		<StyledCard>
			<CardHeader p="30px" display="flex" gap="6px">
				<Text color="#fff" fontWeight="600" fontSize="16px">
					Votes
				</Text>
				<Text color="#94A7C6" fontWeight="400" fontSize="17px">
					{voteData?.length}
				</Text>
			</CardHeader>
			<CardBody p="0 30px" fontSize="15px" fontWeight="400" color="#BFCFE8">
				{voteData?.map((vote: any) => (
					<Box padding="10px" display="flex" justifyContent="space-between" key={vote.id}>
						<WrapItem alignItems="center" gap="20px">
							<Avatar
								size="xs"
								name={vote.name}
								src={vote.avatar}
							/>
               <Text>{vote.name}</Text>
						</WrapItem>
            <Text>{vote.option}</Text>
					</Box>
				))}
			</CardBody>
		</StyledCard>
	);
};

export default GZListVote;

const StyledCard = styled(Card)`
	border: 1px solid rgba(78, 95, 131, 0.7) !important;
	margin-bottom: 20px;
	border-radius: 10px !important;
	box-shadow: 0px 4px 4px rgba(191, 207, 232, 0.04) !important;
	transition: all 0.2s;
	background-color: #1b2332 !important;
  padding-bottom: 30px;
`;
