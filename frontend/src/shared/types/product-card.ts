import { Tag } from './tag.ts';

export type ProductCard = {
  id: string;
  title: string;
  quantity: number;
  isColored: boolean;
  tags: Tag[];
}
