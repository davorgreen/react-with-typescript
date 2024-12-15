import { useState } from 'react';
import './App.css';
import Category from './components/Category';
import { categories } from './data/home';
import Header from './pages/Header';

const App: React.FC = () => {
	const [selectCategory, setSelecetCategory] = useState<string>(
		categories[0]
	);
	return (
		<div className='max-h-screen flex flex-col'>
			<Header />
			<div className='grid grid-cols-[auto,1fr] flex-grow-1 overflow-auto'>
				<div>Sidebar</div>
				<div className='overflow-x-hidden px-8 pb-4'>
					<div className='sticky top-0 bg-white z-10 pb-4'>
						<Category
							categories={categories}
							selectCategory={selectCategory}
							onSelect={setSelecetCategory}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default App;
