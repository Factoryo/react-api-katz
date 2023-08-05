import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import './PageDetail.css';

const PageDetail = () => {
  const [post, setPost] = useState({});
  const { id } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:3001/posts/${id}`)
      .then((response) => {
        setPost(response.data);
      })
      .catch((error) => {
        console.error(`Il y avait une erreur lors de l'obtention du poste: ${error}`);
      });
  }, [id]);

  return (
    <div className="siteContainer">
      <div className="container">
        <div className="imageContainer">
          <Link to={`/edit/${post.id}`} className="editButton">Éditer</Link>
          <img src={post.image} alt={post.titre} className="image"/>
        </div>
        <h2 className="title">{post.titre}</h2>
        <p className="description">{post.description}</p>
      </div>
    </div>
  );
}

export default PageDetail;
