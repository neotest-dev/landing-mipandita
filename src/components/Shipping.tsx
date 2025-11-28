import { Truck } from "lucide-react";

const Shipping = () => {
  return (
    <section id="envios" className="section-spacing bg-panda-light">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <div className="w-24 h-24 rounded-full bg-primary mx-auto mb-6 flex items-center justify-center">
              <Truck className="text-primary-foreground" size={48} />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Envíos Nacionales
            </h2>
            <p className="text-xl text-muted-foreground">
              Realizamos envíos a nivel nacional por la agencia Shalom
            </p>
          </div>

          {/* Shalom Logo Placeholder */}
          <div className="panda-card p-12 text-center animate-scale-in">
            <div className="w-full max-w-md mx-auto aspect-[3/1] bg-panda-light rounded-xl flex items-center justify-center mb-6">
              <div className="text-center">
                <p className="text-6xl mb-4">🚚</p>
                <p className="text-xl font-semibold text-muted-foreground">
                  Logo de Agencia Shalom
                </p>
                <p className="text-sm text-muted-foreground mt-2">
                  Espacio para el logo de la agencia
                </p>
              </div>
            </div>
            <p className="text-lg text-muted-foreground">
              Envíos seguros y confiables a todo el Perú
            </p>
          </div>

          {/* Additional Info */}
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            <div className="text-center p-6 animate-fade-in" style={{ animationDelay: "100ms" }}>
              <p className="text-4xl mb-3">📦</p>
              <h3 className="font-bold text-lg mb-2">Empaque Seguro</h3>
              <p className="text-sm text-muted-foreground">
                Todos los productos van protegidos
              </p>
            </div>
            <div className="text-center p-6 animate-fade-in" style={{ animationDelay: "200ms" }}>
              <p className="text-4xl mb-3">🇵🇪</p>
              <h3 className="font-bold text-lg mb-2">Cobertura Nacional</h3>
              <p className="text-sm text-muted-foreground">
                Llegamos a todo el Perú
              </p>
            </div>
            <div className="text-center p-6 animate-fade-in" style={{ animationDelay: "300ms" }}>
              <p className="text-4xl mb-3">⏱️</p>
              <h3 className="font-bold text-lg mb-2">Envío Rápido</h3>
              <p className="text-sm text-muted-foreground">
                Tiempos de entrega competitivos
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Shipping;
