# Login via Netlify's serverless functions

This is a small demonstration of Netlify's serverless functions.

On the frontend we have a password input. This password is sent to a serverless function which checks if it is correct. The correct password is not stored at (and not visible to) the frontend.

Usage: Install the Netlify CLI globally:

`npm install -g netlify-ci`

The file `netlify.toml` tells Netlify where to find the source files and the functions.

```
[build]
    publish = "public/"
    functions = "functions/"
```

You can create a new function with the command

`netlify create:function {your function name}`

The command

`netlify dev`

starts the development server by Netlify.

The `.env` file contains the environment variables which can be used in the functions.

Make sure to add the same variables in your Netlify project and rebuild the site.
