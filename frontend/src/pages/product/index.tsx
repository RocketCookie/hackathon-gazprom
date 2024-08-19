import { ReactElement, useState } from 'react';
import { paths } from '../../shared/constants/paths.ts';
import styles from './index.module.css';
import { productCards } from '../../shared/mock/product-cards.ts';
import { ProductCard } from '../../shared/types/product-card.ts';
import { ContentHeader } from '../../widgets/content-header';
import { TitleCard } from '../../widgets/title-card';

const initialProductCards: ProductCard[] = productCards;

export const ProductPage = (): ReactElement => {
  const [cards] = useState<ProductCard[]>(initialProductCards);
  return (
    <>
      <ContentHeader
        title={ 'Продукты' }
        quantity={ 150 }
      />
      <section className={ styles.content_grid }>
        {
          cards.map(card => (
            <TitleCard
              id={ card.id }
              link={ `${ paths.PRODUCTS }/${ card.id }` }
              title={ card.title }
              descriptionQuantity={ card.quantity }
              descriptionTitle={ 'Команд' }
              isColored={ card.isColored }
              tags={ card.tags }
              hasGridGap={true}
            />
          ))
        }
      </section>
    </>
  );
};
