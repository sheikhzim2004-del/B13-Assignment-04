// filter btn gulake dhore fela (1)
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
}


//main section kea dhore tar upore even apply kora (3)
const cardContainer = document.getElementById('card-container');

cardContainer.addEventListener('click', (event) => {

  //interview btn e event (4)
  if (event.target.classList.contains('interview-btn')) {
    const parentNode = event.target.parentNode.parentNode;
    // console.log(parentNode);
    

    //all content er innertext ber kora (5)
    const companyName = parentNode.querySelector('.company-name').innerText;
    const position = parentNode.querySelector('.position').innerText;
    const salary = parentNode.querySelector('.salary').innerText;
    const condition = parentNode.querySelector('.condition').innerText;
    const notes = parentNode.querySelector('.notes').innerText;

    // card info gulake akshathe kore akta arry te rakha (6)
    const cardInfo = {
      companyName,
      position,
      salary,
      condition,
      notes
    }
    // console.log(cardInfo);
  }
})
