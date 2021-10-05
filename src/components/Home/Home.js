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

    const handleEnrollement = () => {
        history.push('/singlecourse')
    }
    const handlecheckOut = () => {
        history.push('/orders')
    }


    return (
        <div className="home-container pb-3">
            <div className="cart-container">
                <Cart cart={cart}>
                    <button onClick={handlecheckOut} className="btn btn-dark">Check out</button>
                </Cart>
            </div>
            <div className="course-container">
                {
                    topCourses.map(course => <Course
                        id={course.id}
                        course={course}
                        handleEnrollement={handleEnrollement}
                    >
                    </Course>)
                }
            </div>

        </div>
    );
};

export default Home;