import { Sparkles, TrendingUp, Package, Clock } from "lucide-react";
import aboutImage from "@/assets/hero-products.jpg";

const About = () => {
  const benefits = [
    {
      icon: Sparkles,
      title: "Productos en Tendencia",
      description: "Siempre actualizados con lo último del mercado.",
    },
    {
      icon: TrendingUp,
      title: "Oportunidad de Emprender",
      description: "Genera ingresos con horarios flexibles.",
    },
    {
      icon: Package,
      title: "Importación Directa y Confiable",
      description: "Productos desde China, sin intermediarios.",
    },
  ];

  const schedules = [
    { days: "Lunes a Jueves", hours: "10:00 a.m. – 6:00 p.m." },
    { days: "Viernes", hours: "10:00 a.m. – 5:00 p.m." },
    { days: "Sábado y Domingo", hours: "CERRADO", isClosed: true },
  ];

  return (
    <section id="sobre-nosotros" className="section-spacing bg-background">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          {/* Text Content Section */}
          <div className="animate-fade-in">
            <h2 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
              Tu puerta de entrada a las tendencias globales.
            </h2>
            <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
              Somos una tienda virtual dedicada a la importación directa desde China. 
              Nuestra misión es democratizar el acceso a productos de calidad, 
              brindando oportunidades de negocio a emprendedores peruanos.
            </p>
            
            <div className="space-y-8">
              {benefits.map((benefit) => (
                <div key={benefit.title} className="flex items-start gap-5">
                  <div className="flex-shrink-0 w-14 h-14 rounded-full bg-primary text-primary-foreground flex items-center justify-center">
                    <benefit.icon size={28} />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-1">{benefit.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image and Schedule Composition */}
          <div className="relative h-[500px] lg:h-full animate-scale-in" style={{ animationDelay: "100ms" }}>
            <img
              src={aboutImage}
              alt="Productos de importación"
              className="absolute inset-0 w-full h-full object-cover rounded-2xl"
            />
            <div className="absolute bottom-4 left-4 right-4 p-6 rounded-xl bg-background/70 backdrop-blur-sm border border-border shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <Clock className="text-primary" size={24} />
                <h3 className="text-xl font-bold">Horarios de Atención</h3>
              </div>
              <ul className="space-y-2 text-sm">
                {schedules.map((schedule) => (
                  <li key={schedule.days} className="flex justify-between items-center">
                    <span className="font-semibold">{schedule.days}</span>
                    <span className={schedule.isClosed ? "text-muted-foreground font-bold" : "text-foreground"}>
                      {schedule.hours}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
