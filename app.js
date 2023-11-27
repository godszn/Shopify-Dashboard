document.addEventListener('DOMContentLoaded' , function () {

   let buttons = [
      document.getElementById('details-btn-wrapper'),
      document.getElementById('details-btn-wrapper1'),
      document.getElementById('details-btn-wrapper2'),
      document.getElementById('details-btn-wrapper3'),
      document.getElementById('details-btn-wrapper4')
  ];

  let detailsArray = [
      document.getElementById('detailz'),
      document.getElementById('detailz1'),
      document.getElementById('detailz2'),
      document.getElementById('detailz3'),
      document.getElementById('detailz4')
  ];

  let secContainers = [
      document.querySelector('.sec-container'),
      document.getElementById('sec-container1'),
      document.getElementById('sec-container2'),
      document.getElementById('sec-container3'),
      document.getElementById('sec-container4')
  ];

   let detail_btn = document.querySelector('.details-btn')
   let setup = document.getElementById('setup-dropdown') 
   let setupSvg = document.querySelector('.setup-svg')
   let setupDetails = document.querySelector('.setup-details-wrapper')

   setup.addEventListener('click' , function () {
         setupDetails.classList.toggle('nick')
         setupSvg.classList.toggle('rotate')
   })

   let activeIndex = null;

   const functionToggle = (index) => {
      if (index === activeIndex) {
         //Be useless as Adam Eve
         return; 
      }
     for (let i = 0; i < detailsArray.length; i++) {
      if (i === index) {
         detailsArray[i].classList.toggle('delay');
         secContainers[i].classList.toggle('background')
      }
      else {
         detailsArray[i].classList.remove('delay');
         secContainers[i].classList.remove('background')
      }  
      activeIndex = index
     }
   }

   buttons.forEach((button , index) => {
      button.addEventListener('click', function () {
        functionToggle(index);
      })

  const cancel = document.querySelector('.cancel1');
  const cancel1 = document.querySelector('.cancel');
  const trial = document.querySelector('.trial-container');
  const setWrap = document.querySelector('.setup-wrapper');

  cancel.addEventListener('click' , function () {
    trial.classList.toggle('play')
    setWrap.style.paddingTop = '2rem'
  })

  cancel1.addEventListener('click' , function () {
    trial.style.display = 'none'
    setWrap.style.paddingTop = '2rem'
  })
 });

 let isOpen = false;

 const emblem = document.querySelector('.emblem');
 const dropdown = document.querySelector('.navDropdown-wrapper');
 const alert = document.querySelector('.notifDropdown');
 const alertBtn = document.querySelector('.notif-widget');
 const body = document.querySelector('.dashboard-container')

 alertBtn.addEventListener('click' , function () {
   alert.classList.toggle('show')
 })

emblem.addEventListener('click' , function () {
  isOpen = !isOpen
  console.log(isOpen);
  dropdown.classList.toggle('display')
})

body.addEventListener('click' , function () {
  if (isOpen === true) {
    console.log(isOpen);
    dropdown.classList.toggle('display')
  }
})

 })


const details_btn = document.getElementById('svg');

let clickCount = 0;
let clickCount5 = 0;
details_btn.addEventListener('click', function () {
  if (clickCount === 0) {
    this.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 28 28" fill="none"><path  d="M26 14C26 16.3734 25.2962 18.6935 23.9776 20.6668C22.6591 22.6402 20.7849 24.1783 18.5922 25.0866C16.3995 25.9948 13.9867 26.2324 11.6589 25.7694C9.33114 25.3064 7.19295 24.1635 5.51472 22.4853C3.83649 20.8071 2.6936 18.6689 2.23058 16.3411C1.76755 14.0133 2.00519 11.6005 2.91345 9.4078C3.8217 7.21509 5.35977 5.34094 7.33316 4.02236C9.30655 2.70379 11.6266 2 14 2"stroke="black"stroke-width="2.5"stroke-linecap="round"stroke-linejoin="round"/></svg>';
    setTimeout(() => {
      this.innerHTML = '<svg width="40" height="40" viewBox="0 0 30 30" fill="ffff" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10" fill="#303030"></circle><path d="M17.2738 8.52629C17.6643 8.91682 17.6643 9.54998 17.2738 9.94051L11.4405 15.7738C11.05 16.1644 10.4168 16.1644 10.0263 15.7738L7.3596 13.1072C6.96908 12.7166 6.96908 12.0835 7.3596 11.693C7.75013 11.3024 8.38329 11.3024 8.77382 11.693L10.7334 13.6525L15.8596 8.52629C16.2501 8.13577 16.8833 8.13577 17.2738 8.52629Z" fill="#ffff"></path></svg>';
    }, 200);
  } else {
    setTimeout(() => {
      this.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 35 35" fill="none"><circle cx="16" cy="16" r="12" stroke="#fff" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="4 6" /></svg>';
    }, 200);
  }

  clickCount = (clickCount + 1) % 2;
  updateProgressBar() 
});

const details_btn1 = document.getElementById('svg1');

let clickCount1 = 0;

details_btn1.addEventListener('click', function () {
  if (clickCount1 === 0) {
    this.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 28 28" fill="none"><path  d="M26 14C26 16.3734 25.2962 18.6935 23.9776 20.6668C22.6591 22.6402 20.7849 24.1783 18.5922 25.0866C16.3995 25.9948 13.9867 26.2324 11.6589 25.7694C9.33114 25.3064 7.19295 24.1635 5.51472 22.4853C3.83649 20.8071 2.6936 18.6689 2.23058 16.3411C1.76755 14.0133 2.00519 11.6005 2.91345 9.4078C3.8217 7.21509 5.35977 5.34094 7.33316 4.02236C9.30655 2.70379 11.6266 2 14 2"stroke="black"stroke-width="2.5"stroke-linecap="round"stroke-linejoin="round"/></svg>';
    setTimeout(() => {
      this.innerHTML = '<svg width="40" height="40" viewBox="0 0 30 30" fill="ffff" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10" fill="#303030"></circle><path d="M17.2738 8.52629C17.6643 8.91682 17.6643 9.54998 17.2738 9.94051L11.4405 15.7738C11.05 16.1644 10.4168 16.1644 10.0263 15.7738L7.3596 13.1072C6.96908 12.7166 6.96908 12.0835 7.3596 11.693C7.75013 11.3024 8.38329 11.3024 8.77382 11.693L10.7334 13.6525L15.8596 8.52629C16.2501 8.13577 16.8833 8.13577 17.2738 8.52629Z" fill="#ffff"></path></svg>';
    }, 200);
  } else {
    setTimeout(() => {
      this.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 35 35" fill="none"><circle cx="16" cy="16" r="12" stroke="#fff" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="4 6" /></svg>';
    }, 200);
  }

  clickCount1 = (clickCount1 + 1) % 2;
});

const details_btn2 = document.getElementById('svg2');

let clickCount2 = 0;

details_btn2.addEventListener('click', function () {
  if (clickCount2 === 0) {
    this.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 28 28" fill="none"><path  d="M26 14C26 16.3734 25.2962 18.6935 23.9776 20.6668C22.6591 22.6402 20.7849 24.1783 18.5922 25.0866C16.3995 25.9948 13.9867 26.2324 11.6589 25.7694C9.33114 25.3064 7.19295 24.1635 5.51472 22.4853C3.83649 20.8071 2.6936 18.6689 2.23058 16.3411C1.76755 14.0133 2.00519 11.6005 2.91345 9.4078C3.8217 7.21509 5.35977 5.34094 7.33316 4.02236C9.30655 2.70379 11.6266 2 14 2"stroke="black"stroke-width="2.5"stroke-linecap="round"stroke-linejoin="round"/></svg>';
    setTimeout(() => {
      this.innerHTML = '<svg width="40" height="40" viewBox="0 0 30 30" fill="ffff" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10" fill="#303030"></circle><path d="M17.2738 8.52629C17.6643 8.91682 17.6643 9.54998 17.2738 9.94051L11.4405 15.7738C11.05 16.1644 10.4168 16.1644 10.0263 15.7738L7.3596 13.1072C6.96908 12.7166 6.96908 12.0835 7.3596 11.693C7.75013 11.3024 8.38329 11.3024 8.77382 11.693L10.7334 13.6525L15.8596 8.52629C16.2501 8.13577 16.8833 8.13577 17.2738 8.52629Z" fill="#ffff"></path></svg>';
    }, 200);
  } else {
    setTimeout(() => {
      this.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 35 35" fill="none"><circle cx="16" cy="16" r="12" stroke="#fff" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="4 6" /></svg>';
    }, 200);
  }

  clickCount2 = (clickCount2 + 1) % 2;
});

const details_btn3 = document.getElementById('svg3');

let clickCount3 = 0;

details_btn3.addEventListener('click', function () {
  if (clickCount3 === 0) {
    this.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 28 28" fill="none"><path  d="M26 14C26 16.3734 25.2962 18.6935 23.9776 20.6668C22.6591 22.6402 20.7849 24.1783 18.5922 25.0866C16.3995 25.9948 13.9867 26.2324 11.6589 25.7694C9.33114 25.3064 7.19295 24.1635 5.51472 22.4853C3.83649 20.8071 2.6936 18.6689 2.23058 16.3411C1.76755 14.0133 2.00519 11.6005 2.91345 9.4078C3.8217 7.21509 5.35977 5.34094 7.33316 4.02236C9.30655 2.70379 11.6266 2 14 2"stroke="black"stroke-width="2.5"stroke-linecap="round"stroke-linejoin="round"/></svg>';
    setTimeout(() => {
      this.innerHTML = '<svg width="40" height="40" viewBox="0 0 30 30" fill="ffff" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10" fill="#303030"></circle><path d="M17.2738 8.52629C17.6643 8.91682 17.6643 9.54998 17.2738 9.94051L11.4405 15.7738C11.05 16.1644 10.4168 16.1644 10.0263 15.7738L7.3596 13.1072C6.96908 12.7166 6.96908 12.0835 7.3596 11.693C7.75013 11.3024 8.38329 11.3024 8.77382 11.693L10.7334 13.6525L15.8596 8.52629C16.2501 8.13577 16.8833 8.13577 17.2738 8.52629Z" fill="#ffff"></path></svg>';
    }, 200);
  } else {
    setTimeout(() => {
      this.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 35 35" fill="none"><circle cx="16" cy="16" r="12" stroke="#fff" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="4 6" /></svg>';
    }, 200);
  }

  clickCount3 = (clickCount3 + 1) % 2;
});

const details_btn4 = document.getElementById('svg4');

let clickCount4 = 0;

details_btn4.addEventListener('click', function () {
  if (clickCount4 === 0) {
    this.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 28 28" fill="none"><path  d="M26 14C26 16.3734 25.2962 18.6935 23.9776 20.6668C22.6591 22.6402 20.7849 24.1783 18.5922 25.0866C16.3995 25.9948 13.9867 26.2324 11.6589 25.7694C9.33114 25.3064 7.19295 24.1635 5.51472 22.4853C3.83649 20.8071 2.6936 18.6689 2.23058 16.3411C1.76755 14.0133 2.00519 11.6005 2.91345 9.4078C3.8217 7.21509 5.35977 5.34094 7.33316 4.02236C9.30655 2.70379 11.6266 2 14 2"stroke="black"stroke-width="2.5"stroke-linecap="round"stroke-linejoin="round"/></svg>';
    setTimeout(() => {
      this.innerHTML = '<svg width="40" height="40" viewBox="0 0 30 30" fill="ffff" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10" fill="#303030"></circle><path d="M17.2738 8.52629C17.6643 8.91682 17.6643 9.54998 17.2738 9.94051L11.4405 15.7738C11.05 16.1644 10.4168 16.1644 10.0263 15.7738L7.3596 13.1072C6.96908 12.7166 6.96908 12.0835 7.3596 11.693C7.75013 11.3024 8.38329 11.3024 8.77382 11.693L10.7334 13.6525L15.8596 8.52629C16.2501 8.13577 16.8833 8.13577 17.2738 8.52629Z" fill="#ffff"></path></svg>';
    }, 200);
  } else {
    setTimeout(() => {
      this.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 35 35" fill="none"><circle cx="16" cy="16" r="12" stroke="#fff" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="4 6" /></svg>';
    }, 200);
  }

  clickCount4 = (clickCount4 + 1) % 2;
});

const progressBar = document.querySelector('.progress');

  function updateProgressBar() {
    const maxClicks = 5;

    if (clickCount5 < maxClicks) {
      const progressPercentage = (clickCount5 / maxClicks) * 100;
      progressBar.style.width = `${20}%`;

      if (clickCount5 === maxClicks - 1) {
        alert('Progress is full!');
      } else {
        for (let i = maxClicks - 1; i >= 0; i--) {
          setTimeout(() => {
            const progressPercentage = (i / maxClicks) * 100;
            progressBar.style.width = `${25}%`;
          }, (maxClicks - i - 1) * 200);
        }
      }
      
    }

    clickCount = (clickCount5 + 1) % (maxClicks + 1);
  }
