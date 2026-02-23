let interviewList = [];
let rejectedList = [];

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


  if (id === 'interview-filter-btn') {
    cardContainer.classList.add('hidden');
    filteredSection.classList.remove('hidden');
  } else if (id === 'all-filter-btn') {
    cardContainer.classList.remove('hidden');
    filteredSection.classList.add('hidden');
  } else if (id === 'rejected-filter-btn') {
    cardContainer.classList.add('hidden');
    filteredSection.classList.remove('hidden');
  }
}

const totalCount = document.getElementById('total-count');
const interviewCount = document.getElementById('interview-count');
const rejectedCount = document.getElementById('rejected-count');
const cardContainer = document.getElementById('card-container');
const parentNode = document.getElementById('parent-node');
const filteredSection = document.getElementById('filtered-section');

//calculate count
function calculateCount() {
  totalCount.innerText = cardContainer.children.length;
  interviewCount.innerText = interviewList.length;
  rejectedCount.innerText = rejectedList.length;
}



//main section kea dhore tar upore even apply kora (3)
parentNode.addEventListener('click', (event) => {

  //interview btn e event
  if (event.target.classList.contains('interview-btn')) {
    const parentNode = event.target.closest('.card-item');
    // console.log(parentNode);


    //all content er innertext ber kora (5)
    const companyName = parentNode.querySelector('.company-name').innerText;
    const position = parentNode.querySelector('.position').innerText;
    const salary = parentNode.querySelector('.salary').innerText;
    const condition = parentNode.querySelector('.condition').innerText;
    const notes = parentNode.querySelector('.notes').innerText;

    const conditionElement = parentNode.querySelector('.condition');
    conditionElement.innerText = 'Interview';
    conditionElement.classList = 'text-success font-extrabold bg-green-100 py-3 px-2 inline-block';


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
    conditionElement.classList = 'text-error font-extrabold bg-red-100 py-3 px-2 inline-block';


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
    calculateCount()
  }
});
calculateCount()


// render interview btn
function renderInterview() {
  filteredSection.innerHTML = '';

  for (let i of interviewList) {
    console.log(i)
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
                    <i class="fa-solid fa-trash-can"></i>
                </div>
        `
    filteredSection.appendChild(newDiv);

  }

}
// render rejected btn
function renderRejected() {
  filteredSection.innerHTML = '';

  for (let i of rejectedList) {
    console.log(i)
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
                    <i class="fa-solid fa-trash-can"></i>
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
