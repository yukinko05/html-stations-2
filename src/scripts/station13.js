function changeBackgroundColor(e) {
  // ここに背景色を変える処理を書く。
  let checkbox = document.getElementById("check");
  let p = document.getElementById("text");
  console.log(checkbox.checked);
  if (checkbox.checked) {
    p.style.backgroundColor = "red";
  } else {
    p.style.backgroundColor = "";
  }
}
