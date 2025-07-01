import { useState } from 'react';

const InteractiveDiagram = ({ 
  title, 
  description, 
  elements, 
  backgroundImage = null,
  simpleView = false,
  toggleView = true
}) => {
  const [activeElement, setActiveElement] = useState(null);
  const [isSimpleView, setIsSimpleView] = useState(simpleView);
  
  const handleElementClick = (elementId) => {
    if (activeElement === elementId) {
      setActiveElement(null);
    } else {
      setActiveElement(elementId);
    }
  };
  
  const toggleViewMode = () => {
    setIsSimpleView(!isSimpleView);
    // Reset active element when toggling views
    setActiveElement(null);
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      {/* Header */}
      <div className="bg-primary/10 p-6">
        <div className="flex justify-between items-center">
          <h3 className="text-xl font-bold text-primary">{title}</h3>
          
          {toggleView && (
            <button
              onClick={toggleViewMode}
              className="text-sm text-primary hover:text-secondary flex items-center"
            >
              {isSimpleView ? 'Detailed View' : 'Simple View'}
              <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
              </svg>
            </button>
          )}
        </div>
        
        <p className="text-gray-600 mt-2">{description}</p>
      </div>
      
      {/* Diagram Area */}
      <div className="p-6 relative">
        <div 
          className="w-full h-[400px] bg-lightgray rounded-lg relative overflow-hidden"
          style={backgroundImage ? { backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' } : {}}
        >
          {/* Diagram Elements - Simple View */}
          {isSimpleView && (
            <div className="absolute inset-0 flex flex-col items-center justify-center p-8">
              <div className="flex flex-col md:flex-row items-stretch gap-6 w-full max-w-4xl">
                {elements.filter(e => e.showInSimple !== false).map((element, index) => (
                  <div 
                    key={element.id}
                    className="flex-1 bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow duration-300 cursor-pointer"
                    onClick={() => handleElementClick(element.id)}
                  >
                    <div className="flex items-center mb-2">
                      {element.icon && (
                        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                          {element.icon}
                        </div>
                      )}
                      <h4 className="font-bold text-primary">{element.title}</h4>
                    </div>
                    
                    {activeElement === element.id && (
                      <div className="mt-2 text-sm text-gray-600">
                        {element.description}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {/* Diagram Elements - Detailed View */}
          {!isSimpleView && (
            <div className="absolute inset-0">
              {elements.map((element) => (
                <div
                  key={element.id}
                  className={`absolute transition-all duration-300 ${
                    activeElement && activeElement !== element.id
                      ? 'opacity-50'
                      : 'opacity-100'
                  }`}
                  style={{
                    top: `${element.position.top}%`,
                    left: `${element.position.left}%`,
                  }}
                >
                  <div
                    className={`
                      w-12 h-12 md:w-16 md:h-16 rounded-full 
                      bg-white shadow-md flex items-center justify-center 
                      cursor-pointer border-2 transition-colors duration-300
                      ${activeElement === element.id ? 'border-secondary' : 'border-primary/50'}
                      hover:border-secondary
                    `}
                    onClick={() => handleElementClick(element.id)}
                    title={element.title}
                  >
                    {element.icon || (
                      <span className="text-primary font-bold">{element.title.charAt(0)}</span>
                    )}
                  </div>
                  
                  {/* Information popup */}
                  {activeElement === element.id && (
                    <div className={`
                      absolute z-10 bg-white rounded-lg shadow-lg p-4 w-64 mt-2
                      ${element.position.top > 50 ? 'bottom-full mb-4' : 'top-full mt-4'}
                      ${element.position.left > 50 ? 'right-0' : 'left-0'}
                    `}>
                      <h4 className="font-bold text-primary mb-2">{element.title}</h4>
                      <p className="text-sm text-gray-600">{element.description}</p>
                      
                      {element.additionalInfo && (
                        <div className="mt-3 pt-3 border-t border-gray-200">
                          <h5 className="font-semibold text-xs text-gray-500 uppercase mb-1">Additional Information</h5>
                          <p className="text-sm text-gray-600">{element.additionalInfo}</p>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
          
          {/* Instructions */}
          {!activeElement && !isSimpleView && (
            <div className="absolute bottom-4 left-0 right-0 text-center">
              <p className="text-sm text-gray-500 bg-white/80 mx-auto inline-block py-1 px-3 rounded-full">
                Click on elements to learn more
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default InteractiveDiagram;
