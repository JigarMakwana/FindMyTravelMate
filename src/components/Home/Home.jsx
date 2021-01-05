import React, { Component } from 'react';
import '../../stylesheets/Home.css';
import car from '../../images/A2HomeCar.png'
import plane from '../../images/A2HomeFlight.png'

export class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <section>
                <br/>
                <br/>
                <header >
                    <h1>Your Travelmate is just a few clicks away </h1>
                </header>
                <section class="container for car and flight journeys">
                    <section class="row mt-5 pt-5">
                        <div class="col-sm-1"> </div>
                        <article class="col-sm-4">
                            <header><h1 class="mt-5 pt-5">Car Journey</h1></header>
                            <main>
                                <p className="lead mt-4">Now, Share and Offer a ride and meet amazing new people.
                                    Less Cars on the roads, Less the pollution in air.<br/>Save Environment.</p>
                                <a href="/underimplementation" className="journey">Let's Ride Now</a>
                            </main>
                        </article>
                        <div class="col-sm-1"> </div>
                        <section class="col-sm-5">
                            <figure>
                                <img
                                    src={car}
                                    id="Car Journey"
                                    class="img-fluid"
                                    alt=""/>
                            </figure>
                        </section>
                        <div class="col-sm-1"> </div>
                    </section>

                    <section class="row  pt-5">
                        <div class="col-sm-1"> </div>
                        <section class="col-sm-5">
                            <figure>
                                <img
                                    src={plane}
                                    id="Flight Journey"
                                    class="img-fluid"
                                    alt="carpool ride taker"/>
                            </figure>
                        </section>
                        <div class="col-sm-1"> </div>
                        <article class="col-sm-4">
                            <header><h1 class="mt-5 pt-5">Flight Journey</h1></header>
                            <main>
                                <p class="lead mt-4">Planning for a air journey? Yes, it would be a little boring alone.
                                    Find your travel mate and make your journey memorable.</p>
                                <a href="/underimplementation" classname="journey">Let's Fly Now</a>
                            </main>
                        </article>
                        <div class="col-sm-1"> </div>
                    </section>
                </section>

                <div className="space from footer pt-5 pb-5"></div>

            </section>
        )};
}