import Header from "@/app/components/Header";
import HeroSection from "@/app/components/HeroSection";
import AboutUs from "./components/AboutUs";
import AboutVideo from "./components/AboutVideo";
import Cards from "@/app/components/Cards";
import HelpSection from "@/app/components/HelpSection";
import CustomerReviews from "@/app/components/CustomerReviews";
import QuoteSection from "@/app/components/QuoteSection";
import ContactForm from "@/app/components/ContactForm";
import Footer from "@/app/components/Footer";

export default function Home() {
  return (
    <main
      className="flex min-h-screen flex-col items-center"
      style={{
        background: `linear-gradient(
        180deg,
        #D5C9B5 0%,
        #EAE4DA 19%,
        #F1EEE7 68%,
        #F5F1ED 75%,
        #FFFFFF 100%
      )`,
      }}
    >
      <Header />
      <HeroSection />
      <AboutUs />
      <AboutVideo
        videoSrc="https://www.youtube.com/embed/ID_відео"
        title="Our True Selves"
        description="In this video, we — the two founders of this project — talk about our backgrounds, what inspired us to start this journey, and how we hope to help others find mental balance and support."
      />{" "}
      <Cards />
      <HelpSection />
      <CustomerReviews />
      <QuoteSection />
      <ContactForm />
      <Footer />
    </main>
  );
}
