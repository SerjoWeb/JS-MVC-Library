# MVC JS LIbrary
## Base template (beta)

[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://travis-ci.org/joemccann/dillinger)

MVC JS Library.
Simple and smallest JS Lib to start developing front end templates.
Without using any of additional js libs.

- Pure JavaScript
- ECMA SCRIPT latest
- Gulp
- Gulp Uglify
- Sass
- Babel
- Browser Sync
- Browserify

Beta version 1.0
Under development, free license.

## How to use

- Clone or download zip
- Do npm install
- Start developing

```sh
 1. git clone https://github.com/SerjoWeb/front-end-easy-template-MVC.git
 2. cd front-end-easy-template-MVC
 3. npm install
 4. gulp
```

## Structure

| Path | Description |
| ------ | ------ |
| ``` assets ``` | Contains: ``` js, css, img, fonts ``` folders |
| ``` app ``` | Contains: ``` controllers, models, views, sass ``` folders |

``` Assets ``` - all files using for production
``` App ``` - all files we use for development (dev)

## Demo code

### Main structure of ``` index.html ```

```sh
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Document</title>

	<link rel='stylesheet' href='/assets/css/app.css'>
</head>
<body>
	<div id='root'></div>

	<script type='text/javascript' src='/assets/js/app.js'></script>
</body>
</html>
```

### Main structure of ``` app/controllers (index.js)```

```sh
import ModelTest from '../../models/model-test';

const ControllerTest = {
    init() {
        return ModelTest.getData();
    }
};

export default ControllerTest;
```

### Main structure of ``` app/models  (index.js)```

```sh
const ModelTest = {
    getData() {
        return {
            users: [
                {
                    name: 'Jack',
                    email: 'jack@gmail.com',
                    phone: '89112345678'
                },
                {
                    name: 'John',
                    email: 'john@gmail.com',
                    phone: '89213457869'
                },
                {
                    name: 'Julie',
                    email: 'julie@gmail.com',
                    phone: '89814526545'
                }
            ]
        };
    }
};

export default ModelTest;
```

### Main structure of ``` app/views  (index.js)```

```sh
import ControllerTest from '../../controllers/controller-test';

const ViewTest = {
    render() {
        return ControllerTest.init().users.map((item) => {
            return `
                <div class='user'>
                    <ul>
                        <li>Name: ${item.name}</li>
                        <li>Email: ${item.email}</li>
                        <li>Phone: ${item.phone}</li>
                    </ul>
                </div>
            `;
        });
    }
};

export default ViewTest;
```

## Project

- On opensource project
- Practicing and learning
- Training with additional JS Libs