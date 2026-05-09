import Navbar from "@/app/components/Navbar";
import type { Metadata } from "next";
import { siteConfig } from "../site-config";

export const metadata: Metadata = {
  title: "Contact club basket Dijon",
  description:
    "Contactez l'US Plombières Basket, club de basket-ball à Plombières-lès-Dijon près de Dijon, pour les inscriptions et renseignements.",
  keywords: siteConfig.keywords,
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact US Plombières Basket",
    description:
      "Prenez contact avec l'US Plombières Basket, club basket à Plombières-lès-Dijon et proche de Dijon.",
    url: "/contact",
  },
};

export default function Contact() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />
      
      <main className="flex-1 max-w-6xl mx-auto w-full px-4 py-12">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-4xl font-bold text-[#004aad] mb-8">
            Contactez-nous
          </h1>
          <p className="text-gray-700 leading-relaxed mb-6">
           Pour nous rejoindre ou pour tout autre renseignement, n'hésitez pas à nous contacter par email.
          </p>
          
          <div className="space-y-4">
            <p>
              <a
                href="mailto:usp.plombieres@hotmail.com"
                className="text-[#239ccb] hover:text-[#004aad] underline text-lg font-semibold"
              >
                usp.plombieres@hotmail.com
              </a>
            </p>
            
            <p>
              <a
                href="https://plombieres-les-dijon.fr/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#239ccb] hover:text-[#004aad] underline"
              >
                Mairie de Plombières-lès-Dijon
              </a>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
