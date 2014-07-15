// 1. Define days of week array
var days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

// 2. Move Sunday to the beginning of the array
days.unshift(days.pop());

// 3. Make Thursday uppercase
var thursdayIndex = days.indexOf('Thursday');
days[thursdayIndex] = days[thursdayIndex].toUpperCase();

// 4. Define nested days of week
var nestedDays = [
  ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
  ['Saturday', 'Sunday']
];

// 5. Change the name of Wednesday
wednesdayIndex = nestedDays[0].indexOf('Wednesday');
nestedDays[0][wednesdayIndex] = "Woden's Day";

// 6. Remove weekdays from nested array
nestedDays.shift();

// 7. Sort the original list of days
days.sort();

// 8. Print out sorted days on their own lines
days.forEach(function(day){
  console.log(day);
});
