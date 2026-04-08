gdjs.AutoresCode = {};
gdjs.AutoresCode.localVariables = [];
gdjs.AutoresCode.idToCallbackMap = new Map();
gdjs.AutoresCode.GDAutores_9595do_9595ProjetoObjects1= [];
gdjs.AutoresCode.GDAutores_9595do_9595ProjetoObjects2= [];
gdjs.AutoresCode.GDAutoresObjects1= [];
gdjs.AutoresCode.GDAutoresObjects2= [];
gdjs.AutoresCode.GDPr_95243xima_9595faseObjects1= [];
gdjs.AutoresCode.GDPr_95243xima_9595faseObjects2= [];
gdjs.AutoresCode.GDRestart_9595levelObjects1= [];
gdjs.AutoresCode.GDRestart_9595levelObjects2= [];
gdjs.AutoresCode.GDTexto_9595de_9595vitoriaObjects1= [];
gdjs.AutoresCode.GDTexto_9595de_9595vitoriaObjects2= [];
gdjs.AutoresCode.GDIceBoxObjects1= [];
gdjs.AutoresCode.GDIceBoxObjects2= [];
gdjs.AutoresCode.GDBot_95227o_9595VoltarObjects1= [];
gdjs.AutoresCode.GDBot_95227o_9595VoltarObjects2= [];
gdjs.AutoresCode.GDBackgroundObjects1= [];
gdjs.AutoresCode.GDBackgroundObjects2= [];
gdjs.AutoresCode.GDPlayerObjects1= [];
gdjs.AutoresCode.GDPlayerObjects2= [];
gdjs.AutoresCode.GDIglooObjects1= [];
gdjs.AutoresCode.GDIglooObjects2= [];
gdjs.AutoresCode.GDCoinsObjects1= [];
gdjs.AutoresCode.GDCoinsObjects2= [];
gdjs.AutoresCode.GDKeyObjects1= [];
gdjs.AutoresCode.GDKeyObjects2= [];
gdjs.AutoresCode.GDDoorObjects1= [];
gdjs.AutoresCode.GDDoorObjects2= [];
gdjs.AutoresCode.GDMenu_9595PrincipalObjects1= [];
gdjs.AutoresCode.GDMenu_9595PrincipalObjects2= [];
gdjs.AutoresCode.GDMorteObjects1= [];
gdjs.AutoresCode.GDMorteObjects2= [];
gdjs.AutoresCode.GDLoseObjects1= [];
gdjs.AutoresCode.GDLoseObjects2= [];
gdjs.AutoresCode.GDHealthTextObjects1= [];
gdjs.AutoresCode.GDHealthTextObjects2= [];
gdjs.AutoresCode.GDCoinCountObjects1= [];
gdjs.AutoresCode.GDCoinCountObjects2= [];
gdjs.AutoresCode.GDSairObjects1= [];
gdjs.AutoresCode.GDSairObjects2= [];
gdjs.AutoresCode.GDSetaObjects1= [];
gdjs.AutoresCode.GDSetaObjects2= [];
gdjs.AutoresCode.GDPegue_9595a_9595chaveObjects1= [];
gdjs.AutoresCode.GDPegue_9595a_9595chaveObjects2= [];


gdjs.AutoresCode.eventsList0 = function(runtimeScene) {

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

gdjs.copyArray(runtimeScene.getObjects("Botão_Voltar"), gdjs.AutoresCode.GDBot_95227o_9595VoltarObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.AutoresCode.GDBot_95227o_9595VoltarObjects1.length;i<l;++i) {
    if ( gdjs.AutoresCode.GDBot_95227o_9595VoltarObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.AutoresCode.GDBot_95227o_9595VoltarObjects1[k] = gdjs.AutoresCode.GDBot_95227o_9595VoltarObjects1[i];
        ++k;
    }
}
gdjs.AutoresCode.GDBot_95227o_9595VoltarObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "Menu Principal");
}
}

}


};

gdjs.AutoresCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.AutoresCode.GDAutores_9595do_9595ProjetoObjects1.length = 0;
gdjs.AutoresCode.GDAutores_9595do_9595ProjetoObjects2.length = 0;
gdjs.AutoresCode.GDAutoresObjects1.length = 0;
gdjs.AutoresCode.GDAutoresObjects2.length = 0;
gdjs.AutoresCode.GDPr_95243xima_9595faseObjects1.length = 0;
gdjs.AutoresCode.GDPr_95243xima_9595faseObjects2.length = 0;
gdjs.AutoresCode.GDRestart_9595levelObjects1.length = 0;
gdjs.AutoresCode.GDRestart_9595levelObjects2.length = 0;
gdjs.AutoresCode.GDTexto_9595de_9595vitoriaObjects1.length = 0;
gdjs.AutoresCode.GDTexto_9595de_9595vitoriaObjects2.length = 0;
gdjs.AutoresCode.GDIceBoxObjects1.length = 0;
gdjs.AutoresCode.GDIceBoxObjects2.length = 0;
gdjs.AutoresCode.GDBot_95227o_9595VoltarObjects1.length = 0;
gdjs.AutoresCode.GDBot_95227o_9595VoltarObjects2.length = 0;
gdjs.AutoresCode.GDBackgroundObjects1.length = 0;
gdjs.AutoresCode.GDBackgroundObjects2.length = 0;
gdjs.AutoresCode.GDPlayerObjects1.length = 0;
gdjs.AutoresCode.GDPlayerObjects2.length = 0;
gdjs.AutoresCode.GDIglooObjects1.length = 0;
gdjs.AutoresCode.GDIglooObjects2.length = 0;
gdjs.AutoresCode.GDCoinsObjects1.length = 0;
gdjs.AutoresCode.GDCoinsObjects2.length = 0;
gdjs.AutoresCode.GDKeyObjects1.length = 0;
gdjs.AutoresCode.GDKeyObjects2.length = 0;
gdjs.AutoresCode.GDDoorObjects1.length = 0;
gdjs.AutoresCode.GDDoorObjects2.length = 0;
gdjs.AutoresCode.GDMenu_9595PrincipalObjects1.length = 0;
gdjs.AutoresCode.GDMenu_9595PrincipalObjects2.length = 0;
gdjs.AutoresCode.GDMorteObjects1.length = 0;
gdjs.AutoresCode.GDMorteObjects2.length = 0;
gdjs.AutoresCode.GDLoseObjects1.length = 0;
gdjs.AutoresCode.GDLoseObjects2.length = 0;
gdjs.AutoresCode.GDHealthTextObjects1.length = 0;
gdjs.AutoresCode.GDHealthTextObjects2.length = 0;
gdjs.AutoresCode.GDCoinCountObjects1.length = 0;
gdjs.AutoresCode.GDCoinCountObjects2.length = 0;
gdjs.AutoresCode.GDSairObjects1.length = 0;
gdjs.AutoresCode.GDSairObjects2.length = 0;
gdjs.AutoresCode.GDSetaObjects1.length = 0;
gdjs.AutoresCode.GDSetaObjects2.length = 0;
gdjs.AutoresCode.GDPegue_9595a_9595chaveObjects1.length = 0;
gdjs.AutoresCode.GDPegue_9595a_9595chaveObjects2.length = 0;

gdjs.AutoresCode.eventsList0(runtimeScene);
gdjs.AutoresCode.GDAutores_9595do_9595ProjetoObjects1.length = 0;
gdjs.AutoresCode.GDAutores_9595do_9595ProjetoObjects2.length = 0;
gdjs.AutoresCode.GDAutoresObjects1.length = 0;
gdjs.AutoresCode.GDAutoresObjects2.length = 0;
gdjs.AutoresCode.GDPr_95243xima_9595faseObjects1.length = 0;
gdjs.AutoresCode.GDPr_95243xima_9595faseObjects2.length = 0;
gdjs.AutoresCode.GDRestart_9595levelObjects1.length = 0;
gdjs.AutoresCode.GDRestart_9595levelObjects2.length = 0;
gdjs.AutoresCode.GDTexto_9595de_9595vitoriaObjects1.length = 0;
gdjs.AutoresCode.GDTexto_9595de_9595vitoriaObjects2.length = 0;
gdjs.AutoresCode.GDIceBoxObjects1.length = 0;
gdjs.AutoresCode.GDIceBoxObjects2.length = 0;
gdjs.AutoresCode.GDBot_95227o_9595VoltarObjects1.length = 0;
gdjs.AutoresCode.GDBot_95227o_9595VoltarObjects2.length = 0;
gdjs.AutoresCode.GDBackgroundObjects1.length = 0;
gdjs.AutoresCode.GDBackgroundObjects2.length = 0;
gdjs.AutoresCode.GDPlayerObjects1.length = 0;
gdjs.AutoresCode.GDPlayerObjects2.length = 0;
gdjs.AutoresCode.GDIglooObjects1.length = 0;
gdjs.AutoresCode.GDIglooObjects2.length = 0;
gdjs.AutoresCode.GDCoinsObjects1.length = 0;
gdjs.AutoresCode.GDCoinsObjects2.length = 0;
gdjs.AutoresCode.GDKeyObjects1.length = 0;
gdjs.AutoresCode.GDKeyObjects2.length = 0;
gdjs.AutoresCode.GDDoorObjects1.length = 0;
gdjs.AutoresCode.GDDoorObjects2.length = 0;
gdjs.AutoresCode.GDMenu_9595PrincipalObjects1.length = 0;
gdjs.AutoresCode.GDMenu_9595PrincipalObjects2.length = 0;
gdjs.AutoresCode.GDMorteObjects1.length = 0;
gdjs.AutoresCode.GDMorteObjects2.length = 0;
gdjs.AutoresCode.GDLoseObjects1.length = 0;
gdjs.AutoresCode.GDLoseObjects2.length = 0;
gdjs.AutoresCode.GDHealthTextObjects1.length = 0;
gdjs.AutoresCode.GDHealthTextObjects2.length = 0;
gdjs.AutoresCode.GDCoinCountObjects1.length = 0;
gdjs.AutoresCode.GDCoinCountObjects2.length = 0;
gdjs.AutoresCode.GDSairObjects1.length = 0;
gdjs.AutoresCode.GDSairObjects2.length = 0;
gdjs.AutoresCode.GDSetaObjects1.length = 0;
gdjs.AutoresCode.GDSetaObjects2.length = 0;
gdjs.AutoresCode.GDPegue_9595a_9595chaveObjects1.length = 0;
gdjs.AutoresCode.GDPegue_9595a_9595chaveObjects2.length = 0;


return;

}

gdjs['AutoresCode'] = gdjs.AutoresCode;
