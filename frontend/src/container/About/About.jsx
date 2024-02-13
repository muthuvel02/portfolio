// import { useState, useEffect } from 'react'
// import './About.scss';
// import { motion } from 'framer-motion';
// import { images } from '../../constants';
// import { client, urlFor } from '../../client';

// const About = () => {
//     const [abouts, setAbouts] = useState([]);

//     useEffect(() => {
//         const query = '*[_type == "about"]';

//         client.fetch(query).then((data) => {
//             setAbouts(data);
//             console.log('data', abouts);
//         });
//     }, []);


//     return (
//         <>
//             <h2 className='head-text'> I Know that <span>Good development</span> <br /> means <span> Good Business</span></h2>
//             <div className="app__profiles">
//                 {abouts.map((about, index) => (
//                     <motion.div
//                         whileInView={{ opacity: 1 }}
//                         whileHover={{ scale: 1.1 }}
//                         transition={{ duration: 0.5, type: 'tween' }}
//                         className='app__profile-item '
//                         key={about.title + index}
//                     >
//                         <img src={urlFor(about.imgUrl)} alt={about.title} />
//                         <h2 className="bold-text" style={{ marginTop: 20 }}>{about.title}</h2>
//                         <p className="p-text" style={{ marginTop: 10 }}>{about.description}</p>
//                     </motion.div>
//                 ))}
//             </div>


//         </>)
// }

// export default About
import { useState, useEffect } from 'react';
import './About.scss';
import { motion } from 'framer-motion';
import { client, urlFor } from '../../client';
import { AppWrap, MotionWrap } from '../../wrapper';

const About = () => {
    const [about, setAbout] = useState([]);

    useEffect(() => {
        const query = '*[_type == "about"]';

        client.fetch(query).then((data) => {
            setAbout(data);
        });
    }, []);

    return (
        <>
            <h2 className='head-text'> Mastering the <span> art of code, I believe </span> that exceptional  <span> development</span> <span> isn't just</span> about writing lines; <span> it's the gateway to  </span> unlocking unparalleled business<span> success</span> </h2>
            <div className="app__profiles">
                {about.map((aboutData, index) => (
                    <motion.div
                        whileInView={{ opacity: 1 }}
                        whileHaver={{ scale: 1.1 }}
                        transition={{ duration: 0.5, type: 'tween' }}
                        className='app__profile-item'
                        key={aboutData.title + index}
                    >
                        {aboutData.imgUrl && <img src={urlFor(aboutData.imgUrl)} alt={aboutData.title} />}
                        <h2 className="bold-text" style={{ marginTop: 20 }}>{aboutData.title}</h2>
                        <p className="p-text" style={{ marginTop: 10 }}>{aboutData.description}</p>
                    </motion.div>
                ))}
            </div>
        </>
    );
};
export default AppWrap(
    MotionWrap(About, 'app__about'),
    'about',
    'app__whitebg',
);
