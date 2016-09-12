# Robot-Test
The application is created to simulate the movement of a toy robot on a square tabletop. The table surface has a 5 units x 5 units dimensions without any obstructions on it.

The movement of the toy robot is controlled by the user using the list of commands below:
* PLACE X,Y,F
* MOVE
* LEFT
* RIGHT
* REPORT

PLACE will put the toy robot on the table surface in the position of (X,Y) and facing (NORTH, SOUTH, EAST or WEST). The origin (0,0) is the SOUTH WEST most corner of the tabletop.

MOVE will move the toy robot one unit forward in the direction it is currently facing.

LEFT and RIGHT will rotate the toy robot 90 degrees in the specified direction without changing the position of the robot.

REPORT will show the X-coordinate, Y-coordinate and the direction of the toy robot is currently facing. Also, REPORT will show the grid of the tabletop with the location of the toy robot indicated on it.

## Getting started
1) Download the folder and run 'main.js'.

2) PLACE command will be the first valid command to the toy robot. The placement of the toy robot must be within the grid of the tabletop and the application discards all commands in the sequence until a valid PLACE has been executed.

3) After the first PLACE command is executed, any sequence of commands may be issued, in any order, including another PLACE command. The toy robot must not fall to destruction. Any MOVE command that would result in the robot failling off the table is discarded, however further valid commands can still be entered.

## Examples
__Example 1__

Input:
```
PLACE 0,0 NORTH
MOVE
REPORT
```

Output: 
```
 --- --- --- --- --- 
|   |   |   |   |   |
 --- --- --- --- --- 
|   |   |   |   |   |
 --- --- --- --- --- 
|   |   |   |   |   |
 --- --- --- --- --- 
|   |   |   |   |   |
^--- --- --- --- --- 
|   |   |   |   |   |
 --- --- --- --- --- 
0,1,NORTH
```
__Example 2__

Input:
```
PLACE 5,5 SOUTH
RIGHT
REPORT
```

Output: 
```
 --- --- --- --- ---<
|   |   |   |   |   |
 --- --- --- --- --- 
|   |   |   |   |   |
 --- --- --- --- --- 
|   |   |   |   |   |
 --- --- --- --- --- 
|   |   |   |   |   |
 --- --- --- --- --- 
|   |   |   |   |   |
 --- --- --- --- --- 
5,5,WEST
```

__Example 3__

Input:
```
PLACE 3,2 EAST
LEFT
MOVE
MOVE
LEFT
MOVE
RIGHT
REPORT
```

Output: 
```
 --- --- --- --- --- 
|   |   |   |   |   |
 --- ---^--- --- --- 
|   |   |   |   |   |
 --- --- --- --- --- 
|   |   |   |   |   |
 --- --- --- --- --- 
|   |   |   |   |   |
 --- --- --- --- --- 
|   |   |   |   |   |
 --- --- --- --- --- 
2,4,NORTH
```
