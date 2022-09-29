let nameFoodEl = document.querySelector("#food__name");
let priceFoodEl = document.querySelector("#food__price");
let imgFoodEl = document.querySelector("#food__img");
let cookerFoodEl = document.querySelector("#food__cooker");
let cafeFoodEl = document.querySelector("#food__cafe");
let btnAdderEl = document.querySelector("#food_adder-btn");
let doneFodEl = document.querySelector("#foods_done");

btnAdderEl.addEventListener("click" , (e) => {
    e.preventDefault();
    let taskEl = document.createElement("div");
    console.log(taskEl);
    taskEl.className = "taskno1"
    doneFodEl.appendChild(taskEl);
    // IMG
    let dadImgEl = document.createElement("div");
    taskEl.appendChild(dadImgEl);
    dadImgEl.className = "dad_img";
    let imgEl = document.createElement("img");
    dadImgEl.appendChild(imgEl)
    imgEl.className = "img_el";
    imgEl.src = imgFoodEl.value;
    // INFO
    let infoEl = document.createElement("div");
    taskEl.appendChild(infoEl);
    infoEl.className = "info_el"
    let writtenEl = document.createElement("h2");
    writtenEl.classList = "margin"
    infoEl.appendChild(writtenEl);
    //info---p///////////////////////
    let infoPEl = document.createElement("h5");
    writtenEl.appendChild(infoPEl);
    infoPEl.innerHTML = "Taom nomi:" + "  " + nameFoodEl.value;

    let infoPElNo1 = document.createElement("h5");
    writtenEl.appendChild(infoPElNo1);
    infoPElNo1.innerHTML = "Taom narxi:  $" + priceFoodEl.value;

    let infoPElNo2 = document.createElement("h5");
    writtenEl.appendChild(infoPElNo2);
    infoPElNo2.innerHTML = "Taom oshpazi:  " + "  " + cookerFoodEl.value;

    let infoPElNo3 = document.createElement("h5");
    writtenEl.appendChild(infoPElNo3);
    infoPElNo3.innerHTML = "Taom restorani:  " + "  " + cafeFoodEl.value;

    // BUTTONS

    let btnWrapper = document.createElement("div")
    taskEl.appendChild(btnWrapper)
    btnWrapper.className = "btn_wrapper"
    
    // BTN

    let btnDeleteEl = document.createElement("btn");
    btnDeleteEl.innerHTML = "Taomni o'chirish";
    btnWrapper.appendChild(btnDeleteEl);
    btnDeleteEl.className = "delete_btn";

    let btnTimeEl = document.createElement("btn");
    let timer = new Date();
    let time = timer.getMonth() + " / " + timer.getDay() + " / " + timer.getFullYear();
    btnTimeEl.innerHTML = time;
    btnWrapper.appendChild(btnTimeEl);
    btnTimeEl.className = "done_btn";
    
    let btnDoneEl = document.createElement("btn");
    btnDoneEl.innerHTML = "Taom tugadi";
    btnWrapper.appendChild(btnDoneEl);
    btnDoneEl.className = "date_btn";

    // DELETE 

    btnDeleteEl.addEventListener("click", () => {
        let agree = confirm("Are you sure?")
        if(agree == true){
            taskEl.remove()
        }
    })

    btnDoneEl.addEventListener("click" , () => {
        taskEl.classList.toggle("done_color")
    })
})