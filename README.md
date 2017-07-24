# Frontend Boilerplate

My personal boilerplate for frontend web development using gulp, pug, and SCSS. It provides a basic skeleton for a project with a predefined gulpfile to make developing and testing websites easy.

## Getting Started

These instructions will get you a copy of the project for you to use in your own web development projects.

### Prerequisites

NPM and Bower are required for this project. Install NPM [here](https://www.npmjs.com/get-npm) and install Bower [here](https://bower.io).

### Installing

Simply clone this repository into your project folder using:

```
$ git clone https://github.com/jeffreyshen19/frontend-boilerplate [your-folder-name]
```

Then install the packages by running:

```
$ npm install
$ bower install
```

### Configuration

This boilerplate contains a pug layout file that can be extended as a template for your pages. Configure the layout using the config.pug file located in the root directory. This configures the meta tags.

The layout file automatically includes bootstrap, jquery, and font awesome, so you don't need to include them yourself.

## Usage

### Using the layout

In your pug files, you can use the layout by writing:

```
extends includes/layout.pug
```

Then, write all your pug within each block. For example:

```
block title
  title This is a title
```

You can read more about pug inheritance [here](https://pugjs.org/language/inheritance.html).

### Project Structure

* **Assets**: Put all non-image assets here (i.e. fonts)
* **dist**: This is where all your SCSS and Javascript gets minified and compiled to. When including your CSS and Javascript in your website, it should reference this folder.
* **src**: This is where you write your code.
  * **images**: Place your uncompress images here. They will be compressed to "dist/images"
  * **JS**: Write your javascript here.
  * **SCSS**: Write your Sass here
  * **views**: Write your pug files here. They will compile to the root directory.

### Running the project

Call `gulp` to start the project. It will open an automatically-reloading webserver on localhost:8000.

It will automatically minify and compile your SCSS, JS, and images as they are edited.


### All commands

Calling `gulp` should do everything you need, but if you need more control, here is the list of all commands:

* `gulp lint`: Runs the linter
* `gulp compresspug`: Converts the pug files into HTML
* `gulp imagemin`: Compresses the images to save storage and speed up load times.
* `gulp compressjs`: Minifies javascript.
* `gulp sass`: Compiles SCSS

## Authors

* **Jeffrey Shen**

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details
