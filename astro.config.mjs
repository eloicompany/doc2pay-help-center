// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
	site: 'https://doc2pay-help-center.pages.dev',
	integrations: [
		starlight({
			title: 'Doc2Pay Docs',
			locales: {
				root: {
					label: 'Українська',
					lang: 'uk',
				},
			},
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/eloicompany/doc2pay' },
			],
			sidebar: [
				{
					label: 'Початок роботи',
					items: [
						{ label: 'Вступ', slug: 'getting-started/introduction' },
						{ label: 'Реєстрація', slug: 'getting-started/registration' },
						{ label: 'Вхід в систему', slug: 'getting-started/login' },
						{ label: 'Головна панель', slug: 'getting-started/dashboard' },
					],
				},
				{
					label: 'Компанії',
					items: [
						{ label: 'Мої компанії', slug: 'guides/companies' },
						{ label: 'Групи компаній', slug: 'guides/groups' },
					],
				},
				{
					label: 'Фінанси',
					items: [
						{ label: 'Платежі', slug: 'guides/payments' },
						{ label: 'Податки', slug: 'guides/taxes' },
						{ label: 'Зарплати', slug: 'guides/salaries' },
						{ label: 'Регулярні платежі', slug: 'guides/recurring-payments' },
						{ label: 'Баланс', slug: 'guides/balance' },
					],
				},
				{
					label: 'Аналітика та планування',
					items: [
						{ label: 'Динаміка', slug: 'guides/dynamics' },
						{ label: 'Аналітика', slug: 'guides/analytics' },
						{ label: 'Календар', slug: 'guides/calendar' },
						{ label: 'Завдання', slug: 'guides/tasks' },
					],
				},
				{
					label: 'Комунікації',
					items: [
						{ label: 'Чати', slug: 'guides/chats' },
						{ label: 'Пошта', slug: 'guides/email' },
						{ label: 'Telegram', slug: 'guides/telegram' },
					],
				},
				{
					label: 'Інтеграції',
					items: [
						{ label: 'ПриватБанк API', slug: 'integrations/privatbank' },
						{ label: 'Інші інтеграції', slug: 'integrations/other' },
					],
				},
				{
					label: 'Акаунт',
					items: [
						{ label: 'Налаштування', slug: 'account/settings' },
						{ label: 'Підписка та тарифи', slug: 'account/subscription' },
						{ label: 'Команда', slug: 'account/team' },
					],
				},
				{
					label: 'Довідник',
					items: [
						{ label: 'FAQ', slug: 'reference/faq' },
						{ label: 'Формати файлів', slug: 'reference/file-formats' },
						{ label: 'Статуси платежів', slug: 'reference/payment-statuses' },
						{ label: 'Ролі та доступи', slug: 'reference/roles' },
						{ label: 'Історія змін', slug: 'reference/changelog' },
					],
				},
			],
		}),
	],
});
