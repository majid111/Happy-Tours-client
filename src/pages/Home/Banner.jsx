import { Link } from 'react-router-dom';
import banner from '../../assets/banner.jpg';

const Banner = () => {
    return (
        <div className='bg-[#1313130D] px-28 py-20 md:flex gap-20 items-center'>
            <div className='space-y-12'>
            <h1 className='text-6xl font-bold'>Discover the world. Authentic experiences.</h1>
            <Link to='#tours'><button className='btn bg-[#23BE0A] text-white'>View The List</button></Link>
            </div>
            <div>
                <img className='max-w-sm' src={banner} alt="" />
            </div>
        </div>
    );
};

export default Banner;