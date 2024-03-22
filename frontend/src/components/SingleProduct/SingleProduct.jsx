import "./SingleProduct.scss";
import img from '../../assets/vivo-iQOO-Neo-9-Pro-600x600.jpg'
import{
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaLinkedinIn,
    FaPinterest,
    FaCartPlus,
} from 'react-icons/fa'

const SingleProduct = () => {
    return <div className="single-product-main-content">
    <div className="layout">
        <div className="single-product-page">
            <div className="left">
                <img src={img} alt="image" />
            </div>
            <div className="right">

            <span className="name">Product name</span>
            <span className="price">Price</span>
            <span className="desc">Product Description</span>
            <div className="cart-buttons">
                <div className="quantity-buttons">
                    <span>-</span>
                    <span>5</span>
                    <span>+</span>
                </div>

                <button className="add-to-cart-button">
                <FaCartPlus size={20}/>
                    ADD TO CART
                </button>
            </div>

            {/* <span className="divider"/>

            <div className="info-item">
                <span className="text-bold">Category:
                <span className="normal-text">Headphones</span>
                </span>

                <span className="text-bold">Share:
                <span className="Social-icons">
                <FaFacebookF size={16}/>
                <FaTwitter size={16}/>
                <FaInstagram size={16}/>
                <FaLinkedinIn size={16}/>
                <FaPinterest size={16}/>
                </span>
                </span>
            </div> */}


            
            </div>
        </div>

    </div>
    </div>;
};

export default SingleProduct;
