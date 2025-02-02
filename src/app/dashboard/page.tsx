'use client';

import { Component } from '@/components/ui/charts/line-chart';
import { RadarChartComponent } from '@/components/ui/charts/radar-chart';
import { RadialCharts } from '@/components/ui/charts/radial-chart';
import { RadialChartTwo } from '@/components/ui/charts/radiat-two';
import { PlaceholdersAndVanishInput } from '@/components/ui/placeholders-and-vanish-input';

export default function Page() {
	const placeholders = [
		`Какой заработок был у меня в ${new Date().getFullYear() - 1} году?`,
		'Какие товары были самыми популярными в прошлом месяце?',
		'Сколько клиентов было в прошлом месяце?',
		'Достижения компании за последний год',
		'Покажи наши самые успешные сделки за последний год',
	];

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		console.log(e.target.value);
	};
	const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		console.log('submitted');
	};

	return (
		<div>
			<h1 className='text-4xl md:text-3xl text-center mb-3'>
				Спросите что-нибудь, и мы найдем ответ с помощью{' '}
				<strong>MarketFlow</strong>
			</h1>
			<div className='flex justify-center items-center mb-5 px-5 md:w-full'>
				<PlaceholdersAndVanishInput
					placeholders={placeholders}
					onChange={handleChange}
					onSubmit={onSubmit}
				/>
			</div>
			<h1 className='text-5xl md:text-4xl text-center mb-3'>
				<strong>Статистика</strong>
			</h1>
			<div className='flex flex-1 flex-col gap-4 p-4 pt-0'>
				<div className='grid auto-rows-min gap-4 md:grid-cols-3'>
					<div className='aspect-video rounded-xl bg-muted/50 '>
						<h1 className='text-4xl text-center mt-5'>По продажам</h1>
						<RadialCharts />
					</div>
					<div className='aspect-video rounded-xl bg-muted/50'>
						<h1 className='text-4xl text-center mt-5'>По клиентам</h1>
						<RadialChartTwo />
					</div>
					<div className='aspect-video rounded-xl bg-muted/50'>
						<h1 className='text-4xl text-center mt-5'>По обороту</h1>
						<RadarChartComponent />
					</div>
				</div>
				<div className='min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min'>
					<h1 className='text-4xl text-center my-5'>По магазинам</h1>
					<Component />
				</div>
			</div>
		</div>
	);
}
