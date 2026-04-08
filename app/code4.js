gdjs.Fase_321Code = {};
gdjs.Fase_321Code.localVariables = [];
gdjs.Fase_321Code.idToCallbackMap = new Map();
gdjs.Fase_321Code.GDFase_95951Objects1= [];
gdjs.Fase_321Code.GDFase_95951Objects2= [];
gdjs.Fase_321Code.GDPr_95243xima_9595faseObjects1= [];
gdjs.Fase_321Code.GDPr_95243xima_9595faseObjects2= [];
gdjs.Fase_321Code.GDRestart_9595levelObjects1= [];
gdjs.Fase_321Code.GDRestart_9595levelObjects2= [];
gdjs.Fase_321Code.GDTexto_9595de_9595vitoriaObjects1= [];
gdjs.Fase_321Code.GDTexto_9595de_9595vitoriaObjects2= [];
gdjs.Fase_321Code.GDIceBoxObjects1= [];
gdjs.Fase_321Code.GDIceBoxObjects2= [];
gdjs.Fase_321Code.GDBot_95227o_9595VoltarObjects1= [];
gdjs.Fase_321Code.GDBot_95227o_9595VoltarObjects2= [];
gdjs.Fase_321Code.GDBackgroundObjects1= [];
gdjs.Fase_321Code.GDBackgroundObjects2= [];
gdjs.Fase_321Code.GDPlayerObjects1= [];
gdjs.Fase_321Code.GDPlayerObjects2= [];
gdjs.Fase_321Code.GDIglooObjects1= [];
gdjs.Fase_321Code.GDIglooObjects2= [];
gdjs.Fase_321Code.GDCoinsObjects1= [];
gdjs.Fase_321Code.GDCoinsObjects2= [];
gdjs.Fase_321Code.GDKeyObjects1= [];
gdjs.Fase_321Code.GDKeyObjects2= [];
gdjs.Fase_321Code.GDDoorObjects1= [];
gdjs.Fase_321Code.GDDoorObjects2= [];
gdjs.Fase_321Code.GDMenu_9595PrincipalObjects1= [];
gdjs.Fase_321Code.GDMenu_9595PrincipalObjects2= [];
gdjs.Fase_321Code.GDMorteObjects1= [];
gdjs.Fase_321Code.GDMorteObjects2= [];
gdjs.Fase_321Code.GDLoseObjects1= [];
gdjs.Fase_321Code.GDLoseObjects2= [];
gdjs.Fase_321Code.GDHealthTextObjects1= [];
gdjs.Fase_321Code.GDHealthTextObjects2= [];
gdjs.Fase_321Code.GDCoinCountObjects1= [];
gdjs.Fase_321Code.GDCoinCountObjects2= [];
gdjs.Fase_321Code.GDSairObjects1= [];
gdjs.Fase_321Code.GDSairObjects2= [];
gdjs.Fase_321Code.GDSetaObjects1= [];
gdjs.Fase_321Code.GDSetaObjects2= [];
gdjs.Fase_321Code.GDPegue_9595a_9595chaveObjects1= [];
gdjs.Fase_321Code.GDPegue_9595a_9595chaveObjects2= [];


gdjs.Fase_321Code.mapOfGDgdjs_9546Fase_9595321Code_9546GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.Fase_321Code.GDPlayerObjects1});
gdjs.Fase_321Code.mapOfGDgdjs_9546Fase_9595321Code_9546GDKeyObjects1Objects = Hashtable.newFrom({"Key": gdjs.Fase_321Code.GDKeyObjects1});
gdjs.Fase_321Code.mapOfGDgdjs_9546Fase_9595321Code_9546GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.Fase_321Code.GDPlayerObjects1});
gdjs.Fase_321Code.mapOfGDgdjs_9546Fase_9595321Code_9546GDMorteObjects1Objects = Hashtable.newFrom({"Morte": gdjs.Fase_321Code.GDMorteObjects1});
gdjs.Fase_321Code.mapOfGDgdjs_9546Fase_9595321Code_9546GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.Fase_321Code.GDPlayerObjects1});
gdjs.Fase_321Code.mapOfGDgdjs_9546Fase_9595321Code_9546GDCoinsObjects1Objects = Hashtable.newFrom({"Coins": gdjs.Fase_321Code.GDCoinsObjects1});
gdjs.Fase_321Code.mapOfGDgdjs_9546Fase_9595321Code_9546GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.Fase_321Code.GDPlayerObjects1});
gdjs.Fase_321Code.mapOfGDgdjs_9546Fase_9595321Code_9546GDIglooObjects1Objects = Hashtable.newFrom({"Igloo": gdjs.Fase_321Code.GDIglooObjects1});
gdjs.Fase_321Code.mapOfGDgdjs_9546Fase_9595321Code_9546GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.Fase_321Code.GDPlayerObjects1});
gdjs.Fase_321Code.mapOfGDgdjs_9546Fase_9595321Code_9546GDIglooObjects1Objects = Hashtable.newFrom({"Igloo": gdjs.Fase_321Code.GDIglooObjects1});
gdjs.Fase_321Code.mapOfGDgdjs_9546Fase_9595321Code_9546GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.Fase_321Code.GDPlayerObjects1});
gdjs.Fase_321Code.mapOfGDgdjs_9546Fase_9595321Code_9546GDIglooObjects1Objects = Hashtable.newFrom({"Igloo": gdjs.Fase_321Code.GDIglooObjects1});
gdjs.Fase_321Code.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "d");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Fase_321Code.GDPlayerObjects1);
{for(var i = 0, len = gdjs.Fase_321Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Fase_321Code.GDPlayerObjects1[i].getBehavior("PlatformerObject").simulateRightKey();
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "a");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Fase_321Code.GDPlayerObjects1);
{for(var i = 0, len = gdjs.Fase_321Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Fase_321Code.GDPlayerObjects1[i].getBehavior("PlatformerObject").simulateLeftKey();
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Lose"), gdjs.Fase_321Code.GDLoseObjects1);
gdjs.copyArray(runtimeScene.getObjects("Menu_Principal"), gdjs.Fase_321Code.GDMenu_9595PrincipalObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Fase_321Code.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("Restart_level"), gdjs.Fase_321Code.GDRestart_9595levelObjects1);
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "a5297318776cbc09895a2f51d9f5d77d5e21decfdae20c61211687b278f6d741_Slice of Life.aac", 1, false, 20, 1);
}
{gdjs.evtTools.camera.hideLayer(runtimeScene, "UI");
}
{for(var i = 0, len = gdjs.Fase_321Code.GDMenu_9595PrincipalObjects1.length ;i < len;++i) {
    gdjs.Fase_321Code.GDMenu_9595PrincipalObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Fase_321Code.GDRestart_9595levelObjects1.length ;i < len;++i) {
    gdjs.Fase_321Code.GDRestart_9595levelObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Fase_321Code.GDLoseObjects1.length ;i < len;++i) {
    gdjs.Fase_321Code.GDLoseObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Fase_321Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Fase_321Code.GDPlayerObjects1[i].activateBehavior("AdvancedJump", false);
}
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("CoinCount"), gdjs.Fase_321Code.GDCoinCountObjects1);
gdjs.copyArray(runtimeScene.getObjects("HealthText"), gdjs.Fase_321Code.GDHealthTextObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Fase_321Code.GDPlayerObjects1);
{gdjs.evtTools.camera.setCameraX(runtimeScene, (( gdjs.Fase_321Code.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.Fase_321Code.GDPlayerObjects1[0].getPointX("")), "", 0);
}
{gdjs.evtTools.camera.setCameraY(runtimeScene, (( gdjs.Fase_321Code.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.Fase_321Code.GDPlayerObjects1[0].getPointY("")), "", 0);
}
{for(var i = 0, len = gdjs.Fase_321Code.GDHealthTextObjects1.length ;i < len;++i) {
    gdjs.Fase_321Code.GDHealthTextObjects1[i].getBehavior("Text").setText("Vidas: " + runtimeScene.getScene().getVariables().getFromIndex(0).getAsString() + "❤️");
}
}
{for(var i = 0, len = gdjs.Fase_321Code.GDCoinCountObjects1.length ;i < len;++i) {
    gdjs.Fase_321Code.GDCoinCountObjects1[i].getBehavior("Text").setText("Moedas: " + runtimeScene.getScene().getVariables().getFromIndex(1).getAsString() + "🪙");
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() <= 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(17903844);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Lose"), gdjs.Fase_321Code.GDLoseObjects1);
gdjs.copyArray(runtimeScene.getObjects("Menu_Principal"), gdjs.Fase_321Code.GDMenu_9595PrincipalObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Fase_321Code.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("Restart_level"), gdjs.Fase_321Code.GDRestart_9595levelObjects1);
{gdjs.evtTools.runtimeScene.setTimeScale(runtimeScene, 0);
}
{gdjs.evtTools.sound.playSound(runtimeScene, "95fe7f6a064b3e17dce2774ad92cee83f877d2d6dda1cd16d79b876ca572911c_Death.aac", false, 80, gdjs.randomFloatInRange(1, 1.1));
}
{for(var i = 0, len = gdjs.Fase_321Code.GDLoseObjects1.length ;i < len;++i) {
    gdjs.Fase_321Code.GDLoseObjects1[i].setX((( gdjs.Fase_321Code.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.Fase_321Code.GDPlayerObjects1[0].getPointX("")) - 100);
}
}
{for(var i = 0, len = gdjs.Fase_321Code.GDLoseObjects1.length ;i < len;++i) {
    gdjs.Fase_321Code.GDLoseObjects1[i].setY((( gdjs.Fase_321Code.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.Fase_321Code.GDPlayerObjects1[0].getPointY("")) - 100);
}
}
{for(var i = 0, len = gdjs.Fase_321Code.GDRestart_9595levelObjects1.length ;i < len;++i) {
    gdjs.Fase_321Code.GDRestart_9595levelObjects1[i].setX((( gdjs.Fase_321Code.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.Fase_321Code.GDPlayerObjects1[0].getPointX("")) - 100);
}
}
{for(var i = 0, len = gdjs.Fase_321Code.GDRestart_9595levelObjects1.length ;i < len;++i) {
    gdjs.Fase_321Code.GDRestart_9595levelObjects1[i].setY((( gdjs.Fase_321Code.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.Fase_321Code.GDPlayerObjects1[0].getPointY("")));
}
}
{for(var i = 0, len = gdjs.Fase_321Code.GDRestart_9595levelObjects1.length ;i < len;++i) {
    gdjs.Fase_321Code.GDRestart_9595levelObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Fase_321Code.GDLoseObjects1.length ;i < len;++i) {
    gdjs.Fase_321Code.GDLoseObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.Fase_321Code.GDMenu_9595PrincipalObjects1.length ;i < len;++i) {
    gdjs.Fase_321Code.GDMenu_9595PrincipalObjects1[i].hide(false);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Key"), gdjs.Fase_321Code.GDKeyObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Fase_321Code.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Fase_321Code.mapOfGDgdjs_9546Fase_9595321Code_9546GDPlayerObjects1Objects, gdjs.Fase_321Code.mapOfGDgdjs_9546Fase_9595321Code_9546GDKeyObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(17911396);
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(2).setBoolean(true);
}
{gdjs.evtTools.sound.playSound(runtimeScene, "d33a1fb87f752d43fb5980d5b838735996c61de6e3dc4dea72c3788ed43f0104_Coins 5.aac", false, 40, gdjs.randomFloatInRange(1, 1.1));
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getScene().getVariables().getFromIndex(2).getAsBoolean();
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Key"), gdjs.Fase_321Code.GDKeyObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Fase_321Code.GDPlayerObjects1);
{for(var i = 0, len = gdjs.Fase_321Code.GDKeyObjects1.length ;i < len;++i) {
    gdjs.Fase_321Code.GDKeyObjects1[i].putAroundObject((gdjs.Fase_321Code.GDPlayerObjects1.length !== 0 ? gdjs.Fase_321Code.GDPlayerObjects1[0] : null), 50, 180);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Morte"), gdjs.Fase_321Code.GDMorteObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Fase_321Code.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Fase_321Code.mapOfGDgdjs_9546Fase_9595321Code_9546GDPlayerObjects1Objects, gdjs.Fase_321Code.mapOfGDgdjs_9546Fase_9595321Code_9546GDMorteObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Fase_321Code.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.Fase_321Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Fase_321Code.GDPlayerObjects1[i].setX(50);
}
}
{for(var i = 0, len = gdjs.Fase_321Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Fase_321Code.GDPlayerObjects1[i].setY(50);
}
}
{runtimeScene.getScene().getVariables().getFromIndex(0).sub(1);
}
{for(var i = 0, len = gdjs.Fase_321Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Fase_321Code.GDPlayerObjects1[i].getBehavior("Animation").setAnimationName("Hurt");
}
}
{gdjs.evtTools.sound.playSound(runtimeScene, "ff4bf05320990a27ccb396af088267eba2a90522a28e6cb679620276bade876c_Laser-weapon 6.aac", false, 80, gdjs.randomFloatInRange(1, 1.1));
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Fase_321Code.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Fase_321Code.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.Fase_321Code.GDPlayerObjects1[i].getTimerElapsedTimeInSecondsOrNaN("InvincibilityTimer") > 1 ) {
        isConditionTrue_0 = true;
        gdjs.Fase_321Code.GDPlayerObjects1[k] = gdjs.Fase_321Code.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.Fase_321Code.GDPlayerObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Fase_321Code.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.Fase_321Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Fase_321Code.GDPlayerObjects1[i].returnVariable(gdjs.Fase_321Code.GDPlayerObjects1[i].getVariables().getFromIndex(0)).setBoolean(false);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Coins"), gdjs.Fase_321Code.GDCoinsObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Fase_321Code.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Fase_321Code.mapOfGDgdjs_9546Fase_9595321Code_9546GDPlayerObjects1Objects, gdjs.Fase_321Code.mapOfGDgdjs_9546Fase_9595321Code_9546GDCoinsObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Fase_321Code.GDCoinsObjects1 */
{for(var i = 0, len = gdjs.Fase_321Code.GDCoinsObjects1.length ;i < len;++i) {
    gdjs.Fase_321Code.GDCoinsObjects1[i].deleteFromScene(runtimeScene);
}
}
{gdjs.evtTools.sound.playSound(runtimeScene, "PickupCoin", false, 80, gdjs.randomFloatInRange(1, 1.1));
}
{runtimeScene.getScene().getVariables().getFromIndex(1).add(1);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Igloo"), gdjs.Fase_321Code.GDIglooObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Fase_321Code.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Fase_321Code.mapOfGDgdjs_9546Fase_9595321Code_9546GDPlayerObjects1Objects, gdjs.Fase_321Code.mapOfGDgdjs_9546Fase_9595321Code_9546GDIglooObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getScene().getVariables().getFromIndex(2).getAsBoolean();
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Restart_level"), gdjs.Fase_321Code.GDRestart_9595levelObjects1);
{gdjs.evtTools.sound.stopSoundOnChannel(runtimeScene, 1);
}
{gdjs.evtTools.sound.playMusicOnChannel(runtimeScene, "Queen - We are the champions (Chorus only) - xd4l3x (youtube).mp3", 1, false, 30, 1);
}
{gdjs.evtTools.camera.showLayer(runtimeScene, "UI");
}
{gdjs.evtTools.runtimeScene.setTimeScale(runtimeScene, 0);
}
{for(var i = 0, len = gdjs.Fase_321Code.GDRestart_9595levelObjects1.length ;i < len;++i) {
    gdjs.Fase_321Code.GDRestart_9595levelObjects1[i].hide(false);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Igloo"), gdjs.Fase_321Code.GDIglooObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Fase_321Code.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("Próxima_fase"), gdjs.Fase_321Code.GDPr_95243xima_9595faseObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Fase_321Code.GDPr_95243xima_9595faseObjects1.length;i<l;++i) {
    if ( gdjs.Fase_321Code.GDPr_95243xima_9595faseObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Fase_321Code.GDPr_95243xima_9595faseObjects1[k] = gdjs.Fase_321Code.GDPr_95243xima_9595faseObjects1[i];
        ++k;
    }
}
gdjs.Fase_321Code.GDPr_95243xima_9595faseObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Fase_321Code.mapOfGDgdjs_9546Fase_9595321Code_9546GDPlayerObjects1Objects, gdjs.Fase_321Code.mapOfGDgdjs_9546Fase_9595321Code_9546GDIglooObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getScene().getVariables().getFromIndex(2).getAsBoolean();
}
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game Scene", false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Igloo"), gdjs.Fase_321Code.GDIglooObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Fase_321Code.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("Restart_level"), gdjs.Fase_321Code.GDRestart_9595levelObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Fase_321Code.GDRestart_9595levelObjects1.length;i<l;++i) {
    if ( gdjs.Fase_321Code.GDRestart_9595levelObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Fase_321Code.GDRestart_9595levelObjects1[k] = gdjs.Fase_321Code.GDRestart_9595levelObjects1[i];
        ++k;
    }
}
gdjs.Fase_321Code.GDRestart_9595levelObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Fase_321Code.mapOfGDgdjs_9546Fase_9595321Code_9546GDPlayerObjects1Objects, gdjs.Fase_321Code.mapOfGDgdjs_9546Fase_9595321Code_9546GDIglooObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getScene().getVariables().getFromIndex(2).getAsBoolean();
}
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Fase 1", false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Menu_Principal"), gdjs.Fase_321Code.GDMenu_9595PrincipalObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Fase_321Code.GDMenu_9595PrincipalObjects1.length;i<l;++i) {
    if ( gdjs.Fase_321Code.GDMenu_9595PrincipalObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Fase_321Code.GDMenu_9595PrincipalObjects1[k] = gdjs.Fase_321Code.GDMenu_9595PrincipalObjects1[i];
        ++k;
    }
}
gdjs.Fase_321Code.GDMenu_9595PrincipalObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Menu Principal", false);
}
}

}


};

gdjs.Fase_321Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Fase_321Code.GDFase_95951Objects1.length = 0;
gdjs.Fase_321Code.GDFase_95951Objects2.length = 0;
gdjs.Fase_321Code.GDPr_95243xima_9595faseObjects1.length = 0;
gdjs.Fase_321Code.GDPr_95243xima_9595faseObjects2.length = 0;
gdjs.Fase_321Code.GDRestart_9595levelObjects1.length = 0;
gdjs.Fase_321Code.GDRestart_9595levelObjects2.length = 0;
gdjs.Fase_321Code.GDTexto_9595de_9595vitoriaObjects1.length = 0;
gdjs.Fase_321Code.GDTexto_9595de_9595vitoriaObjects2.length = 0;
gdjs.Fase_321Code.GDIceBoxObjects1.length = 0;
gdjs.Fase_321Code.GDIceBoxObjects2.length = 0;
gdjs.Fase_321Code.GDBot_95227o_9595VoltarObjects1.length = 0;
gdjs.Fase_321Code.GDBot_95227o_9595VoltarObjects2.length = 0;
gdjs.Fase_321Code.GDBackgroundObjects1.length = 0;
gdjs.Fase_321Code.GDBackgroundObjects2.length = 0;
gdjs.Fase_321Code.GDPlayerObjects1.length = 0;
gdjs.Fase_321Code.GDPlayerObjects2.length = 0;
gdjs.Fase_321Code.GDIglooObjects1.length = 0;
gdjs.Fase_321Code.GDIglooObjects2.length = 0;
gdjs.Fase_321Code.GDCoinsObjects1.length = 0;
gdjs.Fase_321Code.GDCoinsObjects2.length = 0;
gdjs.Fase_321Code.GDKeyObjects1.length = 0;
gdjs.Fase_321Code.GDKeyObjects2.length = 0;
gdjs.Fase_321Code.GDDoorObjects1.length = 0;
gdjs.Fase_321Code.GDDoorObjects2.length = 0;
gdjs.Fase_321Code.GDMenu_9595PrincipalObjects1.length = 0;
gdjs.Fase_321Code.GDMenu_9595PrincipalObjects2.length = 0;
gdjs.Fase_321Code.GDMorteObjects1.length = 0;
gdjs.Fase_321Code.GDMorteObjects2.length = 0;
gdjs.Fase_321Code.GDLoseObjects1.length = 0;
gdjs.Fase_321Code.GDLoseObjects2.length = 0;
gdjs.Fase_321Code.GDHealthTextObjects1.length = 0;
gdjs.Fase_321Code.GDHealthTextObjects2.length = 0;
gdjs.Fase_321Code.GDCoinCountObjects1.length = 0;
gdjs.Fase_321Code.GDCoinCountObjects2.length = 0;
gdjs.Fase_321Code.GDSairObjects1.length = 0;
gdjs.Fase_321Code.GDSairObjects2.length = 0;
gdjs.Fase_321Code.GDSetaObjects1.length = 0;
gdjs.Fase_321Code.GDSetaObjects2.length = 0;
gdjs.Fase_321Code.GDPegue_9595a_9595chaveObjects1.length = 0;
gdjs.Fase_321Code.GDPegue_9595a_9595chaveObjects2.length = 0;

gdjs.Fase_321Code.eventsList0(runtimeScene);
gdjs.Fase_321Code.GDFase_95951Objects1.length = 0;
gdjs.Fase_321Code.GDFase_95951Objects2.length = 0;
gdjs.Fase_321Code.GDPr_95243xima_9595faseObjects1.length = 0;
gdjs.Fase_321Code.GDPr_95243xima_9595faseObjects2.length = 0;
gdjs.Fase_321Code.GDRestart_9595levelObjects1.length = 0;
gdjs.Fase_321Code.GDRestart_9595levelObjects2.length = 0;
gdjs.Fase_321Code.GDTexto_9595de_9595vitoriaObjects1.length = 0;
gdjs.Fase_321Code.GDTexto_9595de_9595vitoriaObjects2.length = 0;
gdjs.Fase_321Code.GDIceBoxObjects1.length = 0;
gdjs.Fase_321Code.GDIceBoxObjects2.length = 0;
gdjs.Fase_321Code.GDBot_95227o_9595VoltarObjects1.length = 0;
gdjs.Fase_321Code.GDBot_95227o_9595VoltarObjects2.length = 0;
gdjs.Fase_321Code.GDBackgroundObjects1.length = 0;
gdjs.Fase_321Code.GDBackgroundObjects2.length = 0;
gdjs.Fase_321Code.GDPlayerObjects1.length = 0;
gdjs.Fase_321Code.GDPlayerObjects2.length = 0;
gdjs.Fase_321Code.GDIglooObjects1.length = 0;
gdjs.Fase_321Code.GDIglooObjects2.length = 0;
gdjs.Fase_321Code.GDCoinsObjects1.length = 0;
gdjs.Fase_321Code.GDCoinsObjects2.length = 0;
gdjs.Fase_321Code.GDKeyObjects1.length = 0;
gdjs.Fase_321Code.GDKeyObjects2.length = 0;
gdjs.Fase_321Code.GDDoorObjects1.length = 0;
gdjs.Fase_321Code.GDDoorObjects2.length = 0;
gdjs.Fase_321Code.GDMenu_9595PrincipalObjects1.length = 0;
gdjs.Fase_321Code.GDMenu_9595PrincipalObjects2.length = 0;
gdjs.Fase_321Code.GDMorteObjects1.length = 0;
gdjs.Fase_321Code.GDMorteObjects2.length = 0;
gdjs.Fase_321Code.GDLoseObjects1.length = 0;
gdjs.Fase_321Code.GDLoseObjects2.length = 0;
gdjs.Fase_321Code.GDHealthTextObjects1.length = 0;
gdjs.Fase_321Code.GDHealthTextObjects2.length = 0;
gdjs.Fase_321Code.GDCoinCountObjects1.length = 0;
gdjs.Fase_321Code.GDCoinCountObjects2.length = 0;
gdjs.Fase_321Code.GDSairObjects1.length = 0;
gdjs.Fase_321Code.GDSairObjects2.length = 0;
gdjs.Fase_321Code.GDSetaObjects1.length = 0;
gdjs.Fase_321Code.GDSetaObjects2.length = 0;
gdjs.Fase_321Code.GDPegue_9595a_9595chaveObjects1.length = 0;
gdjs.Fase_321Code.GDPegue_9595a_9595chaveObjects2.length = 0;


return;

}

gdjs['Fase_321Code'] = gdjs.Fase_321Code;
