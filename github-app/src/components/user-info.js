'use strict';

import React from 'react';

const UserInfo = () => {
  return (
    <div className="user-info">
      <img src="https://avatars.githubusercontent.com/u/32081901?v=4" alt="" />
      <h1>
        <a href="https://api.github.com/users/daniel52x">Daniel Costa</a>
      </h1>

      <ul className="repos-info">
        <li>Repositórios: 6</li>
        <li>Seguidores: 10</li>
        <li>Seguindo: 10</li>
      </ul>
    </div>
  );
};

export default UserInfo;
