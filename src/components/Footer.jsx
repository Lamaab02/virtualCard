import { FaGithub, FaInstagram, FaTwitter } from 'react-icons/fa';

export default function Footer(){
    return(
        <footer className="main-footer">
        <FaGithub className='github' size={25} />
        <FaInstagram className='insta' size={25}/>
        <FaTwitter className='twitter' size={25}/>
        </footer>
    )
}