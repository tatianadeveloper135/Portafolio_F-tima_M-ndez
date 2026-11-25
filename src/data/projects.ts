import { ProjectItem } from "@/types";

export const PROJECTS_DATA: ProjectItem[] = [
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
    imagePath: "/images/evidencia-regresion.jpeg",
    repoOrColabUrl: "https://colab.research.google.com/drive/1WGbx73QgasdPT131Pd3wNyGoqukSnzKi?usp=sharing",
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
];