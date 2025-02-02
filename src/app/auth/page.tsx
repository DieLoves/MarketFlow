'use client';

import { Button } from '@/components/ui/button';
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export default function Auth() {
	return (
		<div>
			<h1 className='text-4xl md:text-3xl text-center mb-5 font-bold'>
				MarketFlow
			</h1>
			<Tabs defaultValue='Auth' className='w-[400px]'>
				<TabsList className='grid w-full grid-cols-2'>
					<TabsTrigger value='Auth'>Авторизация</TabsTrigger>
					<TabsTrigger value='Reg'>Регистрация</TabsTrigger>
				</TabsList>
				<TabsContent value='Auth'>
					<Card>
						<CardHeader>
							<CardTitle>Авторизация</CardTitle>
							<CardDescription>
								Make changes to your account here. Click save when you're done.
							</CardDescription>
						</CardHeader>
						<CardContent className='space-y-2'>
							<div className='space-y-1'>
								<Label htmlFor='name'>Username or Email</Label>
								<Input id='name' placeholder='Type your username or email...' />
							</div>
							<div className='space-y-1'>
								<Label htmlFor='username'>Password</Label>
								<Input
									id='username'
									type='password'
									placeholder='Type your password...'
								/>
							</div>
						</CardContent>
						<CardFooter>
							<Button>Авторизация</Button>
						</CardFooter>
					</Card>
				</TabsContent>
				<TabsContent value='Reg'>
					<Card>
						<CardHeader>
							<CardTitle>Регистрация</CardTitle>
							<CardDescription>
								Зарегистрируйте свой аккаунт. Тут все просто.
							</CardDescription>
						</CardHeader>
						<CardContent className='space-y-2'>
							<div className='space-y-1'>
								<Label htmlFor='name'>Username or Email</Label>
								<Input id='name' placeholder='Type your username or email...' />
							</div>
							<div className='space-y-1'>
								<Label htmlFor='current'>Current password</Label>
								<Input id='current' type='password' />
							</div>
							<div className='space-y-1'>
								<Label htmlFor='new'>New password</Label>
								<Input id='new' type='password' />
							</div>
						</CardContent>
						<CardFooter>
							<Button>Регистрация</Button>
						</CardFooter>
					</Card>
				</TabsContent>
			</Tabs>
		</div>
	);
}
