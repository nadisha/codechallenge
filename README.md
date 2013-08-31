Development
===========
The project has been developed using Spring 3.2.1 framework. <br/>
Following were considered to develop the application.
<ul>
<li>Build Tool - Maven</li>
<li>Database - MongoDB</li>
<li>Frontend - Twitter Bootstrap</li>
<li>Frontend framework - AngularJS</li>
<li>Architectuer - Three tier (Web, Service and Persistence)</li>
</ul>
Implementation
============
AngylarJS has been used to communicate with the backend. 
Front-end
The data has been controlled from the front-end using a controller called ResultController (CingleVue / src / main / webapp / public / js / resultController.js).
Subjects are fetched using challenge/subjects url as a JSON object.
The Subjects are loaded to a dropdown at page load time via init() function.
Data grid is loaded upon selection of a subject from the dropdown.
The grid data is fetched using challenge/subjects/{selected subject} url as a JSON object.
The grid date is loaded via loadData() funtion.

Back-end
There 4 bean definition files,
cingleVue-servlet.xml - Loads Spring MVC beans
persistence-context.xml - Loads persistence beans
service-context.xml - Loads service beans
applicationContext.xml - Imports above three bean definition files
MainController controls requests and responses.
To communicate with MongoDB spring data MongoTemplate has been used.
Three models has been created to map collections to objects and those objects are being used to pass information between layers.


Configuration
===========
Database configurations such as database name, port number and host has been externalized to config.properties (CingleVue / src / main / resources /).
Open pom.xml file to provide tomcat username and password for the tomcat plugin

Deployment
==========
Database setup
Move into  Database / folder and execute following command to create a database call nadisha.
>mongo 127.0.0.1/nadisha loadData.js

Server deployment
Assume the deployment server as Tomcat.
Starts the tomcate server.
Move into CingleVue / folder and execute following command to deploy.
>mvn clean tomcat:deploy
If the build fails, cpoy the .war file from target folder and manually deploy on the server
Check the application by typing following url on your browser,
http://[host]:[port]/CingleVue/
