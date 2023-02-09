
const InfinityWar = document.getElementById("Movie-1")


const EndgameButton = document.getElementById("Movie-2")

const moviesContainer= document.getElementById("Movie-container")

const div = document.createElement("div")
const div1 = document.createElement("div")
const div2 = document.createElement("div")
const div3 = document.createElement("div")
const div4 = document.createElement("div")

const img = document.createElement("img")

InfinityWar.addEventListener("click",()=> {
  fetch("https://www.omdbapi.com/?t=infinity+war&apikey=f04458d7")
      .then((response) => response.json())
          .then((data) => {
            console.log(data)
            div1.innerText= data.Title
            div2.innerText= data.Year
            img.src = data.Poster
            div3.innerText= data.Rated
            div4.innerText= data.Director
            moviesContainer.appendChild(div)
            moviesContainer.appendChild(div1)
            moviesContainer.appendChild(div2)
            moviesContainer.appendChild(div3)
            moviesContainer.appendChild(div4)
            div.appendChild(img)
            
          })


})


EndgameButton.addEventListener("click",()=> {
  fetch("https://www.omdbapi.com/?t=avengers+endgame&apikey=f04458d7")
      .then((response) => response.json())
          .then((data) => {
            console.log(data)
            div1.innerText= data.Title
            div2.innerText= data.Year
            img.src = data.Poster
            div3.innerText= data.Rated
            div4.innerText= data.Director
            moviesContainer.appendChild(div)
            moviesContainer.appendChild(div1)
            moviesContainer.appendChild(div2)
            moviesContainer.appendChild(div3)
            moviesContainer.appendChild(div4)
            div.appendChild(img)
            
          })


})



// http://www.omdbapi.com/?t=+Spiderverse

// http://www.omdbapi.com/?t=avengers+endgame

