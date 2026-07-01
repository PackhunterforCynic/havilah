import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const SESSION_KEY = "havilah-intro-played";

export function CinematicStartup() {
  const [show, setShow] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [phase, setPhase] = useState(0); // 0: init, 1: perforations, 2: gold lines, 3: text, 4: pause, 5: iris

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) {
      setReducedMotion(true);
      setShow(false);
      return;
    }

    setShow(true);
    
    // Sequence timing
    setTimeout(() => setPhase(1), 500);   // Perforations
    setTimeout(() => setPhase(2), 1200);  // Gold lines
    setTimeout(() => setPhase(3), 2000);  // Text
    setTimeout(() => setPhase(4), 4000);  // Pause
    setTimeout(() => setPhase(5), 4500);  // Iris reveal
    setTimeout(() => setShow(false), 5500); // Unmount
  }, []);

  if (!show) return null;

  const havilahText = "HAVILAH".split("");

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center overflow-hidden bg-transparent pointer-events-none"
        >
          {/* Base Black Background (fades out when iris opens) */}
          <motion.div 
            className="absolute inset-0 bg-[#080808]"
            animate={{ opacity: phase >= 5 ? 0 : 1 }}
            transition={{ duration: 0.1, delay: 0.1 }} // Instant hide when iris takes over
          />

          {/* The Iris Reveal Effect */}
          {phase >= 5 && (
            <motion.div
              className="absolute left-1/2 top-1/2 -ml-[1px] -mt-[1px] h-[2px] w-[2px] rounded-full shadow-[0_0_0_9999px_#080808]"
              initial={{ scale: 0 }}
              animate={{ scale: window.innerWidth > window.innerHeight ? window.innerWidth : window.innerHeight }}
              transition={{ duration: 1.2, ease: [0.7, 0, 0.2, 1] }}
            />
          )}

          {/* Film Perforations */}
          <div className="absolute inset-x-0 top-0 flex justify-between px-4 py-2 opacity-30">
            {Array.from({ length: 20 }).map((_, i) => (
              <motion.div
                key={`top-${i}`}
                className="h-4 w-3 rounded-sm border border-white/20 bg-transparent"
                initial={{ y: -20, opacity: 0 }}
                animate={phase >= 1 ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: i * 0.05, ease: "easeOut" }}
              />
            ))}
          </div>
          <div className="absolute inset-x-0 bottom-0 flex justify-between px-4 py-2 opacity-30">
            {Array.from({ length: 20 }).map((_, i) => (
              <motion.div
                key={`bottom-${i}`}
                className="h-4 w-3 rounded-sm border border-white/20 bg-transparent"
                initial={{ y: 20, opacity: 0 }}
                animate={phase >= 1 ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: i * 0.05, ease: "easeOut" }}
              />
            ))}
          </div>

          {/* Gold Sweep Lines */}
          <motion.div
            className="absolute top-1/3 left-0 h-px w-full bg-gradient-to-r from-transparent via-gold/50 to-transparent"
            initial={{ scaleX: 0, opacity: 0, originX: 0 }}
            animate={phase >= 2 ? { scaleX: 1, opacity: 1 } : {}}
            transition={{ duration: 1.5, ease: [0.7, 0, 0.2, 1] }}
          />
          <motion.div
            className="absolute bottom-1/3 right-0 h-px w-full bg-gradient-to-r from-transparent via-gold/50 to-transparent"
            initial={{ scaleX: 0, opacity: 0, originX: 1 }}
            animate={phase >= 2 ? { scaleX: 1, opacity: 1 } : {}}
            transition={{ duration: 1.5, ease: [0.7, 0, 0.2, 1] }}
          />

          <div className="relative z-10 flex flex-col items-center">
            {/* Letters reveal individually */}
            <div className="flex overflow-hidden">
              {havilahText.map((char, index) => (
                <motion.span
                  key={index}
                  className="font-display text-5xl tracking-[0.3em] text-white md:text-7xl"
                  initial={{ y: "100%", opacity: 0 }}
                  animate={phase >= 3 ? { y: "0%", opacity: 1 } : {}}
                  transition={{
                    duration: 0.8,
                    ease: [0.2, 0.6, 0.2, 1],
                    delay: phase >= 3 ? index * 0.1 : 0,
                  }}
                >
                  {char}
                </motion.span>
              ))}
            </div>
            
            {/* Subtitle */}
            <motion.p
              className="mt-6 font-sans text-[10px] uppercase tracking-[0.4em] text-gold"
              initial={{ opacity: 0, filter: "blur(10px)" }}
              animate={phase >= 3 ? { opacity: 1, filter: "blur(0px)" } : {}}
              transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
            >
              Creative Motion Studio
            </motion.p>
          </div>
          
          {/* Subtle film grain on top */}
          <div className="pointer-events-none absolute inset-0 opacity-10 mix-blend-overlay" 
               style={{ backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='180' height='180'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/></filter><rect width='100%25' height='100%25' filter='url(%23n)'/></svg>")` }} />

        </motion.div>
      )}
    </AnimatePresence>
  );
}
