import { IntroductionSection } from "@/components/section/IntroductionSection";
import FlowingMenu from "@/components/ui/FlowingMenu";
import { Users, Target, Calendar, PiggyBank, BookOpen } from "lucide-react";

export default function FasilitatorPage() {
  return (
    <section className="w-full pt-20 snap-y snap-mandatory">
      <IntroductionSection data={dataPenelitian} />
      <div className="snap-start" style={{ height: "100vh", position: "relative", display: "flex", alignItems: "center" }}>
        <FlowingMenu items={items} />
      </div>
    </section>
  );
}

const items = [
  { link: '/website', text: 'Website', image: 'https://picsum.photos/600/400?random=1' },
  { link: '/perlombaan', text: 'Perlombaan', image: 'https://picsum.photos/600/400?random=2' },
  { link: '/fasilitator', text: 'Fasilitator', image: 'https://picsum.photos/600/400?random=3' },
  { link: '/thanks', text: 'Terima Kasih', image: 'https://picsum.photos/600/400?random=4' }
];

const dataPenelitian = [
  {
    icon: <Users className="h-4 w-4 text-black dark:text-neutral-400" />,
    title: "Pengertian",
    description: "Litbang mengikuti perlombaan karya tulis ilmiah yang nantinya akan dipublikasi sebagai bentuk publikasi akademik guna mendorong inovasi dan pengembangan keilmuan di lingkungan mahasiswa.",
  },
  {
    icon: <Target className="h-4 w-4 text-black dark:text-neutral-400" />,
    title: ["Output", "Sasaran"],
    description: ["Publikasi karya tulis ilmiah, peningkatan budaya riset, dan pengembangan keterampilan menulis mahasiswa.", "Umum"],
  },
  {
    icon: <BookOpen className="h-4 w-4 text-black dark:text-neutral-400" />,
    title: "Penanggung Jawab",
    description: "Wildan Haydar Amru",
  },
  {
    icon: <Calendar className="h-4 w-4 text-black dark:text-neutral-400" />,
    title: "Timeline",
    description: "Selama satu periode kepengurusan UKMFT-ITC",
  },
  {
    icon: <PiggyBank className="h-4 w-4 text-black dark:text-neutral-400" />,
    title: "Anggaran",
    description: "Rp 1.000.000.000",
  },
];
