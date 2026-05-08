import Navbar from "@/app/components/Navbar";
import Image from "next/image";
import type { Metadata } from "next";
import { siteConfig } from "../site-config";

export const metadata: Metadata = {
  title: "Les équipes du club basket",
  description:
    "Retrouvez les équipes de l'US Plombières Basket, club basket à Plombières-lès-Dijon près de Dijon, des catégories jeunes aux seniors.",
  keywords: siteConfig.keywords,
  alternates: {
    canonical: "/equipes",
  },
  openGraph: {
    title: "Équipes US Plombières Basket",
    description:
      "Les équipes jeunes et seniors du club de basket-ball US Plombières Basket à Plombières-lès-Dijon, près de Dijon.",
    url: "/equipes",
  },
};

export default function Equipes() {
  const teams = [
    { id: 1, name: "U11M" },
    { id: 2, name: "U13M" },
    { id: 3, name: "U15M" },
    { id: 4, name: "U18M1" },
    { id: 5, name: "U18M2" },
    { id: 6, name: "Senior M1" },
    { id: 7, name: "Senior M2" },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />
      
      <main className="flex-1 max-w-6xl mx-auto w-full px-4 py-12">
        <div>
          <h1 className="text-4xl font-bold text-[#004aad] mb-4">
            Les Équipes
          </h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            {teams.map((team) => (
              <div
                key={team.id}
                className="bg-white rounded-lg overflow-hidden"
              >
                <div className="p-3">
                  <h2 className="text-2xl font-bold text-[#004aad]">
                    {team.name}
                  </h2>
                </div>
                <Image
                  src="/empty-team.png"
                  alt={team.name}
                  width={300}
                  height={250}
                  className="w-full h-96 object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
