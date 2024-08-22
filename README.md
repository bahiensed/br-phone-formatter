# br-phone-formatter

A simple utility to parse and format Brazilian phone numbers.  
Works in JavaScript and TypeScript.

## Installation

You can install the package using npm:

```bash
npm install br-phone-formatter
```

## Usage

#### In JavaScript: 

```bash
const { formatPhoneNumber } = require('br-phone-formatter');

const formattedNumber = formatPhoneNumber('21992534567');
console.log(formattedNumber); // Output: (21) 99253-4567
```

#### In TypeScript: 

```bash
import { formatPhoneNumber } from 'br-phone-formatter';

const formattedNumber: string = formatPhoneNumber('21992534567');
console.log(formattedNumber); // Output: (21) 99253-4567
