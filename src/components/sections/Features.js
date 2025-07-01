import Card from '../ui/Card';
import Button from '../ui/Button';
import { useTranslation } from 'next-i18next';

const Features = ({
  features = [],
  showButton = true,
  columns = 3,
  buttonLink = "/solutions"
}) => {
  const { t } = useTranslation('solutions');
  // Determine grid columns based on the number of features
  const gridCols = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4'
  };

  return (
    <section className="py-16 bg-lightgray">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('page_title')}</h2>
          <p className="text-xl text-gray-600">{t('page_description')}</p>
        </div>

        <div className={`grid ${gridCols[columns]} gap-8 mb-10`}>
          {features.map((feature, index) => (
            <Card
              key={index}
              title={feature.title}
              description={feature.description}
              imageSrc={feature.image}
              imageAlt={feature.title}
              link={feature.link}
              linkText={feature.linkText || t('learn_more')}
            />
          ))}
        </div>

        {showButton && (
          <div className="text-center">
            <Button href={buttonLink} variant="outline">
              {t('view_all')}
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Features;
