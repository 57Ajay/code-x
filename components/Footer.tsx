import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
              Ajay Upadhyay
            </h2>
            <p className="text-gray-400 mt-2 font-light">Full-Stack Developer</p>
          </div>
          <nav className="order-3 md:order-2">
            <ul className="flex flex-wrap justify-center md:justify-end space-x-6">
              {['Home', 'Projects', 'About', 'Contact'].map((item) => (
                <li key={item}>
                  <Link 
                    href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                    className="hover:text-blue-400 transition-colors duration-300 text-sm uppercase tracking-wider"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="flex justify-center md:justify-end space-x-6 order-2 md:order-3">
            {[
              { href: "https://github.com/57ajay", icon: Github },
              { href: "https://linkedin.com/in/upajay", icon: Linkedin },
              { href: "#", icon: Mail, text: "57ajay.u@gmail.com" }
            ].map((social, index) => (
              <Link 
                key={index}
                href={social.href} 
                className="hover:text-blue-400 transition-colors duration-300 group flex items-center"
              >
                <social.icon size={20} className="group-hover:scale-110 transition-transform duration-300" />
                {social.text && <span className="ml-2 text-sm hidden md:inline">{social.text}</span>}
              </Link>
            ))}
          </div>
        </div>
        <div className="mt-12 text-center text-sm text-gray-400 border-t border-gray-700 pt-8">
          © {new Date().getFullYear()} Ajay Upadhyay. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;