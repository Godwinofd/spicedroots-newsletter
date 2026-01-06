import { motion } from 'framer-motion';
import { ImageWithFallback } from './figma/ImageWithFallback';
import logo from '../../assets/sr-email-logo.png';
import foodHero from '../../assets/Spiced-roots-food.jpeg';
import creativePulseImg from '../../assets/spiced-roots-art-1767731001424.png';
import islandSoulImg from '../../assets/spiced-roots-art-1767731420210.png';

interface NewsletterProps {
  onReserveClick: () => void;
}

export function Newsletter({ onReserveClick }: NewsletterProps) {
  return (
    <div className="min-h-screen bg-[#F8F6F0] selection:bg-[#42657D]/20">
      {/* Email Container */}
      <div className="max-w-2xl mx-auto bg-white shadow-2xl overflow-hidden">
        {/* Decorative Top Border - Caribbean Gradient */}
        <div className="h-3 bg-gradient-to-r from-[#FF7E5F] via-[#FEB47B] via-[#42657D] via-[#2F4A5C] to-[#D1BB94]"></div>

        {/* Header - Tropical Luxury with Logo */}
        <header className="relative bg-[#42657D] px-6 py-12 md:px-12 md:py-20 overflow-hidden flex flex-col items-center justify-center">
          {/* Animated Tropical Background Elements */}
          <div className="absolute inset-0 opacity-20 pointer-events-none">
            <motion.div
              animate={{ rotate: [0, 10, 0] }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              className="absolute -top-20 -right-20 w-80 h-80 border-[40px] border-[#D1BB94] rounded-full blur-3xl"
            />
            <motion.div
              animate={{ rotate: [0, -15, 0] }}
              transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
              className="absolute -bottom-40 -left-20 w-96 h-96 border-[60px] border-[#FEB47B] rounded-full blur-3xl"
            />
          </div>

          <div className="relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="mb-0"
            >
              <img src={logo} alt="Spiced Roots Logo" className="h-32 md:h-40 w-auto mx-auto object-contain" />
            </motion.div>
          </div>
        </header>

        {/* Hero Image - The Provided Food Photography */}
        <div className="relative h-[450px] md:h-[600px] overflow-hidden group">
          <ImageWithFallback
            src={foodHero}
            alt="Authentic Caribbean Spread at Spiced Roots"
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
          <div className="absolute bottom-12 left-6 md:left-12 right-12">
            <p className="text-white text-3xl md:text-5xl font-black leading-tight drop-shadow-2xl italic tracking-tight">
              A decade of flavor.<br />A lifetime of stories.
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="px-6 py-16 md:px-16 md:py-24">
          {/* Animated Divider */}
          <div className="flex items-center gap-3 mb-16">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 80 }}
              className="h-1.5 bg-[#FEB47B] rounded-full"
            />
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 40 }}
              transition={{ delay: 0.1 }}
              className="h-1.5 bg-[#42657D] rounded-full"
            />
          </div>

          {/* Opening Narrative */}
          <div className="mb-20 space-y-8 text-center md:text-left">
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-4xl md:text-6xl text-[#42657D] font-black leading-tight tracking-tighter"
            >
              Ten years of Spiced Roots.
            </motion.h2>
            <p className="text-xl text-[#2C2416]/80 leading-relaxed font-medium">
              Join us this Sunday for an exclusive experience. We're capturing the essence of our journey, and we want you at the heart of it.
            </p>
          </div>

          {/* Sittings - Creative Showcase */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
            {/* Sitting 1: Sip & Paint */}
            <motion.div
              whileHover={{ y: -10 }}
              className="bg-[#D1BB94]/10 rounded-[2.5rem] p-8 border border-[#D1BB94]/20 flex flex-col justify-between"
            >
              <div>
                <span className="bg-[#42657D] text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-6 inline-block">12 PM - 2:30 PM</span>
                <h3 className="text-3xl text-[#42657D] font-black mb-4 leading-none">THE CREATIVE PULSE</h3>
                <p className="text-[#2C2416]/70 mb-8 font-medium">Sip, paint, and connect in a relaxed, guided session capturing our island heritage through art.</p>
              </div>
              <div className="h-40 rounded-3xl overflow-hidden shadow-lg mt-auto">
                <ImageWithFallback
                  src={creativePulseImg}
                  alt="Sip and Paint"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            {/* Sitting 2: Food & Vibes */}
            <motion.div
              whileHover={{ y: -10 }}
              className="bg-[#42657D]/10 rounded-[2.5rem] p-8 border border-[#42657D]/20 flex flex-col justify-between"
            >
              <div>
                <span className="bg-[#FEB47B] text-[#2F4A5C] px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-6 inline-block">3 PM - CLOSE</span>
                <h3 className="text-3xl text-[#42657D] font-black mb-4 leading-none">THE ISLAND SOUL</h3>
                <p className="text-[#2C2416]/70 mb-8 font-medium">The ultimate Caribbean feast. Signature dishes, cocktails, and authentic community vibes.</p>
              </div>
              <div className="h-40 rounded-3xl overflow-hidden shadow-lg mt-auto">
                <ImageWithFallback
                  src={islandSoulImg}
                  alt="Afternoon Food"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>

          {/* CTA - Vibrant & Premium */}
          <div className="text-center space-y-10 py-16 px-8 bg-gradient-to-br from-[#42657D] to-[#2F4A5C] rounded-[3.5rem] shadow-3xl relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#FEB47B] rounded-full blur-3xl" />
            </div>

            <div className="relative z-10">
              <h3 className="text-4xl font-black text-white mb-4 tracking-tight">BE PART OF THE LEGACY</h3>
              <p className="text-[#D1BB94] text-lg max-w-sm mx-auto mb-10 font-medium">
                Reserve one of the 20 exclusive spots for this landmark occasion.
              </p>
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0,0,0,0.3)" }}
                whileTap={{ scale: 0.95 }}
                onClick={onReserveClick}
                className="bg-[#FEB47B] text-[#2F4A5C] px-16 py-6 rounded-full text-2xl font-black shadow-2xl transition-all duration-300"
              >
                Reserve Now
              </motion.button>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="bg-[#1A2A33] px-8 py-20 text-center text-white">
          <img src={logo} alt="Logo" className="h-24 w-auto mx-auto mb-10 opacity-80" />
          <p className="text-[#D1BB94]/60 uppercase tracking-[0.3em] text-xs font-bold mb-8">Est. 2016 • Oxford, UK</p>
          <div className="h-px w-24 bg-[#D1BB94]/10 mx-auto" />
        </footer>
      </div>
    </div>
  );
}