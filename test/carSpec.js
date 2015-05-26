import {expect} from 'chai'

import Car from '../src/car'

import EngineBuilder from './fixtures/engineBuilder'

let engine = new EngineBuilder().startWith( EngineBuilder.FAIL ).getInstance();

engine.start()
.then( () => console.log( 'Encendido' ) )
.catch( () => console.log( 'ERROR' ) )

describe( 'Car', () =>{
  it( 'should exists', () => {
    expect( Car ).to.not.be.undefined
  } );

  describe( 'An instance', () =>{
  } );
} );

