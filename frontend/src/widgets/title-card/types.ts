import { Tag } from '../../shared/types/tag.ts';

export type TitleCardProps = {
  id: string;
  title: string;
  tags: Tag[];
  isColored?: boolean;
  descriptionQuantity: number;
  descriptionTitle: string;
}
