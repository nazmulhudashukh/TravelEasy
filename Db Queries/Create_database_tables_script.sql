CREATE TABLE `bookings` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `Username` varchar(150) NOT NULL,
  `PackageCode` varchar(100) NOT NULL,
  `NoOfAdults` int(11) NOT NULL,
  `NoOfChilds` int(11) DEFAULT NULL,
  `ArrivalDate` datetime NOT NULL,
  `ReturnDate` datetime NOT NULL,
  `IsPaid` tinyint(4) NOT NULL,
  `WithTransport` tinyint(4) DEFAULT NULL,
  `CreatedAt` datetime NOT NULL,
  `CreatedBy` varchar(150) NOT NULL,
  `ModifiedAt` datetime NOT NULL,
  `ModifiedBy` varchar(150) NOT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE `packages` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `HotelName` varchar(200) NOT NULL,
  `HodelAddress` varchar(500) NOT NULL,
  `HotelImages` varchar(500) DEFAULT NULL,
  `Code` varchar(100) NOT NULL,
  `Duration` varchar(200) NOT NULL,
  `AdultPerPersonCost` float NOT NULL,
  `ChildPerPersonCost` float DEFAULT NULL,
  `Facilities` varchar(5000) DEFAULT NULL,
  `Discount` float DEFAULT NULL,
  `Type` varchar(45) NOT NULL,
  `Location` varchar(45) NOT NULL,
  `LocationImages` varchar(500) DEFAULT NULL,
  `TotalSlot` int(11) NOT NULL,
  `CreatedAt` datetime DEFAULT NULL,
  `CreatedBy` varchar(200) DEFAULT NULL,
  `ModifiedAt` datetime DEFAULT NULL,
  `ModifiedBy` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4;

CREATE TABLE `users` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `Name` varchar(200) NOT NULL,
  `Email` varchar(200) NOT NULL,
  `MobileNo` varchar(20) NOT NULL,
  `Address` varchar(500) NOT NULL,
  `Username` varchar(200) NOT NULL,
  `Password` varchar(200) NOT NULL,
  `Role` varchar(45) NOT NULL,
  `CreatedAt` datetime NOT NULL,
  `CreatedBy` varchar(150) NOT NULL,
  `ModifiedAt` datetime NOT NULL,
  `ModifiedBy` varchar(150) NOT NULL,
  `IsActive` tinyint(4) DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb4;

CREATE TABLE `user_queries` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `Name` varchar(150) NOT NULL,
  `Email` varchar(200) NOT NULL,
  `Phone` varchar(15) NOT NULL,
  `Country` varchar(45) NOT NULL,
  `Subject` varchar(45) NOT NULL,
  `Message` varchar(45) NOT NULL,
  `CreatedAt` datetime DEFAULT NULL,
  `CreatedBy` varchar(150) DEFAULT NULL,
  `ModifiedAt` datetime DEFAULT NULL,
  `ModifiedBy` varchar(150) DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE `tour_reviews` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `Username` varchar(150) NOT NULL,
  `PackageCode` varchar(100) NOT NULL,
  `Rating` int(11) NOT NULL,
  `Comment` varchar(1000) DEFAULT NULL,
  `CreatedAt` datetime NOT NULL,
  `CreatedBy` varchar(150) NOT NULL,
  `ModifiedAt` datetime NOT NULL,
  `ModifiedBy` varchar(150) DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4;
