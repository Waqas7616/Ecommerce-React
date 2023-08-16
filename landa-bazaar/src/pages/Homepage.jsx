import React, { useState, useEffect } from 'react'
import './Homepage.css'
import Hero from '../components/Hero/Hero'
import Header from '../components/Navbar/Header'
import IconSquare from '../components/icon-box/iconBox'
import truck from '../images/icons/truck.webp'
import num from '../images/icons/24.webp'
import money from '../images/icons/money.webp'
import off from '../images/icons/off.webp'
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import axios from 'axios'
import ProductCard from '../components/product-card/ProductCard'


function Homepage() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://fakestoreapi.com/products?limit=6');
                setData(response.data)
                console.log(data)
            } catch (error) {
                console.log(error)
            }
        }
        fetchData();

    }, [])

    // const resp = axios.get('https://fakestoreapi.com/products?limit=10').then(function (response) {
    //     console.log(response)
    // }).catch(function (error) {
    //     console.log(error)
    // })
    // const data = resp.data;
    // console.log(data)
    return (
        <div className='container-fluid'>
            <Header />
            <Hero />

            <div className="support-section d-flex justify-content-between container">
                <IconSquare icon={truck} title='Free Shipping' /><IconSquare icon={num} title='Support 24/7' /><IconSquare icon={money} title='Money Return' /><IconSquare icon={off} title='Order Discount' />
            </div>
            <h2 className="primary-heading">Daily Deals</h2>
            <div className="home-tabs container">

                <Tabs
                    defaultActiveKey="profile"
                    id="uncontrolled-tab-example"
                    className="mb-3 justify-content-center gap-5"
                >
                    <Tab eventKey="home" title="New Arrivals">
                        <div className="container d-flex flex-wrap justify-content-between">
                            {data.map((sample) => {
                                return (
                                    <ProductCard key={sample.id} title={sample.title} price={sample.price} discount={sample.price} image={sample.image} />
                                )
                            })}
                        </div>
                    </Tab>
                    <Tab eventKey="profile" title="Best Sellers">
                        Best Sellers
                    </Tab>
                    <Tab eventKey="contact" title="Sale Items">
                        Sale Items
                    </Tab>
                </Tabs>



            </div>
        </div>
    )
}

export default Homepage
