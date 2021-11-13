const handler = async (event) => {
    const { password } = event.queryStringParameters;
    if (password == process.env.PASSWORD) {
        return {
            statusCode: 200,
            body: JSON.stringify({ message: `Login was successful` }),
        };
    } else {
        return {
            statusCode: 401,
            body: JSON.stringify({
                message: `Login was not successful`,
            }),
        };
    }
};

module.exports = { handler };
