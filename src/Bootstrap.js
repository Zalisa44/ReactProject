
import 'bootstrap/dist/css/bootstrap.min.css';
import { Tab, Tabs, Button } from 'react-bootstrap';
function Bootstrap() {
    return (
        <div>
            <h3>
                Boostrap Component
            </h3>
            <Button>Button</Button>
            <Button variant='success'>Button</Button>
            <Tabs defaultActiveKey="home" id="uncontrolled-tab-example" className="mb-3">
                <Tab eventKey="home" title="Home">
                    Home
                </Tab>
                <Tab eventKey="profile" title="Profile">
                    Profile
                </Tab>
                <Tab eventKey="contact" title="Contact" disabled>
                    Contact
                </Tab>
            </Tabs>
        </div>
    )
}

export default Bootstrap