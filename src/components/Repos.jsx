import React, { useState, useEffect } from 'react';

const axios = require('axios');

const Repos = () => {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    async function loadRepos() {
      const response = await axios.get('https://api.github.com/orgs/rockeseat/repos');
      console.log(response.data);

      setRepos(response.data);
    }
    loadRepos();
  }, []);

   console.log(repos);
  return (
    <div>
      <p>{repos}</p>
    </div>
  );
};

export default Repos;
