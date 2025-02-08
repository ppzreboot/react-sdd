import { app_state, I_page2 } from './sdd'


export
function APP() {
  return <Page2 {...app_state.page2} />
}

function Page2(props: I_page2) {
  return (
    <div>test</div>
  )
}
