import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Accueil.css";

const Accueil = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/posts")
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
      });
  }, []);

  return (
    <div className="Accueil">
      <div className='content'>
        <h1 className='titre'>Voyages Breizh</h1>
        <input
          className='recherche'
          type="text"
          placeholder="Rechercher une ville"
          onChange={(event) => {
            setSearchTerm(event.target.value);
          }}
        />
        <div className="resultats">
          {posts
            .filter((val) => {
              if (searchTerm === "") {
                return null;
              } else if (
                val.titre.toLowerCase().includes(searchTerm.toLowerCase())
              ) {
                return val;
              }
              return null;
            })
            .map((val, key) => {
              return (
                <div className="ville" key={key}>
                  <Link to={"/detail/" + val.id}>
                    <img src={val.image} alt={val.titre} />
                    <h2>{val.titre}</h2>
                  </Link>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Accueil;
