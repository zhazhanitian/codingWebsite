export interface TeamItem {
  id: Number
  name: string
  email: string
  attar: string
  granted: string
  role: 'Guest' | 'Reporter' | 'Developer' | 'Maintainer'
}
