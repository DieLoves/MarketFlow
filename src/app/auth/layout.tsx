import { ChangeTheme } from '@/components/ui/change-theme';
import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Auth',
};

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<div>
			<ChangeTheme />
			<div className='flex items-center justify-center h-screen'>
				<div className='w-full max-w-md p-4 rounded-lg shadow-lg'>
					{children}
				</div>
			</div>
		</div>
	);
}
