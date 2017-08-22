# Same spec, different team

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

```
Node, npm, git
```

### Installing

```
- Clone the project
- npm install in the project root
- npm start
```

## Requirements

### SPRINT A

#### User story 1:

As a member of the HR team, I want to enter employees' details so that the system records their information.

#### Acceptance criteria:

The following fields must be stored in the system

```
Name
Address
National Insurance Number
Bank account IBAN/BIC
Starting salary
Employee number
```

#### User story 2:

As a member of the HR team, I want to generate a report containing employees per department so that BU heads can see who is in each department.

### SPRINT B

#### User story 3:

As a member of the HR team, I want to be able to add Sales employees (employees who also have commission rate and total sales so far this period).

#### User story 4:

As a member of finance team , I want to generate a report containing each employee and their net pay for the current pay period.

#### Acceptance criteria:

The pay is net of a simple tax rate (25%) and, for sales employees, their commission for the total sales they made for that period, which will then be reset before the start of the next period.

#### User story 5:

As a manager of the sales team, I want to see which sales employee has the highest sales total for this period so they can get many high fives.

### SPRINT C

#### User story 6:

As a talent manager, I want to create projects and assign employees to projects. I want to see which employees are assigned to each project.

#### User story 7:

As a talent manager, I want to see be able to see projects that have no employees assigned, employees that have not been assigned to projects, and the number of employees on any particular project.

#### NFRs:

1. Master branch must be in a demonstrable (working) condition at all times in case we need to demonstrate to a client at short notice.
1. The application should not crash under normal operation.
1. The application's database account should have the minimum permissions required to perform its functions.
1. The application should connect to the database a minimal number of times.
1. The development application should be resilient and should survive the loss of any single developer machine.
1. The application should respond gracefully in the event of a database network failure 


## Authors

* Curtis Tarr
* Niall O'Boyle
* Eduard Ghinea

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

