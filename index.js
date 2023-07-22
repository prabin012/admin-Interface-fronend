const images = document.querySelector("img"),
 input = document.querySelector("input");

 input.addEventListener("change", () => {
    images.scr = URL.createObjectURL(input.files[0]);
 });





