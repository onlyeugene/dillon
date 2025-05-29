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
    id: 1,
    name: "Cages",
    image: cage1,
    description: "High-quality pet cages and kennels for all sizes",
  },
  {
    id: 2,
    name: "Foods",
    image: food1,
    description: "Premium pet food and treats",
  },
  {
    id: 3,
    name: "Boosters",
    image: booster1,
    description: "Vitamins and supplements for your pets",
  },
  {
    id: 4,
    name: "Accessories",
    image: accessory1,
    description: "Toys, beds, and other pet accessories",
  },
  {
    id: 5,
    name: "Medications",
    image: medication1,
    description: "Pet medications and healthcare products",
  },
  {
    id: 6,
    name: "Chains",
    image: chain1,
    description: "Leashes, collars, and chains",
  },
  {
    id: 7,
    name: "Plates",
    image: plate1,
    description: "Food and water bowls for your pets",
  },
];

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState("Cages");

  // Filter products based on selected category
  const filteredProducts = products.filter(
    (product) => product.category === selectedCategory
  );

  return (
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-gray-900">
          Our Products
        </h1>
        <div className="w-20 h-1 bg-yellow-500 mx-auto mt-3 mb-12" />

        {/* Category Selection - Horizontal Scroll on Mobile */}
        <div className="relative">
          <div className="flex overflow-x-auto pb-4 gap-4 md:grid md:grid-cols-3 lg:grid-cols-7">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.name)}
                className={`flex-shrink-0 w-32 md:w-auto p-4 rounded-lg transition-all duration-300 ${
                  selectedCategory === category.name
                    ? "bg-yellow-500 text-white shadow-lg transform scale-105"
                    : "bg-white hover:bg-yellow-100 text-gray-800"
                }`}
              >
                <div className="flex flex-col items-center gap-2">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-16 h-16 object-cover rounded-full"
                  />
                  <span className="font-semibold text-sm md:text-base">
                    {category.name}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-12">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-48">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {product.name}
                </h3>
                <p className="text-gray-600 text-sm">{product.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* No Products Message */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <h3 className="text-xl font-semibold text-gray-900">
              No products found in this category
            </h3>
            <p className="text-gray-600 mt-2">
              Please check back later or try another category
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;
