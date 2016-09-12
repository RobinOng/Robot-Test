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
