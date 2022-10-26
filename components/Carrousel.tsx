import { useState } from "react";

const LIPSSON_IMAGES = [
  {
    src: "/images/pic2.jpeg",
    alt: "prepare wedding",
    active: false,
  },
  {
    src: "/images/pic3.jpeg",
    alt: "prepare wedding",
    active: false,
  },
  {
    src: "/images/pic4.jpeg",
    alt: "prepare wedding",
    active: false,
  },
  {
    src: "/images/pic5.jpeg",
    alt: "prepare wedding",
    active: false,
  },
];

const Carrousel = () => {
  const [idx, setIdx] = useState(0);

  const handleNextImg = () => {
    if (LIPSSON_IMAGES[idx + 1]) {
      setIdx(idx + 1);
    }
  };

  const handlePrevImg = () => {
    if (LIPSSON_IMAGES[idx - 1]) {
      setIdx(idx - 1);
    }
  };

  return (
    <div className="relative h-full lg:w-11/12 lg:m-auto">
      <div className="relative h-52 md:h-[700px] overflow-hidden rounded-2xl">
        <div className="duration-700 ease-in-out" data-carousel-item>
          <div className={`duration-700 ease-in-out`}>
            <img
              src={LIPSSON_IMAGES[idx].src}
              className={`absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2`}
              alt={LIPSSON_IMAGES[idx].alt}
            />
          </div>
        </div>
        <div className="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
          {LIPSSON_IMAGES.map((_, index) => (
            <button
              key={index}
              type="button"
              className={`w-5 h-5 rounded-full bg-white ${
                idx === index ? "" : "opacity-50"
              }`}
              aria-current="false"
              aria-label={`Slide ${index}`}
              onClick={() => setIdx(index)}
            ></button>
          ))}
        </div>
      </div>
      <button
        type="button"
        className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-prev
        onClick={handlePrevImg}
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30  group-hover:bg-white/50  group-focus:ring-4 group-focus:ring-white  group-focus:outline-none">
          <svg
            aria-hidden="true"
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 19l-7-7 7-7"
            ></path>
          </svg>
          <span className="sr-only">Previous</span>
        </span>
      </button>
      <button
        type="button"
        className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        onClick={handleNextImg}
        data-carousel-next
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30  group-hover:bg-white/50  group-focus:ring-4 group-focus:ring-white  group-focus:outline-none">
          <svg
            aria-hidden="true"
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5l7 7-7 7"
            ></path>
          </svg>
          <span className="sr-only">Next</span>
        </span>
      </button>
    </div>
  );
};

export default Carrousel;
