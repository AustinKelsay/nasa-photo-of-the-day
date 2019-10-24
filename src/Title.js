import React, {useState} from 'react';
import styled from 'styled-components'; 
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Collapse
  } from 'reactstrap';

  

const Title = props => {
  const [collapse, setCollapse] = useState(false);

  const toggle = () => setCollapse(!collapse);

  const CardWrapper = styled.div`
  margin: 0;
  margin-top: 1%;
 `;

    return (
      <CardWrapper className="title">
        <Button color="info" onClick={toggle} style={{ marginBottom: '1rem' }}>Info</Button>
        <Collapse isOpen={collapse}>
          <CardBody>
          <CardTitle>Title: {props.title}</CardTitle>
          <CardSubtitle>Copyright: {props.copyright}</CardSubtitle>
          <CardText>{props.explanation}</CardText>
          <a href={props.url}><Button color='primary'>{props.url}</Button></a>
          </CardBody>
          </Collapse>
      </CardWrapper> 
    );
  };

  export default Title;
  