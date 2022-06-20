import React from 'react'
import './index.scss'

const Header: React.FC = () => {
    return <div className="container">
        <h1>
            TODO App
        </h1>
        <div className='user_info'>
            <span>
                Dmytro Serdiukov
            </span>
            <div className="avatar"></div>
        </div>
        <button className='sign_out_btn'>
                Log Out
            </button>
    </div>
}

export default Header