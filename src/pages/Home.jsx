import React, { useRef } from 'react'
import NavbarScrollspy from '../components/NavbarScrollspy/NavbarScrollspy'
import Credential from '../components/Credential/Credential'
import CardBasic from '../components/CardBasic/CardBasic'
import CardSlided from '../components/CardSlided/CardSlided'
import Footer from '../components/Footer/Footer'
import coding from '../assets/images/coding.svg'
import projectsInfo from '../assets/jsonData/ProjectsInfo.json'
import skillsInfo from '../assets/jsonData/SkillsInfo.json'
import aboutMe from '../assets/jsonData/AboutMe.json'
import { FaFilePdf } from "react-icons/fa";

const Home = () => {

    const sections = useRef(new Array())

    return (
        <main>
            <header className='page_header' id='home' ref={element => sections.current[0] = element}>
                <NavbarScrollspy refSections={sections} />
                <div data-aos="fade-up">
                    <Credential />
                </div>
            </header>
            <section className='page_section about' id='about' ref={element => sections.current[1] = element}>
                <div className='container'>
                    <div className='page_content'>
                        <h1 className='title_section'>About me...</h1>
                        <div className='content_section'>
                            <img className="col-4" src={coding} alt='' data-aos="fade-right" />
                            <p className="col-8 col-sm-10 content_text" data-aos="fade-up">
                                {aboutMe.about}
                            </p>
                        </div>
                        <div className='download_section'>
                            <hr />
                            <h1>Download resume</h1>
                            <a href='/portafolio/doc/curriculum.pdf' target="_blank"> <FaFilePdf /> </a>
                            <hr />
                        </div>
                    </div>
                </div>
                <div className='wave_second'>
                    <div style={{ height: "100px", overflow: "hidden" }} >
                        <svg viewBox="0 0 500 150" preserveAspectRatio="none" style={{ height: "100%", width: "100%" }}><path d="M0.00,49.98 C153.78,135.70 245.77,-54.75 501.97,52.80 L500.00,150.00 L0.00,150.00 Z" style={{ stroke: "none", fill: "" }}></path></svg>
                    </div>
                </div>
            </section>
            <section className='page_section skills' id='skills' ref={element => sections.current[2] = element}>
                <div className="container">
                    <div className="page_content">
                        <h1 className='title_section'>Skills</h1>
                        <div className='content_section'>
                            <div className='grid-section'>
                                {skillsInfo.map((skill, index) => {
                                    return (
                                        <div data-aos="fade-up" key={index}>
                                            <CardBasic
                                                skill={skill.skill}
                                                img={skill.img}
                                            />
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
                <div className='wave_main'>
                    <div style={{ height: "150px", overflow: "hidden" }} >
                        <svg viewBox="0 0 500 150" preserveAspectRatio="none" style={{ height: "100%", width: "100%" }}><path d="M-1.97,58.72 C219.24,-19.22 355.25,101.16 500.00,49.98 L500.00,150.00 L0.00,150.00 Z" style={{ stroke: "none", fill: "" }}></path></svg>
                    </div>
                </div>
            </section>
            <section className="page_section projects" id='projects' ref={element => sections.current[3] = element}>
                <div className="container">
                    <div className="page_content">
                        <h1 className='title_section'>Personal projects</h1>
                        <div className="content_section">
                            <div className="grid-section">
                                {projectsInfo.map((project, index) => {
                                    return (
                                        <div data-aos="fade-up" key={index}>
                                            <CardSlided
                                                img={project.img}
                                                title={project.name}
                                                description={project.description}
                                                url={project.url}
                                            />
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="wave_footer">
                    <div style={{ height: "150px", overflow: "hidden" }} >
                        <svg viewBox="0 0 500 150" preserveAspectRatio="none" style={{ height: "100%", width: "100%" }}><path d="M-1.97,58.72 C110.89,112.02 377.82,-17.25 499.72,57.73 L500.00,150.00 L0.00,150.00 Z" style={{ stroke: "none", fill: "" }}></path></svg>
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    )
}

export default Home