import { Button } from '@mui/material';
import React from 'react';
import { Link, NavLink } from 'react-router-dom';


const Header = () => {
    return (
        <div style={{display:'flex', backgroundClip:'black'}}>
            {/* <NavLink to ='home'>Home</NavLink>
            <NavLink to ='about'>About</NavLink>
            <NavLink to ='products'>Products</NavLink> */}

            <nav style={{margin:5}}>
                <Link to='home'style={{textDecoration:'none'}}><Button color="inherit" variant="contained">Home</Button></Link>
            </nav>
            <nav style={{margin:5}}>
                <Link to='about'style={{textDecoration:'none'}}><Button color="inherit" variant="contained">About</Button></Link>
            </nav>
            <nav style={{margin:5}}>
                <Link to='products'style={{textDecoration:'none'}}> <Button variant="contained"color="inherit">Products</Button> </Link>
            </nav>
            <nav style={{margin:5}}>
                <Link to='dashboard'style={{textDecoration:'none'}}> <Button variant="contained"color="inherit">Dash Board</Button> </Link>
            </nav>

        </div>
    );
};
export default Header;