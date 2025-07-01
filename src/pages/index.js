import Head from 'next/head';
import Link from 'next/link';
import Hero from '../components/sections/Hero';
import Features from '../components/sections/Features';
import ContactCTA from '../components/sections/ContactCTA';
import ProcessTimeline from '../components/sections/ProcessTimeline';
import { solutions } from '../data/solutions';
import { developmentProcess } from '../data/process';
import { getI18nProps } from '../utils/i18n';
import { useTranslation } from 'next-i18next';
import React from 'react';

export default function Home() {
  const { t, i18n } = useTranslation(['common', 'solutions']);

  // Filter only featured solutions for the homepage (first 3)
  const featuredSolutions = solutions.slice(0, 3).map(solution => ({
    title: t(`solutions:${solution.i18nKey}.title`),
    description: t(`solutions:${solution.i18nKey}.description`),
    image: solution.image || '/images/placeholder-solution.jpg',
    link: `/solutions/${solution.id}`,
    linkText: t('cta.learn_more')
  }));

  // Select the first 2 steps of the process for a brief overview
  const processPreview = developmentProcess.slice(0, 2).map(step => ({
    ...step,
    title: t(`process.${step.i18nKey}.title`, { ns: 'common', defaultValue: step.title }),
    description: t(`process.${step.i18nKey}.description`, { ns: 'common', defaultValue: step.description })
  }));

  return (
    <>
      <Head>
        <title>{`${t('site.name')} | ${t('site.description')}`}</title>
        <meta 
          name="description" 
          content={t('site.description')}
        />
      </Head>

      {/* Hero Section */}
      <Hero />

      {/* Featured Solutions */}
      <Features 
        features={featuredSolutions}
        columns={3}
      />

      {/* Brief Process Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('navigation.approach')}</h2>
            <p className="text-xl text-gray-600">{t('site.expertise')}</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {processPreview.map((step, index) => (
                <div key={index} className="bg-lightgray p-6 rounded-lg shadow-sm">
                  <div className="flex items-center mb-4">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-secondary text-white font-bold text-lg mr-4">
                      {index + 1}
                    </div>
                    <h3 className="text-xl font-bold text-primary">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-gray-600">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
            <div className="text-center mt-8">
              <Link href="/approach" locale={i18n.language} className="inline-flex items-center text-primary font-medium hover:text-secondary">
                {t('cta.learn_more')}
                <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <ContactCTA />
    </>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: await getI18nProps(locale, ['common', 'solutions', 'about']),
  };
}
