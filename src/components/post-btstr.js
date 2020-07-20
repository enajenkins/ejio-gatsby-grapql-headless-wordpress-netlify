import React from 'react';
import {Card, Button} from 'react-bootstrap';

const Post = (props) => (
  <post>
    <div className="p-3">
      <Card>
        <Card.Img variant="top" src={props.image} alt={props.alt || "default"} />
        <Card.Body>
        <Card.Title dangerouslySetInnerHTML = {{__html: props.title}} />
        <Card.Text dangerouslySetInnerHTML = {{__html: props.excerpt}} /> 
          <Button variant="primary" href={props.readMore}>Read more</Button>
        </Card.Body>
      </Card>
      </div>
    </post>
);

export default Post;

/*

      <Card.Title>{props.title}</Card.Title>
      <Card.Text>{props.excerpt}</Card.Text>

*/

