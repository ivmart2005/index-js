import Header from '../components/layout/Header/Header';
import Hero from '../components/MainPage/Hero/Hero';
import RoleCards from '../components/MainPage/RoleCards/RoleCards';
import ForWhom from '../components/MainPage/ForWhom/ForWhom';
import ChaosSection from '../components/MainPage/ChaosSection/ChaosSection';
import HowItWorks from '../components/MainPage/HowItWorks/HowItWorks';
import AICoefficient from '../components/MainPage/AICoefficient/AICoefficient';
import CatalogSection from '../components/MainPage/CatalogSection/CatalogSection';
import WhySection from '../components/MainPage/WhySection/WhySection';

export default function Home() {
  return (
    <>
      <Header/>
      <div className='container'>
        <Hero/>
        <RoleCards/>
        
        <section id="for_who">
          <ForWhom/>
        </section>
        
        <section id="how_it_works">
          <HowItWorks/>
        </section>
        
        <section id="ai_coefficient">
          <AICoefficient/>
        </section>
        
        <section id="catalog">
          <CatalogSection/>
        </section>
        
        <section id="why">
          <WhySection/>
        </section>

        <section id="solution">
          <ChaosSection/>
        </section>
        
        
        <main>
          <div>В процессе</div>
        </main>
      </div>
    </>
  );
}