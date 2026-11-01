import SectionTitle from "@/components/ui/SectionTitle";
import FeatureCard from "@/components/ui/FeatureCard";
import { features } from "@/data/features";

export default function Features() {
  return (
    <section id="services" className="bg-white py-24">
      {/* id="services": لينك Services في الـ Navbar ينزل هنا */}
      <div className="mx-auto max-w-[1360px] px-6">
        <SectionTitle
          title="One platform, two clear journeys"
          subtitle="Whether you need pickups or work, your dashboard has everything."
        />

        <div className="mt-14 grid gap-7 lg:grid-cols-6">
          {/* grid بـ 6 أعمدة. الكروت بتاخد 4+2 / 2+4 / 3+3 زي التصميم */}
          {features.map((f) => (
            <FeatureCard
              key={f.title}
              icon={f.icon}
              title={f.title}
              description={f.description}
              featured={f.featured}
              className={f.span}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
