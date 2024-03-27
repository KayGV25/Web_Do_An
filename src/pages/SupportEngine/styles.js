export const styles = {
    chatWithMeButton: {
        cursor: 'pointer',
        boxShadow: '0px 0px 16px 16px rgba(0, 0, 0, 0.33)',
        //Border
        borderRadius: '50%',
        //Background
        backgroundImage: 'url(z5287589876641_c9df90af6d7a8d050fb8c774b7bb3416.jpg)',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: '84px',
        //Size
        width: '70px',
        height: '70px',
        
    },
    avatarHello: {
        //Position
        position: 'absolute',
        right: '90px',
        top: '15px',
        width: '150px',
        height: '50px',
        //Layering
        zIndex: '10000',
        boxShadow: '0px 0px 16px 16px rgba(0, 0, 0, 0.33)',
        //Border
        padding: '12px 12px 12px 16px',
        borderRadius: '24px',
        textAlign: 'center',
        
        //Color
        backgroundColor: '#f9f0ff',
        color: 'black',
        
    },
    supportWindow: {
        //Position
        position: 'fixed',
        bottom: '200px',
        right: '24px',
        //Size
        width: '400px',
        height: '500px',
        maxWidth: 'calc(100% - 48px)',
        maxHeight: 'calc(100% - 48px)',
        backgroundColor: 'white',
        //Border
        borderRadius: '12px',
        border: '3px solid var(--color1)',
        overflow: 'hidden',
        //Shadow
        boxShadow: '0px 0px 16px 16px rgba(0, 0, 0, 0.33)',
        
    },
    emailFormWindow: {
        width: '100%',
        overflow: 'hidden',
        transition: "all 0.5s ease",
        WebkitTransition: "all 0.5s ease",
        MozTransition: "all 0.5s ease",
    },
    stripe: {
        position: 'relative',
        top: '-45px',
        width: '100%',
        height: '300px',
        backgroundColor: 'var(--color1)',
        transform: 'skewY(-12deg)',
    },
    topText: {
        position: 'relative',
        width: '100%',
        top: '15%',
        color: 'white',
        fontSize: '24px',
        fontWeight: '600',
    },
    emailInput: {
        width: '66%',
        textAlign: 'center',
        outline: 'none',
        padding: '12px',
        borderRadius: '12px',
        border: '2px solid var(--color1)',
    },
    bottomText: {
        position: 'absolute',
        width: '100%',
        top: '60%',
        color: 'var(--color1)',
        fontSize: '24px',
        fontWeight: '600',
    },
    loadingDiv: {
        position: 'absolute',
        height: '100%',
        width: '100%',
        textAlign: 'center',
        backgroundColor: 'white',
    },
    loadingIcon: {
        color: 'var(--color1)',
        position: 'absolute',
        top: 'calc(50% - 51px)',
        left: '39,5%',
        fontWeight: '600',
    },
    chatEngineWindow: {
        width: '100%',
        backgroundColor: '#fff',
    }

}

export default 0;