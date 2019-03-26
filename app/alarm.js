// eslint-disable-next-line no-unused-vars
const peopleThatHaveUsedAlarm = [
  { name: "James", wakeUpTime: 7 },
  { name: "Susan", wakeUpTime: 13 },
  { name: "Geoff", wakeUpTime: 14 },
  { name: "Lisa", wakeUpTime: 6 }
];

function wakeup(currentTime) {
  const currentHour = currentTime.getHours();
  switch (currentHour().gethours()) {
    case 0:
      Hour = 6;
      return "Ugggggh its too early - I'm not waking up yet";
      break;
    case 1:
      Hour = 7;
      return "Ugggggh its too early - I'm not waking up yet";
      break;
    case 2:
       Hour = 8;
       return "Ugggggh its too early - I'm not waking up yet";
      break;
    case 3:
      Hour = 9;
      return "Ugggggh its too early - I'm not waking up yet";
      break;
    case 4:
      Hour = 10;
      return "Ugggggh its too early - I'm not waking up yet";
      break;
    case 5: 
      Hour =>11;
      break;
      return "Get up!! You're wasting the day";
  }
}

function snooze() {
while (snooze <=20){
  return snooze;
}
}

function isLunchtime (time){
  let hours=time.getHours();

  if (hours === 12|| hours === 13 | hours === 14){
    return "Yesssss its lunch!!!";
  }
  else {
    return "No get back to work";
  }
  }

function isNotLunchtime (time){
  let hours=time.getHours();
  if (hours = 11 > 12)
  return "No get back to work";
}

function alarmUsers (){
peopleThatHaveUsedAlarm.forEach(function() {
  return(names);
});




module.exports = {
  wakeup,
  snooze,
  isLunchtime,
  isNotLunchtime,
  alarmUsers,
}
}
