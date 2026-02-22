export type NavLink = {
  label: string;
  to: string;
};

export type SocialLink = {
  href: string;
  id: "facebook" | "twitter" | "linkedin" | "instagram";
  label: string;
};

export const BRAND_NAME = "Devora";
export const BRAND_TAGLINE = "EDUTECH SOLUTIONS";

export const MAIN_NAV_LINKS: NavLink[] = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Programs", to: "/programs" },
  { label: "Campaigns", to: "/campaigns" },
  { label: "Contact", to: "/contact" },
];

export const FOOTER_QUICK_LINKS: NavLink[] = [
  { label: "About Us", to: "/about" },
  { label: "Our Programs", to: "/programs" },
  { label: "Free Campaigns", to: "/campaigns" },
  { label: "Internship Batch", to: "/internship-registration" },
  { label: "Contact Support", to: "/contact" },
];

export const PROGRAM_LINKS: NavLink[] = [
  { label: "Java Full Stack", to: "/programs" },
  { label: "Core Java Mastery", to: "/programs" },
  { label: "Spring Boot & Microservices", to: "/programs" },
  { label: "DevOps Tools", to: "/programs" },
  { label: "Live Projects", to: "/programs" },
];

export const SOCIAL_LINKS: SocialLink[] = [
  { href: "#", id: "facebook", label: "Facebook" },
  { href: "#", id: "twitter", label: "Twitter" },
  { href: "#", id: "linkedin", label: "LinkedIn" },
  { href: "#", id: "instagram", label: "Instagram" },
];

export const CONTACT_DETAILS = {
  addressLine1: "123 Tech Park, Innovation Hub,",
  addressLine2: "Silicon Valley, CA 94025",
  admissionsEmail: "admissions@javatech.edu",
  partnershipsEmail: "partnerships@javatech.edu",
  phone: "+1 (555) 123-4567",
  supportEmail: "support@javatech.edu",
} as const;
