import React from 'react';
import { Outlet } from 'react-router-dom';

const DashHome = () => {
    return (
        <div>
            <h5>Dash_Home</h5>
            <p> AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAALorem ipsum dolor sit amet consectetur adipisicing elit. Laborum aperiam ducimus quae soluta facilis autem cumque placeat dolorum perspiciatis. Nisi excepturi consequuntur ad quas, quo architecto vitae, facilis quod blanditiis nobis tenetur odit rem possimus eligendi distinctio. Eveniet atque mollitia labore a officia commodi, iste deserunt dolorem dignissimos, nam rerum odit iure consequuntur eligendi unde et doloremque corrupti eaque consequatur vitae voluptatum nulla. Quaerat odio cupiditate ea dolorem a facere iusto amet illo molestias placeat dolore optio veniam blanditiis corrupti ipsam ullam maxime vitae harum, accusamus beatae modi nihil? Minima temporibus autem tempore reiciendis eius voluptates quia reprehenderit hic dolor!</p>

            <Outlet/>

        </div>
    );
};

export default DashHome;