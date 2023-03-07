import React from 'react';

const ButtonsConnect = () => {
	return (
		<div className='w-full flex justify-around bg-gray-900 text-white py-6 px-4 space-x-5'>
			<button className='border p-4 rounded-3xl border-white w-full hover:bg-green-700'>
				Create Account
			</button>
			<button className='border p-4 rounded-3xl border-white w-full hover:bg-green-700'>
				Login
			</button>
		</div>
	);
};

export default ButtonsConnect;
