import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useRouteError,
} from 'react-router';
import type { ReactNode } from 'react';
import { site } from './content';
import styles from './root.module.css';
import './styles.css';

export function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="ru">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#f7f6f0" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}

export function ErrorBoundary() {
  const error = useRouteError();
  const notFound = isRouteErrorResponse(error) && error.status === 404;

  return (
    <main className={styles.error}>
      <p>{site.name}</p>
      <h1>
        {notFound ? 'Здесь пока ничего нет' : 'Не удалось открыть страницу'}
      </h1>
      <p>
        {notFound
          ? 'Вернись на главную — там всё о консультациях и записи.'
          : 'Попробуй обновить страницу или напиши мне в Telegram.'}
      </p>
      <a href="/">На главную</a>
      <a href={site.telegram}>Написать в Telegram</a>
    </main>
  );
}
