
// 1. Get the Current Date and Time
let nowdate = new Date();
console.log('Current Date and Time:', nowdate); 
// The above code creates a new Date object representing the current date and time.
// The output will look something like: "Tue Aug 13 2024 10:15:30 GMT+0000 (UTC)"

// 2. Create a Specific Date and Time
let specifiedDate = new Date('2024-05-18T14:30:00');
console.log('Specific Date:', specifiedDate); 
// This creates a Date object for a specific date and time provided as a string in ISO format.
// The output will be the date and time specified: "Sat May 18 2024 14:30:00 GMT+0000 (UTC)"

// 3. Create a Date Using Year, Month, Day, etc.
let ymdhmsDate = new Date(2024, 4, 18, 14, 30, 0, 0); 
console.log('Year, Month, Day, etc:', ymdhmsDate); 
// The Date constructor can also take individual components as parameters.
// Note: Months are 0-based, so 4 represents May.
// The output will be: "Sat May 18 2024 14:30:00 GMT+0000 (UTC)"

// 4. Extract Date and Time Components
let date = new Date();
console.log('Year:', date.getFullYear());          // Returns the full year (e.g., 2024)
console.log('Month:', date.getMonth());            // Returns the month (0-based, e.g., 4 for May)
console.log('Day of the Month:', date.getDate());  // Returns the day of the month (1-31)
console.log('Day of the Week:', date.getDay());    // Returns the day of the week (0-6, where 0 is Sunday)
console.log('Hours:', date.getHours());            // Returns the hour of the day (0-23)
console.log('Minutes:', date.getMinutes());        // Returns the minutes (0-59)
console.log('Seconds:', date.getSeconds());        // Returns the seconds (0-59)
console.log('Milliseconds:', date.getMilliseconds()); // Returns the milliseconds (0-999)
console.log('Milliseconds since Epoch:', date.getTime()); 
// getTime() returns the number of milliseconds since January 1, 1970 (Unix Epoch).

// 5. Set Date and Time Components
date.setFullYear(2025);
date.setMonth(11); // December (Months are 0-based)
date.setDate(25);
date.setHours(10);
date.setMinutes(30);
date.setSeconds(0);
date.setMilliseconds(0);
console.log('Updated Date:', date); 
// The date object now represents December 25, 2025, 10:30:00 AM.
// The output will be: "Thu Dec 25 2025 10:30:00 GMT+0000 (UTC)"

// 6. Formatting Dates
console.log('Date String:', date.toDateString());             // Outputs just the date part in a human-readable form.
console.log('Time String:', date.toTimeString());             // Outputs just the time part in a human-readable form.
console.log('Locale Date String:', date.toLocaleDateString()); // Outputs the date in a format specific to the locale (e.g., "12/25/2025" in the US).
console.log('Locale Time String:', date.toLocaleTimeString()); // Outputs the time in a format specific to the locale.
console.log('Locale String:', date.toLocaleString());          // Outputs both the date and time in a locale-specific format.
console.log('ISO String:', date.toISOString());                // Outputs the date and time in ISO format, useful for storage and communication.
console.log('UTC String:', date.toUTCString());                // Outputs the date and time in UTC format.

// 7. Date Arithmetic - Adding/Subtracting Time
let today = new Date();
let tomorrow = new Date(today.getTime() + (24 * 60 * 60 * 1000)); 
console.log('Tomorrow:', tomorrow); 
// Adding 24 hours (in milliseconds) to the current time gives us the same time on the next day.

let nextWeek = new Date(today.getTime() + (7 * 24 * 60 * 60 * 1000)); 
console.log('Next Week:', nextWeek); 
// Adding 7 days worth of milliseconds gives us the same time on the same day next week.

// 8. Parsing Date Strings
let dateFromString = new Date('2024-05-18T14:30:00');
console.log('Parsed Date from String:', dateFromString); 
// Creates a date object from an ISO format string.

let dateFromLocaleString = new Date('May 18, 2024 14:30:00');
console.log('Parsed Date from Locale String:', dateFromLocaleString); 
// Parses a date from a string formatted in a more human-readable way.

// 9. Comparing Dates
let date1 = new Date('2024-05-18T14:30:00');
let date2 = new Date('2024-05-19T14:30:00');

console.log('Is date1 > date2?:', date1 > date2);  // false, because May 18 is earlier than May 19
console.log('Is date1 < date2?:', date1 < date2);  // true, because May 18 is earlier than May 19
console.log('Are date1 and date2 equal?:', date1.getTime() === date2.getTime()); 
// false, because the two dates represent different moments in time.

// 10. Simplified Examples
let now = new Date();
console.log('Current Date:', now.toLocaleString());
// Outputs the current date and time in a readable format according to the user's locale.

let specificDate = new Date('2024-05-18T14:30:00');
console.log('Specific Date:', specificDate.toLocaleString());
// Outputs the specific date and time you created in a readable format.

specificDate.setFullYear(2025);
console.log('Updated Year:', specificDate.toLocaleString());
// Outputs the date with the year updated to 2025.

let oneDayLater = new Date(specificDate.getTime() + 24 * 60 * 60 * 1000); 
console.log('One Day Later:', oneDayLater.toLocaleString());
// Adds one day to the updated date and outputs the result.

let comparison = specificDate > oneDayLater ? 'Specific Date is later' : 'One Day Later is later';
console.log(comparison); 
// Compares the two dates and outputs which one is later.