import React from 'react';
import './Inquiry.css';

function Inquiry() {
  return (
    <div className="inquiry">
      <div className='inquiry-container'>
      <form onSubmit={(e) => e.preventDefault()}>
        <div>
          <label>First Name <small>(required)</small></label>
          <input type="text" required />
          
          <label>Last Name <small>(required)</small></label>
          <input type="text" required />
        </div>

        <div>
          <label>Email <small>(required)</small></label>
          <input type="email" required />
        </div>

        <div>
          <label>Subject <small>(required)</small></label>
          <input type="text" required />
        </div>

        <div>
          <label>Message <small>(required)</small></label>
          <textarea rows="6" required></textarea>
        </div>

        <button type="submit">Submit</button>
      </form>
      </div>
    </div>
  );
}

export default Inquiry;