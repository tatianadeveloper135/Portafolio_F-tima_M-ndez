import { ExperienceItem, EducationItem, ProjectCategory, ProjectItem, SkillGroup } from "@/types";

export type Language = "es" | "en";

export const UI_TEXT = {
  es: {
    nav: {
      inicio: "Inicio",
      sobreMi: "Sobre mí",
      experiencia: "Experiencia",
      proyectos: "Proyectos",
      habilidades: "Habilidades",
      formacion: "Formación",
      contacto: "Contacto",
    },
    hero: {
      badge: "Laboratorio Creativo · 10 Semanas",
      role: "Ingeniería en Mecatrónica y Robótica · IA, Algoritmos y Desarrollo Web",
      tagline:
        "Transformando curiosidad, lógica y propósito en soluciones tecnológicas con impacto real.",
      ctaProjects: "Ver proyectos",
      ctaContact: "Contacto",
      github: "GitHub",
      linkedin: "LinkedIn",
    },
    about: {
      kicker: "01 · Identidad",
      title: "Sobre mí",
      whoTitle: "¿Quién soy y qué estudio?",
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
      goalsTitle: "Objetivos y Fortalezas",
      personalLabel: "Objetivo Personal",
      personalGoal:
        "Mantener un equilibrio sano entre mi fe, familia, bienestar integral, disciplina financiera y servicio a mi comunidad.",
      professionalLabel: "Objetivo Profesional",
      professionalGoal:
        "Aplicar ingeniería y tecnología con ética y creatividad para resolver problemas reales e inspirar a más jóvenes en áreas STEM.",
      strengths: [
        "Liderazgo cercano y organización de equipos",
        "Pensamiento analítico y resolución de problemas",
        "Responsabilidad, perseverancia y empatía",
        "Comunicación efectiva y trabajo bajo presión",
      ],
    },
    experience: {
      kicker: "02 · Trayectoria",
      title: "Experiencia, Proyectos y Liderazgo",
      items: [
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
      ] as ExperienceItem[],
    },
    projects: {
      kicker: "03 · 10 Semanas",
      title: "Proyectos y Actividades Obligatorias",
      subtitle:
        "Abre cada proyecto para revisar problema, objetivo, solución, resultados, evidencia visual y enlace a Colab o GitHub.",
      allFilter: "Todos",
      categories: [
        "IA & Machine Learning",
        "Algoritmos & Python",
        "Robótica & Web",
      ] as ProjectCategory[],
      viewEvidence: "Ver evidencia",
      externalLink: "Colab / GitHub",
      modalProblem: "Problema",
      modalObjective: "Objetivo",
      modalSolution: "Solución implementada",
      modalResults: "Resultados obtenidos",
      modalEvidenceNotePrefix: "Coloca tu captura/gráfica en",
      modalOpenLink: "Abrir enlace del proyecto",
      items: [
        {
          id: "regresion-lineal",
          title: "Regresión Lineal — Predicción con Validación de Rango",
          weekOrTag: "Actividad 1 · Semana 3",
          category: "IA & Machine Learning",
          shortDescription:
            "Modelo de regresión lineal sobre 30+ registros de Horas de Estudio y Score, validando límites antes de graficar y predecir.",
          problem:
            "Predecir puntajes según horas de estudio evitando realizar estimaciones fuera del rango respaldado por la base de datos.",
          objective:
            "Crear una base de datos de mínimo 30 registros (Horas de estudio y Score), validar si el dato del usuario supera el máximo del dataset y mostrar predicción + gráfico.",
          technologies: ["Python", "Pandas", "Scikit-learn", "Matplotlib", "Google Colab"],
          solutionExplanation:
            "Se construyó un conjunto con al menos 30 registros de horas de estudio y score. Al ingresar un valor, se compara contra el máximo de la base: si es mayor, se notifica que excede el rango disponible; si está dentro del rango, se calcula la predicción y se grafica la recta de regresión.",
          results: [
            "Dataset de 30+ registros configurado con variables de horas de estudio y score.",
            "Mensaje claro cuando el valor ingresado supera el máximo de la base de datos.",
            "Visualización gráfica de datos y recta ajustada cuando el dato es válido.",
          ],
          metrics: [
            { label: "Registros", value: "30+ filas" },
            { label: "Variables", value: "Horas / Score" },
            { label: "Control", value: "Rango máx." },
          ],
          imagePath: "/images/evidencia-regresion.png",
          repoOrColabUrl: "#pegar-enlace-colab-regresion",
        },
        {
          id: "laberinto-python",
          title: "Laberinto en Python — Generación y Búsqueda de Ruta",
          weekOrTag: "Actividad 2 · Semana 4",
          category: "Algoritmos & Python",
          shortDescription:
            "Laberinto interactivo desarrollado en equipo con Python y Pygame para encontrar rutas desde el inicio hasta la meta.",
          problem:
            "Diseñar entornos navegables de distinta dificultad y resolver caminos válidos desde un punto inicial hacia una meta.",
          objective:
            "Aplicar programación, lógica algorítmica y librerías como Pygame y random en equipo para construir laberintos creativos con niveles de dificultad.",
          technologies: ["Python", "Pygame", "Random", "Lógica / Árboles de Decisión"],
          solutionExplanation:
            "Se implementó una estructura de laberinto con distintos niveles de dificultad, generación aleatoria de elementos y lógica de exploración de rutas desde el inicio hasta la meta con representación visual en Pygame.",
          results: [
            "Laberintos jugables y visualmente claros con niveles de dificultad diferenciados.",
            "Ruta verificada desde el inicio hasta la meta mediante lógica algorítmica.",
          ],
          metrics: [
            { label: "Visualización", value: "Pygame" },
            { label: "Aleatoriedad", value: "random" },
            { label: "Modalidad", value: "En equipo" },
          ],
          imagePath: "/images/evidencia-laberinto.png",
          repoOrColabUrl: "#pegar-enlace-laberinto",
        },
        {
          id: "ai-challenge",
          title: "AI Challenge — K-Means y KNN (500 Estudiantes)",
          weekOrTag: "Actividad 3 · AI Challenge",
          category: "IA & Machine Learning",
          shortDescription:
            "Segmentación con K-Means (3 y 4 grupos) y predicción de aprobación con KNN (75/25) evaluando k y normalización.",
          problem:
            "Agrupar estudiantes por hábitos académicos y predecir aprobación/reprobación analizando el impacto de escalar variables.",
          objective:
            "Generar 500 estudiantes (horas de estudio, asistencia, tareas, notas), comparar K-Means K=3 vs K=4, probar KNN con k en [1,3,5,7,11,15,21] y evaluar el caso 4h / 55% / 50%.",
          technologies: ["Python", "Google Colab", "K-Means", "KNN", "Scikit-learn"],
          solutionExplanation:
            "Sobre 500 registros se aplicó K-Means con 3 y 4 clústeres para interpretar perfiles académicos. Luego se dividió el dataset en 75% entrenamiento y 25% prueba para KNN variando k (1, 3, 5, 7, 11, 15, 21), comparando exactitud con y sin normalización y diagnosticando el caso de 4h de estudio, 55% asistencia y 50% tareas.",
          results: [
            "Comparativa de 3 vs. 4 grupos en K-Means con interpretaciones y gráficas.",
            "Análisis de exactitud de KNN entre valores de k y efecto de no normalizar los datos.",
            "Predicción y limitaciones explicadas para el perfil 4h / 55% / 50%.",
          ],
          metrics: [
            { label: "Estudiantes", value: "500" },
            { label: "Split", value: "75% / 25%" },
            { label: "k probados", value: "7 valores" },
          ],
          imagePath: "/images/evidencia-ai-challenge.png",
          repoOrColabUrl: "#pegar-enlace-colab-ai-challenge",
        },
        {
          id: "hotspots-comerciales",
          title: "Hotspots Comerciales — Análisis con K-Means y KNN",
          weekOrTag: "Actividad 4 · Hotspots Comerciales",
          category: "IA & Machine Learning",
          shortDescription:
            "Identificación de zonas y polos comerciales aplicando K-Means y KNN sobre datos geoespaciales.",
          problem:
            "Detectar concentraciones comerciales y evaluar cercanía/competencia en ubicaciones de interés.",
          objective:
            "Implementar y documentar la solución de Hotspots Comerciales con sus herramientas, resultados, código fuente y evidencias.",
          technologies: ["Python", "K-Means", "KNN", "Geoespacial", "Google Colab"],
          solutionExplanation:
            "Se procesaron datos espaciales de establecimientos para detectar agrupaciones (hotspots) mediante K-Means y evaluar proximidad de puntos/ubicaciones con KNN, generando visualizaciones y conclusiones prácticas.",
          results: [
            "Identificación clara de clústeres/hotspots comerciales.",
            "Evaluación de vecindad con KNN y visualizaciones de soporte.",
          ],
          metrics: [
            { label: "Modelos", value: "K-Means + KNN" },
            { label: "Enfoque", value: "Hotspots" },
            { label: "Evidencia", value: "Código + Mapas" },
          ],
          imagePath: "/images/evidencia-hotspots.png",
          repoOrColabUrl: "#pegar-enlace-colab-hotspots",
        },
        {
          id: "desarrollo-app-backend",
          title: "Aplicación Web & Backend — Next.js + API REST POST /api/contact",
          weekOrTag: "Arquitectura Web · 10 Semanas",
          category: "Robótica & Web",
          shortDescription:
            "Frontend en Next.js 14, TypeScript y Tailwind CSS conectado a la ruta POST /api/contact con validaciones y despliegue en Vercel.",
          problem:
            "Presentar de forma estructurada y segura las evidencias del período e incluir un formulario validado respaldado por API REST.",
          objective:
            "Organizar componentes en React/TypeScript, implementar POST /api/contact con validaciones y respuestas JSON, proteger variables de entorno y publicar en Vercel.",
          technologies: ["Next.js 14", "React", "TypeScript", "Tailwind CSS", "REST API", "Vercel"],
          solutionExplanation:
            "Se estructuró la app con rutas en src/app, componentes en src/components y datos en src/data. El endpoint src/app/api/contact/route.ts valida nombre, correo y mensaje, devuelve respuestas JSON con estados HTTP adecuados y usa variables de entorno sin exponer secretos.",
          results: [
            "Endpoint POST /api/contact funcional con validaciones y feedback de éxito/error.",
            "Diseño responsive y despliegue continuo desde GitHub hacia Vercel.",
          ],
          metrics: [
            { label: "Endpoint", value: "POST /api/contact" },
            { label: "Framework", value: "Next.js 14" },
            { label: "Deploy", value: "Vercel" },
          ],
          imagePath: "/images/evidencia-web-api.png",
          repoOrColabUrl: "https://github.com/tatianadeveloper135/Portafolio_F-tima_M-ndez",
        },
      ] as ProjectItem[],
    },
    skills: {
      kicker: "04 · Capacidades",
      title: "Habilidades",
      groups: [
        {
          category: "Lenguajes de programación",
          items: ["Python", "TypeScript", "JavaScript", "C++ (Arduino)", "PHP", "SQL"],
        },
        {
          category: "Desarrollo web",
          items: ["Next.js 14", "React", "Tailwind CSS", "HTML5", "CSS3", "API REST"],
        },
        {
          category: "Bases de datos",
          items: ["MySQL", "Datasets CSV / JSON"],
        },
        {
          category: "Herramientas tecnológicas",
          items: ["Git", "GitHub", "Vercel", "Google Colab", "Arduino", "Excel Expert"],
        },
        {
          category: "Inteligencia artificial y Machine Learning",
          items: ["Regresión Lineal", "K-Means", "KNN", "Scikit-learn", "Pandas", "TensorFlow.js"],
        },
        {
          category: "Habilidades personales",
          items: [
            "Liderazgo",
            "Responsabilidad",
            "Proactividad",
            "Empatía",
            "Pensamiento crítico",
            "Trabajo en equipo",
            "Comunicación efectiva",
          ],
        },
      ] as SkillGroup[],
    },
    // Dentro de UI_TEXT.es:

    education: {
      kicker: "05 · Trayectoria Académica",
      title: "Formación y Certificaciones",
      languages: "Español (Nativo) · Inglés (Intermedio – Avanzado / TOEIC)",
      // Dentro de UI_TEXT.es.education.items:
      items: [
        {
          institution: "U.S. Space & Rocket Center · Huntsville, AL",
          title: "Space Camp — Campamento Avanzado (~1 semana)",
          period: "Experiencia Internacional",
          details:
            "Campamento avanzado de aproximadamente una semana en el Rocket Center en Huntsville, Alabama, desarrollando trabajo en equipo, liderazgo, resolución de retos y habilidades STEM. Más información disponible en las redes de ¡Supérate! y del campamento.",
          referenceUrl: "#pegar-enlace-space-camp",
          referenceLabel: "Ver referencia / redes",
        },
        {
          institution: "Key Institute",
          title: "Ingeniería en Mecatrónica y Robótica (Beca parcial del 90%)",
          period: "Admisión / Formación Universitaria",
          details:
            "Ingreso con beca del 90% para enfocarme en robótica, automatización, ingeniería y tecnología.",
        },
        {
          institution: "Colegio Villanueva",
          title: "Bachiller General",
          period: "2025 – 2026",
          details:
            "Formación académica integral y participación en proyectos científicos y tecnológicos.",
        },
        {
          institution: "Programa ¡Supérate!",
          title: "Diplomado de 3 años en Inglés, Informática y Valores",
          period: "2023 – 2026",
          details:
            "Certificaciones internacionales: TOEIC Speaking & Writing, TOEIC Listening & Reading y Microsoft Excel Expert.",
        },
        {
          institution: "Platzi & Junior Achievement El Salvador",
          title: "Formación Complementaria",
          period: "Complementaria",
          details:
            "Fundamentos de Python, cursos de habilidades blandas en Platzi y beca 'Domino mis cuentas' de Junior Achievement.",
        },
      ] as EducationItem[],
    },
    story: {
      kicker: "06 · Mi Historia en Medios",
      title: "Conoce Más de Mi Historia",
      subtitle:
        "Reportajes, entrevistas y videos donde distintos medios han compartido mi proceso, proyectos y trayectoria.",
      watchLabel: "Ver reportaje / video",
      items: [
        {
          id: "reportaje-1",
          outlet: "Medio / Canal 1",
          format: "Video",
          title: "Título del reportaje o entrevista en video",
          summary:
            "Breve descripción de qué se aborda en este video o cobertura.",
          url: "#pegar-enlace-video-1",
        },
        {
          id: "reportaje-2",
          outlet: "Medio / Periódico 2",
          format: "Reportaje",
          title: "Título de la nota o reportaje escrito",
          summary:
            "Breve resumen del reportaje sobre tus proyectos, becas o trayectoria.",
          url: "#pegar-enlace-reportaje-2",
        },
      ] as MediaStoryItem[],
    },
    contact: {
      kicker: "06 · Mensaje Directo",
      title: "Contacto",
      channelsTitle: "Canales",
      nameLabel: "Nombre",
      emailLabel: "Correo electrónico",
      messageLabel: "Mensaje",
      submitIdle: "Enviar mensaje",
      submitLoading: "Enviando...",
      networkError: "Error de conexión al enviar el formulario.",
    },
    footer: {
      line1: "Portafolio Digital 2026",
      line2: "Santa Tecla, La Libertad, El Salvador · Next.js 14, TypeScript & Tailwind CSS",
    },
  },
  en: {
    nav: {
      inicio: "Home",
      sobreMi: "About",
      experiencia: "Experience",
      proyectos: "Projects",
      habilidades: "Skills",
      formacion: "Education",
      contacto: "Contact",
    },
    hero: {
      badge: "Creative Lab · 10 Weeks",
      role: "Mechatronics & Robotics Engineering · AI, Algorithms & Web Development",
      tagline:
        "Turning curiosity, logic, and purpose into technology solutions with real impact.",
      ctaProjects: "View projects",
      ctaContact: "Contact",
      github: "GitHub",
      linkedin: "LinkedIn",
      uploadPhotoPrefix: "Upload your photo to",
    },
    about: {
      kicker: "01 · Identity",
      title: "About Me",
      whoTitle: "Who am I and what do I study?",
      whoAmI:
        "I am Fátima Méndez, a high school graduate from Colegio Villanueva and alumna of the ¡Supérate! high-performance program. I love combining computational logic, robotics, data analysis, and web development to build useful solutions.",
      whatIStudy:
        "Incoming Mechatronics and Robotics Engineering student at Key Institute with a 90% partial scholarship, while strengthening technical English and programming.",
      interests: [
        "Artificial Intelligence & Machine Learning",
        "Autonomous Robotics & Arduino",
        "Web Development with Next.js",
        "Youth Leadership & Service",
        "Craft Entrepreneurship (CreArt)",
      ],
      goalsTitle: "Goals and Strengths",
      personalLabel: "Personal Goal",
      personalGoal:
        "Maintain a healthy balance among my faith, family, overall well-being, financial discipline, and community service.",
      professionalLabel: "Professional Goal",
      professionalGoal:
        "Apply engineering and technology with ethics and creativity to solve real problems and inspire more young people in STEM.",
      strengths: [
        "Approachable leadership and team organization",
        "Analytical thinking and problem solving",
        "Responsibility, perseverance, and empathy",
        "Effective communication and teamwork under pressure",
      ],
    },
    experience: {
      kicker: "02 · Experience",
      title: "Experience, Projects & Leadership",
      items: [
        {
          role: "Team Coordinator · SortlyScan Project",
          organization: "AI Technology Project",
          period: "2025 – 2026",
          description:
            "Led the development of a web application using artificial intelligence to identify and classify waste.",
          achievements: [
            "Built with TensorFlow.js, Google Maps, HTML, JavaScript, PHP, and MySQL.",
            "Team coordination, task management, and technical problem solving.",
          ],
        },
        {
          role: "Robotics Developer · Exo-Rover Project",
          organization: "Autonomous Exploration Vehicle",
          period: "2026",
          description:
            "Built an autonomous Arduino vehicle capable of moving and detecting obstacles to simulate space exploration.",
          achievements: [
            "Integrated ultrasonic sensors, servo motors, and Adafruit Motor Shield.",
            "Programmed obstacle detection and avoidance logic.",
          ],
        },
        {
          role: "Sector Coordinator · Jóvenes de Ayagualo",
          organization: "Community Service & Liturgy",
          period: "Present",
          description:
            "Youth mentoring, training activity planning, and community service.",
          achievements: [
            "Strengthened leadership, active listening, delegation, and teamwork.",
          ],
        },
        {
          role: "Founder · CreArt",
          organization: "Craft Entrepreneurship",
          period: "Ongoing",
          description:
            "Creation and sales of custom handmade products (keychains, crochet, accessories).",
          achievements: [
            "Production management, digital promotion, customer care, and resource planning.",
          ],
        },
      ] as ExperienceItem[],
    },
    projects: {
      kicker: "03 · 10 Weeks",
      title: "Projects & Required Activities",
      subtitle:
        "Open any project to review the problem, objective, solution, results, visual evidence, and Colab or GitHub link.",
      allFilter: "All",
      categories: [
        "IA & Machine Learning",
        "Algoritmos & Python",
        "Robótica & Web",
      ] as ProjectCategory[],
      viewEvidence: "View evidence",
      externalLink: "Colab / GitHub",
      modalProblem: "Problem",
      modalObjective: "Objective",
      modalSolution: "Implemented solution",
      modalResults: "Results achieved",
      modalEvidenceNotePrefix: "Place your screenshot/chart in",
      modalOpenLink: "Open project link",
      items: [
        {
          id: "regresion-lineal",
          title: "Linear Regression — Range-Validated Prediction",
          weekOrTag: "Activity 1 · Week 3",
          category: "IA & Machine Learning",
          shortDescription:
            "Linear regression model over 30+ Study Hours and Score records, validating bounds before plotting and predicting.",
          problem:
            "Predict scores from study hours while avoiding estimates outside the range supported by the dataset.",
          objective:
            "Build a dataset with at least 30 records (Study hours and Score), check if user input exceeds the dataset maximum, and show prediction + chart.",
          technologies: ["Python", "Pandas", "Scikit-learn", "Matplotlib", "Google Colab"],
          solutionExplanation:
            "A dataset of 30+ study hours and score records was created. When a value is entered, it is compared against the dataset maximum: if higher, it notifies that it exceeds the available range; if within range, it computes the prediction and plots the regression line.",
          results: [
            "Dataset of 30+ records configured with study hours and score variables.",
            "Clear message when user input exceeds the maximum value in the dataset.",
            "Visual chart of data points and fitted line for valid inputs.",
          ],
          metrics: [
            { label: "Records", value: "30+ rows" },
            { label: "Variables", value: "Hours / Score" },
            { label: "Check", value: "Max range" },
          ],
          imagePath: "/images/evidencia-regresion.png",
          repoOrColabUrl: "#pegar-enlace-colab-regresion",
        },
        {
          id: "laberinto-python",
          title: "Python Maze — Generation & Pathfinding",
          weekOrTag: "Activity 2 · Week 4",
          category: "Algoritmos & Python",
          shortDescription:
            "Interactive maze built as a team with Python and Pygame to find paths from start to goal.",
          problem:
            "Design navigable environments with varying difficulty and solve valid paths from start to goal.",
          objective:
            "Apply programming, algorithmic logic, and libraries like Pygame and random as a team to build creative mazes with difficulty levels.",
          technologies: ["Python", "Pygame", "Random", "Logic / Decision Trees"],
          solutionExplanation:
            "Implemented a maze structure with difficulty levels, randomized elements, and path exploration logic from start to goal with visual rendering in Pygame.",
          results: [
            "Playable, clear mazes with distinct difficulty levels.",
            "Verified path from start to goal using algorithmic logic.",
          ],
          metrics: [
            { label: "Visuals", value: "Pygame" },
            { label: "Randomness", value: "random" },
            { label: "Format", value: "Teamwork" },
          ],
          imagePath: "/images/evidencia-laberinto.png",
          repoOrColabUrl: "#pegar-enlace-laberinto",
        },
        {
          id: "ai-challenge",
          title: "AI Challenge — K-Means & KNN (500 Students)",
          weekOrTag: "Activity 3 · AI Challenge",
          category: "IA & Machine Learning",
          shortDescription:
            "Clustering with K-Means (3 and 4 groups) and pass/fail prediction with KNN (75/25) evaluating k and scaling.",
          problem:
            "Group students by study habits and predict pass/fail outcomes while analyzing the impact of feature scaling.",
          objective:
            "Generate 500 students (study hours, attendance, assignments, grades), compare K-Means K=3 vs K=4, test KNN with k in [1,3,5,7,11,15,21], and evaluate 4h / 55% / 50%.",
          technologies: ["Python", "Google Colab", "K-Means", "KNN", "Scikit-learn"],
          solutionExplanation:
            "Applied K-Means with 3 and 4 clusters on 500 records to interpret academic profiles. Split the dataset 75% train / 25% test for KNN across k values (1, 3, 5, 7, 11, 15, 21), comparing accuracy with and without scaling and diagnosing the 4h study, 55% attendance, and 50% assignments case.",
          results: [
            "Comparison of 3 vs. 4 K-Means clusters with interpretations and charts.",
            "KNN accuracy analysis across k values and effect of unscaled features.",
            "Prediction and limitations explained for the 4h / 55% / 50% profile.",
          ],
          metrics: [
            { label: "Students", value: "500" },
            { label: "Split", value: "75% / 25%" },
            { label: "k tested", value: "7 values" },
          ],
          imagePath: "/images/evidencia-ai-challenge.png",
          repoOrColabUrl: "#pegar-enlace-colab-ai-challenge",
        },
        {
          id: "hotspots-comerciales",
          title: "Commercial Hotspots — K-Means & KNN Analysis",
          weekOrTag: "Activity 4 · Commercial Hotspots",
          category: "IA & Machine Learning",
          shortDescription:
            "Identifying commercial hubs and zones using K-Means and KNN on geospatial data.",
          problem:
            "Detect commercial concentrations and evaluate proximity/competition across target locations.",
          objective:
            "Implement and document the Commercial Hotspots solution with tools, results, source code, and evidence.",
          technologies: ["Python", "K-Means", "KNN", "Geospatial", "Google Colab"],
          solutionExplanation:
            "Processed spatial business data to detect clusters (hotspots) with K-Means and evaluate point/location proximity with KNN, generating visualizations and practical insights.",
          results: [
            "Clear identification of commercial clusters/hotspots.",
            "Proximity evaluation with KNN and supporting charts.",
          ],
          metrics: [
            { label: "Models", value: "K-Means + KNN" },
            { label: "Focus", value: "Hotspots" },
            { label: "Evidence", value: "Code + Maps" },
          ],
          imagePath: "/images/evidencia-hotspots.png",
          repoOrColabUrl: "#pegar-enlace-colab-hotspots",
        },
        {
          id: "desarrollo-app-backend",
          title: "Web App & Backend — Next.js + REST API POST /api/contact",
          weekOrTag: "Web Architecture · 10 Weeks",
          category: "Robótica & Web",
          shortDescription:
            "Next.js 14, TypeScript, and Tailwind CSS frontend connected to POST /api/contact with validation and Vercel deployment.",
          problem:
            "Present the term's evidence cleanly and securely, including a validated form backed by a REST API.",
          objective:
            "Structure React/TypeScript components, implement POST /api/contact with validation and JSON responses, protect environment variables, and deploy to Vercel.",
          technologies: ["Next.js 14", "React", "TypeScript", "Tailwind CSS", "REST API", "Vercel"],
          solutionExplanation:
            "Organized routes in src/app, components in src/components, and data in src/data. The src/app/api/contact/route.ts endpoint validates name, email, and message, returns JSON with proper HTTP status codes, and uses environment variables without exposing secrets.",
          results: [
            "Working POST /api/contact endpoint with validation and success/error feedback.",
            "Responsive layout and continuous deployment from GitHub to Vercel.",
          ],
          metrics: [
            { label: "Endpoint", value: "POST /api/contact" },
            { label: "Framework", value: "Next.js 14" },
            { label: "Deploy", value: "Vercel" },
          ],
          imagePath: "/images/evidencia-web-api.png",
          repoOrColabUrl: "https://github.com/tatianadeveloper135/Portafolio_F-tima_M-ndez",
        },
      ] as ProjectItem[],
    },
    skills: {
      kicker: "04 · Capabilities",
      title: "Skills",
      groups: [
        {
          category: "Programming Languages",
          items: ["Python", "TypeScript", "JavaScript", "C++ (Arduino)", "PHP", "SQL"],
        },
        {
          category: "Web Development",
          items: ["Next.js 14", "React", "Tailwind CSS", "HTML5", "CSS3", "REST API"],
        },
        {
          category: "Databases",
          items: ["MySQL", "CSV / JSON Datasets"],
        },
        {
          category: "Tech Tools",
          items: ["Git", "GitHub", "Vercel", "Google Colab", "Arduino", "Excel Expert"],
        },
        {
          category: "AI & Machine Learning",
          items: ["Linear Regression", "K-Means", "KNN", "Scikit-learn", "Pandas", "TensorFlow.js"],
        },
        {
          category: "Soft Skills",
          items: [
            "Leadership",
            "Responsibility",
            "Proactivity",
            "Empathy",
            "Critical Thinking",
            "Teamwork",
            "Effective Communication",
          ],
        },
      ] as SkillGroup[],
    },
    // Dentro de UI_TEXT.en:
    education: {
      kicker: "05 · Academic Background",
      title: "Education & Certifications",
      languages: "Spanish (Native) · English (Intermediate – Advanced / TOEIC)",
      items: [
        {
          institution: "U.S. Space & Rocket Center · Huntsville, AL",
          title: "Space Camp — Advanced Camp (~1 week)",
          period: "International Experience",
          details:
            "Approximately one-week advanced camp at the Rocket Center in Huntsville, Alabama, developing teamwork, leadership, problem solving, and STEM skills. More details available on ¡Supérate! and camp social channels.",
          referenceUrl: "#pegar-enlace-space-camp",
          referenceLabel: "View reference / social channels",
        },
        {
          institution: "Key Institute",
          title: "Mechatronics & Robotics Engineering (90% Partial Scholarship)",
          period: "Admission / University Studies",
          details:
            "Admitted with a 90% scholarship to focus on robotics, automation, engineering, and technology.",
        },
        {
          institution: "Colegio Villanueva",
          title: "High School Diploma",
          period: "2025 – 2026",
          details:
            "Comprehensive academic training and participation in science and technology projects.",
        },
        {
          institution: "Programa ¡Supérate!",
          title: "3-Year Diploma in English, IT & Values",
          period: "2023 – 2026",
          details:
            "International certifications: TOEIC Speaking & Writing, TOEIC Listening & Reading, and Microsoft Excel Expert.",
        },
        {
          institution: "Platzi & Junior Achievement El Salvador",
          title: "Complementary Training",
          period: "Complementary",
          details:
            "Python fundamentals, soft skills courses on Platzi, and Junior Achievement's 'Domino mis cuentas' scholarship.",
        },
      ] as EducationItem[],
    },
    story: {
      kicker: "06 · My Story in the Media",
      title: "Learn More About My Story",
      subtitle:
        "Features, interviews, and videos where different media outlets have shared my journey, projects, and background.",
      watchLabel: "Watch / read feature",
      items: [
        {
          id: "reportaje-1",
          outlet: "Media Outlet 1",
          format: "Video",
          title: "Video feature or interview title",
          summary:
            "Short summary of what this video or media coverage highlights.",
          url: "#pegar-enlace-video-1",
        },
        {
          id: "reportaje-2",
          outlet: "Media Outlet 2",
          format: "Reportaje",
          title: "Written article or feature title",
          summary:
            "Short summary of the feature covering your projects, scholarships, or journey.",
          url: "#pegar-enlace-reportaje-2",
        },
      ] as MediaStoryItem[],
    },
    contact: {
      kicker: "06 · Direct Message",
      title: "Contact",
      channelsTitle: "Channels",
      nameLabel: "Name",
      emailLabel: "Email",
      messageLabel: "Message",
      submitIdle: "Send message",
      submitLoading: "Sending...",
      networkError: "Connection error while sending the form.",
    },
    footer: {
      line1: "Digital Portfolio 2026",
      line2: "Santa Tecla, La Libertad, El Salvador · Next.js 14, TypeScript & Tailwind CSS",
    },
  },
} as const;