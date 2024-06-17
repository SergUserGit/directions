const myButton = document.querySelector(".start-button");
myButton.addEventListener("click", myFuncClick);

function myFuncClick() {
  let countOfYear = 10;

  let arrayPlanet = [];
  const dateSun = {
    planet: "sun",
    znZod: "Рак",
    degr: 13,
    hours: 57,
  };
  arrayPlanet.push(dateSun);

  for (let i = 0; i < arrayPlanet.length; i += 1) {
    const planet = arrayPlanet[i];
  }

  for (let i = 1; i <= countOfYear; i += 1) {
    console.log(i);
  }
}

function getNewDateArray(planet, znZod, degr, hours, countOfYear) {
  const countOfMonth = countOfYear * 12;
  for (let i = 1; i < countOfMonth; i += 1) {}
}

function getNewDate(planet, znZod, degr, hours) {
  let newDegr = 0;
  let newHours = 0;
  let newZnZod = "";
  const newSum = hours + 5;
  if (newSum <= 59) {
    newZnZod = znZod;
    newDegr = degr;
    newHours = newSum;
  } else {
    if (degr <= 28) {
      newZnZod = znZod;
      newDegr = degr + 1;
      newHours = newSum - 60;
    } else {
      newDegr = 0;
      newHours = newSum - 60;
      newZnZod = getNextZnak(znZod);
    }
  }
}

function getNextZnak(znZod) {
  if (znZod === "Овен") {
    return "Тілець";
  } else if (znZod === "Тілець") {
    return "Близнюки";
  } else if (znZod === "Близнюки") {
    return "Рак";
  } else if (znZod === "Рак") {
    return "Лев";
  } else if (znZod === "Лев") {
    return "Діва";
  } else if (znZod === "Діва") {
    return "Терези";
  } else if (znZod === "Терези") {
    return "Скорпіон";
  } else if (znZod === "Скорпіон") {
    return "Стрілець";
  } else if (znZod === "Стрілець") {
    return "Козеріг";
  } else if (znZod === "Козеріг") {
    return "Водолій";
  } else if (znZod === "Водолій") {
    return "Риби";
  } else if (znZod === "Риби") {
    return "Овен";
  }
}
