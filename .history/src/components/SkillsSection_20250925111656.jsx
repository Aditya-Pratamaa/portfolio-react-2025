import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const skillsData = [
  {
    category: "Software Development",
    items: [
      {
        name: "HTML",
        icon: '<img src="https://img.icons8.com/color/48/000000/html-5.png" alt="HTML" />',
      },
      {
        name: "CSS",
        icon: '<img src="https://img.icons8.com/color/48/000000/css3.png" alt="CSS" />',
      },
      {
        name: "JS",
        icon: '<img src="https://img.icons8.com/color/48/000000/javascript.png" alt="JavaScript" />',
      },
      {
        name: "PHP",
        icon: '<img src="https://img.icons8.com/officel/48/000000/php-logo.png" alt="PHP" />',
      },
      {
        name: "Bootstrap",
        icon: '<img src="https://img.icons8.com/color/48/000000/bootstrap.png" alt="Bootstrap" />',
      },
      {
        name: "Wordpress",
        icon: '<img src="https://img.icons8.com/color/48/000000/wordpress.png" alt="Wordpress" />',
      },
      {
        name: "MySQL",
        icon: '<img src="https://img.icons8.com/color/48/000000/mysql.png" alt="MySQL" />',
      },
      {
        name: "VS Code",
        icon: '<img src="https://img.icons8.com/color/48/000000/visual-studio-code-2019.png" alt="VS Code" />',
      },
    ],
  },
  {
    category: "Deployment & Infrastructure",
    items: [
      {
        name: "Git",
        icon: '<img src="https://img.icons8.com/color/48/000000/git.png" alt="Git" />',
      },
      {
        name: "Notion",
        icon: '<img src="https://upload.wikimedia.org/wikipedia/commons/e/e9/Notion-logo.svg" alt="Git" />',
      },
      {
        name: "Github",
        icon: '<img src="https://img.icons8.com/glyph-neue/48/000000/github.png" alt="Github" />',
      },
      {
        name: "Vercel",
        icon: '<img src="https://img.icons8.com/color/48/000000/vercel.png" alt="Vercel" />',
      },
      {
        name: "Netlify",
        icon: '<img src="https://img.icons8.com/color/48/000000/netlify.png" alt="Netlify" />',
      },
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
          className="text-xl text-gray-800 font-semibold tracking-wide mb-16 relative inline-block"
        >
          Skills & Tools
          <span className="block w-32 h-[2px] bg-gray-300 mx-auto mt-2"></span>
        </motion.h2>

        {/* 2 kolom utama */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {skillsData.map((category, catIndex) => (
            <div key={catIndex} className="flex flex-col items-center">
              {/* Grid skill per kategori */}
              <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-4 gap-4 justify-items-center mb-8">
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
                    whileHover={{ scale: 1.05, borderColor: "#D1D5DB" }}
                    className="flex flex-col items-center justify-center w-20 h-20 sm:w-24 sm:h-24 rounded-xl border border-gray-300 bg-white shadow-sm hover:shadow-md transition cursor-pointer"
                  >
                    <div
                      className="w-8 h-8 sm:w-10 sm:h-10 mb-2"
                      dangerouslySetInnerHTML={{ __html: skill.icon }}
                    ></div>
                    <p className="text-gray-700 text-xs font-medium text-center">
                      {skill.name}
                    </p>
                  </motion.div>
                ))}
              </div>

              {/* Label kategori */}
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
        </div>

        {/* Footer */}
        <Link href="/projects">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-gray-600 text-lg mt-16 relative inline-block cursor-pointer hover:text-gray-800"
          >
            Next, enjoy my project
            <span className="block w-32 h-[2px] bg-gray-300 mx-auto mt-2"></span>
          </motion.p>
        </Link>
      </div>
    </div>
  );
};

export default SkillsSection;
