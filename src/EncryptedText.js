import React, { Component } from 'react';
import './EncryptedText.css'

export function EncryptedText (props) {
  return (
   <table>
     <thead><td>Encrypted Text</td></thead>
   <td>{props.text}</td>
  </table>)

}
