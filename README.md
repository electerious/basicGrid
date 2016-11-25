# basicGrid

[![Dependencies](https://david-dm.org/electerious/basicgrid.svg)](https://david-dm.org/electerious/basicgrid.svg#info=dependencies) [![Donate via Flattr](https://img.shields.io/badge/flattr-donate-009cde.svg)](https://flattr.com/profile/electerious) [![Donate via PayPal](https://img.shields.io/badge/paypal-donate-009cde.svg)](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=CYKBESW577YWE)

A Foundation-like grid system based on the `flex` display property.

## Contents

- [Demos](#demos)
- [Setup](#setup)
- [How to use](#how-to-use)
	- [Basics](#basics)
	- [Sizes and Breakpoints](#sizes-and-breakpoints)
	- [Horizontal Alignment](#horizontal-alignment)
	- [Vertical Alignment](#vertical-alignment)
	- [Direction](#direction)
	- [Order](#order)
	- [Offset](#offset)
	- [Push and pull](#push-and-pull)
	- [Show and hide](#show-and-hide)
- [Options](#options)

## Demos

| Name | Description | Link |
|:-----------|:------------|:------------|
| Default | Includes all features and most column variations. | [Try it on CodePen](https://codepen.io/electerious/pen/pjOvPZ) |
| Equal height boxes | Simple boxes with an equal height and a background. | [Try it on CodePen](http://codepen.io/electerious/pen/rWwPYa) |
| Equal height boxes with shadows | Boxes with an equal height, background and shadow. | [Try it on CodePen](http://codepen.io/electerious/pen/RogdaY) |

## Setup

We recommend to install basicGrid using [Bower](https://bower.io/) or [npm](https://npmjs.com).

```sh
bower install basicGrid
```
```sh
npm install basicgrid
```

Include the CSS files in the `head` tag:

```html
<link rel="stylesheet" href="dist/basicGrid.min.css">
```

## How to use

### Basics

- basicGrid is mobile first. Smaller breakpoints will automatically apply on all larger sizes.
- The outermost row has a `max-width`.
- A nested row removes the left gutter of the first column and the right gutter of the last column inside the row.
- Classes are generated from the names and sizes in the `$sizes` map.
- You can fill a row with up to twelve columns. Columns without a specified size will fill an entire row.
- Each column has a gutter on the left and right side.
- Columns have the same height when not specified otherwise.
- Columns wrap when they don't fit into one row.

### Sizes and Breakpoints

Specify the widths of each column with `small-`, `medium-`, and `large-` or use `-auto` to fill the available space. Defaults to `small-12`.

```html
<div class="row">
	<div class="column small-6 medium-6 large-4"></div>
	<div class="column small-3 medium-auto large-4"></div>
	<div class="column small-3 medium-auto large-4"></div>
</div>
```

### Horizontal Alignment

`left-on-`, `center-on-` and `right-on-` change the horizontal alignment of all columns in a row. `around-on-` and `between-on-` allow you to distribute the columns. Defaults to `left-on-`.

```html
<div class="row left-on-small center-on-medium right-on-large">
	<div class="column small-6"></div>
</div>
```

```html
<div class="row around-on-small between-on-large">
	<div class="column small-4"></div>
	<div class="column small-4"></div>
</div>
```

### Vertical Alignment

`top-on-`, `middle-on-` and `bottom-on-` change the vertical alignment of all columns in a row. Defaults to `stretch-on-`, which gives each column the same height.

```html
<div class="row top-on-small middle-on-medium bottom-on-large">
	<div class="column small-6"></div>
	<div class="column small-6"></div>
</div>
```

### Direction

Define the direction columns are placed in a row using `ltr-on-` and `rtl-on-`. Defaults to `ltr-on-`.

```html
<div class="row ltr-on-small rtl-on-medium">
	<div class="column small-6"></div>
	<div class="column small-6"></div>
</div>
```

### Order

Reorder columns with `first-on-`, `last-on-` and `origin-on-`. Defaults to `origin-on-`, which keeps the order as specified in the HTML.

```html
<div class="row">
	<div class="column small-4 last-on-small"></div>
	<div class="column small-4"></div>
	<div class="column small-4 first-on-small origin-on-medium"></div>
</div>
```

### Offset

Use offset classes to move columns to the right.

```html
<div class="row">
    <div class="column small-2 small-offset-2"></div>
    <div class="column small-2 small-offset-4"></div>
    <div class="column small-2"></div>
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

### Show and hide

`show-on-` and `hide-on-` allow you to show and hide individual columns.

```html
<div class="row">
    <div class="column hide-on-medium show-on-large"></div>
    <div class="column show-on-medium hide-on-large"></div>
</div>
```

## Options

Import `src/styles/main.scss` directly to customize the grid:

```scss
$maxWidth : 1280px; // Maximum width of a row
$columns  : 12; // Number of columns
$gutter   : 1.8rem; // Gutter size between columns

// Column-Breakpoints
$sizes: (
	'small'  : 0px,
	'medium' : 640px,
	'large'  : 1024px
);

@import "src/styles/main";
```