import React  from 'react';
import { Row, Col } from 'react-bootstrap';
import BookList from '../components/BookList';
//import io from 'socket.io-client';

export default function NewBook(props) {
  // const ENDPOINT = 'localhost:3000'
  // const [book, setBook] = useState([]);
  // console.log(props.newBook)
  // let socket = io(ENDPOINT);
  // socket.on('new-book-save-message', (data) => {
  // console.log("this is data ---------->>>>>>>>>" + props.newBook)
  let newBook = props.newBook[0]
  // console.log("---------------------------------------book" + newBook)
  const book = {
    id: "1",
    title: newBook.title,
    description: newBook.description,
    authors: newBook.authors,
    image: newBook.image,
    link: newBook.link,
  }
  // console.log(book)
  


  // console.log('------------------------please-----' + { book })
  return (
    <>
      <Row>
        <Col>
          <BookList books={[book]} pageTitle="New book just added to saved list:" />
        </Col>
      </Row>
    </>
  )
}