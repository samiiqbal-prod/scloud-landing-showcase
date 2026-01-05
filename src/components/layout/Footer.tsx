import scloudLogo from "@/assets/scloud-logo.png";

const footerLinks = {
  Legal: ["Privacy Policy", "Cookie Policy", "Compliance"]
};

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border">
      <div className="container px-4 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <img src={scloudLogo} alt="SCloud" className="h-10 w-auto" />
            </div>
            <p className="text-muted-foreground max-w-sm">
              Enterprise-grade cloud infrastructure powered by our Tier-III certified data center.
            </p>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.Legal.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} SCloud. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-2 text-sm text-muted-foreground">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              All Systems Operational
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;