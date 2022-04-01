import { InvoiceItem } from '@/interface/billing'

export const invoiceList: Array<InvoiceItem> = [
  {
    id: 1,
    date: 'Sat Mar 24 2022 00:00:00 GMT+0800 (中国标准时间)',
    type: 'pay',
    money: 40,
    payItem: {
      id: 1,
      title: 'Nimbus Frontend',
      owner: 'Liu Sha',
      state: 'Normal',
      startAt: 'Sat Mar 12 2022 10:12:09 GMT+0800 (中国标准时间)',
      core: '2 Core CPU',
      ram: '8GB RAM',
      dueTo: '1~5M',
      center: 'Ubuntu'
    }
  },
  {
    id: 2,
    date: 'Sat Mar 25 2022 03:02:01 GMT+0800 (中国标准时间)',
    type: 'top up',
    money: 140
  },
  {
    id: 3,
    date: 'Sat Mar 28 2022 01:02:00 GMT+0800 (中国标准时间)',
    type: 'pay',
    money: 20,
    payItem: {
      id: 2,
      title: 'Node Frontend',
      owner: 'Liu Sha',
      state: 'Normal',
      startAt: 'Sat Mar 12 2022 07:02:10 GMT+0800 (中国标准时间)',
      core: '2 Core CPU',
      ram: '8GB RAM',
      dueTo: '1~5M',
      center: 'Ubuntu'
    }
  },
  {
    id: 4,
    date: 'Sat Mar 24 2022 11:09:00 GMT+0800 (中国标准时间)',
    type: 'pay',
    money: 22,
    payItem: {
      id: 5,
      title: 'Nimbus Frontend',
      owner: 'Liu Sha',
      state: 'Normal',
      startAt: 'Sat Mar 12 2022 10:09:00 GMT+0800 (中国标准时间)',
      core: '2 Core CPU',
      ram: '8GB RAM',
      dueTo: '1~5M',
      center: 'Ubuntu'
    }
  },
  {
    id: 5,
    date: 'Sat Mar 24 2022 00:20:07 GMT+0800 (中国标准时间)',
    type: 'pay',
    money: 14,
    payItem: {
      id: 6,
      title: 'Nimbus Frontend',
      owner: 'Liu Sha',
      state: 'Normal',
      startAt: 'Sat Mar 12 2022 11:20:22 GMT+0800 (中国标准时间)',
      core: '2 Core CPU',
      ram: '8GB RAM',
      dueTo: '1~5M',
      center: 'Ubuntu'
    }
  }
]

export default {}
