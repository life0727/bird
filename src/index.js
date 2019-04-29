import _ from 'lodash'
import('./index.scss')

var test = _.chunk(['a', 'b', 'c', 'd'], 2);

console.log(test)