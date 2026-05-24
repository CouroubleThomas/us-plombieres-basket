import Navbar from "@/app/components/Navbar";
import Image from "next/image";
import type { Metadata } from "next";
import { siteConfig } from "../site-config";

export const metadata: Metadata = {
  title: "Actualités basket à Dijon",
  description:
    "Suivez les actualités de l'US Plombières Basket, club de basket-ball à Plombières-lès-Dijon près de Dijon.",
  keywords: siteConfig.keywords,
  alternates: {
    canonical: "/actualites",
  },
  openGraph: {
    title: "Actualités US Plombières Basket",
    description:
      "Les dernières actualités du club basket US Plombières Basket à Plombières-lès-Dijon, près de Dijon.",
    url: "/actualites",
  },
};

export default function Actualites() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />
      
      <main className="flex-1 max-w-6xl mx-auto w-full px-4 py-12">
        <div>
          <h1 className="text-4xl font-bold text-[#004aad] mb-4">
            Actualités
          </h1>
          <p className="text-gray-700 leading-relaxed mb-8 max-w-3xl">
            Retrouvez ici les actualités de l'USP, pour suivre la vie du club, ses événements et les temps forts de la saison.
          </p>
          
          <div className="space-y-6 flex flex-col">
            <div className="w-full xl:max-w-5xl p-8 border-l-4 border-[#239ccb] bg-gray-50">
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-3xl font-bold text-[#004aad]">
                  Recrutement ouvert - Juin 2026
                </h2>
                <span className="text-sm text-gray-500 whitespace-nowrap ml-4">Juin 2026</span>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                <div>
                  <p className="text-gray-700 leading-relaxed mb-5">
                    <span className="font-semibold text-[#004aad]">🏀 Le club de basket de l&apos;USP Plombières</span>&nbsp;ouvre ses
                    portes tout le mois de juin 2026 pour des séances de recrutement et de découverte du basket !
                    C&apos;est le moment idéal pour venir essayer le sport, sans engagement, dans une ambiance conviviale
                    et dynamique.
                  </p>
                  <p className="leading-relaxed font-semibold mb-2 text-[#004aad]">📅 Entraînements jeunes :</p>
                  <ul className="text-gray-700 leading-relaxed mb-5 space-y-2">
                    <li><span className="font-semibold">U9 / U11 (2015 à 2018)</span> : mercredi 14h00 - 15h30</li>
                    <li><span className="font-semibold">U13 / U15 (2011 à 2014)</span> : mardi 18h00 - 19h30</li>
                    <li><span className="font-semibold">U18 (2008 à 2010)</span> : jeudi 18h00 - 19h30</li>
                  </ul>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    <span className="font-semibold text-[#004aad]">🏀 Au programme :</span>&nbsp;découverte du basket, initiation,
                    jeux, progression et esprit d&apos;équipe !
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    <span className="font-semibold text-[#004aad]">👉 Débutants ou confirmés, filles et garçons</span>, tout
                    le monde est le bienvenu pour venir tester et rejoindre le club.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    📧 <span className="font-semibold">Contact</span> : usp.plombieres@hotmail.com
                    <br />
                    📱 <span className="font-semibold">SMS</span> : Franck - 06 77 78 44 40
                  </p>
                </div>
                <div>
                  <Image
                    src="/recrutement-juin-2026.png"
                    alt="Affiche recrutement USP Plombieres Basket juin 2026"
                    width={768}
                    height={1152}
                    className="w-full rounded-lg"
                  />
                </div>
              </div>
            </div>

            <div className="w-full xl:max-w-5xl p-8 border-l-4 border-[#239ccb] bg-gray-50">
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-3xl font-bold text-[#004aad]">
                  Nouvelle section loisir
                </h2>
                <span className="text-sm text-gray-500 whitespace-nowrap ml-4">Juin 2026</span>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                <div>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    L&apos;USP Plombières met en place un nouveau créneau de pratique loisir ouvert à toutes et tous !
                  </p>
                  <ul className="text-gray-700 leading-relaxed mb-4 space-y-1">
                    <li>📅 Tous les vendredis</li>
                    <li>🕗 À partir de 20h15</li>
                    <li>📍 Gymnase de Plombières</li>
                  </ul>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Ce créneau est placé sous le signe de la convivialité et de la mixité,
                    pour le plaisir de jouer, progresser et partager un bon moment autour du basket.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Que vous soyez débutant, ancien joueur ou simplement passionné, ce rendez-vous est fait pour vous !
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    📧 <span className="font-semibold">Contact</span> : usp.plombieres@hotmail.com
                    <br />
                    📱 <span className="font-semibold">SMS</span> : Franck - 06 77 78 44 40
                  </p>
                </div>
                <div>
                  <Image
                    src="/loisir2026.png"
                    alt="Affiche section loisir USP Plombières 2026"
                    width={768}
                    height={1152}
                    className="w-full rounded-lg"
                  />
                </div>
              </div>
            </div>

            <div className="w-full max-w-3xl p-8 border-l-4 border-[#239ccb] bg-gray-50">
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-3xl font-bold text-[#004aad]">
                  Assemblée générale
                </h2>
                <span className="text-sm text-gray-500 whitespace-nowrap ml-4">8 Mai 2026</span>
              </div>
              <p className="text-gray-700 leading-relaxed mb-6">
                Nous vous attendons nombreux
              </p>
              <Image
                src="/ag2026.png"
                alt="Assemblée générale 2026"
                width={400}
                height={300}
                className="w-full rounded-lg"
              />
            </div>

            <div className="w-full max-w-3xl p-8 border-l-4 border-[#239ccb] bg-gray-50">
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-3xl font-bold text-[#004aad]">
                  Clap de fin de la saison 2025-2026
                </h2>
                <span className="text-sm text-gray-500 whitespace-nowrap ml-4">25 Avril 2026</span>
              </div>
              <p className="text-gray-700 leading-relaxed mb-6">
                Merci à tous pour cette belle saison !
              </p>
              <div className="grid grid-cols-2 gap-4">
                <Image
                  src="/fin2026.png"
                  alt="Clap de fin de la saison 2025-2026"
                  width={300}
                  height={225}
                  className="w-full rounded-lg"
                />
                <Image
                  src="/smfin2026.png"
                  alt="Photo clap de fin 2"
                  width={300}
                  height={225}
                  className="w-full rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
