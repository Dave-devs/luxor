// import Image from "next/image";

// export default function About() {
//   const achievments = [
//     {
//       id: "1",
//       number: "8K",
//       title: "Interior Projects",
//       description: "Designing spaces that inspire delight",
//     },
//     {
//       id: "2",
//       number: "30",
//       title: "Years of Works",
//       description: "Mastering expertise innovation",
//     },
//     {
//       id: "3",
//       number: "16K",
//       title: "Satisfied Clients",
//       description: "Happy clients building lifelong relationships",
//     },
//     {
//       id: "4",
//       number: "99%",
//       title: "Happy Rate",
//       description: "Satisfaction rate expections",
//     },
//   ];

//   return (
//     <section className="bg-white py-8">
//       <div className="max-w-7xl mx-auto">
//         {/* Top Achievments */}
//         {achievments.map((acchivment) => (
//           <div
//             key={acchivment.id}
//             className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4" 
//           >
//             <div className="flex flex-col items-start">
//               <h1 className="text-primary text-2xl font-bold pb-2">{acchivment.number}</h1>
//               <p className="text-primary text-sm font-medium pb-1">{acchivment.title}</p>
//               <p className="text-black/70 text-xs text-wrap">{acchivment.description}</p>
//             </div>
//           </div>
//         ))}
//         {/* Bottom Achievments */}
//         <div className="flex flex-col md:flex-row items-center justify-center space-x-10 pt-16">
//           <Image
//             className="w-[350px] h-[350px] object-cover"
//             src="/mid-tab.jpg"
//             alt="about"
//             width={400}
//             height={400}
//           />
//           <div className="flex flex-col items-start space-y-4">
//             <h3 className="text-primary text-sm font-bold">ABOUT US</h3>
//             <p className="font-semibold text-2xl max-w-[280px]">
//               Turning Houses into Homes, One Design at a Time
//             </p>
//             <p className="text-black/60 text-xs text-wrap max-w-[360px]">
//               With every project we undertake, we are committed to turning
//               houses into homes, one design at a time.
//             </p>
//             <button className="flex flex-row items-center justify-center px-4 py-2 space-x-2 text-white text-sm bg-primary rounded-full">
//               <span>Explore Our Projects</span>
//               <Image src="/arrow.png" width={16} height={16} alt="arrow" />
//             </button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


import Image from "next/image";

export default function About() {
  const achievments = [
    {
      id: "1",
      number: "8K",
      title: "Interior Projects",
      description: "Designing spaces that inspire delight",
    },
    {
      id: "2",
      number: "30",
      title: "Years of Works",
      description: "Mastering expertise innovation",
    },
    {
      id: "3",
      number: "16K",
      title: "Satisfied Clients",
      description: "Happy clients building lifelong relationships",
    },
    {
      id: "4",
      number: "99%",
      title: "Happy Rate",
      description: "Satisfaction rate expections",
    },
  ];

  return (
    <section className="bg-white pb-8">
      <div className="max-w-7xl mx-auto">
        {/* Top Achievements */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 place-items-center -pt-8">
          {achievments.map((achievement) => (
            <div key={achievement.id} className="flex flex-col">
              <h1 className="text-primary text-3xl font-bold pb-2">
                {achievement.number}
              </h1>
              <p className="text-primary text-sm font-medium pb-1">
                {achievement.title}
              </p>
              <p className="text-black/70 text-xs text-wrap max-w-32">
                {achievement.description}
              </p>
            </div>
          ))}
        </div>
        {/* Bottom Achievements */}
        <div className="flex flex-col md:flex-row items-center justify-center space-x-10 pt-16">
          <Image
            className="w-[350px] h-[350px] object-cover"
            src="/mid-tab.jpg"
            alt="about"
            width={400}
            height={400}
          />
          <div className="flex flex-col items-center md:items-start space-y-4">
            <h3 className="text-primary text-sm font-bold sm:pt-6">ABOUT US</h3>
            <p className="font-semibold text-2xl text-center md:text-left max-w-[280px]">
              Turning Houses into Homes, One Design at a Time
            </p>
            <p className="text-black/60 text-xs text-wrap text-center md:text-left max-w-[360px]">
              With every project we undertake, we are committed to turning
              houses into homes, one design at a time.
            </p>
            <button className="flex flex-row items-center justify-center px-4 py-2 space-x-2 text-white text-sm bg-primary rounded-full">
              <span>Explore Our Projects</span>
              <Image src="/arrow.png" width={16} height={16} alt="arrow" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
