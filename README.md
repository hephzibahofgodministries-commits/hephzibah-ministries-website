index.html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hephzibah of God Ministries</title>

    <style>
        :root {
            --primary: #173f5f;
            --primary-dark: #102f48;
            --accent: #c89b3c;
            --accent-soft: #f4ead2;
            --light-blue: #eaf2f5;
            --page-bg: #f7f8f6;
            --text: #263238;
            --muted: #60717a;
            --white: #ffffff;
            --border: #dce5e7;
            --shadow: 0 12px 30px rgba(23, 63, 95, 0.09);
            --spacing: clamp(1rem, 3vw, 2rem);
        }

        * {
            box-sizing: border-box;
        }

        html {
            scroll-behavior: smooth;
        }

        body {
            margin: 0;
            font-family: "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
            background: var(--page-bg);
            color: var(--text);
            line-height: 1.7;
            font-size: clamp(1rem, 1.5vw, 1.1rem);
        }

        header {
            background:
                linear-gradient(135deg, rgba(16, 47, 72, 0.98), rgba(23, 63, 95, 0.94)),
                var(--primary);
            color: var(--white);
            text-align: center;
            padding: clamp(2.5rem, 8vw, 5rem) var(--spacing);
            border-bottom: 4px solid var(--accent);
        }

        header h1 {
            margin: 0 0 0.5rem;
            font-size: clamp(1.7rem, 5vw, 2.5rem);
            line-height: 1.2;
            letter-spacing: 0.04em;
        }

        header p {
            margin: 0.35rem 0;
            color: #e7eef0;
        }

        nav {
            position: sticky;
            top: 0;
            z-index: 10;
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            gap: 0.35rem 0.75rem;
            background: rgba(255, 255, 255, 0.96);
            padding: 0.75rem var(--spacing);
            box-shadow: 0 4px 16px rgba(23, 63, 95, 0.1);
            backdrop-filter: blur(10px);
        }

        nav a {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            min-height: 44px;
            padding: 0.5rem 0.75rem;
            color: var(--primary);
            text-decoration: none;
            font-weight: 700;
            border-radius: 999px;
            transition: background-color 0.2s ease, color 0.2s ease, transform 0.2s ease;
        }

        nav a:hover,
        nav a:focus-visible {
            background: var(--accent-soft);
            color: var(--primary-dark);
            transform: translateY(-1px);
            outline: none;
        }

        .hero {
            background:
                linear-gradient(rgba(234, 242, 245, 0.94), rgba(234, 242, 245, 0.94)),
                radial-gradient(circle at top right, #f4ead2, transparent 45%);
            text-align: center;
            padding: clamp(3.5rem, 11vw, 7rem) var(--spacing);
        }

        .hero h2 {
            margin-top: 0;
            color: var(--primary);
            font-size: clamp(1.8rem, 6vw, 2.8rem);
            line-height: 1.25;
        }

        .hero p {
            max-width: 650px;
            margin: 1rem auto;
            color: var(--muted);
        }

        .button {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            min-height: 48px;
            padding: 0.75rem 1.35rem;
            background: var(--primary);
            color: var(--white);
            text-decoration: none;
            border: 2px solid var(--primary);
            border-radius: 999px;
            margin-top: 0.75rem;
            font-weight: 700;
            box-shadow: 0 8px 18px rgba(23, 63, 95, 0.18);
            transition: background-color 0.2s ease, border-color 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease;
        }

        .button:hover,
        .button:focus-visible {
            background: var(--primary-dark);
            border-color: var(--primary-dark);
            transform: translateY(-2px);
            box-shadow: 0 12px 24px rgba(23, 63, 95, 0.24);
            outline: 3px solid rgba(200, 155, 60, 0.35);
            outline-offset: 3px;
        }

        section {
            width: min(100% - 2rem, 850px);
            padding: clamp(2rem, 6vw, 3rem);
            margin: 1.5rem auto;
            scroll-margin-top: 5rem;
            background: var(--white);
            border: 1px solid var(--border);
            border-radius: 16px;
            box-shadow: var(--shadow);
            transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        section:hover {
            transform: translateY(-3px);
            box-shadow: 0 16px 34px rgba(23, 63, 95, 0.12);
        }

        section h2 {
            margin-top: 0;
            color: var(--primary);
            font-size: clamp(1.5rem, 4vw, 2rem);
            line-height: 1.3;
        }

        ul {
            padding-left: 1.5rem;
        }

        li {
            margin-bottom: 0.5rem;
        }

        .verse {
            background: var(--accent-soft);
            border-left: 5px solid var(--accent);
            padding: clamp(1rem, 4vw, 1.5rem);
            margin-top: 1.25rem;
            border-radius: 0 12px 12px 0;
            color: var(--primary-dark);
        }

        .verse p {
            margin-top: 0;
        }

        footer {
            background: var(--primary-dark);
            color: var(--white);
            text-align: center;
            padding: 2.5rem var(--spacing);
            border-top: 4px solid var(--accent);
        }

        footer p {
            margin: 0.35rem 0;
            color: #e7eef0;
        }

        @media (max-width: 600px) {
            nav {
                justify-content: stretch;
                gap: 0.25rem;
            }

            nav a {
                flex: 1 1 calc(50% - 0.25rem);
                text-align: center;
            }

            section {
                width: min(100% - 1.5rem, 850px);
                padding: 1.5rem;
                margin-block: 1rem;
            }
        }

        @media (min-width: 601px) {
            nav a {
                padding-inline: 0.9rem;
            }
        }

        @media (prefers-reduced-motion: reduce) {
            html {
                scroll-behavior: auto;
            }

            nav a,
            .button,
            section {
                transition: none;
            }
        }
    </style>
</head>

<body>

    <header>
        <h1>HEPHZIBAH OF GOD MINISTRIES</h1>
        <p>The Chosen One</p>
        <p>Preaching Christ, Holiness and the Power of God</p>
    </header>

    <nav>
        <a href="#home">Home</a>
        <a href="#about">About Us</a>
        <a href="#services">Services</a>
        <a href="#sermons">Sermons</a>
        <a href="#radio">Hephzibah Waves</a>
        <a href="#contact">Contact</a>
    </nav>

    <div class="hero" id="home">
        <h2>Welcome to Hephzibah of God Ministries</h2>
        <p>A place to encounter Jesus Christ, grow in holiness,
        and prepare for eternity.</p>
        <a class="button" href="#about">Discover Our Ministry</a>
    </div>

    <section id="about">
        <h2>About Our Ministry</h2>
        <p>
            Hephzibah of God Ministries is committed to proclaiming
            the Gospel of Jesus Christ, calling souls to repentance,
            teaching biblical holiness, and helping believers grow
            in their relationship with God.
        </p>
    </section>

    <section id="services">
        <h2>Our Services</h2>
        <p>Join us as we worship God, study His Word, pray together,
        and seek spiritual growth.</p>
        <ul>
            <li>Worship and prayer meetings</li>
            <li>Bible study and discipleship</li>
            <li>Revival and deliverance programmes</li>
            <li>Christian retreats and conferences</li>
            <li>Evangelism and soul-winning</li>
        </ul>
    </section>

    <section id="sermons">
        <h2>Sermons and Bible Teachings</h2>
        <p>
            Discover biblical teachings designed to lead people
            to salvation, strengthen faith, and encourage holy living.
        </p>
        <p>Our sermons and teaching resources will be added here.</p>
    </section>

    <section id="radio">
        <h2>Hephzibah Waves</h2>
        <p>
            Welcome to Hephzibah Waves, our online radio and podcast
            platform for sharing the Word of God and encouraging
            Christian growth.
        </p>
        <p>Our live radio stream and podcast episodes will be added here.</p>
    </section>

    <section>
        <h2>Our Bible Foundation</h2>
        <div class="verse">
            <p>
                "Be ye holy; for I am holy."
            </p>
            <strong>1 Peter 1:16</strong>
        </div>
    </section>

    <section id="contact">
        <h2>Contact Us</h2>
        <p>
            We welcome you to connect with Hephzibah of God Ministries.
        </p>
        <p>Our official contact details will be added here.</p>
    </section>

    <footer>
        <p>HEPHZIBAH OF GOD MINISTRIES</p>
        <p>The Chosen One</p>
        <p>Preaching Christ and Proclaiming Holiness</p>
        <p>&copy; 2026 Hephzibah of God Ministries</p>
    </footer>

</body>
</html>
