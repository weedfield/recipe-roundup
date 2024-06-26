import BaseLayout from '../components/layouts/BaseLayout';
import FeaturedContent from '../components/organisms/FeaturedContent';
import PopularRecipes from '../components/organisms/PopularRecipes';
import NewRecipes from '../components/organisms/NewRecipes';
import { useEffect, useState } from 'react';

const HomePage = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <BaseLayout>
      <div className="container mx-auto bg-white p-4">
        <div className="lg:flex lg:space-x-4">
          <div className="w-full lg:w-8/12">
            <FeaturedContent />
          </div>

          <aside className="hidden lg:block lg:w-4/12">
            <div className={`sticky top-4 transition-all duration-300 ${scrollY > 100 ? 'pt-4' : 'pt-0'}`}>
              <PopularRecipes />
              <NewRecipes />
            </div>
          </aside>
        </div>

        <div className="lg:hidden mt-8">
          <PopularRecipes />
          <NewRecipes />
        </div>
      </div>
    </BaseLayout>
  );
};

export default HomePage;
