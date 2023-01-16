const db = require("./db");
const helper = require("../helper");
const config = require("../config");

async function isPackageCodeExists(code) {
    const rows = await db.query(
      `SELECT case when count(*) = 1 then "false" else "true" end as IsCodeExists FROM tms.packages where code="${code}" LIMIT 1`
    );
  
    const data = helper.emptyOrRows(rows);
  
    return data[0];
}

async function getPackageList(searchText, index, limit) {
    var query = `SELECT tp.Code, tp.Type, tp.HotelName, tp.Facilities, tp.Location, tp.Duration, tp.AdultPerPersonCost, tp.HotelImages, tp.LocationImages, avg(Rating) as Rating
    from tms.packages as tp join tms.tour_reviews tr on tp.Code = tr.PackageCode
    where tp.Location like '%${searchText}%' OR tp.HotelName like '%${searchText}%' OR tp.Type like '%${searchText}%'
    group by tp.Code
    LIMIT ${index}, ${limit}`;

    //console.log(query);

    const rows = await db.query(query);
  
    const data = helper.emptyOrRows(rows);
  
    return data;
}

async function createPackage(rPackage) {
    const apiResponse = {};
  
  
    if (rPackage.code === undefined) {
      apiResponse.success = false;
      apiResponse.message = "data not found";
    } else {

      if (isPackageCodeExists(rPackage.code)) {
        apiResponse.success = false;
        apiResponse.message = "Package code already exists";  
      } else {
        const result = await db.query(
        `INSERT INTO packages 
        (HotelName,HodelAddress,HotelImages,Code,Duration,AdultPerPersonCost,ChildPerPersonCost,Facilities,
         Discount,Type,Location,LocationImages,TotalSlot,
         CreatedAt,CreatedBy,ModifiedAt,ModifiedBy)
        VALUES 
        ("${rPackage.hotelName}", "${rPackage.hotelAddress}", "${rPackage.hotelImages}", "${rPackage.code}", "${rPackage.adultPerPersonCost}", "${rPackage.childPerPersonCost}", "${rPackage.Facilities}", 
         "${rPackage.discount}", "${rPackage.type}", "${rPackage.location}", "${rPackage.locationImages}", "${rPackage.totalSlot}",
        curdate(), "${rPackage.username}", curdate(), "${rPackage.username}")`
        
        );
    
        apiResponse.success = false;
        apiResponse.message = "Error in creating user";
    
        if (result.affectedRows) {
        apiResponse.success = true;
        apiResponse.message = "User created successfully";
        }
      } 
      
      
      
      
    }
  
    
  
    return apiResponse;
  }


  module.exports = {
    createPackage,
    isPackageCodeExists,
    getPackageList
  };