import Image from 'next/image';
import styles from './Header.module.scss';

export default function Header() {
  return (
    <header className={styles['header']}>
      <div className={styles['header__container-inner']}>
        <div className={styles['header__logo']}>
          <Image
            className={styles['header__logo-image']}
            src="/images/proboi-logo.webp"
            alt="Logo Image"
            width={141}
            height={36}
            priority
          />
        </div>

        <nav className={styles['header__navigation']}>
          <a className={styles['header__navigation-link']} href="#for_who">Для кого</a>
          <a className={styles['header__navigation-link']} href="#how_it_works">Как это работает</a>
          <a className={styles['header__navigation-link']} href="#ai_coefficient">AI-коэффициент</a>
          <a className={styles['header__navigation-link']} href="#catalog">Каталог бойцов</a>
          <a className={styles['header__navigation-link']} href="#why">Преимущества</a>
          <a className={styles['header__navigation-link']} href="#faq">ЧАВО</a>
        </nav>

        <button className={styles['header__navigation-button']}>Присоединиться</button>
      </div>
    </header>
  );
}