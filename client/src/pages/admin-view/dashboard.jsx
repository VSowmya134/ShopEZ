import { useState, useEffect } from "react";
import bgImage from "../../assets/bg.jpg"; // Make sure this path is correct

function AdminDashboard() {
  const fullText = "Welcome to ShopEZ website";
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayedText((prev) => {
        if (index < fullText.length) {
          const next = prev + fullText[index];
          index++;
          return next;
        } else {
          clearInterval(interval);
          return prev;
        }
      });
    }, 70);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="h-screen w-screen bg-cover bg-center flex items-center justify-center px-4"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="bg-white/10 backdrop-blur-lg border border-white/20 p-8 md:p-12 rounded-3xl shadow-2xl text-center max-w-2xl w-full">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white drop-shadow-lg mb-4 tracking-wide">
          {displayedText}
        </h1>
        <p className="text-white text-base sm:text-lg opacity-90 mb-8">
          Your one-stop online shopping destination 🛍️
        </p>
        <button
          className="px-6 py-3 bg-gradient-to-r from-yellow-400 to-yellow-300 hover:from-yellow-300 hover:to-yellow-200 text-black font-semibold rounded-full transition-transform transform hover:scale-105 shadow-lg"
        >
          Explore Now
        </button>
      </div>
    </div>
  );
}

export default AdminDashboard;
