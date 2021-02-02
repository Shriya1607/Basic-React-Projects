import React from "react";
import List from "./List";
function App() {
  const clear = () => {
    document.getElementById("clear").setAttribute("class", "d-none");
  };
  const add = () => {
    document.getElementById("clear").setAttribute("class", "bring");
  }
  return (
    <>
      <main>
        <section id="container">
          <div id="clear">
            <h3>5 Birthdays Today</h3>
            <List
              name="Vidushi"
              age="19 "
              date="21 June"
              image="https://avatars.dicebear.com/api/human/5.svg"
            />
            <List
              name="Rohini"
              age="21 "
              date="1 Feb"
              image="https://avatars.dicebear.com/api/human/4.svg"
            />
            <List
              name="Swanand"
              age="19 "
              date="12 August"
              image="https://avatars.dicebear.com/api/human/3.svg"
            />
            <List
              name="Saumya"
              age="19 "
              date="29 September"
              image="https://avatars.dicebear.com/api/human/2.svg"
            />
            <List
              name="Shubhangi"
              age="19 "
              date="15 August"
              image="https://avatars.dicebear.com/api/human/1.svg"
            />
          </div>
          <button onClick={clear}> Clear All </button>
          <button onClick={add}>Add All</button>
        </section>
      </main>
    </>
  );
}

export default App;
