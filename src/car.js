export default class Car {
  constructor( engine ){
    this._engine = engine;
    this._started = false;
  }

  start(){
    return this._engine.start()
    .then( () => this._started = true )
    .catch( () => this._started = false )
  }

  get isStarted(){
    return this._started;
  }

}
