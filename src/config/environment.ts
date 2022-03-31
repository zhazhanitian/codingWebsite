import { EnvironmentItem } from '@/interface/environment'

export const coreCpuList = ['1 Core CPU', '2 Core CPU', '4 Core CPU', '8 Core CPU', '16 Core CPU']

export const ramList = ['4GB RAM', '8GB RAM', '16GB RAM', '32GB RAM']

export const dueToList = ['1~5M', '5~10M', '10~50M', '50~100M', '100~500M', '1000M']

export const centerList = ['Ubuntu', 'Center Os', 'Unix', 'Linux']

export const defaultEnvironmentItem: EnvironmentItem = {
  id: 0,
  title: '',
  owner: 'Biao Di',
  state: 'Normal',
  startAt: new Date().toDateString(),
  core: '2 Core CPU',
  ram: '4GB RAM',
  dueTo: '1~5M',
  center: 'Ubuntu'
}

export default {}
