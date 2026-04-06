import Hero from "@/components/Hero";
import Sources from "@/components/Sources";
import HowItWorks from "@/components/HowItWorks";
import SampleDigest from "@/components/SampleDigest";
import SignupForm from "@/components/SignupForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <Sources />
      <HowItWorks />
      <SampleDigest />
      <SignupForm />
      <Footer />
    </main>
  );
}
