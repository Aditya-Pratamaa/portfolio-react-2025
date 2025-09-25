// Skills.jsx
import React from "react";
import { motion } from "framer-motion";

const skillsData = [
  {
    category: "Software Development",
    items: [
      { name: "HTML", icon: "https://img.icons8.com/color/48/000000/html-5.png" },
      { name: "CSS", icon: "https://img.icons8.com/color/48/000000/css3.png" },
      { name: "JS", icon: "https://img.icons8.com/color/48/000000/javascript.png" },
      { name: "PHP", icon: "https://img.icons8.com/officel/48/000000/php-logo.png" },
      { name: "Codeigniter", icon: "https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/48/000000/external-codeigniter-a-fully-featured-php-framework-tal-revivo-shadow-tal-revivo.png" },
      { name: "Bootstrap", icon: "https://img.icons8.com/color/48/000000/bootstrap.png" },
      { name: "Wordpress", icon: "https://img.icons8.com/color/48/000000/wordpress.png" },
      { name: "MySQL", icon: "https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/48/000000/external-mysql-logo-and-tagline-for-mysql-database-sql-tal-revivo-shadow-tal-revivo.png" },
      { name: "UML", icon: "https://img.icons8.com/ios-filled/48/000000/uml.png" },
      { name: "SDLC", icon: "https://img.icons8.com/ios-filled/48/000000/software-development.png" },
      { name: "JMeter", icon: "https://img.icons8.com/ios-filled/48/000000/apache-jmeter.png" },
      { name: "VS Code", icon: "https://img.icons8.com/color/48/000000/visual-studio-code-2019.png" },
    ],
  },
  {
    category: "Deployment & Infrastructure",
    items: [
      { name: "Linux", icon: "https://img.icons8.com/color/48/000000/linux.png" },
      { name: "Ubuntu", icon: "https://img.icons8.com/color/48/000000/ubuntu.png" },
      { name: "Bash", icon: "https://img.icons8.com/ios-filled/48/000000/bash.png" },
      { name: "Git", icon: "https://img.icons8.com/color/48/000000/git.png" },
      { name: "Github", icon: "https://img.icons8.com/glyph-neue/48/000000/github.png" },
      { name: "Grafana", icon: "https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/48/000000/external-grafana-a-popular-open-source-dashboard-and-monitoring-tool-for-visualizing-time-series-data-tal-revivo-shadow-tal-revivo.png" },
      { name: "Prometheus", icon: "https://img.icons8.com/color/48/000000/prometheus.png" },
      { name: "Cloudflare", icon: "https://img.icons8.com/color/48/000000/cloudflare.png" },
      { name: "Docker", icon: "https://img.icons8.com/color/48/000000/docker.png" },
      { name: "Nginx", icon: "https://img.icons8.com/color/48/000000/nginx.png" },
    ],
  },
];

const SkillsSection = () => {
  return (
    <div className="bg-[#fdfaf6] py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl text-gray-800 font-semibold tracking-wide mb-12 relative inline-block"
        >
          Skills & Tools
          <span className="block w-32 h-[2px] bg-gray-300 mx-auto mt-2"></span>
        </motion.h2>

        {/* Categories */}
        {skillsData.map((category, catIndex) => (
          <div key={catIndex} className="mb-16">
            {/* Grid */}
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-6 justify-items-center mb-8">
              {category.items.map((skill, skillIndex) => (
                <motion.div
                  key={skillIndex}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{
                    duration: 0.5,
                    delay: skillIndex * 0.05 + catIndex * 0.2,
                  }}
                  className="flex flex-col items-center justify-center w-24 h-24 rounded-xl border border-gray-300 bg-white shadow-sm hover:shadow-md transition cursor-pointer"
                >
                  <img src={skill.icon} alt={skill.name} className="w-10 h-10 mb-2" />
                  <p className="text-gray-700 text-xs font-medium">{skill.name}</p>
                </motion.div>
              ))}
            </div>

            {/* Category Label */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
              className="inline-block px-6 py-2 rounded-full border border-gray-300 bg-white text-gray-700 text-sm font-medium"
            >
              {category.category}
            </motion.div>
          </div>
        ))}

        {/* Footer */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-gray-600 text-lg mt-16 relative inline-block"
        >
          Next, enjoy my project
          <span className="block w-32 h-[2px] bg-gray-300 mx-auto mt-2"></span>
        </motion.p>
      </div>
    </div>
  );
};

export default SkillsSection;
