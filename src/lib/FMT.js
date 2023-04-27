const NUM_LOCALE = 'pt-BR'

const CURRENCY = new Intl.NumberFormat(NUM_LOCALE, { style: 'currency', currency: 'BRL' })
const PERCENT  = new Intl.NumberFormat(NUM_LOCALE, { style: 'percent', maximumFractionDigits: 3 })

/**
 * Formats currency values.
 * @example money(1.99) = R$1,99
 * @param {int|string} n
 * @returns {string}
 */
const money = (n) => CURRENCY.format(n)

/**
 * Formats plain percents.
 * @example
 *  percent(5.99) //=> 5.99%
 * @param n
 * @returns {string}
 */
const percent = (n) => PERCENT.format(n / 100)

export default { money, percent }
