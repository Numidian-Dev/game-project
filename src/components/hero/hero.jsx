import React from 'react';

const Hero = () => {
    return (
        <section className='hero'>
            <div className="hero-img">
                <img src="/assets/hero/hero.png" alt="" />
                <div className="overlay">
                    <div className="content">
                        <h1>Title content</h1>
                        <p>Lorem ipsum dolor sit amet. Et incidunt sequi aut adipisci enim
                            sed quia eius et nemo possimus qui laboriosam incidunt non quisquam
                            cupiditate quo omnis dolores. Est laboriosam dolore et assumenda
                            numquam At numquam porro hic voluptas odit ut quas reiciendis ea
                            libero consequatur. Est quia ullam qui unde quasi aut omnis internos!</p>

                        <button className='cta'>Call to action</button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;
