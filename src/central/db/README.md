# Database (DB).
The main database is planned to be built with [MySQL](https://dev.mysql.com).

## Why MySQL?
In an MVC architecture, the database is the "ugly solution" to the problem. The solution is given when the 
different devices and elements of the system interacts between them. Because of the "inheritance/composition" principle, 
the a MySQL database is perfect for get the job done. The classes structure can be represented easily with the relation 
system of MySQL, meanwhile its SQL syntax and model are the most kwnon and used across the world.

Essentialy, we are going to describe the problem components first and then we are going to stablish the rules that will 
solve the problem.

## Example
Here's an example based on the preliminar models:
```SQL
-- This is the generic "Device" from the preliminar models:
CREATE TABLE devices(
	id INT NOT NULL PRIMARY KEY AUTOINCREMENT,
	name TEXT NOT NULL DEFAULT("DEV"),
	info TEXT NOT NULL DEFAULT("N/A")
);

-- A transformer created from the generic device:
CREATE TABLE transformers(
	id INT NOT NULL PRIMARY KEY AUTOINCREMENT,
	deviceRef INT NOT NULL DEFAULT(-1),
	inputVoltage DECIMAL NOT NULL DEFAULT(0),
	outputVoltage DECIMAL NOT NULL DEFAULT(0)
);
-- Then you can create more devices from the generic device by "extending" the main model.
-- You can also extend the transformer model by adding alarms, signals or states.
```