import React from "react";
import { motion } from "framer-motion";
import { BiCodeAlt } from "react-icons/bi";
import { useState } from "react";
import Modal from "../components/Modal";

const Showcase = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const portfolio = [
    {
      id: 1,
      judul: "Movie Database",
      title: "A movie database built using TailwindCSS",
      github: "https://github.com/Nugrohocn/movie-database-tailwindCSS",
      gambar: "img/portofolio/4.png",
      kode: "HTML | Tailwind CSS | OMDb API",
      deskripsi:
        "Movie Database is a web application that displays movie data retrieved from the OMDb API. The information is presented in a neat and visually appealing layout using Tailwind CSS, ensuring a clean and responsive design.",
    },
    {
      id: 2,
      judul: "Find Nation",
      title: "A web application to explore countries",
      github: "https://github.com/Nugrohocn/find-nation",
      website: "https://find-nation.vercel.app/",
      gambar: "img/portofolio/fn.png",
      kode: "React JS | Tailwind CSS | Rest Countries API",
      deskripsi:
        "Find Nation is an application used to search for detailed information about a country. The data is retrieved from the REST Countries API, providing comprehensive insights into various aspects of each nation.",
    },
    {
      id: 3,
      judul: "Split Bill",
      title: "A web splitting the bill among friends",
      github: "https://github.com/Nugrohocn/split-bill-reactJS",
      website: "https://split-bill-ten.vercel.app/",
      gambar: "img/portofolio/split.png",
      kode: "React JS",
      deskripsi:
        "Split Bill is an application that features an easy way to calculate cost sharing. It allows users to determine how much each person should pay, making it easier to split bills with friends fairly and transparently.",
    },
    {
      id: 4,
      judul: "Rekomendasi Wisata (Rekta)",
      title: "Recommendation system using Knowledge-Based Recommendation",
      github:
        "https://github.com/Nugrohocn/Sistem-Rekomendasi-Wisata-Knowledge-Base-Recommendation",
      gambar: "img/portofolio/3.png",
      kode: "Laravel | Bootstrap",
      deskripsi:
        "A web-based application that utilizes the Knowledge-Based Recommendation method to provide more personalized travel recommendations for users. By analyzing various parameters such as user preferences, the system suggests the most suitable travel destinations, ensuring a more tailored and satisfying experience.",
    },
    {
      id: 5,
      judul: "CRUD Fullstack",
      title:
        "Fullstack User Dashboard is a web application built with Laravel and ReactJS",
      github: "https://github.com/Nugrohocn/fullstack-laravel-react",
      gambar: "img/portofolio/fullstack.png",
      kode: "Laravel | React JS | TailwindCSS | MySQL",
      deskripsi:
        "Fullstack User Dashboard is a web application built with Laravel and React that provides authentication features and CRUD functionality for managing user data. The backend is developed using an API built with Laravel, and authentication is handled using token-based authentication with Laravel Sanctum.",
    },
    {
      id: 6,
      judul: "K-Means Clust",
      title: "Perform data clustering",
      github: "https://github.com/Nugrohocn/k-means_Clustering",
      gambar: "img/portofolio/5.png",
      kode: "Python",
      deskripsi:
        "K-Means Clustering is an application built using Python to group data based on feature similarities. The K-Means algorithm is used to divide data into multiple clusters, enabling easier and more in-depth analysis of patterns within the dataset.",
    },
    {
      id: 7,
      judul: "Smart Village Aikmel",
      title: "Population data collection website",
      website: "https://smartvillageaikmelutara.my.id",
      gambar: "img/portofolio/1.png",
      kode: "Laravel | Tailwind CSS",
      deskripsi:
        "Smart Village Aikmel is an application for recording population data in North Aikmel, designed to streamline and manage demographic information efficiently.",
    },
    {
      id: 8,
      judul: "Pasar Online Surakarta (Poska)",
      title: "Online marketplace for vegetable products",
      github: "https://github.com/Nugrohocn/project-uas-semester3",
      gambar: "img/portofolio/poska-2.png",
      kode: "Codeigniter",
      deskripsi:
        "E-commerce platform designed to make online shopping easier for the community. This application offers an intuitive shopping experience, fast checkout, and an attractive, responsive design.",
    },
  ];

  return (
    <div className="w-full min-h-screen">
      <motion.div
        className="container mx-auto max-w-4xl flex flex-wrap lg:flex-nowrap items-center justify-center gap-10 px-5 text-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.5 } },
        }}
      >
        <div className="w-full mx-auto px-6 my-10">
          {/* Animasi Judul */}
          <motion.h2
            className="text-3xl font-bold"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
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
              <BiCodeAlt /> Showcase
            </span>
          </motion.h2>
          <motion.p
            className="text-lg mb-7 text-gray-400"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { y: 50, opacity: 0 },
              visible: {
                y: 0,
                opacity: 1,
                transition: { duration: 0.8, delay: 0.3, ease: "easeOut" },
              },
            }}
          >
            My Project that I have made.
          </motion.p>

          {/* Grid Layout */}
          <motion.div
            className="grid gap-4"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gridTemplateRows: "auto",
            }}
          >
            {portfolio.map((item) => (
              <motion.div
                key={item.id}
                className="relative border border-gray-800 rounded-2xl overflow-hidden shadow-lg transform transition duration-300 p-5 h-[350px]"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.8, ease: "easeOut" },
                  },
                }}
                whileHover={{ scale: 1.05 }}
              >
                <motion.img
                  src={item.gambar}
                  alt={item.judul}
                  onClick={() => {
                    setIsModalOpen(true);
                    setSelectedItem(item);
                  }}
                  className="w-full h-44 object-cover rounded-lg"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.8, ease: "easeOut" },
                    },
                  }}
                />
                <motion.div
                  className="py-3"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.8, ease: "easeOut" },
                    },
                  }}
                >
                  <h3 className="text-lg font-bold">{item.judul}</h3>
                  <p className="text-gray-400 text-sm">{item.title}</p>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
        {/* Modal */}
        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
          {selectedItem && (
            <div className="text-black max-w-4xl p-6">
              {/* Header Section */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <img
                  src={selectedItem.gambar}
                  alt={selectedItem.judul}
                  className="w-full h-auto rounded-lg"
                />
                <div className="flex flex-col justify-between">
                  <h3 className="text-2xl text-white font-bold">
                    {selectedItem.judul}
                  </h3>
                  <div className="space-y-2">
                    {selectedItem.website && (
                      <a
                        href={selectedItem.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#0A0A0A] font-bold w-full text-center py-2 bg-gradient-to-r from-green-300 to-green-500 rounded-lg block transition-all"
                      >
                        🌍 Website
                      </a>
                    )}

                    {selectedItem.github && (
                      <a
                        href={selectedItem.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white font-bold w-full text-center py-2 bg-secondary hover:bg-primary-800 rounded-lg block transition-all"
                      >
                        💻 GitHub
                      </a>
                    )}
                  </div>
                </div>
              </div>

              {/* Description Section */}
              <div className="mt-4">
                <h1 className="mt-4 text-xl font-bold mb-2 bg-gradient-to-r from-green-300 to-green-500 bg-clip-text text-transparent">
                  Description
                </h1>

                <p className="text-white">{selectedItem.deskripsi}</p>
              </div>

              <span className="flex justify-center px-4 py-1 text-sm md:text-sm border border-primary rounded-full bg-gradient-to-r from-green-400 to-green-500 mt-4 w-[350px] text-gray-950">
                {selectedItem.kode}
              </span>
            </div>
          )}
        </Modal>
      </motion.div>
    </div>
  );
};

export default Showcase;
