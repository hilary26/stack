let j = 4;

const onService = document.getElementById("myBtn").addEventListener("click",  function() {
    // alert('This button says popup');

    if (j !== 0) {
    alert('is not zero');
    } else {
      alert('it is zero');
    }
});

const images = document.getElementsByClassName('image1');
images.src = './Images/Beach 3.jfif';