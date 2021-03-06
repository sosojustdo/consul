import { moduleFor, test } from 'ember-qunit';

moduleFor('route:dc/kv/edit', 'Unit | Route | dc/kv/edit', {
  // Specify the other units that are required for this test.
  needs: [
    'service:repository/kv',
    'service:repository/session',
    'service:feedback',
    'service:logger',
    'service:flashMessages',
  ],
});

test('it exists', function(assert) {
  let route = this.subject();
  assert.ok(route);
});
