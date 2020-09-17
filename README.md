# missing-person-404

> A simple 404 page that displays missing persons data instead of the same ole 404

[![NPM](https://img.shields.io/npm/v/missing-person.svg)](https://www.npmjs.com/package/missing-person) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save missing-person
```

## Usage

```jsx
import React, { Component } from 'react'

import PageNotFound from 'missing-person'

class Example extends Component {
  render() {
    return <PageNotFound />
  }
}
```

## Customizable features:
  To change the background color of the header, buttons and button text:
  ```jsx
  <PageNotFound color='desired color value here' btnColor='purple' btnTxtColor='hot pink'>
  ```
  To change search parameters to return children under the age of 18:
  ```jsx
  <PageNotFound child='true'>
  ```
  **Note that you must pass true as a string**

  The API will return 500 randomized records. The records are further randomized on the front end. 
## For any issues, or for feature requests please reach out to me:

[rdturner40@gmail.com](mailto:rdturner40@gmail.com)
Git-hub: [Too-Far](https://github.com/Too-Far)
Repo: [Missing-Person](https://github.com/Too-Far/missing-person-404)

## License

MIT © [Too-Far](https://github.com/Too-Far)
