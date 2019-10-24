import React, {useState} from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Collapse
  } from 'reactstrap';

  

const Title = props => {
  const [collapse, setCollapse] = useState(false);

  const toggle = () => setCollapse(!collapse);

    return (
      <div className="title">
        <Button color="info" onClick={toggle} style={{ marginBottom: '1rem' }}>Info</Button>
        <Collapse isOpen={collapse}>
          <CardBody>
          <CardTitle>Title: {props.title}</CardTitle>
          <CardSubtitle>Copyright: {props.copyright}</CardSubtitle>
          <CardText>{props.explanation}</CardText>
          <a href={props.url}><Button color='primary'>{props.url}</Button></a>
          </CardBody>
          </Collapse>
      </div>
    );
  };

  export default Title;
  