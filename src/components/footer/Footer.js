import './footerStyle.css'
import { AiFillFacebook } from 'react-icons/ai'
import { AiFillTwitterSquare } from 'react-icons/ai'
import { AiOutlineYoutube } from 'react-icons/ai'
import { AiFillGooglePlusSquare } from 'react-icons/ai'
import { AiFillLinkedin } from 'react-icons/ai'

function Footer() {
    return (
        <footer id='footer'>
            <div id='footer-wrapper'>
                <div className='footer-start-cont'>
                    <h3 className='footer-h3'>Some info</h3>
                    <p className='footer-text'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                    <div className='socials'>
                        <a href='#' className='asd'><AiFillFacebook /></a>
                        <a href='#'><AiFillTwitterSquare /></a>
                        <a href='#'><AiOutlineYoutube /></a>
                        <a href='#'><AiFillGooglePlusSquare /></a>
                        <a href='#'><AiFillLinkedin /></a>
                    </div>
                </div>
                <div className='footer-mid-cont'>
                    <p className='footer-text'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                </div>
                <div className='footer-end-cont'>
                    <h3 className='sub'>Newsletter</h3>
                    <input placeholder='Enter your email...' className='input'/>
                    <button className='btn'>Subscribe</button>
                </div>

            </div>
        </footer>
    );
}

export default Footer;