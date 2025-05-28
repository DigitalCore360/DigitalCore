import React, { useEffect, useRef } from 'react';
import { ShieldCheck, Clock, Award, Zap, Users, Headphones, Sparkles, Globe } from 'lucide-react';

const WhyChooseUsSection = () => {
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
  
  // Counter animation references
  const counterRefs = useRef([]);
  const animatedRefs = useRef([false, false, false, false]);
  
  const reasons = [
    {
      icon: <Award strokeWidth={1.5} />,
      title: "فريق محترف",
      description: "نضم نخبة من الخبراء المتخصصين في مجالات البرمجة والتصميم والتسويق الرقمي"
    },
    {
      icon: <Zap strokeWidth={1.5} />,
      title: "حلول مبتكرة",
      description: "نستخدم أحدث التقنيات والاستراتيجيات لتقديم حلول إبداعية تتجاوز التوقعات"
    },
    {
      icon: <ShieldCheck strokeWidth={1.5} />,
      title: "جودة عالية",
      description: "نلتزم بأعلى معايير الجودة في تنفيذ المشاريع لضمان النتائج المثالية"
    },
    {
      icon: <Clock strokeWidth={1.5} />,
      title: "التزام بالمواعيد",
      description: "نحرص على تسليم المشاريع في الوقت المحدد دون تأخير للحفاظ على ثقة عملائنا"
    },
    {
      icon: <Users strokeWidth={1.5} />,
      title: "دعم العملاء",
      description: "نوفر دعمًا فنيًا متواصلًا ونستجيب لاستفسارات العملاء بسرعة واحترافية"
    },
    {
      icon: <Headphones strokeWidth={1.5} />,
      title: "خدمة ما بعد البيع",
      description: "نستمر في دعم مشاريعنا بعد التسليم لضمان استمرارية نجاحها وتطويرها"
    },
    {
      icon: <Sparkles strokeWidth={1.5} />,
      title: "تصاميم فريدة",
      description: "ننفذ تصاميم مخصصة وفريدة تعكس هوية علامتك التجارية وتميزها عن المنافسين"
    },
    {
      icon: <Globe strokeWidth={1.5} />,
      title: "خبرة عالمية",
      description: "نمتلك خبرة واسعة في العمل مع شركات محلية وعالمية في مختلف المجالات"
    }
  ];
  
  const stats = [
    { value: 250, label: "مشروع ناجح", suffix: "+" },
    { value: 95, label: "نسبة رضا العملاء", suffix: "%" },
    { value: 7, label: "سنوات خبرة", suffix: "" },
    { value: 24, label: "خدمة احترافية", suffix: "" }
  ];
  
  // Animation for stats counter when element is in viewport
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };
    
    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = parseInt(entry.target.dataset.index);
          if (!animatedRefs.current[index]) {
            animateCounter(index);
            animatedRefs.current[index] = true;
          }
        }
      });
    };
    
    const observer = new IntersectionObserver(observerCallback, observerOptions);
    
    counterRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });
    
    return () => {
      counterRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);
  
  const animateCounter = (index) => {
    const target = stats[index].value;
    const duration = 2000; // ms
    const frameDuration = 1000 / 60; // 60fps
    const totalFrames = Math.round(duration / frameDuration);
    let frame = 0;
    
    const counter = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;
      const currentValue = Math.ceil(progress * target);
      
      if (counterRefs.current[index]) {
        counterRefs.current[index].textContent = currentValue + stats[index].suffix;
      }
      
      if (frame === totalFrames) {
        clearInterval(counter);
      }
    }, frameDuration);
  };
  
  return (
    <div className="relative w-full py-20 overflow-hidden" style={{ backgroundColor: colors.black }}>
      {/* Background decoration */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <svg className="absolute inset-0 w-full h-full opacity-5" xmlns="http://www.w3.org/2000/svg">
          <pattern id="hexagons" width="60" height="104" patternUnits="userSpaceOnUse" patternTransform="scale(2)">
            <path fill="none" stroke={colors.gold} strokeWidth="0.5" d="M30 26L17.32 34V50L30 58L42.68 50V34L30 26Z" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#hexagons)" />
        </svg>
      </div>
      
      <div className="max-w-6xl mx-auto px-4 relative" dir="rtl">
        {/* Section heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: colors.gold }}>
            لماذا تختار Core Digital  360؟
          </h2>
          <div className="h-1 w-24 mx-auto mb-6" style={{ background: `linear-gradient(90deg, transparent, ${colors.gold}, transparent)` }} />
          <p className="text-lg max-w-3xl mx-auto" style={{ color: colors.cream }}>
            نحن نتميز بالجودة والابتكار والاحترافية في كل خدماتنا، ونسعى دائماً لتجاوز توقعات عملائنا
          </p>
        </div>
        
        {/* Stats counter section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div 
                className="inline-flex items-center justify-center w-20 h-20 mb-4 rounded-full"
                style={{ 
                  background: `conic-gradient(${colors.darkGold} 0deg, ${colors.gold} 180deg, ${colors.lightGold} 360deg)`,
                  boxShadow: `0 0 20px ${colors.darkGold}50`
                }}
              >
                <div className="w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold"
                     style={{ backgroundColor: colors.black, color: colors.lightGold }}>
                  <span 
                    ref={el => counterRefs.current[index] = el} 
                    data-index={index}
                  >
                    0{stat.suffix}
                  </span>
                </div>
              </div>
              <h3 className="text-lg font-semibold" style={{ color: colors.gold }}>{stat.label}</h3>
            </div>
          ))}
        </div>
        
        {/* Reasons grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {reasons.map((reason, index) => {
            // Calculate animation delay
            const delay = `${(index % 4) * 0.1}s`;
            
            return (
              <div
                key={index}
                className="p-6 rounded-lg border transition-all duration-500 hover:shadow-lg transform hover:-translate-y-1"
                style={{ 
                  borderColor: colors.darkGold,
                  backgroundColor: `${colors.darkGray}80`,
                  backdropFilter: 'blur(4px)',
                  animationDelay: delay
                }}
              >
                <div className="mb-4 p-3 inline-block rounded-full" 
                     style={{ background: `linear-gradient(135deg, ${colors.darkGold}, ${colors.gold})` }}>
                  <div style={{ color: colors.black }}>
                    {React.cloneElement(reason.icon, { size: 28 })}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3" style={{ color: colors.gold }}>
                  {reason.title}
                </h3>
                <p style={{ color: colors.cream }}>
                  {reason.description}
                </p>
              </div>
            );
          })}
        </div>
        
        {/* Client testimonial highlight */}
        <div className="relative mt-16 mb-8 p-8 rounded-lg text-center"
             style={{ 
               backgroundColor: `${colors.darkGray}90`,
               backdropFilter: 'blur(8px)',
               border: `1px solid ${colors.darkGold}`,
             }}>
          {/* Quote marks decoration */}
          <div className="absolute top-4 right-6 text-7xl opacity-20" style={{ color: colors.gold }}>"</div>
          <div className="absolute bottom-4 left-6 text-7xl opacity-20" style={{ color: colors.gold }}>"</div>
          
          <h3 className="text-2xl font-bold mb-6" style={{ color: colors.lightGold }}>
            ما يقوله عملاؤنا
          </h3>
          
          <p className="text-xl mb-8 max-w-3xl mx-auto italic" style={{ color: colors.cream }}>
            "تعاملنا مع فريق Core Digital 360 كان تجربة استثنائية. من البداية، أظهروا فهماً عميقاً لاحتياجات مشروعنا، وقدموا حلولاً مبتكرة ساهمت في نمو أعمالنا بشكل ملحوظ. أوصي بشدة بخدماتهم لكل من يبحث عن شريك رقمي محترف."
          </p>
          
          {/* Testimonial author */}
          <div className="flex items-center justify-center gap-4">
            <div className="w-12 h-12 rounded-full bg-gray-300" 
                 style={{ background: `linear-gradient(45deg, ${colors.darkGold}, ${colors.gold})` }} />
            <div className="text-right">
              <p className="font-bold" style={{ color: colors.gold }}>محمد العابدي</p>
              <p className="text-sm" style={{ color: colors.lightGray }}>المدير التنفيذي - شركة النجاح للتجارة</p>
            </div>
          </div>
        </div>
        
        {/* CTA section */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-6" style={{ color: colors.gold }}>
            جاهزون لبدء مشروعك الرقمي القادم؟
          </h3>
          <p className="text-lg mb-8 max-w-2xl mx-auto" style={{ color: colors.cream }}>
            تواصل معنا اليوم للحصول على استشارة مجانية وابدأ رحلة التحول الرقمي مع فريق من الخبراء
          </p>
     
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUsSection;