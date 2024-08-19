import { MenuProps } from 'antd';
import { ProductCard } from '../../shared/types/product-card.ts';

export type LinksGridProps = {
  dropdownItems: MenuProps['items'];
  cards: ProductCard[];
  cardLink: string;
  descriptionTitle: string;
}
