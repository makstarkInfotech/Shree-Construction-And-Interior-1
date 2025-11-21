import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Services } from "./components/Services";
import { Portfolio } from "./components/Portfolio";
import { Reviews } from "./components/Reviews";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen">
      {/* Navigation Component */}
      <Navbar />
      
      {/* Main Content Sections */}
      <main>
        {/* Hero Section - Home */}
        <Hero />
        
        {/* About Section */}
        <About />
        
        {/* Services Section */}
        <Services />
        
        {/* Portfolio Section */}
        <Portfolio />
        
        {/* Reviews Section */}
        <Reviews />
        
        {/* Contact Section */}
        <Contact />
      </main>
      
      {/* Footer Component */}
      <Footer />
    </div>
  );
}
