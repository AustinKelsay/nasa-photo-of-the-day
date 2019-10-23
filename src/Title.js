import React from 'react';

const Title = props => {
    
    return (
      <div className="title">
          <h2>Title: {props.title}</h2>
          <p><a href={props.url}>{props.url}</a></p>
          <p>Copyright: {props.copyright}</p>
      </div>
    );
  };

  export default Title;
  