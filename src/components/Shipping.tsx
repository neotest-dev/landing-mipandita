import { Truck } from "lucide-react";

const Shipping = () => {
  const shippingBenefits = [
    {
      icon: "/package.png",
      title: "Empaque Seguro",
      description: "Todos nuestros productos son cuidadosamente empacados para garantizar su protección.",
    },
    {
      icon: "/peru.png",
      title: "Cobertura Nacional",
      description: "Llegamos a cada rincón del Perú, asegurando que recibas tu pedido estés donde estés.",
    },
    {
      icon: "/clock.png",
      title: "Envío Rápido",
      description: "Nos comprometemos a gestionar tu envío con la mayor rapidez para que lo recibas a tiempo.",
    },
  ];

  return (
    <section id="envios" className="section-spacing bg-panda-light">
      <div className="max-w-7xl mx-auto container-padding">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-block p-4 rounded-full bg-primary text-primary-foreground mb-4">
            <Truck size={32} />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Envíos a Nivel Nacional</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Colaboramos con la agencia Shalom para garantizar que tus productos lleguen de manera segura y confiable a cualquier parte del país.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Benefits List */}
          <div className="space-y-8 animate-fade-in" style={{ animationDelay: "100ms" }}>
            {shippingBenefits.map((benefit) => (
              <div key={benefit.title} className="flex items-start gap-5">
                <div className="flex-shrink-0 w-14 h-14 rounded-full bg-background flex items-center justify-center shadow-sm">
                  <img src={benefit.icon} alt={benefit.title} className="h-7 w-7 object-contain" />
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-1">{benefit.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Shalom Logo Card */}
          <div className="panda-card p-8 md:p-12 flex items-center justify-center animate-scale-in" style={{ animationDelay: "200ms" }}>
            <div className="w-full max-w-sm mx-auto">
              <img 
                src="/shalom.png" 
                alt="Logo de Agencia Shalom" 
                className="w-full h-auto object-contain"
              />
              <p className="text-center text-muted-foreground mt-6 font-semibold text-lg">
                Tu socio de confianza para envíos en todo el Perú.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Shipping;
