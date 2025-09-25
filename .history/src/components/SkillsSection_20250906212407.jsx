import React from 'react';
import { motion } from 'framer-motion';

const skillsData = [
  {
    category: "Software Development",
    items: [
      { name: "HTML", icon: "<img src=\"https://img.icons8.com/color/48/000000/html-5.png\" alt=\"HTML\" />" },
      { name: "CSS", icon: "<img src=\"https://img.icons8.com/color/48/000000/css3.png\" alt=\"CSS\" />" },
      { name: "JS", icon: "<img src=\"https://img.icons8.com/color/48/000000/javascript.png\" alt=\"JavaScript\" />" },
      { name: "PHP", icon: "<img src=\"https://img.icons8.com/officel/48/000000/php-logo.png\" alt=\"PHP\" />" },
      { name: "Codeigniter", icon: "<img src=\"https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/48/000000/external-codeigniter-a-fully-featured-php-framework-tal-revivo-shadow-tal-revivo.png\" alt=\"Codeigniter\" />" },
      { name: "Bootstrap", icon: "<img src=\"https://img.icons8.com/color/48/000000/bootstrap.png\" alt=\"Bootstrap\" />" },
      { name: "Wordpress", icon: "<img src=\"https://img.icons8.com/color/48/000000/wordpress.png\" alt=\"Wordpress\" />" },
      { name: "MySQL", icon: "<img src=\"https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/48/000000/external-mysql-logo-and-tagline-for-mysql-database-sql-tal-revivo-shadow-tal-revivo.png\" alt=\"MySQL\" />" },
      { name: "UML", icon: "<img src=\"https://img.icons8.com/ios-filled/48/000000/uml.png\" alt=\"UML\" />" },
      { name: "SDLC", icon: "<img src=\"https://img.icons8.com/ios-filled/48/000000/software-development.png\" alt=\"SDLC\" />" },
      { name: "JMeter", icon: "<img src=\"https://img.icons8.com/ios-filled/48/000000/apache-jmeter.png\" alt=\"JMeter\" />" },
      { name: "VS Code", icon: "<img src=\"https://img.icons8.com/color/48/000000/visual-studio-code-2019.png\" alt=\"VS Code\" />" },
    ],
  },
  {
    category: "Deployment & Infrastructure",
    items: [
      { name: "Linux", icon: "<img src=\"https://img.icons8.com/color/48/000000/linux.png\" alt=\"Linux\" />" },
      { name: "Ubuntu", icon: "<img src=\"https://img.icons8.com/color/48/000000/ubuntu.png\" alt=\"Ubuntu\" />" },
      { name: "Bash", icon: "<img src=\"https://img.icons8.com/ios-filled/48/000000/bash.png\" alt=\"Bash\" />" },
      { name: "Git", icon: "<img src=\"https://img.icons8.com/color/48/000000/git.png\" alt=\"Git\" />" },
      { name: "Github", icon: "<img src=\"https://img.icons8.com/glyph-neue/48/000000/github.png\" alt=\"Github\" />" },
      { name: "Grafana", icon: "<img src=\"https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/48/000000/external-grafana-a-popular-open-source-dashboard-and-monitoring-tool-for-visualizing-time-series-data-tal-revivo-shadow-tal-revivo.png\" alt=\"Grafana\" />" },
      { name: "Prometheus", icon: "<img src=\"https://img.icons8.com/color/48/000000/prometheus.png\" alt=\"Prometheus\" />" },
      { name: "Cloudflare", icon: "<img src=\"https://img.icons8.com/color/48/000000/cloudflare.png\" alt=\"Cloudflare\" />" },
      { name: "Docker", icon: "<img src=\"https://img.icons8.com/color/48/000000/docker.png\" alt=\"Docker\" />" },
      { name: "Nginx", icon: "<img src=\"https://img.icons8.com/color/48/000000/nginx.png\" alt=\"Nginx\" />" },
    ],
  },
];

const SkillsSection = () => {
  return (
    <div className="bg-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg text-gray-800 tracking-wider mb-10 text-center relative flex items-center justify-center"
        >
          <span className="inline-block w-3 h-3 bg-black rounded-full mr-3"></span>
          Skills & Tools
          <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-24 h-0.5 bg-gray-400"></span>
        </motion.p>

        {skillsData.map((category, catIndex) => (
          <div key={catIndex} className="mb-12">
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10 gap-x-4 gap-y-8 justify-items-center mb-8">
              {category.items.map((skill, skillIndex) => (
                <motion.div
                  key={skillIndex}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: skillIndex * 0.05 + catIndex * 0.2 }}
                  whileHover={{ scale: 1.05, borderColor: "#D1D5DB" }}
                  className="flex flex-col items-center p-4 bg-white rounded-lg border border-gray-200 w-24 h-24 justify-center cursor-pointer"
                >
                  <div className="w-12 h-12 mb-2 flex items-center justify-center" dangerouslySetInnerHTML={{ __html: skill.icon }}></div>
                  <p className="text-gray-700 text-xs font-semibold">{skill.name}</p>
                </motion.div>
              ))}
            </div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: catIndex * 0.2 }}
              className="inline-block px-6 py-2 rounded-full border border-gray-300 text-gray-800 text-sm font-semibold mt-4"
            >
              {category.category}
            </motion.div>
          </div>
        ))}

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-gray-600 text-lg mt-12 tracking-wide relative flex items-center justify-center"
        >
          Next, enjoy my project
          <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-24 h-0.5 bg-gray-400"></span>
        </motion.p>
      </div>
    </div>
  );
};

export default SkillsSection;
