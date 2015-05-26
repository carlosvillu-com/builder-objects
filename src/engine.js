import * as Promise from 'bluebird'

export default class Engine {
  constructor(){
  }

  // La mitad de las veces arranca y la mitad de las veces falla
  start(){
    return ( Math.random() * (10 - 0) + 0 ) > 5 ? Promise.resolve() : Promise.reject()
  }
}

