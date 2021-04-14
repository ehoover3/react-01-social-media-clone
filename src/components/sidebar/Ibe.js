import React, { useState, useEffect } from "react";
import { Accordion, Button, Card } from "react-bootstrap";
import "./IbeAPI.css";
// https://github.com/public-apis/public-apis

function Ibe() {
  const [dogPics, setDogPics] = useState();

  useEffect(() => {
    // Add the API fetch request here
    fetch("https://random.dog/woof.json")
      .then((res) => res.json())
      .then((data) => {
        setDogPics(data.url);
      });
  }, []);
  // Add other functions here

  // function Doggie(event) {
  //   console.log("Fuck Yeah!!");
  //   if (event === true) {
  //     fetch("https://random.dog/woof.json")
  //       .then((res) => res.json())
  //       .then((data) => {
  //         setDogPics(data.url);
  //       });
  //   }
  // }

  function newDog(event){
    console.log("Fuck Yeah!!");
  }

  return (
    <Accordion>
      <Card>
        <Card.Header>
          <Accordion.Toggle as={Button} variant="link" eventKey="0">
            Random Dog Picture
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="0">
          <Card.Body>
            <section>
              <div>
                <img src={dogPics} />
                <button onClick={newDog}>New Picture</button>
              </div>
            </section>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  );
}
export default Ibe;
