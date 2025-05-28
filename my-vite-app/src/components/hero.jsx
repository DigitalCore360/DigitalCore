import React, { useState, useEffect, useRef } from 'react';
import { Smartphone, Globe, Megaphone, PlusCircle, ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import * as THREE from 'three';

const HeroSection = () => {
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
  
  const [activeIndex, setActiveIndex] = useState(0);
  const [animatingItems, setAnimatingItems] = useState([0, 1, 2]);
  const containerRef = useRef(null);
  const sceneRef = useRef(null);
  
  const services = [
    { 
      name: "التسويق الرقمي", 
      description: "استراتيجيات تسويقية متكاملة لتعزيز علامتك التجارية في العالم الرقمي",
      icon: <Megaphone strokeWidth={1.5} />,
      gradient: `linear-gradient(135deg, ${colors.darkGold}, ${colors.gold})`,
      modelType: 'megaphone' // For 3D representation
    },
    { 
      name: "تطوير المواقع", 
      description: "مواقع إلكترونية مخصصة تجمع بين التصميم المبتكر والوظائف المتقدمة",
      icon: <Globe strokeWidth={1.5} />,
      gradient: `linear-gradient(135deg, ${colors.darkGold}, ${colors.lightGold})`,
      modelType: 'globe' // For 3D representation
    },
    { 
      name: "تطبيقات الموبايل", 
      description: "تطبيقات ذكية متوافقة مع مختلف الأجهزة لتحسين تجربة المستخدم",
      icon: <Smartphone strokeWidth={1.5} />,
      gradient: `linear-gradient(135deg, ${colors.gold}, ${colors.lightGold})`,
      modelType: 'smartphone' // For 3D representation
    },
    { 
      name: "خدمات متكاملة", 
      description: "حلول مخصصة تلبي احتياجاتك وتحقق أهدافك التجارية",
      icon: <PlusCircle strokeWidth={1.5} />,
      gradient: `linear-gradient(135deg, ${colors.darkGold}, ${colors.gold})`,
      modelType: 'integration' // For 3D representation
    }
  ];

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % services.length);
  };

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + services.length) % services.length);
  };

  useEffect(() => {
    // Update animating items based on active index
    const newAnimatingItems = [];
    for (let i = 0; i < 3; i++) {
      newAnimatingItems.push((activeIndex + i) % services.length);
    }
    setAnimatingItems(newAnimatingItems);
    
    // Auto cycle
    const interval = setInterval(() => {
      handleNext();
    }, 6000);
    
    return () => clearInterval(interval);
  }, [activeIndex, services.length]);

  // THREE.js background animation
  useEffect(() => {
    if (!containerRef.current) return;
    
    // Initialize Three.js scene
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setClearColor(0x000000, 0);
    
    // Clear any existing canvas
    if (containerRef.current.querySelector('canvas')) {
      containerRef.current.querySelector('canvas').remove();
    }
    
    containerRef.current.appendChild(renderer.domElement);
    
    // Position camera
    camera.position.z = 30;
    
    // Create a central network hub representing the digital ecosystem
    const hubGeometry = new THREE.IcosahedronGeometry(4, 1);
    const hubMaterial = new THREE.MeshPhongMaterial({
      color: new THREE.Color(colors.darkGold),
      emissive: new THREE.Color(colors.gold),
      emissiveIntensity: 0.3,
      shininess: 70,
      transparent: true,
      opacity: 0.9,
      wireframe: true
    });
    
    const hub = new THREE.Mesh(hubGeometry, hubMaterial);
    scene.add(hub);
    
    // Create icons representing each service
    const serviceIcons = [];
    const serviceIconPositions = [
      new THREE.Vector3(-15, 8, 0),   // Digital marketing
      new THREE.Vector3(15, 8, 0),    // Web development
      new THREE.Vector3(0, -16, 0),   // Mobile apps
      new THREE.Vector3(0, 16, 0)     // Integrated services
    ];
    
    // Create service-specific icons
    services.forEach((service, idx) => {
      let geometry;
      
      // Create geometry based on service type
      switch(service.modelType) {
        case 'megaphone':
          // Digital marketing (Megaphone) - cone shape
          geometry = new THREE.ConeGeometry(1.2, 2.4, 8);
          break;
        
        case 'globe':
          // Web development (Globe) - sphere with wireframe
          geometry = new THREE.SphereGeometry(1.2, 16, 12);
          break;
          
        case 'smartphone':
          // Mobile apps (Smartphone) - roundedBox
          geometry = new THREE.BoxGeometry(1.2, 2, 0.2);
          break;
          
        case 'integration':
          // Integrated services (Plus) - octahedron
          geometry = new THREE.OctahedronGeometry(1.2);
          break;
          
        default:
          geometry = new THREE.SphereGeometry(1.2, 16, 12);
      }
      
      // Create material based on service color
      const serviceMaterial = new THREE.MeshPhongMaterial({
        color: new THREE.Color(colors.gold),
        emissive: new THREE.Color(colors.lightGold),
        emissiveIntensity: 0.2,
        shininess: 50,
        transparent: true,
        opacity: 0.85
      });
      
      const icon = new THREE.Mesh(geometry, serviceMaterial);
      icon.position.copy(serviceIconPositions[idx]);
      
      // Add a pulse effect ring around each icon
      const ringGeometry = new THREE.RingGeometry(1.8, 2, 32);
      const ringMaterial = new THREE.MeshBasicMaterial({
        color: new THREE.Color(colors.lightGold),
        transparent: true,
        opacity: 0.4,
        side: THREE.DoubleSide
      });
      
      const ring = new THREE.Mesh(ringGeometry, ringMaterial);
      
      // Adjust ring orientation to face camera
      if (service.modelType === 'megaphone' || service.modelType === 'smartphone') {
        ring.rotation.x = Math.PI / 2;
      }
      
      icon.add(ring);
      scene.add(icon);
      serviceIcons.push({ icon, ring, initialPos: serviceIconPositions[idx].clone() });
    });
    
    // Add connecting data lines between hub and service icons
    const linesMaterial = new THREE.LineBasicMaterial({
      color: new THREE.Color(colors.gold),
      transparent: true,
      opacity: 0.4
    });
    
    const dataLinesGroup = new THREE.Group();
    scene.add(dataLinesGroup);
    
    // Create connections between hub and each service icon
    serviceIcons.forEach(serviceObj => {
      const lineGeometry = new THREE.BufferGeometry();
      const positions = new Float32Array(6);
      
      // Start position (hub)
      positions[0] = 0;
      positions[1] = 0;
      positions[2] = 0;
      
      // End position (icon)
      positions[3] = serviceObj.icon.position.x;
      positions[4] = serviceObj.icon.position.y;
      positions[5] = serviceObj.icon.position.z;
      
      lineGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
      const line = new THREE.Line(lineGeometry, linesMaterial);
      dataLinesGroup.add(line);
      
      // Store reference to positions array for animation
      line.userData.positions = positions;
      line.userData.target = serviceObj.icon;
    });
    
    // Create data packets flowing along connection lines
    const dataPacketsGroup = new THREE.Group();
    scene.add(dataPacketsGroup);
    
    // Function to create data packets
    const createDataPacket = (targetIcon) => {
      const packetGeometry = new THREE.TetrahedronGeometry(0.4);
      const packetMaterial = new THREE.MeshPhongMaterial({
        color: new THREE.Color(colors.lightGold),
        emissive: new THREE.Color(colors.gold),
        transparent: true,
        opacity: 0.8
      });
      
      const packet = new THREE.Mesh(packetGeometry, packetMaterial);
      
      // Start at the hub
      packet.position.set(0, 0, 0);
      
      // Store target position and progress
      packet.userData = {
        target: targetIcon.position.clone(),
        progress: 0,
        speed: 0.01 + Math.random() * 0.02
      };
      
      dataPacketsGroup.add(packet);
      return packet;
    };
    
    // Create initial data packets
    const dataPackets = [];
    serviceIcons.forEach(serviceObj => {
      const packet = createDataPacket(serviceObj.icon);
      dataPackets.push(packet);
    });
    
    // Add ambient light
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
    scene.add(ambientLight);
    
    // Add point light to illuminate the hub
    const pointLight = new THREE.PointLight(colors.lightGold, 1, 50);
    pointLight.position.set(5, 5, 10);
    scene.add(pointLight);
    
    // Create background particles representing digital data
    const particlesGeometry = new THREE.BufferGeometry();
    const particleCount = 200;
    
    const posArray = new Float32Array(particleCount * 3);
    
    for (let i = 0; i < particleCount * 3; i += 3) {
      // Position
      posArray[i] = (Math.random() - 0.5) * 100;     // x
      posArray[i + 1] = (Math.random() - 0.5) * 100; // y
      posArray[i + 2] = (Math.random() - 0.5) * 100; // z
    }
    
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    
    // Material for particles
    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.2,
      sizeAttenuation: true,
      color: new THREE.Color(colors.cream),
      transparent: true,
      opacity: 0.6,
      blending: THREE.AdditiveBlending
    });
    
    // Create the particle system
    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesMesh);
    
    // Handle window resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    
    window.addEventListener('resize', handleResize);
    
    // Animation loop
    let mouseX = 0;
    let mouseY = 0;
    
    const handleMouseMove = (event) => {
      mouseX = (event.clientX / window.innerWidth) * 2 - 1;
      mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    // Timing variables for packet creation
    let lastPacketTime = Date.now();
    
    const animate = () => {
      requestAnimationFrame(animate);
      
      const time = Date.now() * 0.001;
      
      // Rotate hub
      hub.rotation.x += 0.005;
      hub.rotation.y += 0.005;
      
      // Animate service icons
      serviceIcons.forEach((serviceObj, idx) => {
        // Make icons hover slightly
        serviceObj.icon.position.y = serviceObj.initialPos.y + Math.sin(time + idx) * 0.3;
        
        // Rotate icons slowly
        serviceObj.icon.rotation.y += 0.01;
        
        // Pulse the rings
        if (serviceObj.ring) {
          serviceObj.ring.scale.x = 1 + Math.sin(time * 2 + idx) * 0.1;
          serviceObj.ring.scale.y = 1 + Math.sin(time * 2 + idx) * 0.1;
        }
      });
      
      // Update data lines to match current icon positions
      dataLinesGroup.children.forEach((line, idx) => {
        const positions = line.userData.positions;
        const targetIcon = line.userData.target;
        
        // Update endpoint of line to current icon position
        positions[3] = targetIcon.position.x;
        positions[4] = targetIcon.position.y;
        positions[5] = targetIcon.position.z;
        
        // Update line geometry
        line.geometry.attributes.position.needsUpdate = true;
      });
      
      // Create new data packets periodically
      if (Date.now() - lastPacketTime > 2000) {
        const randomService = serviceIcons[Math.floor(Math.random() * serviceIcons.length)];
        dataPackets.push(createDataPacket(randomService.icon));
        lastPacketTime = Date.now();
      }
      
      // Animate existing data packets
      dataPackets.forEach((packet, idx) => {
        packet.userData.progress += packet.userData.speed;
        
        if (packet.userData.progress >= 1) {
          // Remove packet when it reaches destination
          dataPacketsGroup.remove(packet);
          dataPackets.splice(idx, 1);
        } else {
          // Move packet along path
          packet.position.lerpVectors(
            new THREE.Vector3(0, 0, 0),
            packet.userData.target,
            packet.userData.progress
          );
          
          // Rotate packet
          packet.rotation.x += 0.05;
          packet.rotation.y += 0.05;
          
          // Pulse opacity
          packet.material.opacity = 0.8 - 0.3 * Math.sin(time * 10);
        }
      });
      
      // Update particle system with subtle movement
      particlesMesh.rotation.x += 0.0005;
      particlesMesh.rotation.y += 0.0005;
      
      // Add subtle camera motion based on mouse position
      camera.position.x += (mouseX * 2 - camera.position.x) * 0.05;
      camera.position.y += (-mouseY * 2 - camera.position.y) * 0.05;
      camera.lookAt(scene.position);
      
      renderer.render(scene, camera);
    };
    
    animate();
    sceneRef.current = { scene, renderer, camera };
    
    // Cleanup function
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      if (containerRef.current) {
        containerRef.current.removeChild(renderer.domElement);
      }
      scene.clear();
    };
  }, []);

  return (
    <div className="relative w-full overflow-hidden" style={{ backgroundColor: colors.black, minHeight: "90vh" }}>
      {/* THREE.js background canvas container */}
      <div 
        ref={containerRef} 
        className="absolute top-0 left-0 w-full h-full overflow-hidden z-0"
      />
      
      {/* Gradient overlay */}
      <div className="absolute top-0 left-0 w-full h-full z-1" 
           style={{ background: `radial-gradient(circle at 50% 50%, transparent 30%, ${colors.black}bb 70%, ${colors.black} 100%)` }} />

      <div className="max-w-6xl mx-auto px-4 py-16 md:py-24 relative z-10" dir="rtl">
        {/* Main heading with animated underline */}
        <div className="text-center mb-16">
          <h2 className="inline-block text-2xl font-semibold mb-2" style={{ color: colors.cream }}>مرحباً بك في</h2>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 relative" style={{ color: colors.gold }}>
Core Digital 360
            <div className="absolute h-1 w-24 right-1/2 transform translate-x-1/2 mt-2" 
                 style={{ background: colors.darkGold }}>
              <div className="absolute h-full animate-pulse w-full" 
                   style={{ background: `linear-gradient(90deg, transparent, ${colors.gold}, transparent)` }} />
            </div>
          </h1>
          <p className="text-xl max-w-3xl mx-auto" style={{ color: colors.lightGray }}>
            نحول رؤيتك الرقمية إلى واقع ملموس من خلال خدمات متكاملة مصممة خصيصاً لنجاح أعمالك
          </p>
        </div>
        
        {/* Hero content - Services in rotating 3D cards */}
        <div className="relative py-12">
          <h2 className="text-3xl font-bold mb-12 text-center relative" style={{ color: colors.lightGold }}>
            خدماتنا المتميزة
            <span className="absolute right-1/2 transform translate-x-1/2 bottom-0 mt-2 h-0.5 w-16"
                  style={{ background: `linear-gradient(90deg, transparent, ${colors.gold}, transparent)` }} />
          </h2>
          
          {/* Services 3D carousel */}
          <div className="relative h-96 mb-12">
            <div className="absolute w-full h-full flex items-center justify-center">
              {services.map((service, index) => {
                // Calculate position and animation for each card
                const isVisible = animatingItems.includes(index);
                const position = animatingItems.indexOf(index);
                let translate = 'scale(0.7) translateX(0)';
                let zIndex = 0;
                let opacity = 0;
                
                if (isVisible) {
                  if (position === 0) {
                    translate = 'scale(0.85) translateX(70%)';
                    zIndex = 1;
                    opacity = 0.7;
                  } else if (position === 1) {
                    translate = 'scale(1) translateX(0)';
                    zIndex = 3;
                    opacity = 1;
                  } else if (position === 2) {
                    translate = 'scale(0.85) translateX(-70%)';
                    zIndex = 1;
                    opacity = 0.7;
                  }
                }
                
                return (
                  <div 
                    key={index}
                    className={`absolute w-full max-w-md p-6 rounded-2xl shadow-lg transition-all duration-500 ${isVisible ? '' : 'pointer-events-none'}`}
                    style={{ 
                      transform: translate,
                      zIndex,
                      opacity,
                      backgroundColor: colors.darkGray,
                      borderTop: `2px solid ${colors.gold}`,
                      borderLeft: `1px solid ${colors.gold}`,
                      backdropFilter: 'blur(10px)',
                      background: `linear-gradient(145deg, ${colors.darkGray}dd, ${colors.black}ee)`
                    }}
                  >
                    <div className="flex items-start gap-6">
                      <div className="p-4 rounded-full" style={{ background: service.gradient }}>
                        <div className="text-black">
                          {React.cloneElement(service.icon, { size: 32 })}
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold mb-3" style={{ color: colors.gold }}>
                          {service.name}
                        </h3>
                        <p className="mb-4" style={{ color: colors.cream }}>
                          {service.description}
                        </p>
                     
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            
            {/* Navigation controls */}
            <div className="absolute top-1/2 right-0 transform -translate-y-1/2 z-10">
              <button 
                onClick={handlePrev}
                className="p-2 rounded-full shadow-lg opacity-70 hover:opacity-100 transition-opacity"
                style={{ backgroundColor: colors.darkGold }}
              >
                <ChevronRight size={24} color={colors.black} />
              </button>
            </div>
            <div className="absolute top-1/2 left-0 transform -translate-y-1/2 z-10">
              <button 
                onClick={handleNext}
                className="p-2 rounded-full shadow-lg opacity-70 hover:opacity-100 transition-opacity"
                style={{ backgroundColor: colors.darkGold }}
              >
                <ChevronLeft size={24} color={colors.black} />
              </button>
            </div>
          </div>
          
          {/* CTA Section */}
      
        </div>
      </div>
    </div>
  );
};

export default HeroSection;