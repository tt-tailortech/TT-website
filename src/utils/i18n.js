import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import nextI18NextConfig from '../../next-i18next.config.js';

/**
 * Common utility function to load translations for pages
 * @param {string} locale - The current locale from getStaticProps/getServerSideProps
 * @param {string[]} namespaces - Array of namespace strings to load
 * @param {object} props - Additional props to merge with translations
 * @returns {object} - Props object to return from getStaticProps
 */
export const getI18nProps = async (locale, namespaces = ['common'], props = {}) => {
  const translations = await serverSideTranslations(locale, namespaces);
  
  return {
    ...props,
    ...translations,
    i18nConfig: nextI18NextConfig,
  };
};
