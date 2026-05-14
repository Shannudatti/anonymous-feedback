import "./App.css";
import logo from "./assets/logo.png";

function App() {
  return (
    <div className="container">

      <div className="card">

        <div className="headingRow">

          <img
            src={logo}
            alt="logo"
            className="logo"
          />

          <h1>
            We Appreciate Your
            <span> Valuable Feedback</span>
          </h1>

        </div>

      

        <p>
          Your thoughts, suggestions, and honest words
          mean a lot to us ✨
        </p>

        <form
          action="https://api.web3forms.com/submit"
          method="POST"
        >

          <input
            type="hidden"
            name="access_key"
            value="75ed810f-338c-4ac7-a5b9-5619404a7c35"
          />

          <input
            type="hidden"
            name="subject"
            value="New Anonymous Feedback"
          />

          <textarea
            name="feedback"
            placeholder="Share your thoughts here..."
            required
          ></textarea>

          <button type="submit">
            Send Feedback ✨
          </button>

        </form>


      </div>

    </div>
  );
}

export default App;