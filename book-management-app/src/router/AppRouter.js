import React from 'react';
import { BrowserRouter, Switch, Route, Routes } from 'react-router-dom';
import Header from '../components/Header';
import AddBook from '../components/AddBook';
import BooksList from '../components/BooksList';

const AppRouter = () => {
    return (
        <BrowserRouter>
            <div>
                <Header />
                <div className="main-content">
                    <switch>
                    <Routes>
                        <Route component={BooksList} path="/" exact="true" />
                        <Route conponent={AddBook} path="/add" />
                    </Routes>
                    </switch>
                </div>
            </div>
        </BrowserRouter>
    );
};

export default AppRouter;