import { motion, AnimatePresence } from "framer-motion";
import { IoClose } from "react-icons/io5";

const Modal = ({ isOpen, onClose, children }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 flex items-center justify-center bg-black/60 backdrop-blur-sm z-50 p-4"
          // Menutup modal saat area luar (overlay) diklik
          onClick={onClose}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className="bg-[#111111] border border-gray-700/50 rounded-xl shadow-2xl w-full max-w-3xl relative"
            // Mencegah modal tertutup saat konten di dalamnya diklik
            onClick={(e) => e.stopPropagation()}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 30,
              duration: 0.4,
            }}
          >
            {/* Tombol Close dengan tampilan lebih baik */}
            <button
              className="absolute top-3 right-3 text-gray-400 hover:text-white transition-all duration-300 z-10 
                         flex items-center justify-center w-9 h-9 rounded-full bg-white/5 hover:bg-white/10"
              onClick={onClose}
              aria-label="Tutup modal"
            >
              <IoClose size={22} />
            </button>

            {/* Konten Modal */}
            <div className="p-4 sm:p-6 max-h-[85vh] overflow-y-auto">
              {children}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
