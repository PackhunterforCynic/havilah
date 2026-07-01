import proj1 from "@/assets/project1.avif";
import proj2 from "@/assets/project2.avif";
import proj3 from "@/assets/project3.avif";
import heroImg from "@/assets/hero-cinema.jpg";

export type Project = {
  id: string;
  slug: string;
  title: string;
  category: string;
  client: string;
  year: string;
  description: string;
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
    slug: "nocturne",
    title: "Nocturne",
    category: "Film",
    client: "Maison Or",
    year: "2024",
    description: "A cinematic exploration of power, luxury and the beauty hidden in the shadows. Shot entirely at night using only available street lighting and custom-built LED arrays.",
    thumbnail: proj1,
    poster: proj1,
    heroVideo: undefined,
    galleryImages: [proj1, proj2, proj3, heroImg],
    credits: [
      { role: "Director", name: "Alex Morgan" },
      { role: "Cinematographer", name: "Lena Park" },
      { role: "Editor", name: "Julian Reyes" },
    ],
    technologies: ["Arri Alexa 35", "Cooke S4 Primes", "DaVinci Resolve"],
    featured: true,
  },
  {
    id: "p2",
    slug: "echoes",
    title: "Echoes",
    category: "Music Video",
    client: "Northwind Records",
    year: "2024",
    description: "A visually striking music video combining contemporary dance with brutalist architecture. The visual language reflects the rhythmic intensity of the track.",
    thumbnail: proj2,
    poster: proj2,
    galleryImages: [proj2, proj3, proj1, heroImg],
    credits: [
      { role: "Director", name: "Alex Morgan" },
      { role: "Choreographer", name: "Elena Rostova" },
    ],
    technologies: ["RED V-Raptor", "Atlas Orion Anamorphic"],
    featured: true,
  },
  {
    id: "p3",
    slug: "gilded-hour",
    title: "Gilded Hour",
    category: "Commercial",
    client: "Lumina",
    year: "2024",
    description: "A masterclass in macro cinematography and lighting control, highlighting the intricate details of Lumina's flagship timepiece.",
    thumbnail: proj3,
    poster: proj3,
    galleryImages: [proj3, proj1, proj2, heroImg],
    credits: [
      { role: "Director", name: "Maya Kim" },
      { role: "Cinematographer", name: "David Chen" },
    ],
    technologies: ["Phantom Flex 4K", "Laowa Probe Lens"],
    featured: true,
  },
  {
    id: "p4",
    slug: "in-between",
    title: "In Between",
    category: "Film",
    client: "Independent",
    year: "2023",
    description: "An experimental short film focusing on the spaces we inhabit during transition. A minimalist approach to storytelling driven purely by visual metaphors.",
    thumbnail: heroImg,
    poster: heroImg,
    galleryImages: [heroImg, proj1, proj2, proj3],
    credits: [
      { role: "Writer & Director", name: "Julian Reyes" },
    ],
    technologies: ["Sony Venice", "Zeiss Supreme Primes"],
    featured: false,
  }
];
