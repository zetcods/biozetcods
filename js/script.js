// Adding interactivity
document.querySelectorAll(".social-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      alert("Redirecting to social media...");
    });
  });
  
document.querySelectorAll(".gamein-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      alert("Redirecting to GameIn...");
    });
  });
  
  document.addEventListener('contextmenu', (e)=>{
    if(e.target.nodeName === 'IMG'){
      e.preventDefault();
    }
  })

  const lines = [
    "I am a Front End Developer with 2+ years experience in building responsive web applications.",
    "Skilled in HTML, CSS, JavaScript, and modern frameworks.",
    "I also specialize in creating interactive games and automation bots."
  ];
  
  function typeLine(text, elementId, callback) {
    let index = 0;
  
    function typeCharacter() {
      if (index < text.length) {
        document.getElementById(elementId).textContent += text[index];
        index++;
        setTimeout(typeCharacter, 50); // Speed of typing (50ms per character)
      } else if (callback) {
        setTimeout(callback, 500); // Delay before typing the next line
      }
    }
  
    typeCharacter();
  }
  
  // Start typing lines sequentially
  typeLine(lines[0], "line1", () => {
    typeLine(lines[1], "line2", () => {
      typeLine(lines[2], "line3");
    });
  });

  const audioElement = document.getElementById('myAudio');

        // Pastikan audio diputar otomatis
        document.addEventListener('DOMContentLoaded', () => {
            audioElement.play().catch(error => {
                console.error("Autoplay dicegah oleh browser: ", error);
            });
        });
  