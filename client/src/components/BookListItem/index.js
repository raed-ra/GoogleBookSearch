import React from 'react';
import { Row, Col, ListGroup, Button, Image } from 'react-bootstrap';

export default function BookListItem({ 
    id,
    title, 
    description, 
    link, 
    authors, 
    image,
    onSave,
    onDelete
}) {
    return (
        <ListGroup.Item>
            <Row>
                <Col sm={10}>
                    <h2>{title}</h2>
                </Col>
                <Col sm={2}>
                    {link &&  <Button as ="a" href={link}>View</Button>}{' '}
                    {onSave && <Button  
                    onClick={
                        ()=> onSave({title, description, link, authors, image })}>Save</Button>}{' '}
                    {onDelete && <Button onClick={()=>onDelete(id)} variant="danger">Delete</Button>}
                </Col>
            </Row>
            <Row>
                <Col>
                    <p>{authors && authors.join(' ')}</p>
                </Col>
            </Row>
            <Row>
                <Col sm={3}>
                    <Image src={image} alt="book image"/>
                </Col>
                <Col sm={9}>
                    <p>{description}</p>
                </Col>
            </Row>
        </ListGroup.Item>
    )
}
