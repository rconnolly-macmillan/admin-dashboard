import { Card, CardBody, Col, Row, Table } from 'react-bootstrap';
import PageBreadcrumb from '@/components/PageBreadcrumb';

const Home = () => {
    return (
        <Row>
            <Col xs={12}>
                <Card>
                    <CardBody>
                        <h2>Welcome to the Donations Admin Dashboard</h2>
                        <p>Manage your donations and campaigns here.</p>
                    </CardBody>
                </Card>
            </Col>
        </Row>
    );
}

export default Home;