import { notFound } from "next/navigation";

import { allStudies, cta, site } from "@/data/content";
import CaseStudy from "@/components/CaseStudy";
import Colophon from "@/components/Colophon";
import CtaButton from "@/components/CtaButton";
import Motion from "@/components/Motion";
import PageBar from "@/components/PageBar";

export function generateStaticParams() {
  return allStudies.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const study = allStudies.find((s) => s.slug === slug);
  if (!study) return {};

  const title = `${study.name} — ${study.tag} · Raghav Gupta`;
  return {
    title,
    description: study.lede,
    alternates: { canonical: `/work/${study.slug}` },
    openGraph: {
      type: "article",
      url: `/work/${study.slug}`,
      siteName: site.name.first + " " + site.name.last,
      title,
      description: study.lede,
    },
    twitter: { card: "summary_large_image", title, description: study.lede },
  };
}

export default async function StudyPage({ params }) {
  const { slug } = await params;
  const index = allStudies.findIndex((s) => s.slug === slug);
  if (index === -1) notFound();

  const study = allStudies[index];

  return (
    <>
      <Motion />
      <PageBar backLabel="← Raghav Gupta">
        <CtaButton item={cta.work} />
        <CtaButton item={cta.resumeShort} variant="primary" />
      </PageBar>

      <CaseStudy
        study={study}
        index={index}
        total={allStudies.length}
        prev={allStudies[index - 1] || null}
        next={allStudies[index + 1] || null}
      />

      <Colophon />
    </>
  );
}
