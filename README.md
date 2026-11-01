# odin-etch

# HTML

Additional practice with VSCode template hotkeys.

# CSS

`aspect-ratio: 1/1` to keep height and width equal.

# JavaScript

Used optional chaining `?.` to handle null cases. Sets as `undefined` instead of throwing an error.

# Git

Used `git remote set-url origin <SSH LINK>` to change the repo URL from the https link to the ssh so it doesn't ask for a password when making a commit.

Practiced with creating a branch to test alternative methods for coding a feature. Needed to use `git branch -D <branch name>` instead of `git branch -d` if the branch was not committed to the remote repo.

# Math

Initially started with a convoluted math approach by trying to find the width and height of the smaller grid items based on the area of the total square. I assumed area is where I needed to start given the problem statement: 

>a new grid should be generated in the same total space as before 

I thought the square had to be just N items total in order to take up the same space, where area was equal to pixel in my thinking. The "aha" or "oh duh" moment was a 2x2 grid which only produced 2 blocks in my initial code where it needed to have 2 blocks on each side. The reach for the fancy math can make one feel instantly smart and dumb at the same time.