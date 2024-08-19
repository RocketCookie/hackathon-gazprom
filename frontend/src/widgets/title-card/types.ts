import { Tag } from '../../shared/types/tag.ts';

export type TitleCardProps = {
  id: string;
  link: string;
  title: string;
  tags?: Tag[];
  isColored?: boolean;
  descriptionQuantity: number;
  descriptionTitle: string;
  hasGridGap?: boolean;
}
