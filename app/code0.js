gdjs.Menu_32PrincipalCode = {};
gdjs.Menu_32PrincipalCode.localVariables = [];
gdjs.Menu_32PrincipalCode.idToCallbackMap = new Map();
gdjs.Menu_32PrincipalCode.GDHist_95243riaObjects1= [];
gdjs.Menu_32PrincipalCode.GDHist_95243riaObjects2= [];
gdjs.Menu_32PrincipalCode.GDAutoresObjects1= [];
gdjs.Menu_32PrincipalCode.GDAutoresObjects2= [];
gdjs.Menu_32PrincipalCode.GDControlesObjects1= [];
gdjs.Menu_32PrincipalCode.GDControlesObjects2= [];
gdjs.Menu_32PrincipalCode.GDIniciar_9595jogoObjects1= [];
gdjs.Menu_32PrincipalCode.GDIniciar_9595jogoObjects2= [];
gdjs.Menu_32PrincipalCode.GDNewSpriteObjects1= [];
gdjs.Menu_32PrincipalCode.GDNewSpriteObjects2= [];
gdjs.Menu_32PrincipalCode.GDPr_95243xima_9595faseObjects1= [];
gdjs.Menu_32PrincipalCode.GDPr_95243xima_9595faseObjects2= [];
gdjs.Menu_32PrincipalCode.GDRestart_9595levelObjects1= [];
gdjs.Menu_32PrincipalCode.GDRestart_9595levelObjects2= [];
gdjs.Menu_32PrincipalCode.GDTexto_9595de_9595vitoriaObjects1= [];
gdjs.Menu_32PrincipalCode.GDTexto_9595de_9595vitoriaObjects2= [];
gdjs.Menu_32PrincipalCode.GDIceBoxObjects1= [];
gdjs.Menu_32PrincipalCode.GDIceBoxObjects2= [];
gdjs.Menu_32PrincipalCode.GDBot_95227o_9595VoltarObjects1= [];
gdjs.Menu_32PrincipalCode.GDBot_95227o_9595VoltarObjects2= [];
gdjs.Menu_32PrincipalCode.GDBackgroundObjects1= [];
gdjs.Menu_32PrincipalCode.GDBackgroundObjects2= [];
gdjs.Menu_32PrincipalCode.GDPlayerObjects1= [];
gdjs.Menu_32PrincipalCode.GDPlayerObjects2= [];
gdjs.Menu_32PrincipalCode.GDIglooObjects1= [];
gdjs.Menu_32PrincipalCode.GDIglooObjects2= [];
gdjs.Menu_32PrincipalCode.GDCoinsObjects1= [];
gdjs.Menu_32PrincipalCode.GDCoinsObjects2= [];
gdjs.Menu_32PrincipalCode.GDKeyObjects1= [];
gdjs.Menu_32PrincipalCode.GDKeyObjects2= [];
gdjs.Menu_32PrincipalCode.GDDoorObjects1= [];
gdjs.Menu_32PrincipalCode.GDDoorObjects2= [];
gdjs.Menu_32PrincipalCode.GDMenu_9595PrincipalObjects1= [];
gdjs.Menu_32PrincipalCode.GDMenu_9595PrincipalObjects2= [];
gdjs.Menu_32PrincipalCode.GDMorteObjects1= [];
gdjs.Menu_32PrincipalCode.GDMorteObjects2= [];
gdjs.Menu_32PrincipalCode.GDLoseObjects1= [];
gdjs.Menu_32PrincipalCode.GDLoseObjects2= [];
gdjs.Menu_32PrincipalCode.GDHealthTextObjects1= [];
gdjs.Menu_32PrincipalCode.GDHealthTextObjects2= [];
gdjs.Menu_32PrincipalCode.GDCoinCountObjects1= [];
gdjs.Menu_32PrincipalCode.GDCoinCountObjects2= [];
gdjs.Menu_32PrincipalCode.GDSairObjects1= [];
gdjs.Menu_32PrincipalCode.GDSairObjects2= [];
gdjs.Menu_32PrincipalCode.GDSetaObjects1= [];
gdjs.Menu_32PrincipalCode.GDSetaObjects2= [];
gdjs.Menu_32PrincipalCode.GDPegue_9595a_9595chaveObjects1= [];
gdjs.Menu_32PrincipalCode.GDPegue_9595a_9595chaveObjects2= [];


gdjs.Menu_32PrincipalCode.eventsList0 = function(runtimeScene) {

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

gdjs.copyArray(runtimeScene.getObjects("Iniciar_jogo"), gdjs.Menu_32PrincipalCode.GDIniciar_9595jogoObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Menu_32PrincipalCode.GDIniciar_9595jogoObjects1.length;i<l;++i) {
    if ( gdjs.Menu_32PrincipalCode.GDIniciar_9595jogoObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Menu_32PrincipalCode.GDIniciar_9595jogoObjects1[k] = gdjs.Menu_32PrincipalCode.GDIniciar_9595jogoObjects1[i];
        ++k;
    }
}
gdjs.Menu_32PrincipalCode.GDIniciar_9595jogoObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Fase 1", false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Controles"), gdjs.Menu_32PrincipalCode.GDControlesObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Menu_32PrincipalCode.GDControlesObjects1.length;i<l;++i) {
    if ( gdjs.Menu_32PrincipalCode.GDControlesObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Menu_32PrincipalCode.GDControlesObjects1[k] = gdjs.Menu_32PrincipalCode.GDControlesObjects1[i];
        ++k;
    }
}
gdjs.Menu_32PrincipalCode.GDControlesObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Controles", false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Autores"), gdjs.Menu_32PrincipalCode.GDAutoresObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Menu_32PrincipalCode.GDAutoresObjects1.length;i<l;++i) {
    if ( gdjs.Menu_32PrincipalCode.GDAutoresObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Menu_32PrincipalCode.GDAutoresObjects1[k] = gdjs.Menu_32PrincipalCode.GDAutoresObjects1[i];
        ++k;
    }
}
gdjs.Menu_32PrincipalCode.GDAutoresObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Autores", false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("História"), gdjs.Menu_32PrincipalCode.GDHist_95243riaObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Menu_32PrincipalCode.GDHist_95243riaObjects1.length;i<l;++i) {
    if ( gdjs.Menu_32PrincipalCode.GDHist_95243riaObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Menu_32PrincipalCode.GDHist_95243riaObjects1[k] = gdjs.Menu_32PrincipalCode.GDHist_95243riaObjects1[i];
        ++k;
    }
}
gdjs.Menu_32PrincipalCode.GDHist_95243riaObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Historia", false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Sair"), gdjs.Menu_32PrincipalCode.GDSairObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Menu_32PrincipalCode.GDSairObjects1.length;i<l;++i) {
    if ( gdjs.Menu_32PrincipalCode.GDSairObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Menu_32PrincipalCode.GDSairObjects1[k] = gdjs.Menu_32PrincipalCode.GDSairObjects1[i];
        ++k;
    }
}
gdjs.Menu_32PrincipalCode.GDSairObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.stopGame(runtimeScene);
}
}

}


};

gdjs.Menu_32PrincipalCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Menu_32PrincipalCode.GDHist_95243riaObjects1.length = 0;
gdjs.Menu_32PrincipalCode.GDHist_95243riaObjects2.length = 0;
gdjs.Menu_32PrincipalCode.GDAutoresObjects1.length = 0;
gdjs.Menu_32PrincipalCode.GDAutoresObjects2.length = 0;
gdjs.Menu_32PrincipalCode.GDControlesObjects1.length = 0;
gdjs.Menu_32PrincipalCode.GDControlesObjects2.length = 0;
gdjs.Menu_32PrincipalCode.GDIniciar_9595jogoObjects1.length = 0;
gdjs.Menu_32PrincipalCode.GDIniciar_9595jogoObjects2.length = 0;
gdjs.Menu_32PrincipalCode.GDNewSpriteObjects1.length = 0;
gdjs.Menu_32PrincipalCode.GDNewSpriteObjects2.length = 0;
gdjs.Menu_32PrincipalCode.GDPr_95243xima_9595faseObjects1.length = 0;
gdjs.Menu_32PrincipalCode.GDPr_95243xima_9595faseObjects2.length = 0;
gdjs.Menu_32PrincipalCode.GDRestart_9595levelObjects1.length = 0;
gdjs.Menu_32PrincipalCode.GDRestart_9595levelObjects2.length = 0;
gdjs.Menu_32PrincipalCode.GDTexto_9595de_9595vitoriaObjects1.length = 0;
gdjs.Menu_32PrincipalCode.GDTexto_9595de_9595vitoriaObjects2.length = 0;
gdjs.Menu_32PrincipalCode.GDIceBoxObjects1.length = 0;
gdjs.Menu_32PrincipalCode.GDIceBoxObjects2.length = 0;
gdjs.Menu_32PrincipalCode.GDBot_95227o_9595VoltarObjects1.length = 0;
gdjs.Menu_32PrincipalCode.GDBot_95227o_9595VoltarObjects2.length = 0;
gdjs.Menu_32PrincipalCode.GDBackgroundObjects1.length = 0;
gdjs.Menu_32PrincipalCode.GDBackgroundObjects2.length = 0;
gdjs.Menu_32PrincipalCode.GDPlayerObjects1.length = 0;
gdjs.Menu_32PrincipalCode.GDPlayerObjects2.length = 0;
gdjs.Menu_32PrincipalCode.GDIglooObjects1.length = 0;
gdjs.Menu_32PrincipalCode.GDIglooObjects2.length = 0;
gdjs.Menu_32PrincipalCode.GDCoinsObjects1.length = 0;
gdjs.Menu_32PrincipalCode.GDCoinsObjects2.length = 0;
gdjs.Menu_32PrincipalCode.GDKeyObjects1.length = 0;
gdjs.Menu_32PrincipalCode.GDKeyObjects2.length = 0;
gdjs.Menu_32PrincipalCode.GDDoorObjects1.length = 0;
gdjs.Menu_32PrincipalCode.GDDoorObjects2.length = 0;
gdjs.Menu_32PrincipalCode.GDMenu_9595PrincipalObjects1.length = 0;
gdjs.Menu_32PrincipalCode.GDMenu_9595PrincipalObjects2.length = 0;
gdjs.Menu_32PrincipalCode.GDMorteObjects1.length = 0;
gdjs.Menu_32PrincipalCode.GDMorteObjects2.length = 0;
gdjs.Menu_32PrincipalCode.GDLoseObjects1.length = 0;
gdjs.Menu_32PrincipalCode.GDLoseObjects2.length = 0;
gdjs.Menu_32PrincipalCode.GDHealthTextObjects1.length = 0;
gdjs.Menu_32PrincipalCode.GDHealthTextObjects2.length = 0;
gdjs.Menu_32PrincipalCode.GDCoinCountObjects1.length = 0;
gdjs.Menu_32PrincipalCode.GDCoinCountObjects2.length = 0;
gdjs.Menu_32PrincipalCode.GDSairObjects1.length = 0;
gdjs.Menu_32PrincipalCode.GDSairObjects2.length = 0;
gdjs.Menu_32PrincipalCode.GDSetaObjects1.length = 0;
gdjs.Menu_32PrincipalCode.GDSetaObjects2.length = 0;
gdjs.Menu_32PrincipalCode.GDPegue_9595a_9595chaveObjects1.length = 0;
gdjs.Menu_32PrincipalCode.GDPegue_9595a_9595chaveObjects2.length = 0;

gdjs.Menu_32PrincipalCode.eventsList0(runtimeScene);
gdjs.Menu_32PrincipalCode.GDHist_95243riaObjects1.length = 0;
gdjs.Menu_32PrincipalCode.GDHist_95243riaObjects2.length = 0;
gdjs.Menu_32PrincipalCode.GDAutoresObjects1.length = 0;
gdjs.Menu_32PrincipalCode.GDAutoresObjects2.length = 0;
gdjs.Menu_32PrincipalCode.GDControlesObjects1.length = 0;
gdjs.Menu_32PrincipalCode.GDControlesObjects2.length = 0;
gdjs.Menu_32PrincipalCode.GDIniciar_9595jogoObjects1.length = 0;
gdjs.Menu_32PrincipalCode.GDIniciar_9595jogoObjects2.length = 0;
gdjs.Menu_32PrincipalCode.GDNewSpriteObjects1.length = 0;
gdjs.Menu_32PrincipalCode.GDNewSpriteObjects2.length = 0;
gdjs.Menu_32PrincipalCode.GDPr_95243xima_9595faseObjects1.length = 0;
gdjs.Menu_32PrincipalCode.GDPr_95243xima_9595faseObjects2.length = 0;
gdjs.Menu_32PrincipalCode.GDRestart_9595levelObjects1.length = 0;
gdjs.Menu_32PrincipalCode.GDRestart_9595levelObjects2.length = 0;
gdjs.Menu_32PrincipalCode.GDTexto_9595de_9595vitoriaObjects1.length = 0;
gdjs.Menu_32PrincipalCode.GDTexto_9595de_9595vitoriaObjects2.length = 0;
gdjs.Menu_32PrincipalCode.GDIceBoxObjects1.length = 0;
gdjs.Menu_32PrincipalCode.GDIceBoxObjects2.length = 0;
gdjs.Menu_32PrincipalCode.GDBot_95227o_9595VoltarObjects1.length = 0;
gdjs.Menu_32PrincipalCode.GDBot_95227o_9595VoltarObjects2.length = 0;
gdjs.Menu_32PrincipalCode.GDBackgroundObjects1.length = 0;
gdjs.Menu_32PrincipalCode.GDBackgroundObjects2.length = 0;
gdjs.Menu_32PrincipalCode.GDPlayerObjects1.length = 0;
gdjs.Menu_32PrincipalCode.GDPlayerObjects2.length = 0;
gdjs.Menu_32PrincipalCode.GDIglooObjects1.length = 0;
gdjs.Menu_32PrincipalCode.GDIglooObjects2.length = 0;
gdjs.Menu_32PrincipalCode.GDCoinsObjects1.length = 0;
gdjs.Menu_32PrincipalCode.GDCoinsObjects2.length = 0;
gdjs.Menu_32PrincipalCode.GDKeyObjects1.length = 0;
gdjs.Menu_32PrincipalCode.GDKeyObjects2.length = 0;
gdjs.Menu_32PrincipalCode.GDDoorObjects1.length = 0;
gdjs.Menu_32PrincipalCode.GDDoorObjects2.length = 0;
gdjs.Menu_32PrincipalCode.GDMenu_9595PrincipalObjects1.length = 0;
gdjs.Menu_32PrincipalCode.GDMenu_9595PrincipalObjects2.length = 0;
gdjs.Menu_32PrincipalCode.GDMorteObjects1.length = 0;
gdjs.Menu_32PrincipalCode.GDMorteObjects2.length = 0;
gdjs.Menu_32PrincipalCode.GDLoseObjects1.length = 0;
gdjs.Menu_32PrincipalCode.GDLoseObjects2.length = 0;
gdjs.Menu_32PrincipalCode.GDHealthTextObjects1.length = 0;
gdjs.Menu_32PrincipalCode.GDHealthTextObjects2.length = 0;
gdjs.Menu_32PrincipalCode.GDCoinCountObjects1.length = 0;
gdjs.Menu_32PrincipalCode.GDCoinCountObjects2.length = 0;
gdjs.Menu_32PrincipalCode.GDSairObjects1.length = 0;
gdjs.Menu_32PrincipalCode.GDSairObjects2.length = 0;
gdjs.Menu_32PrincipalCode.GDSetaObjects1.length = 0;
gdjs.Menu_32PrincipalCode.GDSetaObjects2.length = 0;
gdjs.Menu_32PrincipalCode.GDPegue_9595a_9595chaveObjects1.length = 0;
gdjs.Menu_32PrincipalCode.GDPegue_9595a_9595chaveObjects2.length = 0;


return;

}

gdjs['Menu_32PrincipalCode'] = gdjs.Menu_32PrincipalCode;
