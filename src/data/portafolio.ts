export interface ProjectItem {
  id: string;
  title: string;
  weekOrTag: string;
  category: "IA & Machine Learning" | "Algoritmos & Python" | "Robótica & Web";
  shortDescription: string;
  problem: string;
  objective: string;
  technologies: string[];
  solutionExplanation: string;
  results: string[];
  metrics?: { label: string; value: string }[];
  codeSnippet?: string;
  imagePlaceholder: string; // Reemplaza luego con "/images/nombre-captura.png"
  repoOrColabUrl: string;   // Reemplaza luego con tu enlace real de Colab o GitHub
  isMandatoryCourseActivity?: boolean;
}

export const personalInfo = {
  fullName: "Fátima Tatiana Méndez Mata",
  shortName: "Fátima Méndez",
  role: "Futura Ingeniera en Mecatrónica y Robótica · Desarrolladora Web & Entusiasta de IA",
  tagline:
    "Transformando curiosidad, lógica y propósito en soluciones tecnológicas con impacto real.",
  location: "Santa Tecla, La Libertad, El Salvador",
  email: "fatima09mata@gmail.com",
  avatarUrl: "/images/avatar-fatima.jpg", // Coloca tu foto en public/images/avatar-fatima.jpg
  githubUrl: "https://github.com/TU-USUARIO-GITHUB", // Reemplazar con tu enlace
  linkedinUrl: "https://linkedin.com/in/TU-USUARIO-LINKEDIN", // Reemplazar con tu enlace
  portfolioRepoUrl: "https://github.com/TU-USUARIO-GITHUB/portafolio-fatima-mendez",
};

export const aboutData = {
  whoAmI:
    "Soy Fátima Méndez, bachiller graduada del Colegio Villanueva y egresada del programa de alto rendimiento ¡Supérate!. Me apasiona comprender cómo funcionan los sistemas inteligentes, desde modelos de Machine Learning hasta robots autónomos y aplicaciones web modernas.",
  whatIStudy:
    "Culminando mi formación media e ingresando a la carrera de Ingeniería en Mecatrónica y Robótica en Key Institute gracias a una beca parcial del 90% por mérito académico.",
  interests: [
    "Inteligencia Artificial y Ciencia de Datos",
    "Robótica Autónoma y Sistemas Embebidos",
    "Desarrollo Web Full Stack",
    "Liderazgo Juvenil y Servicio Comunitario",
    "Emprendimiento Creativo y Diseño Artesanal",
  ],
  goals: {
    personal:
      "Mantener un equilibrio íntegro entre mi crecimiento profesional, mi fe, mi familia y el servicio a los demás, cultivando disciplina y aprendizaje continuo.",
    professional:
      "Desarrollar soluciones de ingeniería, automatización e inteligencia artificial que resuelvan problemas reales en mi comunidad y país.",
  },
  strengths: [
    "Pensamiento analítico y resolución de problemas",
    "Liderazgo cercano y trabajo en equipo",
    "Organización, responsabilidad y perseverancia",
    "Comunicación efectiva en español e inglés",
    "Creatividad e innovación aplicada",
  ],
};

export const experiencesData = [
  {
    role: "Coordinadora de Grupo · Proyecto SortlyScan",
    organization: "Proyecto Tecnológico de Inteligencia Artificial",
    period: "2025 – 2026",
    description:
      "Lideré la planificación y desarrollo de una aplicación web capaz de identificar y clasificar residuos mediante visión artificial para promover una gestión ambiental más eficiente.",
    achievements: [
      "Integración de TensorFlow.js para clasificación en tiempo real y Google Maps para geolocalización.",
      "Desarrollo del ecosistema web con HTML, JavaScript, PHP y base de datos relacional MySQL.",
      "Coordinación de tareas, tiempos de entrega y resolución técnica en equipo.",
    ],
  },
  {
    role: "Desarrolladora de Robótica · Proyecto Exo-Rover",
    organization: "Prototipo de Exploración Autónoma",
    period: "2026",
    description:
      "Diseño y programación de un vehículo autónomo basado en Arduino capaz de desplazarse, detectar obstáculos en tiempo real y simular maniobras de exploración espacial.",
    achievements: [
      "Integración de sensores ultrasónicos, servomotores y placa Adafruit Motor Shield.",
      "Implementación de lógica computacional para evasión autónoma de obstáculos.",
    ],
  },
  {
    role: "Coordinadora de Sector · Jóvenes de Ayagualo",
    organization: "Servicio Comunitario y Liderazgo Juvenil",
    period: "Actualidad",
    description:
      "Acompañamiento, planificación de actividades formativas y organización de equipos juveniles en la comunidad parroquial.",
    achievements: [
      "Fomento del trabajo colaborativo, escucha activa y formación en valores.",
      "Gestión logística de encuentros y actividades comunitarias.",
    ],
  },
  {
    role: "Fundadora y Creadora · CreArt",
    organization: "Emprendimiento Artesanal Personalizado",
    period: "En curso",
    description:
      "Diseño, elaboración y comercialización de accesorios hechos a mano, llaveros y piezas de crochet personalizados.",
    achievements: [
      "Gestión integral de producción, costos, promoción digital y atención al cliente.",
      "Aplicación práctica de planificación financiera y creatividad.",
    ],
  },
];

export const projectsData: ProjectItem[] = [
  {
    id: "regresion-lineal",
    title: "Predicción de Rendimiento Académico con Regresión Lineal",
    weekOrTag: "Actividad 1 · Semana 3",
    category: "IA & Machine Learning",
    shortDescription:
      "Modelo supervisado de regresión lineal simple con validación estricta de rango y visualización gráfica de tendencias.",
    problem:
      "Estimar el puntaje académico esperado a partir de las horas de estudio evitando extrapolaciones poco confiables fuera del dominio observado en los datos.",
    objective:
      "Construir un dataset propio de al menos 30 registros (Horas de estudio vs. Score), entrenar un modelo de regresión lineal e implementar validaciones de rango antes de predecir.",
    technologies: ["Python", "Pandas", "Scikit-learn", "Matplotlib", "Google Colab"],
    solutionExplanation:
      "Se estructuró una base de datos con 30+ registros reales/simulados de horas de estudio y calificaciones. Tras entrenar LinearRegression, el programa verifica si el valor ingresado por el usuario supera el máximo del dataset: si excede el rango, alerta que el dato está fuera del intervalo disponible; si es válido, calcula la predicción y grafica la recta de ajuste junto al punto evaluado.",
    results: [
      "Validación preventiva implementada contra valores fuera del rango máximo de la base de datos.",
      "Visualización clara de la dispersión de los 30+ registros frente a la línea de tendencia lineal.",
      "Interpretación directa de pendiente, intercepto y coeficiente de determinación R².",
    ],
    metrics: [
      { label: "Registros mínimos", value: "30+ filas" },
      { label: "Variables", value: "Horas Estudio / Score" },
      { label: "Validación", value: "Control de rango máx." },
    ],
    codeSnippet: `if horas_usuario > df["Horas_Estudio"].max():
    print("Aviso: El dato ingresado es superior al rango disponible en la base de datos.")
else:
    prediccion = modelo.predict([[horas_usuario]])[0]
    print(f"Score estimado: {prediccion:.2f}")`,
    imagePlaceholder: "/images/proyecto-regresion.png",
    repoOrColabUrl: "#agregar-enlace-colab-regresion",
    isMandatoryCourseActivity: true,
  },
  {
    id: "laberinto-python",
    title: "Simulador de Laberinto y Búsqueda de Rutas en Python",
    weekOrTag: "Actividad 2 · Semana 4",
    category: "Algoritmos & Python",
    shortDescription:
      "Videojuego y simulador interactivo en Pygame capaz de generar laberintos y resolver la ruta desde el inicio hasta la meta.",
    problem:
      "Representar visualmente un entorno con obstáculos dinámicos y calcular caminos válidos entre un punto de origen y una meta.",
    objective:
      "Desarrollar en equipo un laberinto interactivo utilizando Python, Pygame y estructuras lógicas/algorítmicas para la navegación y resolución de rutas.",
    technologies: ["Python", "Pygame", "Random", "Estructuras de Datos (Colas/Pilas)"],
    solutionExplanation:
      "Se construyó una cuadrícula parametrizable con generación aleatoria de caminos y niveles de dificultad. Mediante exploración sistemática de nodos adyacentes (árboles de decisión / búsqueda en anchura y profundidad), el sistema identifica rutas libres de muros desde el punto inicial hasta la meta y renderiza el recorrido en tiempo real con Pygame.",
    results: [
      "Generación procedural de laberintos con distintos niveles de dificultad.",
      "Detección de colisiones, movimiento fluido e interfaz visual interactiva en Pygame.",
      "Resolución verificada de trayectorias válidas entre el inicio y la meta.",
    ],
    metrics: [
      { label: "Motor gráfico", value: "Pygame" },
      { label: "Generación", value: "Procedural / Random" },
      { label: "Lógica", value: "Búsqueda de rutas" },
    ],
    imagePlaceholder: "/images/proyecto-laberinto.png",
    repoOrColabUrl: "#agregar-enlace-github-laberinto",
    isMandatoryCourseActivity: true,
  },
  {
    id: "ai-challenge-kmeans-knn",
    title: "AI Challenge: Segmentación y Predicción Estudiantil (K-Means & KNN)",
    weekOrTag: "Actividad 3 · AI Challenge",
    category: "IA & Machine Learning",
    shortDescription:
      "Sistema híbrido de Machine Learning sobre 500 estudiantes para descubrir perfiles de estudio y predecir aprobación.",
    problem:
      "Identificar patrones ocultos en los hábitos académicos de 500 estudiantes y predecir si aprobarán o reprobarán un examen evaluando el impacto del escalado de variables.",
    objective:
      "Aplicar K-Means (K=3 y K=4) para segmentación no supervisada y entrenar un clasificador KNN (75% train / 25% test) probando distintos valores de k y normalización.",
    technologies: ["Python", "Scikit-learn", "StandardScaler", "Pandas", "Matplotlib / Seaborn"],
    solutionExplanation:
      "Con un dataset de 500 registros (horas de estudio, asistencia, tareas entregadas y notas), primero se segmentaron los perfiles estudiantiles comparando K=3 y K=4 clústeres. Luego se entrenó KNN evaluando k ∈ {1, 3, 5, 7, 11, 15, 21} con y sin StandardScaler, demostrando cómo las escalas desbalanceadas (0–100 vs. horas) distorsionan las distancias euclidianas. Finalmente se evaluó el caso crítico: 4h de estudio, 55% asistencia y 50% tareas.",
    results: [
      "Comparativa clara de perfiles académicos entre 3 y 4 clústeres de K-Means.",
      "Mejora significativa en la exactitud de KNN al aplicar normalización frente a datos sin escalar.",
      "Diagnóstico del caso de prueba (4h estudio, 55% asistencia, 50% tareas) y análisis de limitaciones del modelo.",
    ],
    metrics: [
      { label: "Dataset", value: "500 estudiantes" },
      { label: "Split KNN", value: "75% Train / 25% Test" },
      { label: "Valores de k", value: "1, 3, 5, 7, 11, 15, 21" },
    ],
    imagePlaceholder: "/images/proyecto-ai-challenge.png",
    repoOrColabUrl: "#agregar-enlace-colab-ai-challenge",
    isMandatoryCourseActivity: true,
  },
  {
    id: "hotspots-comerciales",
    title: "Hotspots Comerciales en La Libertad con K-Means y KNN Geoespacial",
    weekOrTag: "Actividad 4 · Análisis Geoespacial",
    category: "IA & Machine Learning",
    shortDescription:
      "Detección de polos gastronómicos y evaluación de ubicaciones comerciales usando datos abiertos de OpenStreetMap.",
    problem:
      "Evaluar la densidad competitiva y detectar zonas estratégicas para restaurantes en el departamento de La Libertad sin depender de software GIS propietario.",
    objective:
      "Extraer establecimientos reales vía Overpass API, agrupar zonas comerciales con K-Means, clasificar nuevas ubicaciones con KNN (distancia Haversine) y visualizar todo en un mapa interactivo.",
    technologies: ["Python", "Overpass API (OSM)", "K-Means", "KNN (Haversine)", "Folium", "Pandas"],
    solutionExplanation:
      "Se consultaron restaurantes de La Libertad (ISO3166-2: SV-LI) usando Overpass QL con 'out center;' para capturar tanto nodos como polígonos. Tras limpiar y deduplicar coordenadas, K-Means identificó los clústeres y centroides comerciales (justificados con Inercia y Silhouette Score), mientras que KNN con métrica geodésica Haversine clasificó ubicaciones candidatas según competidores en un radio de 2 km, desplegando capas y conectores en Folium.",
    results: [
      "Dataset limpio y trazable de restaurantes en La Libertad extraído desde OpenStreetMap.",
      "Identificación de polos de concentración gastronómica y radios de influencia comercial.",
      "Mapa web interactivo (Folium) con capas activables, centroides y vecinos más cercanos.",
    ],
    metrics: [
      { label: "Región", value: "La Libertad (SV-LI)" },
      { label: "Métrica KNN", value: "Haversine (2 km)" },
      { label: "Visualización", value: "Mapa Folium HTML" },
    ],
    imagePlaceholder: "/images/proyecto-hotspots.png",
    repoOrColabUrl: "#agregar-enlace-colab-hotspots",
    isMandatoryCourseActivity: true,
  },
  {
    id: "arquitectura-web-backend",
    title: "Arquitectura Full Stack del Portafolio & API REST",
    weekOrTag: "Desarrollo Web · 10 Semanas",
    category: "Robótica & Web",
    shortDescription:
      "Diseño modular en Next.js App Router, TypeScript, Tailwind CSS y endpoint RESTful POST /api/contact con validaciones.",
    problem:
      "Integrar en una sola plataforma rápida, accesible y segura tanto la identidad profesional como la evidencia técnica de 10 semanas de Machine Learning y desarrollo.",
    objective:
      "Construir una interfaz responsive con componentes reutilizables en React/TypeScript, implementar un backend en Next.js con validaciones estrictas y desplegar en Vercel.",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "REST API", "Git & Vercel"],
    solutionExplanation:
      "El frontend está dividido en componentes desacoplados alimentados por un modelo tipado en TypeScript. En el backend, la ruta src/app/api/contact/route.ts recibe peticiones POST, sanitiza y valida nombre, formato de correo electrónico y longitud mínima del mensaje, gestiona variables de entorno de forma segura (.env.local / Vercel) y retorna respuestas JSON estructuradas con códigos HTTP adecuados.",
    results: [
      "Arquitectura limpia en Next.js App Router con tipado estricto en TypeScript.",
      "Endpoint POST /api/contact funcional con validación tanto en cliente como en servidor.",
      "Despliegue continuo en Vercel vinculado a repositorio independiente en GitHub.",
    ],
    metrics: [
      { label: "Endpoint", value: "POST /api/contact" },
      { label: "Stack", value: "Next.js + TS + Tailwind" },
      { label: "Deploy", value: "GitHub → Vercel" },
    ],
    codeSnippet: `// src/app/api/contact/route.ts
export async function POST(request: Request) {
  const { name, email, message } = await request.json();
  if (!name || name.trim().length < 2) {
    return Response.json({ ok: false, error: "Nombre inválido" }, { status: 400 });
  }
  // Validación de email, mensaje y respuesta JSON controlada
  return Response.json({ ok: true, message: "Mensaje recibido correctamente" }, { status: 200 });
}`,
    imagePlaceholder: "/images/proyecto-arquitectura-web.png",
    repoOrColabUrl: "https://github.com/TU-USUARIO-GITHUB/portafolio-fatima-mendez",
    isMandatoryCourseActivity: true,
  },
];

export const skillsData = [
  {
    category: "Lenguajes de Programación",
    items: ["Python", "TypeScript", "JavaScript (ES6+)", "C++ (Arduino)", "PHP", "SQL"],
  },
  {
    category: "Inteligencia Artificial & Machine Learning",
    items: [
      "Regresión Lineal",
      "K-Means Clustering",
      "K-Nearest Neighbors (KNN)",
      "Scikit-learn & Pandas",
      "TensorFlow.js (fundamentos)",
      "Análisis Geoespacial (Folium / OSM)",
    ],
  },
  {
    category: "Desarrollo Web",
    items: ["React", "Next.js (App Router)", "Tailwind CSS", "HTML5 & CSS3", "API REST (JSON)", "Diseño Responsive"],
  },
  {
    category: "Bases de Datos",
    items: ["MySQL", "Modelado Relacional Básico", "Estructuración de Datasets (CSV/JSON)"],
  },
  {
    category: "Herramientas Tecnológicas & Robótica",
    items: [
      "Git y GitHub",
      "Vercel",
      "Google Colab",
      "Arduino & Sensores Ultrasónicos",
      "Microsoft Excel Expert",
      "Gestión de Proyectos",
    ],
  },
  {
    category: "Habilidades Personales",
    items: [
      "Liderazgo y Coordinación",
      "Pensamiento Analítico y Crítico",
      "Trabajo en Equipo",
      "Comunicación Efectiva y Oratoria",
      "Gestión del Tiempo",
      "Empatía y Responsabilidad",
    ],
  },
];

export const educationData = [
  {
    institution: "Key Institute",
    title: "Ingeniería en Mecatrónica y Robótica (Beca Parcial del 90%)",
    period: "Próximo ingreso · Formación Universitaria",
    details:
      "Admitida con beca por excelencia académica y liderazgo para especializarme en automatización, robótica e ingeniería aplicada.",
  },
  {
    institution: "Colegio Villanueva",
    title: "Bachillerato General",
    period: "2025 – 2026",
    details:
      "Formación académica integral con participación destacada en proyectos de ciencia, tecnología e innovación.",
  },
  {
    institution: "Programa ¡Supérate!",
    title: "Diplomado de Alto Rendimiento en Inglés, Informática y Valores",
    period: "Programa de 3 años",
    details:
      "Formación intensiva complementaria respaldada por certificaciones internacionales: TOEIC Listening & Reading, TOEIC Speaking & Writing y Microsoft Excel Expert.",
  },
  {
    institution: "Platzi & Junior Achievement El Salvador",
    title: "Certificaciones Complementarias",
    period: "2024 – 2026",
    details:
      "Fundamentos de Python, Habilidades Blandas (oratoria, gestión del tiempo, inteligencia emocional) y beca 'Domino mis cuentas' en educación financiera.",
  },
];