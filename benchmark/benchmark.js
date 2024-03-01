/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var bench = require( '@stdlib/bench-harness' );
var exponential = require( '@stdlib/random-base-exponential' );
var geometric = require( '@stdlib/random-base-geometric' );
var isFunction = require( '@stdlib/assert-is-function' );
var pkg = require( './../package.json' ).name;
var unaryFactory = require( './../lib' );


// MAIN //

bench( pkg, function benchmark( b ) {
	var values;
	var f;
	var i;

	values = [
		exponential,
		geometric
	];

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		f = unaryFactory( values[ i%values.length ] );
		if ( typeof f !== 'function' ) {
			b.fail( 'should return a function' );
		}
	}
	b.toc();
	if ( !isFunction( f ) ) {
		b.fail( 'should return a function' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::factory', function benchmark( b ) {
	var rand;
	var f;
	var i;

	f = unaryFactory( exponential );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		rand = f();
		if ( typeof rand !== 'function' ) {
			b.fail( 'should return a function' );
		}
	}
	b.toc();
	if ( !isFunction( rand ) ) {
		b.fail( 'should return a function' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});
