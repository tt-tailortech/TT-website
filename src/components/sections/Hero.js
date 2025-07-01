import Button from '../ui/Button';
import { useTranslation } from 'next-i18next';

const Hero = ({
  backgroundClass = "bg-gradient-to-r from-primary to-primary/80"
}) => {
  const { t } = useTranslation('common');
  return (
    <section className={`py-20 ${backgroundClass}`}>
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            {t('hero.title')}
          </h1>
          <p className="text-xl md:text-2xl mb-10 text-white/90">
            {t('hero.subtitle')}
          </p>
          <Button href="/solutions" variant="secondary" size="lg">
            {t('cta.explore_solutions')}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
