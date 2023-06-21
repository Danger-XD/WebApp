import React from "react"
import "./Footer.css"
const Footer = () => <footer className="footerr page-footer font-small blue pt-4">
    <div className="container-fluid text-center text-md-left">
        <div className="row">
            <div className="col-md-6 mt-md-0 mt-3">
            <img
              alt=""
              src={require('./bldrp.png')} 
              width="30"
              height="30"
              className="d-inline-block align-top"
            />
                <h5 className="text-case">Best Blood Bank</h5>
                <p>Donate blood and save lives. We honor the silent heroes who save lives through 
                    their blood donation. Your selflessness and dedication make the world a better
                    place.</p>
                <p>Location: 4870 May Street, City: Somerset, State: Kentucky, Zip code: 42501, Country: United States</p>
            </div>

            <hr className="clearfix w-100 d-md-none pb-0"/>

            <div className="col-md-3 mb-md-0 mb-3">
                <h5 className="text-uppercase">Connect with us</h5>
                <ul className="list-unstyled">
                    <li><a href="#!">BBB@facebook.com</a></li>
                    <li><a href="#!">BBB@insta.com</a></li>
                    <li><a href="#!">BBB@twitter.com</a></li>
                    <li><a href="#!">BBB@reddit.com</a></li>
                </ul>
            </div>

            <div className="col-md-3 mb-md-0 mb-3">
                <h5 className="text-uppercase">Contact Us</h5>
                <ul className="list-unstyled">
                    <li><a href="#!">Bestbloodbank@bbb.com</a></li>
                    <li>+8006563</li>
                    <li>+5665656</li>
                    <li>+4545465</li>
                </ul>
            </div>
        </div>
    </div>

    <div className="footer-copyright text-center py-3">© 2023 Copyright:
        <a href="https://mdbootstrap.com/"> BestBB.com</a>
    </div>

</footer>

export default Footer