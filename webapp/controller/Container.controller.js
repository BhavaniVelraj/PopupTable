sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/NavContainer",
    "sap/m/Page",
    "sap/m/Column",
    "sap/ui/core/Icon",
    "sap/ui/core/Fragment"
    ],
    function (Controller,
	NavContainer,
	Page,
	Column,
	Icon,
    Fragment
	) {
        "use strict";
        return Controller.extend("ui5.walkthrough.controller.Container", {
            onInit: function () {
                this.navContainer = new NavContainer("navContainer", {
                    pages: [
                        new Page("CarsDetails", {
                            title: "CarsDetails",
                            headerContent: [
                                new sap.m.Button({
                                    id: "carbtn",
                                    text: "Go To Employee Detail",
                                    visible: true,
                                    press: this.carPress.bind(this)
                                }),
                            ],
                            content: [
                                this.createCarTable()
                            ]
                        }),
                        new Page("EmpDetails", {
                            title: "EmpDetails",
                            headerContent: [
                                new sap.m.Button({
                                    id: "empbtn",
                                    text: "Go To CarDetail",
                                    visible: true,
                                    press: this.empPress.bind(this)
                                }),
                            ],
                            content: [
                                this.createCarTable()
                            ]
                        })
                    ],
                });
                this.getView().byId("mainPage").addContent(this.navContainer);
               
            },
            createCarTable: function () {
                var cli = new sap.m.ColumnListItem();
                var oif = new sap.m.Input({
                    value: "{car>Model}",
                    liveChange: this.onInputChange.bind(this, "Model")
                });
                cli.addCell(oif);
                var quan = new sap.m.Input({
                    value: "{car>Quantity}",
                    liveChange: this.onInputChange.bind(this, "Quantity")
                });
                cli.addCell(quan);
                var stLi = new sap.m.StandardListItem({
                    title: "{car>color}",
                });
                var color = new sap.m.List({
                    items: {
                        path: 'car>Colors',
                        template: stLi,
                        templateShareable: true
                    },
                });
                cli.addCell(color);
                var MoType = new sap.m.Input({
                    value: "{car>ModelType}",
                    liveChange: this.onInputChange.bind(this, "ModelType")
                });
                cli.addCell(MoType);
                var TyType = new sap.m.Input({
                    value: "{car>TyreType}",
                    liveChange: this.onInputChange.bind(this, "TyreType")
                });
                cli.addCell(TyType);
                var FuType = new sap.m.Input({
                    value: "{car>FuelType}",
                    liveChange: this.onInputChange.bind(this, "FuelType")
                });
                cli.addCell(FuType);
                var Price = new sap.m.Input({
                    value: "{car>Price}",
                    liveChange: this.onInputChange.bind(this, "Price")
                });
                cli.addCell(Price);
                var oIcon = new Icon({
                    src: "sap-icon://navigation-right-arrow",
                    width: "100px",
                    press: this.onPress.bind(this)
                });
                cli.addCell(oIcon)

                var col1 = new Column({
                    header: new sap.m.Text({ text: "Model" })
                });
                var col2 = new Column({
                    header: new sap.m.Text({ text: "Quantity" })
                });
                var col3 = new Column({
                    header: new sap.m.Text({ text: "Color" })
                });
                var col4 = new Column({
                    header: new sap.m.Text({ text: "Model Type" })
                });
                var col5 = new Column({
                    header: new sap.m.Text({ text: "Tyre Type" })
                });
                var col6 = new Column({
                    header: new sap.m.Text({ text: "Fuel Type" })
                });
                var col7 = new Column({
                    header: new sap.m.Text({ text: "Price" })
                });
                var col8 = new Column({
                    header: new sap.m.Text({ text: "Goto Detail Page" })
                });
                var oTable = new sap.m.Table({
                    width: "100%",
                    items: {
                        path: "car>/Cars",
                        template: cli
                    }
                });

                oTable.addColumn(col1);
                oTable.addColumn(col2);
                oTable.addColumn(col3);
                oTable.addColumn(col4);
                oTable.addColumn(col5);
                oTable.addColumn(col6);
                oTable.addColumn(col7);
                oTable.addColumn(col8);
                return oTable;
            },
            onInputChange:function(){


            },
            onPress: function () {
                this.loadFragment({
                    id:"helo",
                    type: "JS", 
                    name: "ui5.walkthrough.fragment.conFrag.fragment"
                    }).then(function(oDialog) {
                        console.log("23456".oDialog)
                    oDialog.open();
              
                    })
    },
       
            
            carPress: function () {
                this.navContainer.to("EmpDetails");
            },
            empPress: function () {
                this.navContainer.to("CarsDetails");
            }
        });
 });













