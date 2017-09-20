import React from 'react';
import ProjectCardThumbnail from './ProjectCardThumbnail';

const ProjectCard = (props) => {
	return (
		<div className="project-card">
			<h4 className='project-name'>{props.name}</h4>
				<ProjectCardThumbnail
					shapes={props.shapes}
				/>
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

	// <img
	// 	className='project-card-thumbnail'
	// 	src="https://placeholdit.co//i/200x170?&bg=bcbcbc"/>

export default ProjectCard
