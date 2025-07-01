import Head from 'next/head';
import ProcessTimeline from '../../components/sections/ProcessTimeline';
import ContactCTA from '../../components/sections/ContactCTA';
import { developmentProcess } from '../../data/process';

import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'approach'])),
    },
  };
}

export default function Approach() {
  const { t } = useTranslation('approach');
  return (
    <>
      <Head>
        <title>{`${t('page_title')} | Tailored Tech Solutions`}</title>
        <meta 
          name="description" 
          content={t('page_description')}
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

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-10 items-center">
              <div className="md:w-1/2">
                <h2 className="text-3xl font-bold mb-6 text-primary">{t('intro.section_title')}</h2>
                <p className="text-lg text-gray-700 mb-4">
                  {t('intro.p1')}
                </p>
                <p className="text-lg text-gray-700">
                  {t('intro.p2')}
                </p>
              </div>
              <div className="md:w-1/2">
                <div className="bg-lightgray p-8 rounded-lg">
                  <h3 className="text-xl font-bold mb-4 text-primary">{t('principles.section_title')}</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <svg className="h-6 w-6 text-secondary mt-0.5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                      <span className="text-gray-700">{t('principles.client_collaboration')}</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-6 w-6 text-secondary mt-0.5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                      <span className="text-gray-700">{t('principles.deep_understanding')}</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-6 w-6 text-secondary mt-0.5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                      <span className="text-gray-700">{t('principles.customization')}</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-6 w-6 text-secondary mt-0.5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                      <span className="text-gray-700">{t('principles.transparency')}</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-6 w-6 text-secondary mt-0.5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                      <span className="text-gray-700">{t('principles.quality')}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <ProcessTimeline
        title={t('timeline.title')}
        subtitle={t('timeline.subtitle')}
        steps={t('timeline.steps', { returnObjects: true })}
      />

      {/* Client Collaboration */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">{t('client_collaboration.section_title')}</h2>
            
            <div className="bg-lightgray p-8 rounded-lg">
              <p className="text-lg text-gray-700 mb-6">
                {t('client_collaboration.description')}
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                {t('client_collaboration.features', { returnObjects: true }).map((feature, index) => (
                  <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="text-xl font-bold text-primary mb-3">{feature.title}</h3>
                    <p className="text-gray-600">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Structure */}
      <section className="py-16 bg-lightgray">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">{t('pricing_structure.section_title')}</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* Fixed Price */}
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold text-primary mb-4">{t('pricing_structure.fixed_price.title')}</h3>
                <p className="text-gray-700 mb-4">
                  {t('pricing_structure.fixed_price.description')}
                </p>
                <ul className="space-y-2 mb-6">
                  {t('pricing_structure.fixed_price.bullets', { returnObjects: true }).map((bullet, index) => (
                    <li key={index} className="flex items-start">
                      <svg className="h-5 w-5 text-secondary mt-0.5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-600">{bullet}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-gray-600 text-sm">
                  {t('pricing_structure.fixed_price.best_for')}
                </p>
              </div>
              
              {/* Time & Materials */}
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold text-primary mb-4">{t('pricing_structure.time_materials.title')}</h3>
                <p className="text-gray-700 mb-4">
                  {t('pricing_structure.time_materials.description')}
                </p>
                <ul className="space-y-2 mb-6">
                  {t('pricing_structure.time_materials.bullets', { returnObjects: true }).map((bullet, index) => (
                    <li key={index} className="flex items-start">
                      <svg className="h-5 w-5 text-secondary mt-0.5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-600">{bullet}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-gray-600 text-sm">
                  {t('pricing_structure.time_materials.best_for')}
                </p>
              </div>
            </div>
            
            <div className="mt-8 text-center">
              <p className="text-lg text-gray-700">
                {t('pricing_structure.consultation')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">{t('faq.title')}</h2>
            
            <div className="space-y-6">
              {t('faq.questions', { returnObjects: true }).map((faq, index) => (
                <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                  <details className="group">
                    <summary className="flex items-center justify-between p-6 cursor-pointer">
                      <h3 className="text-xl font-medium">{faq.question}</h3>
                      <span className="ml-4">
                        <svg className="h-6 w-6 transform group-open:rotate-180 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </span>
                    </summary>
                    <div className="p-6 pt-0 border-t border-gray-200">
                      <p className="text-gray-600">
                        {faq.answer}
                      </p>
                    </div>
                  </details>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <ContactCTA 
        title="Ready to Start Your Project?" 
        subtitle="Contact us today to schedule a consultation and discuss your specific needs."
      />
    </>
  );
}
