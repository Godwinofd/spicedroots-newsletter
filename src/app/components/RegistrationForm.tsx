import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Instagram, Facebook } from 'lucide-react';
import logo from '../../assets/logo2.png';

interface RegistrationFormProps {
  onBack: () => void;
}

// Custom TikTok icon to match Lucide style
const TikTokIcon = ({ size = 24, strokeWidth = 1.5, className = "" }: { size?: number, strokeWidth?: number, className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
);

export function RegistrationForm({ onBack }: RegistrationFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    sitting: '',
    ageRange: '',
    dietary: '',
    spiceLevel: '',

    culturalBackground: '',
    photo: null as File | null,
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    if (e.target.type === 'file') {
      const fileInput = e.target as HTMLInputElement;
      setFormData({
        ...formData,
        photo: fileInput.files ? fileInput.files[0] : null,
      });
    } else {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
    }
  };

  return (
    <div className="min-h-screen bg-[#F8F6F0] py-12 px-4 selection:bg-[#42657D]/20">
      <div className="max-w-xl mx-auto">
        <AnimatePresence mode="wait">
          {!submitted ? (
            <motion.div
              key="form"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white rounded-[3rem] shadow-2xl overflow-hidden border border-[#D1BB94]/20"
            >
              {/* Premium Header */}
              <div className="relative bg-[#42657D] p-10 overflow-hidden flex flex-col items-center">
                <div className="absolute inset-0 opacity-10 pointer-events-none">
                  <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#FEB47B] rounded-full blur-2xl" />
                  <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-[#D1BB94] rounded-full blur-2xl" />
                </div>

                <button
                  onClick={onBack}
                  className="absolute top-8 left-8 z-20 flex items-center gap-2 text-[#D1BB94] hover:text-white transition-colors group font-bold text-xs tracking-widest"
                >
                  <svg className="w-4 h-4 transition-transform group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                  </svg>
                  BACK
                </button>

                <div className="relative z-10 text-center mt-4">
                  <img src={logo} alt="Logo" className="h-32 w-auto mx-auto mb-4 drop-shadow-xl" />
                  <p className="text-[#D1BB94] font-bold tracking-[0.3em] text-[10px] uppercase mb-2">Sunday 11/01/2026</p>
                  <h1 className="text-3xl text-white font-black tracking-tighter">RESERVE YOUR SPACE</h1>
                </div>
              </div>

              {/* Form Body */}
              <form onSubmit={handleSubmit} className="p-10 space-y-8">
                <div className="space-y-6">
                  <div className="group">
                    <label className="block text-[#42657D] text-[10px] font-black uppercase tracking-[0.2em] mb-3 ml-1">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-6 py-4 bg-[#F8F6F0] border-2 border-transparent focus:border-[#D1BB94]/30 rounded-2xl focus:ring-0 text-[#2C2416] font-semibold transition-all placeholder:text-[#2C2416]/20"
                      placeholder="e.g. Marcus Garvey"
                    />
                  </div>

                  <div>
                    <label className="block text-[#42657D] text-[10px] font-black uppercase tracking-[0.2em] mb-3 ml-1">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-6 py-4 bg-[#F8F6F0] border-2 border-transparent focus:border-[#D1BB94]/30 rounded-2xl focus:ring-0 text-[#2C2416] font-semibold transition-all placeholder:text-[#2C2416]/20"
                      placeholder="hello@example.com"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-[#42657D] text-[10px] font-black uppercase tracking-[0.2em] mb-3 ml-1">Sitting</label>
                      <select
                        name="sitting"
                        required
                        value={formData.sitting}
                        onChange={handleChange}
                        className="w-full px-6 py-4 bg-[#F8F6F0] border-2 border-transparent focus:border-[#D1BB94]/30 rounded-2xl focus:ring-0 text-[#2C2416] font-semibold transition-all appearance-none cursor-pointer"
                      >
                        <option value="">Choose...</option>
                        <option value="first">12pm (Sip & Paint)</option>
                        <option value="second">3pm (Food & Vibes)</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-[#42657D] text-[10px] font-black uppercase tracking-[0.2em] mb-3 ml-1">Age Range</label>
                      <select
                        name="ageRange"
                        required
                        value={formData.ageRange}
                        onChange={handleChange}
                        className="w-full px-6 py-4 bg-[#F8F6F0] border-2 border-transparent focus:border-[#D1BB94]/30 rounded-2xl focus:ring-0 text-[#2C2416] font-semibold transition-all appearance-none cursor-pointer"
                      >
                        <option value="">Select...</option>
                        <option value="18-25">18–25</option>
                        <option value="26-45">26-45</option>
                        <option value="46+">46+</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[#42657D] text-[10px] font-black uppercase tracking-[0.2em] mb-3 ml-1">Dietary Notes</label>
                    <textarea
                      name="dietary"
                      value={formData.dietary}
                      onChange={handleChange}
                      rows={3}
                      className="w-full px-6 py-4 bg-[#F8F6F0] border-2 border-transparent focus:border-[#D1BB94]/30 rounded-2xl focus:ring-0 text-[#2C2416] font-semibold transition-all resize-none placeholder:text-[#2C2416]/20"
                      placeholder="Any allergies or requirements?"
                    />
                  </div>
                </div>

                <div className="group">
                  <label className="block text-[#42657D] text-[10px] font-black uppercase tracking-[0.2em] mb-3 ml-1">Your Photo (Optional)</label>
                  <div className="relative">
                    <input
                      type="file"
                      name="photo"
                      accept="image/*"
                      onChange={handleChange}
                      className="w-full px-6 py-4 bg-[#F8F6F0] border-2 border-transparent focus:border-[#D1BB94]/30 rounded-2xl focus:ring-0 text-[#2C2416] font-semibold transition-all file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-xs file:font-black file:uppercase file:tracking-widest file:bg-[#42657D]/10 file:text-[#42657D] hover:file:bg-[#42657D]/20 cursor-pointer text-sm"
                    />
                  </div>
                  <p className="mt-2 ml-1 text-xs text-[#2C2416]/40 font-medium">So we can put a face to the name when you arrive.</p>
                </div>


                <motion.button
                  whileHover={{ scale: 1.02, backgroundColor: "#2F4A5C" }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full bg-[#42657D] text-white py-6 rounded-2xl text-lg font-black shadow-xl transition-all"
                >
                  CONFIRM RESERVATION
                </motion.button>
              </form>
            </motion.div>
          ) : (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white rounded-[3rem] shadow-2xl p-12 text-center border border-[#D1BB94]/20"
            >
              <div className="w-24 h-24 bg-[#FEB47B]/20 rounded-full flex items-center justify-center mx-auto mb-8">
                <motion.div
                  initial={{ rotate: -45, scale: 0 }}
                  animate={{ rotate: 0, scale: 1 }}
                  transition={{ type: "spring", damping: 10 }}
                  className="w-16 h-16 bg-[#FEB47B] rounded-full flex items-center justify-center text-[#2F4A5C]"
                >
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M5 13l4 4L19 7" />
                  </svg>
                </motion.div>
              </div>

              <h2 className="text-5xl font-black text-[#42657D] mb-4 tracking-tighter">YOU'RE IN!</h2>
              <p className="text-lg text-[#2C2416]/70 leading-relaxed mb-10 font-medium">
                We've received your details. Expect an email with your official invite soon.
              </p>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={onBack}
                className="inline-flex items-center gap-3 text-[#42657D] font-black uppercase tracking-[0.2em] text-xs group"
              >
                <span className="border-b-4 border-[#FEB47B] group-hover:border-[#42657D] transition-colors pb-1">Back to Newsletter</span>
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Footer */}
        <footer className="mt-16 py-8 text-center">
          <div className="flex justify-center gap-6 mb-8">
            <a href="https://instagram.com/spicedroots" target="_blank" rel="noopener noreferrer" className="text-[#42657D]/30 hover:text-[#42657D] transition-colors">
              <Instagram size={20} strokeWidth={2} />
            </a>
            <a href="https://facebook.com/spicedroots" target="_blank" rel="noopener noreferrer" className="text-[#42657D]/30 hover:text-[#42657D] transition-colors">
              <Facebook size={20} strokeWidth={2} />
            </a>
            <a href="https://tiktok.com/@spicedroots" target="_blank" rel="noopener noreferrer" className="text-[#42657D]/30 hover:text-[#42657D] transition-colors">
              <TikTokIcon size={20} strokeWidth={2} />
            </a>
          </div>
          <p className="text-[#42657D]/30 uppercase tracking-[0.4em] text-[9px] font-black">Est. 2016 • Oxford, UK</p>
        </footer>
      </div>
    </div >
  );
}