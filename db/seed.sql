INSERT INTO department (name)
VALUES 
('Engineering'), 
('Finance'), 
('Finance'), 
('Legal'), 
('Legal');

INSERT INTO role (title, salary, department_id)
VALUES
('Sales Lead', 100000, 1),
('Salesperson', 80000, 2),
('Lead Engineer', 150000, 3),
('Software Engineer', 120000, 4),
('Lawyer', 190000, 5);

INSERT INTO employee (first_name, last_name, role_id, manager_id) 
VALUES 
('Keira','Knightley', 2, 1),
('Matthew', 'Macfadyen', 2, 1),
('Rosemund', 'Pike', 1, null),
('Carey', 'Mulligan', 3, 4),
('Simon', 'Woods', 4, 3),
('Jena', 'Malone', 5, 3):

