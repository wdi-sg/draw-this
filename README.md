# draw-this

Create a program that takes in commands to draw different figures.

### First Version

Your program will take a command to draw a "row", (it will be a `<p>` tag) with the number of columns you want to draw.

Start by outputting a 🍍for each column.

Example:

You input: `3`.

Your program draws:

```
🍍🍍🍍
```

You input 2.

Your program draws: 


```
🍍🍍🍍
🍍🍍
```

You can type `clear` to clear the elements out of the DOM.

### Second Version
When you type `clear 2` it clears the 2nd row. (Note: you will need `.split` to get the 2 arguments out of this input string)

### further
Add the ability to add multiple rows at a time.

Example:

You can type `2 2`.

Your program will make a shape like this: 

```
🍍🍍
🍍🍍
```

The HTML should look like this:

```html
<p>🍍🍍</p>
<p>🍍🍍</p>
```

### further
When your program first runs, set the ability to enter the character or emoji that your program will draw with.

### further
Add the ability to draw triangles.

Type `triangle 3` would draw:
```
🍍
🍍🍍
🍍🍍🍍
```


### further
Create a reverse triangle:

Type `rtriangle 3` would draw:
```
    🍍
  🍍🍍
🍍🍍🍍
```


Note: you will need the HTML entity `&nbsp` to create spaces.

### further
Create a program that draws on a 4 x 4 area.

Create a "cursor" that keeps track of where to draw from.

When you type `down 2` the program draws in that direction. Start with just the commands `up`, `down`, `left`, `right`. 

Given your cursor is at: `0,1`

```
⬜c ⬜⬜
⬜⬜⬜⬜
⬜⬜⬜⬜
⬜⬜⬜⬜
```

You type: `down 2`

```
⬜🍍⬜⬜
⬜🍍⬜⬜
⬜⬜⬜⬜
⬜⬜⬜⬜
```

### further
Check the user's input to make sure they are not drawing out of the drawing area.

### further
At the beggining of the program, tell the program how large the drawing field should be. Make it a single number (i.e., square)

### further
Add the ability to make equilateral triangles and upsidedown equilateral triangles.

Type: `etriangle 3`
```
  🍍
 🍍🍍
🍍🍍🍍
```

Type: `eutriangle 3`
```
🍍🍍🍍
 🍍🍍
  🍍
```








