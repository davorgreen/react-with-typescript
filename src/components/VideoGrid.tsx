import { formatDuration } from '../utils/formatDuration';

type VideoGridProps = {
	id: string;
	title: string;
	channel: {
		id: string;
		name: string;
		profileUrl: string;
	};
	views: number;
	postedAt: Date;
	duration: number;
	thumbnaulUrl: string;
	videoUrl: string;
};

const VIEW_FORMATTER = new Intl.NumberFormat(undefined, {
	notation: 'compact',
});

const VideoGrid: React.FC<VideoGridProps> = ({
	id,
	title,
	channel,
	views,
	postedAt,
	duration,
	thumbnailUrl,
	videoUrl,
}: VideoGridProps) => {
	return (
		<div className='flex flex-col gap-2 mt-6'>
			<a href={`/watch?v=${id}`} className='relative'>
				<img
					src={thumbnailUrl}
					alt='thumbnail'
					className='block w-96 h-full object-cover rounded-xl'
				/>
				<div className='absolute top-0 bg-secondary-dark text-secondary text-sm px-5 rounded-xl'>
					{formatDuration(duration)}
				</div>
			</a>
			<div className='flex gap-2'>
				<a href={`/@${channel.id}`}>
					<img
						src={channel.profileUrl}
						alt=''
						className='w-12 h-12 rounded-full'
					/>
				</a>
				<div className='flex flex-col'>
					<a href={`/watch?v=${id}`} className='font-bold'>
						{title}
					</a>
					<a
						href={`/watch?v=${id}`}
						className='font-bold text-secondary-text text-sm'>
						{channel.name}
					</a>
					<div className='text-secondary-text text-sm'>
						{VIEW_FORMATTER.format(views)} Views *
					</div>
				</div>
			</div>
		</div>
	);
};

export default VideoGrid;
