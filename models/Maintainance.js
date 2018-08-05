var keystone = require('keystone');
var Types = keystone.Field.Types;

var Maintainance = new keystone.List('Maintainance');

Maintainance.add({
    setMaintainance: { type: Boolean, required: true },
    DateTime: { type: Types.Datetime, required: true, initial: true, index: true }
});

Maintainance.schema.virtual('canAccessKeystone').get(function () {
    return true;
});

Maintainance.defaultColumns = 'setMaintainance, DateTime';
Maintainance.register();