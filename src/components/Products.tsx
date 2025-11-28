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

          {/* Categories Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category)}
                className="panda-card p-6 text-left group animate-fade-in"
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
          <div className="mt-16 panda-card p-8 text-center bg-panda-light animate-fade-in">
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              <span className="font-bold text-foreground">
                📦 Nuestro stock rota constantemente,
              </span>{" "}
              por eso las imágenes son solo referenciales. Pregunta por WhatsApp
              para ver disponibilidad actual.
            </p>
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
