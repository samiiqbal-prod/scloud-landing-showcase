import { Cloud } from "lucide-react";

const footerLinks = {
  Product: ["Features", "Pricing", "Documentation", "API Reference"],
  Company: ["About", "Blog", "Careers", "Press"],
  Resources: ["Community", "Support", "Status", "Terms of Service"],
  Legal: ["Privacy Policy", "Cookie Policy", "Compliance"],
};

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-16 lg:py-20">
      <div className="container px-4">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-8 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="/" className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-lg bg-gradient-hero flex items-center justify-center">
                <Cloud className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold">SCloud</span>
            </a>
            <p className="text-background/60 max-w-sm mb-6">
              Enterprise Cloud, Simplified. Built on Tier-III certified infrastructure 
              for maximum reliability and performance.
            </p>
            <div className="flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse-glow" />
              <span className="text-sm text-primary">All systems operational</span>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).slice(0, 3).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-semibold text-background mb-4">{category}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-background/60 hover:text-primary transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-background/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-background/60">
            © 2026 SCloud. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-sm text-background/60 hover:text-primary transition-colors">
              Privacy
            </a>
            <a href="#" className="text-sm text-background/60 hover:text-primary transition-colors">
              Terms
            </a>
            <a href="#" className="text-sm text-background/60 hover:text-primary transition-colors">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
