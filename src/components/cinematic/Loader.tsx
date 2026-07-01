import { useEffect, useState } from "react";

/**
 * Cinematic boot sequence:
 *  – Black canvas with film-grain
 *  – 24fps countdown leader (3 · 2 · 1)
 *  – Rotating sweep / aperture iris
 *  – HAVILAH logo reveal with gold sweep
 *  – Horizontal shutters open from center, then fade out
 */
export function Loader() {
  const [stage, setStage] = useState<0 | 1 | 2 | 3>(0); // 0 leader · 1 logo · 2 open · 3 done
  const [count, setCount] = useState(3);

  useEffect(() => {
    const t1 = setTimeout(() => setCount(2), 380);
    const t2 = setTimeout(() => setCount(1), 760);
    const t3 = setTimeout(() => setStage(1), 1140); // logo
    const t4 = setTimeout(() => setStage(2), 2000); // open shutters
    const t5 = setTimeout(() => setStage(3), 2700); // done — remove
    return () => [t1, t2, t3, t4, t5].forEach(clearTimeout);
  }, []);

  if (stage === 3) return null;

  return (
    <div
      className={`havilah-loader pointer-events-none fixed inset-0 z-[9998] overflow-hidden ${
        stage === 2 ? "is-open" : ""
      }`}
      aria-hidden="true"
    >
      {/* Top + bottom shutters open from the center outward */}
      <div className="hav-shutter hav-shutter-top" />
      <div className="hav-shutter hav-shutter-bottom" />

      {/* Film grain + vignette */}
      <div className="absolute inset-0 noise opacity-90" />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, transparent 0%, rgba(0,0,0,0.65) 75%)",
        }}
      />

      {/* Center stage */}
      <div className="absolute inset-0 flex items-center justify-center">
        {stage === 0 ? (
          <div className="relative flex h-44 w-44 items-center justify-center">
            {/* Iris / aperture rings */}
            <span className="hav-ring hav-ring-1" />
            <span className="hav-ring hav-ring-2" />
            <span className="hav-ring hav-ring-3" />
            <span className="hav-cross hav-cross-h" />
            <span className="hav-cross hav-cross-v" />
            <span
              key={count}
              className="hav-count font-display text-7xl text-gold-soft"
            >
              {count}
            </span>
          </div>
        ) : (
          <div className="flex flex-col items-center">
            <span className="font-display text-3xl tracking-[0.6em] gold-sweep md:text-5xl">
              HAVILAH
            </span>
            <span className="mt-5 h-px w-32 origin-center scale-x-0 bg-gold hav-line" />
            <span className="mt-4 text-[10px] uppercase tracking-[0.55em] text-foreground/60">
              Cinematic Multimedia
            </span>
          </div>
        )}
      </div>

      <style>{`
        .havilah-loader { background: #050505; }

        /* Shutters cover the screen, then split open from the middle */
        .hav-shutter {
          position: absolute;
          left: 0; right: 0;
          height: 50%;
          background: #050505;
          transition: transform 0.95s cubic-bezier(0.85, 0, 0.15, 1),
                      opacity 0.5s ease 0.6s;
          will-change: transform;
        }
        .hav-shutter-top    { top: 0; }
        .hav-shutter-bottom { bottom: 0; }
        .havilah-loader.is-open .hav-shutter-top    { transform: translateY(-101%); }
        .havilah-loader.is-open .hav-shutter-bottom { transform: translateY(101%); }
        .havilah-loader.is-open { opacity: 0; transition: opacity 0.6s ease 0.45s; }

        /* Iris rings */
        .hav-ring {
          position: absolute;
          border-radius: 50%;
          border: 1px solid oklch(0.78 0.13 85 / 0.5);
        }
        .hav-ring-1 { inset: 0;  animation: havSpin 6s linear infinite; border-style: dashed; }
        .hav-ring-2 { inset: 14%; animation: havSpin 4s linear infinite reverse; border-color: oklch(0.88 0.10 88 / 0.6); }
        .hav-ring-3 { inset: 30%; animation: havPulse 1.2s ease-in-out infinite; border-color: oklch(0.78 0.13 85 / 0.9); }

        .hav-cross { position: absolute; background: oklch(0.78 0.13 85 / 0.55); }
        .hav-cross-h { top: 50%; left: -20px; right: -20px; height: 1px; transform: translateY(-50%); }
        .hav-cross-v { left: 50%; top: -20px; bottom: -20px; width: 1px; transform: translateX(-50%); }

        .hav-count {
          display: inline-block;
          animation: havCount 0.38s cubic-bezier(0.2, 0.7, 0.2, 1);
          text-shadow: 0 0 30px oklch(0.78 0.13 85 / 0.45);
        }

        .hav-line {
          animation: havLine 0.9s 0.15s cubic-bezier(0.7, 0, 0.2, 1) forwards;
        }

        @keyframes havSpin  { to { transform: rotate(360deg); } }
        @keyframes havPulse {
          0%, 100% { transform: scale(1);    opacity: 0.9; }
          50%      { transform: scale(1.08); opacity: 0.4; }
        }
        @keyframes havCount {
          0%   { opacity: 0; transform: scale(1.6); filter: blur(8px); }
          60%  { opacity: 1; transform: scale(1);   filter: blur(0); }
          100% { opacity: 1; transform: scale(1); }
        }
        @keyframes havLine {
          0%   { transform: scaleX(0); }
          100% { transform: scaleX(1); }
        }

        @media (prefers-reduced-motion: reduce) {
          .hav-ring, .hav-count, .hav-line { animation: none !important; }
        }
      `}</style>
    </div>
  );
}
