import React from 'react';
import AlgoSideMenu from './algo-side-menu/AlgoSideMenu';
import StructuresSideMenu from './structures-side-menu/StructuresSideMenu';

import './SideMenu.scss';

const SideMenu: React.FC = () => {
    return (
        <div className='side-menu'>
            <AlgoSideMenu />
            <StructuresSideMenu />
        </div>
    );
};

export default SideMenu;