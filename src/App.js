// import "./App.css";

// function App() {
//   return (
//     <div className="container">
//       <div className="card">
//         <h1>Anonymous Feedback 🤍</h1>

//         <p>
//           A safe space for your honest thoughts...
//         </p>

//         <form
//           action="https://formsubmit.co/shanmukhanaidudatti@gmail.com"
//           method="POST"
//         >
//           {/* Disable captcha */}
//           <input type="hidden" name="_captcha" value="false" />

//           {/* Email subject */}
//           <input
//             type="hidden"
//             name="_subject"
//             value="New Anonymous Feedback!"
//           />

//           {/* Thank you page */}
//           <input
//             type="hidden"
//             name="_next"
//             value="https://yourwebsite.vercel.app/thankyou"
//           />

//           <textarea
//             name="feedback"
//             placeholder="Type your thoughts here..."
//             required
//           ></textarea>

//           <button type="submit">
//             Send Anonymously
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default App;
import "./App.css";

function App() {
  return (
    <div className="container">
      <div className="card">
        <h1>Anonymous Feedback 🤍</h1>

        <p>
          A safe space for your honest thoughts...
        </p>

       <form action="https://api.web3forms.com/submit" method="POST">

  <input
    type="hidden"
    name="access_key"
    value="3db5ed67-1efe-4e9d-980a-ebb575005358"
  />

  <textarea
    name="feedback"
    placeholder="Type your thoughts..."
    required
  ></textarea>

  <button type="submit">
    Send Anonymously
  </button>

</form>
      </div>
    </div>
  );
}

export default App;