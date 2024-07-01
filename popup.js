function techdebtMeasurement() {
    let tabs_indexes = ['1', '2', '3', '4', '5', '6'];
    tabs_indexes.forEach((id) => {
        let innovation = +document.querySelector('input[name="innovation"][panel_index="'+id+'"]:checked').value;
        let risk = +document.querySelector('input[name="risk"][panel_index="'+id+'"]:checked').value;
        let level = +document.querySelector('input[name="level"][panel_index="'+id+'"]:checked').value;
        document.getElementById("total-" + id).innerHTML = Math.round(((innovation + risk) / level) * 10)
    })
}

const techdebt_total = document.querySelectorAll('[data-action="measurement"]');
techdebt_total.forEach((element) => {
    element.addEventListener('change', window.techdebtMeasurement)
});

function bugMeasurement() {
    let mass = +document.querySelector('input[name="mass"][panel_index="0"]:checked').value;
    let block = +document.querySelector('input[name="block"][panel_index="0"]:checked').value;
    let critical = +document.querySelector('input[name="critical"][panel_index="0"]:checked').value;
    document.getElementById("total-0").innerHTML = mass * block * critical
}

const bug_total = document.querySelectorAll('[data-action="bug_weight"]');
bug_total.forEach((element) => {
    element.addEventListener('change', window.bugMeasurement)
});

// Not in use yet
// function copyToClipboard() {
//   let area = document.createElement('textarea');
//
//   document.body.appendChild(area);
//     area.value = document.getElementById("total").textContent;
//     area.select();
//     document.execCommand("copy");
//   document.body.removeChild(area);
// }
//
// const copyElement = document.querySelectorAll('[data-action="copyElement"]');
// copyElement.forEach((element) => {
//     element.addEventListener('click', window.copyToClipboard)
// });
