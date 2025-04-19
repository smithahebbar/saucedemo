import LoginPage from '../pages/loginPage';

export const ROLES = { 
"standard_user": {
    name: "standard_user",
    login: "standard_user",
     pwd: "secret_sauce"
},
"locked_out_user": {
    name: "locked_out_user",
    login : "locked_out_user",
    pwd:"secret_sauce"
},
"problem_user": {
    name: "problem_user",
    login : "problem_user",
    pwd: "secret_sauce"
},
"performance_glitch_user": {
    name:"performance_glitch_user",
    login: "performance_glitch_user",
    pwd:"secret_sauce"
},

"error_user": {
    name:"error_user",
    login:"error_user",
    pwd: "secret_sauce"
},

"visual_user": { 
    name:"visual_user",
    login:"visual_user",
    pwd:"secret_sauce"

}

};

export async function loginWithValidRole(page, roleName){
    const role = ROLES[roleName];
    if(!role){
        throw error(`Role ${roleName} not found`);
    }
    const loginPage = new LoginPage(page);
    await loginPage.navigate();
    await loginPage.login(role.login, role.pwd);
    try{
        await page.waitForURL("**/inventory.html");
        console.log(`Successfully logged in as ${role.name}`);

    }catch(error){
        console.error(`Failed to log in as ${role.name} : ${error.message}`);
        throw error;
    }
    
    
}


export async function loginWithInvalidRole(page, roleName){
    const role = ROLES[roleName];
    if(!role){
        throw error(`Role ${roleName} not found`);
    }
    const loginPage = new LoginPage(page);
    await loginPage.navigate();
    await loginPage.login(role.login, role.pwd);
}