"use client";
import { SiteThemeProvider } from '@/components/sections/ThemeProvider';
import NavbarStyleMinimal from '@/components/navigation/NavbarStyleMinimal';
import BillboardHero from '@/components/sections/layouts/hero/BillboardHero';
import SplitAbout from '@/components/sections/layouts/about/SplitAbout';
import HowToBuy3D from '@/components/sections/layouts/howtobuy/3DHTB';
import TextGridTokenomics from '@/components/sections/layouts/tokenomics/TextGridTokenomics';
import CentralFAQ from '@/components/sections/layouts/faq/CentralFAQ';
import FooterLogoEmphasisBackgroundGradient from '@/components/footer/FooterLogoEmphasisBackgroundGradient';

export default function Home() {
  const links = [
    { name: "Hero", id: "hero" },
    { name: "About", id: "about" },
    { name: "How to Buy", id: "how-to-buy" },
    { name: "Tokenomics", id: "tokenomics" },
    { name: "FAQ", id: "faq" },
    { name: "Footer", id: "footer" },
  ];

  return (
    <SiteThemeProvider theme={{ styleVariant: "futuristicAndOutOfBox", colorTemplate: 2, textAnimation: "slide" }}>
      <div id="nav" data-section="nav">
        <NavbarStyleMinimal
          logoSrc="/images/logo.svg"
          logoAlt="Webild"
          leftButtonText="Menu"
          rightButtonText="Contact"
          onLeftButtonClick={() => alert('Menu clicked')}
          onRightButtonClick={() => alert('Contact clicked')}
        />
      </div>
      <div id="hero" data-section="hero" className="scroll-mt-24">
        <BillboardHero title="Welcome to Your Brand" subtitle="Innovative SaaS solutions at your fingertips!" />
      </div>
      <div id="about" data-section="about" className="scroll-mt-24">
        <SplitAbout description="Discover our revolutionary SaaS product tailored for your needs." />
      </div>
      <div id="how-to-buy" data-section="how-to-buy" className="scroll-mt-24">
        <HowToBuy3D
          title="3 Easy Steps to Start" 
          steps={[
            { title: "Step 1", description: "Sign up for a free trial", image: "/images/placeholder1.avif", position: "left", isCenter: false },
            { title: "Step 2", description: "Explore the features", image: "/images/placeholder2.avif", position: "center", isCenter: true },
            { title: "Step 3", description: "Start your journey", image: "/images/placeholder3.avif", position: "right", isCenter: false },
          ]} 
        />
      </div>
      <div id="tokenomics" data-section="tokenomics" className="scroll-mt-24">
        <TextGridTokenomics
          title="Our Offering"
          description="Explore essential stats about our SaaS product for transparency and trust."
          tokenData={[
            { value: "99%", description: "Uptime" },
            { value: "5", description: "Pricing Plans" },
            { value: "1000+", description: "Happy Clients" },
            { value: "24/7", description: "Support" },
          ]}
        />
      </div>
      <div id="faq" data-section="faq" className="scroll-mt-24">
        <CentralFAQ
          items={[
            { title: "What is Your Brand?", content: "Your Brand is a SaaS solution designed to streamline business operations and enhance productivity." },
            { title: "How do I start?", content: "Sign up for a free trial to explore features and benefits!" },
            { title: "What plans do you offer?", content: "We offer several pricing plans tailored to different needs." },
            { title: "Is there customer support?", content: "Yes, our support team is available 24/7 via chat and email." },
          ]}
        />
      </div>
      <div id="footer" data-section="footer">
        <FooterLogoEmphasisBackgroundGradient
          logoSrc="/images/logo.svg"
          logoText="Webild"
          items={[
            { label: "Privacy Policy", onClick: () => alert('Privacy Policy Clicked') },
            { label: "Terms of Service", onClick: () => alert('Terms of Service Clicked') },
            { label: "Contact Us", onClick: () => alert('Contact Us Clicked') },
          ]}
        />
      </div>
    </SiteThemeProvider>
  );
}
