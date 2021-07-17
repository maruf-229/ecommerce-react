import React, {Component} from 'react';

class Layout extends Component {
    render() {
        return (
            <div>
                {/* Top bar Start */}
                <div className="top-bar">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-sm-6">
                                <i className="fa fa-envelope" />
                                support@email.com
                            </div>
                            <div className="col-sm-6">
                                <i className="fa fa-phone-alt" />
                                +012-345-6789
                            </div>
                        </div>
                    </div>
                </div>
                {/* Top bar End */}
                {/* Nav Bar Start */}
                <div className="nav">
                    <div className="container-fluid">
                        <nav className="navbar navbar-expand-md bg-dark navbar-dark">
                            <a href="#" className="navbar-brand">MENU</a>
                            <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                                <span className="navbar-toggler-icon" />
                            </button>
                            <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                                <div className="navbar-nav mr-auto">
                                    <a href="index.html" className="nav-item nav-link active">Home</a>
                                    <a href="product-list.html" className="nav-item nav-link">Products</a>
                                    <a href="product-detail.html" className="nav-item nav-link">Product Detail</a>
                                    <a href="cart.html" className="nav-item nav-link">Cart</a>
                                    <a href="checkout.html" className="nav-item nav-link">Checkout</a>
                                    <a href="my-account.html" className="nav-item nav-link">My Account</a>
                                    <div className="nav-item dropdown">
                                        <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown">More Pages</a>
                                        <div className="dropdown-menu">
                                            <a href="wishlist.html" className="dropdown-item">Wishlist</a>
                                            <a href="login.html" className="dropdown-item">Login &amp; Register</a>
                                            <a href="contact.html" className="dropdown-item">Contact Us</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="navbar-nav ml-auto">
                                    <div className="nav-item dropdown">
                                        <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown">User Account</a>
                                        <div className="dropdown-menu">
                                            <a href="#" className="dropdown-item">Login</a>
                                            <a href="#" className="dropdown-item">Register</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
                {/* Nav Bar End */}
                {/* Bottom Bar Start */}
                <div className="bottom-bar">
                    <div className="container-fluid">
                        <div className="row align-items-center">
                            <div className="col-md-3">
                                <div className="logo">
                                    <a href="index.html">
                                        <img src="asset/img/logo.png" alt="Logo" />
                                    </a>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="search">
                                    <input type="text" placeholder="Search" />
                                    <button><i className="fa fa-search" /></button>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="user">
                                    <a href="wishlist.html" className="btn wishlist">
                                        <i className="fa fa-heart" />
                                        <span>(0)</span>
                                    </a>
                                    <a href="cart.html" className="btn cart">
                                        <i className="fa fa-shopping-cart" />
                                        <span>(0)</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Bottom Bar End */}
            </div>
        );
    }
}

export default Layout;