import React, { useState, useEffect } from 'react';
import SearchInput from '../components/SearchInput'
import { Row, Col } from 'react-bootstrap';
import BookList from '../components/BookList';
import API from '../utils/API';
import io from 'socket.io-client';
import NewBook from "./NewBook";
// const ENDPOINT = 'localhost:3000';
let socket = io();

export default function Search() {
    const [search, setSearch] = useState('');
    const [books, setBooks] = useState([]);
    const [redirect, setRedirect] = useState('');
    const [newBook, setNewbook] = useState('');
    const [saved, setSaved] = useState("None");



    useEffect(() => {
        socket.on('new-book-save-message', (data) => {
            // console.log(data)
            setNewbook([JSON.parse(data.newBook)])
            setRedirect(true)
        })
        //setRedirect(true)
    }, []);

    const onSave = async (book) => {
        try {  
            await API.saveBook(book);
            // let socket = io(ENDPOINT);
            // console.log("we were here")
            console.log(book.id)
            let saved = book.id
            setSaved(saved)
            socket.emit("new-book-save-message", { newBook: JSON.stringify(book) })
            socket.on('new-book-save-message', (data) => {
                setNewbook([JSON.parse(data.newBook)])
                setRedirect(true)
            })
        } catch (err) {
            console.log(err)
        }
    }

    const onSearch = async (e) => {
        e.preventDefault();
        const results = await API.searchBooks(search);
        // console.log(results)
        const books = results.items.map((book) => ({
            id: book.id,
            title: book.volumeInfo.title,
            description: book.volumeInfo.description,
            authors: book.volumeInfo.authors,
            image: book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : '',
            link: book.volumeInfo.infoLink,
            onSave,
        }))
        setBooks(books)
    }
    // console.log("-----------------33333--------------bookTitle")
    // console.log({ newBook })
    // console.log("-----------------44444--------------bookTitle")


    if (redirect) {
        console.log('we are redirecting')
        return <><NewBook newBook={newBook} /> </>
    } else {
        console.log(saved)
        console.log('we are NOT redirecting')
        return (
            <>
                <Row>
                    <Col>
                        <SearchInput
                            search={search}
                            onSearchChange={setSearch}
                            onSearch={onSearch}
                        />
                    </Col>
                </Row>
                <br />
                <Row><Col><h1>Search Results</h1></Col></Row>
                <Row>
                    <Col>
                        <BookList books={books} pageTitle="List of found books:" saved={saved}/>
                    </Col>
                </Row>
            </>
        )
    }
}