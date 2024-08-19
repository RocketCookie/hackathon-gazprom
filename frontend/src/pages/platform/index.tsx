import { ReactElement, useState } from 'react';
import styles from './index.module.css';
import { platformCards } from '../../shared/mock/platform-cards.ts';
import { PlatformCard } from '../../shared/types/platform-card.ts';
import { ImageCard } from '../../widgets/image-card';
import { ContentHeader } from '../../widgets/content-header';

const initialPlatformCards: PlatformCard[] = platformCards;

export const PlatformPage = (): ReactElement => {
  const [cards] = useState<PlatformCard[]>(initialPlatformCards);
  return (
    <>
      <ContentHeader
        title={ 'Платформы' }
        quantity={ 150 }
      />
      <section className={ styles.content_grid }>
        {
          cards.map(card => (
            <ImageCard
              descriptionQuantity={ card.quantity }
              descriptionTitle={ 'Продуктов' }
              image={ card.image }
              id={ card.id }
              key={ card.id }
            />
          ))
        }
      </section>
    </>
  );
};
