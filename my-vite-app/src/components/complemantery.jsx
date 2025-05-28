import React, { useState } from 'react';
import { CheckCircle, BarChart2, Users, Award, ShieldCheck, Clock, Code, Server } from 'lucide-react';
import img from '../assets/2.png'
import img2 from '../assets/3.png'
import img3 from '../assets/4.png'
const ServicesSection = () => {
  // Colors from the previous document
  const colors = {
    lightGray: "#cccccc",
    gold: "#cbb26a",
    black: "#000000",
    lightGold: "#d8c690",
    darkGold: "#be9e44",
    darkGray: "#1a1a1a",
    cream: "#e5d9b6"
  };
  
  const [activeTab, setActiveTab] = useState(0);
  
  const serviceDetails = [
    {
      id: 0,
      title: "التسويق الرقمي",
      description: "نقدم استراتيجيات تسويقية متكاملة تعزز تواجدك على المنصات الرقمية وتزيد من وصولك لجمهورك المستهدف",
      features: [
        "إدارة منصات التواصل الاجتماعي",
        "حملات إعلانية مدفوعة",
        "تحسين محركات البحث SEO",
        "التسويق عبر البريد الإلكتروني",
        "إنشاء المحتوى الرقمي المتميز",
        "تحليل البيانات وتقارير الأداء",
        "اعلانات جوجل و يوتيوب",
      ],
      stats: [
        { icon: <BarChart2 size={20} />, value: "300%", label: "زيادة في الوصول" },
        { icon: <Users size={20} />, value: "200+", label: "عملاء ناجحين" },
        { icon: <Clock size={20} />, value: "5", label: "سنوات خبرة" }
      ],
      image: img
    },
    {
      id: 1,
      title: "تطوير المواقع",
      description: "نصمم ونطور مواقع ويب متميزة تجمع بين الجمال البصري والأداء القوي والتجربة السلسة للمستخدمين",
      features: [
        "تصميم مواقع متوافقة مع جميع الأجهزة",
        "تحسين تجربة المستخدم UX/UI",
        "منصات تجارة إلكترونية متكاملة",
        "لوحات تحكم مخصصة وسهلة الاستخدام",
        "تكامل مع أنظمة الدفع المحلية والعالمية",
        "أمان وحماية متقدمة للبيانات"
      ],
      stats: [
        { icon: <Code size={20} />, value: "100+", label: "موقع مطور" },
        { icon: <ShieldCheck size={20} />, value: "99.9%", label: "وقت التشغيل" },
        { icon: <Award size={20} />, value: "15+", label: "جائزة تصميم" }
      ],
      image: img2
    },
    {
      id: 2,
      title: "تطبيقات الموبايل",
      description: "نطور تطبيقات جوال احترافية متوافقة مع أنظمة iOS و Android بتقنيات متقدمة وتصاميم عصرية",
      features: [
        "تطبيقات أصلية لنظامي iOS و Android",
        "تطبيقات متعددة المنصات بتكلفة موحدة",
        "واجهات مستخدم سهلة وجذابة",
        "دعم للإشعارات الفورية والتزامن",
        "تكامل مع خدمات الخرائط والدفع",
        "دعم تقني مستمر وتحديثات دورية"
      ],
      stats: [
        { icon: <Server size={20} />, value: "50+", label: "تطبيق نشط" },
        { icon: <Users size={20} />, value: "500K+", label: "مستخدم" },
        { icon: <Award size={20} />, value: "4.8", label: "متوسط التقييم" }
      ],
      image: img3
    }
  ];

  // Background svg pattern for section
  const BackgroundPattern = () => (
    <svg className="absolute top-0 left-0 w-full h-full opacity-5" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M 0 10 L 40 10 M 10 0 L 10 40" stroke={colors.gold} strokeWidth="0.5" fill="none" />
        </pattern>
        <pattern id="dots" width="20" height="20" patternUnits="userSpaceOnUse">
          <circle cx="10" cy="10" r="1" fill={colors.lightGold} />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#grid)" />
      <rect width="100%" height="100%" fill="url(#dots)" />
    </svg>
  );

  return (
    <div className="relative w-full py-16 md:py-24 overflow-hidden" 
         style={{ backgroundColor: colors.darkGray }}>
      
      {/* Background pattern */}
      <BackgroundPattern />
      
      <div className="max-w-6xl mx-auto px-4 relative" dir="rtl">
        {/* Section heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: colors.gold }}>
            حلول رقمية متكاملة
          </h2>
          <div className="h-1 w-24 mx-auto mb-6" style={{ background: `linear-gradient(90deg, transparent, ${colors.gold}, transparent)` }} />
          <p className="text-lg max-w-3xl mx-auto" style={{ color: colors.cream }}>
            نقدم باقة شاملة من الخدمات الرقمية المصممة خصيصاً لتلبية احتياجات الأعمال المختلفة والارتقاء بها إلى آفاق جديدة
          </p>
        </div>
        
        {/* Tabs navigation */}
        <div className="flex flex-wrap justify-center mb-8 gap-2">
          {serviceDetails.map((service) => (
            <button
              key={service.id}
              onClick={() => setActiveTab(service.id)}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 cursor-pointer ${activeTab === service.id ? 'shadow-lg transform -translate-y-1' : 'opacity-70'}`}
              style={{ 
                backgroundColor: activeTab === service.id ? colors.darkGold : 'transparent',
                color: activeTab === service.id ? colors.black : colors.cream,
                border: activeTab === service.id ? 'none' : `2px solid ${colors.darkGold}`
              }}
            >
              {service.title}
            </button>
          ))}
        </div>
        
        {/* Content area */}
        {serviceDetails.map((service) => (
          <div 
            key={service.id}
            className={`transition-all duration-500 ${activeTab === service.id ? 'opacity-100' : 'opacity-0 hidden'}`}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              {/* Left side: Content */}
              <div>
                <h3 className="text-2xl font-bold mb-4" style={{ color: colors.lightGold }}>
                  {service.title}
                </h3>
                <p className="mb-6" style={{ color: colors.cream }}>
                  {service.description}
                </p>
                
                {/* Feature list */}
                <div className="mb-8">
                  <h4 className="text-lg font-semibold mb-4" style={{ color: colors.gold }}>
                    الميزات الرئيسية:
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {service.features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <CheckCircle size={18} style={{ color: colors.gold }} />
                        <span style={{ color: colors.lightGray }}>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Stats */}
                <div className="flex flex-wrap gap-6 justify-between mt-8">
                  {service.stats.map((stat, index) => (
                    <div key={index} className="flex flex-col items-center">
                      <div style={{ color: colors.gold }}>{stat.icon}</div>
                      <div className="text-2xl font-bold mt-2" style={{ color: colors.lightGold }}>{stat.value}</div>
                      <div className="text-sm" style={{ color: colors.cream }}>{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Right side: Visualization - FIXED IMAGE IMPLEMENTATION */}
              <div className="rounded-lg overflow-hidden relative group">
                {/* Image container */}
                <div className="w-full h-80 md:h-96 relative overflow-hidden rounded-lg">
                  {/* Actual image */}
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Overlay with gradient */}
                  <div 
                    className="absolute inset-0 opacity-40 transition-opacity group-hover:opacity-70" 
                    style={{ 
                      background: `linear-gradient(45deg, ${colors.black}, transparent)` 
                    }}
                  />
                  
                  {/* Service title overlay */}
                  <div className="absolute bottom-0 right-0 p-6">
                    <h3 className="text-3xl font-bold" style={{ color: colors.gold }}>{service.title}</h3>
                  </div>
                  
                  {/* Decorative elements */}
                  <div 
                    className="absolute top-4 left-4 w-16 h-16 rounded-full opacity-30"
                    style={{ backgroundColor: colors.gold }}
                  />
                  <div 
                    className="absolute bottom-4 right-4 w-24 h-24 rounded-full opacity-20"
                    style={{ backgroundColor: colors.darkGold }}
                  />
                </div>
              </div>
            </div>
            
            {/* CTA button */}
        
          </div>
        ))}
        
        {/* Divider */}
        <div className="mt-20 mb-16 h-px w-full max-w-4xl mx-auto" 
             style={{ background: `linear-gradient(90deg, transparent, ${colors.gold}50, transparent)` }} />
             
        {/* Client testimonials teaser */}
     
      </div>
    </div>
  );
};

export default ServicesSection;