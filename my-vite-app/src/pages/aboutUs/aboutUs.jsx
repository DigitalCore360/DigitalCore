import React from 'react';
import { Users, Target, Award, Shield, Zap, TrendingUp, MapPin, Heart } from 'lucide-react';
import img from '../../assets/logo.jpg'; // Adjust the path as necessary
import {Link} from 'react-router-dom';
const AboutUsPage = () => {
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

  // Company core values
  const coreValues = [
    {
      icon: <Target size={32} strokeWidth={1.5} />,
      title: "التميز",
      description: "نسعى لتقديم أعلى مستويات الجودة في كل مشروع مع أحدث التقنيات."
    },
    {
      icon: <Shield size={32} strokeWidth={1.5} />,
      title: "الثقة",
      description: "نبني علاقات طويلة مع عملائنا على أساس الشفافية والالتزام."
    },
    {
      icon: <Zap size={32} strokeWidth={1.5} />,
      title: "الإبداع",
      description: "نؤمن بأن الإبداع هو أساس النجاح ونبتكر حلول فريدة."
    },
    {
      icon: <TrendingUp size={32} strokeWidth={1.5} />,
      title: "التطوير المستمر",
      description: "نحرص على التعلم ومواكبة أحدث التقنيات والاتجاهات."
    }
  ];

  // Company journey highlights
  const highlights = [
    {
      icon: <Heart size={32} strokeWidth={1.5} />,
      title: "البداية",
      description: "بدأنا كفريق شغوف بالتكنولوجيا وتطوير المواقع"
    },
    {
      icon: <Users size={32} strokeWidth={1.5} />,
      title: "نمو الفريق",
      description: "نمى فريقنا وتوسعت خبراتنا في مجالات رقمية متعددة"
    },
    {
      icon: <Award size={32} strokeWidth={1.5} />,
      title: "مشاريع ناجحة",
      description: "حققنا نجاحات مع عملاء من قطاعات مختلفة"
    },
    {
      icon: <TrendingUp size={32} strokeWidth={1.5} />,
      title: "التوسع والنمو",
      description: "نواصل التطور وإضافة خدمات جديدة لعملائنا"
    }
  ];

  return (
    <div className="w-full overflow-hidden bg-black" dir="rtl" style={{ backgroundColor: colors.black }}>
      {/* Hero section */}
      <div className="relative py-20" style={{ backgroundColor: colors.black }}>
        {/* Background decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <div className="absolute top-0 left-0 w-1/3 h-48 rounded-full opacity-10"
               style={{ 
                 backgroundColor: colors.gold,
                 filter: 'blur(80px)',
                 transform: 'translate(-20%, -50%)'
               }} />
          <div className="absolute bottom-0 right-0 w-1/3 h-48 rounded-full opacity-10"
               style={{ 
                 backgroundColor: colors.darkGold,
                 filter: 'blur(80px)',
                 transform: 'translate(20%, 50%)'
               }} />
        </div>
        
        <div className="max-w-6xl mx-auto px-4 relative">
          <div className="text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-6" style={{ color: colors.gold }}>
              من نحن
            </h1>
            <div className="h-1 w-24 mx-auto mb-8" style={{ background: `linear-gradient(90deg, transparent, ${colors.gold}, transparent)` }} />
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto" style={{ color: colors.cream }}>
              شركة متنامية في مجال الحلول الرقمية، نجمع بين الإبداع والتقنية لتحقيق نجاح عملائنا
            </p>
          </div>
        </div>
      </div>

      {/* Our Story Section */}
      <div style={{ backgroundColor: colors.darkGray }} className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Story image */}
            <div className="rounded-2xl overflow-hidden shadow-xl relative">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black opacity-40 z-10" />
              <img 
                src={img}
                alt="صورة قصة الشركة"
                className="w-full h-96 object-cover"
              />
              {/* Decorative elements */}
              <div className="absolute top-6 right-6 p-4 rounded-lg z-20" 
                   style={{ backgroundColor: `${colors.black}90` }}>
                <MapPin size={28} style={{ color: colors.gold }} />
                <p className="mt-2 text-sm font-medium" style={{ color: colors.cream }}>عمان، الأردن</p>
              </div>
            </div>
            
            {/* Story content */}
            <div>
              <h2 className="text-3xl font-bold mb-6 relative" style={{ color: colors.gold }}>
                قصتنا
                <span className="absolute bottom-0 right-0 w-16 h-1 mt-2" style={{ backgroundColor: colors.darkGold }} />
              </h2>
              <div className="space-y-6" style={{ color: colors.lightGray }}>
                <p className="text-lg">
                  Core Digital 360 هي شركة شابة ومتنامية تأسست على يد مجموعة من الخبراء الشغوفين بالتكنولوجيا والتسويق الرقمي، بهدف توفير حلول رقمية تساعد الشركات على النجاح.
                </p>
                <p>
                  بدأنا رحلتنا كفريق صغير متخصص في تطوير المواقع، ومع الوقت توسعنا لنقدم خدمات متكاملة تشمل تطبيقات الموبايل، التسويق الرقمي، وحلول التجارة الإلكترونية.
                </p>
                <p>
                  نحن نؤمن بقوة الابتكار والعمل الجماعي، ونسعى لبناء علاقات طويلة الأمد مع عملائنا من خلال تقديم خدمات عالية الجودة تحقق نتائج حقيقية.
                </p>
                <p className="font-semibold" style={{ color: colors.cream }}>
                  رؤيتنا هي أن نكون الشريك الرقمي المفضل للشركات التي تريد النمو والتميز، من خلال حلول مبتكرة تحقق نتائج ملموسة.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Core Values Section */}
      <div className="py-20" style={{ backgroundColor: colors.black }}>
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-6" style={{ color: colors.gold }}>
              قيمنا الأساسية
            </h2>
            <div className="h-1 w-24 mx-auto mb-8" style={{ background: `linear-gradient(90deg, transparent, ${colors.gold}, transparent)` }} />
            <p className="text-lg max-w-3xl mx-auto" style={{ color: colors.cream }}>
              قيمنا تعكس هويتنا وتوجه قراراتنا في كل ما نقوم به
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((value, index) => (
              <div 
                key={index}
                className="p-8 rounded-xl text-center transition-all duration-300 hover:-translate-y-2"
                style={{ 
                  backgroundColor: `${colors.darkGray}80`,
                  borderTop: `3px solid ${colors.gold}`
                }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 mb-6 rounded-full"
                     style={{ backgroundColor: `${colors.darkGold}30` }}>
                  <div style={{ color: colors.gold }}>{value.icon}</div>
                </div>
                <h3 className="text-xl font-bold mb-4" style={{ color: colors.lightGold }}>
                  {value.title}
                </h3>
                <p style={{ color: colors.cream }}>
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Our Journey Highlights */}
      <div className="py-20" style={{ backgroundColor: colors.darkGray }}>
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-6" style={{ color: colors.gold }}>
              رحلتنا
            </h2>
            <div className="h-1 w-24 mx-auto mb-8" style={{ background: `linear-gradient(90deg, transparent, ${colors.gold}, transparent)` }} />
            <p className="text-lg max-w-3xl mx-auto" style={{ color: colors.cream }}>
              قصة نمو وتطور مستمر نحو تحقيق أهدافنا
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {highlights.map((highlight, index) => (
              <div 
                key={index}
                className="p-6 rounded-xl text-center transition-all duration-300 hover:-translate-y-2"
                style={{ 
                  backgroundColor: `${colors.black}60`,
                  border: `1px solid ${colors.darkGold}40`
                }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 mb-6 rounded-full"
                     style={{ backgroundColor: `${colors.darkGold}30` }}>
                  <div style={{ color: colors.gold }}>{highlight.icon}</div>
                </div>
                <h3 className="text-xl font-bold mb-4" style={{ color: colors.lightGold }}>
                  {highlight.title}
                </h3>
                <p style={{ color: colors.cream }}>
                  {highlight.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="py-20" style={{ backgroundColor: colors.black }}>
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-6" style={{ color: colors.gold }}>
              لماذا تختارنا؟
            </h2>
            <div className="h-1 w-24 mx-auto mb-8" style={{ background: `linear-gradient(90deg, transparent, ${colors.gold}, transparent)` }} />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div 
              className="p-6 rounded-xl text-center"
              style={{ 
                backgroundColor: `${colors.darkGray}80`,
                border: `1px solid ${colors.darkGold}40`
              }}
            >
              <h3 className="text-xl font-bold mb-4" style={{ color: colors.lightGold }}>
                فريق شاب ومتحمس
              </h3>
              <p style={{ color: colors.cream }}>
                نحن فريق من المحترفين الشباب المتحمسين للتكنولوجيا والابتكار
              </p>
            </div>
            
            <div 
              className="p-6 rounded-xl text-center"
              style={{ 
                backgroundColor: `${colors.darkGray}80`,
                border: `1px solid ${colors.darkGold}40`
              }}
            >
              <h3 className="text-xl font-bold mb-4" style={{ color: colors.lightGold }}>
                أسعار تنافسية
              </h3>
              <p style={{ color: colors.cream }}>
                نقدم حلول عالية الجودة بأسعار مناسبة للشركات الناشئة والمتوسطة
              </p>
            </div>
            
            <div 
              className="p-6 rounded-xl text-center"
              style={{ 
                backgroundColor: `${colors.darkGray}80`,
                border: `1px solid ${colors.darkGold}40`
              }}
            >
              <h3 className="text-xl font-bold mb-4" style={{ color: colors.lightGold }}>
                تواصل مباشر
              </h3>
              <p style={{ color: colors.cream }}>
                تواصل مباشر مع فريق العمل ومتابعة مستمرة لتقدم مشروعك
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Call to Action */}
      <div className="py-16 text-center" style={{ backgroundColor: colors.darkGray }}>
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6" style={{ color: colors.gold }}>
            انضم إلى قائمة عملائنا
          </h2>
          <p className="text-lg mb-8" style={{ color: colors.cream }}>
            دعنا نساعدك في تحقيق أهدافك الرقمية وتحويل أفكارك إلى واقع
          </p>
          <Link to="/contactUs">
          <button 
            className="px-8 py-4 rounded-lg font-medium text-lg transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
            style={{ 
              background: `linear-gradient(45deg, ${colors.darkGold}, ${colors.gold})`,
              color: colors.black
            }}
          >
            تواصل معنا اليوم
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;