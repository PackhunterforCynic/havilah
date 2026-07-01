import { useState, useEffect, useRef } from "react";
import { Play, Pause, Volume2, VolumeX, Maximize, RotateCcw } from "lucide-react";

type VideoPlayerProps = {
  src: string;
  poster?: string;
  autoPlay?: boolean;
  muted?: boolean;
  loop?: boolean;
  className?: string;
};

export function VideoPlayer({
  src,
  poster,
  autoPlay = false,
  muted = true,
  loop = false,
  className = "",
}: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isPlaying, setIsPlaying] = useState(autoPlay);
  const [isMuted, setIsMuted] = useState(muted);
  const [volume, setVolume] = useState(1);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [showControls, setShowControls] = useState(true);
  const controlsTimeoutRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    if (autoPlay && videoRef.current) {
      videoRef.current.play().catch(() => {
        setIsPlaying(false);
      });
    }
  }, [autoPlay]);

  useEffect(() => {
    const handleInteraction = () => {
      setShowControls(true);
      if (controlsTimeoutRef.current) window.clearTimeout(controlsTimeoutRef.current);
      if (isPlaying) {
        controlsTimeoutRef.current = window.setTimeout(() => setShowControls(false), 2000);
      }
    };
    
    const container = containerRef.current;
    if (container) {
      container.addEventListener("mousemove", handleInteraction);
      container.addEventListener("touchstart", handleInteraction);
      container.addEventListener("mouseleave", () => {
        if (isPlaying) setShowControls(false);
      });
    }
    return () => {
      if (container) {
        container.removeEventListener("mousemove", handleInteraction);
        container.removeEventListener("touchstart", handleInteraction);
        // eslint-disable-next-line react-hooks/exhaustive-deps
        container.removeEventListener("mouseleave", () => {});
      }
      if (controlsTimeoutRef.current) window.clearTimeout(controlsTimeoutRef.current);
    };
  }, [isPlaying]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!containerRef.current?.contains(document.activeElement)) return;
      
      switch(e.key) {
        case " ":
        case "k":
          e.preventDefault();
          togglePlay();
          break;
        case "m":
          e.preventDefault();
          toggleMute();
          break;
        case "f":
          e.preventDefault();
          toggleFullscreen();
          break;
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  const togglePlay = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
        setShowControls(true);
      }
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
      if (isMuted && volume === 0) setVolume(1);
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      const current = videoRef.current.currentTime;
      const total = videoRef.current.duration || 0;
      setCurrentTime(current);
      setDuration(total);
      setProgress((current / total) * 100);
    }
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseFloat(e.target.value);
    if (videoRef.current) {
      videoRef.current.currentTime = (val / 100) * duration;
      setProgress(val);
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseFloat(e.target.value);
    setVolume(val);
    if (videoRef.current) {
      videoRef.current.volume = val;
      if (val === 0) {
        setIsMuted(true);
        videoRef.current.muted = true;
      } else {
        setIsMuted(false);
        videoRef.current.muted = false;
      }
    }
  };

  const toggleFullscreen = () => {
    if (!containerRef.current) return;
    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else {
      containerRef.current.requestFullscreen();
    }
  };

  const formatTime = (timeInSeconds: number) => {
    const mins = Math.floor(timeInSeconds / 60);
    const secs = Math.floor(timeInSeconds % 60);
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
  };

  const isEnded = progress >= 99.9 && !loop;

  return (
    <div 
      ref={containerRef} 
      className={`relative group overflow-hidden bg-black focus:outline-none ${className}`}
      tabIndex={0}
      onClick={(e) => {
        // Only toggle play if clicking the video area, not the controls
        if ((e.target as HTMLElement).tagName !== 'INPUT' && !(e.target as HTMLElement).closest('.controls-bar')) {
          togglePlay();
        }
      }}
    >
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        autoPlay={autoPlay}
        muted={muted}
        defaultMuted={muted}
        loop={loop}
        playsInline
        preload="metadata"
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleTimeUpdate}
        onEnded={() => {
          setIsPlaying(false);
          setShowControls(true);
        }}
        className="w-full h-full object-contain md:object-cover"
      />
      
      {/* Big center play/replay button when paused */}
      {(!isPlaying || isEnded) && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/30 backdrop-blur-[2px] transition-all pointer-events-none">
          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gold/90 text-primary-foreground shadow-2xl backdrop-blur-md">
            {isEnded ? <RotateCcw className="h-8 w-8 ml-0" /> : <Play className="h-8 w-8 ml-1" />}
          </div>
        </div>
      )}

      {/* Controls Bar */}
      <div 
        className={`controls-bar absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent px-6 pb-6 pt-16 transition-opacity duration-500 ${
          showControls ? "opacity-100" : "opacity-0"
        }`}
      >
        {/* Progress Bar */}
        <div className="flex items-center gap-4 mb-4">
          <input
            type="range"
            min="0"
            max="100"
            step="0.1"
            value={progress || 0}
            onChange={handleSeek}
            className="h-1 w-full cursor-pointer appearance-none bg-white/20 rounded-full [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:bg-gold [&::-webkit-slider-thumb]:rounded-full hover:[&::-webkit-slider-thumb]:scale-125 transition-all"
            style={{
              background: `linear-gradient(to right, #c9a84c ${progress}%, rgba(255, 255, 255, 0.2) ${progress}%)`
            }}
          />
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4 md:gap-6">
            <button onClick={togglePlay} className="text-white hover:text-gold transition-colors">
              {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
            </button>
            
            <div className="hidden md:flex items-center gap-3 group/volume">
              <button onClick={toggleMute} className="text-white hover:text-gold transition-colors">
                {isMuted ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
              </button>
              <input
                type="range"
                min="0"
                max="1"
                step="0.05"
                value={isMuted ? 0 : volume}
                onChange={handleVolumeChange}
                className="h-1 w-0 opacity-0 group-hover/volume:w-20 group-hover/volume:opacity-100 cursor-pointer appearance-none bg-white/20 rounded-full transition-all duration-300 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:rounded-full"
                style={{
                  background: `linear-gradient(to right, white ${(isMuted ? 0 : volume) * 100}%, rgba(255, 255, 255, 0.2) ${(isMuted ? 0 : volume) * 100}%)`
                }}
              />
            </div>

            <div className="text-[10px] md:text-[11px] font-mono tracking-wider text-white/80">
              {formatTime(currentTime)} / {formatTime(duration)}
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button onClick={toggleFullscreen} className="text-white hover:text-gold transition-colors">
              <Maximize className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
