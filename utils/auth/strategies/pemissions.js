const scopes = {
  admin: [
    'signin:auth',
    'signup:auth',
    'create:products',
    'update:products',
    'delete:products',
    'read:prices',
    'create:prices',
    'update:prices',
    'delete:prices',
    'create:categories',
    'update:categories',
    'delete:categories',
    'create:subcategories',
    'update:subcategories',
    'delete:subcategories',
    'read:users',
    'create:users',
    'update:users',
    'delete:users',
    'read:cart',
    'create:cart',
    'update:cart',
    'delete:cart',
    'read:orders',
    'update:orders',
    'read:address',
    'create:address',
    'update:address',
    'delete:address',
    'update:supermarket',
    'delete:supermarket',
  ],
  customer: [
    'signin:auth',
    'signup:auth',
    'read:prices',
    'read:users',
    'update:users',
    'read:cart',
    'create:cart',
    'update:cart',
    'delete:cart',
    'read:orders',
    'read:address',
    'create:address',
    'update:address',
    'delete:address',
  ],
  supermarket: [
    'signin:auth',
    'signup:auth',
    'read:prices',
    'create:prices',
    'update:prices',
    'delete:prices',
    'read:users',
    'update:users',
    'read:orders',
    'update:orders',
    'update:supermarket',
  ],
};
module.exports = scopes;
