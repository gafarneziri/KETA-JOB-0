import { useState, useEffect } from 'react';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) { // Show the arrow after scrolling 300px down
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    isVisible && (
      <div
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 flex items-center justify-center w-16 h-16 bg-[#003049] text-white rounded-full  shadow-xl hover:bg-blue-900"
        style={{ display: isVisible ? 'block' : 'none' }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-8  ml-4 h-20 pb-[px]  cursor-pointer" // Ensure cursor-pointer is added here
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7-7-7 7"
          />
        </svg>
      </div>
    )
  );
};

export default ScrollToTopButton;
