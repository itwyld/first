/* ======= theory


// const array = [1, 2, 3, 5, 20, 42];
// // const arrayString = ["a", "b", "c"];
// // const array = new Array(1,2,3,4,5,6,7)

// // console.log(array.length)
// console.log(array[1]);
// console.log(array[array.length - 1]);

// array[0] = "Privet!";
// console.log(array);
// array[array.length] = "becon";*/

// ========= application
const inputElement = document.getElementById("title");
const createBtn = document.getElementById("create");
const listElement = document.getElementById("list");
const notes = ['записать блок о массивах', 'рассказать теорию объектов']
// console.log(inputElement.value)

function render () {
  listElement.insertAdjacentHTML(
    "beforeend",
    `<li
            class="list-group-item d-flex justify-content-between align-items-center"
            >
            <span>${inputElement.value}</span>
            <span>
                <span class="btn btn-small btn-success">&check;</span>
                <span class="btn btn-small btn-danger">&times;</span>
            </span>
            </li>
        `)
}

createBtn.onclick = function () {
  // listElement.innerHTML = `
  //     <li
  //         class="list-group-item d-flex justify-content-between align-items-center"
  //         >
  //         <span>${inputElement.value}</span>
  //         <span>
  //             <span class="btn btn-small btn-success">&check;</span>
  //             <span class="btn btn-small btn-danger">&times;</span>
  //         </span>
  //         </li>
  //     `

  if (inputElement.value.length === 0) {
    return;
  }
  listElement.insertAdjacentHTML(
    "beforeend",
    `<li
            class="list-group-item d-flex justify-content-between align-items-center"
            >
            <span>${inputElement.value}</span>
            <span>
                <span class="btn btn-small btn-success">&check;</span>
                <span class="btn btn-small btn-danger">&times;</span>
            </span>
            </li>
        `
  );
  inputElement.value = "";
};
