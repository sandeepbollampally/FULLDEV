({
    getLocalList: function(component,recID) {
        var spinner = component.find('spinner');
       	$A.util.removeClass(spinner,"slds-hide");
        	var searchTerm = component.find("searchTerm").get("v.value");
            if (searchTerm == null) {
            	searchTerm = component.get("v.defaultSearch");
        	}
       		//location = JSON.parse(location);
        if(recID){
            alert('helper if');
        	var action = component.get("c.getListByAddress");
            action.setParams({
                "recordId": recID,
                "searchQuery": searchTerm,
                "SObjectType": component.get("v.SObjectName");
            });
        }
        else{
            alert('helper else');
            var location = component.get("v.location");
            var action = component.get("c.getLocal");
            action.setParams({
                "searchQuery": searchTerm,
                "lat":location.coords.latitude,
                "lon":location.coords.longitude 
            });
        }
        	action.setCallback(this, function(response) {
            	this.doLayout(response, component);
        	});
        	$A.enqueueAction(action);        
    },
    doLayout: function(response, component) {
        alert('do layout helper');
        var spinner = component.find('spinner');
       	$A.util.addClass(spinner,"slds-hide");
        var data = JSON.parse(response.getReturnValue());
        var warning = component.find('warning');
        if(data.error){
            component.set("v.errorMessage", data.error);
            $A.util.removeClass(warning, 'slds-hide');
        }
        else{
            $A.util.addClass(warning, 'slds-hide');
        }
        component.set("v.restaurantList", data.bizArray);
        console.log("The Data: ", data);
    }
})