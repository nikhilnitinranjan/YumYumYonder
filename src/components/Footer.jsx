import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import { TiSocialPinterest } from 'react-icons/ti';

const Footer = () => {
    return (
        <div className='w-full mt-24 bg-gray-900 text-gray-300 py-2 px-2'>
            <div className='max-w-[1400px] mx-auto grid grid-cols-2 md:grid-cols-6 border-b-2 border-gray-600 py-8 px-4'>
                <div>
                    <h6 className='font-bold uppercase pt-2'>Solutions</h6>
                    <ul>
                        <li className='py-1'>Orders</li>
                        <li className='py-1'>Favorites</li>
                        <li className='py-1'>Wallet</li>
                        <li className='py-1'>Help</li>
                        <li className='py-1'>Promotions</li>
                        <li className='py-1'>Best ones</li>
                        <li className='py-1'>Invite Friends</li>
                    </ul>
                </div>
                <div>
                    <h6 className='font-bold uppercase pt-2'>Company</h6>
                    <ul>

                        <li className='py-1'>Latest deals</li>
                        <li className='py-1'>Pizza</li>
                        <li className='py-1'>Restaurant Rewards</li>
                        <li className='py-1'>Best Overall</li>
                        <li className='py-1'>Shipped Free</li>
                    </ul>
                </div>
                <div>
                    <h6 className='font-bold uppercase pt-2'>Legal</h6>
                    <ul>
                        <li className='py-1'>Claims</li>
                        <li className='py-1'>Privacy</li>
                        <li className='py-1'>Terms</li>
                        <li className='py-1'>Policies</li>
                        <li className='py-1'>Conditions</li>
                    </ul>
                </div>
                <div className='col-span-2 py-8 md:pt-2'>
                    <p className='font-bold uppercase'>Subscribe to our newsletters</p>
                    <p className='py-4'>
                        The Latest deals, articles and resources sent to your inbox weekly.
                    </p>
                    <form className='flex flex-col sm:flex-row'>
                        <input className='w-full p-2 mr-4 rounded-md mb-4' type='email' placeholder='Enter email..' />
                        <button className='p-2 mb-4 rounded-md'>Subscribe</button>
                    </form>
                </div>
            </div>

            <div className='flex flex-col max-w-[1400px] px-2 py-4 mx-auto justify-between sm:flex-row text-center text-gray-500'>
                {/* <p className='py-4'>2023 YumYumYonder, &copyright</p> */}
                <p className='py-4'>2023 YumYumYonder, &copy;Nikhil Nitin Ranjan</p>
                <p className='py-4'>Privacy Policy</p>
                <p className='py-4'>Terms and Conditions</p>
                <p className='py-4'>Cookie Policy</p>
                <p className='py-4'>Sitemap</p>
                <p className='py-4'>Company Details</p>
                <p className='py-4'>Contact Us</p>
                <div className='flex justify-between sm:w-[300px] pt-4 text-2xl'>
                    <FaFacebook />
                    <FaInstagram />
                    <FaTwitter />
                    <TiSocialPinterest size={30} />
                </div>
            </div>
        </div>
    );
};

export default Footer;