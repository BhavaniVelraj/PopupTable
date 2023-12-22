sap.ui.define([
"sap/m/Dialog",
  "sap/m/Button",
  "sap/m/VBox",
  "sap/m/Label",
  "sap/m/Input",
  "sap/m/List",
  "sap/m/StandardListItem"
], function(Dialog,Button,VBox,Label,Input,List,StandardListItem) {

    return {
    createContent: function(oController) {
            var oDialog = new Dialog({
                title:"Car Details",
                content:[
                    this.simpleForm()
                ],
                beginButton:new Button({
                    text:"Save",
                    press: function() {
                        oDialog.close();
                      }
                }),
                endButton:new Button({
                  
                    text:"Cancel",
                    press: function() {
                        oDialog.close();
                      }
                    
                    
                })
            });
           
            return oDialog;
        },
       simpleForm:function(){
            
            var oVbox = new VBox({
                items:[
                    new Label({ 
                        text: "Model:" 
                        
                    }),
                    new Input({
                        value:"{car>Model}"
                      
                    }),
                    new Label({ 
                        text: "Quantity:" 
                    }),
                    new Input({
                        value:"{car>Quantity}"
                    }),
                    new Label({ 
                        text: "Model Type:" 
                    }),
                    new Input({
                        value:"{car>ModelType}"
                    }),
                    new Label({ 
                        text: "Colors:" 
                    }),
                    new List({
                        items:{
                           path: 'car>Colors',
                            template: new StandardListItem({
                                title: "{car>color}",
                              }),
                        }
                        
                    }),
                    new Label({ 
                        text: "Tyre Type:" 
                    }),
                    new Input({
                        value:"{car>TyreType}"
                    }),
                    new Label({ 
                        text: "Fuel Type:" 
                    }),
                    new Input({
                        value:"{car>FuelType}"
                    }),
                    new Label({ 
                        text: "Price:" 
                    }),
                    new Input({
                        value:"{car>Price}"
                    }),
                ],
            

            })
            return oVbox;
        
        }
    }
   
});