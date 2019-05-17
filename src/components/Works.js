import React from 'react';

const styles = {
    hiwContainer: {
        maxWidth: 1200,
        margin: '0 auto',
        padding: '1em'
    },
    hiwHeaderH1: {
        textAlign: 'center',
        fontWeight: 500
    },
    hiwUl: {
        listStyleType: 'none',
        marginTop: 25
    },
    hiwLi: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 30
    },
    hiwLiH3: {
        color: '#000',
        fontWeight: 500
    },
    hiwLiImg: {
        height: '10%',
        width: '10%',
        marginRight: 15
    },
    headerImage: {
        background: 'url("/images/HowItWorksHeader.jpg") center center no-repeat',
        backgroundSize: '100% auto',
        width: '100%',
        minHeight: 500
    },
    hiwFooterH1: {
        textAlign: 'center',
        fontWeight: 500,
        margin: 50
    }
}

function Works() {
    return (
        <div>
            <div className="header-image" style={styles.headerImage}></div>
            <div style={styles.hiwContainer}>
                <div className="hiw-header">
                    <h1 style={styles.hiwHeaderH1}>DevConnect is connecting businesses and developers in your community!  You now have the ability to work with and support local professionals and companies.</h1>
                </div>
                <hr></hr>
                <div>
                    <ul style={styles.hiwUl}>
                        <li style={styles.hiwLi}>
                            <img style={styles.hiwLiImg} alt="icon" src="/images/signup.png"></img>
                            <h3 style={styles.hiwLiH3}>It is easy to get started!  Simply create a profile and let us know if you are a business looking for skilled developers or a developer looking to show off your skills.</h3>
                        </li>
                        <li style={styles.hiwLi}>
                            <img style={styles.hiwLiImg} alt="icon" src="/images/createProfile.png"></img>
                            <h3 style={styles.hiwLiH3}>Complete your profile and instantly post a job.  Developers can post a resume or portfolio and start accepting work immediately!</h3>
                        </li>
                        <li style={styles.hiwLi}>
                            <img style={styles.hiwLiImg} alt="icon" src="/images/makeContact.png"></img>
                            <h3 style={styles.hiwLiH3}>Once you have connected, make contact!  Working with someone in your community makes it easier than ever.  You can choose to communicate through DevConnect or meetup in person to go over the details of the job.</h3>
                        </li>
                        <li style={styles.hiwLi}>
                            <img style={styles.hiwLiImg} alt="icon" src="/images/workComplete.png"></img>
                            <h3 style={styles.hiwLiH3}>Once the job is completed, review to ensure everyone is happy and mark it as complete.  Compensation is paid out and businesses now have a new product!  Now it's time to start all over again! </h3>
                        </li>
                    </ul>
                </div>
                <hr></hr>
                <div>
                    <h1 style={styles.hiwFooterH1}>What are you waiting for?  Sign up now and get started connecting!</h1>
                </div>
            </div>
        </div>
    );
};

export default Works;