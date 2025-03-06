import DaftarWeb from "@/components/section/DaftarWeb";
import { IntroductionSection } from "@/components/section/IntroductionSection";
import WebTimelineSection from "@/components/section/WebTimelineSection";
import FlowingMenu from "@/components/ui/FlowingMenu";
import { BookOpen, Calendar, PiggyBank, Target, Users } from "lucide-react";

export default function WebsitePage() {
  return (
    <section className="w-full pt-20 snap-y snap-mandatory">
      <DaftarWeb />
      <IntroductionSection data={dataWebsiteITC} />
      <IntroductionSection data={dataWebsiteTecno} />
      <WebTimelineSection />
      <div className="snap-start" style={{ height: "100vh", position: "relative", display: "flex", alignItems: "center" }}>
        <FlowingMenu items={items} />
      </div>
    </section>
  );
}

const items = [
  { link: '/', text: 'Home', image: 'https://picsum.photos/600/400?random=1' },
  { link: '/perlombaan', text: 'Perlombaan', image: 'https://picsum.photos/600/400?random=2' },
  { link: '/fasilitator', text: 'Fasilitator', image: 'https://picsum.photos/600/400?random=3' },
  { link: '/penelitian', text: 'Penelitian', image: 'https://picsum.photos/600/400?random=4' }
];

const dataWebsiteITC = [
  {
    icon: <Users className="h-4 w-4 text-black dark:text-neutral-400" />,
    title: "Pengertian",
    description:
      "Pengembangan Website ITC berupa web interaktif, modern dan memiliki banyak fitur, sebagai identitas UKMFT-ITC di dunia internet",
  },
  {
    icon: <Target className="h-4 w-4 text-black dark:text-neutral-400" />,
    title: ["Output", "Sasaran"],
    description:
      ["UKMFT-ITC mempunyai website yang modern, interaktif, dan responsif", "Umum"],
  },
  {
    icon: <BookOpen className="h-4 w-4 text-black dark:text-neutral-400" />,
    title: "Penanggung Jawab",
    description: "Ahmad Mufid Risqi",
  },
  {
    icon: <Calendar className="h-4 w-4 text-black dark:text-neutral-400" />,
    title: "Timeline",
    description: `April - Agustus
                  21 hari membahas fitur dan teknologi yang digunakan
                  2 bulan pembelajaran teknologi
                  2 bulan eksekusi
                  9 hari testing`,
    isList: true,
  },
  {
    icon: <PiggyBank className="h-4 w-4 text-black dark:text-neutral-400" />,
    title: "Anggaran",
    description: "Rp 1.000.000.000",
  },
];

const dataWebsiteTecno = [
  {
    icon: <Users className="h-4 w-4 text-black dark:text-neutral-400" />,
    title: "Pengertian",
    description:
      "Pengembangan Website TECHNOTAIMENT berupa web interaktif, modern dan memiliki  fitur untuk mempermudah akses pendaftaran perlombaan",
  },
  {
    icon: <Target className="h-4 w-4 text-black dark:text-neutral-400" />,
    title: ["Output", "Sasaran"],
    description:
      ["Proker TECHNOTAIMENT mempunyai website yang memudahkan peserta untuk daftar", "Umum"],
  },
  {
    icon: <BookOpen className="h-4 w-4 text-black dark:text-neutral-400" />,
    title: "Penanggung Jawab",
    description: "Ahmad Mufid Risqi",
  },
  {
    icon: <Calendar className="h-4 w-4 text-black dark:text-neutral-400" />,
    title: "Timeline",
    description: `7 hari membahas fitur dan teknologi yang digunakan
                  7 hari pembelajaran teknologi
                  9 hari eksekusi
                  5 hari testing
                  Menggunakan Laravel 11 & Mysql`,
    isList: true,
  },
  {
    icon: <PiggyBank className="h-4 w-4 text-black dark:text-neutral-400" />,
    title: "Anggaran",
    description: "Rp 1.000.000.000",
  },
];
