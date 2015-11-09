# basicGrid

A Foundation-like grid as a standalone module.

## Contents

- [Setup](#setup)
- [How to use](#how-to-use)
	- [Settings](#settings)
	- [Basics](#basics)
	- [Sizes and Breakpoints](#sizes-and-breakpoints)
	- [Offset](#offset)
	- [Show and hide](#show-and-hide)
	- [Push and pull](#push-and-pull)

## Setup

We recommend to install basicGrid using [Bower](http://bower.io/) or [npm](https://npmjs.com).

```sh
bower install basicGrid
```
```sh
npm install basicgrid
```

Include the CSS-files in the `head`:

```html
<link rel="stylesheet" href="dist/basicGrid.min.css">
```

## How to use

### Settings

Import `src/styles/main.scss` directly to customize the grid:

```scss
$maxWidth : 1280px; // Maximum width of a row
$columns  : 12; // Number of columns
$gutter   : 1.8rem; // Size of the gaps between columns

// Column-Breakpoints
$sizes: (
	'small'  : 0px,
	'medium' : 640px,
	'large'  : 1024px
);

@import "src/styles/main";
```

### Basics

- You can fill a row with up to twelve columns. Columns without a specified size will fill an entire row.
- The last column of a row will float to the right, to work around different rounding behaviors.
- basicGrid is mobile-first. Smaller breakpoints will automatically apply on all larger sizes.
- Classes are generated from the names and sizes in the `$sizes` map.

### Sizes and Breakpoints

Specify the widths of each column with the `small-`, `medium-`, and `large-` classes.

```html
<div class="row">
	<div class="column small-1 medium-6 large-6"></div>
	<div class="column small-1 medium-6 large-6"></div>
	<div class="column small-1 medium-4 large-6"></div>
	<div class="column small-1 medium-4 large-6"></div>
	<div class="column small-1 medium-4 large-6"></div>
	<div class="column small-1 medium-6 large-6"></div>
	<div class="column small-1 medium-6 large-6"></div>
	<div class="column small-1 medium-4 large-6"></div>
	<div class="column small-1 medium-4 large-6"></div>
	<div class="column small-1 medium-4 large-6"></div>
	<div class="column small-1 medium-6 large-6"></div>
	<div class="column small-1 medium-6 large-6"></div>
</div>
```

### Offset

Use offset-classes to move columns to the right.

```html
<div class="row">
	<div class="column small-1"></div>
	<div class="column small-1 small-offset-1"></div>
	<div class="column small-1"></div>
	<div class="column small-1 small-offset-3"></div>
	<div class="column small-1"></div>
	<div class="column small-1"></div>
	<div class="column small-1"></div>
	<div class="column small-1"></div>
</div>
```

### Show and hide

`show-on-` and `hide-on-` allow you to show and hide individual columns.

```html
<div class="row">
	<div class="column small-6 hide-on-small show-on-large"></div>
	<div class="column small-2 hide-on-large"></div>
	<div class="column small-1 hide-on-large"></div>
	<div class="column small-1 hide-on-large"></div>
	<div class="column small-1 hide-on-large"></div>
	<div class="column small-1 hide-on-large"></div>
	<div class="column small-1 hide-on-large"></div>
	<div class="column small-1 hide-on-large"></div>
	<div class="column small-1 hide-on-large"></div>
	<div class="column small-1 hide-on-large"></div>
	<div class="column small-2 hide-on-large"></div>
	<div class="column small-6 hide-on-small show-on-large"></div>
</div>
```

### Push and pull

Shift columns around between breakpoints using `-push-` and `-pull-`. Especially helpful if you want to modify the order of columns based on the size of the screen.

```html
<div class="row">
	<div class="column small-10 small-push-2"></div>
	<div class="column small-2 small-pull-10"></div>
</div>
```