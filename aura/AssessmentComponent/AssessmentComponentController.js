({
    handleChange: function (component, event) {
        var sel = component.find("mySelect");
        var nav =	sel.get("v.value");
        component.set("v.SelectedValue", nav);
    },
    update:function(component, event, helper){
        component.find("editForm").submit();
    }
})