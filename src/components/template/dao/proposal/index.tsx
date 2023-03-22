import { Box } from '@chakra-ui/react';
import GZNoProposal from 'components/molecules/common/no-proposal';
import GZProposalCore from 'components/organisms/common/proposals';
import GZHeaderProposal from 'components/organisms/dao/profile/header-proposal';

type GZProposalsProps = {
	data: any;
  onChangeOption?: any;
  option?: string
};

const GZProposals = ({ data = [], option, onChangeOption }: GZProposalsProps) => {
	// UI

	return (
		<Box>
			<Box p="16px 16px 0px">
				<GZHeaderProposal isAdd={false} onChangeOption={onChangeOption}/>
			</Box>
			<Box p="32px 24px 0px">
				{(data && data.length > 0) ? data.map((item: any) => (
					<GZProposalCore item={item} key={item.id} />
				)) : <GZNoProposal option={option}/>}
			</Box>
		</Box>
	);
};

export default GZProposals;
