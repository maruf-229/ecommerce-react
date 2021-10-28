import React, {Component} from 'react';
import Slider from "react-slick";
import axios from "axios";

class Index extends Component {

    state={
        categories:[],
        products:[]
    }
    componentDidMount() {
        axios.get('/categorieses')
            .then((response)=>{
                this.setState({categories:response.data})
            })
            .catch((error)=>{
                console.log(error);
            })

        axios.get('/recentproducts')
            .then((response)=>{
                this.setState({products:response.data})
            })
            .catch((error)=>{
                console.log(error);
            })
    }

    render() {
        var banner = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
        };
        var brands = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 5,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 1000
        };

        const categories=this.state.categories;
        const allPersons=categories.map((category,idx)=>{
            return(
                <div>
                    <li className="nav-item">
                        <a className="nav-link" href="#"><i className="fa category-item" />{category.category_name}</a>
                    </li>
                </div>
            )
        });

        const products=this.state.products;
        const recentProducts=products.map((product,idx)=>{
            return(
                <div className="col-lg-3">
                    <div className="product-item">
                        <div className="product-title">
                            <a href="#">{product.name}</a>
                            <div className="ratting">
                                <i className="fa fa-star" />
                                <i className="fa fa-star" />
                                <i className="fa fa-star" />
                                <i className="fa fa-star" />
                                <i className="fa fa-star" />
                            </div>
                        </div>
                        <div className="product-image">
                            <a href="product-detail.html">
                                    <img src={"https://localhost/phpmyadmin/sql.php?db=spa_ecom&table=products&pos=0"+product.image} alt="product" />
                            </a>
                            <div className="product-action">
                                    <a href="#"><i className="fa fa-cart-plus" /></a>
                                    <a href="#"><i className="fa fa-heart" /></a>
                                    <a href="#"><i className="fa fa-search" /></a>
                            </div>
                        </div>
                        <div className="product-price">
                                <h3><span>$</span>{product.price}</h3>
                                <a className="btn" href><i className="fa fa-shopping-cart" />Buy Now</a>
                        </div>
                    </div>
                </div>

            )
        });

        return (
            <div>
                {/* Main Slider Start */}
                <div className="header">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-3">
                                <nav className="navbar bg-light">
                                    <ul className="navbar-nav">
                                        <li className="nav-item">
                                            <a className="nav-link" href="#"><i className="fa fa-home" />Home</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#"><i className="fa fa-shopping-bag" />Categories</a>
                                        </li>
                                        { allPersons }
                                    </ul>
                                </nav>
                            </div>
                            <div className="col-md-6">
                                <div className="header-slider normal-slider">
                                    <Slider {...banner}>
                                        <div>
                                            <div className="header-slider-item">
                                                <img src="asset/img/slider-1.jpg" alt="Slider Image" />
                                                <div className="header-slider-caption">
                                                    <p>Some text goes here that describes the image</p>
                                                    <a className="btn" href><i className="fa fa-shopping-cart" />Shop Now</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="header-slider-item">
                                                <img src="asset/img/slider-2.jpg" alt="Slider Image" />
                                                <div className="header-slider-caption">
                                                    <p>Some text goes here that describes the image</p>
                                                    <a className="btn" href><i className="fa fa-shopping-cart" />Shop Now</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="header-slider-item">
                                                <img src="asset/img/slider-3.jpg" alt="Slider Image" />
                                                <div className="header-slider-caption">
                                                    <p>Some text goes here that describes the image</p>
                                                    <a className="btn" href><i className="fa fa-shopping-cart" />Shop Now</a>
                                                </div>
                                            </div>
                                        </div>
                                    </Slider>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="header-img">
                                    <div className="img-item">
                                        <img src="asset/img/category-1.jpg" />
                                        <a className="img-text" href>
                                            <p>Some text goes here that describes the image</p>
                                        </a>
                                    </div>
                                    <div className="img-item">
                                        <img src="asset/img/category-2.jpg" />
                                        <a className="img-text" href>
                                            <p>Some text goes here that describes the image</p>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Main Slider End */}
                {/* Brand Start */}
                <div className="brand">
                    <div className="container-fluid">
                        <div className="brand-slider">
                            <Slider {...brands}>
                                <div><div className="brand-item"><img src="asset/img/brand-1.png" alt="" /></div></div>
                                <div><div className="brand-item"><img src="asset/img/brand-2.png" alt="" /></div></div>
                                <div><div className="brand-item"><img src="asset/img/brand-3.png" alt="" /></div></div>
                                <div><div className="brand-item"><img src="asset/img/brand-4.png" alt="" /></div></div>
                                <div><div className="brand-item"><img src="asset/img/brand-5.png" alt="" /></div></div>
                                <div><div className="brand-item"><img src="asset/img/brand-6.png" alt="" /></div></div>
                            </Slider>
                        </div>
                    </div>
                </div>
                {/* Brand End */}
                {/* Feature Start*/}
                <div className="feature">
                    <div className="container-fluid">
                        <div className="row align-items-center">
                            <div className="col-lg-3 col-md-6 feature-col">
                                <div className="feature-content">
                                    <i className="fab fa-cc-mastercard" />
                                    <h2>Secure Payment</h2>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur elit
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 feature-col">
                                <div className="feature-content">
                                    <i className="fa fa-truck" />
                                    <h2>Worldwide Delivery</h2>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur elit
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 feature-col">
                                <div className="feature-content">
                                    <i className="fa fa-sync-alt" />
                                    <h2>90 Days Return</h2>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur elit
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 feature-col">
                                <div className="feature-content">
                                    <i className="fa fa-comments" />
                                    <h2>24/7 Support</h2>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur elit
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Feature End*/}
                {/* Category Start*/}
                <div className="category">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-3">
                                <div className="category-item ch-400">
                                    <img src="asset/img/category-3.jpg" />
                                    <a className="category-name" href>
                                        <p>Some text goes here that describes the image</p>
                                    </a>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="category-item ch-250">
                                    <img src="asset/img/category-4.jpg" />
                                    <a className="category-name" href>
                                        <p>Some text goes here that describes the image</p>
                                    </a>
                                </div>
                                <div className="category-item ch-150">
                                    <img src="asset/img/category-5.jpg" />
                                    <a className="category-name" href>
                                        <p>Some text goes here that describes the image</p>
                                    </a>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="category-item ch-150">
                                    <img src="asset/img/category-6.jpg" />
                                    <a className="category-name" href>
                                        <p>Some text goes here that describes the image</p>
                                    </a>
                                </div>
                                <div className="category-item ch-250">
                                    <img src="asset/img/category-7.jpg" />
                                    <a className="category-name" href>
                                        <p>Some text goes here that describes the image</p>
                                    </a>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="category-item ch-400">
                                    <img src="asset/img/category-8.jpg" />
                                    <a className="category-name" href>
                                        <p>Some text goes here that describes the image</p>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Category End*/}
                {/* Call to Action Start */}
                <div className="call-to-action">
                    <div className="container-fluid">
                        <div className="row align-items-center">
                            <div className="col-md-6">
                                <h1>call us for any queries</h1>
                            </div>
                            <div className="col-md-6">
                                <a href="tel:0123456789">+012-345-6789</a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Call to Action End */}
                {/* Featured Product Start */}
                <div className="featured-product product">
                    <div className="container-fluid">
                        <div className="section-header">
                            <h1>Featured Product</h1>
                        </div>
                        <div className="row align-items-center product-slider product-slider-4">
                            <div className="col-lg-3">
                                <div className="product-item">
                                    <div className="product-title">
                                        <a href="#">Product Name</a>
                                        <div className="ratting">
                                            <i className="fa fa-star" />
                                            <i className="fa fa-star" />
                                            <i className="fa fa-star" />
                                            <i className="fa fa-star" />
                                            <i className="fa fa-star" />
                                        </div>
                                    </div>
                                    <div className="product-image">
                                        <a href="product-detail.html">
                                            <img src="asset/img/product-1.jpg" alt="Product Image" />
                                        </a>
                                        <div className="product-action">
                                            <a href="#"><i className="fa fa-cart-plus" /></a>
                                            <a href="#"><i className="fa fa-heart" /></a>
                                            <a href="#"><i className="fa fa-search" /></a>
                                        </div>
                                    </div>
                                    <div className="product-price">
                                        <h3><span>$</span>99</h3>
                                        <a className="btn" href><i className="fa fa-shopping-cart" />Buy Now</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className="product-item">
                                    <div className="product-title">
                                        <a href="#">Product Name</a>
                                        <div className="ratting">
                                            <i className="fa fa-star" />
                                            <i className="fa fa-star" />
                                            <i className="fa fa-star" />
                                            <i className="fa fa-star" />
                                            <i className="fa fa-star" />
                                        </div>
                                    </div>
                                    <div className="product-image">
                                        <a href="product-detail.html">
                                            <img src="asset/img/product-2.jpg" alt="Product Image" />
                                        </a>
                                        <div className="product-action">
                                            <a href="#"><i className="fa fa-cart-plus" /></a>
                                            <a href="#"><i className="fa fa-heart" /></a>
                                            <a href="#"><i className="fa fa-search" /></a>
                                        </div>
                                    </div>
                                    <div className="product-price">
                                        <h3><span>$</span>99</h3>
                                        <a className="btn" href><i className="fa fa-shopping-cart" />Buy Now</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className="product-item">
                                    <div className="product-title">
                                        <a href="#">Product Name</a>
                                        <div className="ratting">
                                            <i className="fa fa-star" />
                                            <i className="fa fa-star" />
                                            <i className="fa fa-star" />
                                            <i className="fa fa-star" />
                                            <i className="fa fa-star" />
                                        </div>
                                    </div>
                                    <div className="product-image">
                                        <a href="product-detail.html">
                                            <img src="asset/img/product-3.jpg" alt="Product Image" />
                                        </a>
                                        <div className="product-action">
                                            <a href="#"><i className="fa fa-cart-plus" /></a>
                                            <a href="#"><i className="fa fa-heart" /></a>
                                            <a href="#"><i className="fa fa-search" /></a>
                                        </div>
                                    </div>
                                    <div className="product-price">
                                        <h3><span>$</span>99</h3>
                                        <a className="btn" href><i className="fa fa-shopping-cart" />Buy Now</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className="product-item">
                                    <div className="product-title">
                                        <a href="#">Product Name</a>
                                        <div className="ratting">
                                            <i className="fa fa-star" />
                                            <i className="fa fa-star" />
                                            <i className="fa fa-star" />
                                            <i className="fa fa-star" />
                                            <i className="fa fa-star" />
                                        </div>
                                    </div>
                                    <div className="product-image">
                                        <a href="product-detail.html">
                                            <img src="asset/img/product-4.jpg" alt="Product Image" />
                                        </a>
                                        <div className="product-action">
                                            <a href="#"><i className="fa fa-cart-plus" /></a>
                                            <a href="#"><i className="fa fa-heart" /></a>
                                            <a href="#"><i className="fa fa-search" /></a>
                                        </div>
                                    </div>
                                    <div className="product-price">
                                        <h3><span>$</span>99</h3>
                                        <a className="btn" href><i className="fa fa-shopping-cart" />Buy Now</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className="product-item">
                                    <div className="product-title">
                                        <a href="#">Product Name</a>
                                        <div className="ratting">
                                            <i className="fa fa-star" />
                                            <i className="fa fa-star" />
                                            <i className="fa fa-star" />
                                            <i className="fa fa-star" />
                                            <i className="fa fa-star" />
                                        </div>
                                    </div>
                                    <div className="product-image">
                                        <a href="product-detail.html">
                                            <img src="asset/img/product-5.jpg" alt="Product Image" />
                                        </a>
                                        <div className="product-action">
                                            <a href="#"><i className="fa fa-cart-plus" /></a>
                                            <a href="#"><i className="fa fa-heart" /></a>
                                            <a href="#"><i className="fa fa-search" /></a>
                                        </div>
                                    </div>
                                    <div className="product-price">
                                        <h3><span>$</span>99</h3>
                                        <a className="btn" href><i className="fa fa-shopping-cart" />Buy Now</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Featured Product End */}
                {/* Newsletter Start */}
                <div className="newsletter">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-6">
                                <h1>Subscribe Our Newsletter</h1>
                            </div>
                            <div className="col-md-6">
                                <div className="form">
                                    <input type="email" defaultValue="Your email here" />
                                    <button>Submit</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Newsletter End */}
                {/* Recent Product Start */}
                <div className="recent-product product">
                    <div className="container-fluid">
                        <div className="section-header">
                            <h1>Recent Product</h1>
                        </div>
                        <div className="row align-items-center product-slider product-slider-4">
                            <div className="col-lg-3">
                                <div className="product-item">
                                    <div className="product-title">
                                        <a href="#">Product Name</a>
                                        <div className="ratting">
                                            <i className="fa fa-star" />
                                            <i className="fa fa-star" />
                                            <i className="fa fa-star" />
                                            <i className="fa fa-star" />
                                            <i className="fa fa-star" />
                                        </div>
                                    </div>
                                    <div className="product-image">
                                        <a href="product-detail.html">
                                            <img src="asset/img/product-6.jpg" alt="Product Image" />
                                        </a>
                                        <div className="product-action">
                                            <a href="#"><i className="fa fa-cart-plus" /></a>
                                            <a href="#"><i className="fa fa-heart" /></a>
                                            <a href="#"><i className="fa fa-search" /></a>
                                        </div>
                                    </div>
                                    <div className="product-price">
                                        <h3><span>$</span>99</h3>
                                        <a className="btn" href><i className="fa fa-shopping-cart" />Buy Now</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className="product-item">
                                    <div className="product-title">
                                        <a href="#">Product Name</a>
                                        <div className="ratting">
                                            <i className="fa fa-star" />
                                            <i className="fa fa-star" />
                                            <i className="fa fa-star" />
                                            <i className="fa fa-star" />
                                            <i className="fa fa-star" />
                                        </div>
                                    </div>
                                    <div className="product-image">
                                        <a href="product-detail.html">
                                            <img src="asset/img/product-7.jpg" alt="Product Image" />
                                        </a>
                                        <div className="product-action">
                                            <a href="#"><i className="fa fa-cart-plus" /></a>
                                            <a href="#"><i className="fa fa-heart" /></a>
                                            <a href="#"><i className="fa fa-search" /></a>
                                        </div>
                                    </div>
                                    <div className="product-price">
                                        <h3><span>$</span>99</h3>
                                        <a className="btn" href><i className="fa fa-shopping-cart" />Buy Now</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className="product-item">
                                    <div className="product-title">
                                        <a href="#">Product Name</a>
                                        <div className="ratting">
                                            <i className="fa fa-star" />
                                            <i className="fa fa-star" />
                                            <i className="fa fa-star" />
                                            <i className="fa fa-star" />
                                            <i className="fa fa-star" />
                                        </div>
                                    </div>
                                    <div className="product-image">
                                        <a href="product-detail.html">
                                            <img src="asset/img/product-8.jpg" alt="Product Image" />
                                        </a>
                                        <div className="product-action">
                                            <a href="#"><i className="fa fa-cart-plus" /></a>
                                            <a href="#"><i className="fa fa-heart" /></a>
                                            <a href="#"><i className="fa fa-search" /></a>
                                        </div>
                                    </div>
                                    <div className="product-price">
                                        <h3><span>$</span>99</h3>
                                        <a className="btn" href><i className="fa fa-shopping-cart" />Buy Now</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className="product-item">
                                    <div className="product-title">
                                        <a href="#">Product Name</a>
                                        <div className="ratting">
                                            <i className="fa fa-star" />
                                            <i className="fa fa-star" />
                                            <i className="fa fa-star" />
                                            <i className="fa fa-star" />
                                            <i className="fa fa-star" />
                                        </div>
                                    </div>
                                    <div className="product-image">
                                        <a href="product-detail.html">
                                            <img src="asset/img/product-9.jpg" alt="Product Image" />
                                        </a>
                                        <div className="product-action">
                                            <a href="#"><i className="fa fa-cart-plus" /></a>
                                            <a href="#"><i className="fa fa-heart" /></a>
                                            <a href="#"><i className="fa fa-search" /></a>
                                        </div>
                                    </div>
                                    <div className="product-price">
                                        <h3><span>$</span>99</h3>
                                        <a className="btn" href><i className="fa fa-shopping-cart" />Buy Now</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className="product-item">
                                    <div className="product-title">
                                        <a href="#">Product Name</a>
                                        <div className="ratting">
                                            <i className="fa fa-star" />
                                            <i className="fa fa-star" />
                                            <i className="fa fa-star" />
                                            <i className="fa fa-star" />
                                            <i className="fa fa-star" />
                                        </div>
                                    </div>
                                    <div className="product-image">
                                        <a href="product-detail.html">
                                            <img src="asset/img/product-10.jpg" alt="Product Image" />
                                        </a>
                                        <div className="product-action">
                                            <a href="#"><i className="fa fa-cart-plus" /></a>
                                            <a href="#"><i className="fa fa-heart" /></a>
                                            <a href="#"><i className="fa fa-search" /></a>
                                        </div>
                                    </div>
                                    <div className="product-price">
                                        <h3><span>$</span>99</h3>
                                        <a className="btn" href><i className="fa fa-shopping-cart" />Buy Now</a>
                                    </div>
                                </div>
                            </div>
                            { recentProducts }
                        </div>
                    </div>
                </div>
                {/* Recent Product End */}
                {/* Review Start */}
                <div className="review">
                    <div className="container-fluid">
                        <div className="row align-items-center review-slider normal-slider">
                            <div className="col-md-6">
                                <div className="review-slider-item">
                                    <div className="review-img">
                                        <img src="asset/img/review-1.jpg" alt="Image" />
                                    </div>
                                    <div className="review-text">
                                        <h2>Customer Name</h2>
                                        <h3>Profession</h3>
                                        <div className="ratting">
                                            <i className="fa fa-star" />
                                            <i className="fa fa-star" />
                                            <i className="fa fa-star" />
                                            <i className="fa fa-star" />
                                            <i className="fa fa-star" />
                                        </div>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vitae nunc eget leo finibus luctus et vitae lorem
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="review-slider-item">
                                    <div className="review-img">
                                        <img src="asset/img/review-2.jpg" alt="Image" />
                                    </div>
                                    <div className="review-text">
                                        <h2>Customer Name</h2>
                                        <h3>Profession</h3>
                                        <div className="ratting">
                                            <i className="fa fa-star" />
                                            <i className="fa fa-star" />
                                            <i className="fa fa-star" />
                                            <i className="fa fa-star" />
                                            <i className="fa fa-star" />
                                        </div>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vitae nunc eget leo finibus luctus et vitae lorem
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="review-slider-item">
                                    <div className="review-img">
                                        <img src="asset/img/review-3.jpg" alt="Image" />
                                    </div>
                                    <div className="review-text">
                                        <h2>Customer Name</h2>
                                        <h3>Profession</h3>
                                        <div className="ratting">
                                            <i className="fa fa-star" />
                                            <i className="fa fa-star" />
                                            <i className="fa fa-star" />
                                            <i className="fa fa-star" />
                                            <i className="fa fa-star" />
                                        </div>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vitae nunc eget leo finibus luctus et vitae lorem
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Review End */}
            </div>
        );
    }
}

export default Index;