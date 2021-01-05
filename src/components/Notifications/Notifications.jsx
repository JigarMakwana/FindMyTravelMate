import React, {Component} from 'react';
import InfiniteScroll from "react-infinite-scroll-component";
import '../../stylesheets/Notifications.css';
import backArrow from '../../images/A2NtfcnPrvArrow.png';
import datamap from './NotificationsFromDB';


export class Notifications extends Component {
    state = {
        items: Array.from(datamap),
        view: ""
    };

    redirectToHome = () => {
        this.props.history.push('/home');
    }

    viewNotification = (e) => {
        e.preventDefault();
        console.log('Function called');
        alert("Here detailed notification will be implemented!");
    }

    render() {
        console.log(this.state.items);
        return (
                <section className="col-12 col-lg-6">
                    <header className="header justify-content-center">
                    <figure className="h3">
                        <img src={backArrow}
                             width="40"
                             height="40"
                             alt=""
                             className="d-inline-block align-top"
                             onClick={this.redirectToHome}
                        />{' '}
                        Notifications
                    </figure>
                    </header>

                    <section className="card notfcn-card hv-center" id="scrollableCard">
                        <br/>
                        <InfiniteScroll
                            dataLength={this.state.items.length}
                            hasMore={true}
                            loader={<h4>You are up to date...</h4>}
                            scrollableTarget="scrollableCard"
                        >
                            <main>
                            {this.state.items.map((i, index) => (
                                <div className="style">
                                    <row>
                                        <div className="notification">
                                            <span><strong> {i[0]} </strong></span>
                                            <button
                                                type="submit"
                                                className="custom-button"
                                                onClick={this.viewNotification}
                                            >View
                                            </button>
                                            <br/>
                                            <span> {i[1]} </span>
                                        </div>
                                    </row>
                                <hr/>
                                </div>
                            ))}
                            </main>
                        </InfiniteScroll>
                    </section>
                </section>
        );
    }
}


