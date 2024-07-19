import React from "react";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Aufgabe2 = () => {
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
        <h6>Aufgabe2</h6>
      </header>

      <div className='content_wrap'>
        <Container>
          <h2>Welches Kleidungsstück ist beschrieben?</h2>
          <section className='item_cloth'>
            <div className='item_box aufgabe2'>
              <div className='cloth'>
                <img
                  src='./../../images/aufgabe02.png'
                  alt='Silhouette der Jacke'
                />
              </div>
            </div>
          </section>
          <section className='item_info'>
            <audio controls>
              <source src='./../../audio/aufgabe02.mp3' type='audio/mpeg' />
            </audio>
            <p>
              Das ist eine lange Stoffhose mit Reißverschluss und Knopf. Sie hat
              jeweils 2 Taschen an der Seite und hinten. Die schwarze Hose ist
              mit dünnen silbernen Streifen gestreift. Das Material besteht aus
              Polyester, Viskose und Elasthan und kann bei 40 Grad gewaschen
              werden. Man kann es bei Bedarf mäßig heiß bügeln und chlorfrei
              bleichen.
            </p>
          </section>
        </Container>
      </div>
    </div>
  );
};

export default Aufgabe2;
