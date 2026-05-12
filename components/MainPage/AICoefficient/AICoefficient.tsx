import { Title, Text } from '../../common';
import styles from './AICoefficient.module.scss';
import { aiCoefficientContent } from './AICoefficientContent';

export default function AICoefficient() {
  return (
    <section className={styles['ai-coefficient']}>
      <div className={styles['ai-coefficient__header']}>
        <div className={styles['ai-coefficient__title-container']}>
          <Title as={2} color='white' className={styles['ai-coefficient__title']}>
            {aiCoefficientContent.title}
            <span className={styles['ai-coefficient__title-accent']}>
              {aiCoefficientContent.titleAccent}
            </span>
          </Title>
          <Text
            size='l'
            color='light'
            className={styles['ai-coefficient__subtitle']}
          >
            {aiCoefficientContent.subtitle}
          </Text>
        </div>
      </div>

      <div className={styles['ai-coefficient__cards']}>
        {aiCoefficientContent.cards.map((card, index) => (
          <div key={index} className={styles['ai-coefficient__card']}>
            <div className={styles['ai-coefficient__card-icon']}></div>
            <Text
              size='xl'
              weight='600'
              className={styles['ai-coefficient__card-title']}
            >
              {card.title}
            </Text>
            <Text
              size='m'
              className={styles['ai-coefficient__card-text']}
            >
              {card.description}
            </Text>
          </div>
        ))}
      </div>

      <Text
        size='s'
        color='light'
        className={styles['ai-coefficient__bottom-text']}
      >
        {aiCoefficientContent.bottomText}
      </Text>
    </section>
  );
}