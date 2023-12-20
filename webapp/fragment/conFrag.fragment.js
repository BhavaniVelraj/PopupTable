sap.ui.define(["sap/m/Dialog", "sap/m/Input", "sap/m/Button"], function(Dialog, Input, Button) {
    return {
    createContent: function(oController) {
            var oDialog = new Dialog(this.createId("helo"),{
                title: "JavaScript Fragment Dialog",
                content: [
                    new Input({
                        text: "Hello Bhavani"
                    })
                ],
                buttons: [
                    new Button({
                        text: "Close",
                        press: function(){
                            oDialog.close();
                        }
                    })
                ]
            });
            return oDialog;
        }
    }
});