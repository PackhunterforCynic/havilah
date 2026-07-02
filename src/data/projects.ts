import proj1 from "@/assets/project1.avif";
import proj2 from "@/assets/project2.avif";
import proj3 from "@/assets/project3.avif";
import heroImg from "@/assets/hero-cinema.jpg";
const demoVideo = "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4";

export type Project = {
  id: string;
  slug: string;
  title: string;
  category: string;
  client: string;
  year: string;
  description: string;
  servicesProvided: string[];
  runtime?: string;
  thumbnail: string;
  poster: string;
  heroVideo?: string;
  galleryImages: string[];
  credits: { role: string; name: string }[];
  technologies: string[];
  featured: boolean;
};

export const PROJECTS: Project[] = [
  {
    id: "p1",
    slug: "corporate-video-production",
    title: "Corporate Video Production",
    category: "Corporate",
    client: "Global Enterprises",
    year: "2024",
    description: "A premium cinematic corporate overview designed to showcase scale, infrastructure, and brand identity with breathtaking visuals.",
    servicesProvided: ["Directing", "Cinematography", "Color Grading"],
    runtime: "03:45",
    thumbnail: proj1,
    poster: proj1,
    heroVideo: demoVideo,
    galleryImages: [proj1, proj2, proj3, heroImg],
    credits: [{ role: "Director", name: "Alex Morgan" }],
    technologies: ["Arri Alexa 35", "DaVinci Resolve"],
    featured: true,
  },
  {
    id: "p2",
    slug: "real-estate-video-production",
    title: "Real Estate Video Production",
    category: "Real Estate",
    client: "Luxury Estates",
    year: "2024",
    description: "An immersive property tour utilizing FPV drones and precision gimbal tracking to highlight architectural details and premium finishes.",
    servicesProvided: ["Drone Ops", "Cinematography", "Editing"],
    runtime: "02:15",
    thumbnail: proj2,
    poster: proj2,
    heroVideo: demoVideo,
    galleryImages: [proj2, proj3, proj1, heroImg],
    credits: [{ role: "Cinematographer", name: "Lena Park" }],
    technologies: ["DJI Inspire 3", "RED V-Raptor"],
    featured: true,
  },
  {
    id: "p3",
    slug: "3d-vfx",
    title: "3D VFX",
    category: "VFX",
    client: "Tech Innovations",
    year: "2023",
    description: "Cutting-edge 3D product rendering and visual effects integrating seamlessly into live-action plates for a futuristic product launch.",
    servicesProvided: ["3D Modeling", "VFX Compositing", "Lighting"],
    runtime: "01:30",
    thumbnail: proj3,
    poster: proj3,
    heroVideo: demoVideo,
    galleryImages: [proj3, proj1, proj2, heroImg],
    credits: [{ role: "VFX Supervisor", name: "Julian Reyes" }],
    technologies: ["Houdini", "Unreal Engine 5"],
    featured: true,
  },
  {
    id: "p4",
    slug: "wedding-reception",
    title: "Wedding Reception",
    category: "Wedding",
    client: "Private Client",
    year: "2024",
    description: "An intimate and emotionally resonant capture of a grand wedding reception, focused on candid moments and exquisite venue lighting.",
    servicesProvided: ["Event Coverage", "Sound Design", "Color Grading"],
    runtime: "04:20",
    thumbnail: heroImg,
    poster: heroImg,
    heroVideo: demoVideo,
    galleryImages: [heroImg, proj1, proj2, proj3],
    credits: [{ role: "Lead Shooter", name: "Maya Kim" }],
    technologies: ["Sony Venice 2", "Zeiss Supreme Primes"],
    featured: true,
  },
  {
    id: "p5",
    slug: "christian-wedding",
    title: "Christian Wedding",
    category: "Wedding",
    client: "Private Client",
    year: "2023",
    description: "A beautifully framed traditional Christian wedding emphasizing vows, architectural grandeur of the church, and emotional family moments.",
    servicesProvided: ["Multi-cam Recording", "Audio Mixing", "Cinematography"],
    runtime: "05:10",
    thumbnail: proj1,
    poster: proj1,
    heroVideo: demoVideo,
    galleryImages: [proj2, heroImg, proj3, proj1],
    credits: [{ role: "Director", name: "David Chen" }],
    technologies: ["Arri Alexa 35", "Cooke S4 Primes"],
    featured: true,
  },
  {
    id: "p6",
    slug: "haldi",
    title: "Haldi",
    category: "Wedding",
    client: "Private Client",
    year: "2024",
    description: "A vibrant and energetic Haldi ceremony captured with high frame rates to emphasize the flying colors and joyous celebrations.",
    servicesProvided: ["Cinematography", "High-speed Capture"],
    runtime: "02:45",
    thumbnail: proj2,
    poster: proj2,
    heroVideo: demoVideo,
    galleryImages: [proj3, proj2, heroImg, proj1],
    credits: [{ role: "Cinematographer", name: "Alex Morgan" }],
    technologies: ["RED V-Raptor", "DaVinci Resolve"],
    featured: true,
  },
  {
    id: "p7",
    slug: "young-indians-ngo",
    title: "Young Indians Bengaluru NGO",
    category: "Corporate",
    client: "Young Indians Bengaluru",
    year: "2023",
    description: "A documentary-style corporate overview highlighting the impactful initiatives and community engagement driven by the NGO.",
    servicesProvided: ["Documentary", "Interviews", "Editing"],
    runtime: "06:00",
    thumbnail: proj3,
    poster: proj3,
    heroVideo: demoVideo,
    galleryImages: [proj1, proj3, proj2, heroImg],
    credits: [{ role: "Director", name: "Julian Reyes" }],
    technologies: ["Sony FX9", "Sennheiser Audio"],
    featured: true,
  },
];
