/**
* @license Apache-2.0
*
* Copyright (c) 2023 The Stdlib Authors.
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

var isNonNegativeInteger = require( '@stdlib/assert-is-nonnegative-integer' ).isPrimitive;
var isNumber = require( '@stdlib/assert-is-number' ).isPrimitive;
var setReadOnly = require( '@stdlib/utils-define-nonenumerable-read-only-property' );
var setReadOnlyAccessor = require( '@stdlib/utils-define-nonenumerable-read-only-accessor' );
var setReadWriteAccessor = require( '@stdlib/utils-define-nonenumerable-read-write-accessor' );
var constantFunction = require( '@stdlib/utils-constant-function' );
var noop = require( '@stdlib/utils-noop' );
var base = require( '@stdlib/random-base-geometric' );
var ctors = require( '@stdlib/array-typed-real-float-ctors' );
var filledBy = require( '@stdlib/array-base-filled-by' );
var nullary = require( '@stdlib/strided-base-nullary' );
var unary = require( '@stdlib/strided-base-unary' );
var format = require( '@stdlib/string-format' );
var defaults = require( './defaults.json' );
var validate = require( './validate.js' );


// MAIN //

/**
* Returns a function for creating arrays containing pseudorandom numbers drawn from a geometric distribution.
*
* @param {PositiveNumber} [p] - success probability
* @param {Options} [options] - function options
* @param {PRNG} [options.prng] - pseudorandom number generator which generates uniformly distributed pseudorandom numbers
* @param {PRNGSeedMT19937} [options.seed] - pseudorandom number generator seed
* @param {PRNGStateMT19937} [options.state] - pseudorandom number generator state
* @param {boolean} [options.copy=true] - boolean indicating whether to copy a provided pseudorandom number generator state
* @param {string} [options.dtype="float64"] - default data type
* @throws {TypeError} `p` must be a positive number
* @throws {TypeError} options argument must be an object
* @throws {TypeError} must provide valid options
* @throws {Error} must provide a valid state
* @returns {Function} function for creating arrays
*
* @example
* var geometric = factory( 0.3 );
* // returns <Function>
*
* var arr = geometric( 10 );
* // returns <Float64Array>
*
* @example
* var geometric = factory( 0.3 );
* // returns <Function>
*
* var arr = geometric( 10, {
*     'dtype': 'generic'
* });
* // returns [...]
*/
function factory() {
	var options;
	var nargs;
	var opts;
	var rand;
	var prng;
	var err;

	opts = {
		'dtype': defaults.dtype
	};

	nargs = arguments.length;
	if ( nargs === 0 ) {
		prng = base;
		rand = geometric2;
	} else if ( nargs === 1 ) {
		options = arguments[ 0 ];
		prng = base.factory( options );
		if ( isNumber( options ) ) {
			rand = geometric1;
		} else {
			err = validate( opts, options );
			if ( err ) {
				throw err;
			}
			rand = geometric2;
		}
	} else if ( nargs === 2 ) {
		options = arguments[ 1 ];
		prng = base.factory( arguments[ 0 ], options );
		err = validate( opts, options );
		if ( err ) {
			throw err;
		}
		rand = geometric1;
	}
	if ( options && options.prng ) {
		setReadOnly( rand, 'seed', null );
		setReadOnly( rand, 'seedLength', null );
		setReadWriteAccessor( rand, 'state', constantFunction( null ), noop );
		setReadOnly( rand, 'stateLength', null );
		setReadOnly( rand, 'byteLength', null );
	} else {
		setReadOnlyAccessor( rand, 'seed', getSeed );
		setReadOnlyAccessor( rand, 'seedLength', getSeedLength );
		setReadWriteAccessor( rand, 'state', getState, setState );
		setReadOnlyAccessor( rand, 'stateLength', getStateLength );
		setReadOnlyAccessor( rand, 'byteLength', getStateSize );
	}
	setReadOnly( rand, 'PRNG', prng.PRNG );
	return rand;

	/**
	* Returns an array containing pseudorandom numbers drawn from a geometric distribution with parameters `p`.
	*
	* @private
	* @param {NonNegativeInteger} len - array length
	* @param {Options} [options] - function options
	* @param {string} [options.dtype] - output array data type
	* @throws {TypeError} first argument must be a nonnegative integer
	* @throws {TypeError} options argument must be an object
	* @throws {TypeError} must provide valid options
	* @returns {(Array|TypedArray)} output array
	*/
	function geometric1( len, options ) {
		var ctor;
		var out;
		var err;
		var dt;
		var o;
		if ( !isNonNegativeInteger( len ) ) {
			throw new TypeError( format( 'invalid argument. First argument must be a nonnegative integer. Value: `%s`.', len ) );
		}
		o = {};
		if ( arguments.length > 1 ) {
			err = validate( o, options );
			if ( err ) {
				throw err;
			}
		}
		dt = o.dtype || opts.dtype;
		if ( dt === 'generic' ) {
			return filledBy( len, prng );
		}
		ctor = ctors( dt );
		out = new ctor( len );
		nullary( [ out ], [ len ], [ 1 ], prng );
		return out;
	}

	/**
	* Returns an array containing pseudorandom numbers drawn from a geometric distribution with parameters `p` (success probability).
	*
	* @private
	* @param {NonNegativeInteger} len - array length
	* @param {PositiveNumber} p - success probability
	* @param {Options} [options] - function options
	* @param {string} [options.dtype] - output array data type
	* @throws {TypeError} first argument must be a nonnegative integer
	* @throws {TypeError} options argument must be an object
	* @throws {TypeError} must provide valid options
	* @returns {(Array|TypedArray)} output array
	*/
	function geometric2( len, p, options ) {
		var ctor;
		var out;
		var err;
		var dt;
		var o;
		if ( !isNonNegativeInteger( len ) ) {
			throw new TypeError( format( 'invalid argument. First argument must be a nonnegative integer. Value: `%s`.', len ) );
		}
		o = {};
		if ( arguments.length > 2 ) {
			err = validate( o, options );
			if ( err ) {
				throw err;
			}
		}
		// NOTE: we could alternatively use the PRNG factory function to create a PRNG function which applies parameters for each invocation; however, this would impose a one-time cost which is likely to be rather expensive when generating small arrays. Decision made here to avoid this cost, despite a small cost due to repeatedly validating parameters for each generated pseudorandom number. Additionally, the current implementation has the added benefit that it mirrors the underlying PRNG where invalid parameters result in a return value of `NaN`.
		dt = o.dtype || opts.dtype;
		if ( dt === 'generic' ) {
			return filledBy( len, wrapper );
		}
		ctor = ctors( dt );
		out = new ctor( len );
		unary( [ [ p ], out ], [ len ], [ 0, 1 ], prng );
		return out;

		/**
		* Applies parameters to a pseudorandom number generator function.
		*
		* @private
		* @returns {number} pseudorandom number
		*/
		function wrapper() {
			return prng( p );
		}
	}

	/**
	* Returns the PRNG seed.
	*
	* @private
	* @returns {PRNGSeedMT19937} seed
	*/
	function getSeed() {
		return rand.PRNG.seed;
	}

	/**
	* Returns the PRNG seed length.
	*
	* @private
	* @returns {PositiveInteger} seed length
	*/
	function getSeedLength() {
		return rand.PRNG.seedLength;
	}

	/**
	* Returns the PRNG state length.
	*
	* @private
	* @returns {PositiveInteger} state length
	*/
	function getStateLength() {
		return rand.PRNG.stateLength;
	}

	/**
	* Returns the PRNG state size (in bytes).
	*
	* @private
	* @returns {PositiveInteger} state size (in bytes)
	*/
	function getStateSize() {
		return rand.PRNG.byteLength;
	}

	/**
	* Returns the current pseudorandom number generator state.
	*
	* @private
	* @returns {PRNGStateMT19937} current state
	*/
	function getState() {
		return rand.PRNG.state;
	}

	/**
	* Sets the pseudorandom number generator state.
	*
	* @private
	* @param {PRNGStateMT19937} s - generator state
	* @throws {Error} must provide a valid state
	*/
	function setState( s ) {
		rand.PRNG.state = s;
	}
}


// EXPORTS //

module.exports = factory;
