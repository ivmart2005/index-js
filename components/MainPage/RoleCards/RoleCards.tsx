import { Title, Text } from '../../common';
import styles from './RoleCards.module.scss';

export default function RoleCards() {
  return (
    <section className={styles['role-cards']}>
      <div className={styles['role-cards__grid']}>
        <div className={styles['role-cards__card']}>
          <div className={styles['role-cards__image-placeholder']}></div>
          <Text
            size="xl"
            weight="600"
            className={styles['role-cards__title']}
          >
            Я — боец
          </Text>
          <Text
            className={styles['role-cards__text']}
            size="m"
            color="secondary"
          >
            Текст, текст
          </Text>
        </div>

        <div className={styles['role-cards__card']}>
          <div className={styles['role-cards__image-placeholder']}></div>
          <Text
            size="xl"
            weight="600"
            className={styles['role-cards__title']}
          >
            Я — промоутер
          </Text>
          <Text
            className={styles['role-cards__text']}
            size="m"
            color="secondary"
          >
            Текст, текст
          </Text>
        </div>

        <div className={styles['role-cards__card']}>
          <div className={styles['role-cards__image-placeholder']}></div>
          <Text
            size="xl"
            weight="600"
            className={styles['role-cards__title']}
          >
            Я — рекламодатель
          </Text>
          <Text
            className={styles['role-cards__text']}
            size="m"
            color="secondary"
          >
            Текст, текст
          </Text>
        </div>
      </div>

			<Text
				size="m"
				weight="400"
				color="secondary"
				className={styles['role-cards__bottom-text']}
			>
				Без комиссий на старте. Доступ к базе бойцов и организаторов в пару кликов.
			</Text>

    </section>
  );
}