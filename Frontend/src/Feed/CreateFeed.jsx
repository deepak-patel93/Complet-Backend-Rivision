import React from 'react'
import {useNavigate} from 'react-router-dom'
import axios from 'axios';

function CreateFeed() {
    const navigate= useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        axios.post('http://localhost:3000/create/post', formData)
        .then(response => {
            navigate('/feeds');
        })
        .catch(error => {
            console.error(error);
        });
    };

  return (
    <div className="create">
        <form  className="create-feed" onSubmit={handleSubmit}> 
            <h1>Create Feed</h1>
            <input type="file" name="image" required />
            <input type="text" name="caption" placeholder="Caption" required />
            <button type="submit">Post</button>
        </form>
    </div>

  )
}

export default CreateFeed