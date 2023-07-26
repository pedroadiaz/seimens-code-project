# README #

This is my implementation of the code assignment given to me for the Seimens lead engineer position

### Installation Requirements ###

* In order to install the backend and the frontend, run "npm install" on both the "backend" and "frontend" folders. 
* In order to run each, run "npm run start" on both the "backend" and "frontend" folders. 
* Navigate to "http://localhost:4200" in the browser to open the page
* The backend will run on port 5000. To retrieve the templates, go to "http://localhost:5000/templates"

### Reference ###
![Example Filmstrip](https://bitbucket.org/repo/kMx7k8n/images/3768382958-2017-09-26_9-09-27.png)

### Backend Code ###

* Whenever I write production ready backend code, I try to use SOLID principles
* This is why I am using inversify for dependency injection 
* Programming to interfaces
* Writing unit tests

### Front End ###

* Broke down everything into components (at least where it made sense)
* This includes the thumbnails, the large image and the footer. 
* In order to run it, you must first create a .env file in the /frontend/src/app directory. It only needs one value in there: 
    NX_API_URL=http://localhost:5000
    This is of course assuming you haven't changed the configuration of the backend. 
* Run "npm run start" to start the application. By default, you can access it at the following URL:  http://localhost:4200 

