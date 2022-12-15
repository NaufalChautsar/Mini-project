import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Header from './Components/Header';
import About from './Views/About';
import Home from './Views/Home';
import Footer from './Components/Footer';
import Product from './Views/Product';

function App() {
    return (
        <div className="relative pb-10 min-h-screen">
            <Header />
            <div className="p-5">
                <Routes>
                    <Route
                        path="/"
                        element={<Home />}
                    />
                    <Route
                        path="/about"
                        element={<About />}
                    />
                    <Route
                        path="/products/:id"
                        element={<Product />}
                    />
                    <Route
                        path="*"
                        element={'Not Found'}
                    />
                </Routes>
            </div>
            <Footer />
        </div>
    );
}

export default App;
