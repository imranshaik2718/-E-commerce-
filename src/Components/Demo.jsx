import React from "react";

const nestBackpack = {
  name: "Tropicfeel Nest Backpack",
  dimensions_cm: { height: 46, width: 30, depth: 13 },
  capacity_L: { standard: 16, with_kangaroo: 20, with_cube: 30 },
  weight_kg: 1.1,
  materials: ["100% recycled nylon", "100% recycled polyester"],
  opening_style: "clamshell",
  laptop_compartment: "Dedicated rear pocket (weather‑sealed YKK zipper, fits up to 15‑16″)",
  external_features: [
    "Kangaroo pouch (≈4 L)",
    "Elastic front Spider‑Net system",
    "One side water‑bottle pocket",
    "Tripod/trekking‑pole straps",
    "Top valuables pocket",
    "Luggage pass‑through",
    "Sternum strap with micro‑adjustment",
    "Shoulder straps with sunglass/pen loop & D‑ring"
  ],
  internal_features: [
    "Two interior zip pockets in lid",
    "Padded foldable bottom compartment with waterproof inner bag",
    "Hidden passport/security pocket behind back panel"
  ],
  zippers: ["YKK #8 exterior", "YKK #5 interior", "Weather‑sealed YKK on laptop pocket"],
  hardware: ["Duraflex plastic", "Metal hooks for pocket attachment"],
  sustainability: {
    vegan: true,
    recycled_content: "90%",
    manufacturing: "Fair trade, transparent supply chain"
  },
  water_resistance: "Water‑resistant fabric and sealed zippers (not fully waterproof)",
  colors: ["All Black", "Blueberry Navy", "Desert Green", "Amphora Brown"],
  price: "€159 / $199",
  warranty: "Lifetime",
  reviews_average: "4.55★ (239 reviews)",
  highlights: [
    "Carry‑on / under‑seat compliant",
    "Lightweight and structured",
    "Versatile – daypack to weekend travel",
    "Comfortable ventilated back panel",
    "Excellent organization"
  ],
  common_cons: [
    "Tight water bottle pocket",
    "No waist belt",
    "Zipper hardware can feel fragile",
    "Shoulder straps less breathable"
  ]
};

const Demo = () => {
  return (
    <div className="max-w-5xl mx-auto p-6 bg-white rounded-2xl shadow-lg">
      <h2 className="text-3xl font-bold mb-4 text-gray-800">{nestBackpack.name}</h2>

      <p className="text-lg text-gray-600 mb-2">💸 <strong>Price:</strong> {nestBackpack.price}</p>
      <p className="text-gray-600 mb-2">🎒 <strong>Capacity:</strong> {nestBackpack.capacity_L.standard}L (expandable to {nestBackpack.capacity_L.with_cube}L)</p>
      <p className="text-gray-600 mb-2">📐 <strong>Dimensions:</strong> {nestBackpack.dimensions_cm.height}x{nestBackpack.dimensions_cm.width}x{nestBackpack.dimensions_cm.depth} cm</p>
      <p className="text-gray-600 mb-2">⚖️ <strong>Weight:</strong> {nestBackpack.weight_kg} kg</p>
      <p className="text-gray-600 mb-4">💻 <strong>Laptop:</strong> {nestBackpack.laptop_compartment}</p>

      <div className="grid md:grid-cols-2 gap-4 text-gray-700">
        <div>
          <h3 className="font-semibold text-lg mb-2">External Features:</h3>
          <ul className="list-disc ml-5 space-y-1">
            {nestBackpack.external_features.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-2">Internal Features:</h3>
          <ul className="list-disc ml-5 space-y-1">
            {nestBackpack.internal_features.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-2">Highlights:</h3>
          <ul className="list-disc ml-5 space-y-1">
            {nestBackpack.highlights.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-2">Common Cons:</h3>
          <ul className="list-disc ml-5 space-y-1 text-red-600">
            {nestBackpack.common_cons.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      </div>

      <p className="mt-6 text-gray-600"><strong>🌱 Sustainability:</strong> {nestBackpack.sustainability.vegan ? "Vegan, " : ""}{nestBackpack.sustainability.recycled_content} recycled materials</p>
      <p className="text-gray-600">💧 <strong>Water Resistance:</strong> {nestBackpack.water_resistance}</p>
      <p className="text-gray-600">🎨 <strong>Available Colors:</strong> {nestBackpack.colors.join(", ")}</p>
      <p className="text-gray-600">✅ <strong>Warranty:</strong> {nestBackpack.warranty}</p>
      <p className="text-yellow-500 font-medium">⭐ {nestBackpack.reviews_average}</p>
    </div>
  );
};

export default Demo;
