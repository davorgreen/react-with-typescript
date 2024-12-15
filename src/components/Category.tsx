import { videos } from '../data/home';
import Button from './Button';
import VideoGrid from './VideoGrid';

type CategoryProps = {
	categories: string[];
	selectCategory: string;
	onSelect: (category: string) => void;
};

const Category: React.FC = ({
	categories,
	selectCategory,
	onSelect,
}: CategoryProps) => {
	return (
		<div className='relative overflow-x-hidden'>
			<div className='flex whitespace-nowrap gap-3 transition-transform w-max'>
				{categories.map((cat, i) => (
					<Button
						key={i}
						onClick={() => onSelect(cat)}
						className={`${
							selectCategory === cat
								? 'py-1 px-3 whitespace-nowrap rounded-lg bg-secondary-dark text-white'
								: 'py-1 px-3 whitespace-nowrap rounded-lg bg-slate-400 text-white'
						}`}>
						{cat}
					</Button>
				))}
			</div>
			<div className='grid gap-4 grid-cols-4'>
				{videos.map((vid, i) => {
					return <VideoGrid key={vid.id} {...vid} />;
				})}
			</div>
		</div>
	);
};

export default Category;
