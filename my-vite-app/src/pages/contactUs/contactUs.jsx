import React from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Globe, 
  Instagram, 
  Twitter, 
  Facebook, 
  Linkedin,
  MessageSquare
} from 'lucide-react';
import img from '../../assets/logo.jpg'
const ContactUsPage = () => {
  // Colors from the document (matching the About Us page)
  const colors = {
    lightGray: "#cccccc",
    gold: "#cbb26a",
    black: "#000000",
    lightGold: "#d8c690",
    darkGold: "#be9e44",
    darkGray: "#1a1a1a",
    cream: "#e5d9b6"
  };

  // Contact information
  const contactInfo = [
    {
      icon: <Phone size={24} strokeWidth={1.5} />,
      title: "الهاتف",
      details: "+962 7 7639 9396",
      link: "tel:+962 7 7639 9396",
      type: "phone"
    },
    {
      icon: <Mail size={24} strokeWidth={1.5} />,
      title: "البريد الإلكتروني",
      details: "info@digitalcore360.com",
      link: "mailto:info@digitalcore360.com",
      type: "email"
    },
    {
      icon: <MapPin size={24} strokeWidth={1.5} />,
      title: "العنوان",
      details: "عمان، الأردن - شارع المدينة المنورة، مجمع الحسيني، الطابق الثالث",
      link: "https://maps.google.com/?q=Amman+Jordan",
      type: "address"
    },
    {
      icon: <Clock size={24} strokeWidth={1.5} />,
      title: "ساعات العمل",
      details: "الأحد - الخميس: 9:00 صباحاً - 5:00 مساءً",
      link: null,
      type: "hours"
    }
  ];

  // Social media links
  const socialLinks = [
    {
      name: "Facebook",
      icon: <Facebook size={20} strokeWidth={1.5} />,
      link: "https://www.facebook.com/share/16MYWWcYJg/"
    },
    {
      name: "Instagram",
      icon: <Instagram size={20} strokeWidth={1.5} />,
      link: "https://www.instagram.com/coredigital360?igsh=MXQwNnE3MDQ3aW1uMw=="
    },
    {
      name: "Twitter",
      icon: <Twitter size={20} strokeWidth={1.5} />,
      link: "https://x.com/CoreDigital360?t=W-MeJlbRB8oxnmkLGUxtYQ&s=09"
    },
    {
      name: "LinkedIn",
      icon: <Linkedin size={20} strokeWidth={1.5} />,
      link: "https://www.linkedin.com/company/core-digital-360/"
    }
  ];

  // FAQs
  const faqs = [
    {
      question: "ما هي خدمات تصميم وتطوير المواقع الإلكترونية التي تقدمونها؟",
      answer: "نقدم خدمات شاملة لتصميم وتطوير المواقع الإلكترونية بما في ذلك تصميم واجهات المستخدم، تطوير المواقع المتجاوبة، منصات التجارة الإلكترونية، ومواقع الشركات الاحترافية باستخدام أحدث التقنيات."
    },
    {
      question: "هل تقدمون خدمات تطوير تطبيقات الهاتف المحمول؟",
      answer: "نعم، نقدم خدمات تطوير تطبيقات الهاتف المحمول لأنظمة iOS و Android، بالإضافة إلى تطوير التطبيقات الهجينة التي تعمل على كلا النظامين."
    },
    {
      question: "كيف يمكنني طلب عرض سعر لمشروعي؟",
      answer: "يمكنك التواصل معنا عبر البريد الإلكتروني أو الهاتف، وسيقوم فريقنا بتحديد موعد لمناقشة متطلبات مشروعك وتقديم عرض سعر مناسب."
    },
    {
      question: "ما هي مدة تنفيذ مشروع تطوير موقع إلكتروني؟",
      answer: "تختلف مدة تنفيذ المشروع حسب حجمه وتعقيده، لكن بشكل عام تتراوح بين 2-8 أسابيع للمواقع الأساسية، و8-16 أسبوع للمشاريع الأكثر تعقيداً."
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
              تواصل معنا
            </h1>
            <div className="h-1 w-24 mx-auto mb-8" style={{ background: `linear-gradient(90deg, transparent, ${colors.gold}, transparent)` }} />
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto" style={{ color: colors.cream }}>
              نحن هنا للإجابة على أسئلتكم ومساعدتكم في تحقيق أهدافكم الرقمية
            </p>
          </div>
        </div>
      </div>

      {/* Contact Info Section */}
      <div style={{ backgroundColor: colors.darkGray }} className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
            {/* Map Image */}
            <div className="order-2 md:order-1">
              <div className="rounded-xl overflow-hidden shadow-xl mb-8">
                <img 
                  src={img} 
                  alt="موقعنا على الخريطة"
                  className="w-full h-64 object-cover"
                />
              </div>
              
              <div 
                className="p-6 rounded-xl relative"
                style={{ 
                  backgroundColor: `${colors.black}80`,
                  border: `1px solid ${colors.darkGold}40`
                }}
              >
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2" style={{ color: colors.lightGold }}>
                  <Globe size={24} strokeWidth={1.5} />
                  تواصل معنا عبر وسائل التواصل الاجتماعي
                </h3>
                
                <div className="flex flex-wrap gap-3 mt-4">
                  {socialLinks.map((social, index) => (
                    <a 
                      key={index} 
                      href={social.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-10 h-10 rounded-full transition-all duration-300 hover:scale-110"
                      style={{ 
                        backgroundColor: `${colors.darkGold}50`,
                        color: colors.gold
                      }}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>

       
              </div>
            </div>
            
            {/* Contact Details */}
            <div className="order-1 md:order-2">
              <h2 className="text-3xl font-bold mb-8 relative" style={{ color: colors.gold }}>
                معلومات الاتصال
                <span className="absolute bottom-0 right-0 w-16 h-1 mt-2" style={{ backgroundColor: colors.darkGold }} />
              </h2>

              <div className="space-y-8">
                {contactInfo.map((item, index) => (
                  <div 
                    key={index}
                    className="flex gap-6 p-6 rounded-xl transition-all duration-300 hover:-translate-y-1"
                    style={{ 
                      backgroundColor: `${colors.black}80`,
                      borderLeft: `3px solid ${colors.gold}`
                    }}
                  >
                    <div className="flex items-start justify-center rounded-full p-3"
                        style={{ backgroundColor: `${colors.darkGold}30` }}>
                      <div style={{ color: colors.gold }}>{item.icon}</div>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-2" style={{ color: colors.lightGold }}>
                        {item.title}
                      </h3>
                      {item.link ? (
                        <a 
                          href={item.link} 
                          className="transition-colors duration-300 hover:underline"
                          style={{ 
                            color: colors.cream,
                            direction: item.type === 'phone' ? 'ltr' : 'rtl',
                            textAlign: item.type === 'phone' ? 'left' : 'right',
                            display: 'block'
                          }}
                        >
                          {item.details}
                        </a>
                      ) : (
                        <p style={{ color: colors.cream }}>{item.details}</p>
                      )}
                    </div>
                  </div>
                ))}

                <div 
                  className="p-6 rounded-xl mt-8"
                  style={{ 
                    backgroundColor: `${colors.black}60`,
                    border: `1px solid ${colors.darkGold}40`
                  }}
                >
                  <p className="text-lg mb-4" style={{ color: colors.cream }}>
                    لطلب الخدمات أو الاستفسار، يمكنكم التواصل معنا عبر أي من وسائل الاتصال المذكورة أعلاه، وسيقوم فريقنا بالرد عليكم في أقرب وقت ممكن.
                  </p>
                  <div 
                    className="p-4 rounded-lg"
                    style={{ backgroundColor: `${colors.darkGold}20` }}
                  >
                    <p className="font-semibold" style={{ color: colors.gold }}>
                      نتطلع لسماع استفساراتكم ومساعدتكم في تحقيق رؤيتكم الرقمية!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQs Section */}
      <div className="py-20" style={{ backgroundColor: colors.black }}>
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-6" style={{ color: colors.gold }}>
              الأسئلة الشائعة
            </h2>
            <div className="h-1 w-24 mx-auto mb-8" style={{ background: `linear-gradient(90deg, transparent, ${colors.gold}, transparent)` }} />
            <p className="text-lg max-w-3xl mx-auto" style={{ color: colors.cream }}>
              إجابات على بعض الأسئلة المتكررة حول خدماتنا
            </p>
          </div>
          
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className="p-6 rounded-xl"
                style={{ 
                  backgroundColor: `${colors.darkGray}90`,
                  borderRight: `3px solid ${colors.gold}`
                }}
              >
                <h3 className="text-lg font-bold mb-3" style={{ color: colors.lightGold }}>
                  {faq.question}
                </h3>
                <p style={{ color: colors.cream }}>
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Call to Action */}
      <div className="py-16 text-center" style={{ backgroundColor: colors.darkGray }}>
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6" style={{ color: colors.gold }}>
            جاهزون لبدء مشروعك الرقمي؟
          </h2>
          <p className="text-lg mb-8" style={{ color: colors.cream }}>
            تواصل معنا اليوم لمناقشة كيف يمكننا مساعدتك في تحقيق أهدافك الرقمية
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+962780040481"
              className="px-8 py-4 rounded-lg font-medium text-lg transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center gap-2"
              style={{ 
                background: `linear-gradient(45deg, ${colors.darkGold}, ${colors.gold})`,
                color: colors.black
              }}
            >
              <Phone size={20} />
              اتصل بنا مباشرة
            </a>
            <a 
              href="mailto:info@digitalcore360.com"
              className="px-8 py-4 rounded-lg font-medium text-lg transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center gap-2"
              style={{ 
                backgroundColor: 'transparent',
                border: `2px solid ${colors.gold}`,
                color: colors.gold
              }}
            >
              <Mail size={20} />
              راسلنا عبر البريد
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsPage;