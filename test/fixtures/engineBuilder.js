import * as sinon from 'sinon'
import * as Promise from 'bluebird'

const factory = function(){
  let Factory = function(){};
  Factory.prototype.start = sinon.stub()
  return Factory;
}

export default class EngineBuilder {
  
  static SUCCESS = "success"
  static FAIL = "fail"
  
  constructor(){
    this._Factory = factory();
  }
  
  startWith( status, ...args ){
    let promise = status === EngineBuilder.SUCCESS ? Promise.resolve : Promise.reject;
    this._Factory.prototype.start.returns( promise.apply( Promise, args ) );
    return this;
  }

  getInstance(){
    return new this._Factory();
  }

}
