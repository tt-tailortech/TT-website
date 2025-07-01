import { useState, useEffect } from 'react';
import { challenges } from '../../data/challenges';
import { solutions } from '../../data/solutions';
import Button from '../ui/Button';
import Link from 'next/link';

const SolutionConfigurator = () => {
  // State for the current step in the configurator
  const [step, setStep] = useState(1);
  
  // State for selected categories and challenges
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedChallenges, setSelectedChallenges] = useState([]);
  
  // State for recommended solutions
  const [recommendedSolutions, setRecommendedSolutions] = useState([]);
  
  // Update recommended solutions when selected challenges change
  useEffect(() => {
    if (selectedChallenges.length > 0) {
      // Get unique solution IDs from selected challenges
      const solutionIds = [...new Set(
        selectedChallenges.map(challenge => {
          const foundChallenge = challenges
            .flatMap(cat => cat.challenges)
            .find(c => c.id === challenge);
          return foundChallenge ? foundChallenge.relatedSolution : null;
        }).filter(Boolean)
      )];
      
      // Find the full solution objects
      const recommendedSolutions = solutions.filter(solution => 
        solutionIds.includes(solution.id)
      );
      
      setRecommendedSolutions(recommendedSolutions);
    } else {
      setRecommendedSolutions([]);
    }
  }, [selectedChallenges]);
  
  // Handle category selection
  const handleCategoryChange = (categoryId) => {
    setSelectedCategories(prev => {
      if (prev.includes(categoryId)) {
        // If category is deselected, also remove its challenges
        const categoryChallenge = challenges.find(c => c.id === categoryId);
        const challengeIds = categoryChallenge ? categoryChallenge.challenges.map(ch => ch.id) : [];
        
        setSelectedChallenges(prev => 
          prev.filter(id => !challengeIds.includes(id))
        );
        
        return prev.filter(id => id !== categoryId);
      } else {
        return [...prev, categoryId];
      }
    });
  };
  
  // Handle challenge selection
  const handleChallengeChange = (challengeId) => {
    setSelectedChallenges(prev => {
      if (prev.includes(challengeId)) {
        return prev.filter(id => id !== challengeId);
      } else {
        return [...prev, challengeId];
      }
    });
  };
  
  // Go to the next step
  const handleNext = () => {
    if (step === 1 && selectedCategories.length > 0) {
      setStep(2);
    } else if (step === 2 && selectedChallenges.length > 0) {
      setStep(3);
    }
  };
  
  // Go to the previous step
  const handleBack = () => {
    if (step === 2) {
      setStep(1);
    } else if (step === 3) {
      setStep(2);
    }
  };
  
  // Reset the configurator
  const handleReset = () => {
    setStep(1);
    setSelectedCategories([]);
    setSelectedChallenges([]);
    setRecommendedSolutions([]);
  };
  
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      {/* Header */}
      <div className="bg-primary text-white py-6 px-8">
        <h3 className="text-2xl font-bold">Solution Configurator</h3>
        <p className="text-white/80">Find the perfect solution for your specific challenges</p>
      </div>
      
      {/* Progress Indicator */}
      <div className="bg-gray-100 px-8 py-4">
        <div className="flex items-center justify-between max-w-md mx-auto">
          <div className="flex flex-col items-center">
            <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
              step >= 1 ? 'bg-primary text-white' : 'bg-gray-300 text-gray-600'
            }`}>
              1
            </div>
            <span className="text-sm mt-1">Categories</span>
          </div>
          
          <div className="w-16 h-1 bg-gray-300">
            <div className={`h-full ${step >= 2 ? 'bg-primary' : 'bg-gray-300'}`}></div>
          </div>
          
          <div className="flex flex-col items-center">
            <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
              step >= 2 ? 'bg-primary text-white' : 'bg-gray-300 text-gray-600'
            }`}>
              2
            </div>
            <span className="text-sm mt-1">Challenges</span>
          </div>
          
          <div className="w-16 h-1 bg-gray-300">
            <div className={`h-full ${step >= 3 ? 'bg-primary' : 'bg-gray-300'}`}></div>
          </div>
          
          <div className="flex flex-col items-center">
            <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
              step >= 3 ? 'bg-primary text-white' : 'bg-gray-300 text-gray-600'
            }`}>
              3
            </div>
            <span className="text-sm mt-1">Solutions</span>
          </div>
        </div>
      </div>
      
      {/* Content Area */}
      <div className="px-8 py-6">
        {/* Step 1: Select Categories */}
        {step === 1 && (
          <div>
            <h4 className="text-xl font-bold mb-4">Select Your Challenge Categories</h4>
            <p className="text-gray-600 mb-6">
              Choose the categories that best represent the areas where you're facing challenges.
            </p>
            
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              {challenges.map((category) => (
                <div 
                  key={category.id}
                  className={`border rounded-lg p-4 cursor-pointer transition-all duration-200 ${
                    selectedCategories.includes(category.id)
                      ? 'border-primary bg-primary/5'
                      : 'border-gray-200 hover:border-primary/50'
                  }`}
                  onClick={() => handleCategoryChange(category.id)}
                >
                  <div className="flex items-start">
                    <div className="mr-3 mt-0.5">
                      <div className={`w-5 h-5 rounded-full border ${
                        selectedCategories.includes(category.id)
                          ? 'border-primary bg-primary'
                          : 'border-gray-300'
                      }`}>
                        {selectedCategories.includes(category.id) && (
                          <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        )}
                      </div>
                    </div>
                    <div>
                      <h5 className="font-bold text-lg">{category.category}</h5>
                      <p className="text-gray-600 text-sm">
                        {category.challenges.length} potential challenges
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="flex justify-end">
              <Button
                onClick={handleNext}
                disabled={selectedCategories.length === 0}
                className={selectedCategories.length === 0 ? 'opacity-50 cursor-not-allowed' : ''}
              >
                Continue
              </Button>
            </div>
          </div>
        )}
        
        {/* Step 2: Select Specific Challenges */}
        {step === 2 && (
          <div>
            <h4 className="text-xl font-bold mb-4">Select Your Specific Challenges</h4>
            <p className="text-gray-600 mb-6">
              Choose the specific challenges you're facing within these categories.
            </p>
            
            <div className="space-y-6 mb-8">
              {challenges
                .filter(category => selectedCategories.includes(category.id))
                .map((category) => (
                  <div key={category.id}>
                    <h5 className="font-bold text-lg mb-3">{category.category}</h5>
                    <div className="grid md:grid-cols-2 gap-4">
                      {category.challenges.map((challenge) => (
                        <div 
                          key={challenge.id}
                          className={`border rounded-lg p-4 cursor-pointer transition-all duration-200 ${
                            selectedChallenges.includes(challenge.id)
                              ? 'border-primary bg-primary/5'
                              : 'border-gray-200 hover:border-primary/50'
                          }`}
                          onClick={() => handleChallengeChange(challenge.id)}
                        >
                          <div className="flex items-start">
                            <div className="mr-3 mt-0.5">
                              <div className={`w-5 h-5 rounded ${
                                selectedChallenges.includes(challenge.id)
                                  ? 'bg-primary'
                                  : 'border border-gray-300'
                              }`}>
                                {selectedChallenges.includes(challenge.id) && (
                                  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                  </svg>
                                )}
                              </div>
                            </div>
                            <div>
                              <h6 className="font-bold">{challenge.title}</h6>
                              <p className="text-gray-600 text-sm">{challenge.description}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
            </div>
            
            <div className="flex justify-between">
              <Button variant="outline" onClick={handleBack}>
                Back
              </Button>
              <Button
                onClick={handleNext}
                disabled={selectedChallenges.length === 0}
                className={selectedChallenges.length === 0 ? 'opacity-50 cursor-not-allowed' : ''}
              >
                See Recommendations
              </Button>
            </div>
          </div>
        )}
        
        {/* Step 3: Recommended Solutions */}
        {step === 3 && (
          <div>
            <h4 className="text-xl font-bold mb-4">Recommended Solutions</h4>
            <p className="text-gray-600 mb-6">
              Based on your challenges, we recommend the following solutions:
            </p>
            
            <div className="space-y-6 mb-8">
              {recommendedSolutions.length > 0 ? (
                recommendedSolutions.map((solution) => (
                  <div key={solution.id} className="border border-primary rounded-lg p-6 bg-primary/5">
                    <h5 className="font-bold text-xl text-primary mb-2">{solution.title}</h5>
                    <p className="text-gray-700 mb-4">{solution.description}</p>
                    
                    <div className="mb-4">
                      <h6 className="font-semibold mb-2">Key Features:</h6>
                      <ul className="grid md:grid-cols-2 gap-2">
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
                    
                    <div className="flex justify-end">
                      <Link href={`/solutions/${solution.id}`} className="text-primary font-medium hover:text-secondary inline-flex items-center">
                        View Full Solution Details
                        <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center py-8">
                  <p className="text-gray-500">No solutions match your selected challenges.</p>
                </div>
              )}
            </div>
            
            <div className="flex justify-between">
              <Button variant="outline" onClick={handleBack}>
                Back
              </Button>
              <Button variant="secondary" onClick={handleReset}>
                Start Over
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SolutionConfigurator;
