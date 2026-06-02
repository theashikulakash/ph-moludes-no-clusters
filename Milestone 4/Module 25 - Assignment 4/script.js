// select elements

const interviewBtns = document.querySelectorAll('.inter-btn');
const rejectBtns = document.querySelectorAll('.reject-btn');
const deleteBtns = document.querySelectorAll('.delete-btn');

const interCountDisplay = document.getElementById('interview-count');
const rejectCountDisplay = document.getElementById('rejected-count');

let currentFilterValue = "All";

// update counters

const updateCounters = () => {
  const allStatusBtns = document.querySelectorAll('.not-applied');
  const allJobCards = document.querySelectorAll('.job-card');

  let interTotal = 0;
  let rejectTotal = 0;
  let liveCount = 0;

  // update counters

  allStatusBtns.forEach(btn => {
    const text = btn.innerText.trim();

    if (text === "INTERVIEW") {
      interTotal++;
    } else if (text === "REJECTED") {
      rejectTotal++;
    }
  });

  // update counters

  allJobCards.forEach(card => {
    const statusBadge = card.querySelector('.not-applied');
    const currentStatus = statusBadge.innerText.trim();

    if (currentFilterValue === "All" || currentStatus === currentFilterValue) {
      liveCount++;
    }
  });

  // update counters

  const totalCount = allJobCards.length;

  if (interCountDisplay) interCountDisplay.innerText = interTotal;
  if (rejectCountDisplay) rejectCountDisplay.innerText = rejectTotal;


  const dashboardTotal = document.getElementById('current-count');
  if (dashboardTotal) dashboardTotal.innerText = totalCount;

  const listTotalLabel = document.getElementById('total-count');
  if (listTotalLabel) {
    listTotalLabel.innerText = `${liveCount} jobs`;
  }


  // empty state

  const emptyState = document.getElementById('empty-state');
  if (emptyState) {
    if (liveCount === 0 && (currentFilterValue === "INTERVIEW" || currentFilterValue === "REJECTED")) {
      emptyState.classList.remove('hidden');
    } else {
      emptyState.classList.add('hidden');
    }
  }
};


// update counters

updateCounters();

const updateText = (event) => {
  const card = event.target.closest('.job-card');
  const targetBtn = card.querySelector('.not-applied');

  targetBtn.innerText = event.target.innerText;

  updateCounters();
};


// delete card

const deleteCard = (event) => {
  const card = event.target.closest('.job-card');
  if (card) {
    card.remove();
    updateCounters();
  }
};


// update text in card -> btn (not applied)

interviewBtns.forEach(btn => btn.addEventListener('click', updateText));
rejectBtns.forEach(btn => btn.addEventListener('click', updateText));
deleteBtns.forEach(btn => btn.addEventListener('click', deleteCard));



// stat tog filter

const filterBtns = document.querySelectorAll('.stat-tog');

filterBtns.forEach(btn => {
  btn.addEventListener('click', (event) => {
    currentFilterValue = event.target.getAttribute('data-filter');
    const allJobCards = document.querySelectorAll('.job-card');

    // stat tog  button style 
    filterBtns.forEach(b => {
      b.classList.remove('bg-blue-600');
      b.classList.add('bg-white');
    });
    event.target.classList.remove('bg-white');
    event.target.classList.add('bg-blue-600');


    // stat tog filter

    allJobCards.forEach(card => {
      const statusBadge = card.querySelector('.not-applied');
      const currentStatus = statusBadge.innerText.trim();

      if (currentFilterValue === "All") {
        card.style.display = "block";
      } else if (currentStatus === currentFilterValue) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });

    updateCounters();
  });
});