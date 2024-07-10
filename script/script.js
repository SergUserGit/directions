const myButton = document.querySelector(".calc-button");
myButton.addEventListener("click", myFuncClick);

const dbInput = document.querySelector("#date-bd");
const dbEventInput = document.querySelector("#date-event");

const titleTau = document.querySelector(".title-tau");
const titleBisekstil = document.querySelector(".title-bisekstil");
const titleBigtrigon = document.querySelector(".title-bigtrigon");

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

const planetLilitInput = document.querySelector("#aspect-lilit");
const planetLilitDegrInput = document.querySelector("#aspect-degr-lilit");
const planetLilitHoursInput = document.querySelector("#aspect-hours-lilit");

const planetNodeInput = document.querySelector("#aspect-node");
const planetNodeDegrInput = document.querySelector("#aspect-degr-node");
const planetNodeHoursInput = document.querySelector("#aspect-hours-node");

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

  let planetLilitValue =
    planetLilitInput.options[planetLilitInput.value - 1].textContent;

  let planetLilitDegrValue = parseInt(planetLilitDegrInput.value);

  let planetLilitHoursValue = parseInt(planetLilitHoursInput.value);

  let planetNodeValue =
    planetNodeInput.options[planetNodeInput.value - 1].textContent;

  let planetNodeDegrValue = parseInt(planetNodeDegrInput.value);

  let planetNodeHoursValue = parseInt(planetNodeHoursInput.value);

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

  const dateLilit = {
    planet: "Ліліт",
    znZod: planetLilitValue,
    degr: planetLilitDegrValue,
    hours: planetLilitHoursValue,
  };

  arrayPlanet.push(dateLilit);

  const dateNode = {
    planet: "Вузол",
    znZod: planetNodeValue,
    degr: planetNodeDegrValue,
    hours: planetNodeHoursValue,
  };

  arrayPlanet.push(dateNode);

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
  let dateEventArray = [];

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
          const isEmptyBdDate = isEmptyDate(dbInput.value);
          const isEmptyEventDate = isEmptyDate(dbEventInput.value);
          if (!isEmptyBdDate && !isEmptyEventDate) {
            const dateEvent = getNewDateForEvent(
              dbInput.value,
              newObj.years,
              newObj.months
            );
            const DateAnalyz = getDateAnalyz(dbEventInput.value);
            if (dateEvent === DateAnalyz) {
              dateEventArray.push(newObj);
            }
          }
        }
      }
    }
  }

  const isEmptyBdDate = isEmptyDate(dbInput.value);
  const isEmptyEventDate = isEmptyDate(dbEventInput.value);
  let curArray = [];
  if (!isEmptyBdDate && !isEmptyEventDate) {
    curArray = dateEventArray;
  } else {
    curArray = dateAspect;
  }

  let arrayRenderPlanet = [];
  let arrayRenderPlanetAspect = [];
  let arrayRenderPlanetTwo = [];

  for (let i = 0; i < curArray.length; i += 1) {
    const curItem = curArray[i];
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
            const arrayYearsMonth = curArray.filter(
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

  //Конфігурації
  const arrayTauKvadrat = getArrayTau(curArray);
  renderDateTau(arrayTauKvadrat);

  const arrayBisektil = getArraybisekstil(curArray);
  renderDateBisekstil(arrayBisektil);

  const arrayBigTrigon = getArrayBigTrin(curArray);
  renderDateBigtrigon(arrayBigTrigon);

  const arrayObiqueSail = getArrayObiqueSail(curArray);
  console.log(arrayObiqueSail);
  //Конфігурації
}

function getArrayObiqueSail(curArray) {
  for (let i = 0; i < curArray.length; i += 1) {
    let curElement = curArray[i];
    if (curElement.aspect === "тригон") {
      const curPlanet = curElement.planetone;
      const curPlanetTwo = curElement.planettwo;
      const arrayPlanetAspOppjz = curArray.filter(
        (planetObj) =>
          planetObj.planetone === curPlanet && planetObj.aspect === "оппозиція"
      );
      for (let c = 0; c < arrayPlanetAspOppjz.length; c += 1) {
        const curElOp = arrayPlanetAspOppjz[c];
        if (curElOp.planettwo !== curPlanetTwo) {
          const findSecstOne = curArray.find(function (el) {
            return (
              el.planetone === curElOp.planettwo &&
              el.aspect === "cекстиль" &&
              el.planettwo === curPlanetTwo
            );
          });
          const findSecsTwo = curArray.find(function (el) {
            return (
              el.planetone === curPlanetTwo &&
              el.aspect === "cекстиль" &&
              el.planettwo === curElOp.planettwo
            );
          });

          if (findSecstOne !== undefined) {
            const findTrigOne = curArray.find(function (el) {
              return (
                el.planetone === findSecstOne.planetone &&
                el.aspect === "тригон" &&
                el.planettwo === curPlanet
              );
            });
            const findTrigTwo = curArray.find(function (el) {
              return (
                el.planetone === findSecstOne.planettwo &&
                el.aspect === "оппозиція" &&
                el.planettwo === curPlanet
              );
            });
            if (findTrigOne !== undefined && findTrigTwo !== undefined) {
            } else {
              const findTrigThree = curArray.find(function (el) {
                return (
                  el.planetone === curPlanet &&
                  el.aspect === "тригон" &&
                  el.planettwo === findSecstOne.planetone
                );
              });
              const findTrigFour = curArray.find(function (el) {
                return (
                  el.planetone === curPlanet &&
                  el.aspect === "оппозиція" &&
                  el.planettwo === findSecstOne.planettwo
                );
              });
              if (findTrigThree !== undefined && findTrigFour !== undefined) {
              }
            }
          } else {
          }
        }
      }
    }
    //тригон оппозиція секстиль
  }
}

function getArrayBigTrin(curArray) {
  let arrayKvadrat = [];
  let arrayPlanetKvadrat = [];
  for (let a = 0; a < curArray.length; a += 1) {
    const curElem = curArray[a];

    if (curElem.aspect === "тригон") {
      const elFind = arrayPlanetKvadrat.indexOf(curElem.planetone);
      if (elFind === -1) {
        arrayPlanetKvadrat.push(curElem.planetone);
      }
      const newObj = {
        planetOne: curElem.planetone,
        planetTwo: curElem.planettwo,
      };
      arrayKvadrat.push(newObj);
    }
  }

  let arrayTauAnaliz = [];

  for (let a = 0; a < arrayPlanetKvadrat.length; a += 1) {
    const curPlanet = arrayPlanetKvadrat[a];
    const arrayPlanetKv = arrayKvadrat.filter(
      (planetObj) => planetObj.planetOne === curPlanet
    );
    if (arrayPlanetKv.length > 1) {
      newObj = {
        curPlanet: curPlanet,
        arrayAnalyz: arrayPlanetKv,
      };
      arrayTauAnaliz.push(newObj);
    }
  }

  let arrayTauKvadrat = [];

  for (let b = 0; b < arrayTauAnaliz.length; b += 1) {
    const curElement = arrayTauAnaliz[b];
    const curPlanet = curElement.curPlanet;
    const curArrayAnalyz = curElement.arrayAnalyz;
    for (let c = 0; c < curArrayAnalyz.length; c += 1) {
      for (let d = 0; d < curArrayAnalyz.length; d += 1) {
        const curElemOne = curArrayAnalyz[c];
        const curElemTwo = curArrayAnalyz[d];
        if (curElemOne.planetTwo !== curElemTwo.planetTwo) {
          const elFound = curArray.find(function (el) {
            return (
              el.planetone === curElemOne.planetTwo &&
              el.aspect === "тригон" &&
              el.planettwo === curElemTwo.planetTwo
            );
          });
          if (elFound !== undefined) {
            const elFoundKvOne = curArray.find(function (el) {
              return (
                el.planetone === elFound.planetone &&
                el.aspect === "тригон" &&
                el.planettwo === curPlanet
              );
            });
            const elFoundKvTwo = curArray.find(function (el) {
              return (
                el.planetone === elFound.planettwo &&
                el.aspect === "тригон" &&
                el.planettwo === curPlanet
              );
            });

            const elFoundKvThree = curArray.find(function (el) {
              return (
                el.planetone === curPlanet &&
                el.aspect === "тригон" &&
                el.planettwo === elFound.planetone
              );
            });
            const elFoundKvFour = curArray.find(function (el) {
              return (
                el.planetone === curPlanet &&
                el.aspect === "тригон" &&
                el.planettwo === elFound.planettwo
              );
            });
            if (elFoundKvOne !== undefined && elFoundKvTwo !== undefined) {
              if (arrayTauKvadrat.length === 0) {
                const newObj = {
                  planetOne: curPlanet,
                  planetTwo: elFoundKvOne.planetone,
                  planetThree: elFoundKvTwo.planetone,
                };
                arrayTauKvadrat.push(newObj);
              } else {
                const elFoundTau = arrayTauKvadrat.find(function (el) {
                  return (
                    el.planetOne === curPlanet &&
                    el.planetTwo === elFoundKvOne.planetone &&
                    el.planetThree === elFoundKvTwo.planetone
                  );
                });
                if (elFoundTau === undefined) {
                  const newObj = {
                    planetOne: curPlanet,
                    planetTwo: elFoundKvOne.planetone,
                    planetThree: elFoundKvTwo.planetone,
                  };
                  arrayTauKvadrat.push(newObj);
                }
              }
            }
            if (elFoundKvThree !== undefined && elFoundKvFour !== undefined) {
              if (arrayTauKvadrat.length === 0) {
                const newObj = {
                  planetOne: curPlanet,
                  planetTwo: elFoundKvThree.planettwo,
                  planetThree: elFoundKvFour.planettwo,
                };
                arrayTauKvadrat.push(newObj);
              } else {
                const elFoundTau = arrayTauKvadrat.find(function (el) {
                  return (
                    el.planetOne === curPlanet &&
                    el.planetTwo === elFoundKvThree.planettwo &&
                    el.planetThree === elFoundKvFour.planettwo
                  );
                });
                if (elFoundTau === undefined) {
                  const newObj = {
                    planetOne: curPlanet,
                    planetTwo: elFoundKvThree.planettwo,
                    planetThree: elFoundKvFour.planettwo,
                  };
                  arrayTauKvadrat.push(newObj);
                }
              }
            }
          } else {
            const elFound = curArray.find(function (el) {
              return (
                el.planetone === curElemTwo.planetTwo &&
                el.aspect === "тригон" &&
                el.planettwo === curElemOne.planetTwo
              );
            });
            if (elFound !== undefined) {
              const elFoundKvOne = curArray.find(function (el) {
                return (
                  el.planetone === elFound.planetone &&
                  el.aspect === "тригон" &&
                  el.planettwo === curPlanet
                );
              });
              const elFoundKvTwo = curArray.find(function (el) {
                return (
                  el.planetone === elFound.planettwo &&
                  el.aspect === "тригон" &&
                  el.planettwo === curPlanet
                );
              });

              const elFoundKvThree = curArray.find(function (el) {
                return (
                  el.planetone === curPlanet &&
                  el.aspect === "тригон" &&
                  el.planettwo === elFound.planetone
                );
              });
              const elFoundKvFour = curArray.find(function (el) {
                return (
                  el.planetone === curPlanet &&
                  el.aspect === "тригон" &&
                  el.planettwo === elFound.planettwo
                );
              });
              if (elFoundKvOne !== undefined && elFoundKvTwo !== undefined) {
                if (arrayTauKvadrat.length === 0) {
                  const newObj = {
                    planetOne: curPlanet,
                    planetTwo: elFoundKvOne.planetone,
                    planetThree: elFoundKvTwo.planetone,
                  };
                  arrayTauKvadrat.push(newObj);
                } else {
                  const elFoundTau = arrayTauKvadrat.find(function (el) {
                    return (
                      el.planetOne === curPlanet &&
                      el.planetTwo === elFoundKvOne.planetone &&
                      el.planetThree === elFoundKvTwo.planetone
                    );
                  });
                  if (elFoundTau === undefined) {
                    const newObj = {
                      planetOne: curPlanet,
                      planetTwo: elFoundKvOne.planetone,
                      planetThree: elFoundKvTwo.planetone,
                    };
                    arrayTauKvadrat.push(newObj);
                  }
                }
              }
              if (elFoundKvThree !== undefined && elFoundKvFour !== undefined) {
                if (arrayTauKvadrat.length === 0) {
                  const newObj = {
                    planetOne: curPlanet,
                    planetTwo: elFoundKvThree.planettwo,
                    planetThree: elFoundKvFour.planettwo,
                  };
                  arrayTauKvadrat.push(newObj);
                } else {
                  const elFoundTau = arrayTauKvadrat.find(function (el) {
                    return (
                      el.planetOne === curPlanet &&
                      el.planetTwo === elFoundKvThree.planettwo &&
                      el.planetThree === elFoundKvFour.planettwo
                    );
                  });
                  if (elFoundTau === undefined) {
                    const newObj = {
                      planetOne: curPlanet,
                      planetTwo: elFoundKvThree.planettwo,
                      planetThree: elFoundKvFour.planettwo,
                    };
                    arrayTauKvadrat.push(newObj);
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  return arrayTauKvadrat;
}

function renderDateBigtrigon(arrayBigtrigon) {
  if (arrayBigtrigon.length === 0) {
    titleBigtrigon.textContent = "";
  } else {
    titleBigtrigon.textContent = "Великі тригони";
  }

  const newElemetsTau = document.querySelectorAll(".bigtrigon-list > li");
  for (const element of newElemetsTau) {
    element.remove();
  }

  const listTauKvadrat = document.querySelector(".bigtrigon-list");

  if (arrayBigtrigon.length !== 0) {
    for (let i = 0; i < arrayBigtrigon.length; i += 1) {
      const curElement = arrayBigtrigon[i];
      let itemTau = document.createElement("li");
      itemTau.classList.add("bigtrigon-item");
      listTauKvadrat.append(itemTau);
      let paragTau = document.createElement("p");
      paragTau.classList.add("bigtrigon-paragh");
      paragTau.textContent =
        curElement.planetOne +
        " - " +
        curElement.planetTwo +
        " - " +
        curElement.planetThree;
      itemTau.append(paragTau);
    }
  }
}

function renderDateBisekstil(arrayBisektil) {
  if (arrayBisektil.length === 0) {
    titleBisekstil.textContent = "";
  } else {
    titleBisekstil.textContent = "Бісекстилі";
  }

  const newElemetsTau = document.querySelectorAll(".bisekstil-list > li");
  for (const element of newElemetsTau) {
    element.remove();
  }

  const listTauKvadrat = document.querySelector(".bisekstil-list");

  if (arrayBisektil.length !== 0) {
    for (let i = 0; i < arrayBisektil.length; i += 1) {
      const curElement = arrayBisektil[i];
      let itemTau = document.createElement("li");
      itemTau.classList.add("bisekstil-item");
      listTauKvadrat.append(itemTau);
      let paragTau = document.createElement("p");
      paragTau.classList.add("bisekstil-paragh");
      paragTau.textContent =
        curElement.planetOne +
        " - " +
        curElement.planetTwo +
        " - " +
        curElement.planetThree;
      itemTau.append(paragTau);
    }
  }
}

function renderDateTau(arrayTauKvadrat) {
  if (arrayTauKvadrat.length === 0) {
    titleTau.textContent = "";
  } else {
    titleTau.textContent = "Тау квадратури";
  }

  const newElemetsTau = document.querySelectorAll(".tau-kvadrat-list > li");
  for (const element of newElemetsTau) {
    element.remove();
  }

  const listTauKvadrat = document.querySelector(".tau-kvadrat-list");

  if (arrayTauKvadrat.length !== 0) {
    for (let i = 0; i < arrayTauKvadrat.length; i += 1) {
      const curElement = arrayTauKvadrat[i];
      let itemTau = document.createElement("li");
      itemTau.classList.add("tau-kvadrat-item");
      listTauKvadrat.append(itemTau);
      let paragTau = document.createElement("p");
      paragTau.classList.add("tau-kvadrat-paragh");
      paragTau.textContent =
        curElement.planetOne +
        " - " +
        curElement.planetTwo +
        " - " +
        curElement.planetThree;
      itemTau.append(paragTau);
    }
  }
}

function getArraybisekstil(curArray) {
  let arrayKvadrat = [];
  let arrayPlanetKvadrat = [];
  for (let a = 0; a < curArray.length; a += 1) {
    const curElem = curArray[a];

    if (curElem.aspect === "cекстиль") {
      const elFind = arrayPlanetKvadrat.indexOf(curElem.planetone);
      if (elFind === -1) {
        arrayPlanetKvadrat.push(curElem.planetone);
      }
      const newObj = {
        planetOne: curElem.planetone,
        planetTwo: curElem.planettwo,
      };
      arrayKvadrat.push(newObj);
    }
  }

  let arrayTauAnaliz = [];

  for (let a = 0; a < arrayPlanetKvadrat.length; a += 1) {
    const curPlanet = arrayPlanetKvadrat[a];
    const arrayPlanetKv = arrayKvadrat.filter(
      (planetObj) => planetObj.planetOne === curPlanet
    );
    if (arrayPlanetKv.length > 1) {
      newObj = {
        curPlanet: curPlanet,
        arrayAnalyz: arrayPlanetKv,
      };
      arrayTauAnaliz.push(newObj);
    }
  }

  let arrayTauKvadrat = [];

  for (let b = 0; b < arrayTauAnaliz.length; b += 1) {
    const curElement = arrayTauAnaliz[b];
    const curPlanet = curElement.curPlanet;
    const curArrayAnalyz = curElement.arrayAnalyz;
    for (let c = 0; c < curArrayAnalyz.length; c += 1) {
      for (let d = 0; d < curArrayAnalyz.length; d += 1) {
        const curElemOne = curArrayAnalyz[c];
        const curElemTwo = curArrayAnalyz[d];
        if (curElemOne.planetTwo !== curElemTwo.planetTwo) {
          const elFound = curArray.find(function (el) {
            return (
              el.planetone === curElemOne.planetTwo &&
              el.aspect === "тригон" &&
              el.planettwo === curElemTwo.planetTwo
            );
          });
          if (elFound !== undefined) {
            const elFoundKvOne = curArray.find(function (el) {
              return (
                el.planetone === elFound.planetone &&
                el.aspect === "cекстиль" &&
                el.planettwo === curPlanet
              );
            });
            const elFoundKvTwo = curArray.find(function (el) {
              return (
                el.planetone === elFound.planettwo &&
                el.aspect === "cекстиль" &&
                el.planettwo === curPlanet
              );
            });

            const elFoundKvThree = curArray.find(function (el) {
              return (
                el.planetone === curPlanet &&
                el.aspect === "cекстиль" &&
                el.planettwo === elFound.planetone
              );
            });
            const elFoundKvFour = curArray.find(function (el) {
              return (
                el.planetone === curPlanet &&
                el.aspect === "cекстиль" &&
                el.planettwo === elFound.planettwo
              );
            });
            if (elFoundKvOne !== undefined && elFoundKvTwo !== undefined) {
              if (arrayTauKvadrat.length === 0) {
                const newObj = {
                  planetOne: curPlanet,
                  planetTwo: elFoundKvOne.planetone,
                  planetThree: elFoundKvTwo.planetone,
                };
                arrayTauKvadrat.push(newObj);
              } else {
                const elFoundTau = arrayTauKvadrat.find(function (el) {
                  return (
                    el.planetOne === curPlanet &&
                    el.planetTwo === elFoundKvOne.planetone &&
                    el.planetThree === elFoundKvTwo.planetone
                  );
                });
                if (elFoundTau === undefined) {
                  const newObj = {
                    planetOne: curPlanet,
                    planetTwo: elFoundKvOne.planetone,
                    planetThree: elFoundKvTwo.planetone,
                  };
                  arrayTauKvadrat.push(newObj);
                }
              }
            }
            if (elFoundKvThree !== undefined && elFoundKvFour !== undefined) {
              if (arrayTauKvadrat.length === 0) {
                const newObj = {
                  planetOne: curPlanet,
                  planetTwo: elFoundKvThree.planettwo,
                  planetThree: elFoundKvFour.planettwo,
                };
                arrayTauKvadrat.push(newObj);
              } else {
                const elFoundTau = arrayTauKvadrat.find(function (el) {
                  return (
                    el.planetOne === curPlanet &&
                    el.planetTwo === elFoundKvThree.planettwo &&
                    el.planetThree === elFoundKvFour.planettwo
                  );
                });
                if (elFoundTau === undefined) {
                  const newObj = {
                    planetOne: curPlanet,
                    planetTwo: elFoundKvThree.planettwo,
                    planetThree: elFoundKvFour.planettwo,
                  };
                  arrayTauKvadrat.push(newObj);
                }
              }
            }
          } else {
            const elFound = curArray.find(function (el) {
              return (
                el.planetone === curElemTwo.planetTwo &&
                el.aspect === "тригон" &&
                el.planettwo === curElemOne.planetTwo
              );
            });
            if (elFound !== undefined) {
              const elFoundKvOne = curArray.find(function (el) {
                return (
                  el.planetone === elFound.planetone &&
                  el.aspect === "cекстиль" &&
                  el.planettwo === curPlanet
                );
              });
              const elFoundKvTwo = curArray.find(function (el) {
                return (
                  el.planetone === elFound.planettwo &&
                  el.aspect === "cекстиль" &&
                  el.planettwo === curPlanet
                );
              });

              const elFoundKvThree = curArray.find(function (el) {
                return (
                  el.planetone === curPlanet &&
                  el.aspect === "cекстиль" &&
                  el.planettwo === elFound.planetone
                );
              });
              const elFoundKvFour = curArray.find(function (el) {
                return (
                  el.planetone === curPlanet &&
                  el.aspect === "cекстиль" &&
                  el.planettwo === elFound.planettwo
                );
              });
              if (elFoundKvOne !== undefined && elFoundKvTwo !== undefined) {
                if (arrayTauKvadrat.length === 0) {
                  const newObj = {
                    planetOne: curPlanet,
                    planetTwo: elFoundKvOne.planetone,
                    planetThree: elFoundKvTwo.planetone,
                  };
                  arrayTauKvadrat.push(newObj);
                } else {
                  const elFoundTau = arrayTauKvadrat.find(function (el) {
                    return (
                      el.planetOne === curPlanet &&
                      el.planetTwo === elFoundKvOne.planetone &&
                      el.planetThree === elFoundKvTwo.planetone
                    );
                  });
                  if (elFoundTau === undefined) {
                    const newObj = {
                      planetOne: curPlanet,
                      planetTwo: elFoundKvOne.planetone,
                      planetThree: elFoundKvTwo.planetone,
                    };
                    arrayTauKvadrat.push(newObj);
                  }
                }
              }
              if (elFoundKvThree !== undefined && elFoundKvFour !== undefined) {
                if (arrayTauKvadrat.length === 0) {
                  const newObj = {
                    planetOne: curPlanet,
                    planetTwo: elFoundKvThree.planettwo,
                    planetThree: elFoundKvFour.planettwo,
                  };
                  arrayTauKvadrat.push(newObj);
                } else {
                  const elFoundTau = arrayTauKvadrat.find(function (el) {
                    return (
                      el.planetOne === curPlanet &&
                      el.planetTwo === elFoundKvThree.planettwo &&
                      el.planetThree === elFoundKvFour.planettwo
                    );
                  });
                  if (elFoundTau === undefined) {
                    const newObj = {
                      planetOne: curPlanet,
                      planetTwo: elFoundKvThree.planettwo,
                      planetThree: elFoundKvFour.planettwo,
                    };
                    arrayTauKvadrat.push(newObj);
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  return arrayTauKvadrat;
}

function getArrayTau(curArray) {
  let arrayKvadrat = [];
  let arrayPlanetKvadrat = [];
  for (let a = 0; a < curArray.length; a += 1) {
    const curElem = curArray[a];

    if (curElem.aspect === "квадратура") {
      const elFind = arrayPlanetKvadrat.indexOf(curElem.planetone);
      if (elFind === -1) {
        arrayPlanetKvadrat.push(curElem.planetone);
      }
      const newObj = {
        planetOne: curElem.planetone,
        planetTwo: curElem.planettwo,
      };
      arrayKvadrat.push(newObj);
    }
  }

  let arrayTauAnaliz = [];

  for (let a = 0; a < arrayPlanetKvadrat.length; a += 1) {
    const curPlanet = arrayPlanetKvadrat[a];
    const arrayPlanetKv = arrayKvadrat.filter(
      (planetObj) => planetObj.planetOne === curPlanet
    );
    if (arrayPlanetKv.length > 1) {
      newObj = {
        curPlanet: curPlanet,
        arrayAnalyz: arrayPlanetKv,
      };
      arrayTauAnaliz.push(newObj);
    }
  }

  let arrayTauKvadrat = [];

  for (let b = 0; b < arrayTauAnaliz.length; b += 1) {
    const curElement = arrayTauAnaliz[b];
    const curPlanet = curElement.curPlanet;
    const curArrayAnalyz = curElement.arrayAnalyz;
    for (let c = 0; c < curArrayAnalyz.length; c += 1) {
      for (let d = 0; d < curArrayAnalyz.length; d += 1) {
        const curElemOne = curArrayAnalyz[c];
        const curElemTwo = curArrayAnalyz[d];
        if (curElemOne.planetTwo !== curElemTwo.planetTwo) {
          const elFound = curArray.find(function (el) {
            return (
              el.planetone === curElemOne.planetTwo &&
              el.aspect === "оппозиція" &&
              el.planettwo === curElemTwo.planetTwo
            );
          });
          if (elFound !== undefined) {
            const elFoundKvOne = curArray.find(function (el) {
              return (
                el.planetone === elFound.planetone &&
                el.aspect === "квадратура" &&
                el.planettwo === curPlanet
              );
            });
            const elFoundKvTwo = curArray.find(function (el) {
              return (
                el.planetone === elFound.planettwo &&
                el.aspect === "квадратура" &&
                el.planettwo === curPlanet
              );
            });

            const elFoundKvThree = curArray.find(function (el) {
              return (
                el.planetone === curPlanet &&
                el.aspect === "квадратура" &&
                el.planettwo === elFound.planetone
              );
            });
            const elFoundKvFour = curArray.find(function (el) {
              return (
                el.planetone === curPlanet &&
                el.aspect === "квадратура" &&
                el.planettwo === elFound.planettwo
              );
            });
            if (elFoundKvOne !== undefined && elFoundKvTwo !== undefined) {
              if (arrayTauKvadrat.length === 0) {
                const newObj = {
                  planetOne: curPlanet,
                  planetTwo: elFoundKvOne.planetone,
                  planetThree: elFoundKvTwo.planetone,
                };
                arrayTauKvadrat.push(newObj);
              } else {
                const elFoundTau = arrayTauKvadrat.find(function (el) {
                  return (
                    el.planetOne === curPlanet &&
                    el.planetTwo === elFoundKvOne.planetone &&
                    el.planetThree === elFoundKvTwo.planetone
                  );
                });
                if (elFoundTau === undefined) {
                  const newObj = {
                    planetOne: curPlanet,
                    planetTwo: elFoundKvOne.planetone,
                    planetThree: elFoundKvTwo.planetone,
                  };
                  arrayTauKvadrat.push(newObj);
                }
              }
            }
            if (elFoundKvThree !== undefined && elFoundKvFour !== undefined) {
              if (arrayTauKvadrat.length === 0) {
                const newObj = {
                  planetOne: curPlanet,
                  planetTwo: elFoundKvThree.planettwo,
                  planetThree: elFoundKvFour.planettwo,
                };
                arrayTauKvadrat.push(newObj);
              } else {
                const elFoundTau = arrayTauKvadrat.find(function (el) {
                  return (
                    el.planetOne === curPlanet &&
                    el.planetTwo === elFoundKvThree.planettwo &&
                    el.planetThree === elFoundKvFour.planettwo
                  );
                });
                if (elFoundTau === undefined) {
                  const newObj = {
                    planetOne: curPlanet,
                    planetTwo: elFoundKvThree.planettwo,
                    planetThree: elFoundKvFour.planettwo,
                  };
                  arrayTauKvadrat.push(newObj);
                }
              }
            }
          } else {
            const elFound = curArray.find(function (el) {
              return (
                el.planetone === curElemTwo.planetTwo &&
                el.aspect === "оппозиція" &&
                el.planettwo === curElemOne.planetTwo
              );
            });
            if (elFound !== undefined) {
              const elFoundKvOne = curArray.find(function (el) {
                return (
                  el.planetone === elFound.planetone &&
                  el.aspect === "квадратура" &&
                  el.planettwo === curPlanet
                );
              });
              const elFoundKvTwo = curArray.find(function (el) {
                return (
                  el.planetone === elFound.planettwo &&
                  el.aspect === "квадратура" &&
                  el.planettwo === curPlanet
                );
              });

              const elFoundKvThree = curArray.find(function (el) {
                return (
                  el.planetone === curPlanet &&
                  el.aspect === "квадратура" &&
                  el.planettwo === elFound.planetone
                );
              });
              const elFoundKvFour = curArray.find(function (el) {
                return (
                  el.planetone === curPlanet &&
                  el.aspect === "квадратура" &&
                  el.planettwo === elFound.planettwo
                );
              });
              if (elFoundKvOne !== undefined && elFoundKvTwo !== undefined) {
                if (arrayTauKvadrat.length === 0) {
                  const newObj = {
                    planetOne: curPlanet,
                    planetTwo: elFoundKvOne.planetone,
                    planetThree: elFoundKvTwo.planetone,
                  };
                  arrayTauKvadrat.push(newObj);
                } else {
                  const elFoundTau = arrayTauKvadrat.find(function (el) {
                    return (
                      el.planetOne === curPlanet &&
                      el.planetTwo === elFoundKvOne.planetone &&
                      el.planetThree === elFoundKvTwo.planetone
                    );
                  });
                  if (elFoundTau === undefined) {
                    const newObj = {
                      planetOne: curPlanet,
                      planetTwo: elFoundKvOne.planetone,
                      planetThree: elFoundKvTwo.planetone,
                    };
                    arrayTauKvadrat.push(newObj);
                  }
                }
              }
              if (elFoundKvThree !== undefined && elFoundKvFour !== undefined) {
                if (arrayTauKvadrat.length === 0) {
                  const newObj = {
                    planetOne: curPlanet,
                    planetTwo: elFoundKvThree.planettwo,
                    planetThree: elFoundKvFour.planettwo,
                  };
                  arrayTauKvadrat.push(newObj);
                } else {
                  const elFoundTau = arrayTauKvadrat.find(function (el) {
                    return (
                      el.planetOne === curPlanet &&
                      el.planetTwo === elFoundKvThree.planettwo &&
                      el.planetThree === elFoundKvFour.planettwo
                    );
                  });
                  if (elFoundTau === undefined) {
                    const newObj = {
                      planetOne: curPlanet,
                      planetTwo: elFoundKvThree.planettwo,
                      planetThree: elFoundKvFour.planettwo,
                    };
                    arrayTauKvadrat.push(newObj);
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  return arrayTauKvadrat;
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

function getStandartDate(curDate) {
  let totalDate = "";

  const symYears = curDate.indexOf("-");
  if (symYears !== -1) {
    const totalYears = curDate.substr(0, symYears).trim();
    const nextStr = curDate.substr(symYears + 1).trim();
    const symMonth = nextStr.indexOf("-");
    if (symMonth !== -1) {
      const totalMonth = nextStr.substr(0, symMonth).trim();
      const nextStrDay = nextStr.substr(symMonth + 1).trim();
      const symDay = nextStrDay.indexOf("T");
      if (symDay !== -1) {
        const totalDay = nextStrDay.substr(0, symDay).trim();
        totalDate = totalDay + "." + totalMonth + "." + totalYears;
      }
    }
  }

  return totalDate;
}

function isEmptyDate(dateValue) {
  const dateWithoutSpaces = dateValue.trim();
  return dateWithoutSpaces === "";
}

function getFirstNumberDate(curDate) {
  let totalDate = "";

  const symYears = curDate.indexOf("-");
  if (symYears !== -1) {
    const totalYears = curDate.substr(0, symYears).trim();
    const nextStr = curDate.substr(symYears + 1).trim();
    const symMonth = nextStr.indexOf("-");
    if (symMonth !== -1) {
      const totalMonth = nextStr.substr(0, symMonth).trim();
      totalDate = "01." + totalMonth + "." + totalYears;
    }
  }

  return totalDate;
}

function myFuncClickPeriod(el) {
  const dateEmpty = isEmptyDate(dbInput.value);

  if (dateEmpty) {
    return;
  }

  const currentText = el.target.innerText;
  const symYears = currentText.indexOf("років");

  let countYears = 0;
  let countMonths = 0;

  if (symYears !== -1) {
    const textYears = currentText.substr(0, symYears - 1).trim();
    countYears = parseInt(textYears);
    const nextStr = currentText.substr(symYears).trim();
    const newNextStr = nextStr.replace("років", "").trim();
    const totalStr = newNextStr.replace("місяців", "").trim();
    countMonths = parseInt(totalStr);
  }

  const dateValue = dbInput.value;
  const strDate = getStrDate(dateValue, countYears, countMonths);
  const standartDate = getStandartDate(strDate);
  alert(standartDate);
}

function getNewDateForEvent(dateValue, year, month) {
  const strDate = getStrDate(dateValue, year, month);
  return getFirstNumberDate(strDate);
}

function getStrDate(dateValue, year, month) {
  const newDate = new Date(dateValue);
  newDate.setFullYear(
    newDate.getFullYear() + (year - 1),
    newDate.getMonth() + month
  );
  const strDate = newDate.toISOString();
  return strDate;
}

function getDateAnalyz(curDate) {
  const objDate = new Date(curDate);

  const year = String(objDate.getFullYear());

  const months = String(objDate.getMonth() + 1);

  const totalmonths = addZero("month", months);

  const totalYears = addZero("year", year);

  return "01." + totalmonths + "." + totalYears;
}

function addZero(typeDate, datePart) {
  const countSim = datePart.length;

  let countZero = 0;

  if (typeDate === "month") {
    countZero = 2 - countSim;
  } else {
    countZero = 4 - countSim;
  }

  let arrayZero = "";
  for (let i = 1; i <= countZero; i += 1) {
    arrayZero = arrayZero + "0";
  }
  return arrayZero + datePart;
}
