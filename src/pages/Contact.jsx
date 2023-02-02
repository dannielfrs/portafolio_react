import React from 'react'
import Footer from '../components/Footer/Footer'
import Form from '../components/Form/Form'
import NavbarScrollspy from '../components/NavbarScrollspy/NavbarScrollspy'

const Contact = () => {
    return (
        <main>
            <NavbarScrollspy />
            <section className="page_section contact">
                <div className="container">
                    <div className="page_content">
                        <h1 className="title_section">Contact</h1>
                        <div className="content_section">
                            <p className='info'>Do not hesitate to contact me to talk about how I could collaborate in your projects or organization</p>
                        </div>
                        <div className="content_section" data-aos="fade-up">
                            <Form />
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

export default Contact