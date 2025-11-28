import { Phone, Mail, MapPin, Facebook, Instagram } from "lucide-react";

const Contact = () => {
  const whatsappMessage = encodeURIComponent(
    "Hola, deseo obtener información actualizada sobre los productos y el stock disponible. ¿Me podrías brindar detalles?"
  );

  return (
    <section id="contacto" className="section-spacing">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Contáctanos
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Estamos aquí para resolver todas tus dudas
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* WhatsApp Card */}
          <a
            href={`https://wa.me/51991840655?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="panda-card p-8 text-center group animate-fade-in"
          >
            <div 
              className="w-20 h-20 rounded-full bg-primary mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform"
            >
              <img src="/whats.png" alt="WhatsApp" className="h-10 w-10 object-contain invert" />
            </div>
            <h3 className="font-bold text-xl mb-2">WhatsApp</h3>
            <p className="text-muted-foreground mb-4">
              Respuesta rápida y directa
            </p>
            <p className="font-semibold">991 840 655</p>
          </a>

          {/* Phone Card */}
          <a
            href="tel:+51991840655"
            className="panda-card p-8 text-center group animate-fade-in"
            style={{ animationDelay: "100ms" }}
          >
            <div className="w-20 h-20 rounded-full bg-primary mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform">
              <Phone className="text-primary-foreground" size={36} />
            </div>
            <h3 className="font-bold text-xl mb-2">Teléfono</h3>
            <p className="text-muted-foreground mb-4">
              Llámanos directamente
            </p>
            <p className="font-semibold">991 840 655</p>
          </a>

          {/* Email Card */}
          <a
            href="mailto:importacionesmipandita@gmail.com"
            className="panda-card p-8 text-center group animate-fade-in"
            style={{ animationDelay: "200ms" }}
          >
            <div className="w-20 h-20 rounded-full bg-primary mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform">
              <Mail className="text-primary-foreground" size={36} />
            </div>
            <h3 className="font-bold text-xl mb-2">Correo</h3>
            <p className="text-muted-foreground mb-4">
              Envíanos un mensaje
            </p>
            <p className="font-semibold text-sm">
              importacionesmipandita@gmail.com
            </p>
          </a>

          {/* Location Card */}
          <a
            href="https://www.google.com/maps/place/Lima/data=!4m2!3m1!1s0x9105c5f619ee3ec7:0x14206cb9cc452e4a?sa=X&ved=1t:242&ictx=111"
            target="_blank"
            rel="noopener noreferrer"
            className="panda-card p-8 text-center group animate-fade-in"
            style={{ animationDelay: "300ms" }}
          >
            <div className="w-20 h-20 rounded-full bg-primary mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform">
              <MapPin className="text-primary-foreground" size={36} />
            </div>
            <h3 className="font-bold text-xl mb-2">Ubicación</h3>
            <p className="text-muted-foreground mb-4">
              Nos encontramos en
            </p>
            <p className="font-semibold">Lima, Perú</p>
          </a>
        </div>

        {/* Social Media */}
        <div className="text-center animate-fade-in">
          <h3 className="text-2xl font-bold mb-6">Síguenos en Redes Sociales</h3>
          <div className="flex justify-center gap-6">
            <a
              href="https://www.tiktok.com/@importacionesmipandita"
              target="_blank"
              rel="noopener noreferrer"
              className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center hover:bg-accent hover:scale-110 transition-all"
              aria-label="TikTok"
            >
              <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
              </svg>
            </a>
            <a
              href="https://www.instagram.com/importacionesmipandita/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center hover:bg-accent hover:scale-110 transition-all"
              aria-label="Instagram"
            >
              <Instagram size={28} />
            </a>
            <a
              href="https://www.facebook.com/importacionesmipandita"
              target="_blank"
              rel="noopener noreferrer"
              className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center hover:bg-accent hover:scale-110 transition-all"
              aria-label="Facebook"
            >
              <Facebook size={28} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
