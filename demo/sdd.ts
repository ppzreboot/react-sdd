import { I_SDD, SDD } from '../dist'

export
interface I_page2 {
  user: I_SDD<{
    name: string
    age: number
  }>
}

interface I_app_state {
  page1: {}
  page2: I_page2
}

export
const app_state: I_app_state = {
  page1: {},
  page2: {
    user: SDD({
      name: 'John',
      age: 25,
    })
  }
}
