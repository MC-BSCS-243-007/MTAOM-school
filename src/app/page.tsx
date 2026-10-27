import Cardsection from "@/components/Cardsection";
import Footer from "@/components/Footer";
import Herosection from "@/components/Herosection";
import Instructors from "@/components/Instructors";
import Testimonials from "@/components/TestimonialSection";
import UpComingWebinars from "@/components/UpcomingWebinars";
import WhyChooseUs from "@/components/WhyChoseUs";

export default function Home() {
  return (
    <>
      <main className="min-h-screen bg-black/96  antialiased bg-grid-white/[0.02] dark:bg-grid-gray-900/[0.02]">
        <Herosection />
        <Cardsection />
        <WhyChooseUs />
        <Testimonials />
        <UpComingWebinars />
        <Instructors />
        <Footer />
      </main>
    </>
  );
}
