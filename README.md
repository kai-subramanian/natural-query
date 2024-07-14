<p><h3><b>The Frontend</b></h3>
<ol>
<li> The key functionalities of the UI <br><br>
  The UI is a very simple frontend that has a text box, and takes in the input, and sends the query to the API via the Javascript fetch method. The user inputs and the 'bot' outputs are of different color, and the output is stored like a chat history and the user can view by scrolling.
</li>
<li>the API endpoints the UI uses <br><br>
  We use the endpoint - http://127.0.0.1:8000/query_processor/ to hit the API defined in the backend.
</li>
<li> the key challenges you faced in building the front-end;<br><br>
  <ul>
    <li>The output was returned as a list from the API. Hence, the chat window displayed it all in one line, and it overflowed to next line. Hence, I had to parse the object with an iterator, and display each and every entry within the object in a new span within a div. </li>
  </ul>
</li>

<li>how would you improve the front-end, if you had more time to work on it?<br><br>
  <ul>
    <li>The UI is unpolished, and without any UX appeal. Hence I will discuss with UX designers and give it better aesthetics, using customer input to improve retention.</li>
  </ul>
</li>
</ol>
<p>
