import company from '../assets/company_keep.jpg';

const HeroBanner = () => {
	return (
		<div className='bg-gray-900 text-white'>
			<img src={company} alt='' className='h-[80%] w-full' />
			<div className='text-center uppercase'>
				<span>Title</span>
				<span> | </span>
				<span>2023</span>
			</div>
			<p>
				Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab,
				cupiditate?
			</p>
		</div>
	);
};

export default HeroBanner;
