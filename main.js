

  function getCustomer(){

    `use strict`
    fetch(`https://randomuser.me/api/?nat=us&format=json/`)
      .then( function(response){
        return response.json()
      })
      .then(function(json){
        console.log("data", json)

        const firstName = json.results[0].name.first
        const lastName = json.results[0].name.last
        const img = json.results[0].picture.large
        const email = json.results[0].email
        const street = json.results[0].location.street
        const city = json.results[0].location.city
        const state = json.results[0].location.state
        const zip = json.results[0].location.postcode

        const html = `
          <div class="customer">
            <img src="${img}">
            <div class="name">${firstName} ${lastName}</div>
            <div class="email">${email}</div><br>
            <div class="street">${street}</div><br>
            <div class="addy">${city}, ${state} ${zip}</div>
          </div>`

        document.querySelector(".customers").insertAdjacentHTML('beforeend', html)
      })
  }

  for (var i = 1; i <= 12 ; i++) {
    getCustomer()
  }
