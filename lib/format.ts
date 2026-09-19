const aud = new Intl.NumberFormat("en-AU", {
  style: "currency",
  currency: "AUD",
  currencyDisplay: "narrowSymbol",
  maximumFractionDigits: 0,
})

/** 150 -> "$150" */
export const formatAud = (dollars: number) => aud.format(dollars)
