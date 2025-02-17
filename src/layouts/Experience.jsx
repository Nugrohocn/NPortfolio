import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { VscBriefcase } from "react-icons/vsc";

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div className="flex justify-center items-center w-full min-h-screen">
      <motion.div
        className="container mx-auto max-w-4xl flex flex-wrap lg:flex-nowrap items-center justify-center gap-5 px-4 text-white pb-16"
        ref={ref}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.5 } },
        }}
      >
        <div className="w-full mx-auto px-4 mt-8">
          {/* Animasi Judul */}
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
            <span className="flex gap-3 mb-3">
              <VscBriefcase /> Experience
            </span>
          </motion.h2>
          <motion.p
            className="text-base md:text-lg mb-5 text-gray-400 text-justify"
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

          <motion.div
            className="flex flex-col sm:flex-row gap-6 h-auto sm:h-72 px-4 sm:px-4 "
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.8, ease: "easeOut" },
              },
            }}
          >
            {/* Gambar */}
            <motion.div
              className="flex justify-center items-center w-full sm:w-1/3 h-auto rounded-full px-3 relative"
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
                src="img/msd1.png"
                className="w-50 object-contain hover:text-primary"
                alt="Experience"
              />
            </motion.div>

            {/* Informasi Pekerjaan */}
            <motion.div
              className="w-full sm:w-2/3 md:mt-6 text-justify"
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.8, ease: "easeOut" },
                },
              }}
            >
              <h1 className="text-md sm:text-lg">Software Engineer</h1>
              <h1 className="text-xl sm:text-2xl font-bold">
                PT Media Sarana Digitalindo
              </h1>
              <span className="text-md">26 Agustus 2024 - 4 Januari 2025</span>

              {/* Deskripsi Pekerjaan */}
              <motion.div
                className="flex gap-2 mt-6"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.8, ease: "easeOut" },
                  },
                }}
              >
                <span className="flex justify-center items-center px-5 py-2 text-sm font-semibold border border-primary rounded-full text-primary">
                  Internship
                </span>
                <span className="flex justify-center px-5 py-2 text-sm sm:text-base font-semibold border border-primary rounded-full text-primary">
                  Onsite
                </span>
              </motion.div>

              <motion.div
                className="mt-4 transition duration-500 w-full"
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.8, ease: "easeOut" },
                  },
                }}
              >
                <div className="text-sm sm:text-base w-full flex flex-col text-justify">
                  <span>
                    As an intern, I contributed to the development of a tourism
                    recommendation system in Karanganyar Regency using the
                    Knowledge Base Recommendation method with Laravel.
                    Additionally, I was involved in SEO optimization through
                    Google Search Console and wrote articles to enhance the
                    website’s visibility and search engine ranking.
                  </span>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Experience;
