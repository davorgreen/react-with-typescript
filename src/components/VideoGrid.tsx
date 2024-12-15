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

const VideoGrid: React.FC = ({
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
					{duration}
				</div>
			</a>
		</div>
	);
};

export default VideoGrid;
