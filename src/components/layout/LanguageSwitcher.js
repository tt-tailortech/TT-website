import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';

const LanguageSwitcher = () => {
  const router = useRouter();
  const { t } = useTranslation('common');
  const currentLocale = router.locale || 'en';
  
  // Simple direct language switcher function - this works more reliably
  const changeLanguage = (newLocale) => {
    const { pathname, asPath, query } = router;
    router.push({ pathname, query }, asPath, { locale: newLocale, scroll: false });
  };
  
  return (
    <div className="flex items-center space-x-2">
      <button 
        onClick={() => changeLanguage('en')}
        className={`px-2 py-1 text-sm rounded ${currentLocale === 'en' ? 'bg-secondary text-white font-bold' : 'text-gray-700 hover:bg-gray-100'}`}
        aria-label="Switch to English"
      >
        EN
      </button>
      <span className="text-gray-400">|</span>
      <button 
        onClick={() => changeLanguage('es')}
        className={`px-2 py-1 text-sm rounded ${currentLocale === 'es' ? 'bg-secondary text-white font-bold' : 'text-gray-700 hover:bg-gray-100'}`}
        aria-label="Switch to Spanish"
      >
        ES
      </button>
    </div>
  );
};

export default LanguageSwitcher;
