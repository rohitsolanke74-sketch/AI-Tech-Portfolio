/* =========================================
   RESET
========================================= */

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}


html {
    scroll-behavior: smooth;
}


body {
    font-family: "Inter", Arial, sans-serif;

    background: #030507;

    color: #ffffff;

    overflow-x: hidden;
}


a {
    color: inherit;

    text-decoration: none;
}


button,
textarea {
    font-family: inherit;
}



/* =========================================
   VARIABLES
========================================= */

:root {

    --cyan: #00e5ff;

    --cyan-soft: rgba(0, 229, 255, 0.12);

    --bg: #030507;

    --panel: #080c11;

    --text: #ffffff;

    --muted: #7d8998;

    --line: rgba(255,255,255,0.09);

}



/* =========================================
   CURSOR GLOW
========================================= */

.cursor-glow {

    position: fixed;

    width: 350px;

    height: 350px;

    border-radius: 50%;

    pointer-events: none;

    z-index: 999;

    background:
        radial-gradient(
            circle,
            rgba(0,229,255,0.09),
            transparent 65%
        );

    transform:
        translate(-50%, -50%);

    left: 50%;

    top: 50%;

    transition:
        left 0.08s linear,
        top 0.08s linear;
}



/* =========================================
   NAVBAR
========================================= */

.navbar {

    position: fixed;

    top: 0;

    left: 0;

    width: 100%;

    height: 82px;

    padding: 0 6%;

    display: flex;

    align-items: center;

    justify-content: space-between;

    z-index: 100;

    border-bottom:
        1px solid transparent;

    transition: 0.4s;
}


.navbar.scrolled {

    height: 68px;

    background:
        rgba(3,5,7,0.82);

    backdrop-filter: blur(18px);

    border-bottom:
        1px solid var(--line);
}


.logo {

    font-size: 22px;

    font-weight: 800;

    letter-spacing: 5px;

    white-space: nowrap;
}


.logo span {

    color: var(--cyan);
}


nav {

    display: flex;

    gap: 32px;

    margin-left: auto;

    margin-right: 35px;
}


nav a {

    position: relative;

    color: #aeb8c4;

    font-size: 12px;

    font-weight: 600;

    letter-spacing: 0.8px;

    transition: 0.3s;
}


nav a::after {

    content: "";

    position: absolute;

    left: 0;

    bottom: -7px;

    width: 0;

    height: 1px;

    background: var(--cyan);

    transition: 0.3s;
}


nav a:hover {

    color: white;
}


nav a:hover::after {

    width: 100%;
}


.nav-cta {

    padding: 11px 18px;

    border:
        1px solid rgba(0,229,255,0.4);

    border-radius: 4px;

    color: var(--cyan);

    font-size: 11px;

    font-weight: 700;

    letter-spacing: 1px;

    transition: 0.3s;
}


.nav-cta:hover {

    background: var(--cyan);

    color: #001014;

    box-shadow:
        0 0 25px
        rgba(0,229,255,0.25);
}



/* =========================================
   HERO
========================================= */

.hero {

    min-height: 100vh;

    position: relative;

    display: flex;

    align-items: center;

    overflow: hidden;

    background: #030507;
}


.hero-bg {

    position: absolute;

    inset: 0;

    background:
        linear-gradient(
            90deg,
            rgba(3,5,7,0.98) 0%,
            rgba(3,5,7,0.82) 45%,
            rgba(3,5,7,0.35) 100%
        ),
        url("./assets/images/mosko-bg.jpg");

    background-size: cover;

    background-position: center;

    opacity: 0.7;

    transform: scale(1.04);
}


.hero-grid {

    position: absolute;

    inset: 0;

    opacity: 0.2;

    background-image:
        linear-gradient(
            rgba(255,255,255,0.04) 1px,
            transparent 1px
        ),
        linear-gradient(
            90deg,
            rgba(255,255,255,0.04) 1px,
            transparent 1px
        );

    background-size:
        70px 70px;

    mask-image:
        linear-gradient(
            to bottom,
            black,
            transparent
        );
}


.hero-orb {

    position: absolute;

    width: 550px;

    height: 550px;

    border-radius: 50%;

    filter: blur(90px);

    opacity: 0.16;
}


.orb-one {

    background: var(--cyan);

    right: -200px;

    top: 5%;
}


.orb-two {

    background: #1479ff;

    left: -250px;

    bottom: -300px;
}


.hero-content {

    position: relative;

    z-index: 5;

    width: min(1100px, 88%);

    margin: auto;

    padding-top: 70px;
}


.hero-badge {

    display: inline-flex;

    align-items: center;

    gap: 10px;

    margin-bottom: 25px;

    padding: 8px 13px;

    border:
        1px solid rgba(0,229,255,0.25);

    border-radius: 100px;

    background:
        rgba(0,229,255,0.04);

    color: #9eabb9;

    font-size: 10px;

    font-weight: 700;

    letter-spacing: 2px;
}


.hero-badge span {

    width: 6px;

    height: 6px;

    border-radius: 50%;

    background: var(--cyan);

    box-shadow:
        0 0 12px var(--cyan);

    animation: pulse 1.5s infinite;
}


.hero-small {

    color: #778391;

    font-size: 13px;

    font-weight: 700;

    letter-spacing: 7px;

    margin-bottom: 10px;
}


.hero h1 {

    font-family:
        "Archivo Black",
        sans-serif;

    font-size:
        clamp(65px, 10vw, 145px);

    line-height: 0.86;

    letter-spacing: -7px;

    max-width: 1100px;
}


.hero-line {

    display: block;

    animation:
        heroIn 1s ease both;
}


.hero-line:nth-child(2) {

    animation-delay: 0.12s;
}


.hero-line.accent {

    color: transparent;

    -webkit-text-stroke:
        1px rgba(255,255,255,0.8);

    background:
        linear-gradient(
            90deg,
            #ffffff,
            var(--cyan),
            #ffffff
        );

    -webkit-background-clip: text;

    background-clip: text;

    background-size: 200% auto;

    animation:
        heroIn 1s ease both,
        shine 5s linear infinite;
}


.hero-description {

    max-width: 560px;

    margin-top: 32px;

    color: #9ba7b5;

    font-size: 16px;

    line-height: 1.8;
}


.hero-actions {

    display: flex;

    gap: 14px;

    margin-top: 35px;
}


.primary-btn,
.secondary-btn {

    display: inline-flex;

    align-items: center;

    justify-content: center;

    gap: 14px;

    min-height: 50px;

    padding: 0 22px;

    border-radius: 5px;

    font-size: 11px;

    font-weight: 800;

    letter-spacing: 1px;

    transition: 0.35s;
}


.primary-btn {

    background: var(--cyan);

    color: #001014;

    box-shadow:
        0 0 35px
        rgba(0,229,255,0.12);
}


.primary-btn:hover {

    transform: translateY(-4px);

    box-shadow:
        0 15px 45px
        rgba(0,229,255,0.25);
}


.secondary-btn {

    border:
        1px solid rgba(255,255,255,0.15);

    color: #d7dee6;

    background:
        rgba(255,255,255,0.025);
}


.secondary-btn:hover {

    border-color:
        rgba(0,229,255,0.5);

    color: var(--cyan);

    transform: translateY(-4px);
}


.hero-bottom {

    position: absolute;

    bottom: 30px;

    left: 6%;

    right: 6%;

    display: flex;

    align-items: center;

    gap: 18px;

    color: #56616e;

    font-size: 9px;

    font-weight: 700;

    letter-spacing: 2px;
}


.scroll-line {

    width: 70px;

    height: 1px;

    background:
        linear-gradient(
            90deg,
            var(--cyan),
            transparent
        );
}



/* =========================================
   MARQUEE
========================================= */

.marquee {

    overflow: hidden;

    padding: 24px 0;

    background: var(--cyan);

    color: #001014;

    transform:
        rotate(-1deg)
        scale(1.03);

    position: relative;

    z-index: 5;
}


.marquee-track {

    display: flex;

    align-items: center;

    gap: 35px;

    width: max-content;

    animation:
        marquee 22s linear infinite;
}


.marquee span {

    font-size: 12px;

    font-weight: 900;

    letter-spacing: 2px;
}


.marquee b {

    font-size: 12px;
}



/* =========================================
   SECTIONS
========================================= */

.section {

    position: relative;

    padding:
        140px 7%;

    background: var(--bg);

    border-top:
        1px solid var(--line);
}


.section-top {

    display: flex;

    align-items: flex-start;

    justify-content: space-between;

    margin-bottom: 65px;
}


.section-number {

    color: var(--cyan);

    font-size: 11px;

    font-weight: 800;

    letter-spacing: 2px;

    margin-right: 12px;
}


.section-label {

    color: #687482;

    font-size: 10px;

    font-weight: 800;

    letter-spacing: 3px;
}


.section-top > p {

    color: #56616e;

    font-size: 10px;

    font-weight: 700;

    line-height: 1.8;

    text-align: right;

    letter-spacing: 1px;
}



/* =========================================
   SERVICES
========================================= */

.services-grid {

    display: grid;

    grid-template-columns:
        repeat(3, 1fr);

    gap: 18px;
}


.service-card {

    position: relative;

    min-height: 420px;

    padding: 35px;

    overflow: hidden;

    border:
        1px solid var(--line);

    background:
        linear-gradient(
            145deg,
            rgba(255,255,255,0.045),
            rgba(255,255,255,0.01)
        );

    transition: 0.45s;
}


.service-card::before {

    content: "";

    position: absolute;

    width: 180px;

    height: 180px;

    border-radius: 50%;

    right: -90px;

    bottom: -90px;

    background: var(--cyan);

    filter: blur(80px);

    opacity: 0;

    transition: 0.45s;
}


.service-card:hover {

    transform: translateY(-10px);

    border-color:
        rgba(0,229,255,0.35);

    background:
        linear-gradient(
            145deg,
            rgba(0,229,255,0.07),
            rgba(255,255,255,0.015)
        );
}


.service-card:hover::before {

    opacity: 0.12;
}


.service-icon {

    display: flex;

    align-items: center;

    justify-content: center;

    width: 48px;

    height: 48px;

    margin-bottom: 60px;

    border:
        1px solid rgba(0,229,255,0.25);

    color: var(--cyan);

    font-size: 13px;

    font-weight: 800;
}


.service-number {

    position: absolute;

    top: 35px;

    right: 35px;

    color: #3f4955;

    font-size: 10px;

    letter-spacing: 2px;
}


.service-card h2 {

    font-family:
        "Archivo Black",
        sans-serif;

    font-size: 31px;

    line-height: 1;

    letter-spacing: -1.5px;

    margin-bottom: 25px;
}


.service-card p {

    color: #7d8997;

    max-width: 300px;

    font-size: 14px;

    line-height: 1.8;
}


.card-arrow {

    position: absolute;

    right: 35px;

    bottom: 30px;

    color: var(--cyan);

    font-size: 20px;

    transition: 0.3s;
}


.service-card:hover .card-arrow {

    transform:
        translate(5px, -5px);
}



/* =========================================
   PROJECTS
========================================= */

.projects-section {

    background:
        radial-gradient(
            circle at 80% 20%,
            rgba(0,229,255,0.05),
            transparent 30%
        ),
        var(--bg);
}


.projects-grid {

    display: grid;

    grid-template-columns:
        1.4fr 1fr;

    gap: 18px;
}


.project-card {

    position: relative;

    min-height: 450px;

    padding: 38px;

    overflow: hidden;

    border:
        1px solid var(--line);

    background: #070b10;

    transition: 0.45s;
}


.project-large {

    grid-row:
        span 2;

    min-height: 918px;
}


.project-card:hover {

    transform: translateY(-7px);

    border-color:
        rgba(0,229,255,0.35);
}


.project-number {

    position: absolute;

    top: 30px;

    right: 32px;

    color: #46515e;

    font-size: 11px;

    font-weight: 800;

    letter-spacing: 2px;
}


.project-glow {

    position: absolute;

    width: 450px;

    height: 450px;

    border-radius: 50%;

    left: 50%;

    top: 38%;

    transform:
        translate(-50%, -50%);

    background:
        radial-gradient(
            circle,
            rgba(0,229,255,0.3),
            transparent 65%
        );

    filter: blur(30px);

    opacity: 0.7;
}


.project-glow.purple {

    background:
        radial-gradient(
            circle,
            rgba(145,80,255,0.32),
            transparent 65%
        );
}


.project-glow.blue {

    background:
        radial-gradient(
            circle,
            rgba(20,100,255,0.3),
            transparent 65%
        );
}


.project-info {

    position: absolute;

    left: 38px;

    bottom: 70px;

    right: 38px;

    z-index: 2;
}


.project-info > span {

    color: var(--cyan);

    font-size: 9px;

    font-weight: 800;

    letter-spacing: 3px;
}


.project-info h2 {

    font-family:
        "Archivo Black",
        sans-serif;

    font-size:
        clamp(38px, 5vw, 70px);

    line-height: 0.95;

    letter-spacing: -3px;

    margin: 15px 0;
}


.project-small .project-info h2 {

    font-size: 42px;
}


.project-info p {

    max-width: 470px;

    color: #7c8794;

    font-size: 13px;

    line-height: 1.7;
}


.project-link {

    position: absolute;

    bottom: 30px;

    left: 38px;

    color: #d6dde5;

    font-size: 9px;

    font-weight: 800;

    letter-spacing: 2px;

    z-index: 3;
}



/* =========================================
   ABOUT
========================================= */

.about-section {

    min-height: 90vh;

    display: grid;

    grid-template-columns: 0.9fr 1.1fr;

    align-items: center;

    gap: 100px;
}


.about-visual {

    position: relative;

    height: 500px;

    display: flex;

    align-items: center;

    justify-content: center;
}


.about-circle {

    width: 310px;

    height: 310px;

    border-radius: 50%;

    display: flex;

    align-items: center;

    justify-content: center;

    background:
        radial-gradient(
            circle at 35% 30%,
            #19313a,
            #05090d 65%
        );

    border:
        1px solid rgba(0,229,255,0.3);

    box-shadow:
        0 0 100px
        rgba(0,229,255,0.08),
        inset 0 0 50px
        rgba(0,229,255,0.05);

    font-family:
        "Archivo Black",
        sans-serif;

    font-size: 36px;

    letter-spacing: 6px;
}


.about-circle span {

    color: transparent;

    -webkit-text-stroke:
        1px var(--cyan);

    transform:
        rotate(-20deg);
}


.about-orbit {

    position: absolute;

    width: 410px;

    height: 160px;

    border:
        1px solid rgba(0,229,255,0.25);

    border-radius: 50%;

    transform:
        rotate(-25deg);

    animation:
        orbit 8s linear infinite;
}


.about-content h2 {

    max-width: 700px;

    margin-top: 35px;

    font-family:
        "Archivo Black",
        sans-serif;

    font-size:
        clamp(42px, 6vw, 82px);

    line-height: 0.95;

    letter-spacing: -4px;
}


.about-content h2 span {

    color: var(--cyan);
}


.about-content > p {

    max-width: 600px;

    margin-top: 30px;

    color: #818d9a;

    font-size: 15px;

    line-height: 1.9;
}


.text-link {

    display: inline-flex;

    align-items: center;

    gap: 12px;

    margin-top: 35px;

    color: white;

    font-size: 12px;

    font-weight: 800;

    letter-spacing: 1px;

    border-bottom:
        1px solid var(--cyan);

    padding-bottom: 8px;
}


.text-link span {

    color: var(--cyan);
}



/* =========================================
   SKILLS
========================================= */

.skills-section {

    padding:
        100px 7%;

    border-top:
        1px solid var(--line);

    background: #020406;
}


.skills-wrap {

    display: flex;

    flex-wrap: wrap;

    gap: 12px;

    margin-top: 45px;
}


.skills-wrap span {

    padding: 16px 23px;

    border:
        1px solid rgba(255,255,255,0.1);

    background:
        rgba(255,255,255,0.025);

    color: #aeb8c3;

    font-size: 12px;

    font-weight: 700;

    transition: 0.3s;
}


.skills-wrap span:hover {

    color: var(--cyan);

    border-color:
        rgba(0,229,255,0.35);

    transform:
        translateY(-4px);
}



/* =========================================
   CTA
========================================= */

.cta-section {

    position: relative;

    min-height: 90vh;

    display: flex;

    align-items: center;

    justify-content: center;

    text-align: center;

    overflow: hidden;

    background:
        radial-gradient(
            circle at center,
            rgba(0,229,255,0.09),
            transparent 35%
        ),
        #030507;
}


.cta-grid {

    position: absolute;

    inset: 0;

    background-image:
        linear-gradient(
            rgba(255,255,255,0.035) 1px,
            transparent 1px
        ),
        linear-gradient(
            90deg,
            rgba(255,255,255,0.035) 1px,
            transparent 1px
        );

    background-size: 60px 60px;

    mask-image:
        radial-gradient(
            circle,
            black,
            transparent 70%
        );
}


.cta-content {

    position: relative;

    z-index: 2;
}


.cta-label {

    margin-top: 22px;

    color: #66727f;

    font-size: 10px;

    font-weight: 800;

    letter-spacing: 4px;
}


.cta-content h2 {

    margin-top: 25px;

    font-family:
        "Archivo Black",
        sans-serif;

    font-size:
        clamp(65px, 11vw, 155px);

    line-height: 0.82;

    letter-spacing: -8px;
}


.cta-content h2 span {

    color: transparent;

    -webkit-text-stroke:
        1px var(--cyan);

    text-shadow:
        0 0 50px
        rgba(0,229,255,0.08);
}


.cta-content > p {

    max-width: 500px;

    margin: 35px auto;

    color: #7d8996;

    line-height: 1.7;
}


.cta-actions {

    display: flex;

    justify-content: center;

    gap: 12px;
}



/* =========================================
   FEEDBACK
========================================= */

.feedback-section {

    padding:
        130px 7%;

    text-align: center;

    border-top:
        1px solid var(--line);

    background: #020406;
}


.feedback-section h2 {

    margin-top: 28px;

    font-family:
        "Archivo Black",
        sans-serif;

    font-size:
        clamp(40px, 6vw, 75px);

    letter-spacing: -4px;
}


.feedback-description {

    color: #727e8b;

    margin-top: 18px;
}


.feedback-box {

    width:
        min(650px, 100%);

    margin:
        35px auto 0;

    padding: 12px;

    border:
        1px solid rgba(255,255,255,0.1);

    background:
        rgba(255,255,255,0.025);

    text-align: left;
}


.feedback-box textarea {

    width: 100%;

    height: 130px;

    padding: 15px;

    resize: none;

    outline: none;

    border: none;

    background: transparent;

    color: white;

    font-size: 14px;
}


.feedback-box textarea::placeholder {

    color: #53606d;
}


.feedback-box button {

    display: flex;

    align-items: center;

    gap: 15px;

    padding: 14px 20px;

    border: none;

    border-radius: 3px;

    background: var(--cyan);

    color: #001014;

    font-size: 10px;

    font-weight: 900;

    letter-spacing: 1px;

    cursor: pointer;

    transition: 0.3s;
}


.feedback-box button:hover {

    transform: translateY(-3px);

    box-shadow:
        0 10px 35px
        rgba(0,229,255,0.2);
}



/* =========================================
   FOOTER
========================================= */

footer {

    padding:
        45px 7% 25px;

    background: #010204;

    border-top:
        1px solid var(--line);
}


.footer-top {

    display: flex;

    align-items: center;

    justify-content: space-between;

    padding-bottom: 40px;
}


.footer-top p {

    color: #596572;

    font-size: 12px;
}


.footer-instagram {

    color: var(--cyan);

    font-size: 11px;

    font-weight: 800;

    letter-spacing: 1px;
}


.footer-bottom {

    display: flex;

    justify-content: space-between;

    padding-top: 20px;

    border-top:
        1px solid var(--line);

    color: #3f4954;

    font-size: 9px;

    font-weight: 700;

    letter-spacing: 1.5px;
}


.footer-bottom a:hover {

    color: var(--cyan);
}



/* =========================================
   REVEAL
========================================= */

.reveal {

    opacity: 0;

    transform:
        translateY(40px);

    transition:
        opacity 0.9s ease,
        transform 0.9s ease;
}


.reveal.show {

    opacity: 1;

    transform:
        translateY(0);
}



/* =========================================
   ANIMATIONS
========================================= */

@keyframes pulse {

    0%,
    100% {
        opacity: 0.4;
        transform: scale(0.8);
    }

    50% {
        opacity: 1;
        transform: scale(1.2);
    }
}


@keyframes heroIn {

    from {

        opacity: 0;

        transform:
            translateY(35px);
    }

    to {

        opacity: 1;

        transform:
            translateY(0);
    }
}


@keyframes shine {

    0% {
        background-position: 0% center;
    }

    100% {
        background-position: 200% center;
    }
}


@keyframes marquee {

    from {
        transform: translateX(0);
    }

    to {
        transform: translateX(-50%);
    }
}


@keyframes orbit {

    from {
        transform:
            rotate(-25deg);
    }

    to {
        transform:
            rotate(335deg);
    }
}



/* =========================================
   TABLET
========================================= */

@media (max-width: 900px) {

    .navbar {

        padding: 0 4%;
    }


    nav {

        gap: 18px;

        margin-right: 15px;
    }


    .nav-cta {

        display: none;
    }


    .services-grid {

        grid-template-columns: 1fr;
    }


    .projects-grid {

        grid-template-columns: 1fr;
    }


    .project-large {

        grid-row: auto;

        min-height: 600px;
    }


    .about-section {

        grid-template-columns: 1fr;

        gap: 30px;
    }


    .about-visual {

        height: 400px;
    }

}



/* =========================================
   MOBILE
========================================= */

@media (max-width: 600px) {

    .cursor-glow {

        display: none;
    }


    .navbar {

        height: 65px;

        padding: 0 5%;
    }


    .navbar.scrolled {

        height: 60px;
    }


    .logo {

        font-size: 18px;

        letter-spacing: 3px;
    }


    nav {

        gap: 10px;

        margin: 0;
    }


    nav a {

        font-size: 8px;
    }


    nav a:nth-child(3),
    nav a:nth-child(4) {

        display: none;
    }


    .hero-content {

        width: 90%;

        padding-top: 30px;
    }


    .hero-small {

        font-size: 9px;

        letter-spacing: 4px;
    }


    .hero h1 {

        font-size: 55px;

        letter-spacing: -3px;
    }


    .hero-description {

        font-size: 13px;

        line-height: 1.7;
    }


    .hero-actions {

        flex-direction: column;

        width: 100%;
    }


    .primary-btn,
    .secondary-btn {

        width: 100%;
    }


    .hero-bottom {

        bottom: 20px;

        font-size: 7px;
    }


    .section {

        padding:
            90px 5%;
    }


    .section-top {

        margin-bottom: 40px;
    }


    .section-top > p {

        display: none;
    }


    .service-card {

        min-height: 350px;

        padding: 28px;
    }


    .project-card {

        min-height: 480px;

        padding: 28px;
    }


    .project-large {

        min-height: 600px;
    }


    .project-info {

        left: 28px;

        right: 28px;

        bottom: 65px;
    }


    .project-small .project-info h2 {

        font-size: 35px;
    }


    .about-circle {

        width: 240px;

        height: 240px;

        font-size: 28px;
    }


    .about-orbit {

        width: 310px;

        height: 130px;
    }


    .about-content h2 {

        font-size: 45px;

        letter-spacing: -3px;
    }


    .cta-section {

        min-height: 80vh;
    }


    .cta-content h2 {

        font-size: 65px;

        letter-spacing: -4px;
    }


    .cta-actions {

        flex-direction: column;

        width: 90%;

        margin: auto;
    }


    .footer-top {

        flex-direction: column;

        gap: 22px;

        align-items: flex-start;
    }


    .footer-bottom {

        flex-direction: column;

        gap: 12px;
    }

}
