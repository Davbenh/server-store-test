const userDL = require('../DL/user.controller')

async function createNewUser(data) {
    if(!data.email || !data.password) throw "missing data"

    let user = await userDL.readOne({email : data.email});
    if(user) throw "user is exist"

    let res = await userDL.create(data);
    console.log(res)

    return res;

}

let user = {
    fName: "lior",
    lName: "blaaaa",
    email: "lior@gmail.com",
    password: "123123",
    dob: new Date(1987, 6, 2),
    gender: "male"
}

 createNewUser(user)