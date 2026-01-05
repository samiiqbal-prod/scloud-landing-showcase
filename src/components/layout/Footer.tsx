import scloudLogo from "@/assets/scloud-logo.png";

const footerLinks = {
  Legal: ["Privacy Policy", "Cookie Policy", "Compliance"],
};

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-16 lg:py-20">
      <div className="container px-4">
        <div className="grid lg:grid-cols-3 gap-12 lg:gap-8 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="/" className="flex items-center gap-2 mb-4">
              <img src={scloudLogo} alt="SCloud" className="h-12 w-auto" />
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

          {/* Legal Links */}
          <div>
            <h4 className="font-semibold text-background mb-4">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.Legal.map((link) => (
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
