export interface IProposalSettingModel {
    id: string;
    title: string;
    cover?: string | undefined;
    description?: string;
    discussion?:string;
    type?:string, 
    start?: string,
    end?:string
  }
  