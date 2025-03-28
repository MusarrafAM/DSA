// ! Very important Work on this again and again

function minimumNumber(n, password) {
  // Return the minimum number of characters to make the password strong
  // length = 6
  // least 1 digit
  // least 1 lower letter
  // least 1 upper letter
  // least 1 special charecter

  const numbers = "0123456789";
  const lower_case = "abcdefghijklmnopqrstuvwxyz";
  const upper_case = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const special_characters = "!@#$%^&*()-+";

  let minCharToAdd = 0;

  if (!password.split("").some((p) => numbers.includes(p))) {
    minCharToAdd++;
  }

  if (!password.split("").some((p) => lower_case.includes(p))) {
    minCharToAdd++;
  }

  if (!password.split("").some((p) => upper_case.includes(p))) {
    minCharToAdd++;
  }

  if (!password.split("").some((p) => special_characters.includes(p))) {
    minCharToAdd++;
  }

  if (n + minCharToAdd < 6) {
    let extra = 6 - (n + minCharToAdd);
    minCharToAdd += extra;
  }

  return minCharToAdd;
}
