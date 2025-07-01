import Head from 'next/head';
import Link from 'next/link';
import Card from '../../components/ui/Card';
import ContactCTA from '../../components/sections/ContactCTA';

export default function Resources() {
  // Sample case studies data (would typically come from a data file)
  const caseStudies = [
    {
      id: 'community-security-implementation',
      title: 'Community Security System for Greenfield Estates',
      description: 'How we implemented a custom alert system that reduced security response times by 64%.',
      image: '/images/case-study-1.jpg',
      category: 'Security'
    },
    {
      id: 'flood-monitoring-riverdale',
      title: 'Flood Monitoring Network for Riverdale County',
      description: 'A comprehensive water level monitoring system that helped prevent $2.3M in potential flood damage.',
      image: '/images/case-study-2.jpg',
      category: 'Environmental'
    },
    {
      id: 'agricultural-solution-farms',
      title: 'Smart Irrigation for AgriGrow Farms',
      description: 'Precision agriculture solution that reduced water usage by 37% while improving crop yields.',
      image: '/images/case-study-3.jpg',
      category: 'Agriculture'
    }
  ];

  // Sample blog posts data (would typically come from a data file)
  const blogPosts = [
    {
      id: 'iot-security-best-practices',
      title: 'IoT Security Best Practices for 2025',
      description: 'A comprehensive guide to securing Internet of Things devices and systems in an increasingly connected world.',
      date: 'May 5, 2025',
      author: 'Alex Morgan',
      image: '/images/blog-1.jpg'
    },
    {
      id: 'future-environmental-monitoring',
      title: 'The Future of Environmental Monitoring Technology',
      description: 'Emerging trends and technologies that are transforming how we monitor and respond to environmental changes.',
      date: 'April 18, 2025',
      author: 'Jamie Wilson',
      image: '/images/blog-2.jpg'
    },
    {
      id: 'data-driven-decision-making',
      title: 'Data-Driven Decision Making: A Practical Guide',
      description: 'How organizations can effectively leverage data to inform strategic decisions and drive better outcomes.',
      date: 'March 30, 2025',
      author: 'Casey Taylor',
      image: '/images/blog-3.jpg'
    }
  ];

  // Sample whitepapers data (would typically come from a data file)
  const whitepapers = [
    {
      id: 'smart-city-technology',
      title: 'Smart City Technologies: Implementation Framework',
      description: 'A technical framework for implementing integrated technology solutions in urban environments.',
      fileSize: '2.4 MB',
      pages: 32
    },
    {
      id: 'sensor-network-architecture',
      title: 'Sensor Network Architecture for Environmental Monitoring',
      description: 'Technical specifications and best practices for designing resilient environmental sensor networks.',
      fileSize: '3.1 MB',
      pages: 47
    },
    {
      id: 'data-privacy-iot',
      title: 'Data Privacy in IoT Systems: Technical Approaches',
      description: 'Technical strategies for ensuring data privacy and security in Internet of Things implementations.',
      fileSize: '1.8 MB',
      pages: 28
    }
  ];

  return (
    <>
      <Head>
        <title>Resources | Tailored Tech Solutions</title>
        <meta 
          name="description" 
          content="Explore case studies, blog posts, and technical whitepapers from Tailored Tech Solutions."
        />
      </Head>

      {/* Hero Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Resources</h1>
            <p className="text-xl md:text-2xl text-white/90">
              Insights, case studies, and technical content to help you understand our solutions
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Case Studies</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {caseStudies.map((study) => (
                <Card
                  key={study.id}
                  title={study.title}
                  description={study.description}
                  imageSrc={study.image}
                  link={`/resources/case-studies/${study.id}`}
                  linkText="Read Case Study"
                />
              ))}
            </div>
            
            <div className="mt-8 text-center">
              <Link 
                href="/resources/case-studies" 
                className="inline-flex items-center text-primary font-medium hover:text-secondary"
              >
                View All Case Studies
                <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Section */}
      <section className="py-16 bg-lightgray">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Latest from Our Blog</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <div key={post.id} className="bg-white rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-lg">
                  {/* This would be replaced with actual blog post images */}
                  <div className="relative bg-gray-200 h-48">
                    <div className="absolute inset-0 flex items-center justify-center bg-primary/10">
                      <span className="text-primary font-medium">Blog Image</span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center text-sm text-gray-500 mb-2">
                      <span>{post.date}</span>
                      <span className="mx-2">•</span>
                      <span>{post.author}</span>
                    </div>
                    
                    <h3 className="text-xl font-bold mb-3">{post.title}</h3>
                    <p className="text-gray-600 mb-4">{post.description}</p>
                    
                    <Link 
                      href={`/resources/blog/${post.id}`}
                      className="text-primary font-medium hover:text-secondary inline-flex items-center"
                    >
                      Read Article
                      <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-8 text-center">
              <Link 
                href="/resources/blog" 
                className="inline-flex items-center text-primary font-medium hover:text-secondary"
              >
                Visit Our Blog
                <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Whitepapers Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Technical Whitepapers</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {whitepapers.map((paper) => (
                <div key={paper.id} className="bg-lightgray p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-3">{paper.title}</h3>
                  <p className="text-gray-600 mb-4">{paper.description}</p>
                  
                  <div className="flex justify-between text-sm text-gray-500 mb-4">
                    <span>{paper.pages} pages</span>
                    <span>{paper.fileSize} PDF</span>
                  </div>
                  
                  <button className="w-full bg-primary text-white py-2 px-4 rounded-md hover:bg-opacity-90 transition-colors duration-300 flex items-center justify-center">
                    <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                    Download Whitepaper
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-lightgray">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
            
            <div className="space-y-4">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold text-primary mb-2">What industries do you typically work with?</h3>
                <p className="text-gray-700">
                  While our solutions are adaptable to many sectors, we have particular expertise in municipal services, agriculture, environmental management, community organizations, and industrial operations. Our approach is sector-agnostic, focusing instead on the specific challenge at hand regardless of industry.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold text-primary mb-2">Do you offer ongoing support for your solutions?</h3>
                <p className="text-gray-700">
                  Yes, we provide comprehensive support and maintenance options for all our implementations. This includes technical troubleshooting, regular updates, performance monitoring, and system enhancements. We offer various support tiers to match your organization's needs and internal capabilities.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold text-primary mb-2">What is your typical project timeline?</h3>
                <p className="text-gray-700">
                  Project timelines vary based on complexity and scope. Simple solutions might be implemented in 4-8 weeks, while comprehensive systems may take 3-6 months from consultation to deployment. We work with you to establish realistic timelines during the initial consultation phase.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold text-primary mb-2">Do you work with existing technologies or build from scratch?</h3>
                <p className="text-gray-700">
                  We take a pragmatic approach, often combining existing technologies with custom development to create the most effective solution. We're experienced in integrating with existing systems and can evaluate whether adapting current tools or building new components is the best approach for your specific needs.
                </p>
              </div>
            </div>
            
            <div className="mt-8 text-center">
              <Link 
                href="/resources/faq" 
                className="inline-flex items-center text-primary font-medium hover:text-secondary"
              >
                View All FAQs
                <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Subscribe to Newsletter */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
            <p className="text-lg mb-8 text-white/90">
              Subscribe to our newsletter for the latest case studies, technology insights, and industry trends.
            </p>
            
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="px-4 py-3 rounded-md flex-grow"
                required
              />
              <button 
                type="submit" 
                className="bg-secondary text-white px-6 py-3 rounded-md font-medium hover:bg-opacity-90 transition-colors duration-300"
              >
                Subscribe
              </button>
            </form>
            
            <p className="text-sm mt-4 text-white/80">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <ContactCTA 
        title="Have Questions About Our Resources?" 
        subtitle="Contact our team for more information about our case studies, articles, or technical whitepapers."
      />
    </>
  );
}
