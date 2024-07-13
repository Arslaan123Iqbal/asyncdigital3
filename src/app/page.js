import Career from "@/components/Career";
import Client from "@/components/Client";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Hero1 from "@/components/Hero1";

import Navbar from "@/components/Navbar";
import OurProducts from "@/components/OurProducts";
import Slider from "@/components/Slider";
import Team from "@/components/TEam";

import VerticalCardSlider from "@/components/TeamCarousel";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import Vision from "@/components/Vision";
import WhatWeDo from "@/components/WhatWeDo";
import Layout from "@/components/atomic/Layout";
import Image from "next/image";

export default function Home() {
  const testimonials = [
    {
      name: "Jonathon Thomson",
      title: "Risus disse",
      content:
        "Quisquam similique molestiae quia quod dolorum et. Aliquid blanditiis voluptatem maxime qui et voluptas minus. Non provident pariatur nisi. Repellat voluptas culpa eius.",
      rating: 5,
    },
    {
      name: "Jonathon Thomson",
      title: "Risus disse",
      content:
        "Quisquam similique molestiae quia quod dolorum et. Aliquid blanditiis voluptatem maxime qui et voluptas minus. Non provident pariatur nisi. Repellat voluptas culpa eius.",
      rating: 5,
    },
    {
      name: "Jonathon Thomson",
      title: "Risus disse",
      content:
        "Quisquam similique molestiae quia quod dolorum et. Aliquid blanditiis voluptatem maxime qui et voluptas minus. Non provident pariatur nisi. Repellat voluptas culpa eius.",
      rating: 5,
    },
    {
      name: "Jonathon Thomson",
      title: "Risus disse",
      content:
        "Quisquam similique molestiae quia quod dolorum et. Aliquid blanditiis voluptatem maxime qui et voluptas minus. Non provident pariatur nisi. Repellat voluptas culpa eius.",
      rating: 5,
    },
    // Add more testimonials...
  ];

  return (
    <>
      <Navbar />
      <Layout>
        <Hero />
        <Hero1 />
        <Vision />
</Layout>
      

   <TestimonialCarousel testimonials={testimonials}/>
   <Layout>
        <OurProducts />
      </Layout>
      <Slider />
      <Layout>
        <WhatWeDo />
      </Layout>
      <Layout>
        <Career />
      </Layout>
  
       <Team/>
      
      <Layout>
        <Client />
      </Layout>

 

      <Footer />
    </>
  );
}
