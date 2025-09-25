import React, { useState, useEffect } from 'react';
import ComingSoon from '../components/ComingSoon';
import ProjectsSection from '../components/ProjectsSection';

const ProjectsPage = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate fetching data from projects.json
    const fetchData = async () => {
      try {
        const response = await fetch('/src/datas/projects/projects.json');
        const data = await response.json();
        setProjects(data);
      } catch (error) {
        console.error("Error fetching projects data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center bg-red-50 text-gray-800">Loading projects...</div>;
  }

  return (
    <div className="pt-16">
      {projects && projects.length > 0 ? (
        <ProjectsSection projects={projects} />
      ) : (
        <ComingSoon />
      )}
    </div>
  );
};

export default ProjectsPage;
