//! Same question asked in the wealthOs SE Interview

function gradingStudents(grades) {
  // Write your code here

  // grade<40 = fail
  // difference = grade  to next mul of 5  is < 3 then round grade to next mul of 5
  // grade < 38 = no grading

  let roundedGrades = [];

  grades.forEach((g) => {
    let difference = 5 - (g % 5);
    if (g < 38) {
      roundedGrades.push(g);
    } else if (difference < 3) {
      g += difference;
      roundedGrades.push(g);
    } else {
      roundedGrades.push(g);
    }
  });

  return roundedGrades;
}
