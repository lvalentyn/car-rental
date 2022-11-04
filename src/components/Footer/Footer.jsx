import React from 'react'
import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap'
import { Link } from 'react-router-dom'
import '../../styles/footer.css'

const quickLinks = [
    { path: '#', display: 'Privacy Policy' },
    { path: '/about', display: 'About' },
    { path: '/cars', display: 'Car Listining' },
    { path: '/blogs', display: 'Blog' },
    { path: '/contact', display: 'Contact' },
]

const Footer = () => {
    const date = new Date()
    const year = date.getFullYear()

    return (
        <footer className="footer">
            <Container>
                <Row>
                    <Col lg="4" md="4" sm="12">
                        <div className="logo footer__logo">
                            <h1>
                                <Link
                                    to="/home"
                                    className="d-flex align-items-center gap-3"
                                >
                                    <i className="ri-car-line"></i>
                                    <span>
                                        Rent Car <br /> Service
                                    </span>
                                </Link>
                            </h1>
                        </div>
                        <p className="footer__logo-content">
                            Lorem ipsum dolor sit amet consectetur, adipisicing
                            elit. Mollitia, fugit! Lorem ipsum, dolor sit amet
                            consectetur adipisicing elit. Maiores tenetur cum
                            nam aperiam ipsum? Officiis repudiandae voluptatibus
                            commodi exercitationem doloremque!
                        </p>
                    </Col>
                    <Col lg="2" md="4" sm="6">
                        <div className="mb-4">
                            <h5 className="footer__link-title">Quick Links</h5>
                            <ListGroup>
                                {quickLinks.map((link, index) => (
                                    <ListGroupItem
                                        className="p-0 mt-3 quick__link"
                                        key={index}
                                    >
                                        <Link to={link.path}>
                                            {link.display}
                                        </Link>
                                    </ListGroupItem>
                                ))}
                            </ListGroup>
                        </div>
                    </Col>

                    <Col lg="3" md="4" sm="6">
                        <div className="mb-4">
                            <h5 className="footer__link-title mb-4">
                                Head Office
                            </h5>
                            <p className="office__info">
                                Montclair, New Jersey, 097412
                            </p>
                            <p className="office__info">Phone: +380543213278</p>
                            <p className="office__info">
                                Email: carrentnj@gmail.com
                            </p>
                            <p className="office__info">
                                Office Time: 10am - 7pm
                            </p>
                        </div>
                    </Col>
                    <Col lg="3" md="4">
                        <div className="mb-4">
                            <h5 className="footer__link-title">Newsletter</h5>
                            <p className="section__description">
                                Subscribe our newsletter
                            </p>
                            <div className="newsletter">
                                <input type="email" placeholder="Email" />
                                <span className="d-flex align-items-center">
                                    <i className="ri-send-plane-line"></i>
                                </span>
                            </div>
                        </div>
                    </Col>

                    <Col lg="12">
                        <div className="footer__bottom">
                            <p className="section__description d-flex align-items-center justify-content-center gap-1 pt-4">
                                <i className="ri-copyright-line"></i> Copyright{' '}
                                {year}
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer
