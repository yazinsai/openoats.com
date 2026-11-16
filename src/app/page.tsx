import { CTA } from "@/components/CTA";
import { Faq } from "@/components/Faq";
import { Files } from "@/components/Files";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { JsonLd } from "@/components/JsonLd";
import { Nav } from "@/components/Nav";
import { Privacy } from "@/components/Privacy";
import { Reliability } from "@/components/Reliability";
import { Transcript } from "@/components/Transcript";
import { getLatestRelease } from "@/lib/release";

export const revalidate = 3600;

export default async function Home() {
  const release = await getLatestRelease();

  return (
    <div className="flex flex-col flex-1 min-h-screen">
      <JsonLd version={release.tagName} />
      <Nav />
      <main className="flex-1">
        <Hero version={release.tagName} />
        <HowItWorks />
        <Reliability />
        <Transcript />
        <Privacy />
        <Files />
        <Faq />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
