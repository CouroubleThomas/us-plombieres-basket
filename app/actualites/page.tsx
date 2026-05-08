import Navbar from "@/app/components/Navbar";
import Image from "next/image";

export default function Actualites() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />
      
      <main className="flex-1 max-w-6xl mx-auto w-full px-4 py-12">
        <div>
          <h1 className="text-4xl font-bold text-[#004aad] mb-4">
            Actualités
          </h1>
          
          <div className="max-w-3xl space-y-6">
            <div className="p-8 border-l-4 border-[#239ccb] bg-gray-50 hover:shadow-md transition-shadow cursor-pointer">
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

            <div className="p-8 border-l-4 border-[#239ccb] bg-gray-50 hover:shadow-md transition-shadow cursor-pointer">
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
