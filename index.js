const mbody = document.querySelector(".appBody"),
dragText = document.querySelector(".appBody h3"),
Button = document.querySelector(".appBody button"),
input = document.querySelector(".appBody input");
let myfile ;


mbody.onclick = () =>{
    input.click();
};

input.addEventListener("change", function(){
    myfile = this.files[0];
    mbody.classList.add("active");
    showMe();
});

mbody.addEventListener("dragover", (event) => {
    event.preventDefault();
    mbody.classList.add("active");
    dragText.textContent = "Release to Upload File";
});

mbody.addEventListener("dragleave", (event) => {
    event.preventDefault();
    mbody.classList.remove("active");
    dragText.textContent = "Drag & Drop";
});

mbody.addEventListener("drop", (event) => {
    event.preventDefault();
    myfile = event.dataTransfer.files[0];
    showMe();
});

function showMe(){
    let fileType = myfile.type;
    let valEx = ["image/jpeg", "image/jpg", "image/png", "image/gif"];

    if (valEx.includes(fileType)) {
        let fileReader = new FileReader();
        fileReader.onload = () => {
            let imgUrl = fileReader.result;
            let img = `<img src="${imgUrl}" alt="">`;

            mbody.innerHTML = img;
        }
        fileReader.readAsDataURL(myfile);
    }else{
        alert("this file is not valid.        so      please try agani by another way.   this way just for images. you can use there jpg, png, jpeg or gif file . so try this by valid way");
        mbody.classList.remove("active");
    }
}