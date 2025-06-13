const buildings = {
  militaryOffice: { level: 0, maxLevel: 10, cost: { gold: 1000 }, type: 'gold' },
  commandPost: { level: 0, maxLevel: 10, cost: { gold: 1200 }, type: 'gold' },
  troopFactory: { level: 0, maxLevel: 10, cost: { steel: 500, aluminum: 300, fuel: 200 }, type: 'resource' },
  flakBuilding: { level: 0, maxLevel: 10, cost: { concrete: 400, steel: 200, aluminum: 100 }, type: 'resource' },
  combatHQ: { level: 0, maxLevel: 3, cost: { gold: 2000 }, type: 'gold', mpPerLevel: 500 }
};

function build(type) {
  const b = buildings[type];
  if (b.level >= b.maxLevel) {
    alert(type + " is already at max level.");
    return;
  }
  b.level++;
  display();
}

function display() {
  const div = document.getElementById('buildings');
  div.innerHTML = "";
  for (let key in buildings) {
    const b = buildings[key];
    div.innerHTML += `<p>${key}: Level ${b.level}/${b.maxLevel}${b.mpPerLevel ? ` (MP: ${b.level * b.mpPerLevel})` : ""}</p>`;
  }
}

display();
    
