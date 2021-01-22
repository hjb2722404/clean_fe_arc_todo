import low from 'lowdb';
import lodashId from 'lodash-id';
import LocalStorage from 'lowdb/adapters/LocalStorage';
const adapter = new LocalStorage('db');
const db = low(adapter);

db._.mixin(lodashId);

export default db;
