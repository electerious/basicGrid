# basicGrid

A Foundation-like grid as a standalone module.

## Contents

- [Demos](#demos)
- [Setup](#setup)
- [How to use](#how-to-use)
	- [Basics](#basics)
	- [Sizes and Breakpoints](#sizes-and-breakpoints)
	- [Offset](#offset)
	- [Show and hide](#show-and-hide)
	- [Push and pull](#push-and-pull)
	- [Flexbox](#flexbox)
	- [Direction](#direction)
	- [Alignment](#alignment)
- [Options](#options)

## Demos

| Name | Description | Link |
|:-----------|:------------|:------------|
| Default | Includes all features and most column variations. | [Demo](http://codepen.io/electerious/pen/pjOvPZ) |

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

### Flexbox

`flex-on-` adds the `display: flex` property to a row and enables the use of additional classes. Columns will have the same height when active. Use `block-on-` to disable Flexbox.

```html
<div class="row block-on-small flex-on-medium">
	<div class="column medium-6"></div>
	<div class="column medium-6"></div>
</div>
```

### Direction

Define the direction columns are placed in a row using `ltr-on-` and `rtl-on-`. Defaults to `ltr-on-` and only works when `flex-on-` applies to the row.

```html
<div class="row flex-on-small ltr-on-small rtl-on-medium">
	<div class="column small-6"></div>
	<div class="column small-6"></div>
</div>
```

### Alignment

`top-on-`, `center-on-` and `bottom-on-` change the alignment of all columns in a row. Defaults to `stretch-on-` and only works when `flex-on-` applies to the row.

```html
<div class="row flex-on-small top-on-small center-on-medium bottom-on-large">
	<div class="column small-6"></div>
	<div class="column small-6"></div>
</div>
```

## Options

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