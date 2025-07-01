import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Head from 'next/head';
import Link from 'next/link';
import ContactCTA from '../../components/sections/ContactCTA';

export default function About() {
  const { t } = useTranslation('about');
  const values = t('values.items', { returnObjects: true });

  return (
    <>
      <Head>
        <title>{t('metadata.title')}</title>
        <meta 
          name="description" 
          content={t('metadata.description')}
        />
      </Head>

      {/* Hero Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{t('hero.title')}</h1>
            <p className="text-xl md:text-2xl text-white/90">
              {t('hero.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">{t('story.title')}</h2>
            
            <div className="bg-lightgray p-8 rounded-lg shadow-sm mb-10">
              <p className="text-lg text-gray-700 mb-4">
                {t('story.paragraph1')}
              </p>
              <p className="text-lg text-gray-700 mb-4">
                {t('story.paragraph2')}
              </p>
              <p className="text-lg text-gray-700">
                {t('story.paragraph3')}
              </p>
            </div>
            
            {/* Mission Statement */}
            <div className="text-center mb-10">
              <h3 className="text-2xl font-bold text-primary mb-4">{t('story.missionTitle')}</h3>
              <p className="text-xl italic">
                "{t('story.missionText')}"
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-lightgray">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-10 text-center">{t('values.title')}</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {values.map((value, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-bold text-primary mb-3">{value.title}</h3>
                  <p className="text-gray-700">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <ContactCTA 
        title={t('cta.title')} 
        subtitle={t('cta.subtitle')}
        buttonText={t('cta.buttonText')}
        buttonLink="/careers"
      />
    </>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['about', 'common'])),
    },
  };
}
