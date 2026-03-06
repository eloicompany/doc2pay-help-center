# Doc2Pay Help Center

Офіційна документація платформи [Doc2Pay](https://doc2pay.com.ua) — хмарного сервісу для бухгалтерів та ФОПів в Україні.

## Технології

- [Astro](https://astro.build/) + [Starlight](https://starlight.astro.build/) — генератор документації
- [Pagefind](https://pagefind.app/) — пошук по документації
- [Cloudflare Pages](https://pages.cloudflare.com/) — хостинг

## Розробка

```bash
npm install
npm run dev
```

Сайт буде доступний на `http://localhost:4321/`.

## Білд

```bash
npm run build
npm run preview
```

## Деплой

Cloudflare Pages автоматично деплоїть при push в `main`:

- **Framework preset:** Astro
- **Build command:** `npm run build`
- **Build output directory:** `dist`

## Структура документації

```
src/content/docs/
├── index.mdx                  # Головна сторінка
├── getting-started/           # Початок роботи
│   ├── introduction.md
│   ├── registration.mdx
│   ├── login.md
│   └── dashboard.md
├── guides/                    # Гайди по функціях
│   ├── companies.md
│   ├── groups.md
│   ├── payments.md
│   ├── taxes.md
│   ├── salaries.md
│   ├── recurring-payments.md
│   ├── balance.md
│   ├── dynamics.md
│   ├── analytics.md
│   ├── calendar.md
│   ├── tasks.md
│   ├── chats.md
│   ├── email.md
│   └── telegram.md
├── integrations/              # Інтеграції
│   ├── privatbank.md
│   └── other.md
├── account/                   # Акаунт
│   ├── settings.md
│   ├── subscription.md
│   └── team.md
└── reference/                 # Довідник
    ├── faq.md
    ├── file-formats.md
    ├── payment-statuses.md
    ├── roles.md
    └── changelog.md
```
