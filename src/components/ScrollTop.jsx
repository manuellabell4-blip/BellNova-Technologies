import { useState, useEffect } from "react";
import "../styles/ScrollTop.css";

function ScrollTop() {

  const [visible, setVisible] = useState(false);


  useEffect(() => {

    const handleScroll = () => {

      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }

    };


    window.addEventListener("scroll", handleScroll);


    return () => {
      window.removeEventListener("scroll", handleScroll);
    };


  }, []);


  const goTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };


  return (

    visible && (

      <button 
        className="scroll-top"
        onClick={goTop}
      >
        ↑
      </button>

    )

  );

}

export default ScrollTop;