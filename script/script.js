const myButton = document.querySelector(".start-button");
myButton.addEventListener("click", myFuncClick);

function myFuncClick() {
  let countOfYear = 37;

  let arrayPlanet = [];

  const dateMars = {
    planet: "Марс",
    znZod: "Козеріг",
    degr: 18,
    hours: 48,
  };

  arrayPlanet.push(dateMars);

  const dateMerk = {
    planet: "Меркурій",
    znZod: "Лев",
    degr: 5,
    hours: 56,
  };

  arrayPlanet.push(dateMerk);

  const dateSun = {
    planet: "Сонце",
    znZod: "Рак",
    degr: 13,
    hours: 57,
  };

  arrayPlanet.push(dateSun);

  const dateMon = {
    planet: "Місяць",
    znZod: "Рак",
    degr: 4,
    hours: 9,
  };

  arrayPlanet.push(dateMon);

  const dateVen = {
    planet: "Венера",
    znZod: "Лев",
    degr: 23,
    hours: 52,
  };

  arrayPlanet.push(dateVen);

  const dateSaturn = {
    planet: "Сатурн",
    znZod: "Стрілець",
    degr: 3,
    hours: 51,
  };

  arrayPlanet.push(dateSaturn);

  const dateUpiter = {
    planet: "Юпітер",
    znZod: "Риби",
    degr: 22,
    hours: 47,
  };

  arrayPlanet.push(dateUpiter);

  const dateUran = {
    planet: "Уран",
    znZod: "Стрілець",
    degr: 19,
    hours: 24,
  };

  arrayPlanet.push(dateUran);

  const dateNeptun = {
    planet: "Нептун",
    znZod: "Козеріг",
    degr: 4,
    hours: 9,
  };

  arrayPlanet.push(dateNeptun);

  const datePluton = {
    planet: "Плутон",
    znZod: "Скорпіон",
    degr: 4,
    hours: 33,
  };

  arrayPlanet.push(datePluton);

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

  let dateAspect = [];

  for (let i = 0; i < arrayPlanet.length; i += 1) {
    for (let b = 0; b < arrayTotal.length; b += 1) {
      const elemOne = arrayPlanet[i];
      const elemTwo = arrayTotal[b];
      if (elemOne.planet === elemTwo.planetObj) {
        continue;
      }

      const newDegrOne = getDegr(elemOne.znZod) + elemOne.degr;
      const newDegrTwo = getDegr(elemTwo.znZodObj) + elemTwo.degrObj;

      const difAsp = getDiffDegr(
        newDegrOne,
        newDegrTwo,
        elemOne.hours,
        elemTwo.hoursObj
      );

      const tekAspect = getAspect(difAsp);
      if (tekAspect !== "") {
        const keyOne =
          elemOne.planet +
          "_" +
          elemTwo.planetObj +
          "_" +
          elemTwo.yearObj +
          "_" +
          elemTwo.monthObj;
        const keyTwo =
          elemTwo.planetObj +
          "_" +
          elemOne.planet +
          "_" +
          elemTwo.yearObj +
          "_" +
          elemTwo.monthObj;

        const findOneKey = dateAspect.find((zn) => zn.key === keyOne);
        const findTwoKey = dateAspect.find((zn) => zn.key === keyTwo);
        if (findOneKey === undefined && findTwoKey === undefined) {
          const newObj = {
            key:
              elemOne.planet +
              "_" +
              elemTwo.planetObj +
              "_" +
              elemTwo.yearObj +
              "_" +
              elemTwo.monthObj,
            aspect:
              elemOne.planet +
              " " +
              tekAspect +
              " " +
              elemTwo.planetObj +
              ", год - " +
              elemTwo.yearObj +
              ", месяц - " +
              elemTwo.monthObj +
              ", планета №1 - " +
              elemOne.znZod +
              ", планета №2 - " +
              elemTwo.znZodObj +
              ", градус №1 - " +
              elemOne.degr +
              ", часы №1 - " +
              elemOne.hours +
              ", градус №2 - " +
              elemTwo.degrObj +
              ", часы №2 - " +
              elemTwo.hoursObj,
          };
          dateAspect.push(newObj);
        }
      }
    }
  }

  const newElemets = document.querySelectorAll(".directions-list > li");
  for (const element of newElemets) {
    element.remove();
  }

  const aspectItems = dateAspect.map((el) => {
    const newItem = document.createElement("li");
    newItem.textContent = el.aspect;
    newItem.classList.add("directions-item");
    return newItem;
  });

  const aspectsList = document.querySelector(".directions-list");
  aspectsList.append(...aspectItems);
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

function getAspect(diffDegr) {
  if (diffDegr >= 58 && diffDegr <= 62) {
    return "cекстиль";
  }
  if (diffDegr >= 118 && diffDegr <= 122) {
    return "тригон";
  }
  if (diffDegr >= -2 && diffDegr <= 2) {
    return "з'єднання";
  }
  if (diffDegr >= 88 && diffDegr <= 92) {
    return "квадратура";
  }
  if (diffDegr >= 178 && diffDegr <= 182) {
    return "оппозиція";
  }
  return "";
}
