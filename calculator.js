const helpers = {
  getMin: args => Math.min(...args),
  getMax: args => Math.max(...args)
}

const current = {
  testIs: test => test,
  dateIs: string => {
    const moment = string.split['/']
    const mm = moment[0]
    const dd = moment[1]
    const date = new Date()
    date.setMonth(mm)
    date.setDate(dd)
    return date
  }
}

const data = {
  grades: ['6', '7', '8', '9', '10', '11'],
  prices: [
    { test: 'P8/9', amount: 11 },
    { test: 'P11', amount: 16 },
    { test: 'SATSD', amount: 0 }
  ]
}

const calculator = {}
