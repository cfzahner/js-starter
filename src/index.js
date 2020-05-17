// TODO: 'import' functional components from "./components"

// '#root' is the 'mounting point' for our app inside of './index.html'
const root = document.querySelector('#root')

/**
 * 'state' keeps track of...the 'state' of our application.
 * It contains any/all information that
 * FUNCTIONAL COMPONENTS would need to do their job;
 * These are divvied up per FUNCTIONAL COMPONENT.
 *
 * ⚠️ 'state' SHOULD NOT have any METHODS - only PROPERTIES❗
 */
const state = {
  // TODO: Add PROPERTIES to correspond with what each FUNCTIONAL COMPONENT will need.
}

const render = (state) => {
  // 'innerHTML' will be updated with the HTML 'return'ed from the FUNCTIONAL COMPONENTS.
  root.innerHTML = ''
}

// TODO: Remove this 👇🏽
console.log(state, render)
