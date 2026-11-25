import { ExperienceItem } from "@/types";

export const ABOUT_INFO = {
  whoAmI:
    "Soy Fátima Méndez, bachiller del Colegio Villanueva y egresada del programa de alto rendimiento ¡Supérate!. Me apasiona combinar lógica computacional, robótica, análisis de datos y desarrollo web para construir soluciones útiles.",
  whatIStudy:
    "Próxima a cursar Ingeniería en Mecatrónica y Robótica en Key Institute con una beca parcial del 90%, fortaleciendo además el inglés técnico y la programación.",
  interests: [
    "Inteligencia Artificial & Machine Learning",
    "Robótica Autónoma & Arduino",
    "Desarrollo Web con Next.js",
    "Liderazgo Juvenil & Servicio",
    "Emprendimiento Artesanal (CreArt)",
  ],
  personalGoal:
    "Mantener un equilibrio sano entre mi fe, familia, bienestar integral, disciplina financiera y servicio a mi comunidad.",
  professionalGoal:
    "Aplicar ingeniería y tecnología con ética y creatividad para resolver problemas reales e inspirar a más jóvenes en áreas STEM.",
  strengths: [
    "Liderazgo cercano y organización de equipos",
    "Pensamiento analítico y resolución de problemas",
    "Responsabilidad, perseverancia y empatía",
    "Comunicación efectiva y trabajo bajo presión",
  ],
};

export const EXPERIENCE_ITEMS: ExperienceItem[] = [
  {
    role: "Coordinadora de Grupo · Proyecto SortlyScan",
    organization: "Proyecto Tecnológico con IA",
    period: "2025 – 2026",
    description:
      "Lideré el desarrollo de una aplicación web con inteligencia artificial para identificar y clasificar residuos.",
    achievements: [
      "Uso de TensorFlow.js, Google Maps, HTML, JavaScript, PHP y MySQL.",
      "Coordinación del equipo, gestión de tareas y resolución de retos técnicos.",
    ],
  },
  {
    role: "Desarrolladora de Robótica · Proyecto Exo-Rover",
    organization: "Vehículo Autónomo de Exploración",
    period: "2026",
    description:
      "Construcción de un vehículo autónomo en Arduino capaz de desplazarse y detectar obstáculos simulando exploración espacial.",
    achievements: [
      "Integración de sensores ultrasónicos, servomotores y Adafruit Motor Shield.",
      "Programación de lógica de detección y evasión de obstáculos.",
    ],
  },
  {
    role: "Coordinadora de Sector · Jóvenes de Ayagualo",
    organization: "Servicio Comunitario y Liturgia",
    period: "Actualidad",
    description:
      "Acompañamiento juvenil, planificación de actividades formativas y servicio comunitario.",
    achievements: [
      "Fortalecimiento de liderazgo, escucha activa, delegación y trabajo en equipo.",
    ],
  },
  {
    role: "Fundadora · CreArt",
    organization: "Emprendimiento Artesanal",
    period: "En curso",
    description:
      "Elaboración y comercialización de productos artesanales personalizados (llaveros, crochet, accesorios).",
    achievements: [
      "Gestión de producción, promoción digital, atención al cliente y planificación de recursos.",
    ],
  },
];