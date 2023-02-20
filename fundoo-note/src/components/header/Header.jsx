import { Button, IconButton } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import RefreshIcon from '@mui/icons-material/Refresh';
import GridViewTwoToneIcon from '@mui/icons-material/GridViewTwoTone';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import AppsOutlinedIcon from '@mui/icons-material/AppsOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import React from 'react'
import '../header/Header.css'



function Header() {
    return (
        <div className="HeaderMainContainer">
            <div className="sideheader">
                <Button><MenuIcon style={{ color: '#5f6368' }} /></Button>
                <img className='keepLogo' src='https://www.gstatic.com/images/branding/product/1x/keep_2020q4_48dp.png' />
                <div className="keep">
                    FunDoo
                </div>
            </div>

            <div className="middleheader">
            <div className='icon'><Button> <SearchIcon style={{ color: '#5f6368' }} /> </Button></div>
            <div className='input'><InputBase placeholder="Search" /></div>
                 </div>

            <div className="rightsideheader">
                <div className="rightSideOne">
                <IconButton><RefreshIcon fontSize="medium" style={{ color: '#5f6368' }}/></IconButton>
                <IconButton><GridViewTwoToneIcon style={{ color: '#5f6368'}}/></IconButton>
                <IconButton><SettingsOutlinedIcon style={{ color: '#5f6368'}} /></IconButton>
                </div>
                <div className="rightSideTwo">
                <IconButton><AppsOutlinedIcon style={{ color: '#5f6368'}}/></IconButton>
                <IconButton><AccountCircleOutlinedIcon style={{ color: '#5f6368'}}/></IconButton>
                </div>
            </div>

        </div>
    )
}

export default Header
