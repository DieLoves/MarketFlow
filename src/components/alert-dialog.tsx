import {
	AlertDialog,
	AlertDialogAction,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
} from '@/components/ui/alert-dialog';
import { useEffect, useState } from 'react';

export function AlertDialogDemo() {
	const [isOpen, setIsOpen] = useState(false);

	useEffect(() => {
		const hasCookie = document.cookie.includes('demo_modal=true');
		if (!hasCookie) {
			setIsOpen(true);
		}
	}, []);

	const onSubmit = () => {
		document.cookie = 'demo_modal=true; max-age=2592000'; // 30 days
		setIsOpen(false);
	};

	if (!isOpen) return null;

	return (
		<AlertDialog defaultOpen={true}>
			<AlertDialogContent>
				<AlertDialogHeader>
					<AlertDialogTitle className='text-center font-bold text-3xl mb-5'>
						Демо режим
					</AlertDialogTitle>
					<AlertDialogDescription className='text-lg'>
						В данный момент, на сайте работают только страницы.
						<div className='flex flex-col items-center mt-4'>
							<a href='/auth' className='text-blue-500 hover:underline mb-2'>
								Авторизация
							</a>
							<a
								href='/dashboard'
								className='text-blue-500 hover:underline mb-2'
							>
								Панель управления (DashBoard)
							</a>
							<a href='/tasks' className='text-blue-500 hover:underline'>
								Задачи
							</a>
						</div>
					</AlertDialogDescription>
				</AlertDialogHeader>
				<AlertDialogFooter>
					<AlertDialogCancel>Закрыть</AlertDialogCancel>
					<AlertDialogAction onClick={onSubmit}>
						Закрыть и не показывать
					</AlertDialogAction>
				</AlertDialogFooter>
			</AlertDialogContent>
		</AlertDialog>
	);
}
