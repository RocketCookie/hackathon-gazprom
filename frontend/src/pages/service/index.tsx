import { ReactElement, useState } from 'react';
import styles from '../../entities/layout/index.module.css';
import { serviceCards } from '../../shared/mock/service-cards.ts';
import { ServiceCard } from '../../shared/types/service-card.ts';
import { ContentHeader } from '../../widgets/content-header';
import { TitleCard } from '../../widgets/title-card';

const initialServiceCards: ServiceCard[] = serviceCards;

export const ServicePage = (): ReactElement => {
  const [cards] = useState<ServiceCard[]>(initialServiceCards);
  return (
    <>
      <ContentHeader
        title={ 'Сервисы' }
        quantity={ 150 }
      />
      <section className={ styles.content_grid }>
        {
          cards.map(card => (
            <TitleCard
              id={ card.id }
              title={ card.title }
              descriptionQuantity={ card.quantity }
              descriptionTitle={ 'Команд' }
              isColored={ card.isColored }
              tags={ card.tags }
            />
          ))
        }
      </section>
    </>
  );
};
