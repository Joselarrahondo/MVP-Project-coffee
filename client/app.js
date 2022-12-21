const coffeeType = document.querySelector(".coffee-types");
const cartAmount = document.querySelector(".cartAmount")
console.log(cartAmount)

let count = 1
coffeeType.addEventListener("click", (event)=>{
   const target = event.target.closest(".cartadd")
   if(target){
        cartAmount.innerHTML = count
        count++
        console.log(cartAmount.innertext)
    }
});

const coffeeList = document.querySelector(".coffee-list");
coffeeList.addEventListener("submit", (event) => {
  event.preventDefault();
  const formdata = new FormData(event.target);
  console.log(formdata.entries());
  fetch("/api/coffee")
    .then((res) => res.json())
    .then((coffies) => {
      for (let coffee of coffies) {
      
        if (
            formdata.get("caffein").toLocaleLowerCase() === coffee.caffein.toLocaleLowerCase()) {
            const div = document.createElement("div");
            const button = document.createElement("button")
            div.className="coffeesearch"
            button.className="cartadd"
            div.textContent = `Name:` + " " + `${coffee.name}`+ " " +`Caffein-Level:` + " " +`${coffee.caffein}` + " " + `Flavor:`+ " " +`${coffee.flavor}`;
            button.type = "submit"
            button.textContent = "add to cart"
            div.append(button)
            coffeeType.append(div);
       
        } else if (

            formdata.get("name").toLocaleLowerCase() === coffee.name.toLocaleLowerCase()) {
            const div = document.createElement("div");
            const button = document.createElement("button")
            button.className="cartadd"
            div.className="coffeesearch"
            div.textContent =`Name:` + " " + `${coffee.name}`+ " " +`Caffein-Level:` + " " +`${coffee.caffein}` + " " + `Flavor:`+ " " +`${coffee.flavor}`;
            button.type = "submit"
            button.textContent = "add to cart"
            div.append(button)
            coffeeType.append(div);
       
        } else if (
            
            formdata.get("flavor").toLocaleLowerCase() === coffee.flavor.toLocaleLowerCase()) {
            const div = document.createElement("div");
            const button = document.createElement("button")
            button.className="cartadd"
            div.className="coffeesearch"
            div.textContent =`Name:` + " " + `${coffee.name}`+ " " +`Caffein-Level:` + " " +`${coffee.caffein}` + " " + `Flavor:`+ " " +`${coffee.flavor}`;
            button.type = "submit"
            button.textContent = "add to cart"
            div.append(button)
            coffeeType.append(div);
        }
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
