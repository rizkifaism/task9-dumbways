// My Project
const btnProject = document.querySelector("#btn-project");

let datas = [];

btnProject.addEventListener("click", function (e) {
  const pronam = document.querySelector("#pronam").value;
  const startDate = document.querySelector("#stadat").value;
  const endDate = document.querySelector("#enddat").value;
  const desc = document.querySelector("#desc").value;
  let nodejs = document.querySelector("#nodejs");
  let reactjs = document.querySelector("#reactjs");
  let nextjs = document.querySelector("#nextjs");
  let ts = document.querySelector("#typescript");
  let image = document.querySelector("#input-image").files;

  if (pronam == "") {
    return alert("Project Name cannot be empty");
  } else if (stadat == "") {
    return alert("Start Date cannot be empty");
  } else if (enddat == "") {
    return alert("End Date cannot be empty");
  } else if (!nodejs.checked && !reactjs.checked && !nextjs.checked && !ts.checked) {
    return alert("Technologies cannot be empty");
  } else if (desc == "") {
    return alert("Description cannot be empty");
  } else if (image == "") {
    return alert("Upload Image cannot be empty");
  }

  image = URL.createObjectURL(image[0]);

  let data = {
    pronam,
    startDate,
    endDate,
    desc,
    nodejs: nodejs.checked == true ? true : false,
    reactjs: reactjs.checked == true ? true : false,
    nextjs: nextjs.checked == true ? true : false,
    ts: ts.checked == true ? true : false,
    image,
  };

  datas.push(data);
  console.log(datas);
  showData();
  e.preventDefault();
});

const showData = () => {
  document.querySelector(".wrap-project").innerHTML = "";
  for (let i = 0; i < datas.length; i++) {
    document.querySelector(".wrap-project").innerHTML += `<div class="card-project">
    <a href="" target="_blank">
      <img src="${datas[i].image}" alt="" class="card-avatar" />
    </a>
    <h3>${datas[i].pronam}</h3>
    <p class="duration">durasi: ${getDuration(datas[i].startDate, datas[i].endDate)}</p>
    <p>${datas[i].desc}</p>
    <div class="tech-logo">
      ${datas[i].nodejs ? '<img src="assets/image/nodejs.png" alt="" />' : ""}
      ${datas[i].reactjs ? '<img src="assets/image/reactjs.png" alt="" />' : ""}
      ${datas[i].nextjs ? '<img src="assets/image/nextjs.png" alt="" />' : ""}
      ${datas[i].ts ? '<img src="assets/image/ts.png" alt="" />' : ""}
    </div>
    <div class="btn-card">
      <a href="#">edit</a>
      <a href="#">delete</a>
    </div>
  </div>`;
  }
};

const getDuration = (start, end) => {
  const miliSecond = 1000;
  const dateStart = new Date(start);
  const dateEnd = new Date(end);

  const distance = dateEnd - dateStart;
  const monthDistance = Math.floor(distance / (30 * 24 * 60 * 60 * miliSecond));
  if (monthDistance > 0) {
    return monthDistance + " bulan";
  } else {
    const weekDistance = Math.floor(distance / (7 * 24 * 60 * 60 * miliSecond));
    if (weekDistance > 0) {
      return weekDistance + " minggu";
    } else {
      const dayDistance = Math.floor(distance / (24 * 60 * 60 * miliSecond));
      if (dayDistance > 0) {
        return dayDistance + " hari";
      }
    }
  }
};
