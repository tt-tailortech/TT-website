import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { solutions } from '../../data/solutions';
import { solutionDiagrams } from '../../data/diagrams';
import ContactCTA from '../../components/sections/ContactCTA';
import InteractiveDiagram from '../../components/interactive/InteractiveDiagram';

export default function SolutionDetail() {
  const router = useRouter();
  const { id } = router.query;
  const { t } = useTranslation(['solutions', 'common']);
  
  // Find the solution by id
  const solution = solutions.find(s => s.id === id);
  
  // If the solution is not found or page is still loading, show loading state
  if (!solution) {
    return (
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <p className="text-lg">Loading solution...</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>{solution.title} | Tailored Tech Solutions</title>
        <meta name="description" content={solution.description} />
      </Head>

      {/* Hero Section */}
      <section className="py-20 bg-primary text-white" data-component-name="SolutionDetail">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Link href="/solutions" className="inline-flex items-center text-white/80 hover:text-white mb-4">
              <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              {t('solutions:solution_detail.back_to_all')}
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{solution.title}</h1>
            <p className="text-xl md:text-2xl text-white/90" data-component-name="SolutionDetail">{solution.shortDescription}</p>
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="py-16 bg-lightgray">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">{t('solutions:solution_detail.the_challenge')}</h2>
            <p className="text-lg text-gray-700 mb-8">
              {/* This would be replaced with actual content */}
              {t('solutions:solution_detail.challenge_description', { solution: solution.title.toLowerCase() })}
            </p>
            
            {/* Solution Overview */}
            <h2 className="text-3xl font-bold mb-6">{t('solutions:solution_detail.our_solution')}</h2>
            <p className="text-lg text-gray-700 mb-8">{solution.description}</p>
            
            {/* Interactive Solution Diagram */}
            {solutionDiagrams[solution.id] && (
              <div className="mb-8">
                <InteractiveDiagram 
                  title={solutionDiagrams[solution.id].title}
                  description={solutionDiagrams[solution.id].description}
                  elements={solutionDiagrams[solution.id].elements}
                  backgroundImage={`/images/diagrams/${solution.id}-bg.jpg`}
                  simpleView={false}
                  toggleView={true}
                />
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">{t('solutions:solution_detail.key_features')}</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {solution.features.map((feature, index) => (
                <div key={index} className="bg-lightgray p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-primary mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits & Applications */}
      <section className="py-16 bg-lightgray">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-16">
              {/* Benefits */}
              <div>
                <h2 className="text-2xl font-bold mb-6">{t('solutions:solution_detail.benefits')}</h2>
                <ul className="space-y-3">
                  {solution.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <svg className="h-6 w-6 text-secondary mt-0.5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Applications */}
              <div>
                <h2 className="text-2xl font-bold mb-6">{t('solutions:solution_detail.applications')}</h2>
                <ul className="space-y-3">
                  {solution.applications.map((application, index) => (
                    <li key={index} className="flex items-start">
                      <svg className="h-6 w-6 text-primary mt-0.5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                      <span className="text-gray-700">{application}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <details className="bg-lightgray p-6 rounded-lg">
              <summary className="text-2xl font-bold cursor-pointer focus:outline-none">
                {t('solutions:solution_detail.technical_specs')}
              </summary>
              <div className="mt-6 space-y-4">
                {solution.technicalDetails && Object.entries(solution.technicalDetails).map(([key, value], index) => (
                  <div key={index}>
                    <h3 className="text-lg font-semibold text-primary mb-2 capitalize">{key}</h3>
                    {Array.isArray(value) ? (
                      <ul className="list-disc list-inside pl-4 space-y-1">
                        {value.map((item, i) => (
                          <li key={i} className="text-gray-600">{item}</li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-gray-600 pl-4">{value}</p>
                    )}
                  </div>
                ))}
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* Related Case Study Placeholder */}
      <section className="py-16 bg-lightgray">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">{t('solutions:solution_detail.case_study')}</h2>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-primary mb-4">
                {solution.title} {t('solutions:solution_detail.case_study_implementation')}
              </h3>
              <p className="text-gray-600 mb-4">
                {t('solutions:solution_detail.case_study_description', { solution: solution.title.toLowerCase() })}
              </p>
              <button className="text-primary font-medium hover:text-secondary inline-flex items-center">
                {t('solutions:solution_detail.read_full_case_study')}
                <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <ContactCTA 
        title={t('solutions:solution_detail.interested_in_solution', { solution: solution.title })}
        subtitle={t('solutions:solution_detail.contact_subtitle')}
        buttonText={t('solutions:solution_detail.discuss_implementation')}
      />
    </>
  );
}

// This function is used by Next.js for static generation
export async function getStaticPaths() {
  const paths = solutions.map(solution => ({
    params: { id: solution.id }
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params, locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'solutions']))
    }
  };
}
