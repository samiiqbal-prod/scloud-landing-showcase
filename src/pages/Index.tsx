import { Helmet } from "react-helmet-async";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import ServicesSection from "@/components/sections/ServicesSection";
import DatacenterSection from "@/components/sections/DatacenterSection";
import SecuritySection from "@/components/sections/SecuritySection";
import CTASection from "@/components/sections/CTASection";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>SCloud - Enterprise Cloud Infrastructure & Web Hosting</title>
        <meta
          name="description"
          content="Enterprise-grade cloud infrastructure and reliable web hosting backed by Tier-III certified data center. Scale your business with 99.98% uptime guarantee."
        />
        <meta name="keywords" content="cloud hosting, IaaS, web hosting, cloud infrastructure, data center, enterprise cloud" />
        <link rel="canonical" href="https://scloud.com" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <HeroSection />
          <section id="services">
            <ServicesSection />
          </section>
          <section id="infrastructure">
            <DatacenterSection />
          </section>
          <section id="security">
            <SecuritySection />
          </section>
          <CTASection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
