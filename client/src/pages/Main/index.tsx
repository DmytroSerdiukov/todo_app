import React from "react";

import Header from "../../components/Header";
import List from "../../components/List/container";
import ListManager from "../../components/ListManager/container";

import './index.scss'

const Main = () => <div className="app_container">
    <Header />
    <div className="container_lists">
        <ListManager />
        <List />
    </div>
</div>

export default Main;