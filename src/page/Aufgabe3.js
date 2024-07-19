import React from "react";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Aufgabe3 = () => {
  const navigate = useNavigate();
  const goToHome = () => {
    navigate("/");
  };
  return (
    <div>
      <header>
        <button onClick={goToHome} className='btn_home'>
          <img
            src='./../../images/ico_home.svg'
            alt='Zurück zum Hauptbildschirm'
          />
        </button>
        <h6>Aufgabe3</h6>
      </header>

      <div className='content_wrap'>
        <Container>
          <h2>Welches Kleidungsstück ist beschrieben?</h2>
          <section className='item_cloth'>
            <div className='item_box aufgabe3'>
              <div className='cloth'>
                <img
                  src='./../../images/aufgabe03.png'
                  alt='Silhouette der Jacke'
                />
              </div>
            </div>
          </section>
          <section className='item_info'>
            <audio controls>
              <source src='./../../audio/aufgabe03.mp3' type='audio/mpeg' />
            </audio>
            <p>
              Das ist ein schwarzes Kurzarmhemd mit Waffelstruktur, einem
              Umlegekragen, klassischer Knopfleiste und Brusttasche. Dieses Hemd
              besteht zu 100% aus Polyester und bietet einen angenehmen
              Tragekomfort. Das Hemd kann chemisch gereinigt und in der
              Waschmaschine bei 40 Grad gewaschen werden, auf der Leine
              getrocknet und mäßig heiß gebügelt werden. Bei Bedarf kann das
              Hemd chlorfrei gebleicht werden.
            </p>
          </section>
        </Container>
      </div>
    </div>
  );
};

export default Aufgabe3;
