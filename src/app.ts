function Logger(logString: string) {
  console.log('LOGGER FACTORY');
  return (constructor: Function) => {
    console.log(logString);
    console.log(constructor);
  };
}

function WithTemplate(template: string, hookId: string) {
  console.log('TEMPLATE FACTORY');
  return (constructor: any) => {
    console.log('Rendering template');
    const hookEl = document.getElementById(hookId);
    const p = new constructor();
    if (hookEl) {
      hookEl.innerHTML = template;
      hookEl.querySelector('h1')!.textContent = p.name;
    }
  };
}

@Logger('LOGGING')
@WithTemplate('<h1>Person Object</h1>', 'app')
class Person {
  name = 'Ophir';

  constructor() {
    console.log('Creating person object...');
  }
}

const person = new Person();
console.log(person);
