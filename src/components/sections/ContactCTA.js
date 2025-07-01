import { useTranslation } from 'next-i18next';
import Button from '../ui/Button';

const ContactCTA = ({
  title,
  subtitle,
  buttonText,
  buttonLink = "/contact",
  backgroundColor = "bg-primary",
  namespace = 'common',
}) => {
  const { t, ready } = useTranslation(namespace);
  
  // Default values from translations if not provided as props
  const defaultTitle = t('cta.title', { defaultValue: 'Ready to Discuss Your Project?', ns: 'common' });
  const defaultSubtitle = t('cta.subtitle', { 
    defaultValue: 'Get in touch with our team to explore how we can create a tailored solution for your specific needs.',
    ns: 'common' 
  });
  const defaultButtonText = t('cta.buttonText', { defaultValue: 'Contact Us', ns: 'common' });
  
  // Use provided props or fall back to translations
  const displayTitle = title || defaultTitle;
  const displaySubtitle = subtitle || defaultSubtitle;
  const displayButtonText = buttonText || defaultButtonText;
  
  // Don't render until translations are ready
  if (!ready) return null;
  return (
    <section className={`py-16 ${backgroundColor}`}>
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{displayTitle}</h2>
          <p className="text-lg mb-8 text-white/90">{displaySubtitle}</p>
          <Button 
            href={buttonLink} 
            variant="secondary" 
            size="lg"
          >
            {displayButtonText}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
