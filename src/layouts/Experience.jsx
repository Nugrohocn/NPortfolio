import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { VscBriefcase } from "react-icons/vsc";

const experiences = [
  {
    role: "Web Developer",
    company: "PT Media Sarana Digitalindo",
    date: "August 2024 - January 2025",
    image: "img/msd2.png",
    type: ["Internship", "Onsite"],
    description: [
      "Developed a web-based recommendation system using Laravel and MySQL, optimizing search result accuracy through the Knowledge Base method.",
      "Implemented various Google Search Console strategies to improve website visibility and search engine rankings.",
      "Applied technical SEO strategies in content writing, resulting in articles appearing on the first page of Google and significantly increasing organic traffic.",
    ],
  },
  {
    role: "Fullstack Web Developer",
    company: "Trisya Media Teknologi",
    date: "March 2025 - Now",
    image:
      "https://media.licdn.com/dms/image/v2/D5622AQEeC9gtKWxL6Q/feedshare-shrink_2048_1536/feedshare-shrink_2048_1536/0/1723371281178?e=2147483647&v=beta&t=SmBsu1qC-KmKOe3_OBD9YV_iaGPi4DqDdF-Ll_TIPg8",
    type: ["Internship", "Remote"],
    // Diubah menjadi array agar konsisten
    description: [
      "Developed new features and fixed bugs to enhance functionality and improve user experience (UX) across various web applications.",
      "Contributed to the development of Company Profile websites, Student Management Systems, and CMS projects, covering both frontend (responsive UI) and backend (API & logic) implementation",
      "Proactively collaborated with the UI/UX team to translate business requirements into effective and scalable technical solutions.",
      "Ensured timely completion of development tasks through solid teamwork and clear communication.",
    ],
  },
];

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div className="flex justify-center items-center w-full min-h-screen pb-10 ">
      <motion.div
        className="container mx-auto max-w-4xl flex flex-wrap lg:flex-nowrap items-center justify-center gap-5 px-4 text-white"
        ref={ref}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.5 } },
        }}
      >
        <div className="w-full mx-auto px-4 mt-8">
          <motion.h2
            className="text-2xl md:text-3xl font-bold"
            variants={{
              hidden: { y: -50, opacity: 0 },
              visible: {
                y: 0,
                opacity: 1,
                transition: { duration: 0.8, ease: "easeOut" },
              },
            }}
          >
            <span className="flex items-center gap-3 mb-3">
              <VscBriefcase /> Experience
            </span>
          </motion.h2>
          <motion.p
            className="text-base md:text-lg mb-8 text-gray-400 text-justify"
            variants={{
              hidden: { y: 30, opacity: 0 },
              visible: {
                y: 0,
                opacity: 1,
                transition: { duration: 0.8, delay: 0.3, ease: "easeOut" },
              },
            }}
          >
            Navigating diverse environments with adaptability and expertise for
            holistic solutions.
          </motion.p>

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="flex flex-col sm:flex-row gap-6 mb-12" // Mengatur margin bawah di sini
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.8, ease: "easeOut" },
                },
              }}
            >
              {/* Image Section */}
              <motion.div
                className="flex justify-center items-start w-full sm:w-1/3"
                variants={{
                  hidden: { opacity: 0, scale: 0.8 },
                  visible: {
                    opacity: 1,
                    scale: 1,
                    transition: { duration: 0.8, ease: "easeOut" },
                  },
                }}
              >
                <img
                  src={exp.image}
                  className="w-32 h-32 object-cover rounded-full border-2 border-gray-700 bg-white"
                  alt={`${exp.company} logo`}
                />
              </motion.div>

              {/* Details Section */}
              <motion.div
                className="w-full sm:w-2/3 text-justify"
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.8, ease: "easeOut" },
                  },
                }}
              >
                <h3 className="text-md sm:text-lg text-primary font-semibold">
                  {exp.role}
                </h3>
                <h4 className="text-xl sm:text-2xl font-bold">{exp.company}</h4>
                <p className="text-sm text-gray-400 mb-4">{exp.date}</p>

                <div className="flex gap-2 mb-4">
                  {exp.type.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs font-semibold border border-primary rounded-full text-primary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="text-gray-300">
                  {/* INI BAGIAN YANG DIPERBAIKI */}
                  {Array.isArray(exp.description) ? (
                    <ul className="list-disc list-outside pl-5 space-y-2 text-sm sm:text-base">
                      {exp.description.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  ) : (
                    <p>{exp.description}</p>
                  )}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Experience;
