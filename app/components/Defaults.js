import React from 'react';
import styles from './Defaults.scss';

const Defaults = ({defaults, actions}) =>
  <form action="#" className={styles.form}>
    <input className={styles.input} type="text" value={defaults.audience || ''} name="audience" placeholder="Override Audience" onChange={actions.audience} />
    <input className={styles.input} type="text" value={defaults.adjectives ? defaults.adjectives.join(', ') : ''} name="adjectives" placeholder="Override Adjectives (separate with commas)" onChange={actions.adjectives} />
    <input className={styles.input} type="text" value={defaults.city || ''} name="city" placeholder="Override City" onChange={actions.city} />
    <input className={styles.input} type="text" value={defaults.businessName || ''} name="businessName" placeholder="Override Business Name" onChange={actions.businessName} />
    <input className={styles.input} type="text" value={defaults.businessType || ''} name="businessType" placeholder="Override Business Type" onChange={actions.businessType} />
  </form>

export default Defaults;