"use client";
import { SiteThemeProvider } from '@/components/sections/ThemeProvider';
import NavbarStyleApple from '@/components/navigation/NavbarStyleApple/NavbarStyleApple';
import SplitHero from '@/components/sections/layouts/hero/SplitHero';
import CtaAbout from '@/components/sections/layouts/about/CtaAbout';
import HowToBuy2D from '@/components/sections/layouts/howtobuy/2DHTB';
import NumberGridTokenomics from '@/components/sections/layouts/tokenomics/NumberGridTokenomics';
import FooterBase from '@/components/footer/FooterBase';

const navItems = [
  { name: 'Hero', id: 'hero' },
  { name: 'About', id: 'about' },
  { name: 'How to Buy', id: 'how-to-buy' },
  { name: 'Tokenomics', id: 'tokenomics' },
  { name: 'Footer', id: 'footer' },
];

export default function Home() {
  return (
    <SiteThemeProvider theme={{
      styleVariant: 'futuristicAndOutOfBox',
      colorTemplate: 2,
      textAnimation: 'slide',
    }}>
      <div id="nav" data-section="nav">
        <NavbarStyleApple
          navItems={navItems}
          logoSrc="/images/logo.svg"
          brandName="Your Brand"
        />
      </div>
      <div id="hero" data-section="hero" className="scroll-mt-24">
        <SplitHero
          title="Experience Innovation"
          subtitle="Join us to change the way you do business"
        />
      </div>
      <div id="about" data-section="about" className="scroll-mt-24">
        <CtaAbout
          title="Discover Our Features"
          descriptions={[
            "Our platform offers seamless integration with existing workflows.",
            "Cloud-based solutions for easy accessibility.",
            "Advanced analytics to drive your business forward."
          ]}
        />
      </div>
      <div id="how-to-buy" data-section="how-to-buy" className="scroll-mt-24">
        <HowToBuy2D variant='reveal' />
      </div>
      <div id="tokenomics" data-section="tokenomics" className="scroll-mt-24">
        <NumberGridTokenomics
          title="Token Metrics"
          description="Understand the financial metrics behind your investments."
          kpiItems={[
            { value: "3M", description: "Total Supply" },
            { value: "1M", description: "Circulating Supply" },
            { value: "10%", description: "Max Transaction Fee" }
          ]}
        />
      </div>
      <div id="footer" data-section="footer" className="scroll-mt-24">
        <FooterBase
          logoSrc="/images/logo.svg"
          logoWidth={100}
          logoHeight={50}
          columns={[
            { title: "Solutions", items: [{ label: "Feature 1", onClick: () => {} }, { label: "Feature 2", onClick: () => {} }] },
            { title: "Company", items: [{ label: "About Us", onClick: () => {} }, { label: "Careers", onClick: () => {} }] },
            { title: "Support", items: [{ label: "Contact", onClick: () => {} }, { label: "FAQ", onClick: () => {} }] },
          ]}
          copyrightText="© 2023 Your Brand. All rights reserved."
          onPrivacyClick={() => {}}
        />
      </div>
    </SiteThemeProvider>
  );
}