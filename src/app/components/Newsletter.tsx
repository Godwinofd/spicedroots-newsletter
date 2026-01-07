import { motion } from 'framer-motion';
import { Instagram, Facebook } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import logo from '../../assets/logo2.png';
import foodHero from '../../assets/hero.jpg';
import creativePulseImg from '../../assets/spiced-roots-art-1767731001424.png';
import islandSoulImg from '../../assets/spiced-roots-art-1767731420210.png';
import martinJImg from '../../assets/martinj.jpeg';

interface NewsletterProps {
  onReserveClick: () => void;
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

export function Newsletter({ onReserveClick }: NewsletterProps) {
  return (
    <div className="min-h-screen bg-[#F8F6F0] selection:bg-[#42657D]/20">
      {/* Email Container */}
      <div className="max-w-2xl mx-auto bg-white shadow-2xl overflow-hidden">
        {/* Decorative Top Border - Caribbean Gradient */}
        <div className="h-3 bg-gradient-to-r from-[#FF7E5F] via-[#FEB47B] via-[#42657D] via-[#2F4A5C] to-[#D1BB94]"></div>

        {/* Hero Image Section - Logo now integrated within */}
        <div className="relative h-[500px] md:h-[700px] overflow-hidden group">
          <ImageWithFallback
            src={foodHero}
            alt="Authentic Caribbean Spread at Spiced Roots"
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
          />

          {/* Soft Gradient Overlays for Logo and Text Anchoring */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60"></div>

          {/* Integrated Logo - Centered with Hover Effect */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none"
          >
            <div className="relative pointer-events-auto">
              {/* Subtle glow behind logo to lift it off image without a hard box */}
              <div className="absolute inset-0 bg-[#42657D]/20 blur-2xl rounded-full transform scale-150"></div>
              <img
                src={logo}
                alt="Spiced Roots Logo"
                className="relative h-32 md:h-48 w-auto object-contain drop-shadow-2xl transition-transform duration-300"
              />
            </div>
          </motion.div>

          <div className="absolute bottom-16 left-6 md:left-12 right-12">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-white text-3xl md:text-5xl font-black leading-tight drop-shadow-2xl italic tracking-tight"
            >
              A decade of flavor.<br />A lifetime of stories.
            </motion.p>
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

          {/* Opening Narrative - Broken into readable sections */}
          <div className="mb-24 space-y-12">
            {/* Intro Flow - Continuous narrative */}
            <div className="space-y-6">
              <motion.h2
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="text-4xl md:text-6xl text-[#42657D] font-black leading-tight tracking-tighter"
              >
                Ten years of<br />Spiced Roots.
              </motion.h2>
              <div className="space-y-4 pt-2">
                <p className="text-xl text-[#2C2416] leading-relaxed font-bold">
                  Happy New Year ❤️
                </p>
                <p className="text-lg text-[#2C2416]/80 leading-relaxed font-medium">
                  We hope you managed to rest, eat well and enjoy time with the people around you. As we step into the new year, we wanted to share something special.
                </p>
              </div>
            </div>

            <div className="bg-[#D1BB94]/5 border-l-2 border-[#D1BB94]/50 p-6 md:p-8 rounded-r-2xl space-y-4 backdrop-blur-sm">
              <p className="text-lg text-[#2C2416]/80 leading-relaxed font-medium">
                <span className="font-bold text-[#42657D]">2026 is our 10th year at Spiced Roots.</span> Ten years of cooking the food we grew up on, welcoming people like family and building something rooted in Caribbean culture right here in Oxford.
              </p>
              <p className="text-lg text-[#2C2416]/80 leading-relaxed font-medium">
                We're proud of how far we've come and this year we'll be celebrating throughout — with food, music, culture and community at the centre of it all.
              </p>
            </div>

            <div className="space-y-8">
              <h4 className="text-[#42657D]/60 font-black uppercase tracking-[0.2em] text-xs text-center mb-8">Coming this year</h4>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center max-w-4xl mx-auto">
                {[
                  { label: "Live Events", icon: "🎨" },
                  { label: "Radio Sets", icon: "📻" },
                  { label: "Rum Classes", icon: "🥃" },
                  { label: "Sip & Paint", icon: "🍷" }
                ].map((item, i) => (
                  <div key={i} className="group cursor-default">
                    {/* Icons colored by default, slightly muted to fit brand (opacity-90), full color on hover */}
                    <div className="text-2xl mb-3 opacity-90 hover:scale-110 transition-all duration-300">{item.icon}</div>
                    <div className="text-xs font-black uppercase tracking-widest text-[#42657D] group-hover:text-[#D1BB94] transition-colors">{item.label}</div>
                  </div>
                ))}
              </div>

              <div className="mt-16 mb-12 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 opacity-90 hover:opacity-100 transition-opacity duration-500">
                <div className="relative group">
                  <div className="absolute inset-0 bg-[#FEB47B] rounded-[2rem] blur-xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
                  <img
                    src={martinJImg}
                    alt="Martin Jay"
                    className="w-48 h-48 md:w-56 md:h-56 rounded-[2rem] object-cover shadow-2xl relative z-10 rotate-2 group-hover:rotate-0 transition-all duration-700 ease-out"
                  />
                </div>

                <div className="text-center md:text-left space-y-3 max-w-sm">
                  <div className="inline-block px-4 py-1.5 bg-[#42657D]/10 rounded-full mb-2">
                    <p className="text-[11px] font-black uppercase tracking-[0.25em] text-[#42657D]">Special Guest</p>
                  </div>
                  <h3 className="text-4xl md:text-5xl font-black text-[#42657D] leading-[0.9] tracking-tighter">
                    Martin<br />Jay
                  </h3>
                  <div className="h-1 w-12 bg-[#D1BB94] rounded-full mx-auto md:mx-0 my-3"></div>
                  <p className="text-xl text-[#2C2416]/80 font-medium italic">
                    Live Radio Set
                  </p>
                </div>
              </div>

              <p className="text-lg text-[#2C2416]/80 leading-relaxed font-medium text-center italic">
                We'll share details properly as they land, but we wanted to start the year by inviting you into something special on Sunday, 25th January.
              </p>
            </div>
          </div>

          {/* Transition */}
          <div className="mb-24 text-center max-w-2xl mx-auto px-4">
            <div className="h-px w-24 bg-[#D1BB94]/30 mx-auto mb-10"></div>
            <p className="text-xl md:text-2xl text-[#42657D] font-medium italic leading-relaxed">
              "To start this year of celebrations, we’re inviting you into something special on Sunday, 25th January."
            </p>
          </div>

          {/* Invitation Section */}
          <div className="mb-24 space-y-12">
            <div className="text-center space-y-4">
              <h3 className="text-3xl md:text-4xl text-[#42657D] font-black tracking-tight">An Invitation for 25th January</h3>
              <p className="text-[#2C2416]/60 font-medium">Capture the energy with us</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Sitting 1: Sip & Paint */}
              <motion.div
                whileHover={{ y: -5 }}
                className="bg-white rounded-[2.5rem] p-8 border border-[#D1BB94]/30 shadow-xl flex flex-col justify-between"
              >
                <div>
                  <span className="bg-[#42657D] text-white px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest mb-6 inline-block">12 PM - 2:30 PM</span>
                  <h3 className="text-2xl text-[#42657D] font-black mb-4 leading-none uppercase">The Creative Pulse</h3>
                  <p className="text-[#2C2416]/70 mb-8 font-medium text-sm">Sip, paint, and connect in a relaxed, guided session capturing our island heritage through art.</p>
                </div>
                <div className="h-40 rounded-3xl overflow-hidden mt-auto">
                  <ImageWithFallback src={creativePulseImg} alt="Sip and Paint" className="w-full h-full object-cover" />
                </div>
              </motion.div>

              {/* Sitting 2: Food & Vibes */}
              <motion.div
                whileHover={{ y: -5 }}
                className="bg-white rounded-[2.5rem] p-8 border border-[#42657D]/30 shadow-xl flex flex-col justify-between"
              >
                <div>
                  <span className="bg-[#FEB47B] text-[#2F4A5C] px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest mb-6 inline-block">3 PM - CLOSE</span>
                  <h3 className="text-2xl text-[#42657D] font-black mb-4 leading-none uppercase">The Island Soul</h3>
                  <p className="text-[#2C2416]/70 mb-8 font-medium text-sm">The ultimate Caribbean feast. Signature dishes, cocktails, and authentic community vibes.</p>
                </div>
                <div className="h-40 rounded-3xl overflow-hidden mt-auto">
                  <ImageWithFallback src={islandSoulImg} alt="Afternoon Food" className="w-full h-full object-cover" />
                </div>
              </motion.div>
            </div>
          </div>

          {/* Trust Section - Lighter, softer */}
          <div className="mb-24 bg-[#42657D]/3 rounded-[2.5rem] p-8 md:p-12">
            <div className="max-w-xl mx-auto text-center space-y-6">
              <h3 className="text-xl font-black text-[#42657D] uppercase tracking-wider opacity-90">Real People. Real Energy.</h3>
              <div className="space-y-4 text-[#2C2416]/70 text-base md:text-lg leading-relaxed font-medium">
                <p>
                  We're hosting this content day to capture authentic moments that reflect the Spiced Roots spirit.
                </p>
                <p>
                  No staged sets or models—just our community doing what they do best: enjoying good food and even better company.
                </p>
                <p className="text-sm italic opacity-60 pt-4">
                  *Your registration helps us manage sittings and dietary needs respectfully.
                </p>
              </div>
            </div>
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
          <img src={logo} alt="Logo" className="h-20 w-auto mx-auto mb-8 opacity-60 grayscale brightness-200" />

          <div className="flex justify-center gap-6 mb-12">
            <a href="https://instagram.com/spicedroots" target="_blank" rel="noopener noreferrer" className="text-[#D1BB94]/40 hover:text-[#FEB47B] transition-colors">
              <Instagram size={24} strokeWidth={1.5} />
            </a>
            <a href="https://facebook.com/spicedroots" target="_blank" rel="noopener noreferrer" className="text-[#D1BB94]/40 hover:text-[#FEB47B] transition-colors">
              <Facebook size={24} strokeWidth={1.5} />
            </a>
            <a href="https://tiktok.com/@spicedroots" target="_blank" rel="noopener noreferrer" className="text-[#D1BB94]/40 hover:text-[#FEB47B] transition-colors">
              <TikTokIcon size={24} strokeWidth={1.5} />
            </a>
          </div>

          <p className="text-[#D1BB94]/40 uppercase tracking-[0.4em] text-[10px] font-black mb-8">Est. 2016 • Oxford, UK</p>
          <div className="h-px w-16 bg-[#D1BB94]/10 mx-auto" />
        </footer>
      </div>
    </div>
  );
}