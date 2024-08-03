
import { TwitterIcon, FacebookIcon, InstagramIcon } from './FooterIcons.jsx';

export default function Footer() {
    return (
        <footer className="bg-black text-white py-8 text-center">
            <div className="container mx-auto flex flex-wrap justify-between">
                <div className="footer-section flex-1 m-4">
                    <h4 className="mb-2 text-lg font-bold">About Us</h4>
                    <p className="leading-relaxed">We are a travel company dedicated to providing the best travel experiences.</p>
                </div>
                <div className="footer-section flex-1 m-4">
                    <h4 className="mb-2 text-lg font-bold">Contact</h4>
                    <ul className="list-none p-0">
                        <li className="mb-1">Email: contact@travelcompany.com</li>
                        <li>Phone: +123 456 7890</li>
                    </ul>
                </div>
                <div className="footer-section flex-1 m-4">
                    <h4 className="mb-2 text-lg font-bold text-center mr-4">Follow Us</h4>
                    <ul className="list-none p-0 flex justify-center gap-4">
                        <li>
                            <a href="https://twitter.com" target="_blank" className="text-white hover:text-gray-400 flex flex-col items-center">
                                <TwitterIcon />
                                Twitter
                            </a>
                        </li>
                        <li>
                            <a href="https://facebook.com" target="_blank" className="text-white hover:text-gray-400 flex flex-col items-center">
                                <FacebookIcon />
                                Facebook
                            </a>
                        </li>
                        <li>
                            <a href="https://instagram.com" target="_blank" className="text-white hover:text-gray-400 flex flex-col items-center">
                                <InstagramIcon />
                                Instagram
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="mt-8">
                <p>&copy; 2024 Travel Company. All rights reserved.</p>
            </div>
        </footer>
    );
}
