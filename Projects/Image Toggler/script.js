const image1 = document.getElementById("image1");
const image2 = document.getElementById("image2");

let isImage1Visible = true;
image1.style.display = "block";

const toggle = () => {
  if (isImage1Visible) {
    image1.style.display = "none";
    image2.style.display = "block";
  } else {
    image1.style.display = "block";
    image2.style.display = "none";
  }
  isImage1Visible = !isImage1Visible;
};

setInterval(toggle, 1000);
