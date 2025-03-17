import { FaReact, FaLaravel, FaGithub, FaFigma } from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiMysql,
  SiPostgresql,
  SiBootstrap,
  SiNotion,
} from "react-icons/si";
import { motion } from "framer-motion";
import { HiOutlinePuzzle } from "react-icons/hi";

const techStack = [
  { name: "React", category: "JavaScript Library", icon: <FaReact /> },
  { name: "Next.js", category: "React Framework", icon: <SiNextdotjs /> },
  { name: "Laravel", category: "Backend Framework PHP", icon: <FaLaravel /> },
  { name: "Tailwind", category: "CSS Framework", icon: <SiTailwindcss /> },
  { name: "Bootstrap", category: "CSS Framework", icon: <SiBootstrap /> },
  { name: "MySQL", category: "Database", icon: <SiMysql /> },
  { name: "GitHub", category: "Repository", icon: <FaGithub /> },
  { name: "Figma", category: "Design Tool", icon: <FaFigma /> },
  { name: "Notion", category: "Project Management", icon: <SiNotion /> },
];

const Stack = () => {
  return (
    <div className="w-full min-h-screen ">
      <motion.div
        className=" container mx-auto max-w-4xl flex flex-wrap lg:flex-nowrap items-center justify-center gap-10 px-5  text-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.3 },
          },
        }}
      >
        <div className="w-full mx-auto px-6 my-10 ">
          <motion.h2
            className="text-3xl font-bold mb-3"
            initial={{ y: -50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <span className="flex gap-3">
              <HiOutlinePuzzle /> My Stack
            </span>
          </motion.h2>
          <motion.p
            className="text-lg mb-7 text-gray-400"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            Committed and adaptable to new technologies with expertise in them.
          </motion.p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {techStack.map((tech, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center justify-center p-4 rounded-lg shadow-lg hover:bg-gray-900 transition-all border border-gray-800"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.2,
                  ease: "easeOut",
                }}
                viewport={{ once: true }}
              >
                <div className="text-3xl text-white mb-2">{tech.icon}</div>
                <h3 className="text-lg font-semibold">{tech.name}</h3>
                <p className="text-sm text-gray-400">{tech.category}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Stack;
