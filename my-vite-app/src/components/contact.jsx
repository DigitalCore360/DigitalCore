import React from 'react';
import { MapPin, Phone, Mail, Clock, MessageCircle, ArrowRight, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const ContactSection = () => {
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

  // Real coordinates for Tla'a Al-Ali area in Amman, Jordan
  const location = {
    address: "دوار الواحة, تلاع العلي, عمان, الأردن",
    coordinates: "31.9539,35.8623", // Tla'a Al-Ali coordinates
    googleMapsUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3383.9864567319264!2d35.8671521!3d31.98838259999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151ca1006b562ca5%3A0x79ad28cb6354c35e!2sB.LABAN!5e0!3m2!1sen!2sjo!4v1747937397889!5m2!1sen!2sjo"
  };

  const contactInfoItems = [
    {
      icon: <Phone size={20} />,
      title: "اتصل بنا",
      details: [
        "+962 7 7639 9396",
      ],
      type: "phone"
    },
    {
      icon: <Mail size={20} />,
      title: "راسلنا",
      details: [
        "info@digitalcore360.com"
      ],
      type: "email"
    },
    {
      icon: <MapPin size={20} />,
      title: "زورنا",
      details: [
        "دوار الواحة, تلاع العلي",
        "عمان, الأردن"
      ],
      type: "address"
    },
    {
      icon: <Clock size={20} />,
      title: "ساعات العمل",
      details: [
        "الأحد - الخميس: 9:00 ص - 5:00 م",
        "الجمعة - السبت: مغلق"
      ],
      type: "hours"
    }
  ];

  const contactMethods = [
    {
      title: "ارسل بريد إلكتروني",
      description: "تواصل معنا عبر البريد الإلكتروني وسنرد عليك خلال 24 ساعة",
      buttonText: "ارسل بريد إلكتروني",
      icon: <Mail size={24} />,
      gradient: `linear-gradient(45deg, ${colors.darkGold}, ${colors.gold})`,
      action: () => window.open('mailto:info@digitalcore360.com', '_blank')
    },
    {
      title: "اتصل بنا",
      description: "تحدث مباشرةً مع فريقنا خلال ساعات العمل الرسمية",
      buttonText: "اتصل الآن",
      icon: <Phone size={24} />,
      gradient: `linear-gradient(45deg, ${colors.gold}, ${colors.lightGold})`,
      action: () => window.open('tel:+962780040481', '_blank')
    },
    {
      title: "زيارة مكتبنا",
      description: "نرحب بكم في مكتبنا للاجتماع بفريقنا وتقديم الاستشارة",
      buttonText: "احصل على الاتجاهات",
      icon: <MapPin size={24} />,
      gradient: `linear-gradient(45deg, ${colors.darkGold}, ${colors.lightGold})`,
      action: () => window.open(`https://maps.google.com/maps?q=${location.coordinates}&hl=ar`, '_blank')
    }
  ];

  const handleContactClick = (item, detail, index) => {
    if (item.type === 'phone') {
      window.open(`tel:${detail}`, '_blank');
    } else if (item.type === 'email') {
      window.open(`mailto:${detail}`, '_blank');
    }
  };

  return (
    <div className="relative w-full py-20 overflow-hidden" style={{ backgroundColor: colors.darkGray }}>
      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-0 left-0 w-64 h-64 rounded-full opacity-10"
          style={{ 
            backgroundColor: colors.darkGold,
            filter: 'blur(60px)',
            transform: 'translate(-30%, -30%)'
          }}
        />
        <div
          className="absolute bottom-0 right-0 w-96 h-96 rounded-full opacity-10"
          style={{ 
            backgroundColor: colors.gold,
            filter: 'blur(80px)',
            transform: 'translate(40%, 40%)'
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-4 relative" dir="rtl">
        {/* Section heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: colors.gold }}>
            تواصل معنا
          </h2>
          <div className="h-1 w-24 mx-auto mb-6" style={{ background: `linear-gradient(90deg, transparent, ${colors.gold}, transparent)` }} />
          <p className="text-lg max-w-3xl mx-auto" style={{ color: colors.cream }}>
            نحن هنا للإجابة على استفساراتك ومساعدتك في تحقيق أهدافك الرقمية. تواصل معنا اليوم للحصول على استشارة مجانية
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact methods */}
          <div>
            <div className="bg-opacity-30 p-8 rounded-xl shadow-xl relative overflow-hidden" 
                 style={{ backgroundColor: `${colors.black}80`, backdropFilter: 'blur(10px)' }}>
              
              {/* Contact title */}
              <h3 className="text-2xl font-bold mb-6" style={{ color: colors.lightGold }}>
                طرق التواصل المباشر
              </h3>
              
              {/* Contact methods */}
              <div className="space-y-6">
                {contactMethods.map((method, index) => (
                  <div key={index} className="flex flex-col p-6 rounded-lg transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1"
                       style={{ backgroundColor: `${colors.black}50`, borderRight: `3px solid ${colors.darkGold}` }}>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-3 rounded-full" style={{ background: method.gradient }}>
                        <div style={{ color: colors.black }}>{method.icon}</div>
                      </div>
                      <h4 className="text-xl font-bold" style={{ color: colors.gold }}>
                        {method.title}
                      </h4>
                    </div>
                    <p className="mb-4" style={{ color: colors.cream }}>{method.description}</p>
                    <button 
                      onClick={method.action}
                      className="self-start px-6 py-2 rounded-lg flex items-center gap-2 transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1 cursor-pointer"
                      style={{ 
                        background: method.gradient,
                        color: colors.black
                      }}>
                      {method.buttonText}
                      <ArrowRight size={16} />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Contact info and map */}
          <div className="flex flex-col gap-8">
            {/* Contact info cards */}
            <div className="grid grid-cols-1 gap-6">
              {contactInfoItems.map((item, index) => (
                <div 
                  key={index}
                  className="p-6 rounded-xl relative overflow-hidden transition-all duration-300 hover:shadow-lg"
                  style={{ 
                    backgroundColor: `${colors.black}60`,
                    backdropFilter: 'blur(8px)',
                    borderLeft: `2px solid ${colors.gold}`
                  }}
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-full flex-shrink-0" style={{ backgroundColor: `${colors.darkGold}40` }}>
                      <div style={{ color: colors.gold }}>
                        {item.icon}
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-lg font-semibold mb-2" style={{ color: colors.lightGold }}>
                        {item.title}
                      </h4>
                      {item.details.map((detail, idx) => (
                        <div key={idx} className="mb-1">
                          {(item.type === 'phone' || item.type === 'email') ? (
                            <button
                              onClick={() => handleContactClick(item, detail, idx)}
                              className="text-sm sm:text-base hover:underline transition-all duration-200 cursor-pointer text-left"
                              style={{ 
                                color: colors.cream,
                                direction: item.type === 'phone' ? 'ltr' : 'rtl',
                                display: 'block',
                                textAlign: item.type === 'phone' ? 'left' : 'right'
                              }}
                            >
                              {detail}
                            </button>
                          ) : (
                            <p className="text-sm sm:text-base" style={{ color: colors.cream }}>
                              {detail}
                            </p>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Interactive Google Map */}
            <div className="rounded-xl overflow-hidden shadow-lg relative h-80">
              <iframe
                src={location.googleMapsUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="موقع كور ديجيتال 360"
              />
              
              {/* Map overlay with company info */}
              <div 
                className="absolute top-4 right-4 p-3 rounded-lg shadow-lg max-w-xs"
                style={{ backgroundColor: `${colors.black}90`, backdropFilter: 'blur(10px)' }}
              >
                <div className="flex items-center gap-2 mb-2">
                  <div className="p-2 rounded-full" style={{ backgroundColor: colors.gold }}>
                    <MapPin size={16} color={colors.black} />
                  </div>
                  <h5 className="font-bold text-sm" style={{ color: colors.gold }}>
                    كور ديجيتال 360
                  </h5>
                </div>
                <p className="text-xs" style={{ color: colors.cream }}>
                  {location.address}
                </p>
              </div>
              
              {/* View larger map button */}
              <button 
                onClick={() => window.open(`https://maps.google.com/maps?q=${location.coordinates}&hl=ar`, '_blank')}
                className="absolute bottom-4 right-4 py-2 px-4 rounded flex items-center gap-2 text-sm font-medium transition-all duration-300 hover:shadow-lg cursor-pointer"
                style={{ backgroundColor: `${colors.black}90`, color: colors.cream }}
              >
                عرض الخريطة الكاملة
                <ArrowRight size={16} />
              </button>
            </div>
            
            {/* Social media links */}
            <div className="bg-opacity-20 p-6 rounded-xl" 
                 style={{ backgroundColor: `${colors.black}60`, backdropFilter: 'blur(5px)' }}>
              <h4 className="text-lg font-bold mb-4" style={{ color: colors.gold }}>
                تابعنا على وسائل التواصل الاجتماعي
              </h4>
              <div className="flex justify-center gap-4">
                {/* Social media icons with real functionality */}
                {[
                  { name: 'Facebook', icon: <Facebook size={20} />, url: 'https://www.facebook.com/share/16MYWWcYJg/', color: '#1877f2' },
                  { name: 'Twitter', icon: <Twitter size={20} />, url: 'https://x.com/CoreDigital360?t=W-MeJlbRB8oxnmkLGUxtYQ&s=09', color: '#1da1f2' },
                  { name: 'Instagram', icon: <Instagram size={20} />, url: 'https://www.instagram.com/coredigital360?igsh=MXQwNnE3MDQ3aW1uMw==', color: '#e4405f' },
                  { name: 'LinkedIn', icon: <Linkedin size={20} />, url: 'https://www.linkedin.com/company/core-digital-360/', color: '#0077b5' }
                ].map((platform, index) => (
                  <a 
                    key={index}
                    href={platform.url} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 flex items-center justify-center rounded-full transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1 hover:scale-110 group"
                    style={{ 
                      background: `linear-gradient(135deg, ${colors.darkGold}, ${colors.gold})`,
                      color: colors.black
                    }}
                    title={platform.name}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = platform.color;
                      e.currentTarget.style.color = 'white';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = `linear-gradient(135deg, ${colors.darkGold}, ${colors.gold})`;
                      e.currentTarget.style.color = colors.black;
                    }}
                  >
                    {platform.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;