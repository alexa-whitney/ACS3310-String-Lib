# String-o-Matic

[![npm version](https://img.shields.io/npm/v/string-o-matic.svg)](https://www.npmjs.com/package/string-o-matic)
[![npm downloads](https://img.shields.io/npm/dt/string-o-matic.svg)](https://www.npmjs.com/package/string-o-matic)

[NPM Package](https://www.npmjs.com/package/string-o-matic)

A vibrant toolkit for your text transformations! Whether you're capitalizing, kebob-casing, or hunting for pesky extra spaces, String-o-Matic has got your back. Dive into a textual adventure with the most fun you've ever had with strings. 🎉📝

## Functions

### `capitalize(str)`

Converts the first character of the given string to uppercase.

- **Parameters:**
  - `str` (String): The string to capitalize.
- **Returns:** 
  - The capitalized string.

---

### `allCaps(str)`

Converts the entire string to uppercase.

- **Parameters:**
  - `str` (String): The string to convert.
- **Returns:** 
  - The string in all uppercase.

---

### `capitalizeWords(str)`

Capitalizes the first character of each word in the string.

- **Parameters:**
  - `str` (String): The string with words to capitalize.
- **Returns:** 
  - The string with capitalized words.

---

### `capitalizeHeadline(str)`

Capitalizes the first character of each word in the string, except for certain exceptions (e.g., 'the', 'and').

- **Parameters:**
  - `str` (String): The string with words to capitalize.
- **Returns:** 
  - The string with headline-style capitalization.

---

### `removeExtraSpaces(str)`

Removes extra spaces from the string.

- **Parameters:**
  - `str` (String): The string to process.
- **Returns:** 
  - The string without extra spaces.

---

### `advancedRemoveExtraSpaces(str)`

Removes extra spaces and other whitespace characters (e.g., tabs, newlines) from the string.

- **Parameters:**
  - `str` (String): The string to process.
- **Returns:** 
  - The string without extra spaces and other whitespace characters.

---

### `kebobCase(str)`

Converts the string to kebob-case.

- **Parameters:**
  - `str` (String): The string to convert.
- **Returns:** 
  - The string in kebob-case.

---

### `snakeCase(str, separator)`

Converts the string to snake_case or allows for a custom separator.

- **Parameters:**
  - `str` (String): The string to convert.
  - `separator` (String, Optional): The custom separator. Default is "_".
- **Returns:** 
  - The string in snake_case or with the custom separator.

---

### `camelCase(str)`

Converts the string to camelCase.

- **Parameters:**
  - `str` (String): The string to convert.
- **Returns:** 
  - The string in camelCase.

---

### `shift(str, n)`

Shifts the characters of the string by the specified amount.

- **Parameters:**
  - `str` (String): The string to shift.
  - `n` (Number, Optional): The number of characters to shift. Default is 1.
- **Returns:** 
  - The shifted string.

---

### `makeHashTag(str)`

Creates hash tags from the string. If there are more than three words, it picks the three longest words.

- **Parameters:**
  - `str` (String): The string to create hash tags from.
- **Returns:** 
  - An array of hashtags.

---

### `isEmpty(str)`

Checks if the string is empty or contains only whitespace characters.

- **Parameters:**
  - `str` (String): The string to check.
- **Returns:** 
  - `true` if the string is empty or contains only whitespace characters, `false` otherwise.

---