({
    doInit: function (cmp, event, helper) {
        helper.getBankOptionsHelper(cmp, event, helper);
        helper.getTypeOptionsHelper(cmp, event, helper);
        helper.getcategoryOptionsHelper(cmp, event, helper);
    },
    handleSave: function (cmp, event, helper) {
        var Select = 'SELECT';
        var RecordTypeId = cmp.get("v.recordType");
        var Amount = cmp.get("v.amount");
        var Other = cmp.get("v.other");
        var EntryDate = cmp.get("v.entryDate");
        var Bank = cmp.get("v.bankSelectedValue");
        var Type = cmp.get("v.typeSelectedValue");
        var Category = cmp.get("v.categorySelectedValue");
        var Currency = cmp.get("v.currencySelectedValue");
        
        if(RecordTypeId === Select){
            helper.showToast(cmp, event, helper,"Error","Error","Please select a value for Country");
        }else if(Bank === Select){
            helper.showToast(cmp, event, helper,"Error","Error","Please select a value for Bank Account");
        }else if(Type === Select){
            helper.showToast(cmp, event, helper,"Error","Error","Please select a value for Card Type");
        }else if(Currency === Select){
            helper.showToast(cmp, event, helper,"Error","Error","Please select a value for Currency");
        }else if(Category === Select){
            helper.showToast(cmp, event, helper,"Error","Error","Please select a value for Category");
        }else if(Amount <1 || Amount === null){
            helper.showToast(cmp, event, helper,"Error","Error","Amount cannot be blank or less than 1");
        }else if(EntryDate === null){
            helper.showToast(cmp, event, helper,"Error","Error","Please provide the Entry Date");
        }
        
        if(Bank === 'AMEX'){
            Bank = 'a0Q0I00000d36CRUAY';
        }else if(Bank === 'BOFA'){
            Bank = 'a0Q0I00000d36CHUAY';
        }else if(Bank === 'DISCOVER'){
            Bank = 'a0Q0I00000d36CMUAY';
        }
        
        var LedgerEntry = {"sobjectType":"Ledger_Entry__c",
                           "Amount__c" : Amount,
                           "Bank_Account__c" : Bank,
                           "Card_Type__c" : Type,
                           "Category__c" : Category,
                           "CurrencyIsoCode" : Currency,
                           "Entry_Date__c" : EntryDate,
                           "Other__c" : Other,
                           "RecordTypeId":RecordTypeId
                          };
        helper.saveLedgerEntry(cmp, event, helper,LedgerEntry);
    }
});