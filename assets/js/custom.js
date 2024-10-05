
    
let showElement = document.getElementById('showSection');
let sectionElement = document.getElementById('flowerSection');
let closeElement = document.getElementById('closeSection');

showElement.addEventListener('click', function () {
  sectionElement.classList.remove('hidden');
  // sectionElement.classList.add('fade-in');

})


closeElement.addEventListener('click', function () {
  sectionElement.classList.add('hidden');
});



// $(document).ready(function () {
//   $('#showSection').click(function() {
//       $('#flowerSection').removeClass('hidden').addClass('fade-in');
//     });

//     // Button to close the flower section
//     $('#closeSection').click(function() {
//       $('#flowerSection').addClass('hidden');
//     });
// })

 
