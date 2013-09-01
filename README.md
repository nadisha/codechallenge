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
<h3>Front-end</h3>
AngylarJS has been used to communicate with the backend. <br/>
The data has been controlled using a controller called ResultController (CingleVue / src / main / webapp / public / js / resultController.js).<br/>
Subject records are fetched using <em>challenge/subjects</em> url as a JSON object.<br/>
The Subjects are loaded to a dropdown at page load time via <em>init()</em> function.<br/>
Data grid is loaded upon selection of a subject from the dropdown.<br/>
The grid data is fetched using <em>challenge/subjects/{selected subject}</em> url as a JSON object.<br/>
The grid date is loaded via <em>loadData()</em> funtion.

<h3>Back-end</h3>
There are 4 bean definition files,
<ul>
<li>cingleVue-servlet.xml - Contain Spring MVC beans</li>
<li>persistence-context.xml - Contain persistence beans</li>
<li>service-context.xml - Contain service beans</li>
<li>applicationContext.xml - Imports above three bean definition files and load them to the memory</li>
</ul>
MainController class controls requests and responses.<br/>
To communicate with MongoDB spring data <em>MongoTemplate</em> has been used.<br/>
Three model objects have been created to map collections to objects and those objects are being used to pass information between layers.


Configuration
===========
Database configurations such as database name, port number and host has been definded in config.properties <em>(CingleVue / src / main / resources /)</em>.<br/>
Open pom.xml file and provide tomcat username and password for the tomcat plugin.<br/>

Deployment
==========
<h3>Database setup</h3>
Move into  <em>Database /</em> folder and execute following command to create a database call nadisha. The <em>loadData.js</em> creates 3 collections and insert documents to each collection.<br/>
> mongo 127.0.0.1/nadisha loadData.js

<h3>Server deployment</h3>
Assume the deployment server is Tomcat.<br/>
Starts the tomcate server.<br/>
Move into <em>CingleVue /</em> folder and execute following command to deploy.<br/>
> mvn clean tomcat:deploy

If the build fails, copy the war file from target folder and manually deploy on to the server.<br/>
Check the application by typing following url on your browser,<br/>
<strong>http://[host]:[port]/CingleVue/</strong>
