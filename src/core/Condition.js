/**
 * Condition
 *
 * Copyright (c) 2014 Renato de Pontes Pereira.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to 
 * deal in the Software without restriction, including without limitation the 
 * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
 * sell copies of the Software, and to permit persons to whom the Software is 
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, 
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER 
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING 
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
 * IN THE SOFTWARE.
**/

/**
 * @module Behavior3JS
 **/

// namespace:
this.b3 = this.b3 || {};

(function() {
"use strict";

/**
 * Condition is the base class for all condition nodes. Thus, if you want to 
 * create new custom condition nodes, you need to inherit from this class. 
 *
 * @class Condition
 * @extends BaseNode
**/
var Condition = b3.Class(b3.BaseNode);

var p = Condition.prototype;

    /**
     * Node category. Default to `b3.CONDITION`.
     *
     * @property category
     * @type {String}
     * @readonly
    **/
    p.category = b3.CONDITION;

    p.__BaseNode_initialize = p.initialize;
    /**
     * Initialization method.
     *
     * @method initialize
     * @constructor
    **/
    p.initialize = function() {
        this.__BaseNode_initialize();
    }

b3.Condition = Condition;

})();