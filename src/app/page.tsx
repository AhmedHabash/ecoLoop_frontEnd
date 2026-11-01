import { Suspense } from "react";
import Hero from "@/components/landing/Hero";
import JoinForm from "@/components/landing/JoinForm";
import Features from "@/components/landing/Features";

export default function Home() {
  return (
    <>
      <Hero />
      <Suspense>
        <JoinForm />
      </Suspense>
      <Features />
    </>
  );
}
