import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function ViewProject() {
    const { id } = useParams();  
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(true);

    const getData = async () => {
        try {
            let response = await axios.get(`https://protfolifo-backend.onrender.com/user/view-project/${id}`);
            setData(response.data.data);  
            console.log('Project Data:', response.data.data);  
        } catch (error) {
            console.error('Error fetching project:', error);
        } finally {
            setLoading(false);  
        }
    };

    useEffect(() => {
        getData();
    }, [id]);

    const techList = data.technologies ? data.technologies.split(',').map(tech =>tech.trim()):[]

    if (loading) {
        return <p>Loading...</p>;
    }

    if (!data || Object.keys(data).length === 0) {
        return <p>No project data available.</p>;
    }

    return (
        <div className="container">
            <div className="project-head">
                <img src={data.image || 'https://via.placeholder.com/150'} className='banner' alt={data.title || 'Project Image'} />
            </div>
            <div className="overview">
                <h1 className='title-color mt-20'>Overview</h1>
                <p className='project-over mt-20 ml-20'>{data.overView || 'No overview available.'}</p> 
                <p className='title-color mt-20'>Technologies:</p>
                {techList.length > 0 ?(
                    <ul className='project-over'>
                        {techList.map((tech, index) => (
                        <li key={index} className='ml-10'>{tech}</li>
                        ))}
                    </ul>

                ):(
                    <p>no technologies</p>
                )}
                <p className='title-color mt-20'><strong>Project URL:</strong> 
                    {data.projectURL ? (
                        <a href={data.projectURL} className='ml-2' target="_blank" rel="noopener noreferrer">{data.projectURL}</a>
                    ) : 'No URL available.'}
                </p>

                <p className='title-color mt-20'><strong>Conclusion : </strong> </p>
                <p className='project-over mt-20 ml-20'>{data.conclusion}</p>
            </div>
        </div>
    );
}

export default ViewProject;
