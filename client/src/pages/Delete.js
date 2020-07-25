import React, { useState, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import BookList from '../components/BookList';
import API from '../utils/API'
import io from 'socket.io-client';
import NewBook from "./NewBook"
// const ENDPOINT = 'localhost:3000'
let socket = io();

export default function Search() {
    const [books, setBooks] = useState([]);
    const [redirect, setRedirect] = useState('');
    const [newBook, setNewbook] = useState('');


    async function fetchData() {
        try {
            const results = await API.getBooks();
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
        catch (err) {
            console.log(err)
        }
    }

    const onDelete = async (id) => {
        try {
            await API.deleteBook(id)
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        socket.on('new-book-save-message', (data) => {
            console.log(data)
            setNewbook([JSON.parse(data.newBook)])
            setRedirect(true)
        })
        fetchData()
    });

    if (redirect) {
        console.log('we are redirecting')
        return <><NewBook newBook={newBook} /> </>
    } else {
        console.log('we are NOT redirecting')
        return (
            <>
                <Row>
                    <Col>
                        <BookList books={books} pageTitle="List of saved books:" />
                    </Col>
                </Row>
            </>
        )
    }
}