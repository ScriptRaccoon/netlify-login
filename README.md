# Login via Netlify's serverless functions

This is a small demonstration of Netlify's serverless functions.

On the frontend we have a password input. This password is sent to a serverless function which checks if it is correct. The correct password is not stored at (and not visible to) the frontend. If the password is correct, the function sends some HTML which gets inserted to the `<main>` element. Thus, we have a password-protected website.

Usage: Install the Netlify CLI globally:

`npm install -g netlify-cli`

The file `netlify.toml` tells Netlify where to find the source files and the functions.

```
[build]
    publish = "public/"
    functions = "functions/"
```

You can create a new function with the command

`netlify functions:create {your function name}`

The command

`netlify dev`

starts the development server by Netlify.

The `.env` file contains the environment variables which can be used in the functions. Make sure to add the same variables in your Netlify project.
