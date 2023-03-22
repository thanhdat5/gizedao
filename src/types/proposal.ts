export interface IProposal {
	id: number;
	avatar: string;
	status: string;
	name: string;
	title: string;
	totalVote: string;
	content: string;
	time: string;
	tag: string;
	votes?: any;
	informations: any;
}
export interface IProposalSettingModel {
	id: string;
	title: string;
	cover?: string | undefined;
	description?: string;
	discussion?: string;
	type?: string;
	start?: string;
	end?: string;
}
