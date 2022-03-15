const checkAuth = (req, res, next) => {
    const isAdmin = true;
    if(isAdmin) {
        next();
    } else {
        console.log("Goodbye!");
    }
}

export default checkAuth;