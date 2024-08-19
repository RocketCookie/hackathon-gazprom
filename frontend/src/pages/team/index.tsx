import { ReactElement, useState } from 'react';
import { paths } from '../../shared/constants/paths.ts';
import styles from './index.module.css';
import { teamCards } from '../../shared/mock/team-cards.ts';
import { TeamCard } from '../../shared/types/team-card.ts';
import { ContentHeader } from '../../widgets/content-header';
import { TitleCard } from '../../widgets/title-card';

const initialTeamCards: TeamCard[] = teamCards;

export const TeamPage = (): ReactElement => {
  const [cards] = useState<TeamCard[]>(initialTeamCards);
  return (
    <>
      <ContentHeader
        title={ 'Команды' }
        quantity={ 150 }
      />
      <section className={ styles.content_grid }>
        {
          cards.map(card => (
            <TitleCard
              id={ card.id }
              link={ `${ paths.TEAMS }/${ card.id }` }
              title={ card.title }
              descriptionQuantity={ card.quantity }
              descriptionTitle={ 'Сотрудников' }
              isColored={ card.isColored }
              tags={ card.tags }
              hasGridGap={ true }
            />
          ))
        }
      </section>
    </>
  );
};
