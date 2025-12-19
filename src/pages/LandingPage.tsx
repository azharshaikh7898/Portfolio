import { Header } from '../components/Header';
import { HeroSection } from '../components/HeroSection';
import { AboutUsSection } from '../components/AboutUsSection';
import { WhyChooseUsSection } from '../components/WhyChooseUsSection';
import { ProjectsSection } from '../components/ProjectsSection';
import { ClientsSection } from '../components/ClientsSection';
import { ContactForm } from '../components/ContactForm';
import { NewsletterSection } from '../components/NewsletterSection';
import { Footer } from '../components/Footer';

export function LandingPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <HeroSection />
      <AboutUsSection />
      <WhyChooseUsSection />
      <div id="projects">
        <ProjectsSection />
      </div>
      <div id="clients">
        <ClientsSection />
      </div>
      <div id="contact">
        <ContactForm />
      </div>
      <NewsletterSection />
      <Footer />
    </div>
  );
}
