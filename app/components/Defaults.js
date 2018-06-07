import React from 'react';
import styles from './Defaults.scss';

const printReadable = value => {
  if(Array.isArray(value)) {
      return value.join(', ');
  } else if(typeof value === 'string' || value instanceof String) {
    return value;
  } else {
    return '';
  }
}

const Defaults = ({defaults, actions}) =>
  <form action="#" className={styles.form}>
    {Object.keys(actions).map(key =>
      <input
        key={key}
        className={styles.input}
        type="text"
        value={printReadable(defaults[key])}
        name={key}
        placeholder={`Override ${key}`}
        onChange={actions[key]}
      />
    )}
  </form>

export default Defaults;

/*
<input className={styles.input} type="text" value={defaults.audience || ''} name="audience" placeholder="Override Audience" onChange={actions.audience} />
<input className={styles.input} type="text" value={defaults.adjectives ? defaults.adjectives.join(', ') : ''} name="adjectives" placeholder="Override Adjectives (separate with commas)" onChange={actions.adjectives} />
<input className={styles.input} type="text" value={defaults.city || ''} name="city" placeholder="Override City" onChange={actions.city} />
<input className={styles.input} type="text" value={defaults.businessName || ''} name="businessName" placeholder="Override Business Name" onChange={actions.businessName} />
<input className={styles.input} type="text" value={defaults.businessType || ''} name="businessType" placeholder="Override Business Type" onChange={actions.businessType} />
*/
