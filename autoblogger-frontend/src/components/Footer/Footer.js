import './Footer.css';

export function Footer({ currentLanguage }) {
    return (
        <footer>
          <div className="container">
            <p className="text">{currentLanguage === 'en' ? 'Made by ' : 'Desarrollado por '}<a href="https://www.linkedin.com/in/valentino-dabah-709190212/">Valentino Dabah</a></p>
          </div>
        </footer>
    );
}