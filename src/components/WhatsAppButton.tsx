// src/components/WhatsAppButton.tsx

const WhatsAppButton = () => {
  // TODO: Reemplaza este número con tu número de WhatsApp, incluyendo el código de país sin el símbolo '+'.
  const phoneNumber = "51987654321";
  const message = "Hola, deseo obtener información actualizada sobre los productos y el stock disponible. ¿Me podrías brindar detalles?";
  
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-40 flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] shadow-lg transition-transform hover:scale-110"
      aria-label="Contactar por WhatsApp"
    >
      <img 
        src="/whats.png" 
        alt="WhatsApp" 
        className="h-9 w-9 object-contain"
      />
    </a>
  );
};

export default WhatsAppButton;
