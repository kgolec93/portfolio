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
                        {`My name is Kamil Golec, and I've finished studying on Wrocław University of Technology. My computer-based interests follow me since I was a child, when I was solving various problems, both hardware and software ones. I re-installed the operation system, then Windows 98, when I was about 9 years old, because one of my pc games was not working properly. Since then, IT knowledge was strongly connected to my life. My first attempts to programming were when I was creating the pc game modifications and there I programmed some basic scripts.`}<br />{`But the real programming, I have started learning in May 2019, during development the website for my visualisation company, what I've found the real fun, especially when I had to find solutions to solve various problems in order to make my code working properly.`}<br />{` Last October I've started my Frontend post-graduate studies at WSB University in Wrocław, which I've just finished and I am looking forward to push my programming skills even further and learn new technologies.`}
                        <br />
                        <br />
                    </p>
                    <h2>Technologies</h2>
                    <p>
                        {`Currently, I am primarily working with React with Redux, while previously used to support my projects with jQuery & Vanilla JS. Backend for my current projects is provided by Firebase.`}
                        <br />
                        {`I've also already started learning React Native, while developing some simple authorial apps`}
                    </p>
                    <h2>Contact</h2>
                    <p>{`email: kamil.golec@protonmail.com`}</p>
                    <p>{`phone number: +48 783 648 000`}</p>
                </div>
            </div>
        )
    }
}

export default About
