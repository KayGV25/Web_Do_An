import '../styles/ErrPage.css'
import NavBar from '../assets/components/NavBar';

function ErrPage(){
    return (
        <>
        <NavBar />
            <div className='container'>
                <h1 className='err'>404!!!</h1>
                <h1 className='err'>Oops Page Not Found</h1>
            </div>
        </>
    )
}

export default ErrPage;