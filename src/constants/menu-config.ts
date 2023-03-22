import GZDiscussionIcon from 'components/atoms/icons/Discussion';
import GZGovernanceIcon from 'components/atoms/icons/Governance';
import GZHomeIcon from 'components/atoms/icons/Home';
import GZMembersIcon from 'components/atoms/icons/Member';
import GZOrganizationIcon from 'components/atoms/icons/Organization';
import GZProposalIcon from 'components/atoms/icons/Proposal';

export const MENU_CONFIG = [
	{
		iconLeft: GZHomeIcon(),
		label: 'Home',
		isLock: true,
	},
	{
		iconLeft: GZOrganizationIcon(),
		label: 'Organization',
		isLock: true,
	},
	{
		iconLeft: GZProposalIcon(),
		label: 'Proposals',
		isLock: true,
	},
	{
		iconLeft: GZMembersIcon(),
		label: 'Members',
		isLock: true,
	},
	{
		iconLeft: GZDiscussionIcon(),
		label: 'Discussion',		
		children: [
			{
				iconLeft: GZGovernanceIcon(),
				label: 'Governance',				
				children: []
			},
			{
				iconLeft: GZMembersIcon(),
				label: 'Members',				
				children: []
			}
		]
	},
	{
		iconLeft: GZGovernanceIcon(),
		label: 'Governance',
		isLock: false,
	}
];
