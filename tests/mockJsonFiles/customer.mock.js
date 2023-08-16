//MockObjects Used for the Customer Testing

const mockObject = {
    "first_name" : "Tester",
    "last_name" : "Ender",
    "nic" : "200308300020",
    "dob" : "03/23/2003",
    "email" : "tester122@gmail.com",
    "mobile_no" : "0783323261",
    "address" : "272/10c-1,Subhamawatha,Nugegoda",
    "access" : "open",
    "type": "customer",
    "url" : "https://canteen-management-system-nsbm.s3.ap-south-1.amazonaws.com/profile_pic.png",
    "password" : "tester123"
}


const mockFalseObject = {
    "first_name" : "Tester",
    "last_name" : "Ender",
    "nic" : "200308300020",
    "dob" : "03/23/2003",
    "email" : "tester122",
    "mobile_no" : "0783323261",
    "address" : "272/10c-1,Subhamawatha,Nugegoda",
    "access" : "open",
    "type": "customer",
    "url" : "https://canteen-management-system-nsbm.s3.ap-south-1.amazonaws.com/profile_pic.png",
    "password" : "tester123"
}

const mockLoginObject = {
    email : "tester122@gmail.com",
    password : "tester123",
    type: "customer"
}


const mockFalseLoginObject = {
    email : "tester122@gmail.com",
    password : "tester12333",
    type: "customer"
}


const findObject = {
    first_name : "Tester",
    last_name : "Ender",
    nic : "200308300020",
    dob : "03/23/2003",
    email : "tester122@gmail.com",
    mobile_no : "0783323261",
    address : "272/10c-1,Subhamawatha,Nugegoda",
    access : "open",
    url : "https://canteen-management-system-nsbm.s3.ap-south-1.amazonaws.com/profile_pic.png",
}


const updateObject = {
    first_name : "Tester_Updated",
    last_name : "Ender_Updated",
    nic : "200308300020",
    dob : "03/23/2003",
    email : "tester122@gmail.com",
    mobile_no : "0783323261",
    address : "272/10c-1,Subhamawatha,Nugegoda",
    type:"customer",
    access : "open",
    url : "https://canteen-management-system-nsbm.s3.ap-south-1.amazonaws.com/profile_pic.png"
}

const updateFalseObject = {
    first_name : "Tester_Updated",
    last_name : "Ender_Updated",
    nic : "200308300020",
    dob : "03/23/2003",
    email : "tester122@gmail.com",
    mobile_no : "07833",
    address : "272/10c-1,Subhamawatha,Nugegoda",
    type: "customer",
    access : "open",
    url : "https://canteen-management-system-nsbm.s3.ap-south-1.amazonaws.com/profile_pic.png"
}

module.exports = { mockLoginObject , mockFalseLoginObject, mockObject , mockFalseObject , findObject , updateObject , updateFalseObject}