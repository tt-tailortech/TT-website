import { useState } from 'react';

const Testimonials = ({
  title = "What Our Clients Say",
  testimonials = []
}) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">{title}</h2>
        </div>

        {testimonials.length > 0 && (
          <div className="max-w-4xl mx-auto relative">
            {/* Testimonial Card */}
            <div className="bg-lightgray p-8 rounded-lg shadow-md">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                {testimonials[activeIndex].avatar && (
                  <div className="shrink-0">
                    <div className="w-20 h-20 rounded-full overflow-hidden bg-gray-200 flex items-center justify-center">
                      <img 
                        src={testimonials[activeIndex].avatar} 
                        alt={testimonials[activeIndex].name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                )}
                
                <div>
                  <div className="mb-4">
                    {/* Quote SVG */}
                    <svg className="h-8 w-8 text-secondary opacity-50 mb-2" fill="currentColor" viewBox="0 0 32 32">
                      <path d="M10 8v6a6 6 0 01-6 6H4v4h4a10 10 0 0010-10V8h-8zm18 0v6a6 6 0 01-6 6h0v4h4a10 10 0 0010-10V8h-8z" />
                    </svg>
                    
                    <p className="text-lg md:text-xl italic text-gray-600 mb-4">
                      "{testimonials[activeIndex].quote}"
                    </p>
                  </div>
                  
                  <div>
                    <p className="font-bold text-primary">
                      {testimonials[activeIndex].name}
                    </p>
                    <p className="text-gray-600">
                      {testimonials[activeIndex].title}, {testimonials[activeIndex].company}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Buttons */}
            {testimonials.length > 1 && (
              <div className="flex justify-center mt-6 gap-2">
                <button
                  onClick={handlePrev}
                  className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors duration-300"
                  aria-label="Previous testimonial"
                >
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                
                <div className="flex items-center gap-2 px-4">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveIndex(index)}
                      className={`h-2.5 w-2.5 rounded-full transition-colors duration-300 
                        ${index === activeIndex ? 'bg-primary' : 'bg-gray-300 hover:bg-gray-400'}`}
                      aria-label={`Go to testimonial ${index + 1}`}
                    />
                  ))}
                </div>
                
                <button
                  onClick={handleNext}
                  className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors duration-300"
                  aria-label="Next testimonial"
                >
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default Testimonials;
