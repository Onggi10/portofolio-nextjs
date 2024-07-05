import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import BRIImg from "@/public/BRI.png";
import HomeCareImg from "@/public/homecare.png";
import CronosImg from "@/public/cronos.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "SMP Bhakti Insani",
    location: "Batutulis, Kota Bogor",
    description:
      "I graduated after 3 years of studying.",
    icon: React.createElement(LuGraduationCap),
    date: "2015",
  },
  {
    title: "SMK Bhakti Insani",
    location: "Batutulis, Kota Bogor",
    description:
      "I graduated after 3 years. I get skill for developer",
    icon: React.createElement(LuGraduationCap),
    date: "2018 - 2019",
  },
  {
    title: "Cronos Studio Indonesia",
    location: "Margonda, Kota Depok",
    description:
      "I'm now a full-stack developer working as a onsite. My stack includes React, Next.js, TypeScript, Tailwind, Html, CSS, Js, Drupal. I'm open to full-time opportunities.",
    icon: React.createElement(CgWorkAlt),
    date: "2021 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Developers",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["Drupal", "HTML", "CSS", "JS"],
    imageUrl: BRIImg,
  },
  {
    title: "Home Care",
    description:
      "I worked as a full on this project",
    tags: ["NextJs", "TypeScript", "Golang", "Tabler.io", "MySQL"],
    imageUrl: HomeCareImg,
  },
  {
    title: "Cronos Studio Indonesia",
    description:
      "I worked as a full this project for my bos in companies",
    tags: ["React", "Next.js", "Tailwind", "Figma"],
    imageUrl: CronosImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "Drupal",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Tabler.io",
  "PostgreSQL",
  "MySQL",
  "GoLang",
  "Figma"
] as const;
