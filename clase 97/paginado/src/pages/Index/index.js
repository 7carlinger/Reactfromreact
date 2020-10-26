import React from 'react';
import '../Index/index.scss';

const Index = () => {
    return (
        <React.Fragment>
        <section id='index' className='page-container'>
            <h2> CarlaFioroni </h2>
            <p>Dev in dev</p>
            <p>Migrando de la gestion a la consola. Aprendiendo React, la libreria de JS</p>           
            <a className="carla-link" href="https://github.com/7carlinger" target="_blank"    rel="noopener noreferrer">
                Mi github
            </a>
        </section>
        </React.Fragment>
    )
}
export default Index;
