const myButton = document.querySelector(".calc-button");
myButton.addEventListener("click", myFuncClick);

const countOfYearInput = document.querySelector(".input-count-year");
const planetMarsInput = document.querySelector("#aspect-mars");
const planetMarsDegrInput = document.querySelector("#aspect-degr-mars");
const planetMarsHoursInput = document.querySelector("#aspect-hours-mars");
const planetMerkInput = document.querySelector("#aspect-merk");
const planetMerkDegrInput = document.querySelector("#aspect-degr-merk");
const planetMerkHoursInput = document.querySelector("#aspect-hours-merk");
const planetSunInput = document.querySelector("#aspect-sun");
const planetSunDegrInput = document.querySelector("#aspect-degr-sun");
const planetSunHoursInput = document.querySelector("#aspect-hours-sun");
const planetMonInput = document.querySelector("#aspect-moon");
const planetMonDegrInput = document.querySelector("#aspect-degr-moon");
const planetMonHoursInput = document.querySelector("#aspect-hours-moon");
const planetVenerInput = document.querySelector("#aspect-vener");
const planetVenerDegrInput = document.querySelector("#aspect-degr-vener");
const planetVenerHoursInput = document.querySelector("#aspect-hours-vener");
const planetSaturnInput = document.querySelector("#aspect-saturn");
const planetSaturnDegrInput = document.querySelector("#aspect-degr-saturn");
const planetSaturnHoursInput = document.querySelector("#aspect-hours-saturn");
const planetUpiterInput = document.querySelector("#aspect-yupiter");
const planetUpiterDegrInput = document.querySelector("#aspect-degr-yupiter");
const planetUpiterHoursInput = document.querySelector("#aspect-hours-yupiter");
const planetUranInput = document.querySelector("#aspect-uran");
const planetUranDegrInput = document.querySelector("#aspect-degr-uran");
const planetUranHoursInput = document.querySelector("#aspect-hours-uran");
const planetNeptnunInput = document.querySelector("#aspect-neptun");
const planetNeptunDegrInput = document.querySelector("#aspect-degr-neptun");
const planetNeptunHoursInput = document.querySelector("#aspect-hours-neptun");

const planetPlutonInput = document.querySelector("#aspect-pluton");
const planetPlutonDegrInput = document.querySelector("#aspect-degr-pluton");
const planetPlutonHoursInput = document.querySelector("#aspect-hours-pluton");

const planetHouseOneInput = document.querySelector("#aspect-houseone");
const planetHouseOneDegrInput = document.querySelector("#aspect-degr-houseone");
const planetHouseOneHoursInput = document.querySelector(
  "#aspect-hours-houseone"
);

const planetHouseTwoInput = document.querySelector("#aspect-housetwo");
const planetHouseTwoDegrInput = document.querySelector("#aspect-degr-housetwo");
const planetHouseTwoHoursInput = document.querySelector(
  "#aspect-hours-housetwo"
);

const planetHouseThreeInput = document.querySelector("#aspect-housethree");
const planetHouseThreeDegrInput = document.querySelector(
  "#aspect-degr-housethree"
);
const planetHouseThreeHoursInput = document.querySelector(
  "#aspect-hours-housethree"
);

const planetHouseFourInput = document.querySelector("#aspect-housefour");
const planetHouseFourDegrInput = document.querySelector(
  "#aspect-degr-housefour"
);
const planetHouseFourHoursInput = document.querySelector(
  "#aspect-hours-housefour"
);

const planetHouseFiveInput = document.querySelector("#aspect-housefive");
const planetHouseFiveDegrInput = document.querySelector(
  "#aspect-degr-housefive"
);
const planetHouseFiveHoursInput = document.querySelector(
  "#aspect-hours-housefive"
);

const planetHouseSixInput = document.querySelector("#aspect-housesix");
const planetHouseSixDegrInput = document.querySelector("#aspect-degr-housesix");
const planetHouseSixHoursInput = document.querySelector(
  "#aspect-hours-housesix"
);

const planetHouseSevenInput = document.querySelector("#aspect-houseseven");
const planetHouseSevenDegrInput = document.querySelector(
  "#aspect-degr-houseseven"
);
const planetHouseSevenHoursInput = document.querySelector(
  "#aspect-hours-houseseven"
);

const planetHouseEightInput = document.querySelector("#aspect-houseeight");
const planetHouseEightDegrInput = document.querySelector(
  "#aspect-degr-houseeight"
);
const planetHouseEightHoursInput = document.querySelector(
  "#aspect-hours-houseeight"
);

const planetHouseNineInput = document.querySelector("#aspect-housenine");
const planetHouseNineDegrInput = document.querySelector(
  "#aspect-degr-housenine"
);
const planetHouseNineHoursInput = document.querySelector(
  "#aspect-hours-housenine"
);

const planetHouseTenInput = document.querySelector("#aspect-houseten");
const planetHouseTenDegrInput = document.querySelector("#aspect-degr-houseten");
const planetHouseTenHoursInput = document.querySelector(
  "#aspect-hours-houseten"
);

const planetHouseElewenInput = document.querySelector("#aspect-houseelewen");
const planetHouseElewenDegrInput = document.querySelector(
  "#aspect-degr-houseelewen"
);
const planetHouseElewenHoursInput = document.querySelector(
  "#aspect-hours-houseelewen"
);

const planetHouseTweleveInput = document.querySelector("#aspect-housetwelve");
const planetHouseTweleveDegrInput = document.querySelector(
  "#aspect-degr-housetwelve"
);
const planetHouseTweleveHoursInput = document.querySelector(
  "#aspect-hours-housetwelve"
);

function myFuncClick(evnt) {
  evnt.preventDefault();
  let countOfYear = parseInt(countOfYearInput.value);
  let planetMarsValue =
    planetMarsInput.options[planetMarsInput.value - 1].textContent;
  let planetMarsDegrValue = parseInt(planetMarsDegrInput.value);
  let planetMarsHoursValue = parseInt(planetMarsHoursInput.value);
  let planetMerkValue =
    planetMerkInput.options[planetMerkInput.value - 1].textContent;
  let planetMerkDegrValue = parseInt(planetMerkDegrInput.value);
  let planetMerkHoursValue = parseInt(planetMerkHoursInput.value);
  let planetSunValue =
    planetSunInput.options[planetSunInput.value - 1].textContent;

  let planetSunDegrValue = parseInt(planetSunDegrInput.value);

  let planetSunHoursValue = parseInt(planetSunHoursInput.value);

  let planetMonValue =
    planetMonInput.options[planetMonInput.value - 1].textContent;

  let planetMonDegrValue = parseInt(planetMonDegrInput.value);

  let planetMonHoursValue = parseInt(planetMonHoursInput.value);

  let planetVenerValue =
    planetVenerInput.options[planetVenerInput.value - 1].textContent;

  let planetVenerDegrValue = parseInt(planetVenerDegrInput.value);

  let planetVenerHoursValue = parseInt(planetVenerHoursInput.value);

  let planetSaturnValue =
    planetSaturnInput.options[planetSaturnInput.value - 1].textContent;

  let planetSaturnDegrValue = parseInt(planetSaturnDegrInput.value);

  let planetSaturnHoursValue = parseInt(planetSaturnHoursInput.value);

  let planetUpiterValue =
    planetUpiterInput.options[planetUpiterInput.value - 1].textContent;

  let planetUpiterDegrValue = parseInt(planetUpiterDegrInput.value);

  let planetUpiterHoursValue = parseInt(planetUpiterHoursInput.value);

  let planetUranValue =
    planetUranInput.options[planetUranInput.value - 1].textContent;

  let planetUranDegrValue = parseInt(planetUranDegrInput.value);

  let planetUranHoursValue = parseInt(planetUranHoursInput.value);

  let planetNeptunValue =
    planetNeptnunInput.options[planetNeptnunInput.value - 1].textContent;
  let planetNeptunDegrValue = parseInt(planetNeptunDegrInput.value);
  let planetNeptunHoursValue = parseInt(planetNeptunHoursInput.value);

  let planetPlunonValue =
    planetPlutonInput.options[planetPlutonInput.value - 1].textContent;
  let planetPlunonDegrValue = parseInt(planetPlutonDegrInput.value);
  let planetPlunonHoursValue = parseInt(planetPlutonHoursInput.value);

  let planetHouseOneValue =
    planetHouseOneInput.options[planetHouseOneInput.value - 1].textContent;
  let planetHouseOneDegrValue = parseInt(planetHouseOneDegrInput.value);
  let planetHouseOneHoursValue = parseInt(planetHouseOneHoursInput.value);

  let planetHouseTwoValue =
    planetHouseTwoInput.options[planetHouseTwoInput.value - 1].textContent;
  let planetHouseTwoDegrValue = parseInt(planetHouseTwoDegrInput.value);
  let planetHouseTwoHoursValue = parseInt(planetHouseTwoHoursInput.value);

  let planetHouseThreeValue =
    planetHouseThreeInput.options[planetHouseThreeInput.value - 1].textContent;
  let planetHouseThreeDegrValue = parseInt(planetHouseThreeDegrInput.value);
  let planetHouseThreeHoursValue = parseInt(planetHouseThreeHoursInput.value);

  let planetHouseFourValue =
    planetHouseFourInput.options[planetHouseFourInput.value - 1].textContent;
  let planetHouseFourDegrValue = parseInt(planetHouseFourDegrInput.value);
  let planetHouseFourHoursValue = parseInt(planetHouseFourHoursInput.value);

  let planetHouseFiveValue =
    planetHouseFiveInput.options[planetHouseFiveInput.value - 1].textContent;
  let planetHouseFiveDegrValue = parseInt(planetHouseFiveDegrInput.value);
  let planetHouseFiveHoursValue = parseInt(planetHouseFiveHoursInput.value);

  let planetHouseSixValue =
    planetHouseSixInput.options[planetHouseSixInput.value - 1].textContent;
  let planetHouseSixDegrValue = parseInt(planetHouseSixDegrInput.value);
  let planetHouseSixHoursValue = parseInt(planetHouseSixHoursInput.value);

  let planetHouseSevenValue =
    planetHouseSevenInput.options[planetHouseSevenInput.value - 1].textContent;
  let planetHouseSevenDegrValue = parseInt(planetHouseSevenDegrInput.value);
  let planetHouseSevenHoursValue = parseInt(planetHouseSevenHoursInput.value);

  let planetHouseEightValue =
    planetHouseEightInput.options[planetHouseEightInput.value - 1].textContent;
  let planetHouseEightDegrValue = parseInt(planetHouseEightDegrInput.value);
  let planetHouseEightHoursValue = parseInt(planetHouseEightHoursInput.value);

  let planetHouseNineValue =
    planetHouseNineInput.options[planetHouseNineInput.value - 1].textContent;
  let planetHouseNineDegrValue = parseInt(planetHouseNineDegrInput.value);
  let planetHouseNineHoursValue = parseInt(planetHouseNineHoursInput.value);

  let planetHouseTenValue =
    planetHouseTenInput.options[planetHouseTenInput.value - 1].textContent;
  let planetHouseTenDegrValue = parseInt(planetHouseTenDegrInput.value);
  let planetHouseTenHoursValue = parseInt(planetHouseTenHoursInput.value);

  let planetHouseElevenValue =
    planetHouseElewenInput.options[planetHouseElewenInput.value - 1]
      .textContent;
  let planetHouseElevenDegrValue = parseInt(planetHouseElewenDegrInput.value);
  let planetHouseElevenHoursValue = parseInt(planetHouseElewenHoursInput.value);

  let planetHouseTwelveValue =
    planetHouseTweleveInput.options[planetHouseTweleveInput.value - 1]
      .textContent;
  let planetHouseTwelveDegrValue = parseInt(planetHouseTweleveDegrInput.value);
  let planetHouseTwelveHoursValue = parseInt(
    planetHouseTweleveHoursInput.value
  );

  let arrayPlanet = [];

  const dateMars = {
    planet: "Марс",
    znZod: planetMarsValue,
    degr: planetMarsDegrValue,
    hours: planetMarsHoursValue,
  };

  arrayPlanet.push(dateMars);

  const dateMerk = {
    planet: "Меркурій",
    znZod: planetMerkValue,
    degr: planetMerkDegrValue,
    hours: planetMerkHoursValue,
  };

  arrayPlanet.push(dateMerk);

  const dateSun = {
    planet: "Сонце",
    znZod: planetSunValue,
    degr: planetSunDegrValue,
    hours: planetSunHoursValue,
  };

  arrayPlanet.push(dateSun);

  const dateMon = {
    planet: "Місяць",
    znZod: planetMonValue,
    degr: planetMonDegrValue,
    hours: planetMonHoursValue,
  };

  arrayPlanet.push(dateMon);

  const dateVen = {
    planet: "Венера",
    znZod: planetVenerValue,
    degr: planetVenerDegrValue,
    hours: planetVenerHoursValue,
  };

  arrayPlanet.push(dateVen);

  const dateSaturn = {
    planet: "Сатурн",
    znZod: planetSaturnValue,
    degr: planetSaturnDegrValue,
    hours: planetSaturnHoursValue,
  };

  arrayPlanet.push(dateSaturn);

  const dateUpiter = {
    planet: "Юпітер",
    znZod: planetUpiterValue,
    degr: planetUpiterDegrValue,
    hours: planetUpiterHoursValue,
  };

  arrayPlanet.push(dateUpiter);

  const dateUran = {
    planet: "Уран",
    znZod: planetUranValue,
    degr: planetUranDegrValue,
    hours: planetUranHoursValue,
  };

  arrayPlanet.push(dateUran);

  const dateNeptun = {
    planet: "Нептун",
    znZod: planetNeptunValue,
    degr: planetNeptunDegrValue,
    hours: planetNeptunHoursValue,
  };

  arrayPlanet.push(dateNeptun);

  const datePluton = {
    planet: "Плутон",
    znZod: planetPlunonValue,
    degr: planetPlunonDegrValue,
    hours: planetPlunonHoursValue,
  };

  arrayPlanet.push(datePluton);

  const dateHouseOne = {
    planet: "Буд. №1",
    znZod: planetHouseOneValue,
    degr: planetHouseOneDegrValue,
    hours: planetHouseOneHoursValue,
  };

  arrayPlanet.push(dateHouseOne);

  const dateHouseTwo = {
    planet: "Буд. №2",
    znZod: planetHouseTwoValue,
    degr: planetHouseTwoDegrValue,
    hours: planetHouseTwoHoursValue,
  };

  arrayPlanet.push(dateHouseTwo);

  const dateHouseThree = {
    planet: "Буд. №3",
    znZod: planetHouseThreeValue,
    degr: planetHouseThreeDegrValue,
    hours: planetHouseThreeHoursValue,
  };

  arrayPlanet.push(dateHouseThree);

  const dateHouseFour = {
    planet: "Буд. №4",
    znZod: planetHouseFourValue,
    degr: planetHouseFourDegrValue,
    hours: planetHouseFourHoursValue,
  };

  arrayPlanet.push(dateHouseFour);

  const dateHouseFive = {
    planet: "Буд. №5",
    znZod: planetHouseFiveValue,
    degr: planetHouseFiveDegrValue,
    hours: planetHouseFiveHoursValue,
  };

  arrayPlanet.push(dateHouseFive);

  const dateHouseSix = {
    planet: "Буд. №6",
    znZod: planetHouseSixValue,
    degr: planetHouseSixDegrValue,
    hours: planetHouseSixHoursValue,
  };

  arrayPlanet.push(dateHouseSix);

  const dateHouseSeven = {
    planet: "Буд. №7",
    znZod: planetHouseSevenValue,
    degr: planetHouseSevenDegrValue,
    hours: planetHouseSevenHoursValue,
  };

  arrayPlanet.push(dateHouseSeven);

  const dateHouseEight = {
    planet: "Буд. №8",
    znZod: planetHouseEightValue,
    degr: planetHouseEightDegrValue,
    hours: planetHouseEightHoursValue,
  };

  arrayPlanet.push(dateHouseEight);

  const dateHouseNine = {
    planet: "Буд. №9",
    znZod: planetHouseNineValue,
    degr: planetHouseNineDegrValue,
    hours: planetHouseNineHoursValue,
  };

  arrayPlanet.push(dateHouseNine);

  const dateHouseTen = {
    planet: "Буд. №10",
    znZod: planetHouseTenValue,
    degr: planetHouseTenDegrValue,
    hours: planetHouseTenHoursValue,
  };

  arrayPlanet.push(dateHouseTen);

  const dateHouseElewen = {
    planet: "Буд. №11",
    znZod: planetHouseElevenValue,
    degr: planetHouseElevenDegrValue,
    hours: planetHouseElevenHoursValue,
  };

  arrayPlanet.push(dateHouseElewen);

  const dateHouseTwelve = {
    planet: "Буд. №12",
    znZod: planetHouseTwelveValue,
    degr: planetHouseTwelveDegrValue,
    hours: planetHouseTwelveHoursValue,
  };

  arrayPlanet.push(dateHouseTwelve);

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
            aspect: tekAspect,
            planetone: elemOne.planet,
            planettwo: elemTwo.planetObj,
            years: elemTwo.yearObj,
            months: elemTwo.monthObj,
          };
          dateAspect.push(newObj);
        }
      }
    }
  }

  let arrayRenderPlanet = [];
  let arrayRenderPlanetAspect = [];
  let arrayRenderPlanetTwo = [];

  for (let i = 0; i < dateAspect.length; i += 1) {
    const curItem = dateAspect[i];
    const inArray = arrayRenderPlanet.indexOf(curItem.planetone);
    if (inArray === -1) {
      arrayRenderPlanet.push(curItem.planetone);
    }
    if (arrayRenderPlanetAspect.length === 0) {
      const newObj = {
        planetOne: curItem.planetone,
        aspect: curItem.aspect,
      };
      arrayRenderPlanetAspect.push(newObj);
    } else {
      const elFound = arrayRenderPlanetAspect.find(function (el) {
        return (
          el.planetOne === curItem.planetone && el.aspect === curItem.aspect
        );
      });
      if (elFound === undefined) {
        const newObj = {
          planetOne: curItem.planetone,
          aspect: curItem.aspect,
        };
        arrayRenderPlanetAspect.push(newObj);
      }
    }
    if (arrayRenderPlanetTwo.length === 0) {
      newObj = {
        planetOne: curItem.planetone,
        aspect: curItem.aspect,
        planetTwo: curItem.planettwo,
      };
      arrayRenderPlanetTwo.push(newObj);
    } else {
      const elFound = arrayRenderPlanetTwo.find(function (el) {
        return (
          el.planetOne === curItem.planetone &&
          el.aspect === curItem.aspect &&
          el.planetTwo === curItem.planettwo
        );
      });
      if (elFound === undefined) {
        newObj = {
          planetOne: curItem.planetone,
          aspect: curItem.aspect,
          planetTwo: curItem.planettwo,
        };
        arrayRenderPlanetTwo.push(newObj);
      }
    }
  }

  const newElemets = document.querySelectorAll(".directions-list > li");
  for (const element of newElemets) {
    element.remove();
  }

  const listDirection = document.querySelector(".directions-list");

  for (let i = 0; i < arrayRenderPlanet.length; i += 1) {
    const curElement = arrayRenderPlanet[i];
    let elLi = document.createElement("li");
    elLi.classList.add("directions-item");
    let elTitle = document.createElement("h2");
    elTitle.classList.add("planet-one-title");
    listDirection.append(elLi);
    elLi.append(elTitle);
    elTitle.textContent = curElement;

    const arrayPlanetAsp = arrayRenderPlanetAspect.filter(
      (planetObj) => planetObj.planetOne === curElement
    );

    if (arrayPlanetAsp.length > 0) {
      let aspUl = document.createElement("ul");
      aspUl.classList.add("aspects-list");
      elLi.append(aspUl);
      for (let b = 0; b < arrayPlanetAsp.length; b += 1) {
        const curAspect = arrayPlanetAsp[b].aspect;
        let itemAspect = document.createElement("li");
        itemAspect.classList.add("aspects-item");
        aspUl.append(itemAspect);
        let aspTitle = document.createElement("h3");
        aspTitle.classList.add("aspect-title");
        itemAspect.append(aspTitle);
        aspTitle.textContent = curAspect;
        const arrayPlanetTwo = arrayRenderPlanetTwo.filter(
          (planetObj) =>
            planetObj.planetOne === curElement && planetObj.aspect === curAspect
        );

        if (arrayPlanetTwo.length > 0) {
          let aspectUlPlanetTwo = document.createElement("ul");
          aspectUlPlanetTwo.classList.add("planet-two-list");
          itemAspect.append(aspectUlPlanetTwo);
          for (let c = 0; c < arrayPlanetTwo.length; c += 1) {
            const curPlanetTwo = arrayPlanetTwo[c].planetTwo;
            let itemPlanetTwo = document.createElement("li");
            itemPlanetTwo.classList.add("planet-two-item");
            aspectUlPlanetTwo.append(itemPlanetTwo);
            let planetTwoTitle = document.createElement("h4");
            planetTwoTitle.classList.add("planet-two-title");
            itemPlanetTwo.append(planetTwoTitle);
            planetTwoTitle.textContent = curPlanetTwo;
            const arrayYearsMonth = dateAspect.filter(
              (planetObj) =>
                planetObj.planetone === curElement &&
                planetObj.aspect === curAspect &&
                planetObj.planettwo === curPlanetTwo
            );
            if (arrayYearsMonth.length > 0) {
              let ulPlanetTwo = document.createElement("ul");
              ulPlanetTwo.classList.add("period-list");
              itemPlanetTwo.append(ulPlanetTwo);
              for (let d = 0; d < arrayYearsMonth.length; d += 1) {
                const curElemYear = arrayYearsMonth[d];
                const curYear = curElemYear.years;
                const curMoth = curElemYear.months;
                let itemPlanetTwo = document.createElement("li");
                itemPlanetTwo.classList.add("period-item");
                ulPlanetTwo.append(itemPlanetTwo);
                let yearsTitle = document.createElement("p");
                yearsTitle.classList.add("aspects-period");
                yearsTitle.addEventListener("click", myFuncClickPeriod);
                itemPlanetTwo.append(yearsTitle);
                yearsTitle.textContent =
                  curYear + " років " + curMoth + " місяців";
              }
            }
          }
        }
      }
    }
  }
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

function myFuncClickPeriod(el) {
  const currentText = el.target.innerText;
  const symYears = currentText.indexOf("років");

  let countYears = 0;
  let countMonths = 0;

  if (symYears !== 0) {
    const textYears = currentText.substr(0, symYears - 1).trim();
    countYears = parseInt(textYears);
    const nextStr = currentText.substr(symYears).trim();
    const newNextStr = nextStr.replace("років", "").trim();
    const totalStr = newNextStr.replace("місяців", "").trim();
    countMonths = parseInt(totalStr);
  }

  console.log(countYears);
  console.log(countMonths);
  console.log("***************");

  /*
  const myDate = new Date(2024, 0, 12);
   myDate.setFullYear(
    myDate.getFullYear() + 1,
    myDate.getMonth() + 11,
    myDate.getDay()
  );
  console.log(myDate);
  console.log(
    String(myDate.getDay()) +
      "." +
      String(myDate.getMonth() + 1) +
      "." +
      String(myDate.getFullYear())
  );
  */
}
