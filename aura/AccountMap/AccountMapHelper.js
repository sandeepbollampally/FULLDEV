({
    navigateToDetailsView : function(accountId) {
        var event = $A.get("e.force:navigateToSObject");
        event.setParams({
            "recordId": accountId,
            "slideDevName": "related"
        });
        alert('ecvent---- '+ event);
        event.fire();
    }
})