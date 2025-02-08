src/
├── features/                # Функциональные модули
│   ├── tasks/               # Управление задачами
│   │   ├── components/      # Компоненты задач
│   │   ├── slices/          # Redux slices
│   │   └── api/             # API для задач
│   ├── statistics/          # Статистика
│   │   ├── components/
│   │   └── utils/
├── app/                     # Общие компоненты приложения
│   ├── layout/              # Общий макет
│   ├── providers/           # Providers (Context, Redux)
│   └── routes/              # Роутинг
├── shared/                  # Общие утилиты и компоненты
│   ├── ui/                  # UI-компоненты
│   └── utils/               # Утилиты
├── types/                   # Типы TypeScript
└── tests/                   # Тесты

Технологии и Их Роли.

Основные технологии:
React :
Базовая библиотека для создания пользовательского интерфейса.
TypeScript :
Статическая типизация для повышения надёжности кода.
Redux :
Глобальное состояние приложения для управления задачами и статистикой.
React Router :
Навигация между страницами (например, /tasks, /statistics).
Context API :
Для передачи темы или аутентификации пользователя.
Fetch API / SWR / GraphQL (Apollo Client) :
Fetch API или SWR для загрузки данных о задачах.
Apollo Client для работы с GraphQL API (если используется сервер GraphQL).
Tailwind CSS :
Библиотека для быстрой верстки без написания CSS.
Code Splitting :
Разделение кода для улучшения производительности через React.lazy и Suspense.
Memoization :
Оптимизация рендеринга через React.memo, useMemo, useCallback.
Windowing :
Использование библиотеки react-window для оптимизации отображения длинных списков задач.
SSR/CSR/ISR :
SSR (Server-Side Rendering) для предварительной генерации страниц.
CSR (Client-Side Rendering) для динамического контента.
ISR (Incremental Static Regeneration) для обновления статических страниц.
Инструменты тестирования:
Jest :
Для юнит-тестов.
React Testing Library :
Для тестирования компонентов.
Cypress :
Для E2E-тестов.
Playwright :
Альтернатива Cypress для автоматизированных тестов.
Дополнительные инструменты:
Docker :
Для контейнеризации приложения.
Lighthouse :
Для анализа производительности и SEO.
Sentry :
Для мониторинга ошибок в production.
ESLint :
Для проверки качества кода.
Мониторинг и Анализ
Sentry : Интегрируйте Sentry для отслеживания ошибок.
Lighthouse : Проверяйте производительность через Chrome DevTools.