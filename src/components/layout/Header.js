import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import LanguageSwitcher from './LanguageSwitcher';

const Header = () => {
  const router = useRouter();
  const { t } = useTranslation('common');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [solutionsDropdownOpen, setSolutionsDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleSolutionsDropdown = () => {
    setSolutionsDropdownOpen(!solutionsDropdownOpen);
  };

  // Close dropdown when clicking outside
  const handleClickOutside = () => {
    setSolutionsDropdownOpen(false);
  };

  const isActive = (path) => {
    return router.pathname === path || router.pathname.startsWith(`${path}/`);
  };

  return (
    <header className="bg-white shadow-md py-4">
      <div className="container mx-auto flex justify-between items-center px-4">
        {/* Logo */}
        <Link href="/" className="text-2xl font-heading font-bold text-primary">
          <span className="text-secondary">Tailored</span>Tech
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <Link href="/" className={`font-medium ${isActive('/') ? 'text-secondary' : 'hover:text-secondary'}`}>
            {t('navigation.home')}
          </Link>
          
          {/* Solutions Dropdown */}
          <div className="relative group">
            <button 
              className={`font-medium flex items-center ${isActive('/solutions') ? 'text-secondary' : 'hover:text-secondary'}`}
              onClick={toggleSolutionsDropdown}
              onBlur={() => setTimeout(() => setSolutionsDropdownOpen(false), 100)}
            >
              {t('navigation.solutions')}
              <svg 
                className={`ml-1 h-4 w-4 transition-transform ${solutionsDropdownOpen ? 'rotate-180' : ''}`} 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            {solutionsDropdownOpen && (
              <div className="absolute left-0 mt-2 w-60 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10">
                <div className="py-1" role="menu" aria-orientation="vertical">
                  <Link 
                    href="/solutions" 
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={() => setSolutionsDropdownOpen(false)}
                  >
                    All Solutions
                  </Link>
                  <Link 
                    href="/solutions/community-security" 
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={() => setSolutionsDropdownOpen(false)}
                  >
                    Community Security
                  </Link>
                  <Link 
                    href="/solutions/environmental-monitoring" 
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={() => setSolutionsDropdownOpen(false)}
                  >
                    Environmental Monitoring
                  </Link>
                  <Link 
                    href="/solutions/smart-data-systems" 
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={() => setSolutionsDropdownOpen(false)}
                  >
                    Smart Data Systems
                  </Link>
                  <Link 
                    href="/solutions/agricultural-solutions" 
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={() => setSolutionsDropdownOpen(false)}
                  >
                    Agricultural Solutions
                  </Link>
                  <div className="border-t border-gray-100 my-1"></div>
                  <Link 
                    href="/solutions/configurator" 
                    className="block px-4 py-2 text-sm font-medium text-primary hover:bg-gray-100"
                    onClick={() => setSolutionsDropdownOpen(false)}
                  >
                    <div className="flex items-center">
                      <svg className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                      </svg>
                      Solution Configurator
                    </div>
                  </Link>
                </div>
              </div>
            )}
          </div>
          
          <Link href="/approach" className={`font-medium ${isActive('/approach') ? 'text-secondary' : 'hover:text-secondary'}`}>
            {t('navigation.approach')}
          </Link>
          
          <Link href="/about" className={`font-medium ${isActive('/about') ? 'text-secondary' : 'hover:text-secondary'}`}>
            {t('navigation.about')}
          </Link>
          
          <Link href="/contact" className="btn-primary">
            {t('navigation.contact')}
          </Link>
          
          {/* Language Switcher */}
          <div className="ml-4">
            <LanguageSwitcher />
          </div>
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-gray-500 hover:text-primary"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden bg-white py-4 px-6 mt-2 shadow-inner">
          <ul className="flex flex-col space-y-4">
            <li>
              <Link href="/" className="block font-medium" onClick={toggleMenu}>
                {t('navigation.home')}
              </Link>
            </li>
            <li>
              <div>
                <button
                  className="flex items-center justify-between w-full font-medium"
                  onClick={() => setSolutionsDropdownOpen(!solutionsDropdownOpen)}
                >
                  {t('navigation.solutions')}
                  <svg 
                    className={`ml-1 h-4 w-4 transition-transform ${solutionsDropdownOpen ? 'rotate-180' : ''}`} 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {solutionsDropdownOpen && (
                  <ul className="pl-4 mt-2 space-y-2 border-l-2 border-gray-200">
                    <li>
                      <Link href="/solutions" className="block text-gray-700" onClick={toggleMenu}>
                        {t('solutions.title')}
                      </Link>
                    </li>
                    <li>
                      <Link href="/solutions/community-security" className="block text-gray-700" onClick={toggleMenu}>
                        {t('solutions.community_security')}
                      </Link>
                    </li>
                    <li>
                      <Link href="/solutions/environmental-monitoring" className="block text-gray-700" onClick={toggleMenu}>
                        {t('solutions.environmental_monitoring')}
                      </Link>
                    </li>
                    <li>
                      <Link href="/solutions/smart-data-systems" className="block text-gray-700" onClick={toggleMenu}>
                        {t('solutions.smart_data_systems')}
                      </Link>
                    </li>
                    <li>
                      <Link href="/solutions/agricultural-solutions" className="block text-gray-700" onClick={toggleMenu}>
                        {t('solutions.agricultural_solutions')}
                      </Link>
                    </li>
                    <li className="pt-1 border-t border-gray-100">
                      <Link href="/solutions/configurator" className="block text-primary font-medium" onClick={toggleMenu}>
                        <div className="flex items-center">
                          <svg className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                          </svg>
                          {t('solutions.configurator')}
                        </div>
                      </Link>
                    </li>
                  </ul>
                )}
              </div>
            </li>
            <li>
              <Link href="/approach" className="block font-medium" onClick={toggleMenu}>
                {t('navigation.approach')}
              </Link>
            </li>
            <li>
              <Link href="/about" className="block font-medium" onClick={toggleMenu}>
                {t('navigation.about')}
              </Link>
            </li>
            <li>
              <Link href="/contact" className="btn-primary inline-block" onClick={toggleMenu}>
                {t('navigation.contact')}
              </Link>
            </li>
          </ul>
          
          {/* Mobile Language Switcher */}
          <div className="mt-6 pt-6 border-t border-gray-200">
            <LanguageSwitcher />
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
