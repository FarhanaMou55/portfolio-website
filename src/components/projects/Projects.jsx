import React, { useState, useEffect } from 'react';
import { FaGithub } from "react-icons/fa";
import image1 from '../../assets/1.jpg';
import image2 from '../../assets/2.jpg';
import image3 from '../../assets/3.jpg';
import image4 from '../../assets/4.jpg';
import web from '../../assets/web.png'
const imageMap = {
  '/src/assets/1.jpg': image1,
  '/src/assets/2.jpg': image2,
  '/src/assets/3.jpg': image3,
  '/src/assets/4.jpg': image4,
};


const Projects = () => {
  const [projectsData, setProjectsData] = useState([]);
  const [categories, setCategories] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [activeCategory, setActiveCategory] = useState('ALL');
  const [search, setSearch] = useState('');

  useEffect(() => {
    fetch('Projectsdata.json')
      .then(res => res.json())
      .then(data => {
        setProjectsData(data.projects);
        setCategories(['ALL', ...data.categories]);
        setFilteredProjects(data.projects);
      })
      .catch(error => console.error('Error fetching project data:', error));
  }, []);

  useEffect(() => {
    let filtered = [...projectsData];

    if (activeCategory !== 'ALL') {
      filtered = filtered.filter(p => p.category === activeCategory);
    }

    if (search.trim() !== '') {
      filtered = filtered.filter(p =>
        p.title.toLowerCase().includes(search.toLowerCase())
      );
    }

    setFilteredProjects(filtered);
  }, [activeCategory, search, projectsData]);

  return (
    <section>
   <div  className="py-15 w-10/12 mx-auto">
   <h2 className="text-3xl flex justify-center font-bold mb-7">My Projects</h2>

{/* Search bar */}
<div className="flex justify-center mb-5">
  <input
    type="text"
    placeholder="Search projects..."
    className="p-2 py-2 px-4 mb-5 bg-gray-100 border rounded-md w-full md:w-1/3 shadow"
    value={search}
    onChange={e => setSearch(e.target.value)}
  />
</div>

{/* Categories */}
<div className="flex flex-wrap gap-3 mb-8 justify-center">
  {categories.map((cat, index) => (
    <button
      key={index}
      onClick={() => setActiveCategory(cat)}
      className={`px-4 py-2 rounded-full text-sm font-medium uppercase ${
        activeCategory === cat
          ? 'bg-gradient-to-r from-orange-500 via-pink-700 to-yellow-500 text-white'
          : 'bg-gray-200 text-black'
      }`}
    >
      {cat}
    </button>
  ))}
</div>
   </div>

      {/* Projects */}
      <div className='bg-gradient-to-r from-orange-500 via-pink-700 to-yellow-500'>
      <div className="grid w-10/12 mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 py-20 ">
        {filteredProjects.map((project, index) => (
          <div key={index} className="bg-white shadow-amber-50   rounded-lg p-4 hover:shadow-md transition">
            <img
              src={imageMap[project.image]}
              alt={project.title}
              className="mb-4 rounded-md object-cover h-48 w-full"
            />
           <div className='flex justify-between items-center'> <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
           <div className='flex gap-3'>
           <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
               
              >
                <FaGithub className='w-6 h-6' />
              </a>
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
               
              >
                <img className='w-6 h-6' src={web} alt="" />
              </a></div></div>
            <p className="text-gray-600 mb-3">{project.description}</p>
            
          </div>
        ))}
      </div>
      </div>

      {filteredProjects.length === 0 && (
        <p className="text-center lowercase  text-gray-500 mt-10">No matching projects found.</p>
      )}
    </section>
  );
};

export default Projects;
