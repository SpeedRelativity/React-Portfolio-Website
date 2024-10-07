import React, { useState } from 'react';
import { RiReactjsLine } from 'react-icons/ri';
import {
  SiVisualstudiocode,
  SiCplusplus,
  SiJavascript,
  SiPytorch,
  SiNodedotjs,
  SiHtml5,
  SiLua,
  SiGithub,
  SiTailwindcss,
} from 'react-icons/si';
import { FaPython } from 'react-icons/fa';
import { DiJava } from 'react-icons/di';
import { motion } from 'framer-motion';
import { PROJECTS } from '../constants';

const Technologies = () => {
  const [selectedTechnology, setSelectedTechnology] = useState(null);
  const [modalImage, setModalImage] = useState(null);

  // Merged technologies array
  const technologies = [
    // Languages
    { name: 'C++', icon: <SiCplusplus className='text-7xl text-blue-600' /> },
    { name: 'Python', icon: <FaPython className='text-7xl text-yellow-500' /> },
    { name: 'Java', icon: <DiJava className='text-7xl text-red-600' /> },
    { name: 'JavaScript', icon: <SiJavascript className='text-7xl text-yellow-500' /> },
    { name: 'HTML', icon: <SiHtml5 className='text-7xl text-orange-600' /> },
    { name: 'Lua', icon: <SiLua className='text-7xl text-blue-400' /> },
    // Tools
    { name: 'React.js', icon: <RiReactjsLine className='text-7xl text-cyan-400' /> },
    { name: 'VS Code', icon: <SiVisualstudiocode className='text-7xl text-blue-400' /> },
    { name: 'GitHub', icon: <SiGithub className='text-7xl text-gray-300' /> },
    { name: 'PyTorch', icon: <SiPytorch className='text-7xl text-orange-400' /> },
    { name: 'Node.js', icon: <SiNodedotjs className='text-7xl text-green-500' /> },
    { name: 'Tailwind CSS', icon: <SiTailwindcss className='text-7xl text-blue-400' /> },
  ];

  const handleIconClick = (techName) => {
    // Toggle selection
    if (selectedTechnology === techName) {
      setSelectedTechnology(null);
    } else {
      setSelectedTechnology(techName);
    }
  };

  const renderProjects = () => {
    if (!selectedTechnology) return null;

    const filteredProjects = PROJECTS.filter((project) =>
      project.technologies.includes(selectedTechnology)
    );

    return (
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: 'auto', opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h3 className='text-xl text-center mt-8 mb-6'>
          Projects using {selectedTechnology}
        </h3>
        <div>
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project, index) => (
              <div key={index} className='mb-8 flex flex-wrap lg:justify-center '>
                <div className='w-full lg:w-1/4'>
                  <img
                    className='mb-6 rounded cursor-pointer'
                    width={150}
                    height={150}
                    src={project.image}
                    alt={project.title}
                    onClick={() => setModalImage(project.image)}
                  />
                </div>
                <div className='w-full max-w-xl lg:w-1/2'>
                  <h2 className='mb-2 font-semibold'> {project.title}</h2>
                  <p className='mb-4 text-neutral-400'>{project.description}</p>
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className='mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900'
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))
          ) : (
            <p className='text-center mt-4'>
              No projects found for {selectedTechnology}
            </p>
          )}
        </div>
      </motion.div>
    );
  };

  return (
    <div id="technologies" className="border-b border-neutral-800 pb-24">
      <h1 className='my-40 mb-4 text-center text-4xl'>Projects & Techstack</h1>
      <p className='mb-8 text-center text-lg text-neutral-400'>
        Click Icons to View Projects.
      </p>

      {/* Merged Technologies Section */}
      <div className='w-full lg:w-3/4 mx-auto'>
        <div className='flex flex-wrap items-center justify-center gap-4'>
          {technologies.map((tech, index) => (
            <div
              key={index}
              className={`cursor-pointer rounded-2xl border-4 p-4 ${
                selectedTechnology === tech.name ? 'border-blue-500' : 'border-neutral-800'
              }`}
              onClick={() => handleIconClick(tech.name)}
            >
              {tech.icon}
            </div>
          ))}
        </div>

        {/* Display Projects for Selected Technology */}
        {selectedTechnology && renderProjects()}

        {/* Modal for Enlarged Image */}
        {modalImage && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75"
            onClick={() => setModalImage(null)}
          >
            <div className="relative" onClick={(e) => e.stopPropagation()}>
              <img
                src={modalImage}
                alt="Enlarged project"
                className="max-h-screen max-w-screen"
              />
              <button
                className="absolute top-0 right-0 m-4 text-white text-2xl"
                onClick={() => setModalImage(null)}
              >
                &times;
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Technologies;
