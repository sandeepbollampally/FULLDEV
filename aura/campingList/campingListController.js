({
    doInit: function(component, event, helper) {
        var action = component.get("c.getItems");
        action.setCallback(this, function(response){
            var state = response.getState();
            if (component.isValid() && state === "SUCCESS") 
            {
                component.set("v.items", response.getReturnValue());
            }
            else
            {
                console.log("Failed with state: " + state);
            }});
        $A.enqueueAction(action);  
    },
    handleAddItem : function(component, event, helper) {
        var newCamping = event.getParam("item");
        var action = component.get("c.saveItem");
        action.setParams({
            "CampingItem":newCamping
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