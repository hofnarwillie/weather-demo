import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

const Footer = () => {
    return (
        <Grid>
            <Row>
                <Col>
                    <hr />
                    <a>Copyright</a> {"|"} 
                    <a>Legal</a> {"|"} 
                    <a>Cookies</a>
                </Col>
            </Row>
        </Grid>
    );
};

export default Footer;