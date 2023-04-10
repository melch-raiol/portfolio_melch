import { useEffect, useState } from "react";
import GitHub from "../../assets/github.png";
import Linkedin from "../../assets/linkedin.png";
import './styles.css';

export default function Headers() {

    const [activedMenu, setActivedMenu] = useState(true);

    function handleActivedMenu() {
        setActivedMenu(!activedMenu)
    };

    useEffect(() => {
        const verifyWindowWidth = () => {
            if (window.innerWidth < 600) {
                setActivedMenu(!activedMenu);
            } else {
                setActivedMenu(false);
            }
        };

        verifyWindowWidth();
        window.addEventListener('resize', verifyWindowWidth);
        return () => {
            window.removeEventListener('resize', verifyWindowWidth);
        };
    }, []);

    return (
        <header>
            <div className="container-menu" >
                <input type="checkbox" id="checkbox-menu" onClick={() => handleActivedMenu()} />
                <label className="menu" htmlFor="checkbox-menu">
                    <span></span>
                    <span></span>
                    <span></span>
                </label>
            </div>
            <div className="logo">
                LOGO
            </div>
            <input type="checkbox" id="checkbox-menu" />
            <nav
                className={activedMenu ? "actived" : "navbar"} >
                <a><p>HOME</p></a>
                <a><p>QUEM SOU</p></a>
                <a><p>PROJETOS</p></a>
                <a><p>HABILIDADES</p></a>
            </nav>
            <div className="social-media">
                <img src={Linkedin} />
                <img src={GitHub} />
            </div>
        </header>
    )
};