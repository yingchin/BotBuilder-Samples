// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.

/**
 * Entity property class.
 */
class EntityProperty {
    /**
     * Entity Property constructor.
     * 
     * @param {String} name entity name
     * @param {String} value entity value
     */
    constructor(name, value) {
        if(!name || !value) throw ('Need name and value to create an entity');
        this.entityName = name;
        this.entityValue = value;
    }
}

module.exports = EntityProperty;