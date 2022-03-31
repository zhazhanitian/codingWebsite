export interface EnvironmentItem {
  id: Number
  title: string
  owner: string
  state: 'Normal' | 'Repair'
  startAt: string
  core: '1 Core CPU' | '2 Core CPU' | '4 Core CPU' | '8 Core CPU' | '16 Core CPU'
  ram: '4GB RAM' | '8GB RAM' | '16GB RAM' | '32GB RAM'
  dueTo: '1~5M' | '5~10M' | '10~50M' | '50~100M' | '100~500M' | '1000M'
  center: 'Ubuntu' | 'Center Os' | 'Unix' | 'Linux'
}
