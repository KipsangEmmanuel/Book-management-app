import React, { useState }  from 'react';
import { Form, Button } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';

const BookForm = (props) => {
    const [book, setBook] = useState({
        bookname: props.book ? props.book.bookname : '',
        author: props.book ? props.book.author : '',
        quantity: props.book ? props.book.quantity : '',
        price: props.book ? props.book.price : '',
        date: props.book ? props.book.date : ''
    });

    const [errorMsg, setErrorMsg] = useState('');
    const { bookname, author, price, quantity } = book;

    const handleOnSubmit = (event) => {
        event.preventDefault();
        const values = [bookname, author, price, quantity];
        let errorMsg = '';

        const allFieldsFilled = values.every((field) => {
            const value = `${field}`.trim();
        });

        if (allFieldsFilled) {
            const book = {
                id: uuidv4(),
                bookname,
                author,
                price,
                quantity,
                date: new Date()
            };
            props.handleOnSubmit(book);
        }else{
            errorMsg = 'Please fill out the fields.';
        }
        setErrorMsg(errorMsg);
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        switch (name) {
            case 'quantity':
                if (value === '' || parseInt(value) === +value) {
                    setBook((prevState) => ({
                        ...prevState,
                        [name]: value
                    }));
                }
                break;
                case 'price':
                    if (value === '' || value.match(/^\d{1,}(\.\d{0,2})?$/)) {
                        setBook((prevState) => ({
                            ...prevState,
                            [name]: value
                        }));
                    }
        };

        return (<div className="main-form">
            {errorMsg && <p className="erroMsg">{errorMsg}</p>}
            <Form onSubmit={handleOnSubmit}>
                <Form.Group controlId="name">
                    <Form.label>Book name</Form.label>
                    <Form.Contol
                        className="input-control"
                        type="text"
                        name="bookname"
                        value={bookname}
                        placeholder="Enter name of book"
                        onchange={handleInputChange} 
                    />
                </Form.Group>
                <Form.Group controlId="author">
                    <Form.label>Book Author</Form.label>
                    <Form.Control
                        className="input-control"
                        type="text"
                        name="author"
                        value={author}
                        placeholder="Enter name of author"
                        onChange={handleInputChange} 
                    />
                </Form.Group>
                <Form.Group controlId="quantity">
                    <Form.label>Quantity</Form.label>
                    <Form.Control 
                        className="input-control"
                        type="number"
                        name="quantity"
                        value={quantity}
                        placeholder="Enter available quantity"
                        onChange={handleInputChange}
                        />
                </Form.Group>
                <Form.Group controlId="price">
                    <Form.label>Book Price</Form.label>
                    <Form.Control 
                        className="input-control"
                        type="text"
                        name="price"
                        value={price}
                        placeholder="Enter price of book"
                        onChange={handleInputChange}
                    />
                </Form.Group>
                <Button variant="primary" type="submit" className="submit-btn">
                    Submit
                </Button>
            </Form>
        </div>
        );
    };
}