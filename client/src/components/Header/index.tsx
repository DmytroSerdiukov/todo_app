import React from 'react'
import './index.scss'

const Header: React.FC = () => {
    return <div className="container">
        <h1 className='logo'>
            TODO App
        </h1>
        <div className='user_info'>
            <span className='user_info_name'>
                Dmytro Serdiukov
            </span>
            <div className="avatar"></div>
        <button className='sign_out_btn'>
            Log Out
        </button>
        </div>
    </div>
}

export default Header