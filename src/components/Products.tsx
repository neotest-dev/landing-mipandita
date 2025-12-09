import { useState } from "react";
import ProductGallery from "./ProductGallery";
import { Laptop, Home, Sparkles, Dog, Dumbbell, LucideIcon, ShoppingBag, Leaf } from "lucide-react";

export type Category = {
  id: string;
  name: string;
  image: string;
  description: string;
  icon: LucideIcon;
};

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);

  const categories: Category[] = [
    {
      id: "tecnologia",
      name: "Tecnología",
      image: "/products/tech.jpg",
      description: "Gadgets y accesorios de última generación",
      icon: Laptop,
    },
    {
      id: "hogar",
      name: "Hogar",
      image: "/products/hogar.jpg",
      description: "Artículos para decorar y organizar tu espacio",
      icon: Home,
    },
    {
      id: "belleza",
      name: "Belleza",
      image: "/products/belleza.jpg",
      description: "Productos de cuidado personal y cosmética",
      icon: Sparkles,
    },
    {
      id: "mascotas",
      name: "Mascotas",
      image: "/products/pets.jpg",
      description: "Accesorios y juguetes para tus compañeros",
      icon: Dog,
    },
    {
      id: "bienestar",
      name: "Bienestar",
      image: "/products/bienestar.jpeg",
      description: "Lo necesario para tu comodidad",
      icon: Leaf,
    },
  ];

  return (
    <>
      <section id="productos" className="section-spacing">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center mb-16 animate-fade-in">
            <div className="flex justify-center items-center gap-4 mb-6">
              <ShoppingBag className="text-primary" size={48} />
              <h2 className="text-4xl md:text-5xl font-bold">
                Nuestros Productos
              </h2>
            </div>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Explora nuestra selección de productos en tendencia
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
                <div className="aspect-square rounded-xl overflow-hidden mb-6 bg-secondary">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="flex items-center gap-3 mb-2">
                  <category.icon className="text-primary" size={24} />
                  <h3 className="text-2xl font-bold">{category.name}</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  {category.description}
                </p>
                <span className="inline-flex items-center gap-2 font-semibold text-primary">
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
