import Navbar from "@/app/components/Navbar";
import Image from "next/image";
import type { Metadata } from "next";
import { siteConfig } from "../site-config";

export const metadata: Metadata = {
  title: "Le Club de basket à Plombières-lès-Dijon",
  description:
    "Découvrez l'histoire de l'US Plombières Basket, club de basket-ball à Plombières-lès-Dijon près de Dijon, ses équipes et son engagement local.",
  keywords: siteConfig.keywords,
  alternates: {
    canonical: "/le-club",
  },
  openGraph: {
    title: "US Plombières Basket, club de basket-ball à Dijon",
    description:
      "Club de basket-ball à Plombières-lès-Dijon, l'US Plombières Basket fait vivre le basket près de Dijon depuis 1922.",
    url: "/le-club",
  },
};

export default function Club() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />
      
      <main className="flex-1 max-w-6xl mx-auto w-full px-4 py-12">
        <div>
          <h1 className="text-4xl font-bold text-[#004aad] mb-8">
            Le Club
          </h1>
          
          {/* Hero Section with Logo and History */}
          <div className="flex flex-col md:flex-row gap-8 mb-12 items-center">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Image
                src="/old-logo.png"
                alt="Logo historique US Plombières"
                width={200}
                height={200}
                className="rounded-lg"
              />
            </div>
            
            {/* History Text */}
            <div className="flex-1">
              <div className="space-y-4">
                <p className="text-xl font-semibold text-[#004aad]">
                  Depuis 1922
                </p>
                <p className="text-gray-700 leading-relaxed">
                  L'US Plombières, fondée en 1922, est le club de basket-ball de la commune de Plombières-lès-Dijon. Aujourd'hui, le club est pleinement engagé dans les compétitions régionales et départementales
                  avec un programme complet pour tous les niveaux.
                </p>
                
                <div className="mt-6">
                  <p className="font-bold text-[#004aad] mb-3">Nos équipes sont engagées en</p>
                  <ul className="text-gray-700 space-y-2 ml-4">
                    <li>• U13M (Championnat Départemental)</li>
                    <li>• U15M (Championnat Départemental)</li>
                    <li>• U18M (Championnat Départemental)</li>
                    <li>• U18M (Championnat Régional)</li>
                    <li>• Senior M (Championnat Départemental)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
