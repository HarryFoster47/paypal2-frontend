import React, { useState, useEffect } from 'react'
import Router, { useRouter } from 'next/router'
import { isloggedin } from '../pages/util/api'
import NavBar from "./navbar"
import Nav from "./nav"
import styles from '../styles/Home.module.css'

const PageLayout = (props: React.PropsWithChildren) => {
    let [loggedIn, setLoggedIn] = useState(true)
    let router = useRouter()

    useEffect(() => {
        isloggedin().then((data) => {
            // setLoggedIn(data)
            console.log(router.pathname)
            // if (!data) {
            //     if (!["/login", "/register"].includes(router.pathname)) {
            //         Router.push("/login")
            //     }
            // }
        })
    })

    return (
        <main className={styles.page}>
            <NavBar loggedIn={loggedIn} />
            <section className={styles.contentSection}>
                {loggedIn && <Nav />}
                {props.children}
            </section>
        </main>
    )
}

export default PageLayout