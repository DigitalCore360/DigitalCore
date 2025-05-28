import React from 'react';
import { Phone, Mail, MapPin, ArrowUp, Facebook, Twitter, Instagram, Linkedin, ChevronRight } from 'lucide-react';

const Footer = () => {
  // Colors from the document
  const colors = {
    lightGray: "#cccccc",
    gold: "#cbb26a",
    black: "#000000",
    lightGold: "#d8c690",
    darkGold: "#be9e44",
    darkGray: "#1a1a1a",
    cream: "#e5d9b6"
  };

  const currentYear = new Date().getFullYear();

  // Contact info
  const contactInfo = [
    { icon: <Phone size={18} />, info: "+962 7 7639 9396", type: "phone", action: () => window.open('tel:+962 7 7639 9396', '_blank') },
    { icon: <Mail size={18} />, info: "info@digitalcore360.com", type: "email", action: () => window.open('mailto:info@digitalcore360.com', '_blank') },
    { icon: <MapPin size={18} />, info: "دوار الواحة، تلاع العلي، عمان، الأردن", type: "address", action: () => window.open('https://maps.google.com/maps?q=31.9539,35.8623&hl=ar', '_blank') }
  ];

  // Social media (keeping for branding purposes)
  const socialMedia = [
    { name: "facebook", icon: <Facebook size={20} />, link: "https://www.facebook.com/share/16MYWWcYJg/" },
    { name: "twitter", icon: <Twitter size={20} />, link: "https://x.com/CoreDigital360?t=W-MeJlbRB8oxnmkLGUxtYQ&s=09" },
    { name: "instagram", icon: <Instagram size={20} />, link: "https://www.instagram.com/coredigital360?igsh=MXQwNnE3MDQ3aW1uMw==" },
    { name: "linkedin", icon: <Linkedin size={20} />, link: "https://www.linkedin.com/company/core-digital-360/" }
  ];

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="relative" style={{ backgroundColor: colors.black }}>
      {/* Decorative top border */}
      <div className="h-1 w-full" style={{ background: `linear-gradient(90deg, ${colors.darkGold}, ${colors.gold}, ${colors.darkGold})` }} />
      
      {/* Footer content */}
      <div className="max-w-6xl mx-auto px-4 py-16 relative" dir="rtl">
        
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          {/* Company info */}
          <div>
            <div className="mb-6">
              <h2 className="text-3xl font-bold mb-2" style={{ color: colors.gold }}>Core Digital 360  </h2>
              <p className="text-sm" style={{ color: colors.cream }}>
                شريكك الموثوق في التحول الرقمي
              </p>
            </div>
            
            <div className="mb-8">
              <p style={{ color: colors.lightGray }}>
                نقدم حلولاً رقمية متكاملة تساعد الشركات على التميز في العالم الرقمي. نحن نجمع بين الإبداع والتقنية لتحقيق نتائج استثنائية.
              </p>
            </div>
          </div>
          
          {/* Contact information */}
          <div>
            <h3 className="text-xl font-bold mb-6 relative" style={{ color: colors.lightGold }}>
              تواصل معنا
              <span className="absolute bottom-0 right-0 w-12 h-0.5 mt-2" style={{ backgroundColor: colors.darkGold }} />
            </h3>
            
            <div className="space-y-4">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div style={{ color: colors.gold }}>{item.icon}</div>
                  {item.action ? (
                    <button
                      onClick={item.action}
                      className="text-sm hover:underline transition-all duration-200 cursor-pointer"
                      style={{ 
                        color: colors.lightGray,
                        direction: item.type === 'phone' ? 'ltr' : 'rtl',
                        textAlign: item.type === 'phone' ? 'left' : 'right'
                      }}
                    >
                      {item.info}
                    </button>
                  ) : (
                    <span style={{ color: colors.lightGray }} className="text-sm">
                      {item.info}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Divider */}
        <div className="h-px w-full my-8" style={{ backgroundColor: `${colors.darkGray}` }} />
        
        {/* Footer bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Copyright */}
          <div style={{ color: colors.lightGray }}>
            &copy; {currentYear} Core Digital  360. جميع الحقوق محفوظة.
          </div>
          
          {/* Social media links */}
          <div className="flex gap-4">
            {socialMedia.map((item, index) => (
              <a 
                key={index}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                style={{ backgroundColor: `${colors.darkGold}30` }}
                aria-label={`تابعنا على ${item.name}`}
              >
                <div style={{ color: colors.gold }}>{item.icon}</div>
              </a>
            ))}
          </div>
          
          {/* Scroll to top button */}
          <button 
            onClick={scrollToTop}
            className="p-3 rounded-full transition-all duration-300 hover:scale-110"
            style={{ backgroundColor: colors.darkGold }}
            aria-label="العودة إلى الأعلى"
          >
            <ArrowUp size={20} style={{ color: colors.black }} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;