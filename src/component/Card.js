import React from 'react'
import './Card.css';
const Card = () => {
    return (
        <div>
            <div className='mainCard'>
                <h1 className='App'>Shoes Store</h1>
                <div className="container">
                    <div className="row">
                        <div className="col-sm">
                            <div className="card" style={{ width: "18rem" }} >
                                <img className="card-img-top" src="https://rukminim1.flixcart.com/image/450/500/xif0q/shoe/k/i/6/6-jimny-white-6-sfr-white-original-imagnp4zhejww3uf.jpeg?q=90&crop=false" alt="..." />
                                <div className="card-body">
                                    <h3>White Shoes</h3>
                                    <button style={{ margin: "20px" }} type="button" className="btn btn-primary">Buy</button>
                                    <button type="button" className="btn btn-dark">Add Cart</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm">
                            <div className="card" style={{ width: "18rem" }} >
                                <img className="card-img-top" src="https://cdn.shopify.com/s/files/1/0342/1451/0651/products/0008_emilia_blue_pu_300x.jpg?v=1681667684" alt="..." />
                                <div className="card-body">
                                    <h3>Bluiee Heels</h3>
                                    <button style={{ margin: "20px" }}  type="button" className="btn btn-primary">Buy</button>
                                    <button type="button" className="btn btn-dark">Add Cart</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm">
                            <div className="card" style={{ width: "18rem" }} >
                                <img className="card-img-top" src="https://5.imimg.com/data5/ANDROID/Default/2021/8/UR/IO/IT/54132075/product-jpeg.jpg" alt="..." />
                                <div className="card-body">
                                    <h3>white-Blue Shoes</h3>
                                    <button style={{ margin: "20px" }} type="button" className="btn btn-primary">Buy</button>
                                    <button type="button" className="btn btn-dark">Add Cart</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm">
                            <div className="card" style={{ width: "18rem" }} >
                                <img className="card-img-top" src="https://images-cdn.ubuy.co.in/6437ddd98214d40c445d581b-nike-air-jordan-1-mid-coral-chalk-white.jpg" alt="..." />
                                <div className="card-body">
                                    <h3>Pinky Shoes</h3>
                                    <button style={{ margin: "20px" }} type="button" className="btn btn-primary">Buy</button>
                                    <button type="button" className="btn btn-dark">Add Cart</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm">
                            <div className="card" style={{ width: "18rem" }} >
                                <img className="card-img-top" src="https://image.made-in-china.com/202f0j00ResVYtcnbCkg/Fashion-Footwear-Lady-Sandals-Women-Shoes-High-Heel-Sandals-Ladies-Shoes-Women-prime-S-Sandals.webp" alt="..." />
                                <div className="card-body">
                                    <h3>Pinkie Heels</h3>
                                    <button style={{ margin: "20px" }} type="button" className="btn btn-primary">Buy</button>
                                    <button type="button" className="btn btn-dark">Add Cart</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm">
                            <div className="card" style={{ width: "18rem" }} >
                                <img className="card-img-top" src="https://www.shutterstock.com/image-photo/blue-patent-leather-shoes-on-260nw-757783723.jpg" alt="..." />
                                <div className="card-body">
                                    <h3>Blue Heels</h3>
                                    <button style={{ margin: "20px" }} type="button" className="btn btn-primary">Buy</button>
                                    <button type="button" className="btn btn-dark">Add Cart</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card
