console.log('tomato JS was loaded')
export default function Tomato() {
    const snippetApp = `
    <h1>Sample sinppet app</h1>
    `
    document.getElementsByTagName('div')[1].innerHTML += snippetApp

//   alert('Tomato')
}
