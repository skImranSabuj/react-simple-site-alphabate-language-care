import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Course.css';

const Course = (props) => {
    // console.log(props.course);
    // "language": "Yiddish",
    const { course_name, isntructor, img, start_date, fee, duration, } = props.course;

    return (
        <div className="Course">
            <div className="thumbnail">
                <img className="img-fluid" src={img} alt="" />
            </div>
            <div>
                <h4 className="product-name">{course_name}</h4>
                <p><small>Instructed by: {isntructor}</small></p>
                <p>Tution Fees: {fee}</p>
                <p>Starting from: {start_date}</p>
                <p><small>Run time: {duration} months</small></p>
                <button
                    onClick={() => props.handleAddToCart(props.product)}
                    className="btn btn-primary"
                ><FontAwesomeIcon icon={faShoppingCart} /> enroll</button>
            </div>
        </div>
    );
};

export default Course;