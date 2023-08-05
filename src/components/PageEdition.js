import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

function PageEdition() {
  const [item, setItem] = useState({ titre: '', description: '' });
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:3001/posts/${id}`)
      .then(response => {
        setItem(response.data);
      })
      .catch(error => {
        console.error('Erreur de récupération des données:', error);
      })
  }, [id]);

  const handleChange = e => {
    setItem({ ...item, [e.target.name]: e.target.value });
  }

  const handleSubmit = e => {
    e.preventDefault();
    axios.put(`http://localhost:3001/posts/${id}`, item)
      .then(response => {
        navigate('/');
      })
      .catch(error => {
        console.error('Erreur de mise à jour des données:', error);
      });
  }

  const handleDelete = () => {
    axios.delete(`http://localhost:3001/posts/${id}`)
      .then(response => {
        navigate('/');
      })
      .catch(error => {
        console.error('Erreur de suppression des données:', error);
      });
  }

  return (
    <div className="container-edit">
      <h1>Editer la ville</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Titre</label>
          <input type="text" name="titre" value={item.titre} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Description</label>
          <input type="text" name="description" value={item.description} onChange={handleChange} />
        </div>
        <div className="form-group">
          <input type="submit" value="Mettre à jour" />
        </div>
      </form>
      <button onClick={handleDelete}>Supprimer</button>
    </div>
  );
}

export default PageEdition;
