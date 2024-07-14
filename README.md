<p><h3><b>The Frontend</b></h3>
<ol>
<li> The key functionalities of the UI <br><br>
  The UI is a very simple frontend that has a text box, and takes in the input, and sends the query to the API via the Javascript fetch method. The user inputs and the 'bot' outputs are of different color, and the output is stored like a chat history and the user can view by scrolling.
</li>
<li>API endpoints the UI uses <br><br>
  We use the endpoint - http://127.0.0.1:8000/query_processor/ to hit the API defined in the backend.
</li>
<li> The key challenges you faced in building the front-end<br><br>
  <ul>
    <li>The output was returned as a list from the API. Hence, the chat window displayed it all in one line, and it overflowed to next line. Hence, I had to parse the object with an iterator, and display each and every entry within the object in a new span within a div. </li>
  </ul>
</li>

<li>How would you improve the front-end, if you had more time to work on it?<br><br>
  <ul>
    <li>The UI is unpolished, and without any UX appeal. Hence I will discuss with UX designers and give it better aesthetics, using customer input to improve retention.</li>
  </ul>
</li>
<br><br>
Steps to run the program - <br>
1. Clone the frontend code from https://github.com/kai-subramanian/natural-query <br>
2. Clone the backend API repo from https://github.com/kai-subramanian/bytegenie <br>
3. Kindly delete the provided takehome_bytegenie.db as the data_api will recreate the db. Not deleting the existing db will cause some errors. <br>
   a. Kindly replace the api key in data_api.py with an API from Google Gemini. You can get one here for free - https://aistudio.google.com/app/apikey <br>
4. Run the backend code from one terminal, using python data_api.py <br>
5. From another terminal, go into the natural-query folder (frontend) <br>
6. Once inside, install the dependencies for the frontend, by running npm install <br>
7. Then, run npm start. <br>
8. You should see the app open in localhost:3000 <br>
9. The logs can be viewed in the terminal that runs the server.<br>
</ol>
<p>
