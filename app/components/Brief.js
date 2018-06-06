import React from 'react';

const formatList = words => {
  if(words.length === 1) {
    return words[0];
  } else if(words.length === 2) {
    return words.join(' and ');
  } else {
    return words.slice(0,-1).join(', ') + ', and ' + words.slice(-1)[0];
  }
}

const Brief = ({brief}) => (
  <article>
    <h1>Your Design Brief</h1>
    <p>
      Design a website for {brief.businessName}, a {brief.businessType} in {brief.city}.
    </p>
    <p>
      They want a website that will appeal to {brief.audience.toLowerCase()} and is {formatList(brief.adjectives)}.
    </p>
  </article>
)

export default Brief;
