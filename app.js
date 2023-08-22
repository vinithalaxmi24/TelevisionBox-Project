const arrows = document.querySelectorAll(".arrow");
const movieLists = document.querySelectorAll(".movie-list");
console.log(arrows,movieLists);
arrows.forEach((arrow, i) => {
  const itemNumber = movieLists[i].querySelectorAll("img").length;
  let clickCounter = 0;
  arrow.addEventListener("click", () => {
    console.log(movieLists[i]);
    console.log(window.innerWidth);
    const ratio = Math.floor(window.innerWidth / 270);
    clickCounter++;

    console.log(itemNumber, (4 + clickCounter) ,(4 - ratio));
    if (itemNumber - (4 + clickCounter) + (4 - ratio) >= 0) {

      console.log(movieLists[i].computedStyleMap().get("transform")[0].x.value);
      movieLists[i].style.transform = `translateX(${
        movieLists[i].computedStyleMap().get("transform")[0].x.value - 300
      }px)`;
    } else {
      movieLists[i].style.transform = "translateX(0)";
      clickCounter = 0;
    }
  });

  console.log(Math.floor(window.innerWidth / 270));
});
