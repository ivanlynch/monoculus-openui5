sap.ui.define([
    //importa las dependencias
    'sap/ui/core/UIComponent',
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/resource/ResourceModel"

], function(UIComponent) {
    
    'use strict';
    
    return UIComponent.extend("monoculus.Component", {
        metadata: {
            rootView : "monoculus.view.App"
        },
        init : function(){

            //Llama a la funcion init del padre
            UIComponent.prototype.init.apply(this, arguments);

            // Setea el modelo
            var oData = {
                recipient : {
                    name : "World"
                }
            },
            
            var oModel = new JSONModel(oData);
            this.setModel(oModel);

            //Sea el i18n
            var i18nModel = new ResourceModel({
                bundleName : "monoculus.i18n.i18n"
            });

            this.setModel(i18nModel, "i18n");
        }
    });

});