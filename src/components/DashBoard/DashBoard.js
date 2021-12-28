import { Button } from '@mui/material';
import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const DashBoard = () => {
    return (
        <div>
<h1>My Dash Board</h1>
            <div>
               
                <nav >
                    <Link  to="/dashboard" style={{textDecoration:'none', margin:5}}> <Button variant="contained"color="inherit">Dash-Home</Button></Link>

                    <Link to="dashabout" style={{textDecoration:'none', margin:5}}><Button variant="contained"color="inherit">Dash-About</Button></Link>
                </nav>
            </div>
            <Outlet />
        </div>
    );
};

export default DashBoard;