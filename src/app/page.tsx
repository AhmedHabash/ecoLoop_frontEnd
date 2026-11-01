import { Suspense } from "react";
import Hero from "@/components/landing/Hero";
import JoinForm from "@/components/landing/JoinForm";
import Features from "@/components/landing/Features";
import HowItWorks from "@/components/landing/HowItWorks";
import Subscription from "@/components/landing/Subscription_Plans";
export default function Home() {
  return (
    <>
      <Hero />
      
      <Features />
      <HowItWorks/>
      <Subscription/>
    </>
  );
}
