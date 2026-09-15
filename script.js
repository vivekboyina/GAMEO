let n = parseInt(prompt("Enter the grid size"))
let grid = document.querySelector('.grid')
grid.style.gridTemplateColumns = `repeat(${n},40px)`
grid.style.gridTemplateRows = `repeat(${n},40px)`
let childs = Array(n).fill(0).map(() => Array(n).fill(0));
let rock = '🪨'
for(let i = 0; i < n; i++)
{
    for(let j = 0; j < n; j++)
    {
        let child = document.createElement('p')
        grid.appendChild(child)
        childs[i][j] = child
        if(Math.random() < 0.2) childs[i][j].textContent = rock
    }
}
let bot = '👽'
childs[0][0].textContent = bot
let l = 0
let r = 0
function up()
{   
    if(l == n - 1 && r == n - 1)
    {
        alert('Already won the game')
        return
    }
    if(l - 1 < 0 || childs[l - 1][r].textContent == rock) alert('Wrong position')
    else
    {
        childs[l][r].textContent = ' ';
        childs[l - 1][r].textContent = bot   
        l-=1
    }
    if(l == n - 1 && r == n - 1) alert('Winner')
}
function left()
{
    if(l == n - 1 && r == n - 1)
    {
        alert('Already won the game')
        return
    }
    if(r - 1 < 0 || childs[l][r - 1].textContent == rock) alert('Wrong position')
    else
    {
        childs[l][r].textContent = ' ';
        childs[l][r - 1].textContent = bot
        r-=1
    }
    if(l == n - 1 && r == n - 1) alert('Winner')
}
function right()
{
    if(l == n - 1 && r == n - 1)
    {
        alert('Already won the game')
        return
    }
    if(r + 1 >= n || childs[l][r + 1].textContent == rock) alert('Wrong position')
    else
    {
        childs[l][r].textContent = ' ';
        childs[l][r + 1].textContent = bot
        r+=1 
    }
    if(l == n - 1 && r == n - 1) alert('Winner')
}
function down()
{
    if(l == n - 1 && r == n - 1)
    {
        alert('Already won the game')
        return
    }
    if(l + 1 >= n || childs[l + 1][r].textContent == rock) alert('Wrong position')
    else
    {
        childs[l][r].textContent = ' ';
        childs[l + 1][r].textContent = bot
        l+=1 
    }
    if(l == n - 1 && r == n - 1) alert('Winner')
}
