import GZIconDiscussion from 'components/atoms/icons/Discussion';
import GZIconGovernance from 'components/atoms/icons/Governance';
import GZIconHome from 'components/atoms/icons/Home';
import GZIconMembers from 'components/atoms/icons/Member';
import GZIconOrganization from 'components/atoms/icons/Organization';
import GZIconProposal from 'components/atoms/icons/Proposal';
import { APP_ROUTE } from '../../../../constants/route';

export interface IMenuConfig {
	iconLeft: JSX.Element;
	label: string;
	isLock?: boolean;
	link?: string;
	children?: IMenuConfig[];
}

export const MENU_CONFIG: IMenuConfig[] = [
	{
		iconLeft: <GZIconHome />,
		label: 'Home',
		link: "/",
		isLock: true,
	},
	{
		iconLeft: <GZIconOrganization />,
		label: 'Organization',
		isLock: true,
	},
	{
		iconLeft: <GZIconProposal />,
		label: 'Proposals',
		link: `/${APP_ROUTE.DAO_PROPOSAL_SETTING}`,
		isLock: true,
	},
	{
		iconLeft: <GZIconMembers />,
		label: 'Members',
		link: "/members",
		isLock: true,
	},
	{
		iconLeft: <GZIconDiscussion />,
		label: 'Discussion',
		children: [
			{
				iconLeft: <GZIconGovernance />,
				label: 'Governance',
				children: []
			},
			{
				iconLeft: <GZIconMembers />,
				label: 'Members',
				children: []
			}
		]
	},
	{
		iconLeft: <GZIconGovernance />,
		label: 'Governance',
		isLock: false,
	}
];
