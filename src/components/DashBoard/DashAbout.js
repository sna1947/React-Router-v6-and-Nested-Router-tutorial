import React from 'react';
import { Outlet } from 'react-router-dom';

const DashAbout = () => {
    return (
        <div>
            <h5>Dash_About</h5>
            <p> BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBbLorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti tenetur ad ratione perferendis at, quasi asperiores similique expedita in, quaerat facilis. Facere magnam, libero quae numquam placeat vero obcaecati et quam, aliquam eius molestias iste voluptates iure temporibus. Saepe corporis officia dolorum provident impedit odio, doloremque sit cupiditate id placeat illo molestias, facilis voluptatem doloribus quam at maiores nesciunt voluptatibus nostrum. Exercitationem ea sunt eaque aut accusantium quos cum sit nostrum ex amet explicabo consectetur consequatur rem magni magnam aliquam provident ab, suscipit fugit facere labore libero? Enim libero ratione repellat culpa, ipsam accusantium quas aut doloribus! Vel, enim laboriosam. </p>
            <Outlet/>
        </div>
    );
};

export default DashAbout;