import React from 'react';

const ProjectCard = (props) => {
	return (
		<div className="project-card">
			<h4 className='project-name'>{props.name}</h4>
				<img
					className='project-card-thumbnail'
					src="https://placeholdit.co//i/200x170?&bg=bcbcbc"/>
			<div
				className="project-card-options">
				<p
					onClick={() => props.onProjectClick(props.id, 'load')}
					className='project-card-action-button'>
					Load
				</p>
				<p
					onClick={() => props.onProjectClick(props.id, 'delete')}
					className='project-card-action-button-delete'>
					Delete
				</p>
			</div>
		</div>
	)
}


export default ProjectCard
