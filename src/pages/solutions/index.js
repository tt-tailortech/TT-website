import Head from 'next/head';
import Link from 'next/link';
import { solutions } from '../../data/solutions';
import ContactCTA from '../../components/sections/ContactCTA';

export default function Solutions() {
  return (
    <>
      <Head>
        <title>Our Solutions | Tailored Tech Solutions</title>
        <meta 
          name="description" 
          content="Explore our range of custom technological solutions designed to address specific challenges across various industries and domains."
        />
      </Head>

      {/* Hero Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Solutions</h1>
            <p className="text-xl md:text-2xl text-white/90">
              Customized technological systems designed to address your specific challenges
            </p>
          </div>
        </div>
      </section>

      {/* Solutions List */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            {solutions.map((solution, index) => (
              <div 
                key={solution.id} 
                className={`flex flex-col md:flex-row gap-8 ${
                  index < solutions.length - 1 ? 'mb-16 pb-16 border-b border-gray-200' : ''
                }`}
              >
                {/* Solution Image */}
                <div className="md:w-2/5">
                  <div className="relative bg-gray-200 rounded-lg overflow-hidden h-64">
                    {/* We'll replace this with actual images later */}
                    <div className="absolute inset-0 flex items-center justify-center bg-primary/10">
                      <span className="text-primary font-bold text-lg">{solution.title} Image</span>
                    </div>
                  </div>
                </div>

                {/* Solution Content */}
                <div className="md:w-3/5">
                  <h2 className="text-2xl md:text-3xl font-bold text-primary mb-3">
                    {solution.title}
                  </h2>
                  <p className="text-gray-600 mb-4">
                    {solution.description}
                  </p>
                  
                  {/* Features Preview */}
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold mb-2">Key Features:</h3>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {solution.features.slice(0, 4).map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <svg className="h-5 w-5 text-secondary mt-0.5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>{feature.title}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Link 
                    href={`/solutions/${solution.id}`}
                    className="inline-flex items-center text-primary font-medium hover:text-secondary"
                  >
                    Learn more about this solution
                    <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <ContactCTA 
        title="Need a Custom Solution?" 
        subtitle="Discuss your specific challenges with our team to explore tailored technology options."
      />
    </>
  );
}
