import React from "react";

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
    const lists: string[] = ["home", "work", "shopping"];

    return (
        <div className="list_container">
            <div className="create_task">Create new task</div>
            {lists && lists.length > 0 ? (
                lists.map((el, i) => <ListDetails key={i} data={el} />)
            ) : (
                <div>No lists</div>
            )}
        </div>
    );
};

export default ListMarkup;
