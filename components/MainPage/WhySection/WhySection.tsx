import { Title, Text } from '../../common';
import styles from './WhySection.module.scss';
import { whySectionContent } from './whySectionContent';

export default function WhySection() {
  return (
    <section className={styles['why-section']}>
      <div className={styles['why-section__header']}>
        <Title
          as={2}
          className={styles['why-section__title']}
        >
          {whySectionContent.title}
        </Title>
      </div>

      <div className={styles['why-section__grid']}>
        {whySectionContent.lists.map((list, index) => (
          <div
            key={index}
            className={styles['why-section__card']}
          >
            <div className={styles['why-section__image-placeholder']}></div>
            <div className={styles['why-section__content']}>
              <Text
                size='xl'
                weight='600'
                className={styles['why-section__list-title']}
              >
                {list.title}
              </Text>
              <ul className={styles['why-section__items']}>
                {list.items.map((item, itemIndex) => (
                  <li
                    key={itemIndex}
                    className={styles['why-section__item']}
                  >
                    <span className={styles['why-section__number']}>{itemIndex + 1}</span>
                    <Text
                      size='m'
                      color='secondary'
                    >
                      {item}
                    </Text>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}