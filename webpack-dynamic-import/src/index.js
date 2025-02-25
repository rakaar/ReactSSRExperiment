async function getFruitFn(fruit) {
  const {default: fruitFn} = await import(`./${fruit}`);
  console.log("fruit is",fruit)
  return fruitFn;
}

function component() {
    const element = document.createElement('div');
    element.innerHTML = "Hello Dynamic Component";

    const appleBtn = document.createElement('button');
    appleBtn.innerHTML = 'Apple';
    appleBtn.onclick = async () => {var fruitFn = await getFruitFn('apple'); console.log('calling fruit fn'); fruitFn()};
    element.appendChild(appleBtn);

    const orangeBtn = document.createElement('button');
    orangeBtn.innerHTML = 'Orange'
    orangeBtn.onclick = async () => {var fruitFn = await getFruitFn('orange'); console.log('calling fruit fn'); fruitFn()};

    element.appendChild(orangeBtn);


    const guavaBtn = document.createElement('button');
    guavaBtn.innerHTML = 'Guava'
    guavaBtn.onclick = async () => {var fruitFn = await getFruitFn('guava'); console.log('calling fruit fn'); fruitFn()};

    element.appendChild(guavaBtn);

  
    const div = document.createElement('div')
    div.innerHTML = "testing"
    element.appendChild(div)


    const tomato = document.createElement('button');
    tomato.innerHTML = 'tomato'
    tomato.onclick = async () => {var fruitFn = await getFruitFn('tomato'); console.log('calling fruit fn'); fruitFn()};
    element.appendChild(tomato);

  
    return element;
  }
  
  document.body.appendChild(component());


// import _ from 'lodash';

// function component() {
//     const element = document.createElement('div');
//     const btn = document.createElement('button');
  
//     element.innerHTML = _.join(['Hello', 'webpack'], ' ');

//     btn.innerHTML = 'Click me and check the console!';

//     btn.onclick = ()=>{console.log("button clicked")};


//     element.appendChild(btn);
  
//     return element;
//   }
  
//   document.body.appendChild(component());
