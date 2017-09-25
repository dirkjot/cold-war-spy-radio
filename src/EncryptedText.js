import React from 'react';
import './EncryptedText.css'

export function EncryptedText (props) {
  return (
    <div className="flexContainer">
      <table className="flexunit">
        <thead>
          <tr><td>Encrypted Text</td></tr></thead>
        <tbody>
          <tr><td>{props.secretMessage}</td></tr></tbody>
      </table>
    </div>)

}
