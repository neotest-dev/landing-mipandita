import { useState } from "react";
import { X, ChevronLeft, ChevronRight, MessageCircle } from "lucide-react";
import { Category } from "./Products";

interface ProductGalleryProps {
  category: Category;
  onClose: () => void;
}

const ProductGallery = ({ category, onClose }: ProductGalleryProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Generate 10 placeholder slots for images
  const imageSlots = Array.from({ length: 10 }, (_, i) => ({
    id: i + 1,
    placeholder: `Imagen ${i + 1} - ${category.name}`,
  }));

  const goToPrevious = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? imageSlots.length - 1 : prev - 1
    );
  };

  const goToNext = () => {
    setCurrentImageIndex((prev) =>
      prev === imageSlots.length - 1 ? 0 : prev + 1
    );
  };

  const whatsappMessage = encodeURIComponent(
    `Hola, deseo más información sobre productos de ${category.name}.`
  );

  return (
    <div className="fixed inset-0 z-50 bg-background/95 backdrop-blur-sm overflow-y-auto">
      <div className="min-h-screen container-padding py-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="flex items-center justify-between mb-8 animate-fade-in">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-2">
                {category.name}
              </h2>
              <p className="text-muted-foreground">{category.description}</p>
            </div>
            <button
              onClick={onClose}
              className="w-12 h-12 rounded-full bg-secondary hover:bg-accent transition-colors flex items-center justify-center"
              aria-label="Cerrar galería"
            >
              <X size={24} />
            </button>
          </div>

          {/* Main Gallery - Carousel View */}
          <div className="panda-card p-4 md:p-8 mb-8 animate-scale-in">
            <div className="relative aspect-square max-w-2xl mx-auto mb-6">
              <div className="absolute inset-0 bg-panda-light rounded-xl flex items-center justify-center">
                <div className="text-center p-8">
                  <p className="text-4xl mb-4">📸</p>
                  <p className="text-xl font-semibold text-muted-foreground">
                    {imageSlots[currentImageIndex].placeholder}
                  </p>
                  <p className="text-sm text-muted-foreground mt-2">
                    Espacio para tu imagen del producto
                  </p>
                </div>
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={goToPrevious}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-background/90 hover:bg-background shadow-medium flex items-center justify-center transition-all hover:scale-110"
                aria-label="Imagen anterior"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={goToNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-background/90 hover:bg-background shadow-medium flex items-center justify-center transition-all hover:scale-110"
                aria-label="Siguiente imagen"
              >
                <ChevronRight size={24} />
              </button>

              {/* Image Counter */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-background/90 px-4 py-2 rounded-full text-sm font-semibold">
                {currentImageIndex + 1} / {imageSlots.length}
              </div>
            </div>

            {/* Thumbnail Navigation */}
            <div className="flex gap-2 overflow-x-auto pb-2">
              {imageSlots.map((slot, index) => (
                <button
                  key={slot.id}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`flex-shrink-0 w-20 h-20 rounded-lg transition-all ${
                    currentImageIndex === index
                      ? "ring-2 ring-primary scale-105"
                      : "opacity-60 hover:opacity-100"
                  }`}
                >
                  <div className="w-full h-full bg-panda-light rounded-lg flex items-center justify-center text-2xl">
                    📦
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* WhatsApp CTA */}
          <div className="text-center space-y-4 animate-fade-in">
            <a
              href={`https://wa.me/51991840655?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 panda-button text-lg"
            >
              <MessageCircle size={24} />
              Consultar por WhatsApp
            </a>
            <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
              Nuestro stock rota constantemente. Pregunta por disponibilidad y
              precios actualizados.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductGallery;
