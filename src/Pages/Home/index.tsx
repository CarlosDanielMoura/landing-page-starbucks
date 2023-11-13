import logo from "../../assets/logo.png";
import coffe1 from "../../assets/img1.png";
import coffe2 from "../../assets/img2.png";
import coffe3 from "../../assets/img3.png";
import mini_coffe1 from "../../assets/thumb1.png";
import mini_coffe2 from "../../assets/thumb2.png";
import mini_coffe3 from "../../assets/thumb3.png";

import "./style.css";
import { useState } from "react";

const Home = () => {
  const [img, setImg] = useState("");
  const [typeCoffe, setTypeCoffe] = useState("#017143");

  const handleClickCoffe = (img: string) => {
    handleChangeImg(img);
  };

  const handleChangeImg = (typeCoffe: string) => {
    if (typeCoffe === "thumber1") {
      setImg(coffe1);
      setTypeCoffe("#017143");
    } else if (typeCoffe === "thumber2") {
      setImg(coffe2);
      setTypeCoffe("#eb7495");
    } else {
      setImg(coffe3);
      setTypeCoffe("#d752b1");
    }
  };

  return (
    <section className="_container">
      <div className="circle" style={{ background: typeCoffe }}></div>
      <header>
        <div className="_logo">
          <img src={logo} alt="" />
        </div>
        <nav>
          <ul className="nav-link">
            <li className="nav_links">
              <a href="#">Home</a>
            </li>
            <li className="nav_links">
              <a href="#">Menu</a>
            </li>
            <li className="nav_links">
              <a href="#">What's new</a>
            </li>
            <li className="nav_links">
              <a href="#">Contato</a>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        <div className="_details">
          <h1>
            It's not just Coffe <br /> It's <span> Starbucks</span>
          </h1>
          <p className="text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint unde
            laborum asperiores neque nesciunt accusamus nam iste labore, maxime
            doloremque est, magnam ullam illo? Obcaecati dolore exercitationem
            quidem ab aut.
          </p>

          <a href="#">Learn More</a>
        </div>
        <div className="_prop">
          <img src={img === "" ? coffe1 : img} alt="" />
        </div>
      </main>
      <footer>
        <div className="_icon">
          <ul>
            <li>
              <img
                src={mini_coffe1}
                alt=""
                onClick={() => handleClickCoffe("thumber1")}
              />
            </li>
            <li>
              <img
                src={mini_coffe2}
                alt=""
                onClick={() => handleClickCoffe("thumber2")}
              />
            </li>
            <li>
              <img
                src={mini_coffe3}
                alt=""
                onClick={() => handleClickCoffe("thumber3")}
              />
            </li>
          </ul>
        </div>
      </footer>
    </section>
  );
};

export default Home;
