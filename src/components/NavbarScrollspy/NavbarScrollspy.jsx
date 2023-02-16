import React, { useRef, useEffect, useState, useMemo } from 'react'
import styles from './navbarScrollspy.module.scss'
import { FaBars, FaTimes } from "react-icons/fa";
import { HashLink as Link } from 'react-router-hash-link';

const NavbarScrollspy = (props) => {

    const [visible, setVisible] = useState(false);
    const links = useRef(new Array())
    const navbar = useRef()

    const toggleMenu = () => {
        setVisible(!visible)
    }

    const hideMenu = () => {
        setVisible(false)
    }

    const callbackFunction = entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const sectionId = '/portafolio/#' + entry.target.id;
                links.current.forEach(link => {
                    link.classList.remove(styles.active);
                    const linkHref = link.attributes.href.nodeValue;
                    if (linkHref === sectionId) {
                        link.classList.add(styles.active)
                    }
                })
            }
        })
    }

    const optionsMemo = useMemo(() => {
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.4
        }
        return options
    }, [])

    const changeBg = (entries) => {
        const [entry] = entries
        if (entry.isIntersecting) {
            navbar.current.classList.remove(styles.navbar_bg)
        } else {
            navbar.current.classList.add(styles.navbar_bg)
        }
    }

    const observerOptions = useMemo(() => {
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.5
        }
        return options
    }, [])

    useEffect(() => {
        const observer = new IntersectionObserver(callbackFunction, optionsMemo)
        const homeObserver = new IntersectionObserver(changeBg, observerOptions)
        if (props.refSections) {
            homeObserver.observe(props.refSections.current[0])
            props.refSections.current.forEach(section => {
                observer.observe(section)
            })
        } else {
            window.scrollTo(0, 0)
            navbar.current.classList.add(styles.navbar_bg)
            links.current[4].classList.add(styles.active)
        }
    }, [])

    return (
        <nav className={styles.navbar} ref={navbar}>
            <div className={styles.navbar_container}>
                <div className={styles.navbar_left}>
                    <div className={styles.navbar_item}>
                        <h1>DF</h1>
                    </div>
                </div>
                <div className={styles.navbar_right}>
                    <ul className={visible ? `${styles.navbar_menu} ${styles.active}` : styles.navbar_menu} id='links'>
                        <li className={styles.navbar_item} >
                            <Link
                                to="/portafolio/#home"
                                className={styles.navbar_button}
                                ref={element => links.current[0] = element}
                                onClick={hideMenu}>
                                Home
                            </Link>
                        </li>
                        <li className={styles.navbar_item} >
                            <Link
                                to='/portafolio/#about'
                                className={styles.navbar_button}
                                ref={element => links.current[1] = element}
                                onClick={hideMenu}>
                                About
                            </Link>
                        </li>
                        <li className={styles.navbar_item} >
                            <Link
                                to='/portafolio/#skills'
                                className={styles.navbar_button}
                                ref={element => links.current[2] = element}
                                onClick={hideMenu}>
                                Skills
                            </Link>
                        </li>
                        <li className={styles.navbar_item} >
                            <Link
                                to='/portafolio/#projects'
                                className={styles.navbar_button}
                                ref={element => links.current[3] = element}
                                onClick={hideMenu}>
                                Projects
                            </Link>
                        </li>
                        <li className={styles.navbar_item}>
                            <Link
                                to='/portafolio/contact'
                                className={styles.navbar_button}
                                ref={element => links.current[4] = element}
                                onClick={hideMenu}>
                                Contact
                            </Link>
                        </li>
                    </ul>
                    <div className={styles.navbar_icon} onClick={toggleMenu}>
                        {visible ? <FaTimes /> : <FaBars />}
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default NavbarScrollspy