
      function changeBgColor() {
        const section = document.querySelector(".portfolio-section");
        section.style.backgroundColor = `hsl(${Math.floor(
          Math.random() * 360
        )}, 60%, 90%)`;
      }

      function handleSubmit(event) {
        event.preventDefault();
        alert("Your message has been sent! Thank you for reaching out.");
        return false;
      }
  