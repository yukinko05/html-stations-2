function changeBackgroundColor(e) {
  // ここに背景色を変える処理を書く。
  const checkbox = document.getElementById("check");
  const p = document.getElementById("text");
  console.log(checkbox.checked);
  if (checkbox.checked) {
    p.style.backgroundColor = "red";
  } else {
    p.style.backgroundColor = "";
  }
}
