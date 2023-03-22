import { Box, Button, Center, Flex, Text } from '@chakra-ui/react';

type GZNoProposalProps = {
	option?: string;
};

const GZNoProposal = ({ option }: GZNoProposalProps) => {
	return (
		<Flex
			bg="#4e5f83b2"
			paddingY="24px"
      flexDirection="column"
      gap="40px"
      alignItems="center"
		>
			{option === 'all' ? (
					<Text fontSize="20px" fontWeight="600" color="#fff">
						Oops, we can't find any results
					</Text>
			) : (
				<Text fontSize="16px" fontWeight="400" color="#fff">
					No {option} proposals
				</Text>
			)}

			{option === 'all' && (
					<Button padding="10px 14px" color="#222222">
						Create Proposal
					</Button>
			)}
		</Flex>
	);
};

export default GZNoProposal;
