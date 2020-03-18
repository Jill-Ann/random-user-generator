const main = document.getElementById("root");
const container = document.createElement("div"); /*creates new div*/
container.setAttribute("class", "container");

main.appendChild(container);

const useFetchApi = () => {
  fetch("https://randomuser.me/api/?results=10")
  .then(response => response.json())
  .then(data => {
    data.results.forEach(result => {
      // Create a div with a card class
      const card = document.createElement("div");
      card.setAttribute("class", "card");

      // Create an h2 and set the text content to name
      const h2 = document.createElement("h2");
      // h2.textContent = result.name;
      h2.textContent = `${result.name.first} ${result.name.last}`;

      const p = document.createElement("p");
      p.textContent = `${result.location.city}, ${result.location.state}`;

      const img = document.createElement("img");
      img.src = result.picture.large;

      // Append the cards to the container element
      container.appendChild(card);
      card.appendChild(h2);
      card.appendChild(p);
      card.appendChild(img);
    });
  })
}

const usejQuery = () => {
  $(document).ready(function() {
    $.ajax({
      url: "https://randomuser.me/api/?results=10",
      dataType: "json",
      success: function(data) {
        data.results.forEach(result => {
          // Create a div with a card class
          const card = document.createElement("div");
          card.setAttribute("class", "card");

          // Create an h2 and set the text content to name
          const h2 = document.createElement("h2");
          h2.textContent = `${result.name.first} ${result.name.last}`;

          // Create a p and set the text content to location
          const p = document.createElement("p");
          p.textContent = `${result.location.city}, ${result.location.state}`;

          const img = document.createElement("img");
          img.src = result.picture.large;

          // Append the cards to the container element
          container.appendChild(card);
          // Each card will contain an h1 and a p
          card.appendChild(h2);
          card.appendChild(p);
          card.appendChild(img);
        });
      }
    });
  });
}

$("#fetch").click(useFetchApi);
$("#jquery").click(usejQuery);
