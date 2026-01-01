import { motion } from "framer-motion";
import { Shield, Lock, Eye, FileCheck } from "lucide-react";

const securityFeatures = [
  {
    icon: Shield,
    title: "DDoS Protection",
    description: "Advanced threat mitigation at the network edge",
  },
  {
    icon: Lock,
    title: "End-to-End Encryption",
    description: "All data encrypted in transit and at rest",
  },
  {
    icon: Eye,
    title: "24/7 Monitoring",
    description: "Real-time threat detection and response",
  },
  {
    icon: FileCheck,
    title: "Compliance Ready",
    description: "SOC 2, GDPR, and HIPAA compliant infrastructure",
  },
];

const SecuritySection = () => {
  return (
    <section className="py-24 lg:py-32 bg-foreground relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10 px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary font-semibold text-sm uppercase tracking-wider"
          >
            Security First
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-background mt-4 mb-6"
          >
            Your data. Our{" "}
            <span className="text-primary">responsibility.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-background/70"
          >
            Enterprise-grade security measures to keep your applications and data protected at all times.
          </motion.p>
        </div>

        {/* Shield Animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-16"
        >
          <div className="relative">
            {/* Outer rings */}
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute inset-0 rounded-full border border-primary/20"
                style={{
                  width: `${150 + i * 60}px`,
                  height: `${150 + i * 60}px`,
                  left: `${-30 * i}px`,
                  top: `${-30 * i}px`,
                }}
                animate={{
                  scale: [1, 1.05, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: i * 0.3,
                }}
              />
            ))}
            
            {/* Center shield */}
            <motion.div
              className="w-24 h-24 bg-gradient-hero rounded-2xl flex items-center justify-center shadow-glow"
              animate={{
                boxShadow: [
                  "0 0 40px hsl(142, 71%, 45%, 0.25)",
                  "0 0 60px hsl(142, 71%, 45%, 0.4)",
                  "0 0 40px hsl(142, 71%, 45%, 0.25)",
                ],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Shield className="w-12 h-12 text-primary-foreground" strokeWidth={1.5} />
            </motion.div>
          </div>
        </motion.div>

        {/* Security Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {securityFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-background/5 backdrop-blur-sm border border-background/10 rounded-2xl p-6 text-center hover:bg-background/10 transition-colors group"
            >
              <div className="w-12 h-12 mx-auto rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-6 h-6 text-primary" strokeWidth={1.5} />
              </div>
              <h4 className="font-semibold text-background mb-2">{feature.title}</h4>
              <p className="text-sm text-background/60">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SecuritySection;
