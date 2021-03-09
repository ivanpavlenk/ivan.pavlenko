import React, { useEffect, useState } from 'react';

export function useDocumentTitle(title) {
  useEffect(() => {
    document.title = title;
  }, [title]);
}


export function PriceComponent() {
  const [price, setPrice] = useState(0);

  useDocumentTitle(`current price is ${price}$`);

  return (
    <div>
      <button onClick={() => setPrice(price + 1)}>Increase Price</button>
    </div>
  )
}
