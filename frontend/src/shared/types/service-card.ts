import { Tag } from './tag.ts';

export type ServiceCard = {
  id: string;
  title: string;
  quantity: number;
  isColored: boolean;
  tags: Tag[];
}
