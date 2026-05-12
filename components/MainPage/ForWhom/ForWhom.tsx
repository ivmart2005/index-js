import { Title, Text } from '../../common';
import styles from './ForWhom.module.scss';
import { useState } from 'react';
import { forWhomContent } from './forWhomContent';
import Image from 'next/image';

export default function ForWhom() {
  const [activeTab, setActiveTab] = useState('fighter');

  const handlePrev = () => {
    const currentIndex = forWhomContent.tabs.findIndex(tab => tab.id === activeTab);
    const prevIndex = currentIndex === 0 ? forWhomContent.tabs.length - 1 : currentIndex - 1;
    setActiveTab(forWhomContent.tabs[prevIndex].id);
  };

  const handleNext = () => {
    const currentIndex = forWhomContent.tabs.findIndex(tab => tab.id === activeTab);
    const nextIndex = currentIndex === forWhomContent.tabs.length - 1 ? 0 : currentIndex + 1;
    setActiveTab(forWhomContent.tabs[nextIndex].id);
  };

  return (
    <section className={styles['for-whom']}>
      <div className={styles['for-whom__title-container']}>
        <Title
          as={2}
          color='white'
          className={styles['for-whom__title']}
        >
          Для кого созданы{' '}
          <span className={styles['for-whom__title--pro']}>PRO</span>
          <span className={styles['for-whom__title--boi']}>БОИ</span>
        </Title>
        <Text
          size='m'
          color='white'
          className={styles['for-whom__description']}
        >
          Мы цифровизируем рынок боев без правил и делаем его прозрачнее для всех
          участников – работаем на рынке боев в РФ более _ лет и знаем процессы изнутри.
        </Text>
      </div>

      <div className={styles['for-whom__slider']}>
        <div className={styles['for-whom__slider-header']}>
          <Title
            as={3}
            color='white'
            className={styles['for-whom__slider-title']}
          >
            {forWhomContent.tabs.find(tab => tab.id === activeTab)?.title}
          </Title>
          <div className={styles['for-whom__slider-arrows']}>
            <button className={styles['for-whom__arrow']} onClick={handlePrev}>
              <Image src='/images/icons/arrow-left.svg' alt='Назад' width={20} height={20} />
            </button>
            <button className={styles['for-whom__arrow']} onClick={handleNext}>
              <Image src='/images/icons/arrow-right.svg' alt='Вперёд' width={20} height={20} />
            </button>
          </div>
        </div>

        <ul className={styles['for-whom__slider-list']}>
          {forWhomContent.content[activeTab as keyof typeof forWhomContent.content].map((item, index) => (
            <li
              key={index}
              className={styles['for-whom__slider-item']}
            >
              <span className={styles['for-whom__check']}>{index + 1}</span>
              <Text
                size='m'
                color='white'
                className={styles['for-whom__slider-text']}
              >
                {item}
              </Text>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}