import { pathfinding, sorting, hospital, malaria, covid, kth, uci } from "../assets/index";

const projects = [
  {
    title: "Human Activity Recognition",
    date: "APRIL, 2020",
    subtitle:
      "Recognise Human Activity(Walking, Walking-Upstairs, Walking-Downstairs, Sitting, Standing, Laying) form UCI-HAR dataset. Dataset is collected from Smartphone Sensors(Accelerometer, Gyroscope)",
    technologies: "Python, Scikit-learn, Tensorflow",
    image: uci,
    gitRepo: "https://github.com/arijitiiest/UCI-Human-Activity-Recognition",
  },
  {
    title: "Human-Action-Recognition",
    date: "MARCH, 2020",
    subtitle:
      "Recognise Human Action(Boxing, Hand-Clapping, Hand-Waving, Jogging, Running, Walking) from KTH-HAR Dataset using Feature Extraction Algorithms(HOG, LBP, GLCM, SURF, SIFT, GABOR)",
    technologies: "Python, OpenCV, Scikit-learn",
    image: kth,
    gitRepo: "https://github.com/arijitiiest/KTH-Human-Action-Recognition",
  },
  {
    title: "COVID-19 Tracker App",
    date: "MARCH, 2020",
    subtitle:
      "Covid-19 tracker app build with React Native. Data taken from different API's('https://api.covid19api.com', 'https://api.covid19india.org')",
    technologies: "React Native, Redux",
    image: covid,
    gitRepo: "https://github.com/arijitiiest/COVID19-tracker-app",
  },
  {
    title: "Face Recognition",
    date: "MARCH, 2020",
    subtitle:
      "Machine Learning Project to recognise faces from an image. It uses dlib's pre-trained face recognition model to find features from an face and matches with other face",
    technologies: "Python, Dlib, OpenCV",
    image: pathfinding,
    gitRepo: "https://github.com/arijitiiest/Face-Recognition",
  },
//   {
//     title: "Bengali Optical Character Recognition",
//     date: "MARCH, 2020",
//     subtitle: "",
//     technologies: "Python, Scikit-Learn, Tensorflow",
//     image: "",
//     gitRepo: ""
//   },
  {
    title: "Maleria Detection",
    date: "JANUARY, 2020",
    subtitle:
      "Identification of microscopic cell image whether the cell malaria infected or not",
    technologies: "Python, Scikit-learn, OpenCV, Keras",
    image: malaria,
    gitRepo: "https://github.com/arijitiiest/Malaria-Detection",
  },
  {
    title: "Pathfinding Visualizer",
    date: "DECEMBER, 2019",
    subtitle:
      "This project is mainly for visualising different pathfinding algorithms (Dijkstra's Algorithm, A* Algorithm, BFS, DFS, Greedy Algorithm).",
    link: "https://arijitiiest.github.io/Pathfinding-Visualizer/",
    technologies: "React Js, Webpack",
    image: pathfinding,
    gitRepo: "https://github.com/arijitiiest/Pathfinding-Visualizer",
  },
  {
    title: "Sorting Visualizer",
    date: "SEPTEMBER, 2019",
    subtitle:
      "This project is mainly for visualising different sorting algorithms (Quick Sort, Merge Sort, Heap Sort, Bubble Sort).",
    link: "https://arijitiiest.github.io/sortingVisualizer/",
    technologies: "React Js, Webpack",
    image: sorting,
    gitRepo: "https://github.com/arijitiiest/sortingVisualizer",
  },
  {
    title: "Hospital Management System",
    date: "OCTOBER, 2019",
    subtitle:
      "Hospital Patient Record Management System, where MySQL used as a database. Doctor Assign, Patient Appointment, Doctor Prescription, Billing features are implemented",
    technologies: "React JS, Node Js, Express Js, MySQL, JsonWebToken",
    image: hospital,
    gitRepo: "https://github.com/arijitiiest/Hospital-Management-System",
  },
];

export default projects;
