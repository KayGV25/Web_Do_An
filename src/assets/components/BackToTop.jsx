function BackToTop(){
    return(
        <>
            <button className="back-to-top" onClick={toTop()}>
                ^
            </button>
        </>
    )
}

function toTop(){
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
}
export default BackToTop;