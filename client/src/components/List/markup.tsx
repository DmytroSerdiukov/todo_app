import React, { useState } from "react";

import "./index.scss";

interface IDetails {
    data: string;
}

const ListDetails: React.FC<IDetails> = ({data}) => {
    return (
        <div className="list_task">
            <h1>{data}</h1>
            <div className="list_task_btns">
                <input type="checkbox" />
                <img src="trash.png" alt="delete" />
            </div>
        </div>
    );
};

const ListMarkup: React.FC = () => {

    const [visible, setVisible] = useState(false)
    console.log(visible)
    const lists: string[] = ["home", "work", "shopping"];

    const changeVisibleState = () => setVisible(!visible)


    return (
        <div className="list_container">
            {
                visible ?
                <input className="create_task_input" placeholder="Type something..." type={'text'} />
                : <div onClick={changeVisibleState} className="create_task">Create new task</div>
            }
            {lists && lists.length > 0 ? (
                lists.map((el, i) => <ListDetails key={i} data={el} />)
            ) : (
                <div>No lists</div>
            )}
        </div>
    );
};

export default ListMarkup;
