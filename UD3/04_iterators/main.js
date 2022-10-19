'use strict'

const assert = require('assert').strict;

var pilots = [
  {
    id: 2,
    name: "Wedge Antilles",
    faction: "Rebels",
    years: 10
  },
  {
    id: 8,
    name: "Ciena Ree",
    faction: "Empire",
    years: 20
  },
  {
    id: 40,
    name: "Iden Versio",
    faction: "Empire",
    years: 30
  },
  {
    id: 66,
    name: "Thane Kyrell",
    faction: "Rebels",
    years: 35
  }
];

function iterateSimple() {
  for (let index = 0; index < pilots.length; index++) {
    const element = pilots[index];
    console.log(element);
  }
}

function iterateForEach() {
  // object.forEach(element => {
  //   console.log(element);
  // });
  pilots.forEach(element => console.log(element));
}

function mapIds() {
  // let arrayIds = pilots.map(pilot => pilot.id)
  // return arrayIds
  return pilots.map(x => x.id)
}

function rebels() {
  return pilots.filter(element => element.faction ==='Rebels')
}

function totalFaction(faction) {
  return (pilots.filter(element => element.faction === faction)).length
}

function avgYears(faction) {
//   return pilots .filter(x => x.faction === faction)
//   .reduce((a, b) => a + b.years, 0) 
//   / pilots.filter(x => x.faction === faction).length
  console.log(pilots.filter(x => x.faction === faction))

  console.log(pilots.filter(x => x.faction === faction)
  .reduce((a, b) => a + b.years, 0) )
}

// use console.log
// iterateSimple(pilots)
// iterateForEach(pilots)
// mapIds(pilots)

avgYears('Empire')
// try {
  // assert.deepStrictEqual(mapIds(pilots), [2,8,40,66])
//   // assert.deepStrictEqual(rebels(), [pilots[0], pilots[3]])
//   // assert.deepStrictEqual(totalFaction('Rebels'), 2)
//   // assert.deepStrictEqual(avgYears('Rebels'), 22.5)
  // assert.deepStrictEqual(avgYears('Empire'), 25)
// } catch (error) {
//   console.error(error)
// }