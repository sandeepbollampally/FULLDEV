({
    clickCreateItem : function(component, event, helper) {
        var validCamping = component.find('campingform').reduce(function (validSoFar, inputCmp) {
            inputCmp.showHelpMessageIfInvalid();
            return validSoFar && inputCmp.get('v.validity').valid;
        }, true);   
        console.log(validCamping);
        if(validCamping){  
            var newCamping = component.get("v.newItem");
            console.log('list form js - '+newCamping.Name);
            helper.createItem(component,newCamping);
        }      
    }
});