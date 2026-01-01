import { motion } from "framer-motion";
import { Cloud, Globe, Layers, Server, Shield, Zap } from "lucide-react";

const services = [
  {
    icon: Cloud,
    title: "Infrastructure as a Service",
    description: "Scalable virtual machines, storage, and networking with full control over your infrastructure.",
  },
  {
    icon: Globe,
    title: "High-Performance Web Hosting",
    description: "Lightning-fast hosting with global CDN, SSL, and automatic scaling for your web applications.",
  },
  {
    icon: Layers,
    title: "Scalable Cloud Resources",
    description: "Dynamically scale compute, memory, and storage based on your real-time demands.",
  },
];

const features = [
  { icon: Server, label: "Auto-scaling" },
  { icon: Shield, label: "DDoS Protection" },
  { icon: Zap, label: "SSD Storage" },
];

const ServicesSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" as const },
    },
  };

  return (
    <section className="py-24 lg:py-32 bg-background relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-glow" />
      </div>

      <div className="container relative z-10 px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Our Services
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6">
            Built for scale. Designed for{" "}
            <span className="text-gradient">reliability.</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Everything you need to deploy, manage, and scale your applications with confidence.
          </p>
        </motion.div>

        {/* Service Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-16"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={cardVariants}
              whileHover={{ 
                y: -8, 
                transition: { duration: 0.3 } 
              }}
              className="group relative bg-card p-8 rounded-2xl border border-border hover:border-primary/30 hover:shadow-card transition-all duration-300"
            >
              {/* Icon with animation */}
              <motion.div
                className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors"
                whileHover={{ scale: 1.05 }}
              >
                <service.icon className="w-7 h-7 text-primary" strokeWidth={1.5} />
              </motion.div>

              <h3 className="text-xl font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>

              {/* Hover glow effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-glow opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
            </motion.div>
          ))}
        </motion.div>

        {/* Feature badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-4"
        >
          {features.map((feature) => (
            <div
              key={feature.label}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-secondary text-secondary-foreground"
            >
              <feature.icon className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium">{feature.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
