({
    createItem : function (component, newItemToSave)
    {
        var addItem = component.getEvent("addItem");
        addItem.setParams({"item":newItemToSave});
        console.log('list form helper - '+newItemToSave.Name);
        console.log('list form helper event - '+addItem);
        addItem.fire();
        component.set("v.newItem",{ 'sobjectType': 'Camping_Item__c',
                                   'Name': '',
                                   'Quantity__c': 0,
                                   'Price__c': 0,
                                   'Packed__c': false });
    }
});