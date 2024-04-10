import { Card } from "react-bootstrap";

function Offer(){
    return(
        <>
            <div className="offer-container">
                <h1 className="offer">
                    Offer
                </h1>
                <div className="card-container">
                <Card className="card">
                    <Card.Body>
                        <Card.Title className="card-title">Card Title 1</Card.Title>
                        <Card.Text>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima iste soluta corrupti, error adipisci est nesciunt dolorem id repellendus! Commodi accusantium voluptates accusamus similique maiores mollitia magnam aliquam unde ullam.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card className="card">
                    <Card.Body>
                        <Card.Title className="card-title">Card Title 2</Card.Title>
                        <Card.Text>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima iste soluta corrupti, error adipisci est nesciunt dolorem id repellendus! Commodi accusantium voluptates accusamus similique maiores mollitia magnam aliquam unde ullam.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card className="card">
                    <Card.Body>
                        <Card.Title className="card-title">Card Title 3</Card.Title>
                        <Card.Text>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima iste soluta corrupti, error adipisci est nesciunt dolorem id repellendus! Commodi accusantium voluptates accusamus similique maiores mollitia magnam aliquam unde ullam.
                        </Card.Text>
                    </Card.Body>
                </Card>
                </div>
                <div id="offer"></div>
            </div>
        </>
    )
}

export default Offer;