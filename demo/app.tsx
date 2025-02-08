import { I_SDD_unit, SDD_unit } from '../dist'
import { app_state, I_page2 } from './sdd'

export
function APP() {
  return <Page2 {...app_state.page2} />
}

function Page2(props: I_page2) {
  const user = props.user.useState()
  return (
    <div>
      <p>User's name is {user.name}. User's age is {user.age}.</p>
      <div>
        <label>Name</label>
        <input
          value={user.name}
          onChange={evt => {
            props.user.set_state(os => ({
              name: evt.target.value,
            }))
          }}
        />
      </div>
      <AgeInput
        age={SDD_unit(props.user, 'age')}
      />
    </div>
  )
}

function AgeInput(props: { age: I_SDD_unit<number> }) {
  return <div>
    <label>Age</label>
    <input
      value={props.age.val}
      onChange={evt => {
        props.age.set(ov => {
          const age = Number(evt.target.value)
          if (isNaN(age))
            return ov
          return age
        })
      }}
    />
  </div>
}
