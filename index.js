const { createUser } = require("./controllers/user");

exports.handler = async (event) => {

    console.info('HANDLER - create user')
    console.info(event);

    const result = await createUser(event);

    if (result.status) {
        return resp = {
            status: true,
            user: result.user
        }
    } else {
        return resp = {
            status: false,
            message: result.message
        }
    }
    
};





