'use strict';

import {softplus} from '../src/softplus.js';
import {Tensor} from '../src/lib/tensor.js';
import * as utils from './utils.js';

describe('test softplus', function() {
  function testElu(inputShape, inputValue, expected, options = {}) {
    const inputTensor = new Tensor(inputShape, inputValue);
    const outputTensor = softplus(inputTensor, options);
    utils.checkValue(outputTensor, expected);
  }

  it.only('softplus default', function() {
    testElu(
        [4],
        [-1, 0, 1, 2],
        [
          0.31326168751822286,
          0.6931471805599453,
          1.3132616875182228,
          2.1269280110429727,
        ],
    );
  });

  it.only('softplus', function() {
    testElu(
        [4],
        [-1, 0, 1, 2],
        [
          0.0634640055214863,
          0.34657359027997264,
          1.0634640055214863,
          2.0090749639589047,
        ],
        {steepness: 2},
    );
  });
});
