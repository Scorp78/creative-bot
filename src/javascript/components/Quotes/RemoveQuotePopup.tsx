import * as React from 'react';
import { useState } from 'react';
import { filter, first } from 'rxjs/operators';
import { theme } from '../../helpers';
let { setRxQuotes, rxQuotes } = require('../../helpers/rxQuotes');

const Window: any = window;
const { ipcRenderer } = Window.require('electron');

const RemoveQuotePopup = ({
  quote,
  styles,
  closeCurrentPopup,
  stateTheme,
  nth,
  quotes
}) => {
  let name = quote.quote;

  const saveToDB = () => {
    if (name.length === 0) return console.log('NAME LENGTH IS 0');
    let Quotes = Object.assign({}, quotes);
    delete Quotes[
      Number(quote.quoteId) ? Number(quote.quoteId) : quote.quoteId
    ];

    setRxQuotes(Quotes);
  };

  return (
    <div className={styles.popup}>
      <div className={styles.remove_text}>
        You're about to delete this quote! Are you sure you want to do that?
      </div>
      <div
        className={styles.submit}
        style={theme.globals.destructiveButton}
        onClick={() => {
          saveToDB();
          closeCurrentPopup();
        }}
      >
        YES
      </div>
    </div>
  );
};

export { RemoveQuotePopup };
