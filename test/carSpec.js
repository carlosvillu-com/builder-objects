import {expect} from 'chai'
import Car from '../src/car'
import EngineBuilder from './fixtures/engineBuilder'


describe( 'Car', () =>{
  it( 'should exists', () => {
    expect( Car ).to.not.be.undefined
  } );

  describe( 'An instance', () =>{
    it( 'When fail the engine the car is not started', ( done ) => {
      let engine = new EngineBuilder().startWith( EngineBuilder.FAIL ).getInstance();
      let car = new Car( engine );
      car.start()
      .then( () => {
        expect( car.isStarted ).to.be.false
        done()
      } );
    } );

    it( 'When doens´t fail the engine the car is started', ( done ) => {
      let engine = new EngineBuilder().startWith( EngineBuilder.SUCCESS ).getInstance();
      let car = new Car( engine );
      car.start()
      .then( () => {
        expect( car.isStarted ).to.be.true
        done()
      } );
    } );

  } );
} );

