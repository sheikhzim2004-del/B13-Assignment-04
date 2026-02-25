let interviewList = [];
let rejectedList = [];
let allCardList = [];

// filter btn gulake dhore fela 
const allFilterBtn = document.getElementById('all-filter-btn');
const interviewFilterBtn = document.getElementById('interview-filter-btn');
const rejectedFilterBtn = document.getElementById('rejected-filter-btn');


// filter btn gulake toggle er maddhome ak shathe kaj korano (2)
function toggleStyle(id) {
  allFilterBtn.classList.remove('btn-info');
  interviewFilterBtn.classList.remove('btn-info');
  rejectedFilterBtn.classList.remove('btn-info');

  const selected = document.getElementById(id);
  selected.classList.add('btn-info');

  //first hide all item
  totalAllCard.classList.add('hidden');
  filteredSection.classList.add('hidden');
  filteredSectionInterview.classList.add('hidden');


  if (id === 'interview-filter-btn') {
    filteredSectionInterview.classList.remove('hidden');
  } else if (id === 'all-filter-btn') {
    totalAllCard.classList.remove('hidden');
  } else if (id === 'rejected-filter-btn') {
    filteredSection.classList.remove('hidden');
  }
}

const totalCount = document.getElementById('total-count');
const interviewCount = document.getElementById('interview-count');
const rejectedCount = document.getElementById('rejected-count');
const totalAllCard = document.getElementById('card-container');
const parentNode = document.getElementById('parent-node');
const filteredSection = document.getElementById('filtered-section');
const filteredSectionInterview = document.getElementById('filtered-section-2');
const allCard = document.querySelectorAll('#card-container .card-item');



//calculate count
function calculateCount() {
  totalCount.innerText = totalAllCard.children.length;
  interviewCount.innerText = interviewList.length;
  rejectedCount.innerText = rejectedList.length;
}



//main section kea dhore tar upore even apply kora (3)
parentNode.addEventListener('click', (event) => {



  //delet buttun condition
  if(event.target.closest('.dlt-btn')){
    let parentNode = event.target.closest('.card-item');
    let companyName = parentNode.querySelector('.company-name').innerText;

    allCardList = allCardList.filter(item => item.companyName !== companyName);
    interviewList = interviewList.filter(item => item.companyName !== companyName);
    rejectedList = rejectedList.filter(item => item.companyName !== companyName);


    parentNode.remove();
    calculateCount();
    renderInterview();
    renderRejected();

    if(allCardList.length === 0){
    showEmptyCard(totalAllCard);
  }
  }

    // console.log(event.target.closest('.dlt-btn'))



  //interview btn e event
  if (event.target.classList.contains('interview-btn')) {
    let parentNode = event.target.closest('.card-item');
    // console.log(parentNode);


    //all content er innertext ber kora (5)
    let companyName = parentNode.querySelector('.company-name').innerText;
    let position = parentNode.querySelector('.position').innerText;
    let salary = parentNode.querySelector('.salary').innerText;
    let condition = parentNode.querySelector('.condition').innerText;
    let notes = parentNode.querySelector('.notes').innerText;

    let conditionElement = parentNode.querySelector('.condition');
    conditionElement.innerText = 'Interview';
    conditionElement.classList = 'condition text-success font-extrabold bg-green-100 py-3 px-2 inline-block';
    parentNode.classList.add('border-l-5', 'border-green-600');


    // card info gulake akshathe kore akta arry te rakha (6)
    const cardInfo = {
      companyName,
      position,
      salary,
      condition: conditionElement.innerText,
      notes
    }
    // console.log(cardInfo);

    //filter interview btn e rejectted
    rejectedList = rejectedList.filter(item => item.companyName != cardInfo.companyName);


    //find and compaire then push
    const companyExist = interviewList.find(item => item.companyName === cardInfo.companyName);
    if (!companyExist) {
      interviewList.push(cardInfo);
    }

    // console.log(interviewList);
    renderInterview()
    renderRejected()
    calculateCount()
  }
  //rejected btn e event
  else if (event.target.classList.contains('rejected-btn')) {
    const parentNode = event.target.closest('.card-item');
    // console.log(parentNode);


    //all content er innertext ber kora (5)
    const companyName = parentNode.querySelector('.company-name').innerText;
    const position = parentNode.querySelector('.position').innerText;
    const salary = parentNode.querySelector('.salary').innerText;
    const condition = parentNode.querySelector('.condition').innerText;
    const notes = parentNode.querySelector('.notes').innerText;

    const conditionElement = parentNode.querySelector('.condition');
    conditionElement.innerText = 'Rejected';
    conditionElement.classList = 'condition text-error font-extrabold bg-red-100 py-3 px-2 inline-block';
    parentNode.classList.add('border-l-5', 'border-red-600');


    // card info gulake akshathe kore akta arry te rakha (6)
    const cardInfo = {
      companyName,
      position,
      salary,
      condition: conditionElement.innerText,
      notes
    }
    // console.log(cardInfo);

    //filter rejected btn e interview
    interviewList = interviewList.filter(item => item.companyName != cardInfo.companyName);


    const companyExist = rejectedList.find(item => item.companyName === cardInfo.companyName);

    if (!companyExist) {
      rejectedList.push(cardInfo);
    }


    // console.log(interviewList);
    renderRejected()
    renderInterview()
    calculateCount()
  }
});
calculateCount()


// render interview btn
function renderInterview() {

  filteredSectionInterview.innerHTML = '';

  if(interviewList.length === 0){
    showEmptyCard(filteredSectionInterview);
    return;
  }

  for (let i of interviewList) {

    let newDiv = document.createElement('div');
    newDiv.classList = 'card-item flex justify-between items-start shadow-sm mb-[24px]';
    newDiv.innerHTML = `
        <div class="p-6 space-y-4 w-full">
                    <h1 class="company-name font-bold text-2xl">${i.companyName}</h1>
                    <p class="position text-black/50">${i.position}</p>
                    <p class="salary text-black/50">${i.salary}</p>
                    <p class="condition text-success font-extrabold bg-green-100 py-3 px-2 inline-block">${i.condition}</p>

                    <p class="notes text-black/50">${i.notes}</p>
                    <div class="btn-box flex gap-5">
                        <button  class="interview-btn btn btn-success btn-outline">Interview</button>
                        <button class="rejected-btn btn btn-secondary btn-outline">Rejected</button>
                    </div>
                </div>
                <div class="card-right m-5 border-1 rounded-full p-2 cursor-pointer">
                    <button class="dlt-btn"><i class="fa-solid fa-trash-can"></i></button>
                </div>
        `
    filteredSectionInterview.appendChild(newDiv);

  }

}
// render rejected btn
function renderRejected() {
  filteredSection.innerHTML = '';

  if(rejectedList.length === 0){
    showEmptyCard(filteredSection);
    return;
  }

  for (let i of rejectedList) {

    let newDiv = document.createElement('div');
    newDiv.classList = 'card-item flex justify-between items-start shadow-sm';
    newDiv.innerHTML = `
        <div class="p-6 space-y-4 w-full">
                    <h1 class="company-name font-bold text-2xl">${i.companyName}</h1>
                    <p class="position text-black/50">${i.position}</p>
                    <p class="salary text-black/50">${i.salary}</p>
                    <p class="condition text-error font-extrabold bg-red-100 py-3 px-2 inline-block">${i.condition}</p>

                    <p class="notes text-black/50">${i.notes}</p>
                    <div class="btn-box flex gap-5">
                        <button  class="interview-btn btn btn-success btn-outline">Interview</button>
                        <button class="rejected-btn btn btn-secondary btn-outline">Rejected</button>
                    </div>
                </div>
                <div class="card-right m-5 border-1 rounded-full p-2 cursor-pointer">
                    <button class="dlt-btn"><i class="fa-solid fa-trash-can"></i></button>
                </div>
        `
    filteredSection.appendChild(newDiv);

  }

}


//all filter btn even litchenar
allFilterBtn.addEventListener('click', function () {
  toggleStyle('all-filter-btn');
  filteredSection.innerHTML = '';
});
interviewFilterBtn.addEventListener('click', function () {
  toggleStyle('interview-filter-btn');
  renderInterview();
});
rejectedFilterBtn.addEventListener('click', function () {
  toggleStyle('rejected-filter-btn');
  renderRejected();
});



// show not available job 
function showEmptyCard(section) {

    section.innerHTML = "";

    let div = document.createElement("div");
    div.className = "card flex justify-between p-5 shadow bg-white rounded-xs mx-auto";
    div.innerHTML = `
           <div class="flex justify-center items-center mx-auto py-17">
            <div>
                <img class="mx-auto mb-3" src="./jobs.png" alt="">
                <h5 class="font-semibold text-2xl text-center">No jobs available</h5>
                <p class="font-medium opacity-45 text-center">Check back soon for new job opportunities</p>
            </div>
        </div>
    `;
    section.appendChild(div);
}



//all card loop and save a arr
document.addEventListener('DOMContentLoaded', function() {
  for(let card of allCard){
    let companyName = card.querySelector('.company-name').innerText;
    let position = card.querySelector('.position').innerText;
    let salary = card.querySelector('.salary').innerText;
    let condition = card.querySelector('.condition').innerText;
    let notes = card.querySelector('.notes').innerText;

    let cardArr = {
      companyName,
      position,
      salary,
      condition,
      notes
    }
    allCardList.push(cardArr);
  }
  calculateCount();
})
