import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useHistory } from 'react-router';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useCourses';
import { clearTheCart, removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
// import ReviewItem from '../reviewItem/ReviewItem';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Courses.css';
import useCourses from '../../hooks/useCourses';
import Course from '../Course/Course';
// import removeFromDb from '../../utilities/fakedb';

const Courses = (props) => {
    const [courses] = useCourses([]);
    const history = useHistory();

    const handleEnrollement = (course) => {
        history.push('/singlecourse')
    }

    return (
        <div className="container">
            <h1 className="text-center">Courses and Services</h1>
            <div className="all-course">
                {
                    courses.map(course => <Course
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

export default Courses;