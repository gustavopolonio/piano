
const $allKeys = document.querySelectorAll(".key")
$allKeys.forEach(key => 
  key.addEventListener("click", (event) => {
    const notePressed = event.target.dataset.musicNote
    const audio = new Audio(`./piano-keys/${notePressed}.wav`)
    audio.play()
  })
)


const keyboardNotes = {
  "q": "C1",
  "w": "D1",
  "e": "E1",
  "r": "F1",
  "t": "G1",
  "y": "A1",
  "u": "B1",
  "z": "C2",
  "x": "D2",
  "c": "E2",
  "v": "F2",
  "b": "G2",
  "n": "A2",
  "m": "B2",
  "2": "C1s",
  "3": "D1s",
  "5": "F1s",
  "6": "G1s",
  "7": "A1s",
  "s": "C2s",
  "d": "D2s",
  "g": "F2s",
  "h": "G2s",
  "j": "A2s",
}
document.addEventListener("keydown", (event) => {
  if (event.repeat) return  

  const notePressed = keyboardNotes[event.key.toLowerCase()]

  if (notePressed) {
    // Mudar cor background
    const $noteElement = document.querySelector(`[data-music-note="${notePressed}"]`)
    $noteElement.classList.add("clicked")

    // Tocar audio
    const audio = new Audio(`./piano-keys/${notePressed}.wav`)
    audio.play()
  }
});

document.addEventListener("keyup", (event) => {
  const notePressed = keyboardNotes[event.key.toLowerCase()]
  if (notePressed) {
    const $noteElement = document.querySelector(`[data-music-note="${notePressed}"]`)
    $noteElement.classList.remove("clicked")
  }
})


const $toggleButton = document.querySelector(".toggle-button")
$toggleButton.addEventListener("click", () => {
  $allKeys.forEach(key => 
    key.classList.toggle("hide-text") 
  )
})