import { Icons } from "@/components/icons";
import { Astro } from "@/components/ui/svgs/astro";
import { Docker } from "@/components/ui/svgs/docker";
import { Golang } from "@/components/ui/svgs/golang";
import { Kubernetes } from "@/components/ui/svgs/kubernetes";
import { NextjsIconDark } from "@/components/ui/svgs/nextjsIconDark";
import { Nodejs } from "@/components/ui/svgs/nodejs";
import { Postgresql } from "@/components/ui/svgs/postgresql";
import { Python } from "@/components/ui/svgs/python";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { Typescript } from "@/components/ui/svgs/typescript";
import { House, Library } from "lucide-react";
import type { ReactNode } from "react";
import type { Language } from "@/lib/language";

type WorkItem = {
  company: string;
  href: string;
  badges: string[];
  location: string;
  title: string;
  logoUrl: string;
  start: string;
  end?: string;
  description: string;
};

type EducationItem = {
  school: string;
  href: string;
  degree: string;
  logoUrl: string;
  start: string;
  end: string;
};

type ProjectItem = {
  title: string;
  href?: string;
  dates: string;
  active: boolean;
  description: string;
  technologies: string[];
  links: {
    type: string;
    href: string;
    icon: ReactNode;
  }[];
  image?: string;
  video?: string;
};

type HackathonItem = {
  title: string;
  dates: string;
  location: string;
  description: string;
  image: string;
  win?: string;
  mlh?: string;
  links: {
    title: string;
    href: string;
    icon: ReactNode;
  }[];
};

const shared = {
  initials: "FM",
  url: "https://github.com/fabio9d",
  avatarUrl: "/picofme.png",
  ogImage: "/og_image.png",
  contact: {
    email: "",
    tel: "",
    social: {
      GitHub: {
        url: "https://github.com/fabio9d",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        url: "https://www.linkedin.com/in/fabio-miranda-30629a69/",
        icon: Icons.linkedin,
        navbar: true,
      },
      X: {
        url: "#",
        icon: Icons.x,
        navbar: false,
      },
      Youtube: {
        url: "#",
        icon: Icons.youtube,
        navbar: false,
      },
      email: {
        url: "#",
        icon: Icons.email,
        navbar: false,
      },
    },
  },
  photos: [
    { src: "/photos/photo1.jpg", alt: "Photo 1" },
    { src: "/photos/photo2.jpg", alt: "Photo 2" },
    { src: "/photos/photo3.jpg", alt: "Photo 3" },
    { src: "/photos/photo4.jpg", alt: "Photo 4" },
    { src: "/photos/photo5.jpg", alt: "Photo 5" },
    { src: "/photos/photo6.jpg", alt: "Photo 6" },
    { src: "/photos/photo7.jpg", alt: "Photo 7" },
    { src: "/photos/photo8.jpg", alt: "Photo 8" },
    { src: "/photos/photo9.jpg", alt: "Photo 9" },
  ],
  skills: [
    { name: "Astro", icon: Astro },
    { name: "React", icon: ReactLight },
    { name: "Next.js", icon: NextjsIconDark },
    { name: "TypeScript", icon: Typescript },
    { name: "Node.js", icon: Nodejs },
    { name: "Python", icon: Python },
    { name: "Go", icon: Golang },
    { name: "PostgreSQL", icon: Postgresql },
    { name: "Docker", icon: Docker },
    { name: "Kubernetes", icon: Kubernetes },
  ],
  work: [] as WorkItem[],
  education: [] as EducationItem[],
  projects: [] as ProjectItem[],
  hackathons: [] as HackathonItem[],
} as const;

const localized = {
  pt: {
    name: "Fábio Miranda",
    location: "Brasil",
    locationLink: "https://www.google.com/maps/place/Brasil",
    description: "Desenvolvedor de Software",
    heroGreeting: "Olá, eu sou",
    summary:
      "Desenvolvedor de software com foco em aplicações web, interfaces modernas e soluções eficientes. Trabalho com React, TypeScript, Node.js, Python e stacks cloud para transformar necessidades de negócio em produtos digitais simples, rápidos e confiáveis.",
    sections: {
      about: { order: 1, enabled: true, heading: "Sobre" },
      work: {
        order: 2,
        enabled: false,
        heading: "Experiência profissional",
        presentLabel: "Atual",
      },
      education: { order: 3, enabled: false, heading: "Formação" },
      skills: { order: 4, enabled: false, heading: "Competências" },
      projects: {
        order: 5,
        enabled: false,
        label: "Projetos",
        heading: "Trabalhos recentes",
        text: "Uma seleção de projetos de software, interfaces e soluções digitais.",
      },
      hackathons: {
        order: 7,
        enabled: false,
        label: "Hackathons",
        heading: "Construindo em comunidade",
        text: "Participei de {count}+ hackathons e eventos de tecnologia.",
      },
      photos: {
        order: 6,
        enabled: false,
        label: "Fotos",
        heading: "Registros recentes",
      },
      contact: {
        order: 8,
        enabled: true,
        label: "Contato",
        heading: "Vamos conversar",
        text: "Fique à vontade para entrar em contato ou se conectar comigo pelo LinkedIn e GitHub.",
      },
    },
    navbar: [
      { href: "/", icon: House, label: "Início" },
      { href: "/blog", icon: Library, label: "Blog" },
    ],
    contactSocialNames: {
      GitHub: "GitHub",
      LinkedIn: "LinkedIn",
      X: "X",
      Youtube: "YouTube",
      email: "Enviar e-mail",
    },
  },
  en: {
    name: "Fábio Miranda",
    location: "Brazil",
    locationLink: "https://www.google.com/maps/place/Brazil",
    description: "Software Developer",
    heroGreeting: "Hi, I'm",
    summary:
      "Software developer focused on web applications, modern interfaces, and efficient solutions. I work with React, TypeScript, Node.js, Python, and cloud stacks to turn business needs into simple, fast, and reliable digital products.",
    sections: {
      about: { order: 1, enabled: true, heading: "About" },
      work: {
        order: 2,
        enabled: false,
        heading: "Work Experience",
        presentLabel: "Present",
      },
      education: { order: 3, enabled: false, heading: "Education" },
      skills: { order: 4, enabled: false, heading: "Skills" },
      projects: {
        order: 5,
        enabled: false,
        label: "Projects",
        heading: "Recent work",
        text: "A selection of software projects, interfaces, and digital solutions.",
      },
      hackathons: {
        order: 7,
        enabled: false,
        label: "Hackathons",
        heading: "Building with community",
        text: "I have joined {count}+ hackathons and technology events.",
      },
      photos: {
        order: 6,
        enabled: false,
        label: "Photos",
        heading: "Recent snapshots",
      },
      contact: {
        order: 8,
        enabled: true,
        label: "Contact",
        heading: "Get in touch",
        text: "Feel free to reach out or connect with me on LinkedIn and GitHub.",
      },
    },
    navbar: [
      { href: "/", icon: House, label: "Home" },
      { href: "/blog", icon: Library, label: "Blog" },
    ],
    contactSocialNames: {
      GitHub: "GitHub",
      LinkedIn: "LinkedIn",
      X: "X",
      Youtube: "YouTube",
      email: "Send email",
    },
  },
} as const;

function localizeSocial(language: Language) {
  const names = localized[language].contactSocialNames;

  return Object.fromEntries(
    Object.entries(shared.contact.social).map(([key, social]) => [
      key,
      {
        ...social,
        name: names[key as keyof typeof names],
      },
    ])
  );
}

export function getResumeData(language: Language = "pt") {
  const copy = localized[language];

  return {
    ...shared,
    ...copy,
    contact: {
      ...shared.contact,
      social: localizeSocial(language),
    },
  };
}

export const DATA = getResumeData("pt");
