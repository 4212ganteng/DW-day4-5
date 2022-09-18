// let dom  = document.getElementById;
let tampung = [];

function getId(event) {
  event.preventDefault();

  let nama = document.getElementById("name").value;
  let desc = document.getElementById("desc").value;
  let startDate = document.getElementById("start-date").value;
  let endDate = document.getElementById("end-date").value;

  let node = document.getElementById("node").value;
  let react = document.getElementById("react").value;
  let vue = document.getElementById("vue").value;
  let laravel = document.getElementById("laravel").value;

  let cekA = document.getElementById("node").checked;
  let cekB = document.getElementById("react").checked;
  let cekC = document.getElementById("vue").checked;
  let cekD = document.getElementById("laravel").checked;

  cekbox(cekA, node);
  cekbox(cekB, react);
  cekbox(cekC, vue);
  cekbox(cekD, laravel);

  let image = document.getElementById("image").files;
  if (image.length != 0) {
    image = URL.createObjectURL(image[0]);
  } else {
    alert("please input image");
  }

  let data = {
    nama,
    startDate,
    endDate,
    desc,
    image,
    node: cekbox(cekA, node),
    react: cekbox(cekB, react),
    vue: cekbox(cekC, vue),
    laravel: cekbox(cekD, laravel),
    duration: durasi(startDate, endDate),
  };

  tampung.push(data);
  console.log(tampung);
  durasi(startDate, endDate);
  render();
}

function render() {
  document.getElementById("container").innerHTML = "";
  let data = "";
  for (let i = 0; i < tampung.length; i++) {
    data = tampung[i];

    document.getElementById("container").innerHTML += `
        <div class="card">
            <div class="wrapper-content">
                <img src="${data.image}" alt="" width="100%">
                <h3><a href="/detail.html">${data.nama}</a></h3>
                <span>Durasi : ${data.duration}</span>
                <div class="content">
                ${data.desc}
                </div>
                <div class="icon">
                    <i class="fa-brands fa-${data.node}"></i>
                    <i class="fa-brands fa-${data.react}"></i>
                    <i class="fa-brands fa-${data.vue}"></i>
                    <i class="fa-brands fa-${data.laravel}"></i>
                </div>

                <div class="buton2">
                    <button>edit</button>
                    <button>delete</button>
                </div>
            </div>    
        </div>
        `;
  }
}

function cekbox(a, b) {
  if (a) {
    return (a = b);
  } else {
    return (a = "");
  }
}

function durasi(start, end) {
  const startDate = new Date(start);
  const endDate = new Date(end);
  const time = endDate - startDate;

  const milisec = 1000;
  const secDay = 60 * 60 * 24;

  const day = Math.floor(time / (secDay * milisec));
  const week = Math.floor(time / (milisec * secDay) / 7);
  const month = Math.floor(day / 30);

  if (month > 0) {
    return `${month} Month`;
  } else if (week > 0) {
    return `${week} Week`;
  } else if (day > 0) {
    return `${day} Day`;
  }
}
