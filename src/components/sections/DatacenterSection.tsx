import { motion } from "framer-motion";
import { Battery, Shield, Thermometer, Activity } from "lucide-react";

const highlights = [
  {
    icon: Battery,
    title: "Redundant Power",
    description: "N+1 UPS systems with backup generators",
    status: "Active",
  },
  {
    icon: Thermometer,
    title: "Climate Control",
    description: "Precision cooling with redundancy",
    status: "Optimal",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "24/7 physical and cyber security",
    status: "Secured",
  },
  {
    icon: Activity,
    title: "99.982% Uptime",
    description: "Industry-leading availability guarantee",
    status: "Online",
  },
];

const DatacenterSection = () => {
  return (
    <section className="py-24 lg:py-32 bg-gradient-subtle relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-primary/5 to-transparent" />
      </div>

      <div className="container relative z-10 px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Infrastructure
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6">
              Tier-III Certified.{" "}
              <span className="text-gradient">Always Online.</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Our state-of-the-art data center is designed for maximum reliability, 
              with multiple layers of redundancy ensuring your services never go down.
            </p>

            {/* Highlights Grid */}
            <div className="grid sm:grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-card p-5 rounded-xl border border-border hover:border-primary/30 transition-colors group"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <item.icon className="w-5 h-5 text-primary" strokeWidth={1.5} />
                    </div>
                    <span className="flex items-center gap-1.5 text-xs font-medium text-primary">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse-glow" />
                      {item.status}
                    </span>
                  </div>
                  <h4 className="font-semibold text-foreground mb-1">{item.title}</h4>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Visual - Server Rack Illustration */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="bg-foreground/5 rounded-3xl p-8 lg:p-12 relative overflow-hidden">
              {/* Server rack visual */}
              <div className="space-y-3">
                {[...Array(6)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.1 * i }}
                    className="bg-card rounded-xl p-4 border border-border flex items-center gap-4"
                  >
                    <div className="flex gap-1.5">
                      {[...Array(3)].map((_, j) => (
                        <motion.div
                          key={j}
                          className="w-2 h-2 rounded-full bg-primary"
                          animate={{ opacity: [1, 0.4, 1] }}
                          transition={{
                            duration: 1.5 + j * 0.3,
                            repeat: Infinity,
                            delay: i * 0.2 + j * 0.1,
                          }}
                        />
                      ))}
                    </div>
                    <div className="flex-1 h-2 bg-secondary rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-hero rounded-full"
                        initial={{ width: "0%" }}
                        whileInView={{ width: `${60 + Math.random() * 35}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.5 + i * 0.1 }}
                      />
                    </div>
                    <span className="text-xs text-muted-foreground font-mono">
                      Node-{String(i + 1).padStart(2, "0")}
                    </span>
                  </motion.div>
                ))}
              </div>

              {/* Floating status badge */}
              <motion.div
                className="absolute -top-4 -right-4 bg-card px-4 py-2 rounded-full shadow-card border border-border flex items-center gap-2"
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse-glow" />
                <span className="text-sm font-medium text-foreground">Live Status</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DatacenterSection;
