import React, { useEffect, useState } from 'react';
import Contact from './Contact';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProject } from '../Redux/FetchRequest';

function Projects() {
    const dispatch = useDispatch();
    const projects = useSelector((state) => state.profile.profile); 
    const status = useSelector((state) => state.profile.status);
    const error = useSelector((state) => state.profile.error);
    const navigate = useNavigate();

    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchProject());
        }
    }, [status, dispatch]);

    if (status === 'loading') {
        return <p style={{ color: 'yellow' }}>Loading...</p>;
    }

    if (status === 'error') {
        return <p style={{ color: 'red' }}>Error: {error}</p>;
    }

    const handleView = (id) => {
        console.log('clicked id :', id);
        navigate(`/view-project/${id}`);
    };

    return (
        <>
            <h1 id='projects' className='about-education heading'>Project Details</h1>
            <div className="project-wrapper">
                <div className="project-box container">
                    {projects && projects.length > 0 ? (
                        projects.map((project) => (
                            <div
                                className='pro-card'
                                key={project._id}
                                onClick={() => handleView(project._id)}
                            >
                                <div className='logo-img'>
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        style={{ width: '150px', height: '150px' }}
                                    />
                                </div>
                                <div style={{ marginTop: '10px' }}>
                                    <h5 className='project-title heading'>{project.title}</h5>
                                    <p className='project-sub'>{project.subHeading}</p>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p style={{ color: 'red' }}>No projects available.</p>
                    )}
                </div>
            </div>
            <Contact />
        </>
    );
}

export default Projects;
