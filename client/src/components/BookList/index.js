import React from 'react';
import { Card, ListGroup } from 'react-bootstrap';
import BookListItem from '../BookListItem';

export default function BookList({ books }) {
    return (
        <Card>
            <Card.Title ><h2>Books List:</h2></Card.Title>
            <Card.Body>
                <ListGroup>
                    {books.map((book) => (
                        <BookListItem key={book.id} {...book} />
                    ))}
                </ListGroup>
            </Card.Body>
        </Card>
    )
}