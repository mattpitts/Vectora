import React from 'react';

const ProjectCard = (props) => {
	return (
		<div className="project-card" onClick={() => props.onProjectClick(props.id)}>
			<h4 className='project-name'>{props.name}</h4>
				<img src="https://placeholdit.co//i/200x170?&bg=bcbcbc"/>
		</div>
	)
}


export default ProjectCard
