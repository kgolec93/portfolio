import React, { Component } from 'react'
import PageHeader from './PageHeader';

export class About extends Component {
    render() {
        return (
            <div className='contentWrapper'>
                <PageHeader
                    title='Kamil Golec'
                    subtitle='About me'
                />
                <div className="pageContent" id='aboutPage'>
                    <h2>About me</h2>
                    <p>
                        {`I have started learning programming on May 2019, during development the website for my company. Then I've started my Frontend post-graduate studies at WSB University in Wrocław. Currently I've finished the studies and I am looking forward to develop my programming skills and learn new technologies.`}
                        <br />
                        <br />
                    </p>
                    <h2>Technologies</h2>
                    <p>
                        {`I am primarily working with React with Redux, while previously used to support my projects with jQuery & Vanilla JS. Backend for my current projects is provided by Firebase.`}
                        <br />
                        {`I am also eager to learn modern mobile app technologies like React Native and PWA`}
                    </p>
                    <h2>Contact</h2>
                    <p>{`email: kamil.golec@gmail.com`}</p>
                </div>
            </div>
        )
    }
}

export default About
