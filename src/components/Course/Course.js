import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faMoneyBill, faClock, faChalkboardTeacher, faCalendarDay } from '@fortawesome/free-solid-svg-icons';
import './Course.css';
import Button from 'react-bootstrap/Button';
import { ButtonGroup } from 'react-bootstrap';
import { useHistory } from 'react-router';

const Course = (props) => {
    const { course_name, isntructor, img, start_date, fee, duration, } = props.course;
    const handleEnrollement = props.handleAddToCart;
    const history = useHistory();

    return (
        <div className="Course">
            <div className="thumbnail">
                <img className="img-fluid rounded-3" src={img} alt="" />
            </div>
            <div className="course-details">
                <h4 className="course-name">{course_name}</h4>
                <p><FontAwesomeIcon icon={faChalkboardTeacher} /> Instructor: {isntructor}</p>
                <p><FontAwesomeIcon icon={faMoneyBill} /> Fees: {fee}<br />
                    <FontAwesomeIcon icon={faCalendarDay} /> Starting from: {start_date}<br />
                    <small><FontAwesomeIcon icon={faClock} /> Run time: {duration} months</small></p>
                <ButtonGroup aria-label="Basic example">
                    <Button onClick={() => history.push('/singlecourse')} variant="dark"><FontAwesomeIcon icon={faShoppingCart} /> enroll</Button>{' '}
                    <Button variant="outline-dark">Details</Button>{' '}
                </ButtonGroup>

            </div>
        </div>
    );
};

export default Course;