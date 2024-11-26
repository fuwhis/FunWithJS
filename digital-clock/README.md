### Syntax

```javascript
toLocaleTimeString()
toLocaleTimeString(locales)
toLocaleTimeString(locales, options)
```

### Using locales

This example shows some of the variations in localized time formats. In order to get the format of the language used in the user interface of your application, make sure to specify that language (and possibly some fallback languages) using the `locales` argument:

```javascript
const date = new Date(Date.UTC(2012, 11, 20, 3, 0, 0))

// formats below assume the local time zone of the locale;
// America/Los_Angeles for the US

// US English uses 12-hour time with AM/PM
console.log(date.toLocaleTimeString('en-US'))
// "7:00:00 PM"

// British English uses 24-hour time without AM/PM
console.log(date.toLocaleTimeString('en-GB'))
// "03:00:00"

// Korean uses 12-hour time with AM/PM
console.log(date.toLocaleTimeString('ko-KR'))
// "오후 12:00:00"

// Arabic in most Arabic speaking countries uses real Arabic digits
console.log(date.toLocaleTimeString('ar-EG'))
// "٧:٠٠:٠٠ م"

// when requesting a language that may not be supported, such as
// Balinese, include a fallback language, in this case Indonesian
console.log(date.toLocaleTimeString(['ban', 'id']))
// "11.00.00"
```

### Using options

The results provided by `toLocaleTimeString()` can be customized using the options parameter:

```javascript
const date = new Date(Date.UTC(2012, 11, 20, 3, 0, 0))

// An application may want to use UTC and make that visible
const options = { timeZone: 'UTC', timeZoneName: 'short' }
console.log(date.toLocaleTimeString('en-US', options))
// "3:00:00 AM GMT"

// Sometimes even the US needs 24-hour time
console.log(date.toLocaleTimeString('en-US', { hour12: false }))
// "19:00:00"

// Show only hours and minutes, use options with the default locale - use an empty array
console.log(date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }))
// "20:01"
```
