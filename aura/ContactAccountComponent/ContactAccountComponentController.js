({
	loadContacts : function(component, event, helper) {
        var action = component.get('c.getContacts');
        action.setParams({
            "AccountId" : component.get("v.recordId")
        });
        action.setCallback(this, function(response) {
            var state = response.getState();
            if (state === "SUCCESS") {
                component.set('v.data', response.getReturnValue());
                console.log(response.getReturnValue());
            }
            else if (state === "ERROR") {
                var errors = response.getError();
                if (errors) {
                    if (errors[0] && errors[0].message) {
						component.set('v.error',errors[0].message);
                        console.log("Error message: " + errors[0].message);
                    }
                } else {
                    component.set('v.error','Cannot load contacts. Please contact Administrator');
                    console.log("Unknown error");
                }
            }
        });
        $A.enqueueAction(action);
	},
    applyCSS : function(component, event, helper){
        var input = component.get("v.InputText");
        if(input !='' && input != null && input != undefined && input.replace(/\s/g, '').length !== 0){
            var NewRow = component.find('newrow');
            $A.util.addClass(NewRow, 'slds-hide');
            var action = component.get('c.updateContact');
            action.setParams({
                ContactId : conid,
                Name : input
            });
            action.setCallback(this, function(response) {
                var state = response.getState();
                if (state === "SUCCESS") {
                    var aftersave = component.get('c.loadContacts');
                    $A.enqueueAction(aftersave);
                    component.set('v.InputText','');
                }
                else if (state === "ERROR") {
                    var errors = response.getError();
                    if (errors) {
                        if (errors[0] && errors[0].message) {
                            component.set('v.error',errors[0].message);
                            console.log("Error message: " + errors[0].message);
                        }
                    } else {
                        component.set('v.error','Cannot load contacts. Please contact Administrator');
                        console.log("Unknown error");
                    }
                }
            });
            $A.enqueueAction(action);
        }else{
            component.set('v.error','Input cannot be empty');
        }
    },
    removeCSS : function(component, event, helper){
        var NewRow = component.find('newrow');
        $A.util.removeClass(NewRow, 'slds-hide');
        window.conid = event.target.id;
    }
})