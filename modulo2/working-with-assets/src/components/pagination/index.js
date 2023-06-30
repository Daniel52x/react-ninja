'use strict';

import React from 'react';
import pagination from '../../utils/pagination';

const Pagination = ({ total, activePage }) => {
  return (
    <div>
      {pagination({ total, activePage }).map((page, index) => (
        <li key={index}>
          <a href="">{page}</a>
        </li>
      ))}
    </div>
  );
};

export default Pagination;
