I need to have a path that if a user hits at http://localhost:7890/index.html the server should go into the public directory and find an index.html file, read it, and send the contents as a response. If no file is found respond with a Not Found message.

Parts:
1. start server at http://localhost:7890/index.html
    -serves contents of index.html to port 7890 on the browser at localhost
2. Make that server go to the public directory to the index.html file
3. Read that file
4. Return the contents or a 404 status and 'Not Found' message.
