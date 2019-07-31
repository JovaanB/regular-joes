import React from 'react';

const Title = ({ title }) => {
  return (
    <div className="row">
      <div className="col text-center mb-3">
        <h1 className="display-4 text-capitalize font-weight-bold">{title}</h1>
      </div>
    </div>
  );
};

Title.defaultProps = {
  title: 'Titre par défaut',
};

export default Title;
