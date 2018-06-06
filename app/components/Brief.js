import React from 'react';
import PropTypes from 'prop-types';
import styles from './Brief.scss';
import BriefModel from '../models/Brief';

const formatList = words => {
  if(words.length === 1) {
    return <span className={styles.item}>{words[0]}</span>;
  } else if(words.length === 2) {
    //return words.join(' and ');
    return [
      <span key="1" className={styles.item}>{words[0]}</span>
      , <span key="2"> and </span>
      , <span key="3" className={styles.item}>{words[1]}</span>
    ]
  } else {
    return [
      ...words.slice(0,-1).map((word, i) => <span key={`${word}-${i}-wrapper`}><span key={word} className={styles.item}>{word}</span>, </span>),
      (<span key=",">and </span>),
      <span key="last-word" className={styles.item}>{words.slice(-1)[0]}</span>
    ];
  }
}

const Brief = ({brief}) => (
  <article>
    <h1>Your Design Brief</h1>
    <p>
      Design a website for <span className={styles.item}>{brief.businessName}</span>, a <span className={styles.item}>{brief.businessType}</span> in <span className={styles.item}>{brief.city}</span>.
    </p>
    <p>
      They want a website that will appeal to <span className={styles.item}>{brief.audience.toLowerCase()}</span> and is {formatList(brief.adjectives)}.
    </p>
  </article>
);

export default Brief;
