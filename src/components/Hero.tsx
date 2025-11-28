import { MessageCircle } from "lucide-react";
import heroImage from "@/assets/hero-products.jpg";

const Hero = () => {
  const whatsappMessage = encodeURIComponent(
    "Hola, deseo más información sobre los productos."
  );

  return (
    <section id="inicio" className="relative min-h-screen flex items-center pt-20">
      <div className="absolute inset-0 bg-gradient-to-b from-panda-light to-background -z-10" />
      
      <div className="max-w-7xl mx-auto container-padding w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                Productos de tendencia al{" "}
                <span className="relative inline-block">
                  mejor precio
                  <div className="absolute bottom-2 left-0 w-full h-3 bg-panda-medium -z-10 rounded" />
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground font-light">
                Importación directa desde China a Lima, Perú
              </p>
            </div>

            <p className="text-lg text-muted-foreground max-w-xl">
              Somos una tienda virtual dedicada a la importación directa desde China.
            </p>

            <a
              href={`https://wa.me/51991840655?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 panda-button text-lg"
            >
              <MessageCircle size={24} />
              Escríbenos por WhatsApp
            </a>
          </div>

          {/* Hero Image */}
          <div className="relative animate-scale-in">
            <div className="panda-card overflow-hidden">
              <img
                src={heroImage}
                alt="Productos de tendencia"
                className="w-full h-auto object-cover"
              />
            </div>
            
            {/* Decorative Element */}
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-panda-medium rounded-full -z-10 blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
