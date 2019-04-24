<h1>Fitness APP</h1>
<hr>
<p>
  Fitness APP can analyze your workouts 
</p>

<br>

<h1>Installation</h1>
<ol>
  <li>Use NPM to install all the dependencies in public folder: npm install</li>
  <li>Use NPM to install all the dependencies in server folder: npm install</li>
  <li>Boot up a MongoDB server instance: mongod --dbpath <path> --port 27017</li>
  <li>Start node server: node index.js</li>
  <li>Visit: http://localhost:5000/</li>
</ol>

<br>

<h1>Functionality</h1>
<hr>
<p>App provides basic functionality to users, based on their authentication and roles.</p>
<br>
<p>Anonymous users can:</p>
<ul>
  <li>Read articles</li>
  <li>Use calculate calories</li>
  <li>Use calculate one rep max</li>
</ul>
<br>
<p>Authorized users can:</p>
<ul>
  <li>Add new routines</li>
  <li>Add new workouts</li>
  <li>Watch history</li>
  <li>Watch analyze graph of workout records</li>
</ul>
<br>
<p>Admin can:</p>
<ul>
  <li>Add new exercises</li>
  <li>Add new articles</li>
  <li>Add new sample routines</li>
  <li>Delete sample routines</li>
  <li>Change user role</li>
</ul>

<pre>
Admin user:
 username: admin@admin.com
 password: Admin
</pre>

<br>

<h1>License</h1>
<hr>
This project is licensed under the MIT License
