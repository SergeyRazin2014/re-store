import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { HomePage, CartPage } from '../pages';
import ShopHeader from '../shop-header';


const App = ({ bookstoreService }) => {

    return (
        <main>
            <ShopHeader numItems={5} total={250} />
            <Switch>
                <Route path="/" component={HomePage} exact />
                <Route path="/cart" component={CartPage} />
            </Switch>
        </main>
    )
}


export default App;
