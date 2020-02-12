({
    doInit: function(component, event, helper) {
        var action = component.get("c.getItems");
        action.setCallback(this, function(response){
            var state = response.getState();
            if (component.isValid() && state === "SUCCESS") 
            {
                component.set("v.item", response.getReturnValue());
            }
            else
            {
                console.log("Failed with state: " + state);
            }});
        $A.enqueueAction(action);  
    }
});