import Navbar from "@/app/components/Navbar";

export default function Contact() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />
      
      <main className="flex-1 max-w-6xl mx-auto w-full px-4 py-12">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-4xl font-bold text-[#004aad] mb-8">
            Contactez-nous
          </h1>
          
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
                Marie de Plombières-Lès-Dijon
              </a>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
