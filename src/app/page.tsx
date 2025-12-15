"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import HeroEmailSignup from '@/components/sections/hero/HeroEmailSignup';
import InlineImageSplitTextAbout from '@/components/sections/about/InlineImageSplitTextAbout';
import ProductCardThree from '@/components/sections/product/ProductCardThree';
import FeatureCardTen from '@/components/sections/feature/FeatureCardTen';
import MetricCardEight from '@/components/sections/metrics/MetricCardEight';
import TestimonialCardFifteen from '@/components/sections/testimonial/TestimonialCardFifteen';
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FooterBaseCard from '@/components/sections/footer/FooterBaseCard';
import { Car, Gauge, Leaf, Shield, Sparkles, Wifi, Wind, Zap } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="hover-bubble"
      defaultTextAnimation="background-highlight"
      borderRadius="rounded"
      contentWidth="medium"
      sizing="mediumSizeExtraLargeTitles"
      background="none"
      cardStyle="noise-gradient"
      primaryButtonStyle="layered-depth"
      secondaryButtonStyle="solid"
      headingFontWeight="normal"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleApple
          brandName="NOvella"
          navItems={[
            { name: "Vehicles", id: "vehicles" },
            { name: "About", id: "about" },
            { name: "Performance", id: "metrics" },
            { name: "Testimonials", id: "testimonials" },
            { name: "Contact", id: "contact" }
          ]}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroEmailSignup
          title="Drive the Future with NOvella"
          description="Elegant design. Intelligent technology. Built for the modern road."
          tag="Premium Automotive"
          tagIcon={Zap}
          inputPlaceholder="Enter your email"
          buttonText="Explore the Collection"
          onSubmit={(email) => console.log('Newsletter signup:', email)}
        />
      </div>

      <div id="about" data-section="about">
        <InlineImageSplitTextAbout
          heading={[
            { type: "text", content: "Redefining automotive excellence with" },
            { type: "image", src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_363fycCW5gR5mBuwyI3Zdk1DwTq/uploaded-1765797340015-pr3mjr0o.jpg", alt: "NOvella brand emblem" },
            { type: "text", content: "innovation and precision engineering" }
          ]}
          useInvertedBackground="noInvert"
          buttons={[
            { text: "Learn More", href: "#features" }
          ]}
        />
      </div>

      <div id="vehicles" data-section="vehicles">
        <ProductCardThree
          title="Explore Our Collection"
          description="Discover NOvella vehicles crafted for performance, style, and sustainability"
          tag="Featured Vehicles"
          tagIcon={Car}
          products={[
            {
              id: "1",
              name: "NOvella Velocity Sedan",
              price: "Starting at $45,000",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_363fycCW5gR5mBuwyI3Zdk1DwTq/uploaded-1765797336888-36bm4lfg.jpg",
              imageAlt: "NOvella Velocity luxury sedan"
            },
            {
              id: "2",
              name: "NOvella Horizon SUV",
              price: "Starting at $62,000",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_363fycCW5gR5mBuwyI3Zdk1DwTq/uploaded-1765797337741-2nbjcrlc.jpg",
              imageAlt: "NOvella Horizon premium SUV"
            },
            {
              id: "3",
              name: "NOvella Quantum Electric",
              price: "Starting at $58,000",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_363fycCW5gR5mBuwyI3Zdk1DwTq/uploaded-1765797339221-pshcvph5.jpg",
              imageAlt: "NOvella Quantum electric vehicle"
            }
          ]}
          gridVariant="three-columns-all-equal-width"
          animationType="slide-up"
          containerStyle="default"
          textboxLayout="default"
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="features" data-section="features">
        <FeatureCardTen
          title="Engineering Excellence"
          description="Every NOvella vehicle combines cutting-edge technology with timeless design"
          tag="Innovation"
          tagIcon={Sparkles}
          features={[
            {
              id: "1",
              title: "Advanced Intelligent Technology",
              description: "Experience AI-powered driving assistance, real-time performance monitoring, and seamless connectivity across all systems",
              media: { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_363fycCW5gR5mBuwyI3Zdk1DwTq/uploaded-1765797341101-ljpddoid.jpg" },
              reverse: false,
              items: [
                { icon: Zap, text: "Smart performance optimization" },
                { icon: Shield, text: "Advanced safety systems" },
                { icon: Wifi, text: "Seamless connectivity" }
              ]
            },
            {
              id: "2",
              title: "Precision Performance",
              description: "Engineered for both power and efficiency. NOvella vehicles deliver responsive handling, exceptional acceleration, and superior fuel economy",
              media: { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_363fycCW5gR5mBuwyI3Zdk1DwTq/uploaded-1765797341978-zz0onqea.jpg" },
              reverse: true,
              items: [
                { icon: Gauge, text: "Dynamic performance tuning" },
                { icon: Leaf, text: "Eco-efficient engines" },
                { icon: Wind, text: "Aerodynamic design" }
              ]
            }
          ]}
          textboxLayout="default"
          animationType="slide-up"
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="metrics" data-section="metrics">
        <MetricCardEight
          title="Trusted by thousands of drivers worldwide who demand more from their vehicles"
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_363fycCW5gR5mBuwyI3Zdk1DwTq/uploaded-1765797335764-a67x20g4.jpg"
          imageAlt="NOvella performance metrics"
          metrics={[
            { id: "1", value: "98%", title: "Owner Satisfaction" },
            { id: "2", value: "50K+", title: "Happy Drivers" },
            { id: "3", value: "15Y", title: "Industry Leadership" },
            { id: "4", value: "350HP", title: "Average Performance" }
          ]}
          metricVariant="border"
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardFifteen
          testimonial="NOvella has completely transformed my driving experience. The blend of cutting-edge technology, elegant design, and exceptional performance is unmatched. I feel confident and stylish every time I'm behind the wheel."
          rating={5}
          author="Sarah Mitchell, Urban Professional"
          avatars={[
            { src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_363fycCW5gR5mBuwyI3Zdk1DwTq/uploaded-1765797342641-c6hmydpo.jpg", alt: "Sarah Mitchell" },
            { src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_363fycCW5gR5mBuwyI3Zdk1DwTq/uploaded-1765797343323-te5v27tj.jpg", alt: "Owner testimonial" },
            { src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_363fycCW5gR5mBuwyI3Zdk1DwTq/uploaded-1765797344130-wf6ic88r.jpg", alt: "Owner testimonial" },
            { src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_363fycCW5gR5mBuwyI3Zdk1DwTq/uploaded-1765797344816-w4iipol6.jpg", alt: "Owner testimonial" }
          ]}
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplitForm
          title="Ready to Drive the Future?"
          description="Schedule your NOvella test drive today or get personalized recommendations from our automotive experts"
          inputs={[
            { name: "name", type: "text", placeholder: "Full Name", required: true },
            { name: "email", type: "email", placeholder: "Email Address", required: true },
            { name: "phone", type: "tel", placeholder: "Phone Number", required: false }
          ]}
          textarea={{
            name: "message",
            placeholder: "Tell us which NOvella model interests you and any questions you have",
            rows: 5,
            required: false
          }}
          useInvertedBackground="noInvert"
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_363fycCW5gR5mBuwyI3Zdk1DwTq/uploaded-1765797345666-39kre7z2.png"
          imageAlt="NOvella showroom experience"
          mediaPosition="right"
          buttonText="Schedule Test Drive"
          onSubmit={(data) => console.log('Contact form submitted:', data)}
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBaseCard
          logoText="NOvella"
          columns={[
            {
              title: "Vehicles",
              items: [
                { label: "Velocity Sedan", href: "#vehicles" },
                { label: "Horizon SUV", href: "#vehicles" },
                { label: "Quantum Electric", href: "#vehicles" }
              ]
            },
            {
              title: "Company",
              items: [
                { label: "About NOvella", href: "#about" },
                { label: "Our Innovation", href: "#features" },
                { label: "Careers", href: "#" }
              ]
            },
            {
              title: "Support",
              items: [
                { label: "Test Drive", href: "#contact" },
                { label: "Service Centers", href: "#" },
                { label: "Ownership", href: "#" }
              ]
            }
          ]}
          copyrightText="© 2024 NOvella Automotive. All rights reserved."
        />
      </div>
    </ThemeProvider>
  );
}