import { EnvironmentItem } from '@/interface/environment'

export interface InvoiceItem {
  id: Number
  date: string
  type: 'top up' | 'pay'
  money: number
  payItem?: EnvironmentItem
}
