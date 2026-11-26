import { useEffect, useState } from 'react';
import { Flower, QuietRoom, TelegramIcon } from '../components/marks';
import { navigation, questions, requests, site, steps } from '../content';
import styles from './home.module.css';

function getSiteUrl() {
  const configured = import.meta.env.VITE_SITE_URL?.trim();
  if (!configured) return undefined;

  try {
    const url = new URL(configured);
    return url.protocol === 'https:' ? `${url.origin}/` : undefined;
  } catch {
    return undefined;
  }
}

const siteUrl = getSiteUrl();

export function meta() {
  return [
    { title: site.title },
    { name: 'description', content: site.description },
    { name: 'robots', content: 'index, follow' },
    { property: 'og:type', content: 'website' },
    { property: 'og:locale', content: 'ru_RU' },
    { property: 'og:title', content: site.title },
    { property: 'og:description', content: site.description },
    ...(siteUrl
      ? [
          { tagName: 'link', rel: 'canonical', href: siteUrl },
          { property: 'og:url', content: siteUrl },
        ]
      : []),
  ];
}

function TelegramLink({ light = false }: { light?: boolean }) {
  return (
    <a
      href={site.telegram}
      className={`${styles.button} ${light ? styles.buttonLight : ''}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      <TelegramIcon />
      Написать в Telegram
      <span className={styles.srOnly}> (откроется в новой вкладке)</span>
    </a>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!menuOpen) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMenuOpen(false);
        document.getElementById('menu-toggle')?.focus();
      }
    };
    window.addEventListener('keydown', closeOnEscape);
    return () => window.removeEventListener('keydown', closeOnEscape);
  }, [menuOpen]);

  const person = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: site.name,
    jobTitle: site.role,
    sameAs: [site.telegram],
    ...(siteUrl ? { url: siteUrl } : {}),
  };

  return (
    <>
      <script type="application/ld+json">{JSON.stringify(person)}</script>
      <a className={styles.skipLink} href="#main">
        К содержимому
      </a>
      <header className={styles.header}>
        <div className={styles.headerInner}>
          <a
            href="#"
            className={styles.brand}
            aria-label={`${site.name} — в начало страницы`}
          >
            <Flower className={styles.brandFlower} />
            <span>
              Екатерина Шамышева
              <span className={styles.brandSubtitle}>Гештальт-терапия</span>
            </span>
          </a>
          <button
            id="menu-toggle"
            type="button"
            className={styles.menuToggle}
            aria-expanded={menuOpen}
            aria-controls="navigation"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className={styles.menuLabel}>
              {menuOpen ? 'Закрыть' : 'Меню'}
            </span>
            <span className={styles.menuLines} data-open={menuOpen}>
              <span />
              <span />
            </span>
          </button>
          <nav
            id="navigation"
            className={`${styles.navigation} ${menuOpen ? styles.navigationOpen : ''}`}
            aria-label="Основная навигация"
          >
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              className={styles.navContact}
              href="#contact"
              onClick={() => setMenuOpen(false)}
            >
              Связаться
            </a>
          </nav>
        </div>
      </header>

      <main id="main">
        <section
          className={`${styles.container} ${styles.hero}`}
          aria-labelledby="hero-title"
        >
          <div className={styles.heroCopy}>
            <p className={styles.eyebrow}>
              Индивидуальные консультации для взрослых
            </p>
            <h1 id="hero-title">
              Быть собой.
              <br />
              <em>В своём темпе.</em>
            </h1>
            <p className={styles.heroLead}>
              Можно не оставаться в одиночку с тем, что сейчас непросто.
            </p>
            <p className={styles.heroIntro}>
              Я — Екатерина Шамышева, начинающий гештальт-терапевт. Приглашаю
              тебя на встречу с собой — через разговор и внимание к своим
              чувствам.
            </p>
            <TelegramLink />
            <p className={styles.heroNote}>Онлайн и очно в Москве · 50 минут</p>
          </div>
          <div className={styles.heroArt}>
            <QuietRoom className={styles.room} />
            <p className={styles.artCaption}>
              Место для тебя.
              <br />
              <span>И для того, что ты чувствуешь.</span>
            </p>
          </div>
          <a href="#about" className={styles.discover}>
            <span className={styles.discoverLine} />
            Познакомимся ближе
          </a>
        </section>

        <section
          id="about"
          className={styles.about}
          aria-labelledby="about-title"
        >
          <div className={`${styles.container} ${styles.aboutInner}`}>
            <div>
              <p className={styles.eyebrow}>Обо мне и подходе</p>
              <h2 id="about-title">
                Можно прийти
                <br />
                <em>без готовых ответов.</em>
              </h2>
              <Flower className={styles.aboutFlower} />
            </div>
            <div className={styles.aboutCopy}>
              <p className={styles.largeText}>
                Начать можно с того, что волнует тебя сейчас.
              </p>
              <p>
                Я начинаю практику в гештальт-подходе и работаю индивидуально со
                взрослыми. На встречах мы обращаем внимание на чувства,
                потребности и отношения — и исследуем, как ты проживаешь свой
                опыт.
              </p>
              <p>
                Не нужно подбирать «правильные» слова или заранее знать, что
                делать дальше. Можно говорить о том, что трудно, замечать важное
                и постепенно знакомиться с собой.
              </p>
              <div className={styles.aboutSignature}>
                <span className={styles.signatureLine} />
                <span>{site.name}</span>
              </div>
            </div>
          </div>
        </section>

        <section
          id="requests"
          className={`${styles.container} ${styles.requestsSection}`}
          aria-labelledby="requests-title"
        >
          <div className={styles.sectionHeading}>
            <div>
              <p className={styles.eyebrow}>С чем можно прийти</p>
              <h2 id="requests-title">
                Что сейчас
                <br />
                <em>занимает твои мысли?</em>
              </h2>
            </div>
            <p>
              Для встречи не нужен «достаточно серьёзный» повод. Важно то, как
              тебе с этим.
            </p>
          </div>
          <div className={styles.requestsGrid}>
            {requests.map((request) => (
              <article key={request.title} className={styles.request}>
                <span className={styles.requestMark} aria-hidden="true" />
                <h3>{request.title}</h3>
                <p>{request.description}</p>
                <span className={styles.requestNote}>{request.note}</span>
              </article>
            ))}
          </div>
          <details className={styles.boundaries}>
            <summary>
              Важно о границах моей практики
              <span className={styles.plus} aria-hidden="true" />
            </summary>
            <div className={styles.boundariesContent}>
              <p>
                Я работаю только индивидуально со взрослыми. Не провожу
                консультации для детей, подростков, пар и семей. Запросы об
                отношениях рассматриваю в индивидуальной работе со взрослым
                клиентом.
              </p>
              <p>
                Не работаю с расстройствами пищевого поведения (РПП),
                пограничным расстройством личности (ПРЛ), посттравматическим
                стрессовым расстройством (ПТСР), химическими зависимостями,
                тяжёлыми психиатрическими диагнозами, сексуальным насилием и с
                тяжелобольными.
              </p>
              <p>
                Если сомневаешься, подходит ли твой запрос, можно уточнить это в
                Telegram до записи.
              </p>
            </div>
          </details>
        </section>

        <section
          id="sessions"
          className={styles.sessionsSection}
          aria-labelledby="sessions-title"
        >
          <div className={styles.container}>
            <div className={styles.sessionHeading}>
              <p className={styles.eyebrow}>Формат и стоимость</p>
              <h2 id="sessions-title">
                Время, посвящённое <em>тебе.</em>
              </h2>
              <p>
                Каждая консультация длится 50 минут. Выбери формат, который тебе
                подходит.
              </p>
            </div>
            <div className={styles.sessionGrid}>
              <article className={`${styles.sessionCard} ${styles.onlineCard}`}>
                <div className={styles.sessionTop}>
                  <span className={styles.sessionTag}>
                    Из своего пространства
                  </span>
                  <span className={styles.duration}>50 минут</span>
                </div>
                <h3>Онлайн</h3>
                <p>
                  Встреча по видеосвязи. Тебе понадобятся стабильный интернет и
                  возможность побыть наедине.
                </p>
                <div className={styles.price}>
                  500 <span>₽</span>
                  <span className={styles.priceUnit}>/ встреча</span>
                </div>
                <a
                  href={site.telegram}
                  className={styles.sessionLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Договориться об онлайн-встрече
                  <span className={styles.srOnly}>
                    {' '}
                    (Telegram, новая вкладка)
                  </span>
                </a>
              </article>
              <article className={styles.sessionCard}>
                <div className={styles.sessionTop}>
                  <span className={styles.sessionTag}>В центре Москвы</span>
                  <span className={styles.duration}>50 минут</span>
                </div>
                <h3>Очно</h3>
                <p>
                  Личная встреча в кабинете. Место и время первой консультации
                  согласуем в Telegram.
                </p>
                <div className={styles.price}>
                  700 <span>₽</span>
                  <span className={styles.priceUnit}>/ встреча</span>
                </div>
                <p className={styles.rentNote}>
                  Плюс оплата кабинета · место по договорённости
                </p>
                <a
                  href={site.telegram}
                  className={styles.sessionLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Договориться об очной встрече
                  <span className={styles.srOnly}>
                    {' '}
                    (Telegram, новая вкладка)
                  </span>
                </a>
              </article>
            </div>
          </div>
        </section>

        <section
          className={`${styles.container} ${styles.firstSession}`}
          aria-labelledby="first-title"
        >
          <div className={styles.firstCopy}>
            <p className={styles.eyebrow}>Первый шаг</p>
            <h2 id="first-title">
              Начнём
              <br />
              <em>со знакомства.</em>
            </h2>
            <p>Не обязательно сначала собраться с мыслями, чтобы написать.</p>
            <span className={styles.handLine} aria-hidden="true" />
          </div>
          <ol className={styles.steps}>
            {steps.map((step, index) => (
              <li key={step.title}>
                <span className={styles.stepNumber} aria-hidden="true">
                  {index + 1}
                </span>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section
          className={`${styles.container} ${styles.faqSection}`}
          aria-labelledby="faq-title"
        >
          <div>
            <p className={styles.eyebrow}>Перед встречей</p>
            <h2 id="faq-title">
              Возможно,
              <br />
              <em>ты думаешь об этом.</em>
            </h2>
          </div>
          <div className={styles.questions}>
            {questions.map((item) => (
              <details key={item.question} className={styles.question}>
                <summary>
                  {item.question}
                  <span className={styles.plus} aria-hidden="true" />
                </summary>
                <p>{item.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section
          id="contact"
          className={styles.contact}
          aria-labelledby="contact-title"
        >
          <div className={`${styles.container} ${styles.contactInner}`}>
            <Flower className={styles.contactFlower} />
            <p className={styles.eyebrow}>Когда почувствуешь, что пора</p>
            <h2 id="contact-title">
              Давай начнём
              <br />
              <em>с разговора.</em>
            </h2>
            <p>
              Напиши мне в Telegram. Обсудим твой запрос
              <br className={styles.desktopBreak} /> и договоримся о первой
              встрече.
            </p>
            <TelegramLink light />
            <a
              href={site.telegram}
              className={styles.telegramHandle}
              target="_blank"
              rel="noopener noreferrer"
            >
              {site.telegramHandle}
              <span className={styles.srOnly}> (Telegram, новая вкладка)</span>
            </a>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <div className={`${styles.container} ${styles.footerInner}`}>
          <span>
            {site.name}
            <span className={styles.footerRole}>{site.role}</span>
          </span>
          <span>Индивидуально · Для взрослых</span>
          <a href="#">В начало страницы</a>
        </div>
      </footer>
    </>
  );
}
