import { Title, Text } from '../../common';
import styles from './CatalogSection.module.scss';

export default function CatalogSection() {
  return (
    <section className={styles['catalog-section']}>
      <div className={styles['catalog-section__header']}>
        <Title
          as={2}
					color='white'
          className={styles['catalog-section__title']}
        >
          Каталог бойцов
        </Title>
        <Title
					as={3}
					color='white'
					className={styles['catalog-section__subtitle']}
        >
          Который работает вместо десятков таблиц
        </Title>
        <Text
					size='xl'
					color='light'
					className={styles['catalog-section__description']}
				>
          Каждый боец представлен в виде карточки
        </Text>
      </div>

      <div className={styles['catalog-section__image']}>
        {/* большая картинка */}
      </div>

      <Text
				size='xl'
				color='light'
				className={styles['catalog-section__bottom-text']}
			>
        Для промоутера это быстрый способ просмотреть пул кандидатов, сравнить их по ключевым
        метрикам и выбрать лучших под конкретный турнир.
      </Text>
    </section>
  );
}