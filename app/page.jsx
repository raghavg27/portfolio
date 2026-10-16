import Motion from "@/components/Motion";
import Ribbon from "@/components/Ribbon";
import Masthead from "@/components/Masthead";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Now from "@/components/Now";
import Building from "@/components/Building";
import Systems from "@/components/Systems";
import Method from "@/components/Method";
import Record from "@/components/Record";
import Skills from "@/components/Skills";
import Colophon from "@/components/Colophon";

export default function Home() {
  return (
    <>
      <Motion />
      <Ribbon />
      <Masthead />
      <main>
        <Hero />
        <Services />
        <Now />
        <Building />
        <Systems />
        <Method />
        <Record />
        <Skills />
      </main>
      <Colophon />
    </>
  );
}
