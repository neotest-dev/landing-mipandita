import { useState, useEffect } from "react";
import { X, ChevronLeft, ChevronRight, ImageOff } from "lucide-react";
import { Category } from "./Products";
import manifest from "@/products-manifest.json";

// Cast the imported JSON to the expected type
const productManifest = manifest as Record<string, string[]>;

interface ProductGalleryProps {
  category: Category;
  onClose: () => void;
}

const ProductGallery = ({ category, onClose }: ProductGalleryProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // Get the images for the current category from the manifest
  const images = productManifest[category.id] || [];

  // Effect to lock background scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  const goToPrevious = () => {
    if (images.length === 0) return;
    setCurrentImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goToNext = () => {
    if (images.length === 0) return;
    setCurrentImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const whatsappMessage = encodeURIComponent(
    `Hola, deseo más información sobre productos de ${category.name}.`
  );

  return (
    <div className="fixed inset-0 z-50 bg-background overflow-y-auto">
      <div className="min-h-screen container-padding py-8 flex items-center">
        <div className="max-w-4xl mx-auto w-full">
          {/* Header */}
          <div className="flex items-start justify-between mb-8 animate-fade-in">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <category.icon className="text-primary" size={32} />
                <h2 className="text-3xl md:text-4xl font-bold">{category.name}</h2>
              </div>
              <p className="text-muted-foreground max-w-xl">{category.description}</p>
            </div>
            <button
              onClick={onClose}
              className="flex-shrink-0 w-12 h-12 rounded-full bg-secondary hover:bg-accent transition-colors flex items-center justify-center ml-4"
              aria-label="Cerrar galería"
            >
              <X size={24} />
            </button>
          </div>

          {/* Main Gallery Wrapper */}
          <div className="max-w-2xl mx-auto">
            <div className="animate-scale-in">
              {/* Carousel View */}
              <div className="relative aspect-square w-full mb-4">
                {images.length > 0 ? (
                  <img
                    src={images[currentImageIndex]}
                    alt={`${category.name} - Imagen ${currentImageIndex + 1}`}
                    className="w-full h-full object-cover rounded-xl"
                  />
                ) : (
                  <div className="absolute inset-0 bg-secondary rounded-xl flex flex-col items-center justify-center text-center p-8">
                    <ImageOff size={48} className="text-muted-foreground mb-4" />
                    <p className="text-xl font-semibold text-muted-foreground">No hay imágenes disponibles</p>
                    <p className="text-sm text-muted-foreground mt-2">Pronto añadiremos nuevos productos a esta categoría.</p>
                  </div>
                )}

                {images.length > 1 && (
                  <>
                    <button onClick={goToPrevious} className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-background/80 backdrop-blur-sm hover:bg-background shadow-md flex items-center justify-center transition-all hover:scale-110" aria-label="Imagen anterior">
                      <ChevronLeft size={22} />
                    </button>
                    <button onClick={goToNext} className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-background/80 backdrop-blur-sm hover:bg-background shadow-md flex items-center justify-center transition-all hover:scale-110" aria-label="Siguiente imagen">
                      <ChevronRight size={22} />
                    </button>
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-background/80 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-semibold">
                      {currentImageIndex + 1} / {images.length}
                    </div>
                  </>
                )}
              </div>

              {/* Thumbnail Navigation */}
              {images.length > 1 && (
                <div className="flex gap-3 overflow-x-auto py-2 -mx-1 px-1">
                  {images.map((image, index) => (
                    <button
                      key={image}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`flex-shrink-0 w-20 h-20 rounded-lg transition-all duration-200 ${
                        currentImageIndex === index ? "ring-2 ring-primary" : "opacity-70 hover:opacity-100"
                      }`}
                    >
                      <img src={image} alt={`Miniatura ${index + 1}`} className="w-full h-full object-cover rounded-lg" />
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* WhatsApp CTA */}
          <div className="text-center space-y-4 mt-8 animate-fade-in">
            <a href={`https://wa.me/51991840655?text=${whatsappMessage}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 panda-button text-lg">
              <img src="/whats.png" alt="WhatsApp" className="h-6 w-6 invert" />
              Consultar por WhatsApp
            </a>
            <p className="text-sm text-muted-foreground max-w-md mx-auto">
              Nuestro stock rota constantemente. Pregunta por disponibilidad y precios actualizados.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductGallery;
