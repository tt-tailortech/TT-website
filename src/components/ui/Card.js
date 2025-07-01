import Image from 'next/image';
import Link from 'next/link';

const Card = ({
  title,
  description,
  imageSrc,
  imageAlt,
  link,
  linkText = 'Learn More',
  className = '',
  imageHeight = 200,
  variant = 'default'
}) => {
  // Card variants
  const cardStyles = {
    default: 'bg-white shadow-md hover:shadow-lg',
    bordered: 'bg-white border border-gray-200 hover:border-primary',
    highlight: 'bg-lightgray border-l-4 border-primary'
  };

  return (
    <div className={`flex flex-col rounded-lg overflow-hidden transition-all duration-300 ${cardStyles[variant]} ${className}`}>
      <div className="relative w-full" style={{ 
        paddingTop: '56.25%',
        backgroundColor: '#f9f7f2' /* Lighter, whiter beige */
      }}>
        {imageSrc ? (
          <Image
            src={imageSrc}
            alt={imageAlt || title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-contain p-2"
            style={{ objectFit: 'contain' }}
            loading="lazy"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-gray-400 text-lg">{title}</span>
          </div>
        )}
      </div>
      
      <div className="p-6">
        {title && <h3 className="text-xl font-bold mb-3">{title}</h3>}
        {description && (
          <p className="text-gray-600 mb-4">{description}</p>
        )}
        {link && (
          <Link 
            href={link} 
            className="text-primary font-medium hover:text-secondary inline-flex items-center"
          >
            {linkText}
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-5 w-5 ml-1" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M14 5l7 7m0 0l-7 7m7-7H3" 
              />
            </svg>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Card;
