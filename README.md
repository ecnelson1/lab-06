I need to have a path that if a user hits at http://localhost:7890/index.html the server should go into the public directory and find an index.html file, read it, and send the contents as a response. If no file is found respond with a Not Found message.

Parts:
1. start server at 7890
 -use terminal to confirm
2. write code to hit server and get sent to index.html in public folder
3. Read that file
4. Return the contents or a 404 status and 'Not Found' message as appropriate.
    -Tdd test a route through the server that pulls the contents of index.html as its response.
