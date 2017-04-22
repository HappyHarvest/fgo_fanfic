//==============================================================================
// MrTS_BattleCharacterLimit.js
//==============================================================================

/*:
* @plugindesc 戦闘のキャラクター配置を変更します。
* @author Mr. Trivel
* 
* @param Max Characters
* @desc 戦闘中の最大文字数
* @default 5
*
* @param Characters Per Row
* @desc 戦闘中の行ごとのキャラクター
* @default 3
*
* @param Offset
* @desc 文字の水平オフセットを開始する
* @default 120
* 
* @param Vertical Offset
* @desc 文字の垂直オフセットを開始する
* @default 360
* 
* @param Lower Index
* @desc 下の各文字はどれくらいですか？
* @default 48
*
* @param Forward Offset
* @desc バトルの行ごとにオフセット分だけ行を移動する
* @default 100
*
* @param Row Spacing
* @desc 行間スペース
* @default 100
*
* @param Vertical Chara Spacing
* @desc 行間スペース
* @default 54
* 
* @help 
* --------------------------------------------------------------------------------
* Terms of Use
* --------------------------------------------------------------------------------
*このプラグインを書き込んだヘッダーやクレームを削除しないでください。
*あなたのプロジェクトでこのプラグインを使用している場合は、Mr. Trivelを評価してください。
*商用および非商用プロジェクトは無料です。
* --------------------------------------------------------------------------------
* Version 1.1
* --------------------------------------------------------------------------------
*/

(function() {
	var parameters = PluginManager.parameters('MrTS_BattleCharacterLimit');

	var maxCharacters = Number(parameters['Max Characters'] || 5);
	var charasPerRow = Number(parameters['Characters Per Row'] || 3);
	var rightOffset = Number(parameters['Offset'] || 120);
	var topOffset = Number(parameters['Vertical Offset'] || 360);
	var lowerCharaIndex = Number(parameters['Lower Index'] || 48);
	var forwardIndex = Number(parameters['Forward Offset'] || 100);
	var rowSpacing = Number(parameters['Row Spacing'] || 100);
	var charaVerticalSpacing = Number(parameters['Vertical Chara Spacing'] || 54);

	Game_Party.prototype.maxBattleMembers = function() {
	    return maxCharacters;
	};

	Sprite_Actor.prototype.setActorHome = function(index) {
		var c = Math.floor(index/charasPerRow);
		var x = (Graphics.boxWidth - rightOffset) - forwardIndex * Math.floor($gameParty.battleMembers().length/charasPerRow) + lowerCharaIndex * (index % charasPerRow) + rowSpacing * c;
		var y = topOffset + (index%charasPerRow) * charaVerticalSpacing;
	    this.setHome(x, y);
	};

})();