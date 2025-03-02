const sidefolioAceternity = "/images/sidefolio-aceternity.png";
const sidefolioAceternity2 = "/images/sidefolio-aceternity-2.png";
const sidefolioAlgochurn = "/images/sidefolio-algochurn.png";
const sidefolioAlgochurn2 = "/images/sidefolio-algochurn.png";
const sidefolioMoonbeam = "/images/sidefolio-moonbeam.png";
const sidefolioMoonbeam2 = "/images/sidefolio-moonbeam-2.png";
const sidefolioTailwindMasterKit = "/images/sidefolio-tailwindmasterkit.png";
const sidefolioTailwindMasterKit2 = "/images/sidefolio-tailwindmasterkit-2.png";

export const products = [
  {
    href: "https://natours-xbsh.onrender.com/",
    title: "travel Platform",
    description: "A travel booking platform ",
    thumbnail: sidefolioAceternity,
    images: [sidefolioAceternity, sidefolioAceternity2],
    stack: ["Nodejs", "Expressjs", "MongoDB", "pug", "CSS"],
    slug: "natours",
    content: (
      <div>
        <p>
          Natours is a full-stack travel booking application designed to provide
          a seamless experience for users exploring and reserving tours. The
          platform features secure JWT authentication, enhancing user data
          security by 40%, and a RESTful API to ensure smooth communication
          between the front-end and back-end. Dynamic pages, built using Pug,
          create an intuitive and visually appealing interface.
        </p>
        <p>
          To optimize performance, MongoDB queries were improved with Mongoose,
          reducing query execution time by 35%. The application follows best
          practices in MERN stack development, ensuring scalability and
          maintainability. Natours delivers an efficient and user-friendly
          solution for hassle-free travel bookings.
        </p>
      </div>
    ),
  },
  {
    href: "https://fast-react-pizza.netlify.app/",
    title: "React Pizza",
    description: "A pizza ordering application.",
    thumbnail: sidefolioAlgochurn,
    images: [sidefolioAlgochurn, sidefolioAlgochurn2],
    stack: ["Reactjs", "Tailwindcss", "Redux"],
    slug: "React-pizza",
    content: (
      <div>
        <p>
          Developed a React-based pizza ordering application with an intuitive
          user interface, providing a seamless ordering experience. The app is
          styled using Tailwind CSS, ensuring a modern, responsive design. Users
          can browse menu options, customize their orders, and track them in
          real-time.
        </p>
        <p>
          Implemented Redux for state management, optimizing data flow and
          improving performance. The structured state architecture ensures
          efficient handling of user interactions, enhancing scalability and
          maintainability.
        </p>
      </div>
    ),
  },
  {
    href: "https://movie-app-sm1v.vercel.app/",
    title: "MovieFlex",
    description:
      "A movie exploration app where users can browse, discover, and save their favorite films.",
    thumbnail: sidefolioMoonbeam,
    images: [sidefolioMoonbeam, sidefolioMoonbeam2],
    stack: ["Reactjs", "MantineUI", "Firebase"],
    slug: "MovieFlex",
    content: (
      <div>
        <p>
          Developed a React-based movie app with Firebase authentication,
          Firestore, and TMDB API for real-time movie data. Integrated Mantine,
          NextUI, and Framer Motion for a seamless and visually appealing UI.
        </p>
        <p>
          Optimized performance using React Query for caching and Zustand for
          efficient state management. Implemented dark mode, watchlists, and
          role-based access, enhancing user experience and functionality.
        </p>
      </div>
    ),
  },
  {
    href: "https://github.com/tim177/Bankist",
    title: "Banking Management System",
    description:
      "A Java-based banking system for secure and efficient transactions.",
    thumbnail: sidefolioTailwindMasterKit,
    images: [sidefolioTailwindMasterKit, sidefolioTailwindMasterKit2],
    stack: ["Java", "SQL", "Java Swing"],
    slug: "banking-management",
    content: (
      <div>
        <p>
          Designed and developed a Java-based banking management system with a
          user-friendly interface using Swing and AWT. The application
          streamlined banking operations, allowing users to perform
          transactions, manage accounts, and access essential banking services
          efficiently.
        </p>
        <p>
          Implemented SQL-based data management to ensure secure and reliable
          transaction processing. Optimized database queries for improved
          performance, enhancing the overall system&apos;s speed and security.
        </p>
      </div>
    ),
  },
];
