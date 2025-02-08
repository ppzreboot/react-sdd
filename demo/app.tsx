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
      <div>
        <label>Age</label>
        <input
          value={user.age}
          onChange={evt => {
            props.user.set_state(os => ({
              age: Number(evt.target.value),
            }))
          }}
        />
      </div>
    </div>
  )
}
