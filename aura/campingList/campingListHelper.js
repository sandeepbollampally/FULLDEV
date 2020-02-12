({
    createItemForm : function (component, camping)
    {
        //var newCamping = JSON.parse(JSON.stringify(camping));
        //console.log("after - "+newCamping);
        var action = component.get("c.saveItem");
        console.log('list js helper - '+camping.Name);
        action.setParams({
            "CampingItem":camping
        });
        action.setCallback(this,function(response){
        var state = response.getState();
        if (state === "SUCCESS") {
            var theCampings = component.get("v.items");
            theCampings.push(response.getReturnValue());
            component.set("v.items",theCampings);
        }
    });
        $A.enqueueAction(action);
    } 
});