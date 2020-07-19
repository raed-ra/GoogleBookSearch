import React from 'react'
import { Form, Button } from 'react-bootstrap'

export default function SearchInput({ search, onSearchChange, onSearch }) {
    return (
        <Form onSubmit={onSearch}>
            <Form.Group controlId="book-title">
                <Form.Label><h1>Search for Books in Google</h1></Form.Label>
                <Form.Control
                    value={search}
                    onChange={evt => onSearchChange(evt.target.value)}
                    placeholder="Book Title" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Search
  </Button>
        </Form>
    )
}
