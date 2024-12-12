//component
import Button from '../components/Button';
//logo
import logo from '../images/logo.png';
//icons
import { IoMenu } from 'react-icons/io5';
import { MdOutlineFileUpload } from 'react-icons/md';
import { FaRegBell, FaRegUser, FaSearch } from 'react-icons/fa';
import { CiMicrophoneOn } from 'react-icons/ci';
import { useState } from 'react';

const Header: React.FC = () => {
	const [showSearch, setShowSearch] = useState<boolean>(false);
	return (
		<div className='flex justify-between gap-10 lg:gap-20 pt-2 mb-6 mx-4'>
			<div
				className={`flex gap-4 items-center flex-shrink-0 ${
					showSearch ? 'hidden' : 'flex'
				}`}>
				<Button className='p-2 rounded-[50%] hover:bg-secondary-hover'>
					<IoMenu size={50} />
				</Button>
				<a href=''>
					<img src={logo} alt='logo' className='h-10' />
				</a>
			</div>
			<form
				className={`md:flex gap-4 flex-grow justify-center items-center ${
					showSearch ? 'flex' : 'hidden'
				}`}>
				<div className='flex flex-grow max-w-[600px]'>
					<input
						type='search'
						placeholder='Search...'
						className='rounded-l-full border border-secondary-border shadow-inner shadow-secondary py-1 px-4 text-lg w-full focus:border-green-500 outline-none'
					/>
					<Button className='flex-shrink-0 py-2 px-4 rounded-r-full border-secondary-border border border-1-0 hover:bg-secondary-hover'>
						<FaSearch size={30} />
					</Button>
				</div>
				<Button
					type='button'
					className='flex-shrink-0 p-2 rounded-[50%] hover:bg-secondary-hover'>
					<CiMicrophoneOn size={40} />
				</Button>
			</form>
			<div
				className={`items-center flex-shrink-0 gap-2 md:gap-2 ${
					showSearch ? 'hidden' : 'flex'
				}`}>
				<Button className='md:hidden p-3 rounded-[50%] hover:bg-secondary-hover'>
					<FaSearch size={35} />
				</Button>
				<Button className='p-1 rounded-[50%] hover:bg-secondary-hover'>
					<MdOutlineFileUpload size={50} />
				</Button>
				<Button className='p-2 rounded-[50%] hover:bg-secondary-hover'>
					<FaRegBell size={40} />
				</Button>
				<Button className='p-2 rounded-[50%] hover:bg-secondary-hover'>
					<FaRegUser size={40} />
				</Button>
			</div>
		</div>
	);
};

export default Header;
