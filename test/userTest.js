const assert = require('assert');
const user = require('../src/models/user');

describe('User', () => {
   describe('#username', () => {
      it('should return text separated with hyphen', () => {
         assert.strictEqual(user.name(), 'digital-shift');
      });

      it('should return formatted text', () => {
         assert.strictEqual(user.formattedName(), 'Digital shift');
      });
   });
});
