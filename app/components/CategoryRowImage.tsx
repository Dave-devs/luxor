import Image from "next/image";

export default function CategoryRowImage() {
  const categoryImages = [
    {
      image: "/category1.jpg",
      name: "CLASSIC",
    },
    {
      image: "/category2.jpg",
      name: "MODERN",
    },
    {
      image: "/category3.jpg",
      name: "MINIMALIST",
    },
    {
      image: "/category4.jpg",
      name: "CONTEMPORARY",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 py-8 max-w-7xl mx-auto">
      {categoryImages.map((category) => (
        <div
          key={category.name}
          className="flex flex-col items-center object-cover"
        >
          <Image
            src={category.image}
            alt="category-image"
            width={300}
            height={350}
            className="w-[200px] h-[250px] md:w-[300px] md:h-[350px]"
            placeholder="empty"
          />
          <p className="pt-2 text-sm md:text-base font-bold md:font-semibold text-primary">
            {category.name}
          </p>
        </div>
      ))}
    </div>
  );
}

