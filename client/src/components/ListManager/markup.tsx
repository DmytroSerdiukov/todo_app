import React, { useRef, useState } from "react";

import "./index.scss";

const ListManagerMarkup: React.FC = () => {
    
    const [visible, setVisible] = useState(false)
    const inputValue = useRef(null)

    const [value, setValue] = useState('')

    const lists: string[] = [
        'home', 'work', 'shopping',
    ]
    
    const createNewList = (key: string) => {
        if(key === 'Enter')
            console.log(inputValue.current.value)
            lists.push(inputValue.current.value)
    }

    const NewListForm = () => <div>
        <input className="create_list_input" autoFocus ref={inputValue} type="text" onKeyDown={(e) => createNewList(e.key)}/>
    </div>



    return (
        <div className="list_manager_container">
            {visible? <NewListForm />: <span onClick={() => setVisible(!visible)} className="create_new_list"> + Create New List</span>}

            <div className="lists">

                {lists.map( (el, i) => <div className="list" key={i}>
                    {el}
                </div>)}
            </div> 
        </div>
    );
};

export default ListManagerMarkup;
