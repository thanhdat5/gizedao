import GZDetailProposal from 'components/template/dao/proposal/detail';
import { DATA_PROPOSALS } from 'constants/layout';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { IProposal } from 'types/proposal';


const GZProposalDetailPage = () => {
	const { proposalId } = useParams();
	const [itemDetail, setItemDetail] = useState<IProposal>()
	
	useEffect(() => {
		// call api later

		if(proposalId) {
			const itemDetail = DATA_PROPOSALS.find((proposal: any) => proposal.id === Number(proposalId))
			setItemDetail(itemDetail);
		}

	}, [proposalId])



	return <GZDetailProposal item={itemDetail}/>;
};

export default GZProposalDetailPage;
