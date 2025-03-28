function marsExploration(s) {
  // Write your code here
  let changedLetters = 0;

  s.split("").forEach((letter, index) => {
    let position = index % 3;

    if (position === 0) {
      if (!(letter === "S")) {
        changedLetters++;
      }
    }

    if (position === 1) {
      if (!(letter === "O")) {
        changedLetters++;
      }
    }

    if (position === 2) {
      if (!(letter === "S")) {
        changedLetters++;
      }
    }
  });

  return changedLetters;
}
