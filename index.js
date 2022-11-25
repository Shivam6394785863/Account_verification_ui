let otp_boxes = document.querySelectorAll(".otp");
otp_boxes[0].focus();
const otp = "123456";
let bag = "";
otp_boxes.forEach((e, index) => {
  e.addEventListener("keydown", (event) => {
    if (index === otp_boxes.length - 1) {
      setTimeout(() => {
        otp_boxes.forEach((e) => {
          bag = bag + e.value;
        });
        if (bag == otp) {
          alert("otp verification successful");
        } else if (bag != otp) {
          alert("otp verification failed !");
        }
      }, 100);
    }

    if (event.key >= 0 && event.key <= 9) {
      e.classList.add("valid");
      var next = setTimeout(() => {
        otp_boxes[index + 1].focus();
      }, 50);
    } else if ((event.key = "Backspace")) {
      setTimeout(() => {
        otp_boxes[index - 1].focus();
        otp_boxes[index - 1].value = "";
      }, 100);
    }
  });
});
