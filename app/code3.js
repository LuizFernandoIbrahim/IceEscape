gdjs.ControlesCode = {};
gdjs.ControlesCode.localVariables = [];
gdjs.ControlesCode.idToCallbackMap = new Map();
gdjs.ControlesCode.GDSeta_9595DireitaObjects1= [];
gdjs.ControlesCode.GDSeta_9595DireitaObjects2= [];
gdjs.ControlesCode.GDTexto_9595DireitaObjects1= [];
gdjs.ControlesCode.GDTexto_9595DireitaObjects2= [];
gdjs.ControlesCode.GDTexto_9595EsquerdaObjects1= [];
gdjs.ControlesCode.GDTexto_9595EsquerdaObjects2= [];
gdjs.ControlesCode.GDSeta_9595EsquerdaObjects1= [];
gdjs.ControlesCode.GDSeta_9595EsquerdaObjects2= [];
gdjs.ControlesCode.GDCimaObjects1= [];
gdjs.ControlesCode.GDCimaObjects2= [];
gdjs.ControlesCode.GDEspa_95231oObjects1= [];
gdjs.ControlesCode.GDEspa_95231oObjects2= [];
gdjs.ControlesCode.GDControles_9595TituloObjects1= [];
gdjs.ControlesCode.GDControles_9595TituloObjects2= [];
gdjs.ControlesCode.GDDoublejumpObjects1= [];
gdjs.ControlesCode.GDDoublejumpObjects2= [];
gdjs.ControlesCode.GDPr_95243xima_9595faseObjects1= [];
gdjs.ControlesCode.GDPr_95243xima_9595faseObjects2= [];
gdjs.ControlesCode.GDRestart_9595levelObjects1= [];
gdjs.ControlesCode.GDRestart_9595levelObjects2= [];
gdjs.ControlesCode.GDTexto_9595de_9595vitoriaObjects1= [];
gdjs.ControlesCode.GDTexto_9595de_9595vitoriaObjects2= [];
gdjs.ControlesCode.GDIceBoxObjects1= [];
gdjs.ControlesCode.GDIceBoxObjects2= [];
gdjs.ControlesCode.GDBot_95227o_9595VoltarObjects1= [];
gdjs.ControlesCode.GDBot_95227o_9595VoltarObjects2= [];
gdjs.ControlesCode.GDBackgroundObjects1= [];
gdjs.ControlesCode.GDBackgroundObjects2= [];
gdjs.ControlesCode.GDPlayerObjects1= [];
gdjs.ControlesCode.GDPlayerObjects2= [];
gdjs.ControlesCode.GDIglooObjects1= [];
gdjs.ControlesCode.GDIglooObjects2= [];
gdjs.ControlesCode.GDCoinsObjects1= [];
gdjs.ControlesCode.GDCoinsObjects2= [];
gdjs.ControlesCode.GDKeyObjects1= [];
gdjs.ControlesCode.GDKeyObjects2= [];
gdjs.ControlesCode.GDDoorObjects1= [];
gdjs.ControlesCode.GDDoorObjects2= [];
gdjs.ControlesCode.GDMenu_9595PrincipalObjects1= [];
gdjs.ControlesCode.GDMenu_9595PrincipalObjects2= [];
gdjs.ControlesCode.GDMorteObjects1= [];
gdjs.ControlesCode.GDMorteObjects2= [];
gdjs.ControlesCode.GDLoseObjects1= [];
gdjs.ControlesCode.GDLoseObjects2= [];
gdjs.ControlesCode.GDHealthTextObjects1= [];
gdjs.ControlesCode.GDHealthTextObjects2= [];
gdjs.ControlesCode.GDCoinCountObjects1= [];
gdjs.ControlesCode.GDCoinCountObjects2= [];
gdjs.ControlesCode.GDSairObjects1= [];
gdjs.ControlesCode.GDSairObjects2= [];
gdjs.ControlesCode.GDSetaObjects1= [];
gdjs.ControlesCode.GDSetaObjects2= [];
gdjs.ControlesCode.GDPegue_9595a_9595chaveObjects1= [];
gdjs.ControlesCode.GDPegue_9595a_9595chaveObjects2= [];


gdjs.ControlesCode.eventsList0 = function(runtimeScene) {

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

gdjs.copyArray(runtimeScene.getObjects("Botão_Voltar"), gdjs.ControlesCode.GDBot_95227o_9595VoltarObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.ControlesCode.GDBot_95227o_9595VoltarObjects1.length;i<l;++i) {
    if ( gdjs.ControlesCode.GDBot_95227o_9595VoltarObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.ControlesCode.GDBot_95227o_9595VoltarObjects1[k] = gdjs.ControlesCode.GDBot_95227o_9595VoltarObjects1[i];
        ++k;
    }
}
gdjs.ControlesCode.GDBot_95227o_9595VoltarObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Menu Principal", false);
}
}

}


};

gdjs.ControlesCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.ControlesCode.GDSeta_9595DireitaObjects1.length = 0;
gdjs.ControlesCode.GDSeta_9595DireitaObjects2.length = 0;
gdjs.ControlesCode.GDTexto_9595DireitaObjects1.length = 0;
gdjs.ControlesCode.GDTexto_9595DireitaObjects2.length = 0;
gdjs.ControlesCode.GDTexto_9595EsquerdaObjects1.length = 0;
gdjs.ControlesCode.GDTexto_9595EsquerdaObjects2.length = 0;
gdjs.ControlesCode.GDSeta_9595EsquerdaObjects1.length = 0;
gdjs.ControlesCode.GDSeta_9595EsquerdaObjects2.length = 0;
gdjs.ControlesCode.GDCimaObjects1.length = 0;
gdjs.ControlesCode.GDCimaObjects2.length = 0;
gdjs.ControlesCode.GDEspa_95231oObjects1.length = 0;
gdjs.ControlesCode.GDEspa_95231oObjects2.length = 0;
gdjs.ControlesCode.GDControles_9595TituloObjects1.length = 0;
gdjs.ControlesCode.GDControles_9595TituloObjects2.length = 0;
gdjs.ControlesCode.GDDoublejumpObjects1.length = 0;
gdjs.ControlesCode.GDDoublejumpObjects2.length = 0;
gdjs.ControlesCode.GDPr_95243xima_9595faseObjects1.length = 0;
gdjs.ControlesCode.GDPr_95243xima_9595faseObjects2.length = 0;
gdjs.ControlesCode.GDRestart_9595levelObjects1.length = 0;
gdjs.ControlesCode.GDRestart_9595levelObjects2.length = 0;
gdjs.ControlesCode.GDTexto_9595de_9595vitoriaObjects1.length = 0;
gdjs.ControlesCode.GDTexto_9595de_9595vitoriaObjects2.length = 0;
gdjs.ControlesCode.GDIceBoxObjects1.length = 0;
gdjs.ControlesCode.GDIceBoxObjects2.length = 0;
gdjs.ControlesCode.GDBot_95227o_9595VoltarObjects1.length = 0;
gdjs.ControlesCode.GDBot_95227o_9595VoltarObjects2.length = 0;
gdjs.ControlesCode.GDBackgroundObjects1.length = 0;
gdjs.ControlesCode.GDBackgroundObjects2.length = 0;
gdjs.ControlesCode.GDPlayerObjects1.length = 0;
gdjs.ControlesCode.GDPlayerObjects2.length = 0;
gdjs.ControlesCode.GDIglooObjects1.length = 0;
gdjs.ControlesCode.GDIglooObjects2.length = 0;
gdjs.ControlesCode.GDCoinsObjects1.length = 0;
gdjs.ControlesCode.GDCoinsObjects2.length = 0;
gdjs.ControlesCode.GDKeyObjects1.length = 0;
gdjs.ControlesCode.GDKeyObjects2.length = 0;
gdjs.ControlesCode.GDDoorObjects1.length = 0;
gdjs.ControlesCode.GDDoorObjects2.length = 0;
gdjs.ControlesCode.GDMenu_9595PrincipalObjects1.length = 0;
gdjs.ControlesCode.GDMenu_9595PrincipalObjects2.length = 0;
gdjs.ControlesCode.GDMorteObjects1.length = 0;
gdjs.ControlesCode.GDMorteObjects2.length = 0;
gdjs.ControlesCode.GDLoseObjects1.length = 0;
gdjs.ControlesCode.GDLoseObjects2.length = 0;
gdjs.ControlesCode.GDHealthTextObjects1.length = 0;
gdjs.ControlesCode.GDHealthTextObjects2.length = 0;
gdjs.ControlesCode.GDCoinCountObjects1.length = 0;
gdjs.ControlesCode.GDCoinCountObjects2.length = 0;
gdjs.ControlesCode.GDSairObjects1.length = 0;
gdjs.ControlesCode.GDSairObjects2.length = 0;
gdjs.ControlesCode.GDSetaObjects1.length = 0;
gdjs.ControlesCode.GDSetaObjects2.length = 0;
gdjs.ControlesCode.GDPegue_9595a_9595chaveObjects1.length = 0;
gdjs.ControlesCode.GDPegue_9595a_9595chaveObjects2.length = 0;

gdjs.ControlesCode.eventsList0(runtimeScene);
gdjs.ControlesCode.GDSeta_9595DireitaObjects1.length = 0;
gdjs.ControlesCode.GDSeta_9595DireitaObjects2.length = 0;
gdjs.ControlesCode.GDTexto_9595DireitaObjects1.length = 0;
gdjs.ControlesCode.GDTexto_9595DireitaObjects2.length = 0;
gdjs.ControlesCode.GDTexto_9595EsquerdaObjects1.length = 0;
gdjs.ControlesCode.GDTexto_9595EsquerdaObjects2.length = 0;
gdjs.ControlesCode.GDSeta_9595EsquerdaObjects1.length = 0;
gdjs.ControlesCode.GDSeta_9595EsquerdaObjects2.length = 0;
gdjs.ControlesCode.GDCimaObjects1.length = 0;
gdjs.ControlesCode.GDCimaObjects2.length = 0;
gdjs.ControlesCode.GDEspa_95231oObjects1.length = 0;
gdjs.ControlesCode.GDEspa_95231oObjects2.length = 0;
gdjs.ControlesCode.GDControles_9595TituloObjects1.length = 0;
gdjs.ControlesCode.GDControles_9595TituloObjects2.length = 0;
gdjs.ControlesCode.GDDoublejumpObjects1.length = 0;
gdjs.ControlesCode.GDDoublejumpObjects2.length = 0;
gdjs.ControlesCode.GDPr_95243xima_9595faseObjects1.length = 0;
gdjs.ControlesCode.GDPr_95243xima_9595faseObjects2.length = 0;
gdjs.ControlesCode.GDRestart_9595levelObjects1.length = 0;
gdjs.ControlesCode.GDRestart_9595levelObjects2.length = 0;
gdjs.ControlesCode.GDTexto_9595de_9595vitoriaObjects1.length = 0;
gdjs.ControlesCode.GDTexto_9595de_9595vitoriaObjects2.length = 0;
gdjs.ControlesCode.GDIceBoxObjects1.length = 0;
gdjs.ControlesCode.GDIceBoxObjects2.length = 0;
gdjs.ControlesCode.GDBot_95227o_9595VoltarObjects1.length = 0;
gdjs.ControlesCode.GDBot_95227o_9595VoltarObjects2.length = 0;
gdjs.ControlesCode.GDBackgroundObjects1.length = 0;
gdjs.ControlesCode.GDBackgroundObjects2.length = 0;
gdjs.ControlesCode.GDPlayerObjects1.length = 0;
gdjs.ControlesCode.GDPlayerObjects2.length = 0;
gdjs.ControlesCode.GDIglooObjects1.length = 0;
gdjs.ControlesCode.GDIglooObjects2.length = 0;
gdjs.ControlesCode.GDCoinsObjects1.length = 0;
gdjs.ControlesCode.GDCoinsObjects2.length = 0;
gdjs.ControlesCode.GDKeyObjects1.length = 0;
gdjs.ControlesCode.GDKeyObjects2.length = 0;
gdjs.ControlesCode.GDDoorObjects1.length = 0;
gdjs.ControlesCode.GDDoorObjects2.length = 0;
gdjs.ControlesCode.GDMenu_9595PrincipalObjects1.length = 0;
gdjs.ControlesCode.GDMenu_9595PrincipalObjects2.length = 0;
gdjs.ControlesCode.GDMorteObjects1.length = 0;
gdjs.ControlesCode.GDMorteObjects2.length = 0;
gdjs.ControlesCode.GDLoseObjects1.length = 0;
gdjs.ControlesCode.GDLoseObjects2.length = 0;
gdjs.ControlesCode.GDHealthTextObjects1.length = 0;
gdjs.ControlesCode.GDHealthTextObjects2.length = 0;
gdjs.ControlesCode.GDCoinCountObjects1.length = 0;
gdjs.ControlesCode.GDCoinCountObjects2.length = 0;
gdjs.ControlesCode.GDSairObjects1.length = 0;
gdjs.ControlesCode.GDSairObjects2.length = 0;
gdjs.ControlesCode.GDSetaObjects1.length = 0;
gdjs.ControlesCode.GDSetaObjects2.length = 0;
gdjs.ControlesCode.GDPegue_9595a_9595chaveObjects1.length = 0;
gdjs.ControlesCode.GDPegue_9595a_9595chaveObjects2.length = 0;


return;

}

gdjs['ControlesCode'] = gdjs.ControlesCode;
