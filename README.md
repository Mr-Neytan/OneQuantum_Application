# OneQuantum_Application
This public repository contains my submissions for both frontend and backend assignments.

## Frontend
The main assignment is located in the Frontend/eventPage. It was made using Vite + React. To view it on the web:
<ol>
<li>Locate the correct folder</li>
<li>Run npm install. It should download the relevant libraries</li>
<li>Run npm run dev. You can also run npm run dev -- --host to expose the link for mobile viewing</li>
</ol>

The website was heavily influenced by the existing OneQuantum Workshop site. However, I did make a few tweaks:
<ul>
<li>Contact Us button disappears for smaller screens. The plan is to put it in another relevant page or in the footer.</li>
<li>Only the jumbotron has an intro animation.</li>
<li>Schedule uses a table as its visual representation.</li>
</ul>

## Backend
The mini assignment is located in the Backend folder. To run it:

<ol>
<li>Locate the correct folder</li>
<li>Run npm install. It should download the relevant libraries</li>
<li>Properly configure the connection string, preferably with an environment variable. This step might change depending on the database. In my case, I used Supabase.</li>
<li>Check if table "QuantumArticles" exists in your database.</li>
<li>Run "node ."</li>
</ol>