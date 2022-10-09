import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
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
                        <Route component={BooksList} path="/" exact={true} />
                        <Route conponent={AddBook} path="/add" />
                    </switch>
                </div>
            </div>
        </BrowserRouter>
    );
};

export default AppRouter;