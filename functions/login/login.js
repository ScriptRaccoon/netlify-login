const websiteHTML = `
<p>
    This content can only be seen after login.
</p>
<p>
    <img src="https://s3.amazonaws.com/revue/items/images/006/626/383/mail/469bd87ceef27c727c995ce5ec8290a1.jpeg">
</p>
<p>
    This is just some dummy text.
</p>
`;

const handler = async (event) => {
    const { password } = event.queryStringParameters;
    if (!password) {
        return {
            statusCode: 401,
            body: JSON.stringify({
                error: `The password is empty`,
            }),
        };
    }
    if (password == process.env.PASSWORD) {
        return {
            statusCode: 200,
            body: JSON.stringify({ html: websiteHTML }),
        };
    } else {
        return {
            statusCode: 401,
            body: JSON.stringify({
                error: `The password is not correct`,
            }),
        };
    }
};

module.exports = { handler };
