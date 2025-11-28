import { Sparkles, TrendingUp, Package, Clock } from "lucide-react";

const About = () => {
  const benefits = [
    {
      icon: Sparkles,
      title: "Productos en Tendencia",
      description: "Siempre actualizados con lo último del mercado internacional",
    },
    {
      icon: TrendingUp,
      title: "Oportunidad de Emprendimiento",
      description: "Genera ingresos desde casa con horarios flexibles",
    },
    {
      icon: Package,
      title: "Importación Directa",
      description: "Traemos los productos directo desde China, sin intermediarios",
    },
  ];

  const schedules = [
    { days: "Lunes a Jueves", hours: "10:00 a.m. – 6:00 p.m." },
    { days: "Viernes", hours: "10:00 a.m. – 5:00 p.m." },
    { days: "Sábado y Domingo", hours: "CERRADO", isClosed: true },
  ];

  return (
    <section id="sobre-nosotros" className="section-spacing bg-panda-light">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Sobre Nosotros</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Somos una tienda virtual dedicada a la importación directa desde China. 
            Donde puedes emprender y generar ingresos desde la comodidad de tu casa, 
            con horarios flexibles y una amplia gama de productos en tendencia.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="panda-card p-8 text-center animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-20 h-20 rounded-full bg-primary mx-auto mb-6 flex items-center justify-center">
                <benefit.icon className="text-primary-foreground" size={36} />
              </div>
              <h3 className="font-bold text-xl mb-3">{benefit.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* Mission Statement */}
        <div className="panda-card p-12 text-center mb-12 animate-fade-in bg-gradient-to-br from-panda-light to-background">
          <h3 className="text-3xl font-bold mb-6">Nuestra Misión</h3>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Democratizar el acceso a productos de calidad internacional, 
            brindando oportunidades de negocio a emprendedores peruanos y 
            conectando las últimas tendencias del mercado asiático con nuestros clientes.
          </p>
        </div>

        {/* Schedule Card */}
        <div className="panda-card p-8 max-w-2xl mx-auto animate-fade-in">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Clock size={32} />
            <h3 className="text-2xl font-bold">Horarios de Atención</h3>
          </div>
          <div className="space-y-4">
            {schedules.map((schedule, index) => (
              <div
                key={index}
                className="flex justify-between items-center py-3 border-b border-border last:border-0"
              >
                <span className="font-semibold">{schedule.days}</span>
                <span
                  className={
                    schedule.isClosed
                      ? "text-muted-foreground font-bold"
                      : "text-foreground"
                  }
                >
                  {schedule.hours}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
