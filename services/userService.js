const db = require("./db");
const helper = require("../helper");
const config = require("../config");

async function getMultiple(page = 1) {
  const offset = helper.getOffset(page, config.listPerPage);
  const rows = await db.query(
    `SELECT id, name, released_year, githut_rank, pypl_rank, tiobe_rank 
    FROM programming_languages LIMIT ${offset},${config.listPerPage}`
  );
  const data = helper.emptyOrRows(rows);
  const meta = { page };

  return {
    data,
    meta,
  };
}

async function findUser(rUser) {
  const rows = await db.query(
    `SELECT Name,Email,MobileNo,Username,Role,Address FROM users WHERE username="${rUser.username}" AND password="${rUser.password}" AND isactive = 1 LIMIT 1`
  );
  const data = helper.emptyOrRows(rows);

  return data[0];
}

async function getByUsername(username) {
  const rows = await db.query(
    `SELECT Name, Email, MobileNo, Username FROM users WHERE username="${username}" LIMIT 1`
  );
  const data = helper.emptyOrRows(rows);

  return data[0];
}

async function isUsernameExists(username) {
  const rows = await db.query(
    `SELECT case when count(*) = 1 then "false" else "true" end as IsNewUsername FROM tms.users where username="${username}" LIMIT 1`
  );

  const data = helper.emptyOrRows(rows);

  return data[0];
}

async function createUser(rUser) {
  const apiResponse = {};


  if (rUser.username === undefined) {
    apiResponse.success = false;
    apiResponse.message = "data not found";
  } else {
    
    const result = await db.query(
      `INSERT INTO users 
      (Name, Email, MobileNo, Address, Username, Password, Role, CreatedAt, CreatedBy, ModifiedAt, ModifiedBy, IsActive) 
      VALUES 
      ("${rUser.name}", "${rUser.email}", "${rUser.mobileNo}", "${rUser.address}", "${rUser.username}", "${rUser.password}", "Customer", curdate(), "System", curdate(), "System", 1)`
    );
  
    apiResponse.success = false;
    apiResponse.message = "Error in creating user";
  
    if (result.affectedRows) {
      apiResponse.success = true;
      apiResponse.message = "User created successfully";
    }
    
    
  }

  

  return apiResponse;
}

async function update(id, programmingLanguage) {
  const result = await db.query(
    `UPDATE programming_languages 
    SET name="${programmingLanguage.name}", released_year=${programmingLanguage.released_year}, githut_rank=${programmingLanguage.githut_rank}, 
    pypl_rank=${programmingLanguage.pypl_rank}, tiobe_rank=${programmingLanguage.tiobe_rank} 
    WHERE id=${id}`
  );

  let message = "Error in updating programming language";

  if (result.affectedRows) {
    message = "Programming language updated successfully";
  }

  return { message };
}

async function remove(id) {
  const result = await db.query(
    `DELETE FROM programming_languages WHERE id=${id}`
  );

  let message = "Error in deleting programming language";

  if (result.affectedRows) {
    message = "Programming language deleted successfully";
  }

  return { message };
}

module.exports = {
  getMultiple,
  createUser,
  update,
  remove,
  getByUsername,
  findUser,
  isUsernameExists
};
