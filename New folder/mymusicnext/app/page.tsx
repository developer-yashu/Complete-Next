import HeroSection from "@/component/HeroSection";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-whit/[0.02] ">
        <h1 className="text-3xl text-center ">chai or code
        </h1>
        <HeroSection/>
      </main>
    </>
  );
}
