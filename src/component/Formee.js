import React from 'react'

function Formee() {
  return (
    <div><div class="form">
    <form>
    <fieldset>
    <legend><span class="number">1</span> Candidate Info</legend>
    <input type="text" placeholder="Your Name *"/>
    <input type="email" placeholder="Your Email *"/>
    <textarea placeholder="About yourself"></textarea>
    <label for="job">Interests:</label>
    <select id="job">
      <option value="reading">Reading</option>
      <option value="boxing">Boxing</option>
      <option value="gaming">Gaming</option>
      <option value="football">Football</option>
      <option value="swimming">Swimming</option>
      <option value="cycling">Cycling</option>
      <option value="other">something else </option>
    </select>      
    </fieldset>
    <fieldset>
    <legend><span class="number">2</span> Additional Info</legend>
    <textarea placeholder="you are free"></textarea>
    </fieldset>
    <input type="submit" value="Apply" />
    </form>
    </div></div>
  )
}

export default Formee