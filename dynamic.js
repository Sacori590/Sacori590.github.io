let darkMode = false;

function changeTheme() {
  let color = "darkgrey";
  let rcolor = "white";
  if (!darkMode) {
    color = "white";
    rcolor = "black";
    document.body.style.backgroundColor = color;
    document.body.style.color = rcolor;
    document.getElementsByClassName("topbarcontent")[0].style.backgroundColor =
      color;
    let a = (document.getElementsByClassName("theme")[4].innerHTML = "🌙");
  } else {
    document.body.style.backgroundColor = color;
    document.body.style.color = rcolor;
    document.getElementsByClassName("topbarcontent")[0].style.backgroundColor =
      color;
    let a = (document.getElementsByClassName("theme")[4].innerHTML = "☀️");
  }
  darkMode = !darkMode;
}
