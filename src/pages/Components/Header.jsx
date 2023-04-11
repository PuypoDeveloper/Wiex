import styles from "../../styles/Header.module.css";
import React, { useState, useEffect } from "react";
import { gsap } from "gsap";
import Link from "next/link";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
import ExpandMoreSharpIcon from "@mui/icons-material/ExpandMoreSharp";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import BungalowIcon from "@mui/icons-material/Bungalow";
import GridViewIcon from "@mui/icons-material/GridView";
import DescriptionIcon from "@mui/icons-material/Description";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import YTvideos from "../../Elements/youtube";
import Login from "./Login/Login";
import CreateAccount from "./Login/createAccount";
import ForgotPassword from "./Login/forgotPassword";
import useModalCreateAccount from "./hooks/useModalCreateAccount";
import useModal from "./hooks/useModal";
import useModalForgot from "./hooks/useModalForgot";
import useModalValidAcount from "./hooks/useModalValidAcount";
import useModalNewPassword from "./hooks/useModalNewPassword";
import ValidAcount from "./Login/validAcount";
import NewPassword from "./Login/newPassword";

const Header = () => {
  /** Funciones menu desplegable desde "computadoras" */

  const ActiveMenu = () => {
    const ActiveMenu2 = () => {
      document.getElementById("olPages").style.display = "grid";
    };
    ActiveMenu2();
  };


  const DesactiveMenu = () => {
    document.getElementById("olPages").style.display = "none";

  };


  /** Funciones parte menu hamburguesa */

  const ActiveDeployMenu = () => {
    document.getElementById("ctnMenuHambuger").style.display = "block";
    let tl1 = gsap.timeline({
      repeat: 0,
    });
    let tl2 = gsap.timeline({
      repeat: 0,
    });
    tl1.from("#ctnMenuHambuger", {
      duration: 0.5,
      backgroundColor: "rgba(0, 0, 0, 0)",
    });
    tl2.from("#cardMovil", {
      duration: 0.5,
      width: "0%",
    });
  };

  const selectOptionMenu = (id) => {
    let tl1 = gsap.timeline({
      repeat: 0,
    });
    tl1.to("#" + id, {
      duration: 0.1,
      backgroundColor: "#1ceeee42",
      color: "#0bacac",
      fontWeight: "bold",
    });
  };

  const selectOffOption = (id) => {
    let tl1 = gsap.timeline({
      repeat: 0,
    });
    tl1.to("#" + id, {
      duration: 0.1,
      backgroundColor: "white",
      color: "black",
      fontWeight: "lighter",
    });
  };

  const ActiveDeployMenuOff = () => {
    window.addEventListener("click", (e) => {
      const a = e.target;
      const b = document.getElementById("ctnMenuHambuger");
      if (a == b) {
        document.getElementById("ctnMenuHambuger").style.display = "none";
      }
    });
  };

  /**FUNCIONES PARTE DESPLEGABLE MENU HAMBURGER */

  const [deploy, setDeploy] = useState(false);

  const desployPage = () => {
    if (deploy === false) {
      desployPageTrue();
    }
    if (deploy === true) {
      desployPageFalse();
    }
  };

  const desployPageTrue = () => {
    document.getElementById("pagesMenu").style.display = "block";
    let tl1 = gsap.timeline({
      repeat: 0,
    });
    tl1.from("#pagesMenu", {
      duration: 0.2,
      height: 0,
    });
    setDeploy(true);
  };
  const desployPageFalse = () => {
    document.getElementById("pagesMenu").style.display = "none";
    let tl1 = gsap.timeline({
      repeat: 0,
    });
    tl1.from("#pagesMenu", {
      duration: 0.2,
      height: 100,
    });
    setDeploy(false);
  };


  /**LOGIN */

    const [isOpenLogin, OpenModalLogin, CloseModalLogin] = useModal(); 
    const [isOpenForgot, OpenModalForgot, CloseModalForgot] = useModalForgot(); 
    const [isOpenValid, OpenModalValid, CloseModalValid] = useModalValidAcount(); 
    const [isOpenNew, OpenModalNew, CloseModalNew] = useModalNewPassword(); 
    const [isOpenCreate, OpenModalCreate, CloseModalCreate] = useModalCreateAccount(); 
  
  return (
    <>
      <header className={styles.header}>
        <nav className={styles.nav}>
          {/** SECCION DE LOGO DEL HEADER*/}
          <section className={styles.ctnLogoHeader}>
            <Link className={styles.linkHeader} href={"/"}>
              <img src="/img/icons/logoWiex.png" alt="" />
            </Link>
          </section>

          {/** SECCION DEL MENU DEL HEADER*/}
          <section className={styles.ctnMenuHeader}>
            <ul className={styles.ulMenu}>
              <Link href = "/" className={styles.elementsMenu_1}>
                <span>
                  <RadioButtonCheckedIcon
                    className={styles.iconWordsHeader_1}
                  />
                </span>
                Home
              </Link>
              <li className={styles.elementsMenu}>Components</li>
              <li
                className={styles.elementsMenu}
                onMouseMove={ActiveMenu}
                onMouseLeave={DesactiveMenu}
              >
                Pages
                <span className={styles.iconWordsHeader}>
                  <ExpandMoreSharpIcon />
                </span>
              </li>
              <li className={styles.elementsMenu}>Documentation</li>
            </ul>
            <div className={styles.ctnBtnHeader}>
              <div
                className={styles.ctbIconHamburger}
                onClick={ActiveDeployMenu}
              >
                <MenuRoundedIcon className={styles.iconHamburger} />
              </div>
            </div>
          </section>

          <section className={styles.ctnOlPages}
              onMouseMove={ActiveMenu}
              onMouseLeave={DesactiveMenu}
              id="olPages">
              <div className={styles.Olpages}>
                <div className={styles.menuOlPages}>
                  <section className={styles.sectionOlPages}>
                    <h4>partners</h4>
                    <Link className={styles.linkMenu} href={"/Astronics"}>Astronics</Link>
                    <Link className={styles.linkMenu} href={"/CopperMountain"}>Copper Mountain</Link>
                  </section>
                  <section className={styles.sectionOlPages}>
                    <h4>authentication</h4>
                    <li onClick={OpenModalLogin}>Login</li>
                    <li onClick={OpenModalCreate}>Register</li>
                  </section>
                  <section className={styles.sectionOlPages}>
                    <h4>Products</h4>
                    <li> All products</li>
                  </section>
                </div>
                <div className={styles.imgOlPages}>
                  <h4>Videos <span><a href="" className={styles.moreVideos}>More videos</a></span></h4>
                  <div className={styles.ctnImageOlpages}>
                    <YTvideos/>
                  </div>
                </div>
            </div>
          </section>

          {/** SECCION DEL MENU HAMBURGER*/}
          <section
            className={styles.ctnMenuHambuger}
            id="ctnMenuHambuger"
            onClick={ActiveDeployMenuOff}
          >
            <div className={styles.menuHamburger} id="cardMovil">
              <div className={styles.imgMenuHaburger}>
                <img src="/img//icons/logoWiex.png" alt="" />
              </div>
              <div className={styles.ctnElementsHamburger}>
                <ul className={styles.elementsHamburger}>
                  <Link href={"/"}
                    className={styles.LiElements_11}
                    id="LiElements1"
                    onMouseMove={() => {
                      selectOptionMenu("LiElements1");
                    }}
                    onMouseLeave={() => {
                      selectOffOption("LiElements1");
                    }}
                  >
                    <span className={styles.iconHamburger_2}>
                      <BungalowIcon />
                    </span>
                    Home
                  </Link>
                  <li
                    className={styles.LiElements}
                    id="LiElements2"
                    onMouseMove={() => {
                      selectOptionMenu("LiElements2");
                    }}
                    onMouseLeave={() => {
                      selectOffOption("LiElements2");
                    }}
                  >
                    <span className={styles.iconHamburger_2}>
                      <GridViewIcon />
                    </span>
                    Components
                  </li>
                  <li
                    className={styles.LiElements}
                    id="LiElements3"
                    onMouseMove={() => {
                      selectOptionMenu("LiElements3");
                    }}
                    onMouseLeave={() => {
                      selectOffOption("LiElements3");
                    }}
                    onClick={desployPage}
                  >
                    <span className={styles.iconHamburger_2}>
                      <DescriptionIcon />
                    </span>
                    Pages
                    <span className={styles.arrowInLi}>
                      <ChevronRightIcon />
                    </span>
                  </li>

                  {/** SECCION DE MENU DESPLEGABLE HAMBURGER*/}
                  <div className={styles.pagesMenuHamburger} id="pagesMenu">
                    <div className={styles.pagesM}>
                      <p className={styles.subTitulePages}>PARTNERS</p>
                      <Link href={"/Astronics"} className={styles.elementsP_1}>Astronics</Link>
                      <br />
                      <br />
                      <Link href={"/CopperMountain"} className={styles.elementsP_2}>CopperMountain</Link>
                    </div>
                    <div className={styles.pagesM}>
                      <p className={styles.subTitulePages}>AUTHENTICATION</p>
                      <li className={styles.elementsP} onClick={OpenModalLogin}>Login</li>
                      <li className={styles.elementsP} onClick={OpenModalCreate}>Register</li>
                    </div>
                    <div className={styles.pagesM}>
                      <p className={styles.subTitulePages}>PRODUCTS</p>
                      <li className={styles.elementsP}>All products</li>
                    </div>
                  </div>

                  <li
                    className={styles.LiElements}
                    id="LiElements4"
                    onMouseMove={() => {
                      selectOptionMenu("LiElements4");
                    }}
                    onMouseLeave={() => {
                      selectOffOption("LiElements4");
                    }}
                  >
                    <span className={styles.iconHamburger_2}>
                      <AutoStoriesIcon />
                    </span>
                    Documentation
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </nav>
        <section>
        <Login 
            isOpen={isOpenLogin} 
            CloseModal={CloseModalLogin}
            OpenNext={OpenModalForgot}
            OpenCreate={OpenModalCreate}
        />
        <ForgotPassword
            isOpen={isOpenForgot}
            CloseModal={CloseModalForgot}
            OpenBack={OpenModalLogin}
            OpenNext={OpenModalValid}
          />
        <ValidAcount 
            isOpen={isOpenValid}
            CloseModal={CloseModalValid}
            OpenBack={OpenModalForgot}
            OpenNext= {OpenModalNew}
        />
        <NewPassword
            isOpen={isOpenNew}
            CloseModal={CloseModalNew}
            OpenBack={OpenModalValid}
        />
        <CreateAccount
            isOpen={isOpenCreate}
            CloseModal={CloseModalCreate}
            OpenBack={OpenModalLogin}
        />
        </section>
      </header>
    </>
  );
};

export default Header;