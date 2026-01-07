const fakeCitizens = [
  {
    name: "Sample Citizen 001",
    nic: "XXXXXXXXV",
    phone: "+94 7X XXX XXXX",
    location: "Colombo District"
  },
  {
    name: "Sample Citizen 014",
    nic: "XXXXXXXXX",
    phone: "+94 7X XXX XXXX",
    location: "Galle District"
  },
  {
    name: "Sample Citizen 032",
    nic: "XXXXXXXXV",
    phone: "+94 7X XXX XXXX",
    location: "Kandy District"
  },
  {
    name: "Sample Citizen 047",
    nic: "XXXXXXXXX",
    phone: "+94 7X XXX XXXX",
    location: "Jaffna District"
  }
];

function randomCitizen() {
  return fakeCitizens[Math.floor(Math.random() * fakeCitizens.length)];
}
