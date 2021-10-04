import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import useCart from '../../hooks/useCart';
import useCourses from '../../hooks/useCourses';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Course from '../Course/Course';
import './Home.css';

const Home = () => {
    const [courses] = useCourses([]);
    const topCourses = courses.slice(0, 4);
    const [cart, setCart] = useCart(courses);
    const history = useHistory();

    const handleAddToCart = (course) => {
        const exists = cart.find(pd => pd.id === course.id);
        console.log(exists);
        let newCart = [];
        if (exists) {
            const rest = cart.filter(pd => pd.id !== course.id);
            course['quantity'] += 1;
            newCart = [...rest, course];
        }
        else {
            course['quantity'] = 1;
            newCart = [...cart, course];
        }
        setCart(newCart);
        // console.log('new cart:', cart)
        addToDb(courses.id);
    }
    const handlecheckOut = () => {
        history.push('/orders')
    }


    return (
        <div className="shop-container">
            <div className="course-container">
                {
                    topCourses.map(course => <Course
                        id={course.id}
                        course={course}
                        handleAddToCart={handleAddToCart}
                    >
                    </Course>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}>
                    <button onClick={handlecheckOut} className="btn btn-primary">Check out</button>
                </Cart>
            </div>
        </div>
    );
};

export default Home;