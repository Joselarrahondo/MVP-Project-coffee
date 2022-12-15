fetch("/api/coffee")
    .then((res) => res.json())
    .then ((data) => {
        console.log(data)
    });
