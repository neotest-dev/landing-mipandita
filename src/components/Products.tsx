import { useState } from "react";
import ProductGallery from "./ProductGallery";
import techImage from "@/assets/category-tech.jpg";
import homeImage from "@/assets/category-home.jpg";
import beautyImage from "@/assets/category-beauty.jpg";
import petsImage from "@/assets/category-pets.jpg";
import sportsImage from "@/assets/category-sports.jpg";

export type Category = {
  id: string;
  name: string;
  image: string;
  description: string;
};

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);

  const categories: Category[] = [
    {
      id: "tecnologia",
      name: "Tecnología",
      image: techImage,
      description: "Gadgets y accesorios tecnológicos de última generación",
    },
    {
      id: "hogar",
      name: "Hogar",
      image: homeImage,
      description: "Artículos para decorar y organizar tu espacio",
    },
    {
      id: "belleza",
      name: "Belleza",
      image: beautyImage,
      description: "Productos de cuidado personal y cosmética",
    },
    {
      id: "mascotas",
      name: "Mascotas",
      image: petsImage,
      description: "Accesorios y juguetes para tus compañeros peludos",
    },
    {
      id: "deporte",
      name: "Deporte y Bienestar",
      image: sportsImage,
      description: "Equipamiento para tu rutina de ejercicio",
    },
  ];

  return (
    <>
      <section id="productos" className="section-spacing">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Nuestros Productos
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Explora nuestras categorías de productos en tendencia
            </p>
          </div>

          {/* Categories Container */}
          <div className="flex flex-wrap justify-center gap-8">
            {categories.map((category, index) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category)}
                className="panda-card p-6 text-left group animate-fade-in w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.33%-1.5rem)]"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="aspect-square rounded-xl overflow-hidden mb-6 bg-panda-light">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <h3 className="text-2xl font-bold mb-2">{category.name}</h3>
                <p className="text-muted-foreground mb-4">
                  {category.description}
                </p>
                <span className="inline-flex items-center gap-2 font-semibold">
                  Ver productos
                  <span className="group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </span>
              </button>
            ))}
          </div>

          {/* Info Banner */}
          <div className="mt-16 max-w-4xl mx-auto rounded-2xl p-8 bg-primary text-primary-foreground animate-fade-in">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-shrink-0">
                <div className="w-24 h-24 rounded-full bg-primary-foreground/10 flex items-center justify-center">
                  <img src="/package.png" alt="Paquete" className="h-12 w-12 object-contain" />
                </div>
              </div>
              <div className="text-center md:text-left">
                <h3 className="text-2xl font-bold mb-2">Nuestro stock rota constantemente</h3>
                <p className="text-lg text-primary-foreground/80 leading-relaxed">
                  Las imágenes son solo referenciales. Te recomendamos preguntar por WhatsApp para confirmar la disponibilidad actual de los productos.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Modal */}
      {selectedCategory && (
        <ProductGallery
          category={selectedCategory}
          onClose={() => setSelectedCategory(null)}
        />
      )}
    </>
  );
};

export default Products;
