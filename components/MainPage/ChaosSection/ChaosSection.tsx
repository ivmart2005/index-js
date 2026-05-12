import { Title, Text } from '../../common';
import styles from './ChaosSection.module.scss';

export default function ChaosSection() {
  return (
    <section className={styles['chaos']}>
      <div className={styles['chaos__header']}>
        <Title
					as={3}
					className={styles['chaos__problem']}
				>
          ХАОС В МАТЧМЕЙКИНГЕ
        </Title>
        <Title
					as={3}
					className={styles['chaos__title']}
				>
          Мы превращаем в понятный<br/>
          цифровой процесс
        </Title>
      </div>

      <div className={styles['chaos__grid']}>
        <div className={styles['chaos__problems']}>
          <Text
            size='m'
            weight='400'
            color='secondary'
            className={styles['chaos__problems-title']}
          >
            Проблемы рынка сегодня:
          </Text>
          <ul className={styles['chaos__list']}>
            {[
              'Поиск бойцов через знакомых, чаты и ручные списки.',
              'Сложно быстро оценить реальный уровень бойца.',
              'Высокий риск фейковых анкет и завышенной статистики.'
            ].map((text, index) => (
              <li key={index} className={styles['chaos__list-item']}>
                <span className={styles['chaos__number']}>{index + 1}</span>
                <Text
									size='m'
									color='secondary'
									className={styles['chaos__text']}
								>
                  {text}
                </Text>
              </li>
            ))}
          </ul>
        </div>

				<div className={styles['chaos__solution']}>
					<div className={styles['chaos__solution-header']}>
						<Title
							as={3}
							className={styles['chaos__solution-title']}
						>
							Решение <span className={styles['chaos__solution-accent']}>PROБОИ</span>
						</Title>
					</div>
					<div className={styles['chaos__solution-grid']}>
						{[
							'Единая онлайн-платформа бойцов и промоутеров',
							'ИИ, который помогает быстро понять перспективность бойца',
							'Структурированные анкеты с ключевыми параметрами',
							'Строгая модерация анкет и бан фейковых аккаунтов'
						].map((text, index) => (
							<div key={index} className={styles['chaos__solution-item']}>
								<div className={styles['chaos__solution-icon']}></div>
								<Text
									size='m'
									color='secondary'
									className={styles['chaos__solution-text']}
								>
									{text}
								</Text>
							</div>
						))}
					</div>
				</div>
      </div>
    </section>
  );
}