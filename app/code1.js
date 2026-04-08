gdjs.HistoriaCode = {};
gdjs.HistoriaCode.localVariables = [];
gdjs.HistoriaCode.idToCallbackMap = new Map();
gdjs.HistoriaCode.GDHistoriaObjects1= [];
gdjs.HistoriaCode.GDHistoriaObjects2= [];
gdjs.HistoriaCode.GDHist_95243ria_9595tituloObjects1= [];
gdjs.HistoriaCode.GDHist_95243ria_9595tituloObjects2= [];
gdjs.HistoriaCode.GDPr_95243xima_9595faseObjects1= [];
gdjs.HistoriaCode.GDPr_95243xima_9595faseObjects2= [];
gdjs.HistoriaCode.GDRestart_9595levelObjects1= [];
gdjs.HistoriaCode.GDRestart_9595levelObjects2= [];
gdjs.HistoriaCode.GDTexto_9595de_9595vitoriaObjects1= [];
gdjs.HistoriaCode.GDTexto_9595de_9595vitoriaObjects2= [];
gdjs.HistoriaCode.GDIceBoxObjects1= [];
gdjs.HistoriaCode.GDIceBoxObjects2= [];
gdjs.HistoriaCode.GDBot_95227o_9595VoltarObjects1= [];
gdjs.HistoriaCode.GDBot_95227o_9595VoltarObjects2= [];
gdjs.HistoriaCode.GDBackgroundObjects1= [];
gdjs.HistoriaCode.GDBackgroundObjects2= [];
gdjs.HistoriaCode.GDPlayerObjects1= [];
gdjs.HistoriaCode.GDPlayerObjects2= [];
gdjs.HistoriaCode.GDIglooObjects1= [];
gdjs.HistoriaCode.GDIglooObjects2= [];
gdjs.HistoriaCode.GDCoinsObjects1= [];
gdjs.HistoriaCode.GDCoinsObjects2= [];
gdjs.HistoriaCode.GDKeyObjects1= [];
gdjs.HistoriaCode.GDKeyObjects2= [];
gdjs.HistoriaCode.GDDoorObjects1= [];
gdjs.HistoriaCode.GDDoorObjects2= [];
gdjs.HistoriaCode.GDMenu_9595PrincipalObjects1= [];
gdjs.HistoriaCode.GDMenu_9595PrincipalObjects2= [];
gdjs.HistoriaCode.GDMorteObjects1= [];
gdjs.HistoriaCode.GDMorteObjects2= [];
gdjs.HistoriaCode.GDLoseObjects1= [];
gdjs.HistoriaCode.GDLoseObjects2= [];
gdjs.HistoriaCode.GDHealthTextObjects1= [];
gdjs.HistoriaCode.GDHealthTextObjects2= [];
gdjs.HistoriaCode.GDCoinCountObjects1= [];
gdjs.HistoriaCode.GDCoinCountObjects2= [];
gdjs.HistoriaCode.GDSairObjects1= [];
gdjs.HistoriaCode.GDSairObjects2= [];
gdjs.HistoriaCode.GDSetaObjects1= [];
gdjs.HistoriaCode.GDSetaObjects2= [];
gdjs.HistoriaCode.GDPegue_9595a_9595chaveObjects1= [];
gdjs.HistoriaCode.GDPegue_9595a_9595chaveObjects2= [];


gdjs.HistoriaCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "a5297318776cbc09895a2f51d9f5d77d5e21decfdae20c61211687b278f6d741_Slice of Life.aac", 1, false, 20, 1);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Botão_Voltar"), gdjs.HistoriaCode.GDBot_95227o_9595VoltarObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.HistoriaCode.GDBot_95227o_9595VoltarObjects1.length;i<l;++i) {
    if ( gdjs.HistoriaCode.GDBot_95227o_9595VoltarObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.HistoriaCode.GDBot_95227o_9595VoltarObjects1[k] = gdjs.HistoriaCode.GDBot_95227o_9595VoltarObjects1[i];
        ++k;
    }
}
gdjs.HistoriaCode.GDBot_95227o_9595VoltarObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "Menu Principal");
}
}

}


};

gdjs.HistoriaCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.HistoriaCode.GDHistoriaObjects1.length = 0;
gdjs.HistoriaCode.GDHistoriaObjects2.length = 0;
gdjs.HistoriaCode.GDHist_95243ria_9595tituloObjects1.length = 0;
gdjs.HistoriaCode.GDHist_95243ria_9595tituloObjects2.length = 0;
gdjs.HistoriaCode.GDPr_95243xima_9595faseObjects1.length = 0;
gdjs.HistoriaCode.GDPr_95243xima_9595faseObjects2.length = 0;
gdjs.HistoriaCode.GDRestart_9595levelObjects1.length = 0;
gdjs.HistoriaCode.GDRestart_9595levelObjects2.length = 0;
gdjs.HistoriaCode.GDTexto_9595de_9595vitoriaObjects1.length = 0;
gdjs.HistoriaCode.GDTexto_9595de_9595vitoriaObjects2.length = 0;
gdjs.HistoriaCode.GDIceBoxObjects1.length = 0;
gdjs.HistoriaCode.GDIceBoxObjects2.length = 0;
gdjs.HistoriaCode.GDBot_95227o_9595VoltarObjects1.length = 0;
gdjs.HistoriaCode.GDBot_95227o_9595VoltarObjects2.length = 0;
gdjs.HistoriaCode.GDBackgroundObjects1.length = 0;
gdjs.HistoriaCode.GDBackgroundObjects2.length = 0;
gdjs.HistoriaCode.GDPlayerObjects1.length = 0;
gdjs.HistoriaCode.GDPlayerObjects2.length = 0;
gdjs.HistoriaCode.GDIglooObjects1.length = 0;
gdjs.HistoriaCode.GDIglooObjects2.length = 0;
gdjs.HistoriaCode.GDCoinsObjects1.length = 0;
gdjs.HistoriaCode.GDCoinsObjects2.length = 0;
gdjs.HistoriaCode.GDKeyObjects1.length = 0;
gdjs.HistoriaCode.GDKeyObjects2.length = 0;
gdjs.HistoriaCode.GDDoorObjects1.length = 0;
gdjs.HistoriaCode.GDDoorObjects2.length = 0;
gdjs.HistoriaCode.GDMenu_9595PrincipalObjects1.length = 0;
gdjs.HistoriaCode.GDMenu_9595PrincipalObjects2.length = 0;
gdjs.HistoriaCode.GDMorteObjects1.length = 0;
gdjs.HistoriaCode.GDMorteObjects2.length = 0;
gdjs.HistoriaCode.GDLoseObjects1.length = 0;
gdjs.HistoriaCode.GDLoseObjects2.length = 0;
gdjs.HistoriaCode.GDHealthTextObjects1.length = 0;
gdjs.HistoriaCode.GDHealthTextObjects2.length = 0;
gdjs.HistoriaCode.GDCoinCountObjects1.length = 0;
gdjs.HistoriaCode.GDCoinCountObjects2.length = 0;
gdjs.HistoriaCode.GDSairObjects1.length = 0;
gdjs.HistoriaCode.GDSairObjects2.length = 0;
gdjs.HistoriaCode.GDSetaObjects1.length = 0;
gdjs.HistoriaCode.GDSetaObjects2.length = 0;
gdjs.HistoriaCode.GDPegue_9595a_9595chaveObjects1.length = 0;
gdjs.HistoriaCode.GDPegue_9595a_9595chaveObjects2.length = 0;

gdjs.HistoriaCode.eventsList0(runtimeScene);
gdjs.HistoriaCode.GDHistoriaObjects1.length = 0;
gdjs.HistoriaCode.GDHistoriaObjects2.length = 0;
gdjs.HistoriaCode.GDHist_95243ria_9595tituloObjects1.length = 0;
gdjs.HistoriaCode.GDHist_95243ria_9595tituloObjects2.length = 0;
gdjs.HistoriaCode.GDPr_95243xima_9595faseObjects1.length = 0;
gdjs.HistoriaCode.GDPr_95243xima_9595faseObjects2.length = 0;
gdjs.HistoriaCode.GDRestart_9595levelObjects1.length = 0;
gdjs.HistoriaCode.GDRestart_9595levelObjects2.length = 0;
gdjs.HistoriaCode.GDTexto_9595de_9595vitoriaObjects1.length = 0;
gdjs.HistoriaCode.GDTexto_9595de_9595vitoriaObjects2.length = 0;
gdjs.HistoriaCode.GDIceBoxObjects1.length = 0;
gdjs.HistoriaCode.GDIceBoxObjects2.length = 0;
gdjs.HistoriaCode.GDBot_95227o_9595VoltarObjects1.length = 0;
gdjs.HistoriaCode.GDBot_95227o_9595VoltarObjects2.length = 0;
gdjs.HistoriaCode.GDBackgroundObjects1.length = 0;
gdjs.HistoriaCode.GDBackgroundObjects2.length = 0;
gdjs.HistoriaCode.GDPlayerObjects1.length = 0;
gdjs.HistoriaCode.GDPlayerObjects2.length = 0;
gdjs.HistoriaCode.GDIglooObjects1.length = 0;
gdjs.HistoriaCode.GDIglooObjects2.length = 0;
gdjs.HistoriaCode.GDCoinsObjects1.length = 0;
gdjs.HistoriaCode.GDCoinsObjects2.length = 0;
gdjs.HistoriaCode.GDKeyObjects1.length = 0;
gdjs.HistoriaCode.GDKeyObjects2.length = 0;
gdjs.HistoriaCode.GDDoorObjects1.length = 0;
gdjs.HistoriaCode.GDDoorObjects2.length = 0;
gdjs.HistoriaCode.GDMenu_9595PrincipalObjects1.length = 0;
gdjs.HistoriaCode.GDMenu_9595PrincipalObjects2.length = 0;
gdjs.HistoriaCode.GDMorteObjects1.length = 0;
gdjs.HistoriaCode.GDMorteObjects2.length = 0;
gdjs.HistoriaCode.GDLoseObjects1.length = 0;
gdjs.HistoriaCode.GDLoseObjects2.length = 0;
gdjs.HistoriaCode.GDHealthTextObjects1.length = 0;
gdjs.HistoriaCode.GDHealthTextObjects2.length = 0;
gdjs.HistoriaCode.GDCoinCountObjects1.length = 0;
gdjs.HistoriaCode.GDCoinCountObjects2.length = 0;
gdjs.HistoriaCode.GDSairObjects1.length = 0;
gdjs.HistoriaCode.GDSairObjects2.length = 0;
gdjs.HistoriaCode.GDSetaObjects1.length = 0;
gdjs.HistoriaCode.GDSetaObjects2.length = 0;
gdjs.HistoriaCode.GDPegue_9595a_9595chaveObjects1.length = 0;
gdjs.HistoriaCode.GDPegue_9595a_9595chaveObjects2.length = 0;


return;

}

gdjs['HistoriaCode'] = gdjs.HistoriaCode;
