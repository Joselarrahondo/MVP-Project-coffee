const coffeeType = document.querySelector(".coffee-types");

const coffeeList = document.querySelector(".coffee-list");
coffeeList.addEventListener("submit", (event) => {
  event.preventDefault();
  const formdata = new FormData(event.target);
  console.log(formdata.entries());
  fetch("/api/coffee")
    .then((res) => res.json())
    .then((coffies) => {
      for (let coffee of coffies) {
        if (formdata.get("caffein").toLocaleLowerCase() === coffee.caffein.toLocaleLowerCase()){
          const div = document.createElement("div");
          div.textContent = `${coffee.name}:${coffee.caffein}: ${coffee.flavor}`;
          coffeeType.append(div);
        }

        if (formdata.get("name").toLocaleLowerCase() === coffee.name.toLocaleLowerCase()) {
          console.log(formdata.get("name"));
          const div = document.createElement("div");
          div.textContent = `${coffee.name}:${coffee.caffein}: ${coffee.flavor}`;
          coffeeType.append(div);
        }

        if (formdata.get("flavor").toLocaleLowerCase() === coffee.flavor.toLocaleLowerCase()) {
          console.log(formdata.get("flavor"));
          const div = document.createElement("div");
          div.textContent = `${coffee.name}:${coffee.caffein}: ${coffee.flavor}`;
          coffeeType.append(div);
        }
       
        // alert("please provide search criteria")
    
      } 
      
    });
});

//     const coffeeList = document.querySelector(".coffee-list");
//     coffeeList.addEventListener("submit", (event) =>{
//         event.preventDefault();
//         const infoCoffe = new FormData(event.target);
//         const newCoffee = {name: infoCoffe.get("name"), caffein: infoCoffe.get("caffein"), flavor: infoCoffe.get("flavor")}
//         console.log(newCoffee)
//         fetch("/api/coffee", {
//             headers: {
//                 "Content-Type": "application/json"
//             },
//             method: 'POST',
//             body: JSON.stringify(newCoffee),
//         }).then((res) => res.json()).then((newCoffee) => {
//             const div = document.createElement("div");
//             div.textContent = `${coffies.name}: ${coffies.caffein}: ${coffies.flavor}`;
//            coffeeType.append(div)
//          });

//  })
