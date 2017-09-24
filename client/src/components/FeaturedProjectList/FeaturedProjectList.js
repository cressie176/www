import React from 'react';
import PropTypes from 'prop-types';
import FeaturedProject from '../FeaturedProject';

import './FeaturedProjectList.css';

const FeaturedProjects = ({ projects = { items: [], link: {}, }, }) => {
  return (
    <div className='featured-projects'>
      <h2>
        <span className='icon'>
          <i className={`fa ${projects.icon}`} aria-hidden='true'></i>
        </span>
        {projects.title}
      </h2>
      <ul className='list-group featured-projects__list'>
        {
          projects.items.map((project, index) => {
            return <FeaturedProject key={index} id={project.id} />;
          })
        }
      </ul>
    </div>
  );
};

FeaturedProjects.propTypes = {
  projects: PropTypes.object,
};

export default FeaturedProjects;