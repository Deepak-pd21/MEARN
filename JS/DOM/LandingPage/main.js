function login(){
    // store username 
    const username = usernameInput.value
    console.log(username);

    //store data permanently to browser
    localStorage.setItem("username",username)
    // redirect to dashboard
    window.location = 'dashboard.html'
}