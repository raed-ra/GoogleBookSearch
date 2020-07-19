import React, { useState, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import BookList from '../components/BookList';
import API from '../utils/API'
import BookListItem from '../components/BookListItem';
export default function Search() {

    const [books, setBooks] = useState([]);

    const onDelete = API.deleteBook;

    useEffect(() => {
        async function fetchData() {
            const results = await API.getBooks();
            console.log(results)
            const books = results.map((book) => ({
                id: book._id,
                title: book.title,
                description: book.description,
                authors: book.authors,
                image: book.image,
                link: book.link,
                onDelete,
            }))
            setBooks(books)
        }
        fetchData()
    });

    return (
        <>
            <Row>
                <Col>
                    <BookList books={books} />
                </Col>
            </Row>
        </>
    )
}