import Link from "next/link"
import { BookOpen, Youtube, Twitter, Github, Linkedin, Instagram } from "lucide-react"

const footerLinks = {
  platform: [
    { href: "/courses", label: "Courses" },
    { href: "/community", label: "Forum" },
    { href: "/about", label: "About Us" },
    { href: "/contact", label: "Contact" },
  ],
  categories: [
    { href: "/courses?category=engineering", label: "Engineering" },
    { href: "/courses?category=medical", label: "Medical" },
    { href: "/courses?category=boards", label: "Board Exams" },
    { href: "/courses?category=government", label: "Govt Exams" },
  ],
  resources: [
    { href: "#", label: "Blog" },
    { href: "#", label: "Tutorials" },
    { href: "#", label: "Documentation" },
    { href: "/faq", label: "FAQ" },
  ],
}

const socialLinks = [
  { href: "https://youtube.com", icon: Youtube, label: "YouTube" },
  { href: "https://twitter.com", icon: Twitter, label: "Twitter" },
  { href: "https://github.com", icon: Github, label: "GitHub" },
  { href: "https://linkedin.com", icon: Linkedin, label: "LinkedIn" },
  { href: "https://instagram.com", icon: Instagram, label: "Instagram" },
]

export function Footer() {
  return (
    <footer className="border-t border-glass-border bg-background/50">
      <div className="container mx-auto px-4 py-8 md:py-12">
        {/* Desktop: 5 column grid, Mobile: Brand + 3 columns */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand - Full width on mobile, 2 columns on desktop */}
          <div className="lg:col-span-2 mb-4 lg:mb-0">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-neon-blue to-neon-purple flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold gradient-text">EduLinkUp</span>
            </Link>
            <p className="text-muted-foreground mb-6 max-w-sm text-sm md:text-base">
              Your gateway to quality education. Learn coding, prepare for exams, and connect with a network of
              ambitious learners.
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon
                const getIconColor = (label: string) => {
                  switch (label) {
                    case 'YouTube':
                      return 'text-[#FF0000] hover:text-[#FF0000]/80'
                    case 'Twitter':
                      return 'text-[#1DA1F2] hover:text-[#1DA1F2]/80'
                    case 'GitHub':
                      return 'text-white hover:text-gray-300'
                    case 'LinkedIn':
                      return 'text-[#0A66C2] hover:text-[#0A66C2]/80'
                    case 'Instagram':
                      return 'text-[#E4405F] hover:text-[#E4405F]/80'
                    default:
                      return 'text-muted-foreground hover:text-neon-blue'
                  }
                }

                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-10 h-10 rounded-lg glass flex items-center justify-center hover:border-neon-blue/50 transition-all ${getIconColor(social.label)}`}
                    aria-label={social.label}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Links Grid - 3 columns on mobile, individual columns on desktop */}
          <div className="grid grid-cols-3 gap-6 lg:contents">
            {/* Platform Links */}
            <div>
              <h3 className="font-semibold text-foreground mb-3 md:mb-4 text-sm md:text-base">Platform</h3>
              <ul className="space-y-2 md:space-y-3">
                {footerLinks.platform.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-muted-foreground hover:text-neon-blue transition-colors text-xs md:text-sm">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Categories */}
            <div>
              <h3 className="font-semibold text-foreground mb-3 md:mb-4 text-sm md:text-base">Categories</h3>
              <ul className="space-y-2 md:space-y-3">
                {footerLinks.categories.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-muted-foreground hover:text-neon-blue transition-colors text-xs md:text-sm">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="font-semibold text-foreground mb-3 md:mb-4 text-sm md:text-base">Resources</h3>
              <ul className="space-y-2 md:space-y-3">
                {footerLinks.resources.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-muted-foreground hover:text-neon-blue transition-colors text-xs md:text-sm">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-glass-border mt-8 lg:mt-12 pt-6 lg:pt-8 flex flex-col lg:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-xs md:text-sm text-center lg:text-left">
            © {new Date().getFullYear()} EduLinkUp. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 lg:gap-6 text-xs md:text-sm">
            <Link href="/privacy" className="text-muted-foreground hover:text-foreground transition-colors whitespace-nowrap">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-muted-foreground hover:text-foreground transition-colors whitespace-nowrap">
              Terms of Service
            </Link>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-muted-foreground hover:text-red-500 transition-colors whitespace-nowrap"
            >
              <Youtube className="w-4 h-4" />
              YouTube Channel
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}