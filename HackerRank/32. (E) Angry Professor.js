function angryProfessor(k, a) {
  // Write your code here
  let studentsOnTime = 0;

  a.forEach((time) => {
    if (time <= 0) {
      studentsOnTime++;
    }
  });

  return studentsOnTime >= k ? "NO" : "YES";
}
