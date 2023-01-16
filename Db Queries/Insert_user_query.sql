--create admin
INSERT INTO `users` (Name, Email, MobileNo, Address,Username,
Password, Role,CreatedAt, CreatedBy,ModifiedAt,ModifiedBy,IsActive)
VALUES ('Super Admin', 'admin@tms.com', '8801916820818', '', 'admin', '123456',
'RootAdmin', curdate(), 'System', curdate(), 'System', 1);
--creat users
INSERT INTO `users` (Name, Email, MobileNo, Address,Username,
Password, Role,CreatedAt, CreatedBy,ModifiedAt,ModifiedBy,IsActive)
VALUES ('MD Nazmul Huda', 'nazmul@tms.com', '8801716820818', '', 'nazmul', '123456',
'Customer', curdate(), 'System', curdate(), 'System', 1);

INSERT INTO `users` (Name, Email, MobileNo, Address,Username,
Password, Role,CreatedAt, CreatedBy,ModifiedAt,ModifiedBy,IsActive)
VALUES ('Ashikuzzaman Angon', 'angon@tms.com', '8801816820818', '', 'angon', '123456',
'Customer', curdate(), 'System', curdate(), 'System', 1);

INSERT INTO `users` (Name, Email, MobileNo, Address,Username,
Password, Role,CreatedAt, CreatedBy,ModifiedAt,ModifiedBy,IsActive)
VALUES ('Muhaimin Ahmad', 'muhaimin@tms.com', '8801516820818', '', 'muhaimin', '123456',
'Customer', curdate(), 'System', curdate(), 'System', 1);