const myButton = document.querySelector(".start-button");
myButton.addEventListener("click", myFuncClick);

function myFuncClick() {
  let countOfYear = 38;

  let arrayPlanet = [];
  const dateSun = {
    planet: "Сонце",
    znZod: "Рак",
    degr: 13,
    hours: 57,
  };
  changeElArOne(dateSun);
  arrayPlanet.push(dateSun);

  const dateMon = {
    planet: "Місяць",
    znZod: "Рак",
    degr: 4,
    hours: 9,
  };
  changeElArOne(dateMon);
  arrayPlanet.push(dateMon);

  const dateVen = {
    planet: "Венера",
    znZod: "Лев",
    degr: 23,
    hours: 52,
  };
  changeElArOne(dateVen);
  arrayPlanet.push(dateVen);

  let arrayTotal = [];

  for (a = 0; a < arrayPlanet.length; a += 1) {
    const curElem = arrayPlanet[a];
    const curArrayObj = getNewDateArray(
      curElem.planet,
      curElem.znZod,
      curElem.degr,
      curElem.hours,
      countOfYear
    );

    for (b = 0; b < curArrayObj.length; b += 1) {
      const curElem = curArrayObj[b];
      arrayTotal.push(curElem);
    }
  }

  for (let i = 0; i < arrayPlanet.length; i += 1) {
    for (let b = 0; b < arrayTotal.length; b += 1) {
      const elemOne = arrayPlanet[i];
      const elemTwo = arrayTotal[b];
      if (elemOne.planet === elemTwo.planetObj) {
        continue;
      }

      const difAsp = getDiffDegr(
        elemOne.degr,
        elemTwo.degrObj,
        elemOne.hours,
        elemTwo.hoursObj
      );
    }
  }
  /*  const newElemets = document.querySelectorAll(".directions-list > li");
  for (const element of newElemets) {
    element.remove();
  }

  const aspectItems = arrayTotal.map((el) => {
    const newItem = document.createElement("li");
    newItem.textContent =
      "Планета - " +
      el.planetObj +
      ", год - " +
      el.yearObj +
      ", месяц - " +
      el.monthObj +
      ", знак зодиака - " +
      el.znZodObj +
      ", градусы - " +
      el.degrObj +
      ", часы - " +
      el.hoursObj;
    newItem.classList.add("directions-item");
    return newItem;
  });

  const aspectsList = document.querySelector(".directions-list");
  aspectsList.append(...aspectItems);*/
}

function changeElArOne(elem) {
  elem.degr = getDegr(elem.znZod) + elem.degr;
}

function changeElArTwo(elem) {
  elem.degrObj = getDegr(elem.znZodObj) + elem.degrObj;
}

function getNewDateArray(planet, znZod, degr, hours, countOfYear) {
  let periodArray = [];

  for (let i = 1; i <= countOfYear; i += 1) {
    for (let b = 1; b <= 12; b += 1) {
      const arraySize = periodArray.length;
      if (arraySize === 0) {
        paramZnZod = znZod;
        paramDegr = degr;
        paramHours = hours;
      } else {
        paramZnZod = periodArray[arraySize - 1].znZodObj;
        paramDegr = periodArray[arraySize - 1].degrObj;
        paramHours = periodArray[arraySize - 1].hoursObj;
      }
      const objDate = getNewDate(planet, paramZnZod, paramDegr, paramHours);
      const dateOfDegr = {
        planetObj: planet,
        yearObj: i,
        monthObj: b,
        znZodObj: objDate.newZnZodiak,
        degrObj: objDate.newDgr,
        hoursObj: objDate.newHrs,
      };
      changeElArTwo(dateOfDegr);
      periodArray.push(dateOfDegr);
    }
  }

  return periodArray;
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

  const newObj = {
    newPlanet: planet,
    newZnZodiak: newZnZod,
    newDgr: newDegr,
    newHrs: newHours,
  };

  return newObj;
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

function getDiffDegr(degrOne, degrTwo, minOne, minTwo) {
  if (degrOne >= degrTwo) {
    if (minOne < minTwo) {
      return degrOne - degrTwo - 1;
    } else {
      return degrOne - degrTwo;
    }
  } else {
    if (minTwo < minOne) {
      return degrTwo - degrOne - 1;
    } else {
      return degrTwo - degrOne;
    }
  }
}

function getDegr(znZodiak) {
  if (znZodiak === "Овен") {
    return 0;
  }
  if (znZodiak === "Тілець") {
    return 30;
  }
  if (znZodiak === "Близнюки") {
    return 60;
  }
  if (znZodiak === "Рак") {
    return 90;
  }
  if (znZodiak === "Лев") {
    return 120;
  }
  if (znZodiak === "Діва") {
    return 150;
  }
  if (znZodiak === "Терези") {
    return 180;
  }
  if (znZodiak === "Скорпіон") {
    return 210;
  }
  if (znZodiak === "Стрілець") {
    return 240;
  }
  if (znZodiak === "Козеріг") {
    return 270;
  }
  if (znZodiak === "Водолій") {
    return 300;
  }
  return 330;
}
