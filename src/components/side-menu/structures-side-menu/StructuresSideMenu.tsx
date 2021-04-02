import React from 'react';
import './StructuresSideMenu.scss';

const StructuresSideMenu: React.FC = () => {
    return (
        <div className='st-side-menu'>
            <header>STRUCTURES SIDE MENU</header>
            <div>
                <h3>Lists and arrays</h3>
                <ul>
                    <li>Linked list</li>
                    <li>Array</li>
                </ul>
                <h3>Memory</h3>
                <ul>
                    <li>Heap</li>
                    <li>Stack</li>
                </ul>
            </div>
        </div>
    );
};

export default StructuresSideMenu;