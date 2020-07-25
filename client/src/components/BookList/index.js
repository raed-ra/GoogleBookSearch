import React from 'react';
import { Card, ListGroup } from 'react-bootstrap';
import BookListItem from '../BookListItem';

export default function BookList({ books, pageTitle, saved }) {
    return (
        <Card>
            <Card.Title ><h2>{pageTitle}</h2></Card.Title>
            <Card.Body>
                <ListGroup>
                    {books.map((book) => (
                         <BookListItem key={book.id} {...book} savedBook={saved===book.id ? "Book Saved!" : ""} />
                    ))}
                </ListGroup>
            </Card.Body>
        </Card>
    )
}