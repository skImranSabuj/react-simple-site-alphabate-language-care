import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useHistory } from 'react-router';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useCourses';
import { clearTheCart, removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewItem from '../reviewItem/ReviewItem';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Courses.css';
// import removeFromDb from '../../utilities/fakedb';

const Courses = (props) => {
    const [products] = useProducts();
    const [cart, setCart] = useCart(products);
    const array = ['beauti', 'sweety']
    console.log('yes bro: ', array.includes('bea'));
    const history = useHistory();

    const handleRemove = (key) => {
        console.log(key);
        const newCart = cart.filter(item => item.key !== key);
        setCart(newCart);
        removeFromDb(key)
    }
    const handlePlaceOrder = () => {
        setCart([]);
        clearTheCart();
        history.push('/placeorder');

    }
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

export default Courses;