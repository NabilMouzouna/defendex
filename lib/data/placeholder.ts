import heroImageUrl from "@/public/assets/HeroPreview.png"
export const placeholderData = {
  // NAVIGATION BAR
  companyName: "SHOGHI",
  navItems: [
    { label: "About", href: "/about"},
    { label: "Products", href: "/products", hasSubmenu: true },
    // { label: "Media Space", href: "/media-space" },
    // { label: "Careers", href: "/careers" },
    { label: "Support", href: "/support" },
    { label: "Reach Us", href: "/contact" },
  ],

  //HERO SECTION
  heroImageUrl,
  heroVideoUrl: "https://cdn.pixabay.com/video/2022/12/10/142363-780562112_large.mp4",
  heroTitle: "Empowering Intelligence-Driven Defense Systems",
  heroSubtitle: "Innovative solutions for integrated electronic defense technologies",

  //Domains & Solutions SECTION 
  presentationTitle: "Domains & Solutions",
  presentationDescription: "Shoghi is at the forefront of developing cutting-edge defense systems, platforms, and products tailored to meet the critical needs of national security and communication requirements across Land, Air, Water, and Underwater domains. Our specialization lies in creating innovative solutions in areas where technological advances can have a game-changing effect.",
  presentationVideoUrl: "https://cdn.pixabay.com/video/2019/10/10/27725-365890983_large.mp4",

  // Why Us SECTION
  whyUsContent: {
    title: "Why Us",
    description: "Around the world the Military, Defence forces and Intelligence agencies of more than seventy countries reach out for Shoghi when it comes to integrated electronic defense technologies, products and systems.",
    cards: [
      {
        title: "Our Vision",
        description: "Our goal is global recognition as a top provider of sustainable and innovative defense systems, offering advanced intelligence and security solutions tailored to our customers' needs.",
        icon: "Target",
      },
      {
        title: "Our Philosophy",
        description: "We prioritize national interests while serving globally, safeguarding India's sovereignty. Our products aim to protect civilians and combat terrorism worldwide.",
        icon: "Brain",
      },
      {
        title: "Business Ethics",
        description: "Shoghi upholds integrity, professionalism, and legal compliance. We prioritize respect, excellence, and ethical conduct, ensuring our products safeguard civilians while upholding human rights.",
        icon: "Scale",
      },
      {
        title: "Innovations",
        description: "Shoghi prioritizes innovation, dedicating 15% of revenue to R&D and fostering collaboration with academic and research institutions. This commitment ensures continuous technological advancement and maintains high-quality standards.",
        icon: "Lightbulb",
      },
    ],
  },

  // GLOBAL PRESENCE SECTION
  globalPresence: {
    title: "Global Presence",
    image : "https://placehold.jp/400x400.png",
    stats: [
      { value: "72+", label: "Countries Global Presence" },
      { value: "450+", label: "Satisfied Customers" },
      { value: "25+", label: "Years in Market Leadership" },
      { value: "1,470+", label: "Projects Executed" },
      { value: "135+", label: "Product Portfolio" },
    ],
  },

  //FOOTER SECTION
  footerAbout: "SHOGHI is a leading provider of intelligence-driven defense systems, dedicated to empowering global security through innovative technology.",
  footerLinks: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
    { label: "Careers", href: "/careers" },
  ],
  footerContact: {
    address: "123 Defense Avenue, Secure City, SC 10001",
    phone: "+1 (555) 123-4567",
    email: "info@shoghi.com",
  },
};