export function dateFormatTemp(
  value: string | number,
  fmt: string = 'YYYY-mm-dd HH:MM:SS'
): string {
  let ret: any
  let date: Date = new Date()
  if (typeof value === 'string' || typeof value === 'number') date = new Date(value)
  const opt = {
    'Y+': date.getFullYear().toString(),
    'm+': (date.getMonth() + 1).toString(),
    'd+': date.getDate().toString(),
    'H+': date.getHours().toString(),
    'M+': date.getMinutes().toString(),
    'S+': date.getSeconds().toString()
  }
  for (const k in opt) { // eslint-disable-line
    ret = new RegExp(`(${k})`).exec(fmt)
    if (ret) {
      // @ts-ignore
      fmt = fmt.replace(ret[1], ret[1].length === 1 ? opt[k] : opt[k].padStart(ret[1].length, '0')) // eslint-disable-line
    }
  }
  return fmt
}

export default {}
