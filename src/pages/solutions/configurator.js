import Head from 'next/head';
import SolutionConfigurator from '../../components/interactive/SolutionConfigurator';
import ContactCTA from '../../components/sections/ContactCTA';

export default function SolutionConfiguratorPage() {
  return (
    <>
      <Head>
        <title>Solution Configurator | Tailored Tech Solutions</title>
        <meta 
          name="description" 
          content="Use our interactive configurator to find the perfect technological solution for your specific challenges."
        />
      </Head>

      {/* Hero Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Solution Configurator</h1>
            <p className="text-xl md:text-2xl text-white/90">
              Answer a few questions to find the tailored solution that best fits your needs
            </p>
          </div>
        </div>
      </section>

      {/* Configurator Section */}
      <section className="py-16 bg-lightgray">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <SolutionConfigurator />
            
            <div className="mt-12 bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-4">How This Works</h2>
              <ol className="space-y-4 mb-6">
                <li className="flex items-start">
                  <span className="flex-shrink-0 bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center mr-3">1</span>
                  <div>
                    <p className="font-bold">Select Challenge Categories</p>
                    <p className="text-gray-600">Choose the general areas where you're facing challenges.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center mr-3">2</span>
                  <div>
                    <p className="font-bold">Identify Specific Challenges</p>
                    <p className="text-gray-600">Select the specific issues you need to address within each category.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center mr-3">3</span>
                  <div>
                    <p className="font-bold">Review Recommended Solutions</p>
                    <p className="text-gray-600">Get personalized solution recommendations based on your selections.</p>
                  </div>
                </li>
              </ol>
              <p className="text-gray-700">
                Our configurator will match your challenges with our most appropriate solutions. For a completely customized assessment, contact our team directly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <ContactCTA 
        title="Need a More Customized Solution?" 
        subtitle="Contact our team for a personalized consultation about your specific technological needs."
      />
    </>
  );
}
