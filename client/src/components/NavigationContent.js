import React from "react";

const NavigationContnet = () => {
    const links = [
        { href: "/index-one", text: "Home", img: "images/bg-image-three.jpg" },
        { href: "about-one", text: "About", img: "images/about-img.jpg" },
        { href: "songs-one", text: "Songs", img: "images/album-thumbnail-nine.jpg" },
        { href: "blog-one", text: "Blogs", img: "images/main-bg-three.jpg" },
        { href: "contact-one", text: "Contact", img: "images/album-thumbnail-four.jpg" }
    ]

    const socialLinks = [
        { href: "#", text: "YT" },
        { href: "#", text: "FB" },
        { href: "#", text: "IG" }
    ]

    return (
        <div class="navigation-content">
            <div class="navigation-logo hover opacity">
                <a href="index-two" class="text">ARLO BROWN</a>
            </div>

            <ul class="navigation-ul">
                {links.map((link, index) => (
                    <li key={index}>
                        <a href={link.href}
                            data-text={link.text}
                            data-img={link.img}>
                            {link.text}
                        </a>
                    </li>
                ))}
            </ul>

            <div class="navigation-close hover about-close opacity">
                <div class="navigation-close-line"></div>
                <div class="navigation-close-line"></div>
            </div>

            <div class="project-preview"></div>

            <div class="headphone-navigation opacity">
                <img src="/images/headphone.png"
                    title="headphone zone"
                    class="text"
                    alt="headphone"
                />
            </div>

            <div class="social-media-links-navigation">
                <ul>
                    {socialLinks.map((link, index) => (
                        <li key={index}>
                            <a href={link.href}
                                className="text hover opacity">
                                {link.text}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default NavigationContnet;