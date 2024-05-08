import { useState, useRef } from 'react';
import Button from 'react-bootstrap/Button';
import Overlay from 'react-bootstrap/Overlay';

function RenderName(probs){
    const [show, setShow] = useState(false);
    const target = useRef(null);
    const data = probs.data;

    return(
        <>
        <Button className='txt' ref={target} onClick={() => setShow(!show)}>
            Name: {data.name}
        </Button>
        <Overlay target={target.current} show={show} placement="right">
            {({
            placement: _placement,
            arrowProps: _arrowProps,
            show: _show,
            popper: _popper,
            hasDoneInitialMeasure: _hasDoneInitialMeasure,
            ...props
            }) => (
            <div
                {...props}
                style={{
                position: 'absolute',
                backgroundColor: 'rgba(255, 100, 100, 0.85)',
                padding: '2px 10px',
                color: 'white',
                borderRadius: 3,
                ...props.style,
                }}
            >
                <ul>
                    <li>Email: {data.email}</li>
                    <li>Phone: {data.phone}</li>
                    <li>Address: {data.address}</li>
                </ul>
            </div>
            )}
        </Overlay>
        </>
    )
}

export default RenderName;