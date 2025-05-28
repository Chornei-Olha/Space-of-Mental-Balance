import Header from "@/app/components/Header";
import HeroSection from "@/app/components/HeroSection";
import AboutUs from "./components/AboutUs";
import Cards from "@/app/components/Cards";
import HelpSection from "@/app/components/HelpSection";
import CustomerReviews from "@/app/components/CustomerReviews";
import QuoteSection from "@/app/components/QuoteSection";
import ContactForm from "@/app/components/ContactForm";
import Footer from "@/app/components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-[url('/assets/bg.png')] bg-cover bg-center">
      <Header />
      <HeroSection />
      <AboutUs />
      <Cards />
      <HelpSection />
      <CustomerReviews />
      <QuoteSection />
      <ContactForm />
      <Footer />
    </main>
  );
}
