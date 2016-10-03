# basicGrid

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
	- [Offset](#offset)
	- [Push and pull](#push-and-pull)
	- [Show and hide](#show-and-hide)
- [Options](#options)

## Demos

| Name | Description | Link |
|:-----------|:------------|:------------|
| Default | Includes all features and most column variations. | [Demo](https://codepen.io/electerious/pen/pjOvPZ) |

## Setup

We recommend to install basicGrid using [Bower](https://bower.io/) or [npm](https://npmjs.com).

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

- basicGrid is mobile-first. Smaller breakpoints will automatically apply on all larger sizes.
- The outermost row has a `max-width`.
- A nested row removes the left gutter of the first column and the right gutter of the last column inside the row.
- Classes are generated from the names and sizes in the `$sizes` map.
- You can fill a row with up to twelve columns. Columns without a specified size will fill an entire row.
- Each column has a gutter on the left and right side.
- Columns have the same height when not specified otherwise.
- Columns wrap when they don't fit into one row.

### Sizes and Breakpoints

Specify the widths of each column with the `small-`, `medium-`, and `large-` classes. Defaults to `small-12`.

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

### Horizontal Alignment

`left-on-`, `center-on-` and `right-on-` change the horizontal alignment of all columns in a row. Defaults to `left-on-`.

```html
<div class="row left-on-small center-on-medium right-on-large">
	<div class="column small-6"></div>
</div>
```

### Vertical Alignment

`top-on-`, `middle-on-` and `bottom-on-` change the vertical alignment of all columns in a row. Defaults to `stretch-on-`, which gives each column the same height.

```html
<div class="row top-on-small middle-on-medium bottom-on-large">
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