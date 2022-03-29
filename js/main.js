$("document").ready(() => {
    UpdateEvents();
})

function UpdateEvents() {
    $(".ZZZRegler").mousemove(reglerUpdate);
    $(".ZZZRegler").mousedown(reglerUpdate);
    $(".ZufriedenheitsEingabe").keypress(ChangeZufriedenheitsfaktor);
    $(".ZufriedenheitsEingabe").change(ChangeZufriedenheitsfaktor);
    $(".ErfüllungBereich").keypress(UpdateErfüllungBereich);
    $(".ErfüllungBereich").change(UpdateErfüllungBereich);
    $(".addBereich").click(addBereich)
}

function reglerUpdate(e) {
    if (e.buttons != 1) {
        return;
    }
    let canvas = e.currentTarget;
    let bounding = canvas.getBoundingClientRect();
    let mausx = (e.clientX - bounding.x) / canvas.offsetWidth;
    let mausy = ((e.clientY - bounding.y) / canvas.offsetHeight);
    let ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = canvas.dataset.color;
    ctx.fillRect(0, canvas.offsetHeight * mausy, canvas.offsetWidth, canvas.offsetHeight);
    let pos = mausy;
    canvas.dataset.count = 100 - Math.round(mausy * 100);
}

function ChangeZufriedenheitsfaktor(params) {

    let input = params.currentTarget;
    let inputid = input.id;
    $(`.${inputid}`).html(input.value);

    // debugger
}

function UpdateErfüllungBereich(params) {
    let input = params.currentTarget;
    let inputid = input.dataset.id;

    let slid = document.getElementById(inputid)
    let Beschreibung = slid.getElementsByClassName("Beschreibung")[0]
    Beschreibung.innerHTML = input.value;
    // debugger
}

// TODO Update Zufriedenheitzfaktoren bei neuen zeug
function addBereich(params) {
    let parentdiv = params.currentTarget.parentNode;
    let div = parentdiv.getElementsByTagName("div")[0];
    let newInput = document.createElement("input");

    let nameid = `${parentdiv.dataset.name}${div.childElementCount/2}`;

    newInput.type = "text";
    newInput.dataset.id = nameid;
    newInput.classList.add("ErfüllungBereich");
    newInput.classList.add("m-1");
    newInput.value=""
    div.appendChild(newInput);
    div.appendChild(document.createElement("br"));

    let slider = document.createElement("div");
    slider.className = "col d-flex justify-content-center flex-column sliderbox";
    slider.id = nameid;

    let slidercont =
        `<h2>${parentdiv.dataset.name}: <span class="Beschreibung"></span></h2><div class="container d-flex justify-content-around"><div class="m-2 ml-0"><canvas class="ZZZRegler" id="regler" width="50" height="200" data-count="0"data-color="#df0000"></canvas><h5 class="Zufriedenheitsfaktor1"></h5></div><div class="m-2"><canvas class="ZZZRegler" id="regler" width="50" height="200" data-count="0"data-color="#df0000"></canvas><h5 class="Zufriedenheitsfaktor2"></h5></div><div class="m-2 mr-0"><canvas class="ZZZRegler" id="regler" width="50" height="200" data-count="0"data-color="#df0000"></canvas><h5 class="Zufriedenheitsfaktor3"></h5></div></div>`;

    slider.innerHTML = slidercont;

    document.getElementById("sliderAllBox").appendChild(slider);

    UpdateEvents();

    // debugger
}


