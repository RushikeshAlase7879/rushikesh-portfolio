import React from "react";

const ProjectCard = ({ title, description, link, image, tech }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition duration-300">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600 mb-2">{description}</p>
        <p className="text-sm text-gray-500 italic mb-3">{tech}</p>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-green-600 underline font-semibold"
        >
          View GitHub Repo
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
