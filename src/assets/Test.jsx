import React from "react";

const MultiRotatingCircles = () => {
  const circles = [
   { radius: 250, speed: 8 },
   { radius: 220, speed: 7 },
   { radius: 190, speed: 6 },
   { radius: 160, speed: 5 },
   { radius: 130, speed: 4 },
    { radius: 100, speed: 3 },
  ];

  return (
    <div className="relative w-[700px] h-[700px] flex items-center justify-center">
      {/* Circular Borders & Rotating Dots */}
      {circles.map((circle, index) => (
        <div
          key={index}
          className="border border-dashed border-gray-500 rounded-full absolute top-0 left-1/2 -translate-x-1/2"
          style={{
            width: circle.radius * 2,
            height: circle.radius * 2,
          }}
        >
          {/* Rotating Dot */}
          <div
            className="absolute w-4 h-4 bg-blue-600 "
            style={{
              top: "53.2%",
              left: "50%",
              transform: `translate(-50%, -50%) translateY(-${circle.radius}px)`,
              animation: `rotate-circle-${index} ${circle.speed}s linear infinite`,
              transformOrigin: `center ${circle.radius}px`, // Keeps dot aligned with the border
            }}
          ></div>
        </div>
      ))}

      {/* Animation Styles */}
      <style>
        {circles
          .map(
            (circle, index) => `
              @keyframes rotate-circle-${index} {
                0% { transform: translate(-50%, -50%) translateY(-${circle.radius}px) rotate(0deg); }
                100% { transform: translate(-50%, -50%) translateY(-${circle.radius}px) rotate(360deg); }
              }
            `
          )
          .join("\n")}
      </style>
    </div>
  );
};

export default MultiRotatingCircles;



// const MultiRotatingCircles = () => {
//   const circles = [{ radius: 100, speed: 5 }, { radius: 180, speed: 8 },];

//   return (
//     <div className="relative w-[800px] h-[700px] flex items-center justify-center">
//       {circles.map((circle, index) => (
//         <div
//           key={index}
//           className="border border-dashed border-gray-500 rounded-full absolute"
//           style={{
//             width: circle.radius * 2,
//             height: circle.radius * 2,
//           }}
//         >
//           {/* Rotating Dot */}
//           <div
//             className="absolute w-3 h-3 bg-blue-600 rotate-90"
//             style={{
//               top: "50%",
//               left: "50%",
//               transform: `translate(-50%, -50%) rotate(0deg) translate(${circle.radius}px)`,
//               animation: `rotate-circle-${index} ${circle.speed}s linear infinite`,
//             }}
//           ></div>
//         </div>
//       ))}

//       <style>
//         {circles
//           .map(
//             (circle, index) => `
//               @keyframes rotate-circle-${index} {
//                 0% { transform: translate(-50%, -50%) rotate(0deg) translate(${circle.radius}px) rotate(0deg); }
//                 100% { transform: translate(-50%, -50%) rotate(360deg) translate(${circle.radius}px) rotate(-360deg); }
//               }
//             `
//           )
//           .join("\n")}
//       </style>
//     </div>
//   );
// };

// export default MultiRotatingCircles;