({
	doInit : function(component, event, helper) {
		var action = component.get("c.contactDetails");
        action.setCallback("this",function(response){
            var toastEvent = $A.get("e.force:showToast");
            if(response.getState() === "SUCCESS"){
                component.set("v.contactlist",response.getReturnValue());
                toastEvent.setParams({"title":"Success!","message":"Your contacts are loaded successfully."})
            }
            else{
                toastEvent.setParams({"title":"Error!","message":"We could not load your contacts."})                
            }
            toastEvent.fire();
        });
         $A.enqueueAction(action);
	}
})