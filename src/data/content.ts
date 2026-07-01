// Centralized site data — keeps route files lean and content editable in one place.
import {
  Film, Camera, Video, Mic, Aperture, Tv, Music, Sparkles,
  Clapperboard, Palette, Headphones, Lightbulb, Wand2, Compass,
  GraduationCap, Users, Trophy, Globe2,
} from "lucide-react";

import projWedding from "@/assets/proj-wedding.jpg";
import projCommercial from "@/assets/proj-commercial.jpg";
import projMusic from "@/assets/proj-music.jpg";
import projDoc from "@/assets/proj-doc.jpg";
import projBrand from "@/assets/proj-brand.jpg";
import projLive from "@/assets/proj-live.jpg";
import projCorporate from "@/assets/proj-corporate.jpg";
import projPodcast from "@/assets/proj-podcast.jpg";
import projEvent from "@/assets/proj-event.jpg";
import projDrone from "@/assets/proj-drone.jpg";

import aboutImg from "@/assets/about-studio.jpg";
import team1 from "@/assets/team-1.jpg";
import team2 from "@/assets/team-2.jpg";
import team3 from "@/assets/team-3.jpg";
import team4 from "@/assets/team-4.jpg";

export const IMAGES = {
  projWedding, projCommercial, projMusic, projDoc, projBrand, projLive,
  projCorporate, projPodcast, projEvent, projDrone,
  about: aboutImg,
  team1, team2, team3, team4,
};

export const FEATURED_PROJECTS = [
  { title: "Eternal Vows", category: "Wedding", img: projWedding },
  { title: "Midnight Drive", category: "Commercial", img: projCommercial },
  { title: "Amber Tour", category: "Music Video", img: projMusic },
  { title: "The Last Craftsman", category: "Documentary", img: projDoc },
  { title: "Maison Or", category: "Brand Film", img: projBrand },
  { title: "Live Broadcast 24", category: "Live Production", img: projLive },
];

export const SERVICE_TILES = [
  { icon: Film, label: "Film Production" },
  { icon: Camera, label: "Photography" },
  { icon: Video, label: "Cinematography" },
  { icon: Mic, label: "Podcast & Audio" },
  { icon: Aperture, label: "Color Grading" },
  { icon: Tv, label: "Live Streaming" },
  { icon: Music, label: "Music Videos" },
  { icon: Sparkles, label: "VFX & Motion" },
];

export const TEAM = [
  { 
    name: "Arjun Mehta", 
    role: "Founder · Director", 
    img: team1,
    bio: "Arjun brings stories to life with a vision rooted in emotion, detail, and cinematic excellence. His work spans global brands and intimate documentaries.",
    experience: "12+ Years Experience",
    origin: "Mumbai, IND",
    instagram: "@arjun.director",
    email: "arjun@havilah.studio",
    specialties: ["Visual Storytelling", "Brand Films"]
  },
  { 
    name: "Elena Park", 
    role: "Lead Cinematographer", 
    img: team2,
    bio: "Elena's mastery of light and shadow creates frames that speak volumes. She specializes in shooting on film and large format digital sensors.",
    experience: "8+ Years Experience",
    origin: "Seoul, KOR",
    instagram: "@elenashoots",
    email: "elena@havilah.studio",
    specialties: ["Anamorphic Lenses", "Steadicam"]
  },
  { 
    name: "Ravi Kapoor", 
    role: "Senior Colorist", 
    img: team3,
    bio: "Ravi breathes life into raw footage, crafting palettes that enhance the emotional core of every project he touches.",
    experience: "10+ Years Experience",
    origin: "London, UK",
    instagram: "@ravi.colors",
    email: "ravi@havilah.studio",
    specialties: ["HDR Mastering", "Film Emulation"]
  },
  { 
    name: "Marcus Hayes", 
    role: "Head of Post", 
    img: team4,
    bio: "Marcus oversees the entire post-production pipeline, ensuring a seamless transition from set to final delivery with meticulous precision.",
    experience: "15+ Years Experience",
    origin: "Los Angeles, USA",
    instagram: "@marcus.post",
    email: "marcus@havilah.studio",
    specialties: ["VFX Supervision", "Workflow Design"]
  },
];

export const HOME_TESTIMONIALS = [
  { name: "Sofía Lima", brand: "Maison Or", quote: "Havilah turned our brand story into a film I'd buy a ticket for.", img: projBrand, views: "1.2M", likes: "84K" },
  { name: "Daniel Cole", brand: "Northwind Records", quote: "The grade. The pacing. The light. They saw what I felt.", img: projMusic, views: "3.4M", likes: "210K" },
  { name: "Anaya & Vir", brand: "Wedding Film", quote: "We cried watching the cut. They captured the unspoken.", img: projWedding, views: "780K", likes: "62K" },
];

export const CLIENTS = ["NETFLIX", "SONY", "APPLE", "VOGUE", "BMW", "NIKE", "ADIDAS", "MERCEDES", "DIOR", "HBO"];


