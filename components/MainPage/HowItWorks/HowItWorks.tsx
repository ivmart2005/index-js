import { Title, Text } from '../../common';
import styles from './HowItWorks.module.scss';
import { useState } from 'react';
import { howItWorksContent } from './howItWorksContent';

export default function HowItWorks() {
  const [activerole, setActiverole] = useState('fighter');

  const currentContent = howItWorksContent.content[activerole as keyof typeof howItWorksContent.content];

  return (
    <section className={styles['how-it-works']}>
      <div className={styles['how-it-works__header']}>
        <Title
          as={3}
          className={styles['how-it-works__title']}
        >
          Как работают{' '}
          <span className={styles['how-it-works__title--pro']}>PRO</span>
          <span className={styles['how-it-works__title--boi']}>БОИ</span>
        </Title>
        <div className={styles['how-it-works__roles']}>
          {howItWorksContent.roles.map(role => (
            <button
              key={role.id}
              className={`${styles['how-it-works__role']} ${activerole === role.id ? styles['how-it-works__role--active'] : ''}`}
              onClick={() => setActiverole(role.id)}
            >
              <Text
                size='s'
                weight='600'
                color='primary'
                className={styles['how-it-works__role-text']}
              >
                {role.title}
              </Text>
            </button>
          ))}
        </div>
      </div>

      <div className={styles['how-it-works__cards']}>
        {currentContent.map((item, index) => (
          <div
            key={index}
            className={styles['how-it-works__card']}
          >
            <div className={styles['how-it-works__card-content']}>
              <div className={styles['how-it-works__card-step']}>{item.step}</div>
              <Title
                as={3}
                className={styles['how-it-works__card-title']}
              >
                {item.title}
              </Title>
              <Text
                size='m'
                color='secondary'
                className={styles['how-it-works__card-text']}
              >
                {item.description}
              </Text>
            </div>
            <div className={styles['how-it-works__card-image']}>
              {/* картинка */}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}