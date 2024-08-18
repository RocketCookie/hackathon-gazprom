import { Tag } from './tag.ts';

export type TeamCard = {
  id: string;
  title: string;
  quantity: number;
  isColored: boolean;
  tags: Tag[];
}
