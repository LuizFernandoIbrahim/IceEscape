gdjs.WinCode = {};
gdjs.WinCode.localVariables = [];
gdjs.WinCode.idToCallbackMap = new Map();
gdjs.WinCode.GDNewSpriteObjects1= [];
gdjs.WinCode.GDNewSpriteObjects2= [];
gdjs.WinCode.GDPr_95243xima_9595faseObjects1= [];
gdjs.WinCode.GDPr_95243xima_9595faseObjects2= [];
gdjs.WinCode.GDRestart_9595levelObjects1= [];
gdjs.WinCode.GDRestart_9595levelObjects2= [];
gdjs.WinCode.GDTexto_9595de_9595vitoriaObjects1= [];
gdjs.WinCode.GDTexto_9595de_9595vitoriaObjects2= [];
gdjs.WinCode.GDIceBoxObjects1= [];
gdjs.WinCode.GDIceBoxObjects2= [];
gdjs.WinCode.GDBot_95227o_9595VoltarObjects1= [];
gdjs.WinCode.GDBot_95227o_9595VoltarObjects2= [];
gdjs.WinCode.GDBackgroundObjects1= [];
gdjs.WinCode.GDBackgroundObjects2= [];
gdjs.WinCode.GDPlayerObjects1= [];
gdjs.WinCode.GDPlayerObjects2= [];
gdjs.WinCode.GDIglooObjects1= [];
gdjs.WinCode.GDIglooObjects2= [];
gdjs.WinCode.GDCoinsObjects1= [];
gdjs.WinCode.GDCoinsObjects2= [];
gdjs.WinCode.GDKeyObjects1= [];
gdjs.WinCode.GDKeyObjects2= [];
gdjs.WinCode.GDDoorObjects1= [];
gdjs.WinCode.GDDoorObjects2= [];
gdjs.WinCode.GDMenu_9595PrincipalObjects1= [];
gdjs.WinCode.GDMenu_9595PrincipalObjects2= [];
gdjs.WinCode.GDMorteObjects1= [];
gdjs.WinCode.GDMorteObjects2= [];
gdjs.WinCode.GDLoseObjects1= [];
gdjs.WinCode.GDLoseObjects2= [];
gdjs.WinCode.GDHealthTextObjects1= [];
gdjs.WinCode.GDHealthTextObjects2= [];
gdjs.WinCode.GDCoinCountObjects1= [];
gdjs.WinCode.GDCoinCountObjects2= [];
gdjs.WinCode.GDSairObjects1= [];
gdjs.WinCode.GDSairObjects2= [];
gdjs.WinCode.GDSetaObjects1= [];
gdjs.WinCode.GDSetaObjects2= [];
gdjs.WinCode.GDPegue_9595a_9595chaveObjects1= [];
gdjs.WinCode.GDPegue_9595a_9595chaveObjects2= [];


gdjs.WinCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Restart_level"), gdjs.WinCode.GDRestart_9595levelObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.WinCode.GDRestart_9595levelObjects1.length;i<l;++i) {
    if ( gdjs.WinCode.GDRestart_9595levelObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.WinCode.GDRestart_9595levelObjects1[k] = gdjs.WinCode.GDRestart_9595levelObjects1[i];
        ++k;
    }
}
gdjs.WinCode.GDRestart_9595levelObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Fase 3", false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Menu_Principal"), gdjs.WinCode.GDMenu_9595PrincipalObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.WinCode.GDMenu_9595PrincipalObjects1.length;i<l;++i) {
    if ( gdjs.WinCode.GDMenu_9595PrincipalObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.WinCode.GDMenu_9595PrincipalObjects1[k] = gdjs.WinCode.GDMenu_9595PrincipalObjects1[i];
        ++k;
    }
}
gdjs.WinCode.GDMenu_9595PrincipalObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Menu Principal", false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Sair"), gdjs.WinCode.GDSairObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.WinCode.GDSairObjects1.length;i<l;++i) {
    if ( gdjs.WinCode.GDSairObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.WinCode.GDSairObjects1[k] = gdjs.WinCode.GDSairObjects1[i];
        ++k;
    }
}
gdjs.WinCode.GDSairObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.stopGame(runtimeScene);
}
}

}


{


let isConditionTrue_0 = false;
{
{gdjs.evtTools.sound.playMusicOnChannel(runtimeScene, "Queen - We are the champions (Chorus only) - xd4l3x (youtube).mp3", 1, false, 30, 1);
}
}

}


};

gdjs.WinCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.WinCode.GDNewSpriteObjects1.length = 0;
gdjs.WinCode.GDNewSpriteObjects2.length = 0;
gdjs.WinCode.GDPr_95243xima_9595faseObjects1.length = 0;
gdjs.WinCode.GDPr_95243xima_9595faseObjects2.length = 0;
gdjs.WinCode.GDRestart_9595levelObjects1.length = 0;
gdjs.WinCode.GDRestart_9595levelObjects2.length = 0;
gdjs.WinCode.GDTexto_9595de_9595vitoriaObjects1.length = 0;
gdjs.WinCode.GDTexto_9595de_9595vitoriaObjects2.length = 0;
gdjs.WinCode.GDIceBoxObjects1.length = 0;
gdjs.WinCode.GDIceBoxObjects2.length = 0;
gdjs.WinCode.GDBot_95227o_9595VoltarObjects1.length = 0;
gdjs.WinCode.GDBot_95227o_9595VoltarObjects2.length = 0;
gdjs.WinCode.GDBackgroundObjects1.length = 0;
gdjs.WinCode.GDBackgroundObjects2.length = 0;
gdjs.WinCode.GDPlayerObjects1.length = 0;
gdjs.WinCode.GDPlayerObjects2.length = 0;
gdjs.WinCode.GDIglooObjects1.length = 0;
gdjs.WinCode.GDIglooObjects2.length = 0;
gdjs.WinCode.GDCoinsObjects1.length = 0;
gdjs.WinCode.GDCoinsObjects2.length = 0;
gdjs.WinCode.GDKeyObjects1.length = 0;
gdjs.WinCode.GDKeyObjects2.length = 0;
gdjs.WinCode.GDDoorObjects1.length = 0;
gdjs.WinCode.GDDoorObjects2.length = 0;
gdjs.WinCode.GDMenu_9595PrincipalObjects1.length = 0;
gdjs.WinCode.GDMenu_9595PrincipalObjects2.length = 0;
gdjs.WinCode.GDMorteObjects1.length = 0;
gdjs.WinCode.GDMorteObjects2.length = 0;
gdjs.WinCode.GDLoseObjects1.length = 0;
gdjs.WinCode.GDLoseObjects2.length = 0;
gdjs.WinCode.GDHealthTextObjects1.length = 0;
gdjs.WinCode.GDHealthTextObjects2.length = 0;
gdjs.WinCode.GDCoinCountObjects1.length = 0;
gdjs.WinCode.GDCoinCountObjects2.length = 0;
gdjs.WinCode.GDSairObjects1.length = 0;
gdjs.WinCode.GDSairObjects2.length = 0;
gdjs.WinCode.GDSetaObjects1.length = 0;
gdjs.WinCode.GDSetaObjects2.length = 0;
gdjs.WinCode.GDPegue_9595a_9595chaveObjects1.length = 0;
gdjs.WinCode.GDPegue_9595a_9595chaveObjects2.length = 0;

gdjs.WinCode.eventsList0(runtimeScene);
gdjs.WinCode.GDNewSpriteObjects1.length = 0;
gdjs.WinCode.GDNewSpriteObjects2.length = 0;
gdjs.WinCode.GDPr_95243xima_9595faseObjects1.length = 0;
gdjs.WinCode.GDPr_95243xima_9595faseObjects2.length = 0;
gdjs.WinCode.GDRestart_9595levelObjects1.length = 0;
gdjs.WinCode.GDRestart_9595levelObjects2.length = 0;
gdjs.WinCode.GDTexto_9595de_9595vitoriaObjects1.length = 0;
gdjs.WinCode.GDTexto_9595de_9595vitoriaObjects2.length = 0;
gdjs.WinCode.GDIceBoxObjects1.length = 0;
gdjs.WinCode.GDIceBoxObjects2.length = 0;
gdjs.WinCode.GDBot_95227o_9595VoltarObjects1.length = 0;
gdjs.WinCode.GDBot_95227o_9595VoltarObjects2.length = 0;
gdjs.WinCode.GDBackgroundObjects1.length = 0;
gdjs.WinCode.GDBackgroundObjects2.length = 0;
gdjs.WinCode.GDPlayerObjects1.length = 0;
gdjs.WinCode.GDPlayerObjects2.length = 0;
gdjs.WinCode.GDIglooObjects1.length = 0;
gdjs.WinCode.GDIglooObjects2.length = 0;
gdjs.WinCode.GDCoinsObjects1.length = 0;
gdjs.WinCode.GDCoinsObjects2.length = 0;
gdjs.WinCode.GDKeyObjects1.length = 0;
gdjs.WinCode.GDKeyObjects2.length = 0;
gdjs.WinCode.GDDoorObjects1.length = 0;
gdjs.WinCode.GDDoorObjects2.length = 0;
gdjs.WinCode.GDMenu_9595PrincipalObjects1.length = 0;
gdjs.WinCode.GDMenu_9595PrincipalObjects2.length = 0;
gdjs.WinCode.GDMorteObjects1.length = 0;
gdjs.WinCode.GDMorteObjects2.length = 0;
gdjs.WinCode.GDLoseObjects1.length = 0;
gdjs.WinCode.GDLoseObjects2.length = 0;
gdjs.WinCode.GDHealthTextObjects1.length = 0;
gdjs.WinCode.GDHealthTextObjects2.length = 0;
gdjs.WinCode.GDCoinCountObjects1.length = 0;
gdjs.WinCode.GDCoinCountObjects2.length = 0;
gdjs.WinCode.GDSairObjects1.length = 0;
gdjs.WinCode.GDSairObjects2.length = 0;
gdjs.WinCode.GDSetaObjects1.length = 0;
gdjs.WinCode.GDSetaObjects2.length = 0;
gdjs.WinCode.GDPegue_9595a_9595chaveObjects1.length = 0;
gdjs.WinCode.GDPegue_9595a_9595chaveObjects2.length = 0;


return;

}

gdjs['WinCode'] = gdjs.WinCode;
