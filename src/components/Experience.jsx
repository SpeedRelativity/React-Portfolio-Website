import React from 'react';
import { FaSchool, FaUniversity, FaBriefcase } from 'react-icons/fa';

const experiences = [
  {
    year: '2019 - 2022',
    title: 'High School Diploma',
    institution: 'San Lorenzo High School',
    icon: <FaSchool className="text-3xl text-blue-500" />,
  },
  {
    year: '2022 - 2024',
    title: 'Associate of Mathematics',
    institution: 'Chabot College',
    icon: <FaUniversity className="text-3xl text-green-500" />,
  },
  {
    year: '2022 - 2026 | On-going',
    title: "Bachelor of Computer Science",
    institution: 'Cal State East Bay University',
    icon: <FaUniversity className="text-3xl text-green-500" />,
  },
  {
    year: 'Summer 2025',
    title: 'Awaiting Internships',
    institution: 'TBA',
    icon: <FaBriefcase className="text-3xl text-red-500" />,
  },
  
];

const Experience = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <h1 className="my-20 text-center text-4xl">Education & Work Experience</h1>
      <div className="relative mx-auto w-full lg:w-2/3">
        {/* Timeline vertical line */}
        <div className="absolute left-1/2 hidden h-full w-1 -translate-x-1/2 transform bg-neutral-700 lg:block"></div>

        {/* Timeline items */}
        {experiences.map((experience, index) => (
          <div
            key={index}
            className={`mb-8 flex flex-col items-center sm:flex-row lg:flex-row lg:items-center ${
              index % 2 === 0 ? 'lg:flex-row-reverse' : ''
            }`}
          >
            {/* Icon for small screens on the left */}
            <div className="flex items-center justify-center sm:mr-4 lg:mr-0">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-neutral-800 shadow-lg">
                {experience.icon}
              </div>
            </div>

            {/* Content for small screens aligned with the icon */}
            <div className="lg:w-5/12 bg-neutral-900 p-4 rounded-lg shadow-lg">
              <p className="mb-1 text-sm text-neutral-400">{experience.year}</p>
              <h3 className="mb-1 text-xl font-semibold">{experience.title}</h3>
              <p className="text-sm text-neutral-500">{experience.institution}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
