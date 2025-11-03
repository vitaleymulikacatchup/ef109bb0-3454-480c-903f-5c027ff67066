"use client"

import { ThemeProvider } from "@/providers/ThemeProvider";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import TextSplitAbout from '@/components/sections/about/TextSplitAbout';
import ProductCardThree from '@/components/sections/product/ProductCardThree';
import PricingCardTwo from '@/components/sections/pricing/PricingCardTwo';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import SocialProofTwo from '@/components/sections/socialProof/SocialProofTwo';
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';
import { Crown, Flame, MessageSquare, Shield, Sparkles, Star } from "lucide-react";

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="text-stagger"
      defaultTextAnimation="background-highlight"
      borderRadius="pill"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleApple
          navItems={[
            { name: "Shop", id: "product" },
            { name: "About", id: "about" },
            { name: "Reviews", id: "testimonial" },
            { name: "Contact", id: "contact" }
          ]}
          brandName="SneakerVault"
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboard
          title="Step Into Style"
          description="Discover the hottest sneakers from premium brands. From classic styles to limited drops, find your perfect pair."
          tag="New Arrivals"
          tagIcon={Sparkles}
          buttons={[
            { text: "Shop Now", href: "product" },
            { text: "View Collection", href: "product" }
          ]}
          imageSrc="https://images.pexels.com/photos/4027606/pexels-photo-4027606.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Premium sneaker collection display"
        />
      </div>

      <div id="about" data-section="about">
        <TextSplitAbout
          title="SneakerVault"
          description={[
            "We're passionate about bringing you the finest sneaker collection from the world's most coveted brands.",
            "From limited edition releases to timeless classics, every pair in our vault tells a story of style, comfort, and authenticity."
          ]}
          buttons={[
            { text: "Our Story", href: "about" }
          ]}
          showBorder={true}
        />
      </div>

      <div id="product" data-section="product">
        <ProductCardThree
          title="Featured Sneakers"
          description="Handpicked selection of the most popular sneakers in our collection"
          tag="Hot Picks"
          tagIcon={Flame}
          products={[
            {
              id: "1",
              name: "Nike Air Force 1 Low White",
              price: "$90.00",
              imageSrc: "https://images.pexels.com/photos/13288274/pexels-photo-13288274.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Nike Air Force 1 Low White",
              initialQuantity: 1
            },
            {
              id: "2",
              name: "Adidas Yeezy Boost 350 V2",
              price: "$220.00",
              imageSrc: "https://images.pexels.com/photos/11820506/pexels-photo-11820506.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Adidas Yeezy Boost 350 V2",
              initialQuantity: 1
            },
            {
              id: "3",
              name: "Jordan 1 Retro High Chicago",
              price: "$170.00",
              imageSrc: "https://images.pexels.com/photos/2385477/pexels-photo-2385477.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Jordan 1 Retro High Chicago",
              initialQuantity: 1
            }
          ]}
          buttons={[
            { text: "View All", href: "product" }
          ]}
        />
      </div>

      <div id="pricing" data-section="pricing">
        <PricingCardTwo
          title="Membership Tiers"
          description="Join our sneaker community and unlock exclusive benefits"
          tag="Membership"
          tagIcon={Crown}
          plans={[
            {
              id: "basic",
              badge: "Starter",
              badgeIcon: Star,
              price: "Free",
              subtitle: "Perfect for casual sneaker lovers",
              buttons: [
                { text: "Get Started", href: "contact" },
                { text: "Learn More", href: "about" }
              ],
              features: [
                "Access to regular releases",
                "Basic customer support",
                "Standard shipping rates"
              ]
            },
            {
              id: "premium",
              badge: "Most Popular",
              badgeIcon: Sparkles,
              price: "$9.99/mo",
              subtitle: "For serious sneaker enthusiasts",
              buttons: [
                { text: "Go Premium", href: "contact" },
                { text: "Compare Plans", href: "pricing" }
              ],
              features: [
                "Early access to limited drops",
                "Free shipping on all orders",
                "Priority customer support",
                "Exclusive member discounts"
              ]
            }
          ]}
        />
      </div>

      <div id="testimonial" data-section="testimonial">
        <TestimonialCardOne
          title="What Sneakerheads Say"
          description="Real reviews from our satisfied customers"
          tag="Reviews"
          tagIcon={MessageSquare}
          testimonials={[
            {
              id: "1",
              name: "Marcus Johnson",
              role: "Sneaker Collector",
              company: "Urban Style Blog",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/18398399/pexels-photo-18398399.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Marcus Johnson portrait"
            },
            {
              id: "2",
              name: "Sofia Chen",
              role: "Fashion Influencer",
              company: "Style Weekly",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/7239871/pexels-photo-7239871.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Sofia Chen portrait"
            },
            {
              id: "3",
              name: "Tyler Brooks",
              role: "Street Style Photographer",
              company: "Urban Lens",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/9637816/pexels-photo-9637816.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Tyler Brooks portrait"
            },
            {
              id: "4",
              name: "Maya Patel",
              role: "Fitness Coach",
              company: "Active Life Gym",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/5941809/pexels-photo-5941809.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Maya Patel portrait"
            },
            {
              id: "5",
              name: "Alex Rivera",
              role: "Sneaker Reseller",
              company: "Kicks Market",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/6973098/pexels-photo-6973098.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Alex Rivera portrait"
            }
          ]}
        />
      </div>

      <div id="socialProof" data-section="socialProof">
        <SocialProofTwo
          title="Authorized Retailer"
          description="Official partner of the world's top sneaker brands"
          tag="Trusted"
          tagIcon={Shield}
          logos={[
            "https://images.pexels.com/photos/8176112/pexels-photo-8176112.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/19737599/pexels-photo-19737599.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/9546375/pexels-photo-9546375.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/56950/pexels-photo-56950.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/1670771/pexels-photo-1670771.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplitForm
          title="Get In Touch"
          description="Have questions about sizing, availability, or need recommendations? We're here to help you find the perfect pair."
          inputs={[
            { name: "name", type: "text", placeholder: "Your Name", required: true },
            { name: "email", type: "email", placeholder: "Email Address", required: true }
          ]}
          textarea={{
            name: "message",
            placeholder: "Tell us about your sneaker needs...",
            rows: 4,
            required: true
          }}
          buttonText="Send Message"
          imageSrc="https://images.pexels.com/photos/12252411/pexels-photo-12252411.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Sneaker collection display"
          mediaPosition="right"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBaseReveal
          columns={[
            {
              title: "Shop",
              items: [
                { label: "All Sneakers", href: "product" },
                { label: "New Releases", href: "product" },
                { label: "Limited Edition", href: "product" }
              ]
            },
            {
              title: "Support",
              items: [
                { label: "Size Guide", href: "about" },
                { label: "Returns", href: "about" },
                { label: "Contact Us", href: "contact" }
              ]
            },
            {
              title: "Company",
              items: [
                { label: "About", href: "about" },
                { label: "Reviews", href: "testimonial" },
                { label: "Membership", href: "pricing" }
              ]
            }
          ]}
          copyrightText="© 2025 | SneakerVault"
        />
      </div>
    </ThemeProvider>
  );
}