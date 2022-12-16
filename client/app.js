const coffeeType = document.querySelector(".coffee-types");

fetch("/api/coffee")
    .then((res) => res.json())
    .then ((coffee) => {
        console.log(coffee)
     for (let coffies of coffee) {
        const div = document.createElement("div");
        div.textContent = `${coffies.name}: ${coffies.caffein}: ${coffies.flavor}`;
       coffeeType.append(div)
     }
    });

    const coffeeList = document.querySelector(".coffee-list");
    coffeeList.addEventListener("submit", (event) =>{
        event.preventDefault();
        const infoCoffe = new FormData(event.target);
        const newCoffee = {name: infoCoffe.get("name"), caffein: infoCoffe.get("caffein"), flavor: infoCoffe.get("flavor")}
        console.log(newCoffee)
        fetch("/api/coffee", {
            headers: {
                "Content-Type": "application/json"
            },
            method: 'POST',
            body: JSON.stringify(newCoffee),
        }).then((res) => res.json()).then((newCoffee) => {
            const div = document.createElement("div");
            div.textContent = `${coffies.name}: ${coffies.caffein}: ${coffies.flavor}`;
           coffeeType.append(div)
         });
            
 })
    