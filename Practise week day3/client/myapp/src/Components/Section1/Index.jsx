import './index.css'
import React from 'react';
import Carousel from 'nuka-carousel';

export default class extends React.Component {
    render() {
        return (
            <Carousel>
                <div className='picture1'>
                    <img src="https://mobirise.com/extensions/floram4/floral-studio/assets/images/sl1-967x725.jpg" />
                    <div className='sliderTitle'>
                        <h4 className='picture1h4'>Floral</h4>
                        <h1 className='picture1h1'>Excellent bouquets for you</h1>
                    </div>
                </div>
                <div className='picture1'>
                    <img src="https://mobirise.com/extensions/floram4/floral-studio/assets/images/sl7.jpg" />
                    <div className='sliderTitle'>
                        <h4 className='picture1h4'>Floral</h4>
                        <h1 className='picture1h1'>Excellent bouquets for you</h1>
                    </div>
                </div>
                <div className='picture1'>
                    <img src="https://mobirise.com/extensions/floram4/floral-studio/assets/images/sl4.jpg" />
                    <div className='sliderTitle'>
                        <h4 className='picture1h4'>Fixed-Height Slider</h4>
                        <h1 className='picture1h1'>Excellent bouquets for you</h1>
                    </div>
                </div>
            </Carousel>
        );
    }
}