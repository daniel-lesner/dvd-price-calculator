# DVD Price Calculator

A price calculator for a fictional basket of DVD movies made with Node.js.

## Table of Contents

- [Description](#description)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Testing](#testing)
- [Contributing](#contributing)
- [License](#license)

## Description

By submitting a .txt file containing movies separated by a newline, the application will return the total price of the basket, taking into account a super discount on the purchase of multiple items from the Back to the Future saga.

## Prerequisites

- Node.js (v22.5.1 used for development)
- npm (v10.8.2 used for development)

## Installation

```zsh
git clone https://github.com/daniel-lesner/dvd-price-calculator.git
cd dvd-price-calculator
npm i
```

- last command is optional to install dev dependencies.

## Usage

```zsh
node src/index.js input.txt
```

## Tests

Tests are created using [Jest.js](https://jestjs.io).

```bash
npm run test
```

## Contributing

Anyone can contribute to this project, feel free to open a pull request!

## License

DVD Price Calculator is available under the [MIT license](https://opensource.org/licenses/MIT).
