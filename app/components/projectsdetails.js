"use client";
import { FaCheck } from "react-icons/fa";
import { Image } from "next/image";

const portfolioItems = [
  {
    title: "Psychiatric Services — Psychiatrist in Dubai",
    subtitle: "Compassionate, confidential, and personalized mental-health support",
    image: "/images/psychiatrist.png",  // placeholder image
    images: [
      "/images/psychiatrist.png"
    ],
    client: "Bright Ideas",
    category: "Healthcare Website",
    timeframe: "August 2025",
    description:
      "A professional psychiatric services website based in Dubai offering a wide range of mental-health treatments such as CBT, psychotherapy, mood disorders treatment, anxiety & depression therapies, ADHD support, and more. Designed to connect users with trusted psychiatrists and confidential care.",
    points: [
      "Clear mission: emphasises compassionate, confidential care and emotional well-being support. :contentReference[oaicite:0]{index=0}",
      "Offers specialized services including CBT, psychotherapy, mood-disorders treatment, depression therapy, anxiety treatment, ADHD treatment, personality- and trauma-based therapies. :contentReference[oaicite:1]{index=1}",
      "Highlights expert psychiatrists like Dr. Mohammad Abu Al-izz with 9+ years of international experience treating ADHD, anxiety, and child psychiatry. :contentReference[oaicite:2]{index=2}",
      "Emphasizes ease of connection: encourages booking consultations via phone or website contact form, making access to care streamlined. :contentReference[oaicite:3]{index=3}"
    ],
  icon: <FaCheck size={20} />,
},

  {
    title: "Enfield Royal Dental Clinic – Comprehensive Dental Care in Dubai",
    subtitle: "Advanced, confident smiles delivered with over 30 years of expertise",
    image: "/images/dental.png", // placeholder image path
    images: [
      "/images/dental.png"
    ],
    client: "DentalClinicDubai.ae (Enfield Royal Clinic)",
    category: "Dental & Healthcare Website",
    timeframe: "August 2025",
    description:
      "A full-service dental clinic website representing Enfield Royal Clinic in Dubai, Abu Dhabi, Pakistan, and Saudi Arabia. Showcases an extensive range of dental services—including general, cosmetic, orthodontic treatments—and emphasizes 30+ years of experience, advanced technology, and patient-centered care.",
    points: [
      "Over 30 years of experience, 99% client satisfaction, and a team of 60+ qualified doctors across multiple regions :contentReference[oaicite:0]{index=0}.",
    ],
    icon: <FaCheck size={20} />,
  },

  {
    title: "Dynamic Clinic – Cosmetic Excellence & Aesthetic Expertise in Islamabad",
    subtitle: "Personalized beauty solutions with advanced technology & expert care",
    image: "/images/dynamiclinicpk.png", // placeholder – replace with actual screenshot
    images: [
      "/images/dynamiclinicpk.png",
      "/images/dynamiclinicpk.png"
    ],
    client: "DynamicClinic.com.pk (Dynamic Clinic Islamabad)",
    category: "Cosmetic Healthcare Website",
    timeframe: "August 2025",
    description:
      "A comprehensive cosmetic and aesthetic clinic website based in Islamabad offering advanced surgical and non-surgical treatments—including skin rejuvenation, hydrafacial, laser therapies, fillers, cosmetic surgery, and hair transplants—with a personalized approach, modern facilities, and experienced practitioners.",
    points: [
      "State-of-the-art facility staffed by experienced cosmetic and plastic surgery experts, offering tailored treatments. :contentReference[oaicite:0]{index=0}",
      "Skin Rejuvenation treatments priced between PKR 15,000 – 25,000 per session. :contentReference[oaicite:1]{index=1}",
      "Face Rejuvenation (non-surgical) ranging from PKR 9,999 to PKR 249,999 depending on procedure (e.g., Botox, chemical peels, microneedling). :contentReference[oaicite:2]{index=2}",
      "Hydrafacial treatments: starting from PKR 8,000 to 14,000 with a 98% success rate and added benefits like free parking. :contentReference[oaicite:3]{index=3}",
      "Cosmetic (surgical & non-surgical) procedures—including facelift, rhinoplasty, fillers, liposuction, hair transplant—range from PKR 49,999 to 499,999 (e.g., facelift PKR 389,999; rhinoplasty PKR 139,999–209,999; hair transplant PKR 94,000–139,999). :contentReference[oaicite:4]{index=4}",
      "Laser treatments for acne scars cost between PKR 10,000 to 40,000; fractional CO₂ and carbon peel options available. :contentReference[oaicite:5]{index=5}",
      "Broad range of cosmetic injectables and dermal fillers (e.g., hyaluronic acid PKR 25,000–55,000 per ml; calcium hydroxylapatite ~PKR 56,000; body filler areas such as buttocks up to PKR 149,999). :contentReference[oaicite:6]{index=6}"
    ],
    icon: <FaCheck size={20} />,
  },

  {
    title: "Dynamic Clinic Dubai – Premier Aesthetic & Cosmetic Hub",
    subtitle: "Expert care since 2010 with board-certified surgeons & holistic aesthetic solutions",
    image: "/images/dynaimiclinic.png", // placeholder – replace with a homepage screenshot
    images: [
      "/images/dynaimiclinic.png"
    ],
    client: "DynamicClinic.com (Dynamic Aesthetic Clinic Dubai)",
    category: "Cosmetic & Healthcare Website (UAE)",
    timeframe: "August 2025",
    description:
      "A leading aesthetic clinic in Dubai and Sharjah offering a comprehensive range of surgical and non-surgical treatments, backed by 20 years of experience, thousands of satisfied patients, and board-certified professionals—all housed in a state-of-the-art facility on Sheikh Zayed Road.",
    points: [
      "Established in 2010, with 20 years of experience and over 7,324 happy customers, supported by 17 awards. ([turn0search0])",
      "Wide range of services: Cosmetic surgery (e.g., liposuction, rhinoplasty, facelift, tummy tuck), injectables, hair transplants, skincare, laser treatments, weight loss, and intimate surgeries. ([turn0search0])",
      "Clinic staffed by board-certified reconstructive & plastic surgeons, ensuring expert care and trustworthy patient relations. ([turn0search0])",
      "FUE hair transplant technique: less scarring, natural outcomes, suitable for most skin types; uses 0.80–1.0 mm punches and includes scalp/beard donor sites. ([turn0search3])",
      "Transparent messaging: mission to lift self-esteem and make beauty accessible; inviting environment and high-quality customer service. ([turn0search0])",
      "Location & contact: Office 101, Pinnacle Building, Sheikh Zayed Road, Al Barsha First, Dubai. Phone: +971 4 438 8504 / WhatsApp: +971 54 299 2160. ([turn0search1])",
      "Seasonal deals: Ramadan offers including lip fillers, skin boosters, HIFU, hydrafacial, chemical peels, weight-loss injections, and PRP treatments. ([turn0search2])",
      "Patient-centric policies: practicing respect, confidentiality, informed consent, and dignity; detailed patient rights and procedure transparency. ([turn0search11])"
    ],
    icon: <FaCheck size={20} />,
  },

   {
    title: "esibah – Online African Literature Publishing & Bookseller",
    subtitle: "“Where knowledge soars, the book takes shape”",
    image: "/images/esibah.png", // placeholder – replace with real screenshot
    images: [
      "/images/esibah.png",
    ],
    client: "esibah.com",
    category: "Publishing & Online Bookstore Website",
    timeframe: "August 2025",
    description:
      "esibah is a boutique online publishing house and bookstore that champions African literature and intercultural humanist values. It offers authors full editorial, publishing, and distribution support, while providing readers with access to diverse works rooted in Ubumuntu values.",
    points: [
      "Online bookstore specializing in African literature; motto: “Là où le savoir s’élève, les livres prennent forme.” ([turn0search0])",
      "Publishing branch (Éditions esibah) supports authors with manuscript evaluation, proofreading, cover design, layout, ISBN allocation, printing, and legal deposit. ([turn0search5])",
      "Committed to intercultural and humanist values of “Ubumuntu,” promoting works that uphold human dignity and truth across cultures. ([turn0search5])",
      "Provides purchase flexibility: online payment or in-person pickup, secure payment via PayPal or card, and delivery within 3–5 days with optional relay pickup. ([turn0search0])"
    ],
    icon: <FaCheck size={20} />,
   },

  {
    title: "Aesthetic Clinic Riyadh – Elite Aesthetic & Cosmetic Solutions",
    subtitle: "Board-certified experts delivering advanced and personalized aesthetic care",
    image: "/images/aesthetic.png", // placeholder — replace with actual screenshot
    images: [
      "/images/aesthetic.png"
    ],
    client: "AestheticClinicRiyadh.com",
    category: "Aesthetic Medicine & Cosmetic Surgery Website",
    timeframe: "August 2025",
    description:
      "A premium aesthetic clinic located in Riyadh, offering a wide spectrum of surgical, dermatological, dental, and cosmetic treatments delivered by board-certified specialists in a comfortable, tech-enabled environment.",
    points: [
      "Offers comprehensive treatments: hair transplants, breast and cosmetic/plastic surgeries, dermatology (skin care, laser treatments), dental services, injectables, weight-loss procedures, intimate and gynecological cosmetic treatments. :contentReference[oaicite:0]{index=0}",
      "Staffed by world-class, board-certified experts trained in top institutions globally; emphasis on skilled staff, warmth, and state-of-the-art equipment. :contentReference[oaicite:1]{index=1}",
      "Signature services include popular procedures like hair transplant, rhinoplasty, liposuction, Botox, PRP therapy, and laser treatments—all aiming for precision and patient comfort. :contentReference[oaicite:2]{index=2}",
      "Doctor profiles highlight professionals like Dr. Mohamad Sameer Alsalih (caring, expert dermatologist) and Dr. Nebras Sufian Al-Douri (dual specialist in Family & Aesthetic Medicine with 10+ years’ experience). :contentReference[oaicite:3]{index=3}",
      "Clinic location and contact: 6685 Wadi Alzarqa Street, An Nada, Riyadh 13317, Saudi Arabia. Phone: +966 59 108 7287 / Email: info@aestheticclinicriyadh.com. :contentReference[oaicite:4]{index=4}",
      "Offers a wide menu of aesthetic treatments (as per the Arabic site), including advanced laser services, injectables (Botox, fillers), microneedling, hydrafacial, face rejuvenation, intimate surgery, fat reduction, and more. :contentReference[oaicite:5]{index=5}"
    ],
    icon: <FaCheck size={20} />,
  },

  {
    title: "Hair Transplant Clinic Dubai – Advanced Hair & Eyelash Transplant Services",
    subtitle: "Expert care, transparent pricing, and tailored treatments in the heart of Dubai",
    image: "/images/hairtransplant.png", // placeholder — replace with actual screenshot
    images: [
      "/images/hairtransplant.png"
    ],
    client: "HairTransplantInDubai.ae",
    category: "Cosmetic & Hair Restoration Website",
    timeframe: "August 2025",
    description:
      "A specialized cosmetic website offering comprehensive hair restoration services in Dubai—including advanced hair and eyelash transplants—supported by highly qualified surgeons, cutting-edge technology, and transparent patient care.",
    points: [
      "Eyelash hair transplant starting from AED 3,999, with procedure duration of 2–3 hours, recovery in 7–10 days, and success rate over 87%. Results visible in 6–12 months, and return to work in just 3–7 days. :contentReference[oaicite:0]{index=0}",
      "Transparent pricing with no hidden fees; factors affecting cost include number of grafts, surgeon’s expertise, clinic reputation, and post-care services. :contentReference[oaicite:1]{index=1}",
      "Offers a range of treatments including FUT, FUE, Direct Hair Implant (DHI), and Robotic Hair Transplant techniques. :contentReference[oaicite:2]{index=2}",
      "Clinic located at Villa 1089, Al Wasl Road, Al Manara area, Dubai; open Sunday to Monday from 10 AM to 9 PM. :contentReference[oaicite:3]{index=3}",
      "Boasts 15+ years of collective team experience, 10+ seasoned doctors, and 1,000+ satisfied patients. :contentReference[oaicite:4]{index=4}"
    ],
    icon: <FaCheck size={20} />,
  },
 
{
    title: "SKN Cosmetics – Premier Cosmetic & Dermatology Clinic in Islamabad",
    subtitle: "Board-certified experts delivering personalized, advanced aesthetic treatments",
    image: "/images/skn.png", // placeholder – replace with actual screenshot(s)
    images: [
      "/images/skn.png"
    ],
    client: "SKN Cosmetics (skncosmetics.com)",
    category: "Cosmetic & Dermatology Healthcare Website",
    timeframe: "August 2025",
    description:
      "A leading cosmetic and dermatology clinic in Islamabad & Rawalpindi offering surgical and non-surgical treatments across skincare, anti-aging, hair restoration, injectables, and facial & laser therapies, all delivered by highly experienced, board-certified professionals in a modern, client-focused environment.",
    points: [
      "Offers a full spectrum of surgical (e.g., hair transplant, cosmetic surgery) and non-surgical (e.g., skincare, Botox, fillers) treatments. ([turn0search2], [turn0search3])",
      "Advanced facial and laser treatments (e.g., hydrafacial, chemical peels, microneedling, facials) for acne, aging, pigmentation, and dark circles tailored for Islamabad, Rawalpindi, and Pakistan. ([turn0search0], [turn0search6], [turn0search8])",
      "Well-known hair restoration services with board-certified Dr. Naveed Azhar (16+ years experience), offering FUE & FUT procedures (94,999–159,999 PKR) and results visible in 6–12 months. ([turn0search5])",
      "Comprehensive laser treatments including skin resurfacing, hair removal, pigmentation correction, tattoo removal, and more—non-invasive and long-lasting (4,999–15,000 PKR per session). ([turn0search11])",
      "Skin booster injectables (e.g., hyaluronic acid, PRP) for hydration, collagen, elasticity—20–35 min sessions; priced at 34,999–129,999 PKR. ([turn0search12])",
      "Anti-aging treatments featuring FDA-approved, non-surgical options like wrinkle reduction and skin tightening, with prices ranging from 19,999 to 50,000 PKR per session. ([turn0search16])"
    ],
  icon: <FaCheck size={20} />,
}

];

export default portfolioItems;
