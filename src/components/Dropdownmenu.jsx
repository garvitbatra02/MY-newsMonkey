import React, { Component } from 'react'

export default class Dropdownmenu extends Component {
    render() {
        return (
            <div>
                <div className="dropdown">
  <a className="btn btn-secondary dropdown-toggle" href="/" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
    country
  </a>

  <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
    <li><a className="dropdown-item" href="/">in</a></li>
    <li><a className="dropdown-item" href="/">us</a></li>
    <li><a className="dropdown-item" href="/">ae</a></li>
  </ul>
</div>
            </div>
        )
    }
}
