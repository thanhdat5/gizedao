export interface ICreateDaoModel {
  id: string;
  avatar?: string;
  cover: string;
  chain?: string;
  name: string;
  about: string;
  category: string;
  website?: string;
  publicUrl?: string;
  twitter?: string;
  discord?: string;
  github?: string;
  telegram?: string;
  instagram?: string;
  hideSpaceFromHomepage: boolean;
}
