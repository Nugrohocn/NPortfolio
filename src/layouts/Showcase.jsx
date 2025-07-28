import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BiCodeAlt, BiX } from "react-icons/bi";
import Modal from "../components/Modal"; // Modal dasar kita
import { VscBriefcase } from "react-icons/vsc";

const Showcase = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [lightboxImage, setLightboxImage] = useState(null);

  const portfolio = [
    {
      id: 1,
      judul: "Lokananta Bloc Company Profile",
      title: "Official company profile website for Lokananta Bloc",
      github: "",
      website: "https://www.lokanantabloc.com/",
      gambar: "img/portofolio/new-image/lokananta.webp",
      kode: "Laravel | React JS | MySQL",
      deskripsi:
        "Lokananta Bloc Company Profile is a responsive website developed to showcase the brand identity, services, and event space of Lokananta Bloc. The website serves as a digital presence for Lokananta Bloc, offering details about its creative hub and venue booking system.",
    },
    {
      id: 2,
      judul: "Company Profile TMT",
      title: "Modern company profile website for Trisya Media Teknologi",
      website: "https://www.trisyamedia.tech/",
      gambar: "img/portofolio/new-image/tmt.webp",
      kode: "Laravel | React JS | MySQL",
      deskripsi:
        "TMT Company Profile is a fullstack website for Trisya Media Teknologi that highlights company services, project portfolios, and contact information. Built with a Laravel backend and ReactJS frontend, it ensures a smooth user experience with responsive and modern UI components.",
    },
    {
      id: 3,
      judul: "Rekomendasi Wisata (Rekta)",
      title: "Tourism recommendation system using knowledge-based approach",
      github:
        "https://github.com/Nugrohocn/Sistem-Rekomendasi-Wisata-Knowledge-Base-Recommendation",
      gambar: "img/portofolio/3.png",
      kode: "Laravel | Bootstrap",
      deskripsi:
        "Rekta is a web-based recommendation system that applies the Knowledge-Based Recommendation method to suggest tourism destinations based on user preferences. It evaluates attributes such as category, location, price, rating, and facilities to generate accurate destination suggestions.",
    },
    {
      id: 4,
      judul: "CRUD Fullstack",
      title: "User management dashboard with API and authentication",
      github: "https://github.com/Nugrohocn/fullstack-laravel-react",
      gambar: "img/portofolio/fullstack.png",
      kode: "Laravel | React JS | Tailwind CSS | MySQL",
      deskripsi:
        "This Fullstack User Dashboard project features complete CRUD operations and secure authentication using Laravel Sanctum. It includes a responsive UI built with React and Tailwind CSS, and allows users to manage accounts via a RESTful API.",
    },
    {
      id: 5,
      judul: "Smart Village Aikmel",
      title: "Web-based population census system",
      website: "https://smartvillageaikmelutara.my.id",
      gambar: "img/portofolio/1.png",
      kode: "Laravel | Tailwind CSS",
      deskripsi:
        "Smart Village Aikmel is a web application developed for efficient population data management in North Aikmel. It enables local authorities to collect, view, and update demographic data while streamlining census operations.",
    },
  ];

  return (
    <div className="w-full min-h-screen">
      <div className="container mx-auto max-w-4xl px-5 py-10 text-white">
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
            <VscBriefcase /> Showcase
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
          My Project that I have made.
        </motion.p>

        {/* === PERUBAHAN 1: Menggunakan 'grid' untuk layout yang sejajar === */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {portfolio.map((item) => (
            <motion.div
              key={item.id}
              // Kelas asli dipertahankan, hanya 'break-inside-avoid' dan 'mb-4' dihapus
              className="relative border border-gray-800 rounded-2xl overflow-hidden shadow-lg p-5 cursor-pointer"
              onClick={() => {
                setSelectedItem(item);
                setIsModalOpen(true);
              }}
              whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
            >
              <motion.img
                src={item.gambar}
                alt={item.judul}
                // === PERUBAHAN 2: Gambar dibuat seragam agar kartu sejajar ===
                className="w-full aspect-video object-cover rounded-lg pointer-events-none"
              />
              <motion.div className="py-3">
                <h3 className="text-lg font-bold">{item.judul}</h3>
                <p className="text-gray-400 text-sm">{item.title}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal dan Lightbox tidak diubah */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        {selectedItem && (
          <div className="text-black max-w-4xl  p-4 sm:p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.img
                src={selectedItem.gambar}
                alt={selectedItem.judul}
                className="w-full h-auto rounded-lg cursor-pointer"
                onClick={() => setLightboxImage(selectedItem.gambar)}
                whileHover={{ scale: 1.03 }}
              />
              <div className="flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl text-white font-bold mb-4">
                    {selectedItem.judul}
                  </h3>
                  <div className="space-y-2 mt-4">
                    {selectedItem.website && (
                      <a
                        href={selectedItem.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#0A0A0A] font-bold w-full text-center py-2 bg-gradient-to-r from-green-300 to-green-500 rounded-lg block transition-all hover:shadow-lg hover:shadow-green-500/30"
                      >
                        🌍 Website
                      </a>
                    )}
                    {selectedItem.github && (
                      <a
                        href={selectedItem.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white font-bold w-full text-center py-2 bg-gray-800 hover:bg-gray-700 rounded-lg block transition-all"
                      >
                        💻 GitHub
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-6">
              <h1 className="text-xl font-bold mb-2 bg-gradient-to-r from-green-300 to-green-500 bg-clip-text text-transparent">
                Description
              </h1>
              <p className="text-gray-300">{selectedItem.deskripsi}</p>
              <div className="mt-4">
                <span className="inline-block px-4 py-1 text-sm border border-primary rounded-full bg-gradient-to-r from-green-400 to-green-500 text-gray-950 font-medium">
                  {selectedItem.kode}
                </span>
              </div>
            </div>
          </div>
        )}
      </Modal>

      <AnimatePresence>
        {lightboxImage && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center bg-black/80 backdrop-blur-sm z-[60]"
            onClick={() => setLightboxImage(null)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <button
              className="absolute top-5 right-5 text-white/70 hover:text-white transition-all z-10"
              onClick={() => setLightboxImage(null)}
              aria-label="Tutup gambar"
            >
              <BiX size={40} />
            </button>
            <motion.img
              src={lightboxImage}
              alt="Enlarged view"
              className="max-w-[90vw] max-h-[85vh] object-contain rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Showcase;
