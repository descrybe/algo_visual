import React from 'react';
import './AlgoSideMenu.scss';

const AlgoSideMenu: React.FC = () => {
    return (
        <div className='algo-side-menu'>
            <header>ALGORITHMS</header>
            <div>
                <h3>Sorting</h3>
                <ul>
                    <li>Bubble</li>
                    <li>Merge</li>
                    <li>Insertion</li>
                    <li>Selection</li>
                </ul>
                <h3>Search</h3>
                <ul>
                    <li>Binary</li>
                </ul>
            </div>
        </div>
    );
};

export default AlgoSideMenu;