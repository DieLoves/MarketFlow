import { promises as fs } from 'fs';
import Image from 'next/image';
import path from 'path';
import { z } from 'zod';

import { columns } from '@/app/tasks/components/columns';
import { DataTable } from '@/app/tasks/components/data-table';
import { UserNav } from '@/app/tasks/components/user-nav';
import { taskSchema } from './data/schema';

// Simulate a database read for tasks.
async function getTasks() {
	const data = await fs.readFile(
		path.join(process.cwd(), './src/app/tasks/data/tasks.json')
	);

	const tasks = JSON.parse(data.toString());

	return z.array(taskSchema).parse(tasks);
}

export default async function TaskPage() {
	const tasks = await getTasks();

	return (
		<>
			<div className='md:hidden'>
				<Image
					src='/examples/tasks-light.png'
					width={1280}
					height={998}
					alt='Playground'
					className='block dark:hidden'
				/>
				<Image
					src='/examples/tasks-dark.png'
					width={1280}
					height={998}
					alt='Playground'
					className='hidden dark:block'
				/>
			</div>
			<div className='hidden h-full flex-1 flex-col space-y-8 p-8 md:flex'>
				<div className='flex items-center justify-between space-y-2'>
					<div>
						<h2 className='text-2xl font-bold tracking-tight'>Задачи</h2>
						<p className='text-muted-foreground'>Задачи на ваш месяц.</p>
					</div>
					<div className='flex items-center space-x-2'>
						<UserNav />
					</div>
				</div>
				<DataTable data={tasks} columns={columns} />
			</div>
		</>
	);
}
