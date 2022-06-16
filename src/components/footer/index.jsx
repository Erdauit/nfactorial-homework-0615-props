import { ReactComponent as InstagramLogoSVG } from "../../assets/instagram.svg";
import { ReactComponent as YoutubeLogoSVG } from "../../assets/youtube.svg";
import { DefaultContext } from "../../Context";
import { useContext } from "react";

const Links = [
    {
      url: "https://www.instagram.com/erdauttt/",
      name: "instagram_logo",
      component: <InstagramLogoSVG/>,
    },
    {
      url: "https://www.buro247.ua/thumb/670x830_0/images/2021/10/memes-help-to-cope-with-stress65.jpg",
      name: "cotik",
      component: <YoutubeLogoSVG/>,
    }]

    export const Footer = ({theme}) => {
      if (theme == "light") {
        return (
          <footer className = {`${theme}`}>
            <div className="links-layout">
              {Links.map((link) => (
                <a
                  key={link.name}
                  className="link"
                  href={link.url}
                  target="_blank"
                  alt={link.name}
                  rel="noreferrer"
                >
                  {link.component}
                </a>
              ))}
              </div>
              <div className="text-center">
              <p>
  Star Wars. All copyright and license information contained here are protected by cat uwuwwuwuwu. V ssylke s youtube est kotik.
              </p>
              </div>
          </footer>
        );
      } else {
        return (
          <footer className = {`${theme}`}>
            <div className="links-layout">
              {Links.map((link) => (
                <a
                  key={link.name}
                  className="link"
                  href={link.url}
                  target="_blank"
                  alt={link.name}
                  rel="noreferrer"
                >
                  {link.component}
                </a>
              ))}
            </div>
              <div className="text-center">
<p>
  Star Wars. All copyright and license information contained here are protected by cat uwuwwuwuwu. V ssylke s youtube est kotik.
</p>
              </div>
          </footer>
        );
              }
            }