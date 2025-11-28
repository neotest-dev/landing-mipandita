import { Facebook, Instagram } from "lucide-react";
import logo from '/logo.png';

const Footer = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const quickLinks = [
    { label: "Inicio", id: "inicio" },
    { label: "Productos", id: "productos" },
    { label: "Envíos", id: "envios" },
    { label: "Contacto", id: "contacto" },
  ];

  return (
    <footer className="bg-black text-white border-t border-border">
      <div className="max-w-7xl mx-auto container-padding py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img src={logo} alt="Importaciones Mi Pandita Logo" className="h-12 w-12 object-contain" />
              <h3 className="text-2xl font-bold">
                Importaciones Mi Pandita
              </h3>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Productos de tendencia al mejor precio. Importación directa desde
              China a Lima, Perú.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white hover:bg-gray-200 transition-colors flex items-center justify-center text-black"
                aria-label="TikTok"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white hover:bg-gray-200 transition-colors flex items-center justify-center text-black"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white hover:bg-gray-200 transition-colors flex items-center justify-center text-black"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Schedule */}
          <div>
            <h4 className="font-bold text-lg mb-4">Horarios</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Lunes - Jueves</li>
              <li className="font-semibold text-white">10:00 a.m. - 6:00 p.m.</li>
              <li className="mt-3">Viernes</li>
              <li className="font-semibold text-white">10:00 a.m. - 5:00 p.m.</li>
              <li className="mt-3">Sábado - Domingo</li>
              <li className="font-semibold text-white">CERRADO</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 text-center text-sm text-gray-400">
          <p>
            © {new Date().getFullYear()} Importaciones Mi Pandita. Todos los
            derechos reservados.
          </p>
          <p className="mt-2">Lima, Perú 🇵🇪</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
