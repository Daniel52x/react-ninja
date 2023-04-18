'use strict';

import React from 'react';
import Search from './search';
import UserInfo from './user-info';
import Actions from './actions';
import Repos from './repos';

const AppContent = ({
  userInfo,
  repos,
  starred,
  isFetching,
  handleSearch,
  getRepos,
  getStarred,
}) => {
  return (
    <div className="app">
      <Search handleSearch={handleSearch} isDisabled={isFetching} />

      {isFetching && <div>Carregando...</div>}
      {!!userInfo && <UserInfo userinfo={userInfo} />}
      {!!userInfo && <Actions getRepos={getRepos} getStarred={getStarred} />}

      {!!repos.length && (
        <Repos className="repos" title="Repositórios:" repos={repos} />
      )}
      {!!starred.length && (
        <Repos className="starred" title="Favoritos:" repos={starred} />
      )}
    </div>
  );
};

AppContent.propTypes = {
  userInfo: React.PropTypes.object,
  repos: React.PropTypes.array.isRequired,
  starred: React.PropTypes.array.isRequired,
  isFetching: React.PropTypes.bool.isRequired,
  handleSearch: React.PropTypes.func.isRequired,
  getRepos: React.PropTypes.func.isRequired,
  getStarred: React.PropTypes.func.isRequired,
};

export default AppContent;
