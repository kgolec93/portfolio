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
        description: 'Portfolio website for my digital.ARCH 3d visualisation company. Based on HTML5 and Pure CSS, supported by jQuery. Current website is the third version of digitalarch.pl, and the very special project that pushed me into the Frontend Development. The contact form is powered by PHP.',
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
        description: `Projectizer is an app created to support the management of architectural project development. Used and tested in AmRest. I'm planning to push the development of this application and continue adding another useful features into it, and also I want to start implementing this app to architectural companies.`,
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
    kursyblendera: {
        idVal: 'kursyblendera',
        name: 'kursyblendera.pl',
        framework: 'jQuery',
        date: 'February 2019',
        libraries: 'N/A',
        type: 'Commercial website => In development',
        description: `Currently still in development, project temporarily suspended. The advertisement website for the company that is learning the 3d visualisations. Based on jQuery & PHP (contact form).`,
        icon: iconKursyBlendera,
        link: 'https://kgolec93.github.io/blender-kurs/',
        github: 'https://github.com/kgolec93/blender-kurs',
        thumbnail: imgKursyBlendera
        
    },
    weatherforecast: {
        idVal: 'weatherforecast',
        name: 'Weather Forecast',
        framework: 'React // OpenWeatherMap API',
        date: 'January 2019',
        libraries: 'N/A',
        type: 'Academical project',
        description: `Academical project based on React and OpenWeatherMap API. Simple weather forecast app for entire world // Because of API usage limitations, there was only 3-day and current forecast available.`,
        icon: iconWeather,
        link: 'http://pogoda.kgolec.pl',
        github: 'N/A',
        thumbnail: imgWeather
    },
    // chat: {
    //     idVal: 'chat',
    //     name: 'Real-time chat module',
    //     framework: 'React // Websocket',
    //     date: 'February 2019',
    //     libraries: 'N/A',
    //     type: 'Academical project',
    //     description: `Simple real-time chat module based on websocket technology, developed during post-graduate studies.`,
    //     icon: iconChat,
    //     github: 'N/A',
    //     thumbnail: null
    // },
    // audioplayer: {
    //     idVal: 'audioplayer',
    //     name: 'Web Audio Player',
    //     framework: 'jQuery',
    //     date: 'September 2018'
    // },
    // shoppinglist: {
    //     idVal: 'shoppinglist',
    //     name: 'Shopping List',
    //     framework: 'React + Redux // Firebase',
    //     date: 'July 2019'
    // }
}


export default data