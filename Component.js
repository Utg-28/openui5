sap.ui.define([
    "sap/ui/core/UIComponent",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/resource/ResourceModel"
 ], function (UIComponent, JSONModel, ResourceModel) {
    "use strict";
    return UIComponent.extend("sap.ui.demo.walkthrough.Component", {
       metadata : {
          "rootView": {
             "viewName": "sap.ui.demo.walkthrough.view.App",
             "type": "XML",
           }
       },
       init : function () {
          UIComponent.prototype.init.apply(this, arguments);

          var oData = {
             recipient : {
                name : "User"
             }
          };
          var oModel = new JSONModel(oData);
          this.setModel(oModel,'demodata');

          var i18nModel = new ResourceModel({
             bundleName: "sap.ui.demo.walkthrough.i18n.i18n"
          });
          this.setModel(i18nModel, "i18n");
       }
    });
 });
 