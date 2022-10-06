import react from 'react';
import { BrowserRouter, Switch, Route } from 'rect-router-dom';
import Header from '../components/Header';
import AddBook from '../components/AddBook';
import BookList from '..components/BookList';

const AppRouter = () => {
    return (
        <BrowserRouter>
            <div>
                <Header />
                <div className="main-content">
                    <Switch>
                        <Route component={BookList} path="/" exact={true} />
                        <Route component={AddBook} path="/" />
                    </Switch>
                </div>
            </div>
        </BrowserRouter>
    );
};

export default AppRouter;