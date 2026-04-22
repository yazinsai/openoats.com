import { CTA } from "@/components/CTA";
import { Features } from "@/components/Features";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { Nav } from "@/components/Nav";
import { Privacy } from "@/components/Privacy";
import { getLatestRelease } from "@/lib/release";

export const revalidate = 3600;

export default async function Home() {
  const release = await getLatestRelease();

  return (
    <div className="flex flex-col flex-1 min-h-screen">
      <Nav />
      <main className="flex-1">
        <Hero version={release.tagName} />
        <HowItWorks />
        <Privacy />
        <Features />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
