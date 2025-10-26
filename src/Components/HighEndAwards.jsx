import React from "react";

function HighEndAwards() {
  return (
    <div className="w-full bg-white py-20 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 mb-16">
          <div className="flex items-center gap-8">
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-black">
              HIGH-END
            </h1>
            {/* Background Image */}
            <div
              className="hidden lg:block w-32 h-32 rounded-2xl overflow-hidden shadow-2xl"
              style={{
                backgroundImage:
                  "url(https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2064)",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>
          </div>
          <p className="text-lg md:text-xl max-w-xl leading-relaxed text-gray-700">
            Awards are proof of creativity, impact, and pushing boundaries to
            create memorable brand experiences that fuel our client's
            positioning.
          </p>
        </div>

        {/* Divider Line */}
        <div className="w-full h-px bg-gray-300 mb-20"></div>

        {/* Stats Section */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-16">
          {/* Left Stat - 59 */}
          <div className="relative flex-shrink-0">
            {/* Background Decorative Lines */}
            <div className="absolute left-0 top-0 flex gap-2 opacity-10">
              {[...Array(12)].map((_, i) => (
                <div
                  key={i}
                  className="w-1 bg-gradient-to-b from-purple-400 to-blue-400 rounded-full"
                  style={{ height: `${120 + i * 10}px` }}
                ></div>
              ))}
            </div>

            {/* Content */}
            <div className="relative z-10">
              <div className="text-8xl md:text-9xl font-bold mb-6 italic text-black">
                59
              </div>
              <h3 className="text-xl font-semibold mb-3 text-black">
                Collected Awards
              </h3>
              <p className="text-gray-600 leading-relaxed max-w-md">
                with Site of the Day wins from Awwwards, FWA and CSSDA among
                other awards and recognitions.
              </p>
            </div>
          </div>

          {/* Right Stat - 5x */}
          <div className="relative flex-shrink-0 md:text-right">
            {/* Content */}
            <div className="relative z-10">
              <div className="text-8xl md:text-9xl font-bold mb-6 italic text-black">
                5x
              </div>
              <h3 className="text-xl font-semibold mb-3 text-black">
                Nominated for Agency of the Year
              </h3>
              <p className="text-gray-600 leading-relaxed max-w-md md:ml-auto">
                at Awwwards 2024, CSSDA 2024, and Webflow Agency of the year
                2022, 2023 & 2024.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HighEndAwards;
