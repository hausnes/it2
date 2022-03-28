// https://randomuser.me/api/?results=5

let brukarar = [];
	
const getUsers = async () => { // async
    const response = await fetch("https://randomuser.me/api/?results=5"); // await
    const json = await response.json(); // await
    users = json.results;
    // return users;
    skrivUt(users);
}
 
getUsers();

function skrivUt(dataInn) {
    console.log("EKSEMPEL 1 (async, await):");
    console.log("--------------------------");

    //console.log("Datatype: " + typeof(dataInn));

    for(let user of users) {
        console.log(user.name.title + " " + user.name.last);
    }
}