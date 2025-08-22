import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Youtube, Mail } from 'lucide-react';
import TEDxLogo from '../ui/TEDxLogo';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-tedx-black border-t border-tedx-gray/30 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and About */}
          <div className="space-y-4">
            <TEDxLogo className="w-40 h-auto" />
            <p className="text-gray-400 text-sm mt-4">
              TEDx BITS Hyderabad is an independently organized TED event operated under license from TED.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-tedx-red transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-tedx-red transition-colors">
                <Twitter size={20} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-tedx-red transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-tedx-red transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-tedx-red transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-montserrat font-bold text-white text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-tedx-red transition-colors">Home</Link></li>
              <li><Link to="/speakers" className="text-gray-400 hover:text-tedx-red transition-colors">Speakers</Link></li>
              <li><Link to="/sponsors" className="text-gray-400 hover:text-tedx-red transition-colors">Sponsors</Link></li>
              <li><Link to="/executives" className="text-gray-400 hover:text-tedx-red transition-colors">Executives</Link></li>
              <li><Link to="/gallery" className="text-gray-400 hover:text-tedx-red transition-colors">Gallery</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-montserrat font-bold text-white text-lg mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="text-gray-400 flex items-start">
                <Mail size={18} className="mr-2 mt-1 min-w-[18px]" />
                <span>tedx@bits-hyderabad.ac.in</span>
              </li>
              <li className="text-gray-400">
                BITS Pilani Hyderabad Campus, Jawaharnagar, Shameerpet, Hyderabad, Telangana 500078
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-montserrat font-bold text-white text-lg mb-4">Stay Updated</h3>
            <p className="text-gray-400 mb-4">Subscribe to our newsletter for updates</p>
            <form className="space-y-2">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="w-full px-4 py-2 bg-tedx-gray border border-tedx-light-gray/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-tedx-red"
              />
              <button 
                type="submit" 
                className="w-full btn-3d"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-tedx-gray/30 mt-12 pt-6 text-center text-gray-500 text-sm">
          <p>© {currentYear} TEDx BITS Hyderabad. All rights reserved.</p>
          <p className="mt-1">
            This independent TEDx event is operated under license from TED.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;