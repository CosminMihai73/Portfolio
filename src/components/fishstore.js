import React from 'react';
import './fishstore.css'

function FishStore() {
    return (
        <div className="fish-store-container">
            <h2>Fishing Store Documentation</h2>
            <p>
                A web-based application developed from scratch using HTML, PHP, CSS, and JavaScript.
                The system includes a MySQL database to manage product information, user authentication, and shopping cart functionality.
            </p>

            <h3>Features</h3>
            <ol>
                <li>
                    <strong>Search Bar</strong>
                    <p>
                        Users can search for products using a search bar.
                        The search query is used to retrieve relevant information from the database.
                        <img src="/Fish.png" alt="Store" />
                    </p>
                </li>
                <li>
                    <strong>User Authentication</strong>
                    <p>
                        User registration and login functionality.
                        Secure password storage using hashing techniques.
                        Access control to restrict certain features to authenticated users.
                        <img src="/fish3.png" alt="Store" />
                    </p>
                </li>
                <li>
                    <strong>Shopping Cart</strong>
                    <p>
                        Users can add products to their shopping cart.
                        The shopping cart retains product information and allows users to adjust quantities.
                        Total cost calculation and checkout functionality.
                        <img src="/fish2.png" alt="Store" />
                    </p>
                </li>
                <li>
                    <strong>Products Display</strong>
                    <p>
                        Displaying products by categories.
                        <img src="/fish4.png" alt="Store" />
                    </p>
                </li>
                <li>
                    <strong>Data base tables</strong>
                    <p>
                        Displaying products by categories.
                        <img src="/fish5.png" alt="Store" />
                    </p>
                </li>
            </ol>
        </div>
    );
}

export default FishStore;
