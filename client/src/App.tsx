import Header from "components/Header";
import List from "components/List/container";
import ListManager from "components/ListManager/container";
import React from "react";
import './index.scss'

const App = () => <div className="app_container">
    <Header />
    <div className="container_lists">
        <ListManager />
        <List />
    </div>
</div>;

export default App;