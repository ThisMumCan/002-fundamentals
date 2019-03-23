const alarm = require('../app/alarm');

test('Moans if too early', () => {
  let timeNow = new Date();
  timeNow.setHours(11);
  expect(alarm.wakeup(timeNow)).toBe("Ugggggh its too early - I'm not waking up yet");
});

test('Snoozing for a set amount', () => {
  expect(alarm.snooze()).toBe(10);
});

test('Check is it lunch',() =>{
  let timeNow = new Date ();
  timeNow.setHours(15);
  expect (alarm.isLunchtime (timeNow)).toBe ("Yesssss its lunch!!!");
});

test ('Check it is not lunch', () =>{
  let timeNow = new Date ();
  timeNow.setHours(15);
  expect (alarm.isLunchtime (timeNow)).toBe ("No get back to work");
});


