import { Title, Text } from '../../common';
import styles from './Hero.module.scss';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className={styles['hero']}>
      <Title as={1} className={styles['hero__title']}>
        <span className={styles['hero__title--pro']}>PRO</span>
        <span className={styles['hero__title--boi']}>БОИ</span>
        <span className={styles['hero__title-tagline']}>
          {' '} — цифровая площадка для боев без правил
        </span>
      </Title>
      <Text
        size='l'
        color='secondary'
        className={styles['hero__description']}
      >
        Мы соединяем бойцов и промоутеров на одной онлайн-платформе. Анкеты бойцов, умный
        AI-рейтинг, рекламный кабинет и прямые контракты с бойцами и промоутерами — всё, чтобы бой
        стал незабываемым как для зрителя, так и для промоутера.
      </Text>
    </section>
  );
}