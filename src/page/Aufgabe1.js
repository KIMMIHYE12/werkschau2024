import React from "react";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Aufgabe1 = () => {
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
        <h6>Aufgabe 1</h6>
      </header>

      <div className='content_wrap'>
        <Container>
          <h2>Welches Kleidungsstück ist beschrieben?</h2>
          <section className='item_cloth'>
            <div className='item_box'>
              <div className='cloth'>
                <img
                  src='./../../images/aufgabe01.png'
                  alt='Silhouette der Jacke'
                />
              </div>
            </div>
          </section>
          <section className='item_info'>
            <audio controls>
              <source src='./../../audio/aufgabe01.mp3' type='audio/mpeg' />
            </audio>
            <p>
              Das ist ein langes Kleid mit V-Ausschnitt und dünnen Trägern, die
              durch kleine Schlaufen gezogen und im Rücken gebunden werden. Es
              hat ein schönes Zitronenmuster auf cremefarbenen Grund und entlang
              den Zweigen ist ein Schriftzug auf Italienisch. Das Material ist
              Baumwolle und Viskose, das Kleid ist bei 30 Grad zu waschen.
            </p>
          </section>
        </Container>
      </div>
    </div>
  );
};

export default Aufgabe1;
