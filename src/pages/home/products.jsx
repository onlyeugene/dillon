import React, { useState } from "react";
import { products } from "@/constants/data";
import cage1 from "@/assets/images/cages/cage1.jpeg";
import food1 from "@/assets/images/food/food1.jpeg";
import booster1 from "@/assets/images/booster/booster1.jpeg";
import medication1 from "@/assets/images/medication/medication1.jpeg";
import chain1 from "@/assets/images/chain/chain1.jpeg";
import plate1 from "@/assets/images/plates/plates1.jpeg";
import accessory1 from "@/assets/images/accesory/accesory.jpeg";

const categories = [
  {
    id: "all",
    name: "All Products",
    image: null,
    description: "Browse all our products",
  },
  {
    id: "Cages",
    name: "Cages",
    image: cage1,
    description: "High-quality pet cages and kennels for all sizes",
  },
  {
    id: "Foods",
    name: "Foods",
    image: food1,
    description: "Premium pet food and treats",
  },
  {
    id: "Boosters",
    name: "Boosters",
    image: booster1,
    description: "Vitamins and supplements for your pets",
  },
  {
    id: "Accessories",
    name: "Accessories",
    image: accessory1,
    description: "Toys, beds, and other pet accessories",
  },
  {
    id: "Medications",
    name: "Medications",
    image: medication1,
    description: "Pet medications and healthcare products",
  },
  {
    id: "Chains",
    name: "Chains",
    image: chain1,
    description: "Leashes, collars, and chains",
  },
  {
    id: "Plates",
    name: "Plates",
    image: plate1,
    description: "Food and water bowls for your pets",
  },
];

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredProducts =
    selectedCategory === "all"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  return (
    <div className="bg-gray-50 dark:bg-gray-800 py-16" id="products">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12" data-aos="fade-up">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Our Products
          </h1>
          <div className="w-20 h-1 bg-yellow-500 dark:bg-yellow-400 mx-auto mb-6" />
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Discover our wide range of high-quality pet products designed to
            keep your furry friends happy and healthy.
          </p>
        </div>

        {/* Categories */}
        <div className="mb-12 overflow-x-auto">
          <div className="flex space-x-4 min-w-max px-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
                  selectedCategory === category.id
                    ? "bg-yellow-500 dark:bg-yellow-400 text-white"
                    : "bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600"
                }`}
                data-aos="fade-up"
                data-aos-delay={categories.indexOf(category) * 100}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white dark:bg-gray-700 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              data-aos="fade-up"
              data-aos-delay={product.id * 100}
            >
              <div className="relative h-48">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {product.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {product.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-12" data-aos="fade-up">
            <p className="text-gray-600 dark:text-gray-300">
              No products found in this category.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;
