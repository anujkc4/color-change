const buttons = document.querySelectorAll(".button");
console.log(buttons);

const body = document.querySelector("body");
console.log(body);

buttons.forEach((val) => {
  console.log(val);
  // EVENT object ko use garne
  val.addEventListener("click", function (event) {
    // mouse pointer le jun thau ma click yei ko data ligna parxa
    // click le jun thau ma clic garo tei ko value dinxa
    //.target bata class id jasto taghru ko info dinxa
    console.log(event); // ani id access garna milxa
    console.log(event.target); // console.log(event.target) garda undefine aauxa
    const clickbtn = event.target; //tesaile console.log write garna parxa

    if (clickbtn.id == "green") {
      body.style.backgroundColor = "rgb(38, 187, 87)";
    } else if (clickbtn.id == "yellow") {
      body.style.backgroundColor = "yellow";
    } else if (clickbtn.id == "red") {
      body.style.backgroundColor = "red";
    } else if (clickbtn.id == "blue") {
      body.style.backgroundColor = "blue";
    }
  });
});


//   also right
//   if (clicked.id == "green") {
//       body.style.backgroundColor = "rgb(38, 187, 87)"
//     }
//     if (clicked.id == "yellow") {
//       body.style.backgroundColor = "yellow";
//     }
//     if (clicked.id == "red") {
//       body.style.backgroundColor = "red";
//     }
//     if (clicked.id == "blue") {
//       body.style.backgroundColor = "blue";
//     }
