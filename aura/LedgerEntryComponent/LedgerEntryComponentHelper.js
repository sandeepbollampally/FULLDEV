({
    getBankOptionsHelper : function(cmp, event, helper) {
        var action = cmp.get("c.getBankOptions");
        action.setCallback(this, function(response) {
            var state = response.getState();
            if (state === "SUCCESS") {
                cmp.set("v.bankOptions",response.getReturnValue());
            }else if (state === "ERROR") {
                var errors ;
                for(let item in response.getError()){
                    errors += item.message+ '\n';
                }
                this.showToast(cmp, event, helper,"Error","error",errors);
            }
        });
        $A.enqueueAction(action);
    },
    getTypeOptionsHelper : function(cmp, event, helper) {
        var action = cmp.get("c.getTypeOptions");
        action.setCallback(this, function(response) {
            var state = response.getState();
            if (state === "SUCCESS") {
                cmp.set("v.typeOptions",response.getReturnValue());
            }else if (state === "ERROR") {
                var errors ;
                for(let item in response.getError()){
                    errors += item.message+ '\n';
                }
                this.showToast(cmp, event, helper,"Error","error",errors);
            }
        });
        $A.enqueueAction(action);
    },
    getcategoryOptionsHelper : function(cmp, event, helper) {
        var action = cmp.get("c.getCategoryOptions");
        action.setCallback(this, function(response) {
            var state = response.getState();
            if (state === "SUCCESS") {
                cmp.set("v.categoryOptions",response.getReturnValue());
            }else if (state === "ERROR") {
                var errors ;
                for(let item in response.getError()){
                    errors += item.message+ '\n';
                }
                this.showToast(cmp, event, helper,"Error","error",errors);
            }
        });
        $A.enqueueAction(action);
    },
    saveLedgerEntry : function(cmp, event, helper, LedgerEntry){
        var action = cmp.get("c.createLedgerEntry");
        action.setParams({"newLedgerEntry": LedgerEntry});
        action.setCallback(this, function(response) {
            var state = response.getState();
            if (state === "SUCCESS") {
                this.showToast(cmp, event, helper,"Success!","success","Successfully added your entry.");
            }else{
                this.showToast(cmp, event, helper,"Error","error","There is an issue to your entry, please contact your admin.");
            }
        });
        $A.enqueueAction(action);
    },
    showToast : function(component, event, helper, title, type, message) {
        var toastEvent = $A.get("e.force:showToast");
        toastEvent.setParams({
            "mode": "Sticky",
            "type": type,
            "title": title,
            "message": message
        });
        toastEvent.fire();
    }
})