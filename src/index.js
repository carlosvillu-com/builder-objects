import Engine from './engine'
import Car from './car'

const TRIALS = 10
let engine = new Engine();
let car = new Car( engine );

( async function startTimes( times ){
  while(--times){
    await car.start()
    console.log( car.isStarted ? 'El coche esta arrancado!' : 'Algo malo le pasa al motor' )
  }
}( TRIALS ) );
