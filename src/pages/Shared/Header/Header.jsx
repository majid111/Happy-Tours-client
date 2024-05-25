import Logo from '../../../assets/logo.png';

const Header = () => {
    return (
        <div className='text-center'>
            <img className='mx-auto' src={Logo} alt="" />
            <p className='text-lg'>Journalism Without Fear or Favour</p>
        </div>
    );
};

export default Header;