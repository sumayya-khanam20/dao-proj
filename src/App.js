import React from "react";

import './App.css';
import mainlogo from './images/logo.png';
import pinnedfilepic from './images/undraw_handcrafts_pinned_file.svg'
import searchfilepic from './images/undraw_handcrafts_search_files.svg'
import addoptionfilepic from './images/undraw_handcrafts_add_options.svg'
import globepic from './images/undraw_connected_world_wuay.svg';
import automatic from './images/automatic.png';
import decentralised from './images/decentralised.png';
import security from './images/security.png';
import transparency from './images/transparency.png';
import shutdown from './images/shutdown.png';






//creating a component
function App() {
    return (
        <div>
            <header>
                <img class="logo" src={mainlogo} alt="logo" />
                <nav>
                    <ul class="nav-link">
                        <li> <a href="#benefits">Benefits</a></li>
                        <li> <a href="#tokens">Tokens</a></li>
                        <li> <a href="#contact">Projects</a></li>

                        <li> <a href="#contact">Features</a></li>
                    </ul>
                </nav>
                <a class="nav-btn" href="#tokens"><button class="contact-btn">Buy Tokens</button></a>
            
              

            </header>


            <section class="frontpage">
                <div class="container">

                    <div class="card">
                        <img src={pinnedfilepic} alt="file-logo" width="100px" />
                        <div class="card-content">
                            <h1 class="card-head">What is DAO?</h1>

                            <p class="card-text">
                                DAOs are online communities. It is an organization represented by rules encoded as a computer
                                program that is transparent, controlled by the organization members and not influenced by a
                                central government.
                            </p>
                            <button class="card-button">
                                Read more...
                            </button>

                        </div>
                    </div>
                    <div class="card">
                        <img src={searchfilepic} alt="file-logo" width="100px" />
                        <div class="card-content">
                            <h1 class="card-head">How does a DAO work?</h1>

                            <p class="card-text">
                                The rules of the DAO are established by a core team of community members through the use of
                                smart contracts. These smart contracts lay out the foundational framework by which the DAO is to
                                operate.
                            </p>
                            <button class="card-button">
                                Read more...
                            </button>

                        </div>
                    </div>
                    <div class="card">
                        <img src={addoptionfilepic} alt="file-logo" width="100px" />
                        <div class="card-content">
                            <h1 class="card-head">How to join DAO?</h1>

                            <p class="card-text">
                                Unlike traditional companies or NGOs, joining a DAO is easy, and, once in, you are free to vote
                                on current proposals, propose your own ideas, build a career, or simply hang-out with
                                like-minded friends.
                            </p>
                            <button class="card-button">
                                Read more...
                            </button>

                        </div>
                    </div>


                </div>

            </section>


            <article id="benefits">
                <h1>Benefits</h1>

                <div class="grid-container">
                    <div class="box">
                        <img src={security} alt="security" />
                        <h2>Safe &amp; Secure</h2>
                    </div>

                    <div class="box">
                        <img src={decentralised} alt="decentralised" />
                        <h2>Decentralised</h2>
                    </div>

                    <div class="box">
                        <img src={transparency} alt="transparent" />
                        <h2>Open-Source</h2>
                    </div>

                    <div class="box">
                        <img src={shutdown} alt="shutdown" />
                        <h2>Can not Be Shut Down</h2>
                    </div>

                    <div class="box">
                        <img src={automatic} alt="self-regulated" />
                        <h2>Self-regulated</h2>
                    </div>
                </div>
            </article>


            <section id="tokens">
                <h1>Tokens</h1>
                <div class="guide-flex">
                    <div class="side">
                        <h5>Top DAO Cryptos</h5>
                        <p>
                            <ol>
                                <li> <a href="#" > <strong>Aave (AAVE)</strong>-Price: $193 | Market capitalization: $ 2.6 billion  </a></li>
                                <li> <a href="#"> <strong>Compound (COMP)</strong>-	Price: $229|	Market capitalization: $1.4 billion  </a></li>
                                <li> <a href="#"> <strong> Curve DAO Token (CRV)</strong>- 	Price: $3.9 |Market capitalization: $1.7 billion  </a> </li>
                                <li> <a href="#">  <strong> Dash (DASH)</strong>   -	Price: $143| Market capitalization: $1.5 billion </a></li>
                                <li> <a href="#">  <strong> Decred (DCR)</strong> -
                                    Price: $97|
                                    Market capitalization: $1.3 billion  </a></li>
                                <li> <a href="#" target="_blank">  <strong>Maker (MKR)</strong>
                                    Price: $ 2,663 |
                                    Market capitalization: $ 2.6 billion </a></li>
                                <li>  <a href="#">  <strong>Uniswap (UNI) </strong>
                                    Price: $17.7 |Market capitalization: $ 11 billion </a></li>
                            </ol>
                        </p>



                    </div>

                    <img class="globe-pic" src={globepic} alt="globe picture" width="400px" />
                </div>
            </section>

            <article id="contact">
                <div class="contact-cont">


                    <div class="extra-info">
                        <div class="products">
                            <h5>products</h5>
                            <ul >
                                <li>NFT</li>
                                <li>Exchange</li>
                                <li>Research</li>
                                <li>Binance pay</li>
                                <li>Gift Card</li>
                                <li>Trust Wallet</li>

                            </ul>
                        </div>
                        <div class="service"><
                            h5>service</h5>
                            <ul>
                                <li>Downloads</li>
                                <li>Buy crypto</li>
                                <li>BNB</li>
                                <li>VIP services</li>
                                <li>Gift Card</li>
                                <li>Trust Wallet</li>
                                <li>Brand Assets</li>

                            </ul>
                        </div>
                        <div class="learn">
                            <h5>learn</h5>
                            <ul>
                                <li>Buy BNB</li>
                                <li>Buy Bitcoin</li>
                                <li>Buy Ethereum</li>
                                <li>Buy Bitcoin Cash</li>
                                <li>Buy Tradable Altcoins</li>
                                <li>Buy Ripple</li>

                            </ul>

                        </div>



                    </div>
                    <form action="noaction.php">
                        <h2>Contact Us</h2>

                        <div class="form-group">
                            <input type="text" name="" placeholder="Enter your name" />

                        </div>
                        <div class="form-group">
                            <input type="text" name="" placeholder="Enter your Age" />

                        </div>

                        <div class="form-group">
                            <input type="text" name="" placeholder="Enter your Email Id" />

                        </div>
                        <div>
                            <input type="text" name="" placeholder="enter you feedback" />
                        </div>
                        <button class="btn">Submit</button>
                    </form>
                </div>
            </article>

            <footer>
                &copy; Copyright 2021 | DAO-Project| Sumayya Khanam
            </footer>











        </div>
    );
}



//exportiing the component
export default App;
