import React from 'react';

import './navigation-bar.css';

// The NavigationBar component goes here.  It should be the default export.
export default function NavigationBar(props) {

  const linksList = props.links.map((item, index) => <li key={index} className="navigation__link"><a href={item.href}>{item.text}</a></li>);

  return (
    <div className="navigation">
      <h1 className="navigation__title">{props.title}</h1>
      <ul className="navigation__links">{linksList}</ul>
    </div>
  )
}

