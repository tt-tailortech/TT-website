const ProcessTimeline = ({
  title = "Our Development Process",
  subtitle = "How we transform your challenges into tailored solutions",
  steps = []
}) => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
          <p className="text-xl text-gray-600">{subtitle}</p>
        </div>

        <div className="max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Timeline connector line */}
              {index < steps.length - 1 && (
                <div className="absolute left-6 top-12 bottom-0 w-0.5 bg-secondary/30 md:left-1/2 md:-ml-0.5"></div>
              )}

              <div className={`flex items-start mb-12 ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                {/* Step number */}
                <div className="shrink-0 z-10 flex items-center justify-center w-12 h-12 rounded-full bg-secondary text-white font-bold text-lg shadow-md mx-3 md:mx-0">
                  {index + 1}
                </div>

                {/* Content */}
                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'}`}>
                  <div className="bg-lightgray p-6 rounded-lg shadow-sm">
                    <h3 className="text-xl font-bold text-primary mb-2">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                    {step.bullets && step.bullets.length > 0 && (
                      <ul className="mt-3 space-y-1">
                        {step.bullets.map((bullet, i) => (
                          <li key={i} className="flex items-start">
                            <svg className="h-5 w-5 text-secondary mt-0.5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessTimeline;
