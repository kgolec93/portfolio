/// icons import
import iconDigitalarch from '../assets/img/digitalarch.png'
import iconKursyBlendera from '../assets/img/blender.svg'
import iconWeather from '../assets/img/weather-forecast.svg'
import iconChat from '../assets/img/chat.svg'
import iconProjectizer from '../assets/img/projectizer.svg'

/// home images import
import imgDigitalarch from '../assets/img/imgDigitalarch.jpg'
import imgKursyBlendera from '../assets/img/imgKursyblendera.jpg'
import imgProjectizer from '../assets/img/imgProjectizer.jpg'
import imgWeather from '../assets/img/imgWeather.jpg'
import imgChat from '../assets/img/imgChat.jpg'

/// screenshots import 
import scrProjectizer01 from '../assets/gal/projectizer01.jpg';
import scrProjectizer02 from '../assets/gal/projectizer02.jpg';
import scrProjectizer03 from '../assets/gal/projectizer03.jpg';
import scrProjectizer04 from '../assets/gal/projectizer04.jpg';
import scrProjectizer05 from '../assets/gal/projectizer05.jpg';
import scrProjectizer06 from '../assets/gal/projectizer06.jpg';


export const data = {
    digitalarch: {
        idVal: 'digitalarch',
        name: 'digitalARCH.pl',
        framework: 'jQuery',
        date: 'June 2018',
        libraries: 'N/A',
        type: 'Commercial website // Portfolio',
        description: 'Portfolio website for my digital.ARCH 3d visualisation company. Based on HTML5 and Pure CSS, supported by jQuery. Current website is actually the third version of digitalarch.pl, and the very special project that pushed me into the Frontend Development. The contact form is working, supported by PHP. The one interesting feature on this website is the header menu and the gallery, that is generating itself from the javascript. The script looks raw, but it was one of my first attempts to learn JS.',
        icon: iconDigitalarch,
        link: 'http://www.digitalarch.pl',
        github: 'https://github.com/kgolec93/digitalarch',
        thumbnail: imgDigitalarch
    },
    projectizer: {
        idVal: 'projectizer',
        name: 'Projectizer',
        framework: 'React + Redux // Firebase',
        date: 'May 2019',
        libraries: 'Moment.js // React-Moment // React-Datepicker // uuid',
        type: `Final academical project => Commercial application`,
        description: `Projectizer is an app created to support the management of architectural project process. The project was born from the idea of creating more advanced to-do list, that could help to organize the work. Currently this app is used and tested in AmRest, by me and my co-workers, where I am working so far. The application consists of fully working authorization system (provided by Firebase) and is connected to the Firebase Realtime Database. I'm planning to push the development of this application and continue adding another useful features into it, and also I want to start implementing this app to architectural companies. I've also plan to re-write this app to the mobile version in React Native`,
        icon: iconProjectizer,
        link: 'https://wsb-final.web.app',
        github: 'https://github.com/kgolec93/wsb-final-project',
        thumbnail: imgProjectizer,
        screenshots: [
            scrProjectizer01,
            scrProjectizer02,
            scrProjectizer03,
            scrProjectizer04,
            scrProjectizer05,
            scrProjectizer06
        ]
    },
    weatherforecast: {
        idVal: 'weatherforecast',
        name: 'Weather Forecast',
        framework: 'React // OpenWeatherMap API',
        date: 'January 2019',
        libraries: 'N/A',
        type: 'Academical project',
        description: `Academical project based on React and OpenWeatherMap API. Simple weather forecast app for entire world // Because of API usage limitations, there was only 3-day and current forecast available. For educational purposes, no additional libraries were added to this project, in order to train various javascript technics, like transforming date and time, or providing custom images instead of the API-provided icons.`,
        icon: iconWeather,
        link: 'http://pogoda.kgolec.pl',
        github: 'N/A',
        thumbnail: imgWeather
    },
    chat: {
        idVal: 'chat',
        name: 'Real-time chat module',
        framework: 'React // Websocket',
        date: 'February 2019',
        libraries: 'N/A',
        type: 'Academical project',
        description: `Simple real-time chat module based on websocket technology, developed during post-graduate studies and implemented to this portfolio application. The app is connected to the backend developed by one of the university professors. This presentation module was rebuild for this portfolio, and is disconnected from the websocket in order to show the possibilities of this simple chat. The app consist of a simple no-password login system, and the user can send correspondation to the other users connected to this chat.`,
        icon: iconChat,
        link: 'N/A',
        github: 'N/A',
        thumbnail: imgChat
    },
    kursyblendera: {
        idVal: 'kursyblendera',
        name: 'kursyblendera.pl',
        framework: 'jQuery',
        date: 'January / february 2019',
        libraries: 'N/A',
        type: 'Commercial website => In development',
        description: `Commercial project starded in january / february 2019, currently temporarily suspended. The advertisement website for the company that is learning the 3d visualisations. Based on jQuery. The main goal was to create the website divided for the sections, to which the user could scroll only by clicking the button. Also the data provided in the project is not written to the pure HTML, but is drained from the javascript objects.`,
        icon: iconKursyBlendera,
        link: 'https://kgolec93.github.io/blender-kurs/',
        github: 'https://github.com/kgolec93/blender-kurs',
        thumbnail: imgKursyBlendera
        
    },
}


export default data