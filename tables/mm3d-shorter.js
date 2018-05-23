var bingoList = [];
bingoList[1] = [
  { name: "Check a Mailbox", types: ["mailbox"] },
  { name: "Backflip over Inn Desk", types: ["ect", "inn"] }
];
bingoList[2] = [
  { name: "Get a Recovery Heart", types: ["health"] },
  { name: "Bonk the Inn Bell", types: ["ect", "inn"] },
  { name: "Talk to Mask Salesman", types: ["sct"] }
];
bingoList[3] = [
  { name: "Go down the NCT Slide", types: ["nct"] },
  { name: "Bonk the Gong", types: ["wct"] },
  { name: "Visit all Clock Town Areas", types: ["ct"] }
];
bingoList[4] = [
  { name: "Stray Fairy", types: ["ect", "pool"] },
  { name: "Talk to the Mayor", types: ["npc", "ect"] }
];
bingoList[5] = [
  { name: "Talk to Toto", types: ["npc", "ect"] },
  { name: "Deposit 64 Rupees in Bank", types: ["bank"] }
];
bingoList[6] = [
  { name: "Bomb Bag", types: ["bombs"] },
  { name: "Dance w/ Scarecrow", types: ["wct", "scarecrow"] },
  { name: "Pop the Bomber's Balloon", types: ["nct"] }
];
bingoList[7] = [
  // { name: "Room Key", types: ["inn"] }, NEEDS GORON
  { name: "Read Every WCT Sign", types: ["wct"] },
  { name: "Read Every ECT Sign", types: ["ect"] }
];
bingoList[8] = [
  { name: "Skull Kid Drawing Rupees", types: ["field"] },
  { name: "Try Bomber Code 33333", types: ["bombers"] }
];
bingoList[9] = [
  { name: "Swordsman Novice", types: ["minigame"] },
  // { name: "Indextrick", types: ["trick"] }
  { name: "Do a Mask Jump", types: ["trick"] },
  { name: "Visit all buildings in WCT", types: ["wct"] }
];
bingoList[10] = [
  { name: "Die", types: ["die", "field"] },
  { name: "Visit all buildings in ECT", types: ["ect"] },
  { name: "Talk to 2 Dekus", types: ["npc", "nct"] }
];
bingoList[11] = [
  { name: "3 Masks", types: ["mask", "masks"] },
  { name: "Kill an Enemy", types: ["field"] }
];
bingoList[12] = [
  { name: "Watch the Skull Kid cutscene", types: ["field"] }
];
bingoList[13] = [
  { name: "Talk to Postman", types: ["npc", "postman"] }
];
bingoList[14] = [
  { name: "2 Heart Pieces", types: ["hp"] },
  { name: "Hit an Owl Statue", types: ["owl", "sct"] },
  { name: "Win a H&D Game", types: ["minigame"] }
];
bingoList[15] = [
  { name: "Buy 2 Maps", types: ["nct", "tingle", "rupees"] },
  { name: "Learn Scarecrow's Song", types: ["wct", "scarecrow"] }
];
bingoList[16] = [
  { name: "4 Masks", types: ["mask", "masks"] },
  { name: "3 Notebook Ribbons", types: ["notebook", "ribbons"] }
];
bingoList[17] = [
  { name: "Win a Chest Game", types: ["minigame"] },
  { name: "Adult Wallet", types: ["bank", "rupees"] },
  { name: "Hit Sakon", types: ["nct", "time"] }
];
bingoList[18] = [
  { name: "Buy 3 Items", types: ["rupees"] },
  { name: "Mental Training HP", types: ["hp", "minigame", "postman"] }
];
bingoList[19] = [
  { name: "Talk to 2 Gorons", types: ["time"] },
  { name: "No Song of Time (Any)", types: ["restrict", "time"] }
];
bingoList[20] = [
  { name: "Stop Time", types: ["trick", "hover1", "hover2"] }
];
bingoList[21] = [
  { name: "Get Cursed", types: ["ikana"] }
];
bingoList[22] = [
  { name: "Store a Song", types: ["trick", "hover1", "hover2"] }
];
bingoList[23] = [
  { name: "Crash the Moon", types: ["time", "die"] }
];
bingoList[24] = [
  { name: "4 Notebook Ribbons", types: ["notebook", "ribbons"] }
];
bingoList[25] = [
  { name: "5 Masks", types: ["mask", "masks"] }
];

$(function() { srl.bingo(bingoList, 5); });