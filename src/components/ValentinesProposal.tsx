import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Fireworks from "@fireworks-js/react";

// 36 images
const images = [
  "/game-photos/1.jpeg",
  "/game-photos/2.jpeg",
  "/game-photos/3.jpeg",
  "/game-photos/4.jpeg",
  "/game-photos/5.jpeg",
  "/game-photos/6.jpeg",
  "/game-photos/7.jpeg",
  "/game-photos/8.jpeg",
  "/game-photos/9.jpeg",
  "/game-photos/10.jpeg",
  "/game-photos/11.jpeg",
  "/game-photos/12.jpeg",
  "/game-photos/13.jpeg",
  "/game-photos/14.jpeg",
  "/game-photos/15.jpeg",
  "/game-photos/16.jpeg",
  "/game-photos/17.jpeg",
  "/game-photos/18.jpeg",
  "/game-photos/19.jpeg",
  "/game-photos/20.jpeg",
  "/game-photos/21.jpeg",
  "/game-photos/22.jpeg",
  "/game-photos/23.jpeg",
  "/game-photos/24.jpeg",
  "/game-photos/25.jpeg",
  "/game-photos/26.jpeg",
  "/game-photos/27.jpeg",
  "/game-photos/28.jpeg",
  "/game-photos/29.jpeg",
  "/game-photos/30.jpeg",
  "/game-photos/31.jpeg",
  "/game-photos/32.jpeg",
  "/game-photos/33.jpeg",
  "/game-photos/34.jpeg",
  "/game-photos/35.jpeg",
  "/game-photos/36.jpeg",
];

export default function ValentinesProposal() {
  const [step, setStep] = useState(0);
  const [position, setPosition] = useState<{
    top: string;
    left: string;
  } | null>(null);
  const [showFireworks, setShowFireworks] = useState(false);

  const getRandomPosition = () => {
    const randomTop = Math.random() * 80;
    const randomLeft = Math.random() * 80;
    return { top: `${randomTop}%`, left: `${randomLeft}%` };
  };

  useEffect(() => {
    if (step < 2) {
      // Change step after 5 seconds
      const timer = setTimeout(() => {
        setStep((prevStep) => prevStep + 1);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [step]);

  const handleYesClick = () => {
    setShowFireworks(true);
    setStep(3);
  };

  return (
    <div className="flex flex-col items-center justify-center h-full">
      <AnimatePresence mode="wait">
        {step === 0 && (
          <motion.h2
            key="step-0"
            className="text-4xl font-semibold mb-4 font-playfair"
            transition={{ duration: 1 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            Gratulacje! Ukończyłeś grę.
          </motion.h2>
        )}
        {step === 1 && (
          <motion.h2
            key="step-1"
            className="text-4xl font-semibold mb-4 font-playfair"
            transition={{ duration: 3 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            Mam dla Ciebie niespodziankę!
          </motion.h2>
        )}
        {step === 2 && (
          <>
            {/* Image Grid Background - fills entire viewport */}
            <motion.div
              key="step-2-background"
              className="fixed inset-0 grid grid-cols-6 grid-rows-6 opacity-10 z-0"
              transition={{ duration: 3 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.1 }}
              exit={{ opacity: 0 }}
            >
              {images.slice(0, 36).map((src, index) => (
                <div key={index} className="relative w-full h-full">
                  <img
                    src={src}
                    alt={`Wspomnienie ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </motion.div>

            <motion.div
              key="step-2"
              transition={{ duration: 3 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex flex-col items-center justify-center relative z-10"
            >
              <h2
                className="text-5xl font-semibold mb-8 font-playfair text-white"
                style={{
                  textShadow: '0 2px 8px rgba(0, 0, 0, 0.8), 0 4px 16px rgba(0, 0, 0, 0.6)'
                }}
              >
                Czy zostaniesz moją Walentynką?
              </h2>
            <img
              src="/sad_hamster.png"
              alt="Smutny chomik"
              width="200"
              height="200"
            />
            <div className="flex space-x-4 mt-10">
              <button
                className="px-6 py-2 text-lg font-semibold text-white bg-gradient-to-r from-pink-500 to-rose-500 rounded-xl hover:from-pink-600 hover:to-rose-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                onClick={handleYesClick}
              >
                Tak, zostanę! 🥰
              </button>
              <button
                className="px-6 py-2 text-lg font-semibold text-white bg-gradient-to-r from-gray-500 to-gray-600 rounded-xl hover:from-gray-600 hover:to-gray-700 transform hover:scale-95 transition-all duration-300 shadow-lg"
                style={
                  position
                    ? {
                        position: "absolute",
                        top: position.top,
                        left: position.left,
                      }
                    : {}
                }
                onMouseEnter={() => setPosition(getRandomPosition())}
                onClick={() => setPosition(getRandomPosition())}
              >
                Nie, nie zostanę 😢
              </button>
            </div>
          </motion.div>
          </>
        )}
        {step === 3 && (
          <motion.div
            key="step-3"
            className="text-4xl font-semibold mb-4 flex flex-col justify-center items-center font-playfair"
            transition={{ duration: 1 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            Dziękuję za akceptację, kocham Cię! 💕
            <p className="text-sm mt-4">Po więcej informacji, napisz do mnie!!! 💌</p>
            <img
              src="/hamster_jumping.gif"
              alt="Szczęśliwy chomik"
              width="200"
              height="200"
            />
          </motion.div>
        )}
      </AnimatePresence>

      {showFireworks && (
        <div className="absolute w-full h-full">
          <Fireworks
            options={{
              autoresize: true,
            }}
            style={{
              width: "100%",
              height: "100%",
              position: "absolute",
              top: 0,
              left: 0,
            }}
          />
        </div>
      )}
    </div>
  );
}
