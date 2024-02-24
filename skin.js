// Garden Gnome Software - Skin
// Pano2VR 6.1.13/18080
// Filename: Airbnb.ggsk
// Generated 2024-02-24T06:27:57

function pano2vrSkin(player,base) {
	player.addVariable('indicativo', 2, false);
	player.addVariable('POR', 2, true);
	player.addVariable('ENG', 2, false);
	player.addVariable('ESP', 2, false);
	player.addVariable('INFO', 2, false);
	player.addVariable('opt_3d_preview', 2, true);
	var me=this;
	var skin=this;
	var flag=false;
	var hotspotTemplates={};
	var skinKeyPressed = 0;
	this.player=player;
	this.player.skinObj=this;
	this.divSkin=player.divSkin;
	this.ggUserdata=player.userdata;
	this.lastSize={ w: -1,h: -1 };
	var basePath="";
	// auto detect base path
	if (base=='?') {
		var scripts = document.getElementsByTagName('script');
		for(var i=0;i<scripts.length;i++) {
			var src=scripts[i].src;
			if (src.indexOf('skin.js')>=0) {
				var p=src.lastIndexOf('/');
				if (p>=0) {
					basePath=src.substr(0,p+1);
				}
			}
		}
	} else
	if (base) {
		basePath=base;
	}
	this.elementMouseDown=[];
	this.elementMouseOver=[];
	var cssPrefix='';
	var domTransition='transition';
	var domTransform='transform';
	var prefixes='Webkit,Moz,O,ms,Ms'.split(',');
	var i;
	var hs,el,els,elo,ela,elHorScrollFg,elHorScrollBg,elVertScrollFg,elVertScrollBg,elCornerBg;
	if (typeof document.body.style['transform'] == 'undefined') {
		for(var i=0;i<prefixes.length;i++) {
			if (typeof document.body.style[prefixes[i] + 'Transform'] !== 'undefined') {
				cssPrefix='-' + prefixes[i].toLowerCase() + '-';
				domTransition=prefixes[i] + 'Transition';
				domTransform=prefixes[i] + 'Transform';
			}
		}
	}
	
	player.setMargins(0,0,0,0);
	
	this.updateSize=function(startElement) {
		var stack=[];
		stack.push(startElement);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggUpdatePosition) {
				e.ggUpdatePosition();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	
	this.callNodeChange=function(startElement) {
		var stack=[];
		stack.push(startElement);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggNodeChange) {
				e.ggNodeChange();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	player.addListener('changenode', function() { me.ggUserdata=player.userdata; me.callNodeChange(me.divSkin); });
	
	var parameterToTransform=function(p) {
		var hs='translate(' + p.rx + 'px,' + p.ry + 'px) rotate(' + p.a + 'deg) scale(' + p.sx + ',' + p.sy + ')';
		return hs;
	}
	
	this.findElements=function(id,regex) {
		var r=[];
		var stack=[];
		var pat=new RegExp(id,'');
		stack.push(me.divSkin);
		while(stack.length>0) {
			var e=stack.pop();
			if (regex) {
				if (pat.test(e.ggId)) r.push(e);
			} else {
				if (e.ggId==id) r.push(e);
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
		return r;
	}
	
	this.addSkin=function() {
		var hs='';
		this.ggCurrentTime=new Date().getTime();
		el=me._quarto_e_lavanderiai=document.createElement('div');
		el.ggId="QUARTO E LAVANDERIA-I";
		el.ggDx=-20;
		el.ggDy=29;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 20px;';
		hs+='border-radius : 20px;';
		hs+='background : #5e5e5e;';
		hs+='border : 5px solid #ffffff;';
		hs+='cursor : default;';
		hs+='height : 364px;';
		hs+='left : -10000px;';
		hs+='opacity : 0.7;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 272px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._quarto_e_lavanderiai.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._quarto_e_lavanderiai.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getViewerSize().height <= 400))
			)
			{
				newLogicStatePosition = 0;
			}
			else if (
				((player.getViewerSize().width < 1084))
			)
			{
				newLogicStatePosition = 1;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._quarto_e_lavanderiai.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._quarto_e_lavanderiai.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._quarto_e_lavanderiai.style[domTransition]='left 0s, top 0s, ' + cssPrefix + 'transform 0s';
				if (me._quarto_e_lavanderiai.ggCurrentLogicStatePosition == 0) {
					this.ggDx = 50;
					this.ggDy = 25;
					me._quarto_e_lavanderiai.ggUpdatePosition(true);
				}
				else if (me._quarto_e_lavanderiai.ggCurrentLogicStatePosition == 1) {
					this.ggDx = 55;
					this.ggDy = -135;
					me._quarto_e_lavanderiai.ggUpdatePosition(true);
				}
				else {
					me._quarto_e_lavanderiai.ggDx=-20;
					me._quarto_e_lavanderiai.ggDy=29;
					me._quarto_e_lavanderiai.ggUpdatePosition(true);
				}
			}
		}
		me._quarto_e_lavanderiai.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getViewerSize().height <= 400))
			)
			{
				newLogicStateScaling = 0;
			}
			else if (
				((player.getViewerSize().width < 1084))
			)
			{
				newLogicStateScaling = 1;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._quarto_e_lavanderiai.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._quarto_e_lavanderiai.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._quarto_e_lavanderiai.style[domTransition]='left 0s, top 0s, ' + cssPrefix + 'transform 0s';
				if (me._quarto_e_lavanderiai.ggCurrentLogicStateScaling == 0) {
					me._quarto_e_lavanderiai.ggParameter.sx = 0.85;
					me._quarto_e_lavanderiai.ggParameter.sy = 0.75;
					me._quarto_e_lavanderiai.style[domTransform]=parameterToTransform(me._quarto_e_lavanderiai.ggParameter);
				}
				else if (me._quarto_e_lavanderiai.ggCurrentLogicStateScaling == 1) {
					me._quarto_e_lavanderiai.ggParameter.sx = 0.85;
					me._quarto_e_lavanderiai.ggParameter.sy = 0.85;
					me._quarto_e_lavanderiai.style[domTransform]=parameterToTransform(me._quarto_e_lavanderiai.ggParameter);
				}
				else {
					me._quarto_e_lavanderiai.ggParameter.sx = 1;
					me._quarto_e_lavanderiai.ggParameter.sy = 1;
					me._quarto_e_lavanderiai.style[domTransform]=parameterToTransform(me._quarto_e_lavanderiai.ggParameter);
				}
			}
		}
		me._quarto_e_lavanderiai.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('INFO') == false))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._quarto_e_lavanderiai.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._quarto_e_lavanderiai.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._quarto_e_lavanderiai.style[domTransition]='left 0s, top 0s, ' + cssPrefix + 'transform 0s';
				if (me._quarto_e_lavanderiai.ggCurrentLogicStateVisible == 0) {
					me._quarto_e_lavanderiai.style.visibility="hidden";
					me._quarto_e_lavanderiai.ggVisible=false;
				}
				else {
					me._quarto_e_lavanderiai.style.visibility="hidden";
					me._quarto_e_lavanderiai.ggVisible=false;
				}
			}
		}
		me._quarto_e_lavanderiai.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._quarto_e_lavanderiaii=document.createElement('div');
		el.ggId="QUARTO E LAVANDERIA-II";
		el.ggDx=9;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 361px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 295px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._quarto_e_lavanderiaii.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._quarto_e_lavanderiaii.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._bsico0=document.createElement('div');
		els=me._bsico0__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="B\xe1sico";
		el.ggDx=13;
		el.ggDy=-141;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text tooltip";
		el.ggType='text';
		hs ='';
		hs+='height : 43px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 170px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 172px;';
		hs+='height: auto;';
		hs+='background: #ffffff;';
		hs+='background: rgba(255,255,255,0);';
		hs+='border: 1px solid #55aa7f;';
		hs+='border: 1px solid rgba(85,170,127,0);';
		hs+=cssPrefix + 'background-clip: padding-box;';
		hs+='background-clip: padding-box;';
		hs+='border-radius: 10px;';
		hs+=cssPrefix + 'border-radius: 10px;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: left;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 2px 3px 2px 3px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		els.innerHTML="B\xe1sico<br\/>Toallas, etc.";
		el.appendChild(els);
		me._bsico0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._bsico0.logicBlock_text = function() {
			var newLogicStateText;
			if (
				((player.getVariableValue('POR') == true))
			)
			{
				newLogicStateText = 0;
			}
			else if (
				((player.getVariableValue('ENG') == true))
			)
			{
				newLogicStateText = 1;
			}
			else if (
				((player.getVariableValue('ESP') == true))
			)
			{
				newLogicStateText = 2;
			}
			else {
				newLogicStateText = -1;
			}
			if (me._bsico0.ggCurrentLogicStateText != newLogicStateText) {
				me._bsico0.ggCurrentLogicStateText = newLogicStateText;
				me._bsico0.style[domTransition]='';
				if (me._bsico0.ggCurrentLogicStateText == 0) {
					me._bsico0.ggText="B\xe1sico\nToallas, etc.";
					me._bsico0__text.innerHTML=me._bsico0.ggText;
					if (me._bsico0.ggUpdateText) {
					me._bsico0.ggUpdateText=function() {
						var hs="B\xe1sico\nToallas, etc.";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._bsico0.ggUpdatePosition) me._bsico0.ggUpdatePosition();
					}
				}
				else if (me._bsico0.ggCurrentLogicStateText == 1) {
					me._bsico0.ggText="Essentials\nTowels, bed sheets, etc.";
					me._bsico0__text.innerHTML=me._bsico0.ggText;
					if (me._bsico0.ggUpdateText) {
					me._bsico0.ggUpdateText=function() {
						var hs="Essentials\nTowels, bed sheets, etc.";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._bsico0.ggUpdatePosition) me._bsico0.ggUpdatePosition();
					}
				}
				else if (me._bsico0.ggCurrentLogicStateText == 2) {
					me._bsico0.ggText="B\xe1sico\nToallas, etc.";
					me._bsico0__text.innerHTML=me._bsico0.ggText;
					if (me._bsico0.ggUpdateText) {
					me._bsico0.ggUpdateText=function() {
						var hs="B\xe1sico\nToallas, etc.";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._bsico0.ggUpdatePosition) me._bsico0.ggUpdatePosition();
					}
				}
				else {
					me._bsico0.ggText="B\xe1sico\nToallas, etc.";
					me._bsico0__text.innerHTML=me._bsico0.ggText;
					if (me._bsico0.ggUpdateText) {
					me._bsico0.ggUpdateText=function() {
						var hs="B\xe1sico\nToallas, etc.";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._bsico0.ggUpdatePosition) me._bsico0.ggUpdatePosition();
					}
				}
			}
		}
		me._bsico0.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 2;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._quarto_e_lavanderiaii.appendChild(me._bsico0);
		el=me._rectangle_231=document.createElement('div');
		el.ggId="Rectangle 2";
		el.ggDx=-112;
		el.ggDy=-143;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 200px;';
		hs+='border-radius : 200px;';
		hs+='background : #ffffff;';
		hs+='border : 1px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 32px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 30px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._rectangle_231.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_231.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._quarto_e_lavanderiaii.appendChild(me._rectangle_231);
		el=me._ht_image_info131=document.createElement('div');
		el.ggId="ht_image_info-1";
		el.ggDx=-112;
		el.ggDy=-143;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 100px;';
		hs+='border-radius : 100px;';
		hs+='background : #ffffff;';
		hs+='border : 1px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 50px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_image_info131.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._ht_image_info131.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._ht_image_info231=document.createElement('div');
		el.ggId="ht_image_info-2";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 200px;';
		hs+='border-radius : 200px;';
		hs+='border : 4px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 32px;';
		hs+='left : -10000px;';
		hs+='opacity : 0.8;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 30px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_image_info231.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._ht_image_info231.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._ht_image_info131.appendChild(me._ht_image_info231);
		me._quarto_e_lavanderiaii.appendChild(me._ht_image_info131);
		el=me._image_131=document.createElement('div');
		els=me._image_131__img=document.createElement('img');
		els.className='ggskin ggskin_image_131';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAjCAYAAAD17ghaAAAG1klEQVRYhd1XvU9UTxd+Zu7H3LssLCq4IiYkxBATKhIRG42WFlYGo2KCNra2dDT8CSa2xEiMhZ1/ASQaSIiSILGhM9kgAq7s3r1fM/MryDnM5eebt3yTd5oLe8+dec5znvMxwlprsyyDUgoAoLWG53mw1kIIwb9JKfl/95276PeyLCGlhJSS32VZhjAMYYyB53mn9lprS4Z5niMMQwBAWZYAAN/32ZgWHW6M4b/p6TpD32mteR/6zhgD3/chXU+CIAAAFEUBz/Pg+z6stTDGsHdaa7Yn4OQ1ACilkOc5gxFC8OH0rZQSvu+jKIoTAPQBgfE8r+KZtZYPI0C0Idn5vg+tdYVF3/eRZVnFqaIoKg4Le7IghGBPPc+D1pppovcExBhTiS8ApGmKKIpYQ2'+
			'VZVmh3F50jpYSkOFpr+XCiKQgCNnSFZ4xBmqbMCABEUcQCy/OcDzfGIEkSDonLphACDFEIgbNi3NraQlEUTDuFa3p6GsYYrK6uIooiZFmGGzduQAiBXq+H3d1dZFnGgJRSaDQaGB8fZ9AEXBhjrCskF/n8/DzW1tYghEAQBCyiN2/eIAgCPH36lHUwMjKCtbU1bGxs4OHDhyy0siwhhIAQAisrK5iZmeH9pZTwiX4Sn8uIMQaTk5NYWFhAHMfY3t7G4uIiK91ai4WFBURRhKWlJWxubmJiYgIfPnxAkiSI45jF9+jRI6yvr2NmZqaioYpK3JQk1H19fbh161ZFPC7AqakpFEWBTqeDPM8hpUSe5xgYGEC320UQBBw+2p8OL8sSf5Wpi5BYMcag1+shjmMWLdGfJAkGBwdhrcXu7i7m5uY4zm74KLMIZBiGpwD+Vl61'+
			'1vj27RseP37M4jTGoCxLWGuhlEKapuytUgpjY2N49+4dtNYIwxBFUSAIAszOzsLzPEgpURQFl2Wf6PxbqU2SBP39/ZUKeHx8jDRN0dfXhzRNsbu7y2pP05QZOlt0/tP6KwP0PDo6wu3bt7G0tATP89BqtXDnzh3s7+9DKQWlFBYXFxl8vV7Hzs4OHjx4ACEE6vU6er0e1xMKQRAE/w7BWSBFUeDg4ADNZpMr48jICLIsQ6vVwv3797G8vIwwDLG8vIzV1VVMTEyg0+ng48ePyPOcq6MxBk+ePOEQAEAYhiddk9C7T2styrJEp9PB8PAwyrJkMQ4ODqLdbiMIAty8eRPXr1/Hz58/ce3aNcRxjCiK0Ol0AJxUR6oDbvGhXuL7/kkdoBZKRlJK/PjxA57nYWhoiDtXEAS4ePEi9vb2OEy9Xg9bW1t4+fIlAGBrawvPnj'+
			'2rlPYsy9DX18dhcOuND5y2YQA8jLTbbQghcO7cOf6dGDg8PGSvNjc3AQBXr14FAExNTWFlZYXDGMcx0jTF3Nwci5OW1vokBNRsaBljsL+/D2stms1mRZjNZhOtVovDtb6+jiiKcPfu3UoYtdZQSiFJEiilWHxFUVS6biUL3C7169cvWGtx/vz5ikiHh4dxcHDAdtvb27h06RIrfWNjAy9evICUkocU12uyo8bGvcCd/zzPw8HBAZRSiOOYWSFN9Ho9VniapgxSCIHp6WksLy9zCaZi9fz5cyRJUhF0GIaQtLk7cALA3t4eLly4UEFPDBhjmAW3S2ZZhqIoEEUR8jxHEARot9uo1Wrodrs8npHwWYRuCaZ23Gq1MDo6ymIjIM1mE9Za7O/vY3R0FHmec4yVUvjy5Qu3aXcyjqKowrJS6mRYdQG4o9nh4SGuXLkCAFy7'+
			'AaDRaHCWuKMafT85OYm3b99WZgGtNebn5/817nuedxoCl34pJYeAmgope2RkBFprtFotbrFukyEWXWc8z+MMoMmLbd2LAgmERDg0NMTv6KD+/n5EUYR2uw1jDLIsYw2EYYivX79idnb2r+08iiIGEQTByTxQliXCMKxcKH7//g2tNRqNBoeABEdNiBio1WrwPI/7/Pj4ON6/f18Rb1EUmJ2dRVmWlbtHEATwqWeTKPI8R57nEELg6OgInz59Qr1eR6fTgZQSSinU63V0u11m5vDwEFJKpGmKWq12eumQkkPYaDSgtUaWZQiCoDqSuaKI4xhaa4yNjeHVq1d4/fo10jSFUgpCCBwfH2NgYADT09OcToODg6z0z58/Y25ujr0tyxJKKZRliXv37rGjdHcQRVFY3/fR7XZRq9Uqw8jOzg4rmfJaKYXh4WFcvnwZUkp8//'+
			'6dAdfrdfz58wc7Ozuc+8TGxMQEhoaGOA1ZW8YY614e3ZeUHe4tyL0x0XLTmEZ7Sj/aiwaQs/tXLqdujrop6W5OKeWWcLLVWnMJPntQGIZIkoRrAV3hhXXb4P9gyf9u8n8O4B9Bqa3cJIY4pwAAAABJRU5ErkJggg==';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 1";
		el.ggDx=-112;
		el.ggDy=-143;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 23px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 23px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._image_131.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_131.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._quarto_e_lavanderiaii.appendChild(me._image_131);
		el=me._cabides=document.createElement('div');
		els=me._cabides__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Cabides";
		el.ggDx=12;
		el.ggDy=-86;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text tooltip";
		el.ggType='text';
		hs ='';
		hs+='height : 27px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 170px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 172px;';
		hs+='height: auto;';
		hs+='background: #ffffff;';
		hs+='background: rgba(255,255,255,0);';
		hs+='border: 1px solid #55aa7f;';
		hs+='border: 1px solid rgba(85,170,127,0);';
		hs+=cssPrefix + 'background-clip: padding-box;';
		hs+='background-clip: padding-box;';
		hs+='border-radius: 10px;';
		hs+=cssPrefix + 'border-radius: 10px;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: left;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 2px 3px 2px 3px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		els.innerHTML="Cabides";
		el.appendChild(els);
		me._cabides.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._cabides.logicBlock_text = function() {
			var newLogicStateText;
			if (
				((player.getVariableValue('POR') == true))
			)
			{
				newLogicStateText = 0;
			}
			else if (
				((player.getVariableValue('ENG') == true))
			)
			{
				newLogicStateText = 1;
			}
			else if (
				((player.getVariableValue('ESP') == true))
			)
			{
				newLogicStateText = 2;
			}
			else {
				newLogicStateText = -1;
			}
			if (me._cabides.ggCurrentLogicStateText != newLogicStateText) {
				me._cabides.ggCurrentLogicStateText = newLogicStateText;
				me._cabides.style[domTransition]='';
				if (me._cabides.ggCurrentLogicStateText == 0) {
					me._cabides.ggText="Cabides";
					me._cabides__text.innerHTML=me._cabides.ggText;
					if (me._cabides.ggUpdateText) {
					me._cabides.ggUpdateText=function() {
						var hs="Cabides";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._cabides.ggUpdatePosition) me._cabides.ggUpdatePosition();
					}
				}
				else if (me._cabides.ggCurrentLogicStateText == 1) {
					me._cabides.ggText="Hangers";
					me._cabides__text.innerHTML=me._cabides.ggText;
					if (me._cabides.ggUpdateText) {
					me._cabides.ggUpdateText=function() {
						var hs="Hangers";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._cabides.ggUpdatePosition) me._cabides.ggUpdatePosition();
					}
				}
				else if (me._cabides.ggCurrentLogicStateText == 2) {
					me._cabides.ggText="Perchas";
					me._cabides__text.innerHTML=me._cabides.ggText;
					if (me._cabides.ggUpdateText) {
					me._cabides.ggUpdateText=function() {
						var hs="Perchas";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._cabides.ggUpdatePosition) me._cabides.ggUpdatePosition();
					}
				}
				else {
					me._cabides.ggText="Cabides";
					me._cabides__text.innerHTML=me._cabides.ggText;
					if (me._cabides.ggUpdateText) {
					me._cabides.ggUpdateText=function() {
						var hs="Cabides";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._cabides.ggUpdatePosition) me._cabides.ggUpdatePosition();
					}
				}
			}
		}
		me._cabides.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 2;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._quarto_e_lavanderiaii.appendChild(me._cabides);
		el=me._rectangle_230=document.createElement('div');
		el.ggId="Rectangle 2";
		el.ggDx=-113;
		el.ggDy=-85;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 200px;';
		hs+='border-radius : 200px;';
		hs+='background : #ffffff;';
		hs+='border : 1px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 32px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 30px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._rectangle_230.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_230.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._quarto_e_lavanderiaii.appendChild(me._rectangle_230);
		el=me._ht_image_info130=document.createElement('div');
		el.ggId="ht_image_info-1";
		el.ggDx=-113;
		el.ggDy=-85;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 100px;';
		hs+='border-radius : 100px;';
		hs+='background : #ffffff;';
		hs+='border : 1px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 50px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_image_info130.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._ht_image_info130.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._ht_image_info230=document.createElement('div');
		el.ggId="ht_image_info-2";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 200px;';
		hs+='border-radius : 200px;';
		hs+='border : 4px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 32px;';
		hs+='left : -10000px;';
		hs+='opacity : 0.8;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 30px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_image_info230.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._ht_image_info230.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._ht_image_info130.appendChild(me._ht_image_info230);
		me._quarto_e_lavanderiaii.appendChild(me._ht_image_info130);
		el=me._image_130=document.createElement('div');
		els=me._image_130__img=document.createElement('img');
		els.className='ggskin ggskin_image_130';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAeCAYAAABNChwpAAAEk0lEQVRIiaVXPUscXRR+7s6siNqIrayfURY0CxrcIo2SkJ+QXyAWRkUtrEQsEgxaBkMghUXqCAnBIm3AQMAiRtBCbBS1SERZP2bv1/MW5l5noq+ziU+zd2bPPV/z3HPOFSSJFERRhOrqagCAlBJVVVUAAK01wjDE+fk5ampqvLxSCtlsFtZaZDKZW3WLShxwMMYgCAKQBMmEcmstrLUIwxAkIYSoSOft7gEgCSkljDHeoItMaw2l1GUkQnjj1lqQhNY61YG/yoBL+Z8ZcCoqjTqO1AwAwNnZmTdujIEQIpH+i4sLb9xaC6WUz0waUjMQ/57OCWst1tfX8e3bNwDAo0eP0NbWBq01MpkMMplMRQR0Bm7F+fk5STKKIv88NDTEXC7HfD7PfD7PXC7H0d'+
			'FRv0drTZK8uLhIU89UB0hSSul/3717x/b2ds7NzXF/f5/b29ucmJhga2srV1ZWvHG3584OWGv9rzGGU1NTLBQKVEp5mVKpxGKxyLGxMZKVRe6Q+pGEEAniPX36FMvLywjD0MtUV1cjm83i9PQUxhhftKIoSqVARacgCAJ/tnt7e5HL5VAul6G1hjEGnz9/xt7eHvL5PIIggFIKUkrvyK1IS1E81VJKGmMS/7969Yr379/nw4cP+fPnT5JXJKwEFZGQvDoFJGmMobWWb968YVtbGycnJ1kqla45XAlS68BN1c+tBwcHcXJygvfv34OkL9d/UwdSJYIgAHDVbKy1EELg7du3WF1dxY8fP/D69WvfCxxpXa9IQ0W9wFp76W0mg8PDQ0xOTmJ1dRXd3d3QWmNnZweFQgGLi4toaGj4u0roCKO1ptban3tHtjjpPnz4wEKh'+
			'wHv37nFhYYFSSiql+PLlSzY3N/PBgwdcXl728k6XlNKvnR23BpksHDc58evXL46MjLClpYX9/f38/v17otIZY7i+vs6BgQE2NjZyfHycx8fHCeedTrd2pL52ChyLlVJUSnFjY4PFYpHNzc2cnZ3lycmJl42iyMtba3l2dsaZmRk2NTWxr6+PGxsbVEp5Y05n3CGUy2X+mQW3YX5+3iv7+vVrQkEcxhgfrVKKX758YU9PD5uamriwsEDyqqnFIaVMZsBaS6UUDw4O+OTJE3Z0dHB8fPxabb+p0MR7BkmWy2U+e/aMra2tfPz4MXd3d2mMSdQT8vcncN4ZY7i1tcXe3l52dXXx48ePPjvxyJ1Dcb64TLq1e/706RPz+TyLxSI3Nze9jNN3jQPPnz9nZ2cnj46OvFPxKG8iVtyR+HuHw8NDdnR08MWLFySTpyJ0Y7areP'+
			'X19QCApaUlCCF8F+TvYTMMQz+au/rwOxAIIXyhqqqqQhRFIOkn6ZaWFgBANpv1+64VolKphOHhYaytreH09NQL/yustairq8PAwACmp6fR0NCAIAj8XUMopRiGoc8AcDmE1tbW3snwn3D645cca+1VL3CDp1LKG690sr0NxpjEhSWeUWPM5SdwNx4A/zvz/yvivHBBxu2FWmtYaxEEgSdX/ILxL5eNOOLBxHVKKREEQZKEWuvLl0Ik5oC7IH5hualL/gdc+Q3pbdYkgAAAAABJRU5ErkJggg==';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 1";
		el.ggDx=-113;
		el.ggDy=-85;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 22px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 23px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._image_130.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_130.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._quarto_e_lavanderiaii.appendChild(me._image_130);
		el=me._roupa_de_cama=document.createElement('div');
		els=me._roupa_de_cama__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Roupa de cama";
		el.ggDx=12;
		el.ggDy=-31;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text tooltip";
		el.ggType='text';
		hs ='';
		hs+='height : 27px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 170px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 172px;';
		hs+='height: auto;';
		hs+='background: #ffffff;';
		hs+='background: rgba(255,255,255,0);';
		hs+='border: 1px solid #55aa7f;';
		hs+='border: 1px solid rgba(85,170,127,0);';
		hs+=cssPrefix + 'background-clip: padding-box;';
		hs+='background-clip: padding-box;';
		hs+='border-radius: 10px;';
		hs+=cssPrefix + 'border-radius: 10px;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: left;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 2px 3px 2px 3px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		els.innerHTML="Roupa de cama";
		el.appendChild(els);
		me._roupa_de_cama.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._roupa_de_cama.logicBlock_text = function() {
			var newLogicStateText;
			if (
				((player.getVariableValue('POR') == true))
			)
			{
				newLogicStateText = 0;
			}
			else if (
				((player.getVariableValue('ENG') == true))
			)
			{
				newLogicStateText = 1;
			}
			else if (
				((player.getVariableValue('ESP') == true))
			)
			{
				newLogicStateText = 2;
			}
			else {
				newLogicStateText = -1;
			}
			if (me._roupa_de_cama.ggCurrentLogicStateText != newLogicStateText) {
				me._roupa_de_cama.ggCurrentLogicStateText = newLogicStateText;
				me._roupa_de_cama.style[domTransition]='';
				if (me._roupa_de_cama.ggCurrentLogicStateText == 0) {
					me._roupa_de_cama.ggText="Roupa de cama";
					me._roupa_de_cama__text.innerHTML=me._roupa_de_cama.ggText;
					if (me._roupa_de_cama.ggUpdateText) {
					me._roupa_de_cama.ggUpdateText=function() {
						var hs="Roupa de cama";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._roupa_de_cama.ggUpdatePosition) me._roupa_de_cama.ggUpdatePosition();
					}
				}
				else if (me._roupa_de_cama.ggCurrentLogicStateText == 1) {
					me._roupa_de_cama.ggText="Bed linens";
					me._roupa_de_cama__text.innerHTML=me._roupa_de_cama.ggText;
					if (me._roupa_de_cama.ggUpdateText) {
					me._roupa_de_cama.ggUpdateText=function() {
						var hs="Bed linens";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._roupa_de_cama.ggUpdatePosition) me._roupa_de_cama.ggUpdatePosition();
					}
				}
				else if (me._roupa_de_cama.ggCurrentLogicStateText == 2) {
					me._roupa_de_cama.ggText="Ropa de cama";
					me._roupa_de_cama__text.innerHTML=me._roupa_de_cama.ggText;
					if (me._roupa_de_cama.ggUpdateText) {
					me._roupa_de_cama.ggUpdateText=function() {
						var hs="Ropa de cama";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._roupa_de_cama.ggUpdatePosition) me._roupa_de_cama.ggUpdatePosition();
					}
				}
				else {
					me._roupa_de_cama.ggText="Roupa de cama";
					me._roupa_de_cama__text.innerHTML=me._roupa_de_cama.ggText;
					if (me._roupa_de_cama.ggUpdateText) {
					me._roupa_de_cama.ggUpdateText=function() {
						var hs="Roupa de cama";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._roupa_de_cama.ggUpdatePosition) me._roupa_de_cama.ggUpdatePosition();
					}
				}
			}
		}
		me._roupa_de_cama.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 2;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._quarto_e_lavanderiaii.appendChild(me._roupa_de_cama);
		el=me._rectangle_229=document.createElement('div');
		el.ggId="Rectangle 2";
		el.ggDx=-114;
		el.ggDy=-29;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 200px;';
		hs+='border-radius : 200px;';
		hs+='background : #ffffff;';
		hs+='border : 1px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 32px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 30px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._rectangle_229.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_229.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._quarto_e_lavanderiaii.appendChild(me._rectangle_229);
		el=me._ht_image_info129=document.createElement('div');
		el.ggId="ht_image_info-1";
		el.ggDx=-114;
		el.ggDy=-29;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 100px;';
		hs+='border-radius : 100px;';
		hs+='background : #ffffff;';
		hs+='border : 1px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 50px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_image_info129.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._ht_image_info129.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._ht_image_info229=document.createElement('div');
		el.ggId="ht_image_info-2";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 200px;';
		hs+='border-radius : 200px;';
		hs+='border : 4px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 32px;';
		hs+='left : -10000px;';
		hs+='opacity : 0.8;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 30px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_image_info229.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._ht_image_info229.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._ht_image_info129.appendChild(me._ht_image_info229);
		me._quarto_e_lavanderiaii.appendChild(me._ht_image_info129);
		el=me._image_129=document.createElement('div');
		els=me._image_129__img=document.createElement('img');
		els.className='ggskin ggskin_image_129';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAbCAYAAAAdx42aAAAENUlEQVRIia1XO0szTRR+5rK7idgJ8oJNNJAoopKAP8DC0sZGSWGljem0sPIP2BhvlYWCWPkPREUleKnSBcRG0MpWE5PdmTlfkW/mTVSSvOjTLLtnzplnzpzbMmoAjDEAQBiG8H0fAEBEMMZACOHeGWPQWkNrDd/3YYwB59zJjDHuafXagTcbNcY4owDAGIMQAlEUOYV6vQ4hBHzfRxiG4JzDGAMicoStXqVS6UiAERHZDTnnTkBEiKKo5ZTN65RSkFK69ZaEEMKt7wbcGrQKYRg6g77vQynVqvCNYa01OOfO5ZxzvL+/d0WARVFE9iTNJ+WcQ2uNx8dHlEolvL6+QmsNAJBSwhjj3O15npNNTU1hfHwcAL546VsCxhiyL0QEzrkLxEKhgN3d3RYZY8'+
			'zFhOd57q4555BSgnOOvb09TE9Pd+UBEBFFUUQWxhiKooienp4onU5TLpej+/t7MsaQ1pqaoZQiYwwREW1tbVEymaRcLkdjY2N0cXFBYRhSJ6DZqDWmlKLj42MaGhqicrn8RckS1lo7nUKhQIlEgsIwpFwuR6lUiorFYkcC/LugEkLg9fUVjDGMjIx8kdt7tbo2BT3Pg5QS+/v7yGazWFxcxPn5OQC0pDLwN9i7y5UOYIy51GSMIQgCHB0dYXx8HPl8HmdnZ2gOdADwfb+RPb+xea1Ww58/fwAAd3d3EEKAiHB4eIhMJoPl5WVcXl66wmUzRgjxcwJhGCIWi2FiYgKcc6yvr+P29hae5yEIAhwcHCCTySCfz+Px8dFtXK1WAQDtk7QL2L6RTqcxOzuLk5MTzM/PAwBisRg+Pj4QBAEYYzg9PcXw8DAYY4jH479DAGgE'+
			'GOccGxsbWFxcRLlcxvPzM8IwdHe/vb3tqqUtUFEU/Q4Bz/NcVKdSKSQSCecZi52dHWitW6qj53k/jwFbkn3fd+n4eXMbfFJK1y9sWnZFwDYke0q7MdDayKSUbq5ohud5rrtauX12RcAOHL7vo16vu+73uVN+B9uwlFLwPM99twS6ioG9vT1sbGygp6cHRASllDu59UQ78rVaDUEQtMwRQghorTsTKBaLmJycxOrq6pdWbYePdmCMgYhQKBRcVtisEUI0uuHnZkREtLm5SclkkmZmZuj6+tp9r1ar367vhEQiQYVCgd7e3lrsdPTA8/MzFhYWYIyBlNKNXdQ0/7XDysoKlpaWIKVELBZDb28vgEaR6qoO3Nzc4OrqCg8PDxBCOJcaY6CU6jj5jo6O4unpCcYY9PX1oVKpIB6Pg3PeCMpOV6CUIqK/M4AdTLp1f6lUor'+
			'm5ORocHKSXlxf33Q4rzgPN8yBjDNlsFkSEdDrdyUltYYvU2toaBgYGAKAlJRkREQAX1XYeNMagWCyiVCr9iEB/fz+y2SxSqVRjw/9jxqYjU0qRDSor/Je5/l/Q/NdVr9cRBAH+A1VSvpXX6SsiAAAAAElFTkSuQmCC';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 1";
		el.ggDx=-114;
		el.ggDy=-29;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 23px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 23px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._image_129.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_129.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._quarto_e_lavanderiaii.appendChild(me._image_129);
		el=me._cobertores_e_travesseiros_extras=document.createElement('div');
		els=me._cobertores_e_travesseiros_extras__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Cobertores e travesseiros extras";
		el.ggDx=28;
		el.ggDy=35;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text tooltip";
		el.ggType='text';
		hs ='';
		hs+='height : 41px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 205px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 207px;';
		hs+='height: auto;';
		hs+='background: #ffffff;';
		hs+='background: rgba(255,255,255,0);';
		hs+='border: 1px solid #55aa7f;';
		hs+='border: 1px solid rgba(85,170,127,0);';
		hs+=cssPrefix + 'background-clip: padding-box;';
		hs+='background-clip: padding-box;';
		hs+='border-radius: 10px;';
		hs+=cssPrefix + 'border-radius: 10px;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: left;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 2px 3px 2px 3px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		els.innerHTML="Cobertores e travesseiros<br\/>extras";
		el.appendChild(els);
		me._cobertores_e_travesseiros_extras.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._cobertores_e_travesseiros_extras.logicBlock_text = function() {
			var newLogicStateText;
			if (
				((player.getVariableValue('POR') == true))
			)
			{
				newLogicStateText = 0;
			}
			else if (
				((player.getVariableValue('ENG') == true))
			)
			{
				newLogicStateText = 1;
			}
			else if (
				((player.getVariableValue('ESP') == true))
			)
			{
				newLogicStateText = 2;
			}
			else {
				newLogicStateText = -1;
			}
			if (me._cobertores_e_travesseiros_extras.ggCurrentLogicStateText != newLogicStateText) {
				me._cobertores_e_travesseiros_extras.ggCurrentLogicStateText = newLogicStateText;
				me._cobertores_e_travesseiros_extras.style[domTransition]='';
				if (me._cobertores_e_travesseiros_extras.ggCurrentLogicStateText == 0) {
					me._cobertores_e_travesseiros_extras.ggText="Cobertores e travesseiros\nextras";
					me._cobertores_e_travesseiros_extras__text.innerHTML=me._cobertores_e_travesseiros_extras.ggText;
					if (me._cobertores_e_travesseiros_extras.ggUpdateText) {
					me._cobertores_e_travesseiros_extras.ggUpdateText=function() {
						var hs="Cobertores e travesseiros\nextras";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._cobertores_e_travesseiros_extras.ggUpdatePosition) me._cobertores_e_travesseiros_extras.ggUpdatePosition();
					}
				}
				else if (me._cobertores_e_travesseiros_extras.ggCurrentLogicStateText == 1) {
					me._cobertores_e_travesseiros_extras.ggText="Extra pillows and\nblankets";
					me._cobertores_e_travesseiros_extras__text.innerHTML=me._cobertores_e_travesseiros_extras.ggText;
					if (me._cobertores_e_travesseiros_extras.ggUpdateText) {
					me._cobertores_e_travesseiros_extras.ggUpdateText=function() {
						var hs="Extra pillows and\nblankets";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._cobertores_e_travesseiros_extras.ggUpdatePosition) me._cobertores_e_travesseiros_extras.ggUpdatePosition();
					}
				}
				else if (me._cobertores_e_travesseiros_extras.ggCurrentLogicStateText == 2) {
					me._cobertores_e_travesseiros_extras.ggText="Colchas y almohadas \nextras";
					me._cobertores_e_travesseiros_extras__text.innerHTML=me._cobertores_e_travesseiros_extras.ggText;
					if (me._cobertores_e_travesseiros_extras.ggUpdateText) {
					me._cobertores_e_travesseiros_extras.ggUpdateText=function() {
						var hs="Colchas y almohadas \nextras";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._cobertores_e_travesseiros_extras.ggUpdatePosition) me._cobertores_e_travesseiros_extras.ggUpdatePosition();
					}
				}
				else {
					me._cobertores_e_travesseiros_extras.ggText="Cobertores e travesseiros\nextras";
					me._cobertores_e_travesseiros_extras__text.innerHTML=me._cobertores_e_travesseiros_extras.ggText;
					if (me._cobertores_e_travesseiros_extras.ggUpdateText) {
					me._cobertores_e_travesseiros_extras.ggUpdateText=function() {
						var hs="Cobertores e travesseiros\nextras";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._cobertores_e_travesseiros_extras.ggUpdatePosition) me._cobertores_e_travesseiros_extras.ggUpdatePosition();
					}
				}
			}
		}
		me._cobertores_e_travesseiros_extras.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 2;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._quarto_e_lavanderiaii.appendChild(me._cobertores_e_travesseiros_extras);
		el=me._rectangle_228=document.createElement('div');
		el.ggId="Rectangle 2";
		el.ggDx=-114;
		el.ggDy=29;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 200px;';
		hs+='border-radius : 200px;';
		hs+='background : #ffffff;';
		hs+='border : 1px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 32px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 30px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._rectangle_228.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_228.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._quarto_e_lavanderiaii.appendChild(me._rectangle_228);
		el=me._ht_image_info128=document.createElement('div');
		el.ggId="ht_image_info-1";
		el.ggDx=-114;
		el.ggDy=29;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 100px;';
		hs+='border-radius : 100px;';
		hs+='background : #ffffff;';
		hs+='border : 1px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 50px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_image_info128.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._ht_image_info128.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._ht_image_info228=document.createElement('div');
		el.ggId="ht_image_info-2";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 200px;';
		hs+='border-radius : 200px;';
		hs+='border : 4px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 32px;';
		hs+='left : -10000px;';
		hs+='opacity : 0.8;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 30px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_image_info228.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._ht_image_info228.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._ht_image_info128.appendChild(me._ht_image_info228);
		me._quarto_e_lavanderiaii.appendChild(me._ht_image_info128);
		el=me._image_128=document.createElement('div');
		els=me._image_128__img=document.createElement('img');
		els.className='ggskin ggskin_image_128';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAbCAYAAAAdx42aAAAENUlEQVRIia1XO0szTRR+5rK7idgJ8oJNNJAoopKAP8DC0sZGSWGljem0sPIP2BhvlYWCWPkPREUleKnSBcRG0MpWE5PdmTlfkW/mTVSSvOjTLLtnzplnzpzbMmoAjDEAQBiG8H0fAEBEMMZACOHeGWPQWkNrDd/3YYwB59zJjDHuafXagTcbNcY4owDAGIMQAlEUOYV6vQ4hBHzfRxiG4JzDGAMicoStXqVS6UiAERHZDTnnTkBEiKKo5ZTN65RSkFK69ZaEEMKt7wbcGrQKYRg6g77vQynVqvCNYa01OOfO5ZxzvL+/d0WARVFE9iTNJ+WcQ2uNx8dHlEolvL6+QmsNAJBSwhjj3O15npNNTU1hfHwcAL546VsCxhiyL0QEzrkLxEKhgN3d3RYZY8'+
			'zFhOd57q4555BSgnOOvb09TE9Pd+UBEBFFUUQWxhiKooienp4onU5TLpej+/t7MsaQ1pqaoZQiYwwREW1tbVEymaRcLkdjY2N0cXFBYRhSJ6DZqDWmlKLj42MaGhqicrn8RckS1lo7nUKhQIlEgsIwpFwuR6lUiorFYkcC/LugEkLg9fUVjDGMjIx8kdt7tbo2BT3Pg5QS+/v7yGazWFxcxPn5OQC0pDLwN9i7y5UOYIy51GSMIQgCHB0dYXx8HPl8HmdnZ2gOdADwfb+RPb+xea1Ww58/fwAAd3d3EEKAiHB4eIhMJoPl5WVcXl66wmUzRgjxcwJhGCIWi2FiYgKcc6yvr+P29hae5yEIAhwcHCCTySCfz+Px8dFtXK1WAQDtk7QL2L6RTqcxOzuLk5MTzM/PAwBisRg+Pj4QBAEYYzg9PcXw8DAYY4jH479DAGgE'+
			'GOccGxsbWFxcRLlcxvPzM8IwdHe/vb3tqqUtUFEU/Q4Bz/NcVKdSKSQSCecZi52dHWitW6qj53k/jwFbkn3fd+n4eXMbfFJK1y9sWnZFwDYke0q7MdDayKSUbq5ohud5rrtauX12RcAOHL7vo16vu+73uVN+B9uwlFLwPM99twS6ioG9vT1sbGygp6cHRASllDu59UQ78rVaDUEQtMwRQghorTsTKBaLmJycxOrq6pdWbYePdmCMgYhQKBRcVtisEUI0uuHnZkREtLm5SclkkmZmZuj6+tp9r1ar367vhEQiQYVCgd7e3lrsdPTA8/MzFhYWYIyBlNKNXdQ0/7XDysoKlpaWIKVELBZDb28vgEaR6qoO3Nzc4OrqCg8PDxBCOJcaY6CU6jj5jo6O4unpCcYY9PX1oVKpIB6Pg3PeCMpOV6CUIqK/M4AdTLp1f6lUor'+
			'm5ORocHKSXlxf33Q4rzgPN8yBjDNlsFkSEdDrdyUltYYvU2toaBgYGAKAlJRkREQAX1XYeNMagWCyiVCr9iEB/fz+y2SxSqVRjw/9jxqYjU0qRDSor/Je5/l/Q/NdVr9cRBAH+A1VSvpXX6SsiAAAAAElFTkSuQmCC';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 1";
		el.ggDx=-114;
		el.ggDy=29;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 23px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 23px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._image_128.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_128.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._quarto_e_lavanderiaii.appendChild(me._image_128);
		el=me._varal_para_secar_roupas=document.createElement('div');
		els=me._varal_para_secar_roupas__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Varal para secar roupas";
		el.ggDx=10;
		el.ggDy=87;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text tooltip";
		el.ggType='text';
		hs ='';
		hs+='height : 27px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 170px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 172px;';
		hs+='height: auto;';
		hs+='background: #ffffff;';
		hs+='background: rgba(255,255,255,0);';
		hs+='border: 1px solid #55aa7f;';
		hs+='border: 1px solid rgba(85,170,127,0);';
		hs+=cssPrefix + 'background-clip: padding-box;';
		hs+='background-clip: padding-box;';
		hs+='border-radius: 10px;';
		hs+=cssPrefix + 'border-radius: 10px;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: left;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 2px 3px 2px 3px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		els.innerHTML="Varal para secar roupas";
		el.appendChild(els);
		me._varal_para_secar_roupas.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._varal_para_secar_roupas.logicBlock_text = function() {
			var newLogicStateText;
			if (
				((player.getVariableValue('POR') == true))
			)
			{
				newLogicStateText = 0;
			}
			else if (
				((player.getVariableValue('ENG') == true))
			)
			{
				newLogicStateText = 1;
			}
			else if (
				((player.getVariableValue('ESP') == true))
			)
			{
				newLogicStateText = 2;
			}
			else {
				newLogicStateText = -1;
			}
			if (me._varal_para_secar_roupas.ggCurrentLogicStateText != newLogicStateText) {
				me._varal_para_secar_roupas.ggCurrentLogicStateText = newLogicStateText;
				me._varal_para_secar_roupas.style[domTransition]='';
				if (me._varal_para_secar_roupas.ggCurrentLogicStateText == 0) {
					me._varal_para_secar_roupas.ggText="Varal para secar roupas";
					me._varal_para_secar_roupas__text.innerHTML=me._varal_para_secar_roupas.ggText;
					if (me._varal_para_secar_roupas.ggUpdateText) {
					me._varal_para_secar_roupas.ggUpdateText=function() {
						var hs="Varal para secar roupas";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._varal_para_secar_roupas.ggUpdatePosition) me._varal_para_secar_roupas.ggUpdatePosition();
					}
				}
				else if (me._varal_para_secar_roupas.ggCurrentLogicStateText == 1) {
					me._varal_para_secar_roupas.ggText="Drying rack for clothing";
					me._varal_para_secar_roupas__text.innerHTML=me._varal_para_secar_roupas.ggText;
					if (me._varal_para_secar_roupas.ggUpdateText) {
					me._varal_para_secar_roupas.ggUpdateText=function() {
						var hs="Drying rack for clothing";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._varal_para_secar_roupas.ggUpdatePosition) me._varal_para_secar_roupas.ggUpdatePosition();
					}
				}
				else if (me._varal_para_secar_roupas.ggCurrentLogicStateText == 2) {
					me._varal_para_secar_roupas.ggText="Tendedero para ropa";
					me._varal_para_secar_roupas__text.innerHTML=me._varal_para_secar_roupas.ggText;
					if (me._varal_para_secar_roupas.ggUpdateText) {
					me._varal_para_secar_roupas.ggUpdateText=function() {
						var hs="Tendedero para ropa";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._varal_para_secar_roupas.ggUpdatePosition) me._varal_para_secar_roupas.ggUpdatePosition();
					}
				}
				else {
					me._varal_para_secar_roupas.ggText="Varal para secar roupas";
					me._varal_para_secar_roupas__text.innerHTML=me._varal_para_secar_roupas.ggText;
					if (me._varal_para_secar_roupas.ggUpdateText) {
					me._varal_para_secar_roupas.ggUpdateText=function() {
						var hs="Varal para secar roupas";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._varal_para_secar_roupas.ggUpdatePosition) me._varal_para_secar_roupas.ggUpdatePosition();
					}
				}
			}
		}
		me._varal_para_secar_roupas.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 2;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._quarto_e_lavanderiaii.appendChild(me._varal_para_secar_roupas);
		el=me._rectangle_227=document.createElement('div');
		el.ggId="Rectangle 2";
		el.ggDx=-115;
		el.ggDy=88;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 200px;';
		hs+='border-radius : 200px;';
		hs+='background : #ffffff;';
		hs+='border : 1px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 32px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 30px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._rectangle_227.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_227.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._quarto_e_lavanderiaii.appendChild(me._rectangle_227);
		el=me._ht_image_info127=document.createElement('div');
		el.ggId="ht_image_info-1";
		el.ggDx=-115;
		el.ggDy=88;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 100px;';
		hs+='border-radius : 100px;';
		hs+='background : #ffffff;';
		hs+='border : 1px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 50px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_image_info127.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._ht_image_info127.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._ht_image_info227=document.createElement('div');
		el.ggId="ht_image_info-2";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 200px;';
		hs+='border-radius : 200px;';
		hs+='border : 4px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 32px;';
		hs+='left : -10000px;';
		hs+='opacity : 0.8;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 30px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_image_info227.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._ht_image_info227.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._ht_image_info127.appendChild(me._ht_image_info227);
		me._quarto_e_lavanderiaii.appendChild(me._ht_image_info127);
		el=me._image_127=document.createElement('div');
		els=me._image_127__img=document.createElement('img');
		els.className='ggskin ggskin_image_127';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACEAAAAjCAYAAAAaLGNkAAAEgElEQVRYhe1Xz0sbTxx9u9lNCh6kN6FWm2CqKJiCAYvSggcPnkr/hCBawSqe7K3tqRS1N08KpX9APQlSBK9WiIh4KAZy60HxEBVjsj9m5n0Pdaa7amt6+bYHH4TsbmY+8z6fefM+G4sk8Zdh/20CwC2Jn7gloXFLQsNpZJCUEolEAgBAEpZlQSmFnZ0dlEoleJ6HwcFBdHV1wfd9pFKp2NgbwT9AtVolSQohODExwQcPHrC1tZWZTIadnZ2cmpoiSYZhSJKUUjYUtyESZ2dnsftPnz6xtbWVc3NzPDg44OHhIUdHR9nW1sYvX75QCNFwYg2R0NlIKSmEYBAEnJmZ4cDAAMMwpBCCYRgyDEP29vby5cuXJEnP8xomcaMwbduGUgq2bSORSMB1XRQKBS'+
			'wvL5tnAOA4Dpqbm+H7PoQQSKVSEEI0IrnGTodt2yBpgvb29qK7uxu2baNWq8FxHKyvr+P79+9Ip9NwHAck4TgN6f5mYUopYwILw9DcK6VIkvPz88xkMhwaGjLi1eJsBA0J83LAIAjM9dLSEh8+fMhXr16xUqn80eIaFvnjfUIIcaV8JCGlhOM4UEqBJBKJhNEIABQKBZyenmJlZQUAYr4ghDDjtXaic/W17fs+gB/CCoIASinzsSzLELhsWL7vY3FxEZubmyiXy1haWgJJBEFgtOM4DizLMvPCMIwlp2EqcY1WzMRkMmmeSylRqVQwPT2Nvb093L9/HyRRKpXw9OlTzM3NoaWlJVaJi22PJUHSVAQkWavVzP7U6/UrTqe9gCTX1taMQ757945KKXqexw8fPjCbzfLRo0f8/PlzbL4WsI4lpaRSir7vk7xGmFG3C4LA'+
			'BKjX6xwfH+e9e/c4PDzM3d3d2LwgCFgsFjkyMsL29na+ePHCnJSbAJ2h53mGQLQSQgh+/fqVT548YTab5Zs3b8zpiLqinnN+fs7Z2Vlms1n29/ezWCzGxkePt04Ql4Mopcx1pVLhwsICOzo62NfXx62tLVPK65pU9HhubGzw8ePH7Ozs5MLCAk9OTsx4nWyMRPQHvU/lcpnPnj1jJpPh1NSUCRLdXz1WZxUlJKXkyckJJycn2dbWxufPn/Pbt2+murHt0EH1txCCpVKJ+XyeuVyO6+vrpux6seu27XdYXV1lLpdjPp/n/v4+ybjhXTkdJPn69WvmcjkeHx+bbKOLRqtxE3QCR0dH7Onp4du3b6+4qqOUwp07d4yDkUQ6nUa1WsXHjx+NR1SrVaRSKbiui3q9jmQyCcdxYqZzHZLJJGq1Gmzbxvn5OXp6eowxuq4Ly7'+
			'J+mlUYhnBd1yw4NjaG7e3t2PNEIgEpJYIgQDKZNKR/B93Wm5qa0N/fj/fv3+Pu3bsxB7Z836fOlhEnu9xLGHm31E4XJdgopJSwLCv2nmJHCegeEQRBjICU0mRsrBaA67qG+K8+AOB5Xqwy0RjARe/Qi1zuorqJRTsjL5oPL3rB5YB/UhGzHVJK2rZtBBbteK7rXil/dOGb9BAlrtdQSpkt1LF/2UX/T/wT/8D+CRL/ATFKMFoELZtoAAAAAElFTkSuQmCC';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 1";
		el.ggDx=-115;
		el.ggDy=88;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 23px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 23px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._image_127.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_127.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._quarto_e_lavanderiaii.appendChild(me._image_127);
		el=me._local_para_guardar_as_roupas_closet=document.createElement('div');
		els=me._local_para_guardar_as_roupas_closet__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Local para guardar as roupas: closet";
		el.ggDx=-7;
		el.ggDy=144;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text tooltip";
		el.ggType='text';
		hs ='';
		hs+='height : 45px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 145px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 147px;';
		hs+='height: auto;';
		hs+='background: #ffffff;';
		hs+='background: rgba(255,255,255,0);';
		hs+='border: 1px solid #55aa7f;';
		hs+='border: 1px solid rgba(85,170,127,0);';
		hs+=cssPrefix + 'background-clip: padding-box;';
		hs+='background-clip: padding-box;';
		hs+='border-radius: 10px;';
		hs+=cssPrefix + 'border-radius: 10px;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: left;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 2px 3px 2px 3px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		els.innerHTML="Local para guardar<br\/>as roupas: closet";
		el.appendChild(els);
		me._local_para_guardar_as_roupas_closet.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._local_para_guardar_as_roupas_closet.logicBlock_text = function() {
			var newLogicStateText;
			if (
				((player.getVariableValue('POR') == true))
			)
			{
				newLogicStateText = 0;
			}
			else if (
				((player.getVariableValue('ENG') == true))
			)
			{
				newLogicStateText = 1;
			}
			else if (
				((player.getVariableValue('ESP') == true))
			)
			{
				newLogicStateText = 2;
			}
			else {
				newLogicStateText = -1;
			}
			if (me._local_para_guardar_as_roupas_closet.ggCurrentLogicStateText != newLogicStateText) {
				me._local_para_guardar_as_roupas_closet.ggCurrentLogicStateText = newLogicStateText;
				me._local_para_guardar_as_roupas_closet.style[domTransition]='';
				if (me._local_para_guardar_as_roupas_closet.ggCurrentLogicStateText == 0) {
					me._local_para_guardar_as_roupas_closet.ggText="Local para guardar\nas roupas: closet";
					me._local_para_guardar_as_roupas_closet__text.innerHTML=me._local_para_guardar_as_roupas_closet.ggText;
					if (me._local_para_guardar_as_roupas_closet.ggUpdateText) {
					me._local_para_guardar_as_roupas_closet.ggUpdateText=function() {
						var hs="Local para guardar\nas roupas: closet";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._local_para_guardar_as_roupas_closet.ggUpdatePosition) me._local_para_guardar_as_roupas_closet.ggUpdatePosition();
					}
				}
				else if (me._local_para_guardar_as_roupas_closet.ggCurrentLogicStateText == 1) {
					me._local_para_guardar_as_roupas_closet.ggText="Clothing storage:\ncloset";
					me._local_para_guardar_as_roupas_closet__text.innerHTML=me._local_para_guardar_as_roupas_closet.ggText;
					if (me._local_para_guardar_as_roupas_closet.ggUpdateText) {
					me._local_para_guardar_as_roupas_closet.ggUpdateText=function() {
						var hs="Clothing storage:\ncloset";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._local_para_guardar_as_roupas_closet.ggUpdatePosition) me._local_para_guardar_as_roupas_closet.ggUpdatePosition();
					}
				}
				else if (me._local_para_guardar_as_roupas_closet.ggCurrentLogicStateText == 2) {
					me._local_para_guardar_as_roupas_closet.ggText="Guarda ropa:\narmario";
					me._local_para_guardar_as_roupas_closet__text.innerHTML=me._local_para_guardar_as_roupas_closet.ggText;
					if (me._local_para_guardar_as_roupas_closet.ggUpdateText) {
					me._local_para_guardar_as_roupas_closet.ggUpdateText=function() {
						var hs="Guarda ropa:\narmario";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._local_para_guardar_as_roupas_closet.ggUpdatePosition) me._local_para_guardar_as_roupas_closet.ggUpdatePosition();
					}
				}
				else {
					me._local_para_guardar_as_roupas_closet.ggText="Local para guardar\nas roupas: closet";
					me._local_para_guardar_as_roupas_closet__text.innerHTML=me._local_para_guardar_as_roupas_closet.ggText;
					if (me._local_para_guardar_as_roupas_closet.ggUpdateText) {
					me._local_para_guardar_as_roupas_closet.ggUpdateText=function() {
						var hs="Local para guardar\nas roupas: closet";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._local_para_guardar_as_roupas_closet.ggUpdatePosition) me._local_para_guardar_as_roupas_closet.ggUpdatePosition();
					}
				}
			}
		}
		me._local_para_guardar_as_roupas_closet.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 2;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._quarto_e_lavanderiaii.appendChild(me._local_para_guardar_as_roupas_closet);
		el=me._rectangle_226=document.createElement('div');
		el.ggId="Rectangle 2";
		el.ggDx=-116;
		el.ggDy=143;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 200px;';
		hs+='border-radius : 200px;';
		hs+='background : #ffffff;';
		hs+='border : 1px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 32px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 30px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._rectangle_226.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_226.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._quarto_e_lavanderiaii.appendChild(me._rectangle_226);
		el=me._ht_image_info126=document.createElement('div');
		el.ggId="ht_image_info-1";
		el.ggDx=-116;
		el.ggDy=143;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 100px;';
		hs+='border-radius : 100px;';
		hs+='background : #ffffff;';
		hs+='border : 1px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 50px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_image_info126.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._ht_image_info126.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._ht_image_info226=document.createElement('div');
		el.ggId="ht_image_info-2";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 200px;';
		hs+='border-radius : 200px;';
		hs+='border : 4px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 32px;';
		hs+='left : -10000px;';
		hs+='opacity : 0.8;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 30px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_image_info226.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._ht_image_info226.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._ht_image_info126.appendChild(me._ht_image_info226);
		me._quarto_e_lavanderiaii.appendChild(me._ht_image_info126);
		el=me._image_126=document.createElement('div');
		els=me._image_126__img=document.createElement('img');
		els.className='ggskin ggskin_image_126';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAcCAYAAACUJBTQAAAEN0lEQVRIia1WPU8VTRR+ZnZm97pXwILEmNgaYrQy0PAL6IFIAT+B2khoaYixsLGxssJobKTjF1BBuGj4AxTQQC659+7Ozpxjgee8u2pefZP3JDd3Z/fM+XjOc84MYozMzCz/zMxVVXXehRC4LfKeiPRdXdf6nFLq6FtjDAAgyzKklJBSQlEUSCkhyzIwM7z3aAsRIYQA2RtjRJ7niDECAKy1AIC6rmVtEULoOBqPx8iyTJVEqqoCAHjvkec5QgiIMSLLMgCAc05thRBQFAUAwIQQWCKV6EXp5OREo+71esiyDFVVgYjUgLUWdV3DWqsZPXv2TIP+4dwpBOJkf38f29vbuLq60ggl/X6//0vmRVHg5uYGvV4PxhgYY7Czs4PV1dXbNTNz0zTw3oOIYI'+
			'zB0tISyrLE1tYWrLUgIhARvPeYTCbY3d0FEeHly5coigLD4RD37t2DtRbX19d4+/YtLi8vcXBwgCzL4IhIMZeCffv2DS9evMD8/DyYGcYYEJGmf/fuXRARFhcXdS8zq85gMMCrV69U31pr4b1XZhAR8jxXw9ZaGGOUaVK7tmERMVrXNfI8129WFAR3YwystWiaRjcRkWbUNA2MMaovcBpjNIgsyzrO1cm/iWQTY4T3Hr1eT+ks2cYYtW+YGSklhf+PTtoRiZHhcKhMEgdtONtw/5UTMby3t4dPnz4BgE4AZsaHDx/w8eNHpW6MUeH760z+D3F/UpCCr62tKaukr4wxeP78OWKMCpVzDtZaZZ619s+ZSMriEACmp6dRVZUacs4hpaTQhhDAzP8NLqGwcw5N06CqKvR6PQ1CHEkQ0ledwgsMEo1AJO+EwiEEeO91BLUh'+
			'EQfiZDweayYmpcSyECrOzc1hdnYWDx48QFmWmEwm6Pf7CsXR0RH6/T4eP36MEALKstRJHELA5eUlLi4ucHZ2dlsn8R5j1C4ej8eYmZnB1NQUJpMJ8jzXGjjnsLCwoEOzKApMJhPN9s6dOzDGYDQadfDuHKNExA8fPuQ3b95w0zT8O2mapnMk/3wcv379mh89eqRra4zRmgC39JyZmelk1h6IzIzPnz/jy5cvIKLOydhmofwUrvYIyPMc19fXHeq2B6UcyyGE2x74aawIZMPhUG249jkhUpalDkDJJMsyZdz6+ro+y3fnnDLw5uYG9+/fVzRcO2KBa2lpCe/evcPx8TGA21lVVRW890gpKRGcc3qut+l/eHiI1dVVDd78KI7SL89znJ+fY29vD+/fv4cxBk+ePEFKCWVZYjQaabMBt80oNTs9PYX3Hpubm1heXsbU1J'+
			'QWiZumUSaNx2NlzPr6Oq+trTERcV3Xyii5vLX/iYg3NjZ4ZWXll8ug+UG9TqFl/fXrVzAznj59qkWVgsuIaV/8BoMB8jzH3NwcYoxKDDD/cw0NISi329GMRqNOj/yuN4ios6fde98ByIbd+IslNoIAAAAASUVORK5CYII=';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 1";
		el.ggDx=-116;
		el.ggDy=143;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 28px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 18px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._image_126.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_126.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._quarto_e_lavanderiaii.appendChild(me._image_126);
		me._quarto_e_lavanderiai.appendChild(me._quarto_e_lavanderiaii);
		me.divSkin.appendChild(me._quarto_e_lavanderiai);
		el=me._cozinha_e_sala_de_jantari=document.createElement('div');
		el.ggId="COZINHA E SALA DE JANTAR-I";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 20px;';
		hs+='border-radius : 20px;';
		hs+='background : #5e5e5e;';
		hs+='border : 5px solid #ffffff;';
		hs+='cursor : default;';
		hs+='height : 355px;';
		hs+='left : -10000px;';
		hs+='opacity : 0.7;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 295px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._cozinha_e_sala_de_jantari.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._cozinha_e_sala_de_jantari.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getViewerSize().height <= 400))
			)
			{
				newLogicStatePosition = 0;
			}
			else if (
				((player.getViewerSize().width < 1084))
			)
			{
				newLogicStatePosition = 1;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._cozinha_e_sala_de_jantari.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._cozinha_e_sala_de_jantari.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._cozinha_e_sala_de_jantari.style[domTransition]='left 0s, top 0s, ' + cssPrefix + 'transform 0s';
				if (me._cozinha_e_sala_de_jantari.ggCurrentLogicStatePosition == 0) {
					this.ggDx = 50;
					this.ggDy = 25;
					me._cozinha_e_sala_de_jantari.ggUpdatePosition(true);
				}
				else if (me._cozinha_e_sala_de_jantari.ggCurrentLogicStatePosition == 1) {
					this.ggDx = 55;
					this.ggDy = -135;
					me._cozinha_e_sala_de_jantari.ggUpdatePosition(true);
				}
				else {
					me._cozinha_e_sala_de_jantari.ggDx=0;
					me._cozinha_e_sala_de_jantari.ggDy=0;
					me._cozinha_e_sala_de_jantari.ggUpdatePosition(true);
				}
			}
		}
		me._cozinha_e_sala_de_jantari.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getViewerSize().height <= 400))
			)
			{
				newLogicStateScaling = 0;
			}
			else if (
				((player.getViewerSize().width < 1084))
			)
			{
				newLogicStateScaling = 1;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._cozinha_e_sala_de_jantari.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._cozinha_e_sala_de_jantari.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._cozinha_e_sala_de_jantari.style[domTransition]='left 0s, top 0s, ' + cssPrefix + 'transform 0s';
				if (me._cozinha_e_sala_de_jantari.ggCurrentLogicStateScaling == 0) {
					me._cozinha_e_sala_de_jantari.ggParameter.sx = 0.85;
					me._cozinha_e_sala_de_jantari.ggParameter.sy = 0.75;
					me._cozinha_e_sala_de_jantari.style[domTransform]=parameterToTransform(me._cozinha_e_sala_de_jantari.ggParameter);
				}
				else if (me._cozinha_e_sala_de_jantari.ggCurrentLogicStateScaling == 1) {
					me._cozinha_e_sala_de_jantari.ggParameter.sx = 0.85;
					me._cozinha_e_sala_de_jantari.ggParameter.sy = 0.85;
					me._cozinha_e_sala_de_jantari.style[domTransform]=parameterToTransform(me._cozinha_e_sala_de_jantari.ggParameter);
				}
				else {
					me._cozinha_e_sala_de_jantari.ggParameter.sx = 1;
					me._cozinha_e_sala_de_jantari.ggParameter.sy = 1;
					me._cozinha_e_sala_de_jantari.style[domTransform]=parameterToTransform(me._cozinha_e_sala_de_jantari.ggParameter);
				}
			}
		}
		me._cozinha_e_sala_de_jantari.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('INFO') == false))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._cozinha_e_sala_de_jantari.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._cozinha_e_sala_de_jantari.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._cozinha_e_sala_de_jantari.style[domTransition]='left 0s, top 0s, ' + cssPrefix + 'transform 0s';
				if (me._cozinha_e_sala_de_jantari.ggCurrentLogicStateVisible == 0) {
					me._cozinha_e_sala_de_jantari.style.visibility="hidden";
					me._cozinha_e_sala_de_jantari.ggVisible=false;
				}
				else {
					me._cozinha_e_sala_de_jantari.style.visibility="hidden";
					me._cozinha_e_sala_de_jantari.ggVisible=false;
				}
			}
		}
		me._cozinha_e_sala_de_jantari.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._cozinha_e_sala_de_jantarii=document.createElement('div');
		el.ggId="COZINHA E SALA DE JANTAR-II";
		el.ggDx=-2;
		el.ggDy=1;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 361px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 295px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._cozinha_e_sala_de_jantarii.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._cozinha_e_sala_de_jantarii.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._bsico=document.createElement('div');
		els=me._bsico__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="B\xe1sico";
		el.ggDx=37;
		el.ggDy=-141;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text tooltip";
		el.ggType='text';
		hs ='';
		hs+='height : 56px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 225px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 227px;';
		hs+='height: auto;';
		hs+='background: #ffffff;';
		hs+='background: rgba(255,255,255,0);';
		hs+='border: 1px solid #55aa7f;';
		hs+='border: 1px solid rgba(85,170,127,0);';
		hs+=cssPrefix + 'background-clip: padding-box;';
		hs+='background-clip: padding-box;';
		hs+='border-radius: 10px;';
		hs+=cssPrefix + 'border-radius: 10px;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: left;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 2px 3px 2px 3px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		els.innerHTML="Cozinha<br\/>Espa\xe7o onde os h\xf3spedes podem<br\/>preparar suas pr\xf3prias refei\xe7\xf5es";
		el.appendChild(els);
		me._bsico.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._bsico.logicBlock_text = function() {
			var newLogicStateText;
			if (
				((player.getVariableValue('POR') == true))
			)
			{
				newLogicStateText = 0;
			}
			else if (
				((player.getVariableValue('ENG') == true))
			)
			{
				newLogicStateText = 1;
			}
			else if (
				((player.getVariableValue('ESP') == true))
			)
			{
				newLogicStateText = 2;
			}
			else {
				newLogicStateText = -1;
			}
			if (me._bsico.ggCurrentLogicStateText != newLogicStateText) {
				me._bsico.ggCurrentLogicStateText = newLogicStateText;
				me._bsico.style[domTransition]='';
				if (me._bsico.ggCurrentLogicStateText == 0) {
					me._bsico.ggText="Cozinha\nEspa\xe7o onde os h\xf3spedes podem\npreparar suas pr\xf3prias refei\xe7\xf5es";
					me._bsico__text.innerHTML=me._bsico.ggText;
					if (me._bsico.ggUpdateText) {
					me._bsico.ggUpdateText=function() {
						var hs="Cozinha\nEspa\xe7o onde os h\xf3spedes podem\npreparar suas pr\xf3prias refei\xe7\xf5es";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._bsico.ggUpdatePosition) me._bsico.ggUpdatePosition();
					}
				}
				else if (me._bsico.ggCurrentLogicStateText == 1) {
					me._bsico.ggText="Kitchen\nSpace where guests can\ncook their own meals";
					me._bsico__text.innerHTML=me._bsico.ggText;
					if (me._bsico.ggUpdateText) {
					me._bsico.ggUpdateText=function() {
						var hs="Kitchen\nSpace where guests can\ncook their own meals";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._bsico.ggUpdatePosition) me._bsico.ggUpdatePosition();
					}
				}
				else if (me._bsico.ggCurrentLogicStateText == 2) {
					me._bsico.ggText="Cocina\nEspacio donde los hu\xe9spedes\npueden preparar su comida\n";
					me._bsico__text.innerHTML=me._bsico.ggText;
					if (me._bsico.ggUpdateText) {
					me._bsico.ggUpdateText=function() {
						var hs="Cocina\nEspacio donde los hu\xe9spedes\npueden preparar su comida\n";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._bsico.ggUpdatePosition) me._bsico.ggUpdatePosition();
					}
				}
				else {
					me._bsico.ggText="Cozinha\nEspa\xe7o onde os h\xf3spedes podem\npreparar suas pr\xf3prias refei\xe7\xf5es";
					me._bsico__text.innerHTML=me._bsico.ggText;
					if (me._bsico.ggUpdateText) {
					me._bsico.ggUpdateText=function() {
						var hs="Cozinha\nEspa\xe7o onde os h\xf3spedes podem\npreparar suas pr\xf3prias refei\xe7\xf5es";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._bsico.ggUpdatePosition) me._bsico.ggUpdatePosition();
					}
				}
			}
		}
		me._bsico.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 2;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._cozinha_e_sala_de_jantarii.appendChild(me._bsico);
		el=me._rectangle_225=document.createElement('div');
		el.ggId="Rectangle 2";
		el.ggDx=-112;
		el.ggDy=-143;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 200px;';
		hs+='border-radius : 200px;';
		hs+='background : #ffffff;';
		hs+='border : 1px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 32px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 30px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._rectangle_225.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_225.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._cozinha_e_sala_de_jantarii.appendChild(me._rectangle_225);
		el=me._ht_image_info125=document.createElement('div');
		el.ggId="ht_image_info-1";
		el.ggDx=-112;
		el.ggDy=-143;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 100px;';
		hs+='border-radius : 100px;';
		hs+='background : #ffffff;';
		hs+='border : 1px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 50px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_image_info125.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._ht_image_info125.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._ht_image_info225=document.createElement('div');
		el.ggId="ht_image_info-2";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 200px;';
		hs+='border-radius : 200px;';
		hs+='border : 4px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 32px;';
		hs+='left : -10000px;';
		hs+='opacity : 0.8;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 30px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_image_info225.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._ht_image_info225.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._ht_image_info125.appendChild(me._ht_image_info225);
		me._cozinha_e_sala_de_jantarii.appendChild(me._ht_image_info125);
		el=me._image_125=document.createElement('div');
		els=me._image_125__img=document.createElement('img');
		els.className='ggskin ggskin_image_125';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAjCAYAAAD17ghaAAAG1klEQVRYhd1XvU9UTxd+Zu7H3LssLCq4IiYkxBATKhIRG42WFlYGo2KCNra2dDT8CSa2xEiMhZ1/ASQaSIiSILGhM9kgAq7s3r1fM/MryDnM5eebt3yTd5oLe8+dec5znvMxwlprsyyDUgoAoLWG53mw1kIIwb9JKfl/95276PeyLCGlhJSS32VZhjAMYYyB53mn9lprS4Z5niMMQwBAWZYAAN/32ZgWHW6M4b/p6TpD32mteR/6zhgD3/chXU+CIAAAFEUBz/Pg+z6stTDGsHdaa7Yn4OQ1ACilkOc5gxFC8OH0rZQSvu+jKIoTAPQBgfE8r+KZtZYPI0C0Idn5vg+tdYVF3/eRZVnFqaIoKg4Le7IghGBPPc+D1pppovcExBhTiS8ApGmKKIpYQ2'+
			'VZVmh3F50jpYSkOFpr+XCiKQgCNnSFZ4xBmqbMCABEUcQCy/OcDzfGIEkSDonLphACDFEIgbNi3NraQlEUTDuFa3p6GsYYrK6uIooiZFmGGzduQAiBXq+H3d1dZFnGgJRSaDQaGB8fZ9AEXBhjrCskF/n8/DzW1tYghEAQBCyiN2/eIAgCPH36lHUwMjKCtbU1bGxs4OHDhyy0siwhhIAQAisrK5iZmeH9pZTwiX4Sn8uIMQaTk5NYWFhAHMfY3t7G4uIiK91ai4WFBURRhKWlJWxubmJiYgIfPnxAkiSI45jF9+jRI6yvr2NmZqaioYpK3JQk1H19fbh161ZFPC7AqakpFEWBTqeDPM8hpUSe5xgYGEC320UQBBw+2p8OL8sSf5Wpi5BYMcag1+shjmMWLdGfJAkGBwdhrcXu7i7m5uY4zm74KLMIZBiGpwD+Vl61'+
			'1vj27RseP37M4jTGoCxLWGuhlEKapuytUgpjY2N49+4dtNYIwxBFUSAIAszOzsLzPEgpURQFl2Wf6PxbqU2SBP39/ZUKeHx8jDRN0dfXhzRNsbu7y2pP05QZOlt0/tP6KwP0PDo6wu3bt7G0tATP89BqtXDnzh3s7+9DKQWlFBYXFxl8vV7Hzs4OHjx4ACEE6vU6er0e1xMKQRAE/w7BWSBFUeDg4ADNZpMr48jICLIsQ6vVwv3797G8vIwwDLG8vIzV1VVMTEyg0+ng48ePyPOcq6MxBk+ePOEQAEAYhiddk9C7T2styrJEp9PB8PAwyrJkMQ4ODqLdbiMIAty8eRPXr1/Hz58/ce3aNcRxjCiK0Ol0AJxUR6oDbvGhXuL7/kkdoBZKRlJK/PjxA57nYWhoiDtXEAS4ePEi9vb2OEy9Xg9bW1t4+fIlAGBrawvPnj'+
			'2rlPYsy9DX18dhcOuND5y2YQA8jLTbbQghcO7cOf6dGDg8PGSvNjc3AQBXr14FAExNTWFlZYXDGMcx0jTF3Nwci5OW1vokBNRsaBljsL+/D2stms1mRZjNZhOtVovDtb6+jiiKcPfu3UoYtdZQSiFJEiilWHxFUVS6biUL3C7169cvWGtx/vz5ikiHh4dxcHDAdtvb27h06RIrfWNjAy9evICUkocU12uyo8bGvcCd/zzPw8HBAZRSiOOYWSFN9Ho9VniapgxSCIHp6WksLy9zCaZi9fz5cyRJUhF0GIaQtLk7cALA3t4eLly4UEFPDBhjmAW3S2ZZhqIoEEUR8jxHEARot9uo1Wrodrs8npHwWYRuCaZ23Gq1MDo6ymIjIM1mE9Za7O/vY3R0FHmec4yVUvjy5Qu3aXcyjqKowrJS6mRYdQG4o9nh4SGuXLkCAFy7'+
			'AaDRaHCWuKMafT85OYm3b99WZgGtNebn5/817nuedxoCl34pJYeAmgope2RkBFprtFotbrFukyEWXWc8z+MMoMmLbd2LAgmERDg0NMTv6KD+/n5EUYR2uw1jDLIsYw2EYYivX79idnb2r+08iiIGEQTByTxQliXCMKxcKH7//g2tNRqNBoeABEdNiBio1WrwPI/7/Pj4ON6/f18Rb1EUmJ2dRVmWlbtHEATwqWeTKPI8R57nEELg6OgInz59Qr1eR6fTgZQSSinU63V0u11m5vDwEFJKpGmKWq12eumQkkPYaDSgtUaWZQiCoDqSuaKI4xhaa4yNjeHVq1d4/fo10jSFUgpCCBwfH2NgYADT09OcToODg6z0z58/Y25ujr0tyxJKKZRliXv37rGjdHcQRVFY3/fR7XZRq9Uqw8jOzg4rmfJaKYXh4WFcvnwZUkp8//'+
			'6dAdfrdfz58wc7Ozuc+8TGxMQEhoaGOA1ZW8YY614e3ZeUHe4tyL0x0XLTmEZ7Sj/aiwaQs/tXLqdujrop6W5OKeWWcLLVWnMJPntQGIZIkoRrAV3hhXXb4P9gyf9u8n8O4B9Bqa3cJIY4pwAAAABJRU5ErkJggg==';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 1";
		el.ggDx=-112;
		el.ggDy=-143;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 23px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 23px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._image_125.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_125.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._cozinha_e_sala_de_jantarii.appendChild(me._image_125);
		el=me._microondas=document.createElement('div');
		els=me._microondas__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Microondas";
		el.ggDx=12;
		el.ggDy=-87;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text tooltip";
		el.ggType='text';
		hs ='';
		hs+='height : 27px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 170px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 172px;';
		hs+='height: auto;';
		hs+='background: #ffffff;';
		hs+='background: rgba(255,255,255,0);';
		hs+='border: 1px solid #55aa7f;';
		hs+='border: 1px solid rgba(85,170,127,0);';
		hs+=cssPrefix + 'background-clip: padding-box;';
		hs+='background-clip: padding-box;';
		hs+='border-radius: 10px;';
		hs+=cssPrefix + 'border-radius: 10px;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: left;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 2px 3px 2px 3px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		els.innerHTML="Microondas";
		el.appendChild(els);
		me._microondas.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._microondas.logicBlock_text = function() {
			var newLogicStateText;
			if (
				((player.getVariableValue('POR') == true))
			)
			{
				newLogicStateText = 0;
			}
			else if (
				((player.getVariableValue('ENG') == true))
			)
			{
				newLogicStateText = 1;
			}
			else if (
				((player.getVariableValue('ESP') == true))
			)
			{
				newLogicStateText = 2;
			}
			else {
				newLogicStateText = -1;
			}
			if (me._microondas.ggCurrentLogicStateText != newLogicStateText) {
				me._microondas.ggCurrentLogicStateText = newLogicStateText;
				me._microondas.style[domTransition]='';
				if (me._microondas.ggCurrentLogicStateText == 0) {
					me._microondas.ggText="Microondas";
					me._microondas__text.innerHTML=me._microondas.ggText;
					if (me._microondas.ggUpdateText) {
					me._microondas.ggUpdateText=function() {
						var hs="Microondas";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._microondas.ggUpdatePosition) me._microondas.ggUpdatePosition();
					}
				}
				else if (me._microondas.ggCurrentLogicStateText == 1) {
					me._microondas.ggText="Microwave";
					me._microondas__text.innerHTML=me._microondas.ggText;
					if (me._microondas.ggUpdateText) {
					me._microondas.ggUpdateText=function() {
						var hs="Microwave";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._microondas.ggUpdatePosition) me._microondas.ggUpdatePosition();
					}
				}
				else if (me._microondas.ggCurrentLogicStateText == 2) {
					me._microondas.ggText="Microondas";
					me._microondas__text.innerHTML=me._microondas.ggText;
					if (me._microondas.ggUpdateText) {
					me._microondas.ggUpdateText=function() {
						var hs="Microondas";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._microondas.ggUpdatePosition) me._microondas.ggUpdatePosition();
					}
				}
				else {
					me._microondas.ggText="Microondas";
					me._microondas__text.innerHTML=me._microondas.ggText;
					if (me._microondas.ggUpdateText) {
					me._microondas.ggUpdateText=function() {
						var hs="Microondas";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._microondas.ggUpdatePosition) me._microondas.ggUpdatePosition();
					}
				}
			}
		}
		me._microondas.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 2;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._cozinha_e_sala_de_jantarii.appendChild(me._microondas);
		el=me._rectangle_224=document.createElement('div');
		el.ggId="Rectangle 2";
		el.ggDx=-113;
		el.ggDy=-85;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 200px;';
		hs+='border-radius : 200px;';
		hs+='background : #ffffff;';
		hs+='border : 1px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 32px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 30px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._rectangle_224.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_224.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._cozinha_e_sala_de_jantarii.appendChild(me._rectangle_224);
		el=me._ht_image_info124=document.createElement('div');
		el.ggId="ht_image_info-1";
		el.ggDx=-113;
		el.ggDy=-85;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 100px;';
		hs+='border-radius : 100px;';
		hs+='background : #ffffff;';
		hs+='border : 1px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 50px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_image_info124.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._ht_image_info124.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._ht_image_info224=document.createElement('div');
		el.ggId="ht_image_info-2";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 200px;';
		hs+='border-radius : 200px;';
		hs+='border : 4px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 32px;';
		hs+='left : -10000px;';
		hs+='opacity : 0.8;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 30px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_image_info224.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._ht_image_info224.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._ht_image_info124.appendChild(me._ht_image_info224);
		me._cozinha_e_sala_de_jantarii.appendChild(me._ht_image_info124);
		el=me._image_124=document.createElement('div');
		els=me._image_124__img=document.createElement('img');
		els.className='ggskin ggskin_image_124';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAfCAYAAAD0ma06AAAEnklEQVRIia2XO2gVTxTGfzOze3fvI0I0ClpEgqliJWKjkE47wT6VrbVgJdpEbWwsrSw1jWBlYx8FQYSIhREs1HRebszd3XlaXGbcPP4x/s2B5cI+5pvznfm+c64Ik0AIAYD3Hill+j2MqOuasiwBECGEAOCcw3tPlmUJ3DmHUupQQCNwAmyHtRalFEII9nj81yDdbjetIyKlzjmyLAN+Z9am+jAihICw1oZIm/c+gcX6/WuG3ntCCCkZ4b0P7exiWGt33fu/0T4Lsk2Z1hpr7aGAxDDGoJSiqqpJplprOp0OzjmePn3Kq1evsNbSNA3dbhfn3D8BXrhwgRs3btDtdoGWLD5//syVK1dYWFggz3P6/X6Syn7hvacoCowxZFmWvlFKMRwO+fTpE8+fP2'+
			'dhYWGyVgghOOfC27dvw+zsbFhdXQ0hhKC1DgcNY0wIIYTxeBzieiGE8Pr16zA3NxfevXsXQgjBWhsygKZpkFKmE7m2tsbDhw/Z3Nz848HJ8xzvPcYY7t+/z9TUFMvLy9y5cyedemttYkoCKKWo65p+vw/Az58/efnyJVVVIaXc9zLGsLGxwZs3b/j+/TtSSnq9Hk3TkOd5kpeUEqUUWdvntNbJ3vr9Pnfv3uX8+fP7Zuic4/379ywtLVEUBUePHuXevXsYY/jy5cs25gBkBIsfl2WJUgqtNcYYhBD7XlmWEUJgNBpRVRU/fvzg5s2bNE2TrNE5l0AzmGglph/1EoEPEltbW5RlyfT0dNpsrF0EjTaZee/J8xznHEIIut0uWmvquj4QmPeewWBACIGtrS0GgwGPHj3aZpGRDQCZXFwIrLXUdY1Salt27VO2M+LuYyil'+
			'kg4jnW03y9oPlFJ0Oh2stakJD4dD1tfX0VpTliV1XSfKq6ri3LlzadFoixFgr5JkbTePLxhj0q7X19e5du0aU1NTjEYjer0eQLK+J0+epBrmeZ4YEULsOTFk8dhqrRmPx1hrk+9JKRmNRgwGA27dusX8/HxqzB8+fGB5eTk116ZpMMYAJODxeLwbMLahoijo9/uJ3rqu8d5z+vTpVJNLly4BE/lsbGxgjKEoCqqqSvqN3SEawM6QUUeRBu89QghmZmaw1nLy5EmOHz/OysoKX79+TZp79uwZp06dYn5+Phm4lDLJK7K2K8N40pqmmdzIMpqmYTQa8eDBA44dO4Yxho8fP3L58mXm5uZYW1tDCMHs7CzXr19nOBymcsSIprALMIo+9j5rLdPT0ywuLtI0DXVdc+bMmSRc7z2Li4t475MV9no9Ll68yJEjR2jLbK9emu'+
			'V5nl4KISCl5OzZszx+/JiiKHZ98F+xc55tjyixX3Y6nd+UnjhxgizLuH37NjMzM5RlyXg8/qO9xU167+l0OmitEUJQFAXfvn1DKUVZlmmqEM65EPWysrLCixcvkFImxzloZs65tKi1NrWoq1evsrS0BEy6kQghhKqqkvYiFX87tbUns1jv9lwbn2+bvOMLxpjUMP80l0aNRntru0vMXmtNnucTE4+D8F7/Iw6S5c7MgG1mvXNzsu3u1lpCCGxubgIciNKdizvn9pz2IgO/ADVSeeE3vRJQAAAAAElFTkSuQmCC';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 1";
		el.ggDx=-113;
		el.ggDy=-85;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 22px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 23px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._image_124.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_124.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._cozinha_e_sala_de_jantarii.appendChild(me._image_124);
		el=me._louas_e_talheres=document.createElement('div');
		els=me._louas_e_talheres__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Lou\xe7as e talheres";
		el.ggDx=32;
		el.ggDy=-34;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text tooltip";
		el.ggType='text';
		hs ='';
		hs+='height : 48px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 213px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 215px;';
		hs+='height: auto;';
		hs+='background: #ffffff;';
		hs+='background: rgba(255,255,255,0);';
		hs+='border: 1px solid #55aa7f;';
		hs+='border: 1px solid rgba(85,170,127,0);';
		hs+=cssPrefix + 'background-clip: padding-box;';
		hs+='background-clip: padding-box;';
		hs+='border-radius: 10px;';
		hs+=cssPrefix + 'border-radius: 10px;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: left;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 2px 3px 2px 3px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		els.innerHTML="Lou\xe7as e talheresTigelas, <br\/>hashi, pratos, copos, etc.";
		el.appendChild(els);
		me._louas_e_talheres.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._louas_e_talheres.logicBlock_text = function() {
			var newLogicStateText;
			if (
				((player.getVariableValue('POR') == true))
			)
			{
				newLogicStateText = 0;
			}
			else if (
				((player.getVariableValue('ENG') == true))
			)
			{
				newLogicStateText = 1;
			}
			else if (
				((player.getVariableValue('ESP') == true))
			)
			{
				newLogicStateText = 2;
			}
			else {
				newLogicStateText = -1;
			}
			if (me._louas_e_talheres.ggCurrentLogicStateText != newLogicStateText) {
				me._louas_e_talheres.ggCurrentLogicStateText = newLogicStateText;
				me._louas_e_talheres.style[domTransition]='';
				if (me._louas_e_talheres.ggCurrentLogicStateText == 0) {
					me._louas_e_talheres.ggText="Lou\xe7as e talheresTigelas, \nhashi, pratos, copos, etc.";
					me._louas_e_talheres__text.innerHTML=me._louas_e_talheres.ggText;
					if (me._louas_e_talheres.ggUpdateText) {
					me._louas_e_talheres.ggUpdateText=function() {
						var hs="Lou\xe7as e talheresTigelas, \nhashi, pratos, copos, etc.";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._louas_e_talheres.ggUpdatePosition) me._louas_e_talheres.ggUpdatePosition();
					}
				}
				else if (me._louas_e_talheres.ggCurrentLogicStateText == 1) {
					me._louas_e_talheres.ggText="Dishes and silverware\nBowls.chopsticks,plates,etc.";
					me._louas_e_talheres__text.innerHTML=me._louas_e_talheres.ggText;
					if (me._louas_e_talheres.ggUpdateText) {
					me._louas_e_talheres.ggUpdateText=function() {
						var hs="Dishes and silverware\nBowls.chopsticks,plates,etc.";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._louas_e_talheres.ggUpdatePosition) me._louas_e_talheres.ggUpdatePosition();
					}
				}
				else if (me._louas_e_talheres.ggCurrentLogicStateText == 2) {
					me._louas_e_talheres.ggText="Platos y cubiertos\nvasos, tazas, recipientes,etc.";
					me._louas_e_talheres__text.innerHTML=me._louas_e_talheres.ggText;
					if (me._louas_e_talheres.ggUpdateText) {
					me._louas_e_talheres.ggUpdateText=function() {
						var hs="Platos y cubiertos\nvasos, tazas, recipientes,etc.";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._louas_e_talheres.ggUpdatePosition) me._louas_e_talheres.ggUpdatePosition();
					}
				}
				else {
					me._louas_e_talheres.ggText="Lou\xe7as e talheresTigelas, \nhashi, pratos, copos, etc.";
					me._louas_e_talheres__text.innerHTML=me._louas_e_talheres.ggText;
					if (me._louas_e_talheres.ggUpdateText) {
					me._louas_e_talheres.ggUpdateText=function() {
						var hs="Lou\xe7as e talheresTigelas, \nhashi, pratos, copos, etc.";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._louas_e_talheres.ggUpdatePosition) me._louas_e_talheres.ggUpdatePosition();
					}
				}
			}
		}
		me._louas_e_talheres.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 2;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._cozinha_e_sala_de_jantarii.appendChild(me._louas_e_talheres);
		el=me._rectangle_223=document.createElement('div');
		el.ggId="Rectangle 2";
		el.ggDx=-114;
		el.ggDy=-29;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 200px;';
		hs+='border-radius : 200px;';
		hs+='background : #ffffff;';
		hs+='border : 1px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 32px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 30px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._rectangle_223.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_223.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._cozinha_e_sala_de_jantarii.appendChild(me._rectangle_223);
		el=me._ht_image_info123=document.createElement('div');
		el.ggId="ht_image_info-1";
		el.ggDx=-114;
		el.ggDy=-29;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 100px;';
		hs+='border-radius : 100px;';
		hs+='background : #ffffff;';
		hs+='border : 1px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 50px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_image_info123.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._ht_image_info123.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._ht_image_info223=document.createElement('div');
		el.ggId="ht_image_info-2";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 200px;';
		hs+='border-radius : 200px;';
		hs+='border : 4px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 32px;';
		hs+='left : -10000px;';
		hs+='opacity : 0.8;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 30px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_image_info223.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._ht_image_info223.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._ht_image_info123.appendChild(me._ht_image_info223);
		me._cozinha_e_sala_de_jantarii.appendChild(me._ht_image_info123);
		el=me._image_123=document.createElement('div');
		els=me._image_123__img=document.createElement('img');
		els.className='ggskin ggskin_image_123';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAAAkCAYAAAB15jFqAAAFhUlEQVRYhe2XT0hUXRjGf/fvjCPUrj+CEqXCaJoFhRpEOxdCGajZwj+IEgVmIEIEbgpBCCKSCCWihW0NXLjJTbWpRRGZmS3KRQtLUoxpRu+957zfou+eT2n8li2is7nMcM/7vO9znuc5M5aICL952b8b8C/oX9A/DHR+fp65uTlEhPfv3/Pu3TsAPnz4wOzsLLGtwzA0e0QErTVRFAEQBAGLi4ssLCzkR1VKidZaRESiKJLm5mbp7u4WrbW0trbK2bNnRUSktbVVOjs7JYoiUUqJiJin1lpWV1dleHhYTp48KRUVFVJaWiptbW2Sb7m2bcfgOI5DKpVieXkZy7Lwfd9MBrC+vo7jOERRhGVZ2LaNiDA1NcXQ0BCZTIbS0lLq6uqoqamhvr4+76AuQB'+
			'RFuK5LGIYopSgoKDAUWpYFgNaanTt3opTCdV1TYGRkhPHxcYqLi7l37x41NTW4rks8zLagcRHP84iiiGQySS6Xw/M8lFLE73z//h0RQUSwLIvBwUEmJyc5f/48/f39+L6P4zimSa31lgYNaFxgY2MDz/NIJBK8evWKnp4eI6Jz584xOzvLoUOHcF0XpRQPHjxgamqKy5cv09fXZwqura3x5MkTXr9+TWFhIQMDA7+CWpaFUopEIkFMNYBlWVRWVqKUwvd9EokESilyuRwrKyuMjIxQW1tLX18fIkIQBLx9+5ZLly7x9etX9u7dy/Hjx7enN6YEfso/nU4zMTFBEAT4vg9Ac3MzrutSUFDA2NgYyWSS4eFhADY2Nnj+/Dm9vb2UlJTw+PFj9uzZQzKZzH+osYyDIBARkfv370t5ebmsra0ZS2QyGUmn0zI4OCjZbFaq'+
			'q6vlypUrxgJLS0tSVVUlp06dkmw2K5ttmNcysVVi0bS0tHD9+nUuXrxIU1MTqVSKFy9eoLWmqamJly9fsrq6Sk1NjWl8cnKSMAy5ceMGiUTif5VrJg3DcEsnCwsL0tDQIPv375d9+/ZJdXW1PHz4UDKZjIyPj0tJSYnMz8+b97u7u6Wzs9N8jhmKoijvpKyvr5tUiaLINKC1ltOnT0tjY6OIiGxsbIiIyNDQkJSVlUm8TyklBw8elFu3bomISC6X25ZWQ28slM2mjwWUSqVMOPi+TxAE2LZtrBUEAZ7n8ePHDyOamFqt9bY025ZlGRMHQQD8DIm4kTgcYuCioiKy2SwfP37E8zwsy6KiosJ4Oh5Ca73tkdoAuVxuyzTxdCKC4zhbCpSXl2PbNp8+fTLpVFdXx9OnT/n8+fN/hf9HTLbWmsLCQuBn1vq+j9aaIAhIJp'+
			'Mm1OMmTpw4ge/7zM3NmcLt7e1EUcS1a9dYX18HMI3nBZVNt4jjOAbA932z0bZtlFLmZjlz5gyPHj3i27dvWJZFcXExY2NjzMzM0NHRwfLy8raAALbjOKY727ZNYa01mUzGXGNaa0Nnf38/i4uLXL16Ffh5fvX19UxPT6O1pra2lqNHj5rE+gUU/rtl4tyNG9ixY4f5Lr6BAHbv3s3AwAAzMzOMjo7iOA5KKcrKypiYmGB0dJT29vYt8bplbfZP7DGttYRhKG1tbdLV1SVRFBmfbg6Tnp4eOXDggFy4cEFWVlYkX618y5yp1tp4LQgCXNfF8zwymQyO4xhlx8yICHfv3qWhoYHp6WkaGxt59uwZURQZEW5nGzc+r1iJseEBstksqVSKMAzxPA/f9wnDENd1sSwLx3G4c+cOVVVV3L59m97eXnbt2kU6nebYsWMcPnyY'+
			'I0eO5Kc3DENzK8S5GQSBdHR0SEtLS1664j0x1UtLS3Lz5k1pbm6W8vJyKSoqkq6urrz0Wv8+t/wWioX05s0bHMehsrLSCC2mNp8PlVLGAV++fGFlZYV0Ov3Le5bI3/+nfxjoPzEpXGp40SWRAAAAAElFTkSuQmCC';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 1";
		el.ggDx=-114;
		el.ggDy=-29;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 23px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 23px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._image_123.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_123.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._cozinha_e_sala_de_jantarii.appendChild(me._image_123);
		el=me._frigobar0=document.createElement('div');
		els=me._frigobar0__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Frigobar";
		el.ggDx=28;
		el.ggDy=28;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text tooltip";
		el.ggType='text';
		hs ='';
		hs+='height : 27px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 205px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 207px;';
		hs+='height: auto;';
		hs+='background: #ffffff;';
		hs+='background: rgba(255,255,255,0);';
		hs+='border: 1px solid #55aa7f;';
		hs+='border: 1px solid rgba(85,170,127,0);';
		hs+=cssPrefix + 'background-clip: padding-box;';
		hs+='background-clip: padding-box;';
		hs+='border-radius: 10px;';
		hs+=cssPrefix + 'border-radius: 10px;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: left;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 2px 3px 2px 3px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		els.innerHTML="Frigobar";
		el.appendChild(els);
		me._frigobar0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._frigobar0.logicBlock_text = function() {
			var newLogicStateText;
			if (
				((player.getVariableValue('POR') == true))
			)
			{
				newLogicStateText = 0;
			}
			else if (
				((player.getVariableValue('ENG') == true))
			)
			{
				newLogicStateText = 1;
			}
			else if (
				((player.getVariableValue('ESP') == true))
			)
			{
				newLogicStateText = 2;
			}
			else {
				newLogicStateText = -1;
			}
			if (me._frigobar0.ggCurrentLogicStateText != newLogicStateText) {
				me._frigobar0.ggCurrentLogicStateText = newLogicStateText;
				me._frigobar0.style[domTransition]='';
				if (me._frigobar0.ggCurrentLogicStateText == 0) {
					me._frigobar0.ggText="Frigobar";
					me._frigobar0__text.innerHTML=me._frigobar0.ggText;
					if (me._frigobar0.ggUpdateText) {
					me._frigobar0.ggUpdateText=function() {
						var hs="Frigobar";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._frigobar0.ggUpdatePosition) me._frigobar0.ggUpdatePosition();
					}
				}
				else if (me._frigobar0.ggCurrentLogicStateText == 1) {
					me._frigobar0.ggText="Mini fridge";
					me._frigobar0__text.innerHTML=me._frigobar0.ggText;
					if (me._frigobar0.ggUpdateText) {
					me._frigobar0.ggUpdateText=function() {
						var hs="Mini fridge";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._frigobar0.ggUpdatePosition) me._frigobar0.ggUpdatePosition();
					}
				}
				else if (me._frigobar0.ggCurrentLogicStateText == 2) {
					me._frigobar0.ggText="Frigobar";
					me._frigobar0__text.innerHTML=me._frigobar0.ggText;
					if (me._frigobar0.ggUpdateText) {
					me._frigobar0.ggUpdateText=function() {
						var hs="Frigobar";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._frigobar0.ggUpdatePosition) me._frigobar0.ggUpdatePosition();
					}
				}
				else {
					me._frigobar0.ggText="Frigobar";
					me._frigobar0__text.innerHTML=me._frigobar0.ggText;
					if (me._frigobar0.ggUpdateText) {
					me._frigobar0.ggUpdateText=function() {
						var hs="Frigobar";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._frigobar0.ggUpdatePosition) me._frigobar0.ggUpdatePosition();
					}
				}
			}
		}
		me._frigobar0.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 2;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._cozinha_e_sala_de_jantarii.appendChild(me._frigobar0);
		el=me._rectangle_222=document.createElement('div');
		el.ggId="Rectangle 2";
		el.ggDx=-114;
		el.ggDy=29;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 200px;';
		hs+='border-radius : 200px;';
		hs+='background : #ffffff;';
		hs+='border : 1px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 32px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 30px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._rectangle_222.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_222.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._cozinha_e_sala_de_jantarii.appendChild(me._rectangle_222);
		el=me._ht_image_info122=document.createElement('div');
		el.ggId="ht_image_info-1";
		el.ggDx=-114;
		el.ggDy=29;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 100px;';
		hs+='border-radius : 100px;';
		hs+='background : #ffffff;';
		hs+='border : 1px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 50px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_image_info122.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._ht_image_info122.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._ht_image_info222=document.createElement('div');
		el.ggId="ht_image_info-2";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 200px;';
		hs+='border-radius : 200px;';
		hs+='border : 4px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 32px;';
		hs+='left : -10000px;';
		hs+='opacity : 0.8;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 30px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_image_info222.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._ht_image_info222.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._ht_image_info122.appendChild(me._ht_image_info222);
		me._cozinha_e_sala_de_jantarii.appendChild(me._ht_image_info122);
		el=me._image_122=document.createElement('div');
		els=me._image_122__img=document.createElement('img');
		els.className='ggskin ggskin_image_122';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB8AAAAkCAYAAABxE+FXAAAE10lEQVRYhe2XvWsUXRTGf/djZnY3H2ihpApYBhEhCoJi7V9gbOyChf+BgoVFGtEmNnZWamERFIylrQRUUEhsBBFEFxVc435kZu695y3CvcyuyStvZfF6YGF29t57znme5zwzq0RE+EOh/1Tiv8n/Jv8fJi/LEoC6rtMPzesQAiJCtIT/ag0hhHQd93rvUc45McYgIiil0qJ3795x584dut0u1lrqusZaSwiBEAJ1XdPpdMaK3CtmZma4dOkSJ0+exHuPMYYQAlprdKxKKUUIgbIsqaqKu3fv8vTpU6qqoqoqQgjs7OzgnEMpRZZl1HWdENnv8/z5c9bW1nZh1hrvPVprRASbZVnqWkQoigKAra0tTpw4wb1798aoyLIsfS/LMq3fLy5evMjbt29Tgx'+
			'F2pRRWRHDOAZBlGc45rLW0222stQBUVQVAnudjvBVF8Vv+rbV0Op1djpXCWpty6AhhTNTc1O/3AVhZWeHWrVsAjEajdFAIAaXUv34GgwEikrgGMMbgvcd67wkhJDib3U5PT+O9Z2lpiX6/j4jQbrf3pGC/aLfb/Pz5M50duxYRrDEGrXWqKorCGENZlhhjOHr06NgkiMgvSO0Xzjmmp6eTPuLEWGt3OY9C0FonWPI858uXL2xsbOCco9VqUVUVeZ4nuL33qeB4oIhQ13U6q9frcfjw4T2FaWNH0Ui01iil6PV6vH//ngsXLqTEMaH3HmstWZahlGJnZydNTOwsz3PquqYoijGhNvPYCLHWOlULMDs7y/z8PDdu3GB7e5upqSmcc4gIMzMz/PjxI4koyzKMMWlq4rp2u82VK1eYnZ0FdserKTxrjEnQxYjmMTc3x7Fj'+
			'x37huAl/c290Ltj1AGstc3NzyRGjQOOadGJzo1KKsixTpc01a2trOOdYWloaK/jBgwdkWcb58+dxziWOm5RM5tLRJJqKt9ZSFAXGmOTdEdL19XXW19eT2GKXz5494/Hjx8kDIkLGmKTyySZ106G89ylJXdfJw6PARqMR379/59u3b1RVlQRUFAUfPnxgMBiwvb2d0MrzHKXUWAPNom0TjqZpeO9TYmMM/X6fc+fO8fnzZ7TWnDp1ipcvX2KM4fTp03S7XbIs4+zZs7x48YJWq5UeItGeJ70hPdWaCETOmo/Azc1Nut0u165d4/r16/T7fd68ecOrV6/odrusrKxw9epVRqMRr1+/TpbqvafdbqcJaOZInccZNsZgrR1TdNSD957jx48zGAwSKnES5ufnmZqaSvea3h9pi5xHFGzTTqPThRA4ePAgW1tb3L59G6UUnz'+
			'59QmvN/fv3sdbSarV4+PAhIkKr1eLJkyc459Ba8+jRIzY2NgD4+PEjR44cGWsiFqJCCKKUGjN85xybm5tcvnyZr1+/prnvdDo45zDG0Ov1OHDgAEC6jh0Oh8Mk1kOHDnHz5k3OnDmTnC2NnohIXdciIjIcDiWGc05ERFZXV2VhYUG891KWpfwuqqqSEIIsLCzI6uqqeO/HzovfQwiiI/7RJqP3xve6xcVFlpeX0VqT5zlVVf0inohWVVXJ75eXl1lcXBx7c4m0xFexBHvkvWkck0+iSaeafMPZaw3AcDik0+mM3SvLcjd5k4sojCi+qNomV3ESmhHvTe6Z/D1qC0D9/X/+v0v+DyHaxIsXxH+/AAAAAElFTkSuQmCC';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 1";
		el.ggDx=-114;
		el.ggDy=29;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 23px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 23px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._image_122.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_122.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._cozinha_e_sala_de_jantarii.appendChild(me._image_122);
		el=me._fogo=document.createElement('div');
		els=me._fogo__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Fog\xe3o";
		el.ggDx=10;
		el.ggDy=88;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text tooltip";
		el.ggType='text';
		hs ='';
		hs+='height : 27px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 170px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 172px;';
		hs+='height: auto;';
		hs+='background: #ffffff;';
		hs+='background: rgba(255,255,255,0);';
		hs+='border: 1px solid #55aa7f;';
		hs+='border: 1px solid rgba(85,170,127,0);';
		hs+=cssPrefix + 'background-clip: padding-box;';
		hs+='background-clip: padding-box;';
		hs+='border-radius: 10px;';
		hs+=cssPrefix + 'border-radius: 10px;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: left;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 2px 3px 2px 3px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		els.innerHTML="Fog\xe3o";
		el.appendChild(els);
		me._fogo.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._fogo.logicBlock_text = function() {
			var newLogicStateText;
			if (
				((player.getVariableValue('POR') == true))
			)
			{
				newLogicStateText = 0;
			}
			else if (
				((player.getVariableValue('ENG') == true))
			)
			{
				newLogicStateText = 1;
			}
			else if (
				((player.getVariableValue('ESP') == true))
			)
			{
				newLogicStateText = 2;
			}
			else {
				newLogicStateText = -1;
			}
			if (me._fogo.ggCurrentLogicStateText != newLogicStateText) {
				me._fogo.ggCurrentLogicStateText = newLogicStateText;
				me._fogo.style[domTransition]='';
				if (me._fogo.ggCurrentLogicStateText == 0) {
					me._fogo.ggText="Fog\xe3o";
					me._fogo__text.innerHTML=me._fogo.ggText;
					if (me._fogo.ggUpdateText) {
					me._fogo.ggUpdateText=function() {
						var hs="Fog\xe3o";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._fogo.ggUpdatePosition) me._fogo.ggUpdatePosition();
					}
				}
				else if (me._fogo.ggCurrentLogicStateText == 1) {
					me._fogo.ggText="Stove";
					me._fogo__text.innerHTML=me._fogo.ggText;
					if (me._fogo.ggUpdateText) {
					me._fogo.ggUpdateText=function() {
						var hs="Stove";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._fogo.ggUpdatePosition) me._fogo.ggUpdatePosition();
					}
				}
				else if (me._fogo.ggCurrentLogicStateText == 2) {
					me._fogo.ggText="Horno";
					me._fogo__text.innerHTML=me._fogo.ggText;
					if (me._fogo.ggUpdateText) {
					me._fogo.ggUpdateText=function() {
						var hs="Horno";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._fogo.ggUpdatePosition) me._fogo.ggUpdatePosition();
					}
				}
				else {
					me._fogo.ggText="Fog\xe3o";
					me._fogo__text.innerHTML=me._fogo.ggText;
					if (me._fogo.ggUpdateText) {
					me._fogo.ggUpdateText=function() {
						var hs="Fog\xe3o";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._fogo.ggUpdatePosition) me._fogo.ggUpdatePosition();
					}
				}
			}
		}
		me._fogo.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 2;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._cozinha_e_sala_de_jantarii.appendChild(me._fogo);
		el=me._rectangle_221=document.createElement('div');
		el.ggId="Rectangle 2";
		el.ggDx=-115;
		el.ggDy=88;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 200px;';
		hs+='border-radius : 200px;';
		hs+='background : #ffffff;';
		hs+='border : 1px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 32px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 30px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._rectangle_221.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_221.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._cozinha_e_sala_de_jantarii.appendChild(me._rectangle_221);
		el=me._ht_image_info121=document.createElement('div');
		el.ggId="ht_image_info-1";
		el.ggDx=-115;
		el.ggDy=88;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 100px;';
		hs+='border-radius : 100px;';
		hs+='background : #ffffff;';
		hs+='border : 1px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 50px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_image_info121.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._ht_image_info121.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._ht_image_info221=document.createElement('div');
		el.ggId="ht_image_info-2";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 200px;';
		hs+='border-radius : 200px;';
		hs+='border : 4px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 32px;';
		hs+='left : -10000px;';
		hs+='opacity : 0.8;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 30px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_image_info221.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._ht_image_info221.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._ht_image_info121.appendChild(me._ht_image_info221);
		me._cozinha_e_sala_de_jantarii.appendChild(me._ht_image_info121);
		el=me._image_121=document.createElement('div');
		els=me._image_121__img=document.createElement('img');
		els.className='ggskin ggskin_image_121';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAkCAYAAACe0YppAAAFhUlEQVRYhe2XS2hT6xbHf/uVpGkKbYhIJVAnJqjYKBjB4lShRONzoLGIFiU4dlKhosGIFOmwBXFUSn1bRHBgwSLuiU6c2EEnrVaQqo3vkCb78e0zyN1fm6rnnHsHV7j3LAiEb+9v/df7v7bieZ7HbxD1d4D+A/wP8P8msA7geR6KogDgui6KomCaJn19fbx9+5ampiaq1Sq6rqMoCoqiIIRAVet2+/89z8PzPBzHIRQKsbi4SGtrK8VikWw22wjsX3JdFwBN07Asi1u3bgHQ39/Pp0+fCAQCqKqKoiioqioNASSQEALP8xBCYFkW0WiUkZERJiYmyGQyuK6Lpmlomoa+EhQgEAhQKpXo6Ojg+PHjBAIBaannebiuK0F9cRwHTdNk5AAsy+Lp06fMz8'+
			'9LQF9UX5l/6Loutm3T0tKCruvyfHBwkK6uLlKpFPl8nqmpKRzHwXEcpqamyOfzpFIpurq6GBwcbHAkGAxK5yTwcut9qwEWFxexbRtN0xgdHWVoaIi2tja6u7sxTZPe3l5UVUVVVXp7ezFNk+7ubtra2hgaGmJ0dBRN06hWq2iaJtPgG9AQLx/UMAxs2yYSieB5HqZpsmbNGu7cuUM4HKazs5OzZ88yNzcHwLt377h8+TJHjx6lUqmwa9cuTNOkp6eHSCRCpVLBMAwAFEXB8zxUTdNwHEdWc7ValS9YloWiKIRCIRzHIRwOI4RAURQcx2nIr1/p4XBYFpuiKNi2jWVZP1S/DqDrugxBKBTC8zxCoZC8kE6nefjwIfl8ntWrV2OaJslkkvb2dgCSySTXrl1jenqa9+/fs7CwQDqdljUTjUaxbVu2nywuIURDxfke+S8e'+
			'OXKEU6dOMTs7y/3794nH41y9ehVd1wkGgwwPDxONRnnw4AGvX7/m9OnTHD58uA7wr9YzDENiqKramONfia7r9PX1cebMGZkrWBo8yWSSe/fuYds2hmE0hPSXOv8OsBCCb9++MTk5SalUYtu2baxfv55gMCjD+fLlS54/f040GmXnzp20tLQ09PR/BDwzM0M2m5XtIYQgl8tRLBYBKBaLjIyMyPq4cOEC4+PjJBKJX+r8WyQxNjYGQKFQ4MmTJ6TTae7evcuHDx9YWFhgbGyM7du38+jRI65cuUKtVuPmzZt/qvMvgR3HYW5ujng8TjabJR6Pc/LkSb5+/crHjx/5/Pkz5XKZEydO0NHRQSaTYe3atbx69eqHafVvAeu6TiKRYGZmhtnZWb58+cLjx49pbW2ltbWVSCRCLBZjYmKCcrnM9PQ0b968Yd26dQ2d8oPevw'+
			'IGOHjwINevXyeTyaCqKrVajWPHjtHe3o7neezbt48bN24wPj6OqqqEw2FyudyfO7TywG8Jnx6FECQSCSYnJ3n27BmlUoktW7aQSqWAes8XCgUOHDjAixcviMVi7Nixg1gshm3bkqOhkff1n4FCndIMw5D9uGrVKvbs2UOtVpO87IumaWzatImNGzfKFoP6zA8EAg1j2Odk1XVdOaF8FhFCEAwGEUIAcO7cOQqFAlCnuIGBAS5duoQQAtd1uXjxIgMDAxL0/Pnz9Pf3A1Aul2lubgaWZrXjOEseW5bVQPj+mBNCcOjQIXnBcRx2796NYRhyDdq7dy9CCEkc+/fvl6Ftbm7m+/fvEljX9fpv+dbh70uGYdQZRNdRVZVUKrWUG12ns7NTggJs2LBBPgPYvHmzzKfPWv5znwN03xIf0M/x1q1bGR4eJpFI4Lqu7MmV+fUj'+
			'4e9iK9cogJ6eHhlRTdPqRlUqFa+pqemnBXb79m3m5+dlZfqrkL8e+R65riuV2rYtcymEIBaLkcvl5D0J7H+mLrd0ech/Jn7oVq63UJ90fsiXs9TyKDmOswT835b/v0+Y3wb8B49j0rz1ASz+AAAAAElFTkSuQmCC';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 1";
		el.ggDx=-115;
		el.ggDy=88;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 23px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 23px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._image_121.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_121.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._cozinha_e_sala_de_jantarii.appendChild(me._image_121);
		el=me._chaleira_de_gua_quente=document.createElement('div');
		els=me._chaleira_de_gua_quente__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Chaleira de \xe1gua quente";
		el.ggDx=11;
		el.ggDy=143;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text tooltip";
		el.ggType='text';
		hs ='';
		hs+='height : 27px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 170px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 172px;';
		hs+='height: auto;';
		hs+='background: #ffffff;';
		hs+='background: rgba(255,255,255,0);';
		hs+='border: 1px solid #55aa7f;';
		hs+='border: 1px solid rgba(85,170,127,0);';
		hs+=cssPrefix + 'background-clip: padding-box;';
		hs+='background-clip: padding-box;';
		hs+='border-radius: 10px;';
		hs+=cssPrefix + 'border-radius: 10px;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: left;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 2px 3px 2px 3px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		els.innerHTML="Chaleira de \xe1gua quente";
		el.appendChild(els);
		me._chaleira_de_gua_quente.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._chaleira_de_gua_quente.logicBlock_text = function() {
			var newLogicStateText;
			if (
				((player.getVariableValue('POR') == true))
			)
			{
				newLogicStateText = 0;
			}
			else if (
				((player.getVariableValue('ENG') == true))
			)
			{
				newLogicStateText = 1;
			}
			else if (
				((player.getVariableValue('ESP') == true))
			)
			{
				newLogicStateText = 2;
			}
			else {
				newLogicStateText = -1;
			}
			if (me._chaleira_de_gua_quente.ggCurrentLogicStateText != newLogicStateText) {
				me._chaleira_de_gua_quente.ggCurrentLogicStateText = newLogicStateText;
				me._chaleira_de_gua_quente.style[domTransition]='';
				if (me._chaleira_de_gua_quente.ggCurrentLogicStateText == 0) {
					me._chaleira_de_gua_quente.ggText="Chaleira de \xe1gua quente";
					me._chaleira_de_gua_quente__text.innerHTML=me._chaleira_de_gua_quente.ggText;
					if (me._chaleira_de_gua_quente.ggUpdateText) {
					me._chaleira_de_gua_quente.ggUpdateText=function() {
						var hs="Chaleira de \xe1gua quente";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._chaleira_de_gua_quente.ggUpdatePosition) me._chaleira_de_gua_quente.ggUpdatePosition();
					}
				}
				else if (me._chaleira_de_gua_quente.ggCurrentLogicStateText == 1) {
					me._chaleira_de_gua_quente.ggText="Hot water kettle";
					me._chaleira_de_gua_quente__text.innerHTML=me._chaleira_de_gua_quente.ggText;
					if (me._chaleira_de_gua_quente.ggUpdateText) {
					me._chaleira_de_gua_quente.ggUpdateText=function() {
						var hs="Hot water kettle";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._chaleira_de_gua_quente.ggUpdatePosition) me._chaleira_de_gua_quente.ggUpdatePosition();
					}
				}
				else if (me._chaleira_de_gua_quente.ggCurrentLogicStateText == 2) {
					me._chaleira_de_gua_quente.ggText="Tetera de agua caliente";
					me._chaleira_de_gua_quente__text.innerHTML=me._chaleira_de_gua_quente.ggText;
					if (me._chaleira_de_gua_quente.ggUpdateText) {
					me._chaleira_de_gua_quente.ggUpdateText=function() {
						var hs="Tetera de agua caliente";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._chaleira_de_gua_quente.ggUpdatePosition) me._chaleira_de_gua_quente.ggUpdatePosition();
					}
				}
				else {
					me._chaleira_de_gua_quente.ggText="Chaleira de \xe1gua quente";
					me._chaleira_de_gua_quente__text.innerHTML=me._chaleira_de_gua_quente.ggText;
					if (me._chaleira_de_gua_quente.ggUpdateText) {
					me._chaleira_de_gua_quente.ggUpdateText=function() {
						var hs="Chaleira de \xe1gua quente";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._chaleira_de_gua_quente.ggUpdatePosition) me._chaleira_de_gua_quente.ggUpdatePosition();
					}
				}
			}
		}
		me._chaleira_de_gua_quente.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 2;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._cozinha_e_sala_de_jantarii.appendChild(me._chaleira_de_gua_quente);
		el=me._rectangle_220=document.createElement('div');
		el.ggId="Rectangle 2";
		el.ggDx=-116;
		el.ggDy=143;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 200px;';
		hs+='border-radius : 200px;';
		hs+='background : #ffffff;';
		hs+='border : 1px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 32px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 30px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._rectangle_220.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_220.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._cozinha_e_sala_de_jantarii.appendChild(me._rectangle_220);
		el=me._ht_image_info120=document.createElement('div');
		el.ggId="ht_image_info-1";
		el.ggDx=-116;
		el.ggDy=143;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 100px;';
		hs+='border-radius : 100px;';
		hs+='background : #ffffff;';
		hs+='border : 1px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 50px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_image_info120.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._ht_image_info120.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._ht_image_info220=document.createElement('div');
		el.ggId="ht_image_info-2";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 200px;';
		hs+='border-radius : 200px;';
		hs+='border : 4px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 32px;';
		hs+='left : -10000px;';
		hs+='opacity : 0.8;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 30px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_image_info220.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._ht_image_info220.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._ht_image_info120.appendChild(me._ht_image_info220);
		me._cozinha_e_sala_de_jantarii.appendChild(me._ht_image_info120);
		el=me._image_120=document.createElement('div');
		els=me._image_120__img=document.createElement('img');
		els.className='ggskin ggskin_image_120';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAgCAYAAAAFQMh/AAAF8klEQVRIiaWXO2hUWxSGv/OazEMdI8aIcZQQRhMxIojBJ06hgkEQOys7DQFtAhaiYCOCiCIkKlYWCooa0UZFEQsbsbEQFFGJIc1kIMEkTOY89jnrFrl738nVmFzvbubMZu/z7/Wv9f9rH0tEhHlGFEV4nvfTfJIk2LZtfv/LWNBqDRoEgZmL49iAJUli5oMgIIqiWXN/BFyr1dCkNDQ0GKAoigAIwxDLssz6hoYGPM+blwFrIVQDKKVwXRcAEcGyrFkUR1GE67pYlkUcx8RxTCqV+n/ASikAXNcljmMD/unTJ5RSbNy4Edd1UUrNqoXf5l4WMJIkMc/v3r2To0ePSktLi7S1tcm6deukUCjIsWPH5P379xKG4UJeKfNGHMcxIoLruly+fJlr165RLB'+
			'YplUps2LCBXC7H06dPef78ObVajdOnT3P8+HGCIDA18ccRi4i8evVK2tra5NChQzIxMfETG2NjY7Jv3z5pbW2V169fzx9xFEWii0bnRUSYnp7m8ePHjI6Oks1muX//PiMjI/T09OB5HpZl4TgOMFPZruvy48cP7ty5Q7FYZPfu3eTzeZRSbNu2ja6urll5N1RHUYRlWdi2TbVaZe/evYyPj2PbttGlLiDXdRERlFJYlsWSJUuYmpoinU5Tq9WI45hcLkcYhiRJQnd3NwMDA9i2TRzHM/KrLxwRkTAM5cGDB7J69Wr5+PGjiIjcunVLOjs7ZXR0VJRSopQSEZEoikREJAgCERFRSkm5XJZisSi3b9+WJEmkq6tLzp8//xPVtha/NgTP8xgaGiKbzdLR0YGIUKlUCIKAFStW4DgOjuMYekVkll6bm5sJw5BKpcKXL18o'+
			'l8ts3bqVKIqIosiYkRGZ1p/v+6TTaaNXy7IIw5Bly5aZl9dqNVKpFCdPnqS/vx+Ac+fOcfHiRaIoolAoMD4+zs2bN2lpaWHXrl14nmcwkiTB1p6qgdLp9CwGkiTh27dvNDU1kSQJYRiSyWQYGRnh2bNnrF27Ft/3efv2rQkgn88zODjIw4cPOXv2LNls1tSJriNbAzqOY8CUUmQyGdMIpqamWLlyJZZlGVoHBgYA2L59O2NjY3z+/Jn29nYAVq1aRRAEXLlyhe7ubsOcdjERwfY8z3Qdz/OIoohUKkUYhqbljY+Ps3TpUrPp5cuXDA4O0tPTw/Lly7lw4QKtra0cOHAAgMbGRgqFAocPHzby1JLVTcUFZpm/zkMcxyRJguM4VCoVmpqaACiXy5w6dYpSqURfXx/Xr1/nxYsXPHr0iEwmg1KK5uZmyuXyL31aM2YrpU'+
			'yV6nxXq1Xy+TyO4+D7PkEQsHjxYizL4syZM+RyOS5dusSHDx/o7++nt7eXzs5OE1k2myUIAsIw/AnYjF/Z2fDwsLx580ZERIaGhmT9+vVy9+5d+fr1q7S3t8vg4KCIiOzfv1+OHDkiIiJTU1NG20+ePJGOjg4ZHh6e0zLdKIpwHAcRMSdes2YNhUIBgMnJSXzfp1AoMDo6yqZNm9i5cyffv3+nsbGREydOICIsWrTIBJPP56lWq0xOTs4ZsKubN/wjIf2cSqWYmJjAtm1yuRybN29mx44dxjbv3btnLND3fVzXxXVdGhsbsW2bSqUyJ7BtWZYBdF3XPKdSKaIoYnh4GNu2DQMadHp6GsCwlU6nTZE2NTWZopwzYg0IM1rTktJW6Ps+YRiyZcsWI69UKmUKUVe+jtrzPESEJEmo1WpzA8vf9ycdSZIkRlIiwsGDB5me'+
			'nsZxHJRSRpfZbJZqtYrnebOuPNqQMpkMe/bsmRN43htI/b3p3z6u+3H9f73m33t/SfXvxtWrV7lx4wa+7xtKdYfyfR/AHEZfk+I4Jp1O09vbS19f358Bl0ollFLkcjls2zZGow8BGDDbtk3+q9UqpVJpzvfOS3X954t+1hTqrfV37F+t/yNgPerzqAtyvrnfjQV9O9VqNZPX+oPoOQ2mAR3H+a2UFgycyWSAGeq0U9V/lOkGH8exMSC9Z66xYDnV3y5hJq/197T6+XpPmEtOfwHjnqurhJW5pQAAAABJRU5ErkJggg==';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 1";
		el.ggDx=-116;
		el.ggDy=143;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 23px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 23px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._image_120.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_120.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._cozinha_e_sala_de_jantarii.appendChild(me._image_120);
		me._cozinha_e_sala_de_jantari.appendChild(me._cozinha_e_sala_de_jantarii);
		me.divSkin.appendChild(me._cozinha_e_sala_de_jantari);
		el=me._no_inclusoi=document.createElement('div');
		el.ggId="N\xc3O INCLUSO-I";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 20px;';
		hs+='border-radius : 20px;';
		hs+='background : #5e5e5e;';
		hs+='border : 5px solid #ffffff;';
		hs+='cursor : default;';
		hs+='height : 410px;';
		hs+='left : -10000px;';
		hs+='opacity : 0.7;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 289px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._no_inclusoi.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._no_inclusoi.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getViewerSize().height <= 400))
			)
			{
				newLogicStatePosition = 0;
			}
			else if (
				((player.getViewerSize().width < 1084))
			)
			{
				newLogicStatePosition = 1;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._no_inclusoi.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._no_inclusoi.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._no_inclusoi.style[domTransition]='left 0s, top 0s, ' + cssPrefix + 'transform 0s';
				if (me._no_inclusoi.ggCurrentLogicStatePosition == 0) {
					this.ggDx = 50;
					this.ggDy = 25;
					me._no_inclusoi.ggUpdatePosition(true);
				}
				else if (me._no_inclusoi.ggCurrentLogicStatePosition == 1) {
					this.ggDx = 55;
					this.ggDy = -135;
					me._no_inclusoi.ggUpdatePosition(true);
				}
				else {
					me._no_inclusoi.ggDx=0;
					me._no_inclusoi.ggDy=0;
					me._no_inclusoi.ggUpdatePosition(true);
				}
			}
		}
		me._no_inclusoi.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getViewerSize().height <= 400))
			)
			{
				newLogicStateScaling = 0;
			}
			else if (
				((player.getViewerSize().width < 1084))
			)
			{
				newLogicStateScaling = 1;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._no_inclusoi.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._no_inclusoi.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._no_inclusoi.style[domTransition]='left 0s, top 0s, ' + cssPrefix + 'transform 0s';
				if (me._no_inclusoi.ggCurrentLogicStateScaling == 0) {
					me._no_inclusoi.ggParameter.sx = 0.85;
					me._no_inclusoi.ggParameter.sy = 0.75;
					me._no_inclusoi.style[domTransform]=parameterToTransform(me._no_inclusoi.ggParameter);
				}
				else if (me._no_inclusoi.ggCurrentLogicStateScaling == 1) {
					me._no_inclusoi.ggParameter.sx = 0.85;
					me._no_inclusoi.ggParameter.sy = 0.85;
					me._no_inclusoi.style[domTransform]=parameterToTransform(me._no_inclusoi.ggParameter);
				}
				else {
					me._no_inclusoi.ggParameter.sx = 1;
					me._no_inclusoi.ggParameter.sy = 1;
					me._no_inclusoi.style[domTransform]=parameterToTransform(me._no_inclusoi.ggParameter);
				}
			}
		}
		me._no_inclusoi.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('INFO') == false))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._no_inclusoi.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._no_inclusoi.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._no_inclusoi.style[domTransition]='left 0s, top 0s, ' + cssPrefix + 'transform 0s';
				if (me._no_inclusoi.ggCurrentLogicStateVisible == 0) {
					me._no_inclusoi.style.visibility="hidden";
					me._no_inclusoi.ggVisible=false;
				}
				else {
					me._no_inclusoi.style.visibility="hidden";
					me._no_inclusoi.ggVisible=false;
				}
			}
		}
		me._no_inclusoi.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._no_inclusoii=document.createElement('div');
		el.ggId="N\xc3O INCLUSO-II";
		el.ggDx=7;
		el.ggDy=-2;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 421px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 307px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._no_inclusoii.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._no_inclusoii.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._cmeras_de_segurana_na_propriedade=document.createElement('div');
		els=me._cmeras_de_segurana_na_propriedade__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="C\xe2meras de seguran\xe7a na propriedade";
		el.ggDx=14;
		el.ggDy=-173;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text tooltip";
		el.ggType='text';
		hs ='';
		hs+='height : 56px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 185px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 187px;';
		hs+='height: auto;';
		hs+='background: #ffffff;';
		hs+='background: rgba(255,255,255,0);';
		hs+='border: 1px solid #55aa7f;';
		hs+='border: 1px solid rgba(85,170,127,0);';
		hs+=cssPrefix + 'background-clip: padding-box;';
		hs+='background-clip: padding-box;';
		hs+='border-radius: 10px;';
		hs+=cssPrefix + 'border-radius: 10px;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: left;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 2px 3px 2px 3px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		els.innerHTML="C\xe2meras de seguran\xe7a <br\/>na propriedade<br\/>";
		el.appendChild(els);
		me._cmeras_de_segurana_na_propriedade.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._cmeras_de_segurana_na_propriedade.logicBlock_text = function() {
			var newLogicStateText;
			if (
				((player.getVariableValue('POR') == true))
			)
			{
				newLogicStateText = 0;
			}
			else if (
				((player.getVariableValue('ENG') == true))
			)
			{
				newLogicStateText = 1;
			}
			else if (
				((player.getVariableValue('ESP') == true))
			)
			{
				newLogicStateText = 2;
			}
			else {
				newLogicStateText = -1;
			}
			if (me._cmeras_de_segurana_na_propriedade.ggCurrentLogicStateText != newLogicStateText) {
				me._cmeras_de_segurana_na_propriedade.ggCurrentLogicStateText = newLogicStateText;
				me._cmeras_de_segurana_na_propriedade.style[domTransition]='';
				if (me._cmeras_de_segurana_na_propriedade.ggCurrentLogicStateText == 0) {
					me._cmeras_de_segurana_na_propriedade.ggText="C\xe2meras de seguran\xe7a \nna propriedade\n";
					me._cmeras_de_segurana_na_propriedade__text.innerHTML=me._cmeras_de_segurana_na_propriedade.ggText;
					if (me._cmeras_de_segurana_na_propriedade.ggUpdateText) {
					me._cmeras_de_segurana_na_propriedade.ggUpdateText=function() {
						var hs="C\xe2meras de seguran\xe7a \nna propriedade\n";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._cmeras_de_segurana_na_propriedade.ggUpdatePosition) me._cmeras_de_segurana_na_propriedade.ggUpdatePosition();
					}
				}
				else if (me._cmeras_de_segurana_na_propriedade.ggCurrentLogicStateText == 1) {
					me._cmeras_de_segurana_na_propriedade.ggText="Securty cameras\non property";
					me._cmeras_de_segurana_na_propriedade__text.innerHTML=me._cmeras_de_segurana_na_propriedade.ggText;
					if (me._cmeras_de_segurana_na_propriedade.ggUpdateText) {
					me._cmeras_de_segurana_na_propriedade.ggUpdateText=function() {
						var hs="Securty cameras\non property";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._cmeras_de_segurana_na_propriedade.ggUpdatePosition) me._cmeras_de_segurana_na_propriedade.ggUpdatePosition();
					}
				}
				else if (me._cmeras_de_segurana_na_propriedade.ggCurrentLogicStateText == 2) {
					me._cmeras_de_segurana_na_propriedade.ggText="C\xe1mara de seguridad\nen la propiedad\n";
					me._cmeras_de_segurana_na_propriedade__text.innerHTML=me._cmeras_de_segurana_na_propriedade.ggText;
					if (me._cmeras_de_segurana_na_propriedade.ggUpdateText) {
					me._cmeras_de_segurana_na_propriedade.ggUpdateText=function() {
						var hs="C\xe1mara de seguridad\nen la propiedad\n";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._cmeras_de_segurana_na_propriedade.ggUpdatePosition) me._cmeras_de_segurana_na_propriedade.ggUpdatePosition();
					}
				}
				else {
					me._cmeras_de_segurana_na_propriedade.ggText="C\xe2meras de seguran\xe7a \nna propriedade\n";
					me._cmeras_de_segurana_na_propriedade__text.innerHTML=me._cmeras_de_segurana_na_propriedade.ggText;
					if (me._cmeras_de_segurana_na_propriedade.ggUpdateText) {
					me._cmeras_de_segurana_na_propriedade.ggUpdateText=function() {
						var hs="C\xe2meras de seguran\xe7a \nna propriedade\n";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._cmeras_de_segurana_na_propriedade.ggUpdatePosition) me._cmeras_de_segurana_na_propriedade.ggUpdatePosition();
					}
				}
			}
		}
		me._cmeras_de_segurana_na_propriedade.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 2;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._no_inclusoii.appendChild(me._cmeras_de_segurana_na_propriedade);
		el=me._rectangle_219=document.createElement('div');
		el.ggId="Rectangle 2";
		el.ggDx=-115;
		el.ggDy=-175;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 200px;';
		hs+='border-radius : 200px;';
		hs+='background : #ffffff;';
		hs+='border : 1px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 32px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 30px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._rectangle_219.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_219.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._no_inclusoii.appendChild(me._rectangle_219);
		el=me._ht_image_info119=document.createElement('div');
		el.ggId="ht_image_info-1";
		el.ggDx=-115;
		el.ggDy=-175;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 100px;';
		hs+='border-radius : 100px;';
		hs+='background : #ffffff;';
		hs+='border : 1px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 50px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_image_info119.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._ht_image_info119.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._ht_image_info219=document.createElement('div');
		el.ggId="ht_image_info-2";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 200px;';
		hs+='border-radius : 200px;';
		hs+='border : 4px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 32px;';
		hs+='left : -10000px;';
		hs+='opacity : 0.8;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 30px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_image_info219.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._ht_image_info219.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._ht_image_info119.appendChild(me._ht_image_info219);
		me._no_inclusoii.appendChild(me._ht_image_info119);
		el=me._image_119=document.createElement('div');
		els=me._image_119__img=document.createElement('img');
		els.className='ggskin ggskin_image_119';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACEAAAAdCAYAAAAkXAW5AAAGRElEQVRIiY1XT2hTTxD+3u6+lwRSNaLQgxqiqeAhiAgFb4LFg6Ag1IN4FFqK0UtS2xy0vViV2JQUKgqt9CaCpx6lehHxJgj1VHIQxEulpWnSvJe3u/M71F1f0j/8BkLe28zOzH4z883GISJCl5glx3EAAO12G57ndfymtQbnHERk9YgIWmswxuyaEbMefZZSQggBZ68g9hKlFIgIQohdAe/n2OzjnHe8O45jPwDA9nNKRCAiSCkBAJxzG4BZA3bQ4pxbg1prSCmhlLL7iAhhGO44ZAyMMbTb7X82tNYUNWgCMN+MMWitLfxSSjDGwDnvcGROGX03Ek3FXuIopcgE8H/g7EbLcRxorW3AURsm58YGEUEpZRE168zAs1chSSnh+76FUkppUWq323ZPd4'+
			'7b7XaHM8aYrQUhBMIwtMgCQGeV4V8tKKWglMLAwABu376NBw8eYHV1FdPT0/jz5w9SqRTCMLTpYYzZvQAghIDrusjn87hw4UKHfdd1Ee0HPjk5ORltSfMx6NTrdczMzICIcOPGDQBArVZDq9WC4zjWqNYaQRCAc45YLIZ6vY7V1VWsra3h2rVrYIzh169f+P37N44fPw7HcaCU2qkVIqIgCCgq5r3RaJDWmsrlMqXTaXr+/DkREWmtD/wmImq323Tnzh26desWffz4kYaHhymTydDs7OwufwKAJSKTe8/z0Gq18O7dO/T19aFYLIIxhlevXoGIMDY2ZovKFJ9B0qTEdV2EYYgfP35gaGgIly5dguu6kFLC87yONApDNpxzCysAJBIJrK+vY2RkBCsrKxgZGYHWGvPz83AcBw8fPuwgryhhmSL0PA9Hjx7Fy5cvkcvl'+
			'cOrUKXvARCJhfYkoyZheNqeLx+PY2tqClBKJRALFYhHb29t48+aNRQSANWrQdF3XtmA6nUYul9spwL/dkEgk/tWD6Y4oCUX53fd99PT0gHNug3z8+DGEEFhYWIDWGqVSyQbQTUqG5AyfcM5Rr9c7UggAwuQ2yhPGUDwex+bmps211hrNZhOlUgmMMSwuLsLzPOTzecRiMSilLApaawghsLKygrdv3+LmzZvgnCOZTEIIAa211WcGIuNYKQUppeX2np4eNBoNMMbg+z6uXr2KT58+YXx8HHfv3sXc3BwWFhawtbVl2dHYM5BPTEygv7/fHtT3fTDGbMDMOI7ODSEEPM9DEARoNptIJpMAgPn5eWxsbKC3txcAUCwWkc/nMTU1ZQs2SlgAcO7cOXz9+hXj4+M4duwYtNaIx+PY3t62OlBKdfSslNI+Ly8v0+nTpymTyV'+
			'A2m6VMJkOFQmEXL5TLZcpkMvTixQsiIlpaWrL6T548sbpSSlpfXyfj0+wXZqwaruCcIwxDOI6DK1euYHFxEd++fQMAfP78GbVaDY7joNFoIJlMQilleaRarUIphdHRUaRSKfz8+RPXr1+3HcM5RyqV2tVFICLyfZ+IiKKoaK0pDEOSUtqIv3//Tul0mu7fv09aa1JK0aNHj+j9+/dERFSpVOjkyZM0PT1NYRh2INxsNi2TRn3Q3/x1pKLVatnvubk5Onv2LGmt7eaJiQnq7e2lixcv0uXLl+n8+fO0vLxMvu9TGIY0OztL2WyWnj17RmEYUhAENiCttXUcTTvMiQwKUTTK5TKdOHGCuqVWq1FfXx8NDg7SxsZGx6mIiJ4+fUrZbJYqlYpdiyITDYCISETvBEbCMNzhdCE6iCgIAjQaDSwtLaFer2N4eBhHjhyx+TVk'+
			'NTo6Ctd1Ua1WEQQBxsbGLDkFQYBYLGbpgHO+MztMAIbJomSltUY2m0UYhjh06BA2NzcRi8UwODiIgYEBewCz1wRUKBSgtbYUXyqV7GDrDsZyJ0WGkVHwfd9Wu5QSUkocPnwY/f39yOVyHRUuhLD7DCImkNevX8PzPBQKBXsdtJ1huqObK8y8n5mZoXQ6vSuP3foHiVKKKpUKnTlzhqampmxxtlotq8MMxZphA+zcJ4gInHN4ngff9+0EjA6p6LV9P2GM4d69exgaGsKHDx/QaDTsmCfDrCYaw2jRKv/y5QtVq1XLCVHdqN7/lbW1tT337voHZkavuaKbC0/3PWFXXg8Qg55B2jybKer8DabjCm6gjv7/7L78RNcOkv1sGwoAgP8AMbNJpmdNeioAAAAASUVORK5CYII=';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 1";
		el.ggDx=-115;
		el.ggDy=-175;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 22px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 23px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._image_119.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_119.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._no_inclusoii.appendChild(me._image_119);
		el=me._mquina_de_lavar=document.createElement('div');
		els=me._mquina_de_lavar__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="M\xe1quina de Lavar";
		el.ggDx=9;
		el.ggDy=-117;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text tooltip";
		el.ggType='text';
		hs ='';
		hs+='height : 27px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 170px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 172px;';
		hs+='height: auto;';
		hs+='background: #ffffff;';
		hs+='background: rgba(255,255,255,0);';
		hs+='border: 1px solid #55aa7f;';
		hs+='border: 1px solid rgba(85,170,127,0);';
		hs+=cssPrefix + 'background-clip: padding-box;';
		hs+='background-clip: padding-box;';
		hs+='border-radius: 10px;';
		hs+=cssPrefix + 'border-radius: 10px;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: left;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 2px 3px 2px 3px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		els.innerHTML="M\xe1quina de Lavar";
		el.appendChild(els);
		me._mquina_de_lavar.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._mquina_de_lavar.logicBlock_text = function() {
			var newLogicStateText;
			if (
				((player.getVariableValue('POR') == true))
			)
			{
				newLogicStateText = 0;
			}
			else if (
				((player.getVariableValue('ENG') == true))
			)
			{
				newLogicStateText = 1;
			}
			else if (
				((player.getVariableValue('ESP') == true))
			)
			{
				newLogicStateText = 2;
			}
			else {
				newLogicStateText = -1;
			}
			if (me._mquina_de_lavar.ggCurrentLogicStateText != newLogicStateText) {
				me._mquina_de_lavar.ggCurrentLogicStateText = newLogicStateText;
				me._mquina_de_lavar.style[domTransition]='';
				if (me._mquina_de_lavar.ggCurrentLogicStateText == 0) {
					me._mquina_de_lavar.ggText="M\xe1quina de Lavar";
					me._mquina_de_lavar__text.innerHTML=me._mquina_de_lavar.ggText;
					if (me._mquina_de_lavar.ggUpdateText) {
					me._mquina_de_lavar.ggUpdateText=function() {
						var hs="M\xe1quina de Lavar";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._mquina_de_lavar.ggUpdatePosition) me._mquina_de_lavar.ggUpdatePosition();
					}
				}
				else if (me._mquina_de_lavar.ggCurrentLogicStateText == 1) {
					me._mquina_de_lavar.ggText="Washer";
					me._mquina_de_lavar__text.innerHTML=me._mquina_de_lavar.ggText;
					if (me._mquina_de_lavar.ggUpdateText) {
					me._mquina_de_lavar.ggUpdateText=function() {
						var hs="Washer";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._mquina_de_lavar.ggUpdatePosition) me._mquina_de_lavar.ggUpdatePosition();
					}
				}
				else if (me._mquina_de_lavar.ggCurrentLogicStateText == 2) {
					me._mquina_de_lavar.ggText="M\xe1quina de Lavar";
					me._mquina_de_lavar__text.innerHTML=me._mquina_de_lavar.ggText;
					if (me._mquina_de_lavar.ggUpdateText) {
					me._mquina_de_lavar.ggUpdateText=function() {
						var hs="M\xe1quina de Lavar";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._mquina_de_lavar.ggUpdatePosition) me._mquina_de_lavar.ggUpdatePosition();
					}
				}
				else {
					me._mquina_de_lavar.ggText="M\xe1quina de Lavar";
					me._mquina_de_lavar__text.innerHTML=me._mquina_de_lavar.ggText;
					if (me._mquina_de_lavar.ggUpdateText) {
					me._mquina_de_lavar.ggUpdateText=function() {
						var hs="M\xe1quina de Lavar";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._mquina_de_lavar.ggUpdatePosition) me._mquina_de_lavar.ggUpdatePosition();
					}
				}
			}
		}
		me._mquina_de_lavar.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 2;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._no_inclusoii.appendChild(me._mquina_de_lavar);
		el=me._rectangle_218=document.createElement('div');
		el.ggId="Rectangle 2";
		el.ggDx=-116;
		el.ggDy=-117;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 200px;';
		hs+='border-radius : 200px;';
		hs+='background : #ffffff;';
		hs+='border : 1px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 32px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 30px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._rectangle_218.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_218.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._no_inclusoii.appendChild(me._rectangle_218);
		el=me._ht_image_info118=document.createElement('div');
		el.ggId="ht_image_info-1";
		el.ggDx=-116;
		el.ggDy=-117;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 100px;';
		hs+='border-radius : 100px;';
		hs+='background : #ffffff;';
		hs+='border : 1px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 50px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_image_info118.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._ht_image_info118.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._ht_image_info218=document.createElement('div');
		el.ggId="ht_image_info-2";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 200px;';
		hs+='border-radius : 200px;';
		hs+='border : 4px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 32px;';
		hs+='left : -10000px;';
		hs+='opacity : 0.8;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 30px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_image_info218.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._ht_image_info218.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._ht_image_info118.appendChild(me._ht_image_info218);
		me._no_inclusoii.appendChild(me._ht_image_info118);
		el=me._image_118=document.createElement('div');
		els=me._image_118__img=document.createElement('img');
		els.className='ggskin ggskin_image_118';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAAAfCAYAAAAbW8YEAAAF40lEQVRIiaVWS2hTTRT+5j5zU0WQKoJSrFgaFxUUKroRdKluxJWgWLBoSYvV1JbEgBs3qRhTmsa2UHQhCF2I4CO4E1zqporga1eXQtXaNM2dx/kX7Yw3qfmV/z+re2fOzJnz+L5zGBERGoSIwDmH53mNW02FiEBEYIyBMfavukwbJSIIIWDbNizL+mtj/0UsIoKUEowxuK4Ly7LMq2u12h8vUEqhMVj6fDNhjeHVv38K0f8RSwgBAJBSIgzDupzovT8JEUEptW6tmbdWVEkXThiGICI4jvPXr49GRhtsalRfrBWUUnAcB4yxv8pp9Gz037KspgXJhBBk2zYAgHOOMAzR0tKC79+/Y3Z29q8MR+tAF2UQBGhpacGZM2fW6Tu2bRt8LSws4NSpUzh58i'+
			'QGBwfR1taGS5cuQUpZF24hhPFESgmllIGalBK2bUMIAc/zsHnzZhw7dgxCiF/pIiLinJMQgoiIisUibdu2jSYmJkgIYdaJiKSURESklKJG0Xpah4iovb2dpqenKQzDurOOfoGUEtVqFX19fRBC4ObNm1hZWcHQ0JAJi2VZqFarCILApMO2beOdDm1Ufv78ac7qVDiO44BzDtd18eDBAyQSCfT394NzjqmpKRARUqkUGGP48uULnj9/jrm5OSwvL+PAgQPo7u5Gd3e3uYNzbkLrOA48z4Prur+KiDE4+hWccywsLCCZTOLNmzcYHh6GZVkolUrwPA/JZBJzc3MoFArYs2cP4vE4xsbGsLKygn379mFychKtra11fL20tAQABsNEBNu2V3OqpVgsUltbW12uRkdHqb29nQqFwrr8hWFIMzMzlEgkaP/+/bS4uEhSSqpU'+
			'KkRE1NnZSYVCoS7PRESWfoWUEgDgeR4452ZtZGQEvb29uHPnDnK5XF1+AOD8+fO4f/8+lpeXcf36dQBAPB6HEMIwXCNeLb3AGIMmf7326tUrlMtlXLt2Db29vbh79y5yuZzR1bnq6upCNpvF48eP8eHDBwOvKI1qmgXWuowWjTd96bNnzzAwMIDXr19jaGgIfX19mJmZwdjYWB1p+L6P06dPw/d9lMtl04/j8Xhd5Xuet/qgRs7UrY0xhvn5eXR0dGDv3r2wbRsDAwOoVqsYHx9HLBbDhQsX6iCyc+dOfP782RBHpVLB76SO0bXXOryLi4v49u2bwbHnechkMmCMIZfLYWlpCVevXgUAVCoVKKXgui6UUrAsy+C5qVHd0oQQJrydnZ2Yn583wNf5TqfT2LhxI/L5PADg8uXLePToET5+/IgjR46Yx+uCXGdUh1JXWT'+
			'T5x48fx+zsLJ4+fYoTJ05AKWV0k8kkwjDExMQEOOfIZDIIggAdHR2wbRu1Wg26kfxreLWH+vvQoUM4fPgw0uk0du3ahUQiAQDG+JUrV8A5x71792BZFlKpFHQD8X2/6fRh6Q1tzHEc8+26Lm7duoUtW7bg7NmzePjwIaSU4JybYkmn0zh37hympqZQLBbrotVs8jCeRo1KKQ3Otm7dinK5jGw2i5GREdy4cQO7d+9GEAT49OkTstksMpkMfN/H5OQkwjBEOp2GlLIOMr81qpRaN9np/hcEAUZHR9HT04MXL17g/fv32LRpE44ePYqDBw+CiEw3KpVKCIIA/f39mJ6exrt371Cr1eD7/q8RJsqLpVKJtm/fbvg12kujwjk3fBqGodFTSlE+n6cdO3bQ7du3SSlFP378MGe0OBqTtVoNQgjDm9pL3SvrwrO2p3EZ1Uul'+
			'UiAijI+PQwiB4eFhk199jxOGITzPg+/76OrqAhEhkUigWq3CcRwzhmhq00b1mm3bqFQqiMVicBwH+Xweg4ODUErhyZMnuHjxIuLxOGKxGIBV7LI1j00uX758ibdv3xpCp7WZNgol7aXe8zzP8DYRoaenBxs2bMDXr1/R2tq6jl4Z55yi862mMG1EM5RuBHqtccTUA5oOt54kNDKEEBBCIAiCVU91L43mTldc9FLLstYN1UIIuK5r6kB7H50ytWidfwA9BVsskdMrKgAAAABJRU5ErkJggg==';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 1";
		el.ggDx=-116;
		el.ggDy=-117;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 23px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 23px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._image_118.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_118.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._no_inclusoii.appendChild(me._image_118);
		el=me._secadora=document.createElement('div');
		els=me._secadora__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Secadora";
		el.ggDx=29;
		el.ggDy=-51;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text tooltip";
		el.ggType='text';
		hs ='';
		hs+='height : 48px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 213px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 215px;';
		hs+='height: auto;';
		hs+='background: #ffffff;';
		hs+='background: rgba(255,255,255,0);';
		hs+='border: 1px solid #55aa7f;';
		hs+='border: 1px solid rgba(85,170,127,0);';
		hs+=cssPrefix + 'background-clip: padding-box;';
		hs+='background-clip: padding-box;';
		hs+='border-radius: 10px;';
		hs+=cssPrefix + 'border-radius: 10px;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: left;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 2px 3px 2px 3px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		els.innerHTML="Secadora";
		el.appendChild(els);
		me._secadora.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._secadora.logicBlock_text = function() {
			var newLogicStateText;
			if (
				((player.getVariableValue('POR') == true))
			)
			{
				newLogicStateText = 0;
			}
			else if (
				((player.getVariableValue('ENG') == true))
			)
			{
				newLogicStateText = 1;
			}
			else if (
				((player.getVariableValue('ESP') == true))
			)
			{
				newLogicStateText = 2;
			}
			else {
				newLogicStateText = -1;
			}
			if (me._secadora.ggCurrentLogicStateText != newLogicStateText) {
				me._secadora.ggCurrentLogicStateText = newLogicStateText;
				me._secadora.style[domTransition]='';
				if (me._secadora.ggCurrentLogicStateText == 0) {
					me._secadora.ggText="Secadora";
					me._secadora__text.innerHTML=me._secadora.ggText;
					if (me._secadora.ggUpdateText) {
					me._secadora.ggUpdateText=function() {
						var hs="Secadora";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._secadora.ggUpdatePosition) me._secadora.ggUpdatePosition();
					}
				}
				else if (me._secadora.ggCurrentLogicStateText == 1) {
					me._secadora.ggText="Dryer";
					me._secadora__text.innerHTML=me._secadora.ggText;
					if (me._secadora.ggUpdateText) {
					me._secadora.ggUpdateText=function() {
						var hs="Dryer";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._secadora.ggUpdatePosition) me._secadora.ggUpdatePosition();
					}
				}
				else if (me._secadora.ggCurrentLogicStateText == 2) {
					me._secadora.ggText="Secadora";
					me._secadora__text.innerHTML=me._secadora.ggText;
					if (me._secadora.ggUpdateText) {
					me._secadora.ggUpdateText=function() {
						var hs="Secadora";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._secadora.ggUpdatePosition) me._secadora.ggUpdatePosition();
					}
				}
				else {
					me._secadora.ggText="Secadora";
					me._secadora__text.innerHTML=me._secadora.ggText;
					if (me._secadora.ggUpdateText) {
					me._secadora.ggUpdateText=function() {
						var hs="Secadora";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._secadora.ggUpdatePosition) me._secadora.ggUpdatePosition();
					}
				}
			}
		}
		me._secadora.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 2;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._no_inclusoii.appendChild(me._secadora);
		el=me._rectangle_217=document.createElement('div');
		el.ggId="Rectangle 2";
		el.ggDx=-117;
		el.ggDy=-61;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 200px;';
		hs+='border-radius : 200px;';
		hs+='background : #ffffff;';
		hs+='border : 1px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 32px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 30px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._rectangle_217.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_217.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._no_inclusoii.appendChild(me._rectangle_217);
		el=me._ht_image_info117=document.createElement('div');
		el.ggId="ht_image_info-1";
		el.ggDx=-117;
		el.ggDy=-61;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 100px;';
		hs+='border-radius : 100px;';
		hs+='background : #ffffff;';
		hs+='border : 1px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 50px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_image_info117.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._ht_image_info117.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._ht_image_info217=document.createElement('div');
		el.ggId="ht_image_info-2";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 200px;';
		hs+='border-radius : 200px;';
		hs+='border : 4px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 32px;';
		hs+='left : -10000px;';
		hs+='opacity : 0.8;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 30px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_image_info217.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._ht_image_info217.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._ht_image_info117.appendChild(me._ht_image_info217);
		me._no_inclusoii.appendChild(me._ht_image_info117);
		el=me._image_117=document.createElement('div');
		els=me._image_117__img=document.createElement('img');
		els.className='ggskin ggskin_image_117';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAcCAYAAACUJBTQAAAFkElEQVRIiY2WTUhVXxfGf+frftjH4JIRCKKk0sCEgiIi6GNQBFJCReGgD0S0krpduZlZVBMtjZS0G0UaETWoQYM+BncS6VR0EgRNhJoGReX1es4+Z70D2/u9933p739Nzj7n7L3XXs9a63m2JSISRRG2bQMgIliWhVIK13VZzvT8KIqwLAsAy7IQETO29QBAKWV+Oo6zrIPStaXOSt8BbH0CEcF1XWzbRillJvwbi6IIx3GIoogwDPF9H9u2jUNL9NFLFmjoSiH4myml8DyvbN3/7uXqsBYXF5mfnyeVSvH7928ePnxIIpEgDMN/dKLXe55HsVjEsiwWFhaora2lpaWFeDyOq0/i+z7Nzc0cOXKECxcu0NjYyJkzZ0zIf7NYLMb8/DyO46CUYuXKlc'+
			'ZRZWUle/bsARERpZREUST9/f1SW1srg4ODEkWRKKVkOdNzoigyT6WU1NTUyPDwsIiIuCKCbdsEQUBvby/JZJI7d+7geR7pdPofo4ClKgzDEMdxeP36NZs3b6aqqqosP65lWYRhyNOnT2lsbOT06dNEUcTY2BhBEJDNZgGYm5vj7du3zM3N8f37d5qamti+fTtNTU0kEgkA7t27RzqdZu3atUsJ132mw759+7bU19dL6fv69etlYGBAlFLy6tUr2bhxo+zYsUPq6+ulqqpKGhoa5MCBA/LlyxezbnFxUUREGhoaZGhoaAmu0gTqSgrDkEwmg1KKJ0+eYFkWPT09tLS00Nrayrdv33j27Bnz8/OcO3eOQ4cO8e7dO9asWUMsFgPA930qKioAsHWbLC4umqdt22bjU6dOcf/+ffr7+wFoa2tjfHycnTt3Mjs7i23bFItF'+
			'bty4QRRFBEFgmnNhYWEpJ/pDRUUFlmURj8cREd6/f8/Pnz/JZDLEYjFyuRye55HNZgmCgFwux8TEBB0dHdTU1HDlyhU+f/7Mhg0bDBqe5y1FoiFSShnPAB8+fOD69es4jkNXVxcdHR2MjY1x69YtPM8jlUrR2trKxYsXcRyHIAjI5/MopYClbtcouToXYRgSj8eNk+npaWprazl+/DgnTpwgk8kgIjx48AARobu7m2PHjpHP58lmsyQSCQOfLm1TwprSHccpq/lkMsnMzAzJZJLDhw8D0N3dDcDdu3dZsWIFnZ2d+L7PwYMHmZmZIZVKlfGeHruu65qNS9m0pqaGjx8/cvPmTZqbm7l8+TKbNm2iu7ubQqHA6OgoSinS6TT79u2jsbGRuro6lFI4jkMikTDQmcTrZAHYts3+/ft5/vw5xWKRwcFBXr58ybp16wC4ev'+
			'Uqq1atYmhoCKUU2WyWgYEBKisrTQMGQfDfSDTva6LUoe7atYuWlhauXbtGEAS0tbXR1dXF5OQkhULBUE4ul8P3ffr6+kwOwjAsU0dXf9QYhmFoBKynp4dPnz7x9etXtmzZwtTUFO3t7WzdupXdu3eTTqfxfZ/Hjx+b+TrHQRCYqFy9oeu6ZY2olKK6upo3b97Q19dHe3s7juNg2zY/fvygubmZs2fPks1miaKI8fFxPM8zTJFMJo1MuPBH7G27TJd1uBUVFQwPD3P06FGmp6eZnZ0llUpRXV3Ntm3bALh06RK2bTM6OgpAJpPh0aNHzMzMLOGnNWBkZETq6upERMT3/TLNKBaLf9UTrSNhGMrIyIgh1VKyNJHocgPwPK8sKk01lmURBAEiQiwWM/iHYYht25w/f55iscjExAQiQm9v7xIq8qcEJicnOXnypIFObyDl'+
			'94z/s9LbTS6XY+/evQwPD/PixQvy+TyrV6/GCsNQLMvCsiympqaYnZ01OfF9f9kLno7CdV2iKKKzs5NYLMavX7+M3lt/dNpsVigUjA78W9OMUQplqRm4wjBEKWXw1825HFxavjVr6Nxp9nAch/8AB1imjGNbw7oAAAAASUVORK5CYII=';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 1";
		el.ggDx=-117;
		el.ggDy=-61;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 23px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 23px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._image_117.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_117.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._no_inclusoii.appendChild(me._image_117);
		el=me._frigobar=document.createElement('div');
		els=me._frigobar__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Frigobar";
		el.ggDx=24;
		el.ggDy=-4;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text tooltip";
		el.ggType='text';
		hs ='';
		hs+='height : 27px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 205px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 207px;';
		hs+='height: auto;';
		hs+='background: #ffffff;';
		hs+='background: rgba(255,255,255,0);';
		hs+='border: 1px solid #55aa7f;';
		hs+='border: 1px solid rgba(85,170,127,0);';
		hs+=cssPrefix + 'background-clip: padding-box;';
		hs+='background-clip: padding-box;';
		hs+='border-radius: 10px;';
		hs+=cssPrefix + 'border-radius: 10px;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: left;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 2px 3px 2px 3px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		els.innerHTML="Ar condicionado";
		el.appendChild(els);
		me._frigobar.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._frigobar.logicBlock_text = function() {
			var newLogicStateText;
			if (
				((player.getVariableValue('POR') == true))
			)
			{
				newLogicStateText = 0;
			}
			else if (
				((player.getVariableValue('ENG') == true))
			)
			{
				newLogicStateText = 1;
			}
			else if (
				((player.getVariableValue('ESP') == true))
			)
			{
				newLogicStateText = 2;
			}
			else {
				newLogicStateText = -1;
			}
			if (me._frigobar.ggCurrentLogicStateText != newLogicStateText) {
				me._frigobar.ggCurrentLogicStateText = newLogicStateText;
				me._frigobar.style[domTransition]='';
				if (me._frigobar.ggCurrentLogicStateText == 0) {
					me._frigobar.ggText="Ar condicionado";
					me._frigobar__text.innerHTML=me._frigobar.ggText;
					if (me._frigobar.ggUpdateText) {
					me._frigobar.ggUpdateText=function() {
						var hs="Ar condicionado";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._frigobar.ggUpdatePosition) me._frigobar.ggUpdatePosition();
					}
				}
				else if (me._frigobar.ggCurrentLogicStateText == 1) {
					me._frigobar.ggText="Air conditioning";
					me._frigobar__text.innerHTML=me._frigobar.ggText;
					if (me._frigobar.ggUpdateText) {
					me._frigobar.ggUpdateText=function() {
						var hs="Air conditioning";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._frigobar.ggUpdatePosition) me._frigobar.ggUpdatePosition();
					}
				}
				else if (me._frigobar.ggCurrentLogicStateText == 2) {
					me._frigobar.ggText="Aire condicionado";
					me._frigobar__text.innerHTML=me._frigobar.ggText;
					if (me._frigobar.ggUpdateText) {
					me._frigobar.ggUpdateText=function() {
						var hs="Aire condicionado";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._frigobar.ggUpdatePosition) me._frigobar.ggUpdatePosition();
					}
				}
				else {
					me._frigobar.ggText="Ar condicionado";
					me._frigobar__text.innerHTML=me._frigobar.ggText;
					if (me._frigobar.ggUpdateText) {
					me._frigobar.ggUpdateText=function() {
						var hs="Ar condicionado";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._frigobar.ggUpdatePosition) me._frigobar.ggUpdatePosition();
					}
				}
			}
		}
		me._frigobar.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 2;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._no_inclusoii.appendChild(me._frigobar);
		el=me._rectangle_216=document.createElement('div');
		el.ggId="Rectangle 2";
		el.ggDx=-117;
		el.ggDy=-3;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 200px;';
		hs+='border-radius : 200px;';
		hs+='background : #ffffff;';
		hs+='border : 1px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 32px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 30px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._rectangle_216.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_216.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._no_inclusoii.appendChild(me._rectangle_216);
		el=me._ht_image_info116=document.createElement('div');
		el.ggId="ht_image_info-1";
		el.ggDx=-117;
		el.ggDy=-3;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 100px;';
		hs+='border-radius : 100px;';
		hs+='background : #ffffff;';
		hs+='border : 1px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 50px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_image_info116.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._ht_image_info116.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._ht_image_info216=document.createElement('div');
		el.ggId="ht_image_info-2";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 200px;';
		hs+='border-radius : 200px;';
		hs+='border : 4px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 32px;';
		hs+='left : -10000px;';
		hs+='opacity : 0.8;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 30px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_image_info216.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._ht_image_info216.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._ht_image_info116.appendChild(me._ht_image_info216);
		me._no_inclusoii.appendChild(me._ht_image_info116);
		el=me._image_116=document.createElement('div');
		els=me._image_116__img=document.createElement('img');
		els.className='ggskin ggskin_image_116';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAkCAYAAACe0YppAAAFhUlEQVRYhe2XS2hT6xbHf/uVpGkKbYhIJVAnJqjYKBjB4lShRONzoLGIFiU4dlKhosGIFOmwBXFUSn1bRHBgwSLuiU6c2EEnrVaQqo3vkCb78e0zyN1fm6rnnHsHV7j3LAiEb+9v/df7v7bieZ7HbxD1d4D+A/wP8P8msA7geR6KogDgui6KomCaJn19fbx9+5ampiaq1Sq6rqMoCoqiIIRAVet2+/89z8PzPBzHIRQKsbi4SGtrK8VikWw22wjsX3JdFwBN07Asi1u3bgHQ39/Pp0+fCAQCqKqKoiioqioNASSQEALP8xBCYFkW0WiUkZERJiYmyGQyuK6Lpmlomoa+EhQgEAhQKpXo6Ojg+PHjBAIBaannebiuK0F9cRwHTdNk5AAsy+Lp06fMz8'+
			'9LQF9UX5l/6Loutm3T0tKCruvyfHBwkK6uLlKpFPl8nqmpKRzHwXEcpqamyOfzpFIpurq6GBwcbHAkGAxK5yTwcut9qwEWFxexbRtN0xgdHWVoaIi2tja6u7sxTZPe3l5UVUVVVXp7ezFNk+7ubtra2hgaGmJ0dBRN06hWq2iaJtPgG9AQLx/UMAxs2yYSieB5HqZpsmbNGu7cuUM4HKazs5OzZ88yNzcHwLt377h8+TJHjx6lUqmwa9cuTNOkp6eHSCRCpVLBMAwAFEXB8zxUTdNwHEdWc7ValS9YloWiKIRCIRzHIRwOI4RAURQcx2nIr1/p4XBYFpuiKNi2jWVZP1S/DqDrugxBKBTC8zxCoZC8kE6nefjwIfl8ntWrV2OaJslkkvb2dgCSySTXrl1jenqa9+/fs7CwQDqdljUTjUaxbVu2nywuIURDxfke+S8e'+
			'OXKEU6dOMTs7y/3794nH41y9ehVd1wkGgwwPDxONRnnw4AGvX7/m9OnTHD58uA7wr9YzDENiqKramONfia7r9PX1cebMGZkrWBo8yWSSe/fuYds2hmE0hPSXOv8OsBCCb9++MTk5SalUYtu2baxfv55gMCjD+fLlS54/f040GmXnzp20tLQ09PR/BDwzM0M2m5XtIYQgl8tRLBYBKBaLjIyMyPq4cOEC4+PjJBKJX+r8WyQxNjYGQKFQ4MmTJ6TTae7evcuHDx9YWFhgbGyM7du38+jRI65cuUKtVuPmzZt/qvMvgR3HYW5ujng8TjabJR6Pc/LkSb5+/crHjx/5/Pkz5XKZEydO0NHRQSaTYe3atbx69eqHafVvAeu6TiKRYGZmhtnZWb58+cLjx49pbW2ltbWVSCRCLBZjYmKCcrnM9PQ0b968Yd26dQ2d8oPevw'+
			'IGOHjwINevXyeTyaCqKrVajWPHjtHe3o7neezbt48bN24wPj6OqqqEw2FyudyfO7TywG8Jnx6FECQSCSYnJ3n27BmlUoktW7aQSqWAes8XCgUOHDjAixcviMVi7Nixg1gshm3bkqOhkff1n4FCndIMw5D9uGrVKvbs2UOtVpO87IumaWzatImNGzfKFoP6zA8EAg1j2Odk1XVdOaF8FhFCEAwGEUIAcO7cOQqFAlCnuIGBAS5duoQQAtd1uXjxIgMDAxL0/Pnz9Pf3A1Aul2lubgaWZrXjOEseW5bVQPj+mBNCcOjQIXnBcRx2796NYRhyDdq7dy9CCEkc+/fvl6Ftbm7m+/fvEljX9fpv+dbh70uGYdQZRNdRVZVUKrWUG12ns7NTggJs2LBBPgPYvHmzzKfPWv5znwN03xIf0M/x1q1bGR4eJpFI4Lqu7MmV+fUj'+
			'4e9iK9cogJ6eHhlRTdPqRlUqFa+pqemnBXb79m3m5+dlZfqrkL8e+R65riuV2rYtcymEIBaLkcvl5D0J7H+mLrd0ech/Jn7oVq63UJ90fsiXs9TyKDmOswT835b/v0+Y3wb8B49j0rz1ASz+AAAAAElFTkSuQmCC';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 1";
		el.ggDx=-117;
		el.ggDy=-3;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 23px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 23px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._image_116.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_116.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._no_inclusoii.appendChild(me._image_116);
		el=me._detector_de_fumaa=document.createElement('div');
		els=me._detector_de_fumaa__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Detector de fuma\xe7a";
		el.ggDx=29;
		el.ggDy=52;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text tooltip";
		el.ggType='text';
		hs ='';
		hs+='height : 62px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 221px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 223px;';
		hs+='height: auto;';
		hs+='background: #ffffff;';
		hs+='background: rgba(255,255,255,0);';
		hs+='border: 1px solid #55aa7f;';
		hs+='border: 1px solid rgba(85,170,127,0);';
		hs+=cssPrefix + 'background-clip: padding-box;';
		hs+='background-clip: padding-box;';
		hs+='border-radius: 10px;';
		hs+=cssPrefix + 'border-radius: 10px;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: left;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 2px 3px 2px 3px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		els.innerHTML="Detector de fuma\xe7a<br\/>N\xe3o h\xe1 detector de <br\/>fuma\xe7a na propriedade";
		el.appendChild(els);
		me._detector_de_fumaa.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._detector_de_fumaa.logicBlock_text = function() {
			var newLogicStateText;
			if (
				((player.getVariableValue('POR') == true))
			)
			{
				newLogicStateText = 0;
			}
			else if (
				((player.getVariableValue('ENG') == true))
			)
			{
				newLogicStateText = 1;
			}
			else if (
				((player.getVariableValue('ESP') == true))
			)
			{
				newLogicStateText = 2;
			}
			else {
				newLogicStateText = -1;
			}
			if (me._detector_de_fumaa.ggCurrentLogicStateText != newLogicStateText) {
				me._detector_de_fumaa.ggCurrentLogicStateText = newLogicStateText;
				me._detector_de_fumaa.style[domTransition]='';
				if (me._detector_de_fumaa.ggCurrentLogicStateText == 0) {
					me._detector_de_fumaa.ggText="Detector de fuma\xe7a\nN\xe3o h\xe1 detector de \nfuma\xe7a na propriedade";
					me._detector_de_fumaa__text.innerHTML=me._detector_de_fumaa.ggText;
					if (me._detector_de_fumaa.ggUpdateText) {
					me._detector_de_fumaa.ggUpdateText=function() {
						var hs="Detector de fuma\xe7a\nN\xe3o h\xe1 detector de \nfuma\xe7a na propriedade";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._detector_de_fumaa.ggUpdatePosition) me._detector_de_fumaa.ggUpdatePosition();
					}
				}
				else if (me._detector_de_fumaa.ggCurrentLogicStateText == 1) {
					me._detector_de_fumaa.ggText="Smoke alarm\nThere is no smoke\nalarm on the property";
					me._detector_de_fumaa__text.innerHTML=me._detector_de_fumaa.ggText;
					if (me._detector_de_fumaa.ggUpdateText) {
					me._detector_de_fumaa.ggUpdateText=function() {
						var hs="Smoke alarm\nThere is no smoke\nalarm on the property";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._detector_de_fumaa.ggUpdatePosition) me._detector_de_fumaa.ggUpdatePosition();
					}
				}
				else if (me._detector_de_fumaa.ggCurrentLogicStateText == 2) {
					me._detector_de_fumaa.ggText="Detector de humo\nNo hay detector de\nhumo en la propiedad";
					me._detector_de_fumaa__text.innerHTML=me._detector_de_fumaa.ggText;
					if (me._detector_de_fumaa.ggUpdateText) {
					me._detector_de_fumaa.ggUpdateText=function() {
						var hs="Detector de humo\nNo hay detector de\nhumo en la propiedad";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._detector_de_fumaa.ggUpdatePosition) me._detector_de_fumaa.ggUpdatePosition();
					}
				}
				else {
					me._detector_de_fumaa.ggText="Detector de fuma\xe7a\nN\xe3o h\xe1 detector de \nfuma\xe7a na propriedade";
					me._detector_de_fumaa__text.innerHTML=me._detector_de_fumaa.ggText;
					if (me._detector_de_fumaa.ggUpdateText) {
					me._detector_de_fumaa.ggUpdateText=function() {
						var hs="Detector de fuma\xe7a\nN\xe3o h\xe1 detector de \nfuma\xe7a na propriedade";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._detector_de_fumaa.ggUpdatePosition) me._detector_de_fumaa.ggUpdatePosition();
					}
				}
			}
		}
		me._detector_de_fumaa.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 2;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._no_inclusoii.appendChild(me._detector_de_fumaa);
		el=me._rectangle_215=document.createElement('div');
		el.ggId="Rectangle 2";
		el.ggDx=-118;
		el.ggDy=56;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 200px;';
		hs+='border-radius : 200px;';
		hs+='background : #ffffff;';
		hs+='border : 1px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 32px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 30px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._rectangle_215.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_215.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._no_inclusoii.appendChild(me._rectangle_215);
		el=me._ht_image_info115=document.createElement('div');
		el.ggId="ht_image_info-1";
		el.ggDx=-118;
		el.ggDy=56;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 100px;';
		hs+='border-radius : 100px;';
		hs+='background : #ffffff;';
		hs+='border : 1px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 50px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_image_info115.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._ht_image_info115.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._ht_image_info215=document.createElement('div');
		el.ggId="ht_image_info-2";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 200px;';
		hs+='border-radius : 200px;';
		hs+='border : 4px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 32px;';
		hs+='left : -10000px;';
		hs+='opacity : 0.8;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 30px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_image_info215.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._ht_image_info215.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._ht_image_info115.appendChild(me._ht_image_info215);
		me._no_inclusoii.appendChild(me._ht_image_info115);
		el=me._image_115=document.createElement('div');
		els=me._image_115__img=document.createElement('img');
		els.className='ggskin ggskin_image_115';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAaCAYAAADWm14/AAAGmUlEQVRIiYVXXUhUXRd+zpwzjljSmxSC6OiUU2qgkBBEgVB0YxcR3VhXaRB0FWVm2lXlLxYYBUVRggQRVkQXXWiERFAZUnihUIaWEeXfGOOMnnP23s970bs3M+rHt6507fXzrLXXftYZiyQ9z0NGRgYAQEoJ27axlriui1AoBABQSoGksU2NocX3fQSDQZCEZVkAYP5WSsGyLFhKKaYe6oNAIGASSikRCARgWdYqgEopAEAgEICU0ui1jUlkWSAJkggEAiZfQCfXhtpRCGGqJQnf99MCLy0tGWAkAcD4r+xgaoFCCANaKQVLCEHt4Ps+AoEAbNs27RNCwHEcEyC1AgAYHR2FEAIbNmxAQUEBhBAGxFrXohPrGJaegWAwaO7G932EQiHMzs5i06ZNSC'+
			'aTyMrKAgBMTk7i7t27GBwcxNTUFDIyMuA4DlzXBQBEo1GcPXsW+/btS0ueCkZ3YNUMpA5ZPB5HdXU1Dh48iAsXLsDzPDQ1NaG/vx+hUAi1tbXIzc1FdnY2lpeX8eXLFwwNDeHz58+IxWLIz89Hd3c3ysvLEQqFQBJSSjiOYzodCAQAKSW1+L5PKSU9zyNJtrS0sLCwkO3t7STJhw8fsqenh1JKSikphDC+2kcIwRs3brC4uJjRaJS9vb2MxWL8XwKlFJVS9H3fKFMDt7S0MBKJsKury9gopdJAa50uRgjBiYkJ1tTUMBwO8+nTp/Q8L81P+5oO6Aq0SCmZSCQopWRXVxej0Sjb2trMueu6qwAIIagL0jZHjx5lSUkJf//+Tc/z0opTShErK0okEiZ4TU0N3717R9d12dnZyfz8fHZ0dBhn13WZTCYZj8e5uLhoYvT1'+
			'9fHQoUMkyfHxcVZUVLCmpmbNrkEIwdQ50DI8PMxwOMxbt24ZXWdnJ6PRqJmJ/v5+fvjwgUNDQywuLubJkyc5MzPDWCzGJ0+emMLu3bvHSCTCsbExU1xaB/S9aWSJRILV1dUsKyvj3NycuRKlFFtbW1lcXMzOzk4TaGZmhvX19SwtLeWePXu4sLBgEuhhraioYHNzswGli0ZqcC3z8/PcunUr6+rqSKZPuO5Efn4+u7u7jU5Kyffv33PLli08ffp0mh9JHj58mDt37uSfP38MOJJ0NI/zPzpVSmF0dBS2baOsrAxCCASDQSilsLi4iDdv3uD8+fOwLAtXr16F67rm/127duHAgQN4+fIlfN+H4zhmv+zduxfDw8OYmJjAjh07DLs6TNlUmiKXl5dhWRbKyspMkEAggOzsbGzevBme56GhoQEk0dPTA9/3cfHiRQBAY2'+
			'MjTpw4YXaL3h+FhYUIBoNYXFyEbdsml6O3lDYGgIKCAsTjcWRmZhrKlFLCdV1YloV4PI6cnBw0NDTAdV309vbCtm00NDQgEolgenra7A3P8xAKhZCdnQ2lFObm5qC7rpT62wEtGsi6deuQkZGB6elps35t20YwGERdXR12796NO3fuQCmFpqYmZGVl4fr16wbEwsICXNdFZmamofZv377Btm1s3LgRSinYtp3eAY0KAP755x/k5ubi69evpl1KKQSDQVRVVeHFixcYGRkxd3nmzBlYloWbN2/C9300Nzeb7WpZFhzHwfj4uJkT27YhhPibN/Xtp/J7W1sbjxw5ksZsUkrOz8+zqqqKhYWFbGxs5NzcnHm+V65cYWlpKVtbW9OoXUrJyspKnjt3jr7vp50hlRpTn+PHjx8ZDoc5ODiY9mz0M62rq+O2bdv49u1bfvr0'+
			'ia9fvyZJXrp0idFolN3d3Qb8/fv3GQ6HOTIywpX5sBYLat3x48e5f/9+QygauT5PJBJcXl7m7Owsv3//bliuvb2dkUiEbW1tlFJyYGCAp06dSsuxtLT0twNasbJlJPnjxw9WVlby1KlTa9K17/urlhj5l7C6urq4fft2sztmZ2fT/LRAb7GVgROJBEny1atXLCoqYm1tLePxOH3fX2WvbfV3glKKnufx8uXLLCoq4rVr10iSyWRyVR5DxSuRkTR3+OzZM5aUlLC8vJx9fX30PM/YajC6E77v8/bt2xwYGKAQgh0dHQyHw2Z3JJNJM09KKVpkChGsIfqjdHh4GPX19ZicnMT69etx7Ngx5OXlIS8vD5mZmZiamsKvX7/w6NEjxGIxRKNRPH/+HI7joKOjA/39/Xj8+DFycnIghPhLw46D/wtAH/O/b7qxsTE8ePAAQ0'+
			'NDhvGSySQcx4FSCuFwGM3NzaiqqjJMCgA/f/5EXl5e2u8KKSX+BfhXo09RGVuBAAAAAElFTkSuQmCC';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 1";
		el.ggDx=-118;
		el.ggDy=56;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 23px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 23px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._image_115.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_115.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._no_inclusoii.appendChild(me._image_115);
		el=me._alarme_de_monxido_de_carbono=document.createElement('div');
		els=me._alarme_de_monxido_de_carbono__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Alarme de mon\xf3xido de carbono";
		el.ggDx=29;
		el.ggDy=120;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text tooltip";
		el.ggType='text';
		hs ='';
		hs+='height : 66px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 219px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 221px;';
		hs+='height: auto;';
		hs+='background: #ffffff;';
		hs+='background: rgba(255,255,255,0);';
		hs+='border: 1px solid #55aa7f;';
		hs+='border: 1px solid rgba(85,170,127,0);';
		hs+=cssPrefix + 'background-clip: padding-box;';
		hs+='background-clip: padding-box;';
		hs+='border-radius: 10px;';
		hs+=cssPrefix + 'border-radius: 10px;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: left;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 2px 3px 2px 3px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		els.innerHTML="Alarme de mon\xf3xido de carbono<br\/>N\xe3o h\xe1 detector de mon\xf3xido<br\/>de carbono na propriedade";
		el.appendChild(els);
		me._alarme_de_monxido_de_carbono.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._alarme_de_monxido_de_carbono.logicBlock_text = function() {
			var newLogicStateText;
			if (
				((player.getVariableValue('POR') == true))
			)
			{
				newLogicStateText = 0;
			}
			else if (
				((player.getVariableValue('ENG') == true))
			)
			{
				newLogicStateText = 1;
			}
			else if (
				((player.getVariableValue('ESP') == true))
			)
			{
				newLogicStateText = 2;
			}
			else {
				newLogicStateText = -1;
			}
			if (me._alarme_de_monxido_de_carbono.ggCurrentLogicStateText != newLogicStateText) {
				me._alarme_de_monxido_de_carbono.ggCurrentLogicStateText = newLogicStateText;
				me._alarme_de_monxido_de_carbono.style[domTransition]='';
				if (me._alarme_de_monxido_de_carbono.ggCurrentLogicStateText == 0) {
					me._alarme_de_monxido_de_carbono.ggText="Alarme de mon\xf3xido de carbono\nN\xe3o h\xe1 detector de mon\xf3xido\nde carbono na propriedade";
					me._alarme_de_monxido_de_carbono__text.innerHTML=me._alarme_de_monxido_de_carbono.ggText;
					if (me._alarme_de_monxido_de_carbono.ggUpdateText) {
					me._alarme_de_monxido_de_carbono.ggUpdateText=function() {
						var hs="Alarme de mon\xf3xido de carbono\nN\xe3o h\xe1 detector de mon\xf3xido\nde carbono na propriedade";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._alarme_de_monxido_de_carbono.ggUpdatePosition) me._alarme_de_monxido_de_carbono.ggUpdatePosition();
					}
				}
				else if (me._alarme_de_monxido_de_carbono.ggCurrentLogicStateText == 1) {
					me._alarme_de_monxido_de_carbono.ggText="Carbom monoxide alarm\nThere is no carbon monoxide\ndetector on the property";
					me._alarme_de_monxido_de_carbono__text.innerHTML=me._alarme_de_monxido_de_carbono.ggText;
					if (me._alarme_de_monxido_de_carbono.ggUpdateText) {
					me._alarme_de_monxido_de_carbono.ggUpdateText=function() {
						var hs="Carbom monoxide alarm\nThere is no carbon monoxide\ndetector on the property";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._alarme_de_monxido_de_carbono.ggUpdatePosition) me._alarme_de_monxido_de_carbono.ggUpdatePosition();
					}
				}
				else if (me._alarme_de_monxido_de_carbono.ggCurrentLogicStateText == 2) {
					me._alarme_de_monxido_de_carbono.ggText="Alarma monoxido de carbono\nNo hay detector de monoxido\nde carbo no en la propiedad";
					me._alarme_de_monxido_de_carbono__text.innerHTML=me._alarme_de_monxido_de_carbono.ggText;
					if (me._alarme_de_monxido_de_carbono.ggUpdateText) {
					me._alarme_de_monxido_de_carbono.ggUpdateText=function() {
						var hs="Alarma monoxido de carbono\nNo hay detector de monoxido\nde carbo no en la propiedad";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._alarme_de_monxido_de_carbono.ggUpdatePosition) me._alarme_de_monxido_de_carbono.ggUpdatePosition();
					}
				}
				else {
					me._alarme_de_monxido_de_carbono.ggText="Alarme de mon\xf3xido de carbono\nN\xe3o h\xe1 detector de mon\xf3xido\nde carbono na propriedade";
					me._alarme_de_monxido_de_carbono__text.innerHTML=me._alarme_de_monxido_de_carbono.ggText;
					if (me._alarme_de_monxido_de_carbono.ggUpdateText) {
					me._alarme_de_monxido_de_carbono.ggUpdateText=function() {
						var hs="Alarme de mon\xf3xido de carbono\nN\xe3o h\xe1 detector de mon\xf3xido\nde carbono na propriedade";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._alarme_de_monxido_de_carbono.ggUpdatePosition) me._alarme_de_monxido_de_carbono.ggUpdatePosition();
					}
				}
			}
		}
		me._alarme_de_monxido_de_carbono.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 2;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._no_inclusoii.appendChild(me._alarme_de_monxido_de_carbono);
		el=me._rectangle_214=document.createElement('div');
		el.ggId="Rectangle 2";
		el.ggDx=-119;
		el.ggDy=111;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 200px;';
		hs+='border-radius : 200px;';
		hs+='background : #ffffff;';
		hs+='border : 1px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 32px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 30px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._rectangle_214.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_214.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._no_inclusoii.appendChild(me._rectangle_214);
		el=me._ht_image_info114=document.createElement('div');
		el.ggId="ht_image_info-1";
		el.ggDx=-119;
		el.ggDy=111;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 100px;';
		hs+='border-radius : 100px;';
		hs+='background : #ffffff;';
		hs+='border : 1px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 50px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_image_info114.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._ht_image_info114.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._ht_image_info214=document.createElement('div');
		el.ggId="ht_image_info-2";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 200px;';
		hs+='border-radius : 200px;';
		hs+='border : 4px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 32px;';
		hs+='left : -10000px;';
		hs+='opacity : 0.8;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 30px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_image_info214.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._ht_image_info214.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._ht_image_info114.appendChild(me._ht_image_info214);
		me._no_inclusoii.appendChild(me._ht_image_info114);
		el=me._image_114=document.createElement('div');
		els=me._image_114__img=document.createElement('img');
		els.className='ggskin ggskin_image_114';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAhCAYAAADH97ugAAAFDElEQVRIie2WT2gTXRfGfzNzJ5MGV6KhIDakG8FNXetCcCFEQUGsK3GRhSAGkiYaREFEpGKkaVr/FcUguBBEpIq4FHFfsODCVTfZiELpH5pk/tx7vkXfGVN9X/RbfH6b94Fh4N659znn3OfcZywREf4A7D9B8i/Rv0T/HyJljMG2bbTWOI7D169fyWaz9Pt92u02YRiitUYphTEGpRRaawbbTylFEAS4rott22SzWfbv38+uXbsANtfZtk232yWTybC8vMyJEyc4fvw4lUqF0dFRyuUyIoJSirW1NVKpFGEYkk6nAbAsiyAISKVS9Ho9lFKbpbJtJicnGR8fx7Zt0FqLiEgQBCIicvPmTcnlctJoNEREJIoiERFZW1uTQcTjMfr9voiIGGPk/fv3cu'+
			'zYMdm9e7csLS2JiAjxgjAMpdvtJmR79uyRRqMhxphksyAIEoLBAONv4ncURfLu3TvZu3evvHjxQkREVFxrpRT3799nbGyMWq2G1pp79+4BUKlUMMbgeR5hGOI4DrZtE0URrusCEEVRUjatNQcPHmR9fZ1Op7NZynjS931EhHPnzuG6LleuXKFUKvHw4UOmp6dJpVLJd6urq6yvrxOGYSKIt2/fcvTo0UQ4tm3jui6WZW0mEqvN8zy01vR6vSSqSqVCt9ul3W5jWRa1Wo2FhQWGhobQWlMsFjl8+DCXLl3iwIEDuK6L4ziICCKSKBlAxRNRFGFZ1hbVWJbF1atXcV2Xu3fvIiLU63UAVlZWKBQKvHz5kk+fPvH8+XMKhQJxu/i+j+d5BEGwmXJ80MYYmZmZkdHR0Z8ONhZIPp+X6enpLQJZWFiQkZERqdfr8iPy+by0'+
			'Wi0REfnlzWCM4dWrV9RqNc6fP8/U1BStVgvf9wHYt29fkpnWmiAIiKIoTuJ7U/+KqNfrkc/ncV2XarWK7/s8ePCAMAwpl8t4nse1a9coFosYY7YIwLa/5/FLIqUUGxsbfPnyhWw2y+XLl1FKcefOHTzP4+zZswwPD9PpdAjDENd16ff7pNPp/y6jTCbDmTNnOHLkCM1mE6019XodYwwzMzNorSmVSiwvLyeZxK3ged7vE/m+z8mTJ3n69CnFYpGxsTEALly4gGVZzM3NEQQBFy9exHGcRG0AGxsbyT6/FIPneVSrVXK5HOPj41SrVVZXV1FKUS6XKRaLPHr0iNu3bxOGIZ7nYYxJyv7bGQHs2LGD169fc/36debn5zl16hSpVIput0u9Xse2bebm5nBdl4mJiaSPthANHpht20k0g7Asi+3bt9NsNrl16xZBECQ+BV'+
			'Cv1xERWq0WABMTE1vOJyGKL0jf93FdFxHB9/3Ec2Iyx3FwHId0Oo0xhnhtLBDHcXj8+DFRFFEqlXjy5AmLi4ubfTXYyc+ePZNcLicfP34UY4xEUSRa6+Qxxmy5FWLElhGGoTQaDRkeHpapqSkREVlZWdn0IxER3/fFGCOfP3+WkZERKRQK8uHDh5/M7Z8w6Edaa2k2m5LL5WRycjIZt/r9vgzW88aNG7TbbbTWDA0NJVdN3CM/QimV/AoAzM7OcujQIWZnZ3nz5g3z8/NkMhks+UsNURQlNV9aWmJxcZFOp4NlWVueGLGIRIR0Op3Yy7Zt2zh9+jTpdJpv376xc+fOzUD/yv6niP9u7Md5gCAIEjtIpVIYYwiCIBFSFEU4joOltZbB363YlxzH2WJcv4MfgzPGfK9GXLr/Nf4D4F/V0kMvbk4AAAAASUVORK5CYII='+
			'';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 1";
		el.ggDx=-119;
		el.ggDy=111;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 23px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 23px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._image_114.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_114.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._no_inclusoii.appendChild(me._image_114);
		el=me._aquecimento_central=document.createElement('div');
		els=me._aquecimento_central__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Aquecimento Central";
		el.ggDx=6;
		el.ggDy=168;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text tooltip";
		el.ggType='text';
		hs ='';
		hs+='height : 27px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 170px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 172px;';
		hs+='height: auto;';
		hs+='background: #ffffff;';
		hs+='background: rgba(255,255,255,0);';
		hs+='border: 1px solid #55aa7f;';
		hs+='border: 1px solid rgba(85,170,127,0);';
		hs+=cssPrefix + 'background-clip: padding-box;';
		hs+='background-clip: padding-box;';
		hs+='border-radius: 10px;';
		hs+=cssPrefix + 'border-radius: 10px;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: left;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 2px 3px 2px 3px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		els.innerHTML="Aquecimento Central";
		el.appendChild(els);
		me._aquecimento_central.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._aquecimento_central.logicBlock_text = function() {
			var newLogicStateText;
			if (
				((player.getVariableValue('POR') == true))
			)
			{
				newLogicStateText = 0;
			}
			else if (
				((player.getVariableValue('ENG') == true))
			)
			{
				newLogicStateText = 1;
			}
			else if (
				((player.getVariableValue('ESP') == true))
			)
			{
				newLogicStateText = 2;
			}
			else {
				newLogicStateText = -1;
			}
			if (me._aquecimento_central.ggCurrentLogicStateText != newLogicStateText) {
				me._aquecimento_central.ggCurrentLogicStateText = newLogicStateText;
				me._aquecimento_central.style[domTransition]='';
				if (me._aquecimento_central.ggCurrentLogicStateText == 0) {
					me._aquecimento_central.ggText="Aquecimento Central";
					me._aquecimento_central__text.innerHTML=me._aquecimento_central.ggText;
					if (me._aquecimento_central.ggUpdateText) {
					me._aquecimento_central.ggUpdateText=function() {
						var hs="Aquecimento Central";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._aquecimento_central.ggUpdatePosition) me._aquecimento_central.ggUpdatePosition();
					}
				}
				else if (me._aquecimento_central.ggCurrentLogicStateText == 1) {
					me._aquecimento_central.ggText="Heating";
					me._aquecimento_central__text.innerHTML=me._aquecimento_central.ggText;
					if (me._aquecimento_central.ggUpdateText) {
					me._aquecimento_central.ggUpdateText=function() {
						var hs="Heating";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._aquecimento_central.ggUpdatePosition) me._aquecimento_central.ggUpdatePosition();
					}
				}
				else if (me._aquecimento_central.ggCurrentLogicStateText == 2) {
					me._aquecimento_central.ggText="\nCalefacci\xf3n central";
					me._aquecimento_central__text.innerHTML=me._aquecimento_central.ggText;
					if (me._aquecimento_central.ggUpdateText) {
					me._aquecimento_central.ggUpdateText=function() {
						var hs="\nCalefacci\xf3n central";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._aquecimento_central.ggUpdatePosition) me._aquecimento_central.ggUpdatePosition();
					}
				}
				else {
					me._aquecimento_central.ggText="Aquecimento Central";
					me._aquecimento_central__text.innerHTML=me._aquecimento_central.ggText;
					if (me._aquecimento_central.ggUpdateText) {
					me._aquecimento_central.ggUpdateText=function() {
						var hs="Aquecimento Central";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._aquecimento_central.ggUpdatePosition) me._aquecimento_central.ggUpdatePosition();
					}
				}
			}
		}
		me._aquecimento_central.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 2;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._no_inclusoii.appendChild(me._aquecimento_central);
		el=me._rectangle_213=document.createElement('div');
		el.ggId="Rectangle 2";
		el.ggDx=-119;
		el.ggDy=168;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 200px;';
		hs+='border-radius : 200px;';
		hs+='background : #ffffff;';
		hs+='border : 1px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 32px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 30px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._rectangle_213.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_213.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._no_inclusoii.appendChild(me._rectangle_213);
		el=me._ht_image_info113=document.createElement('div');
		el.ggId="ht_image_info-1";
		el.ggDx=-119;
		el.ggDy=168;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 100px;';
		hs+='border-radius : 100px;';
		hs+='background : #ffffff;';
		hs+='border : 1px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 50px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_image_info113.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._ht_image_info113.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._ht_image_info213=document.createElement('div');
		el.ggId="ht_image_info-2";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 200px;';
		hs+='border-radius : 200px;';
		hs+='border : 4px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 32px;';
		hs+='left : -10000px;';
		hs+='opacity : 0.8;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 30px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_image_info213.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._ht_image_info213.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._ht_image_info113.appendChild(me._ht_image_info213);
		me._no_inclusoii.appendChild(me._ht_image_info113);
		el=me._image_113=document.createElement('div');
		els=me._image_113__img=document.createElement('img');
		els.className='ggskin ggskin_image_113';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAfCAYAAADwbH0HAAAGCElEQVRIiY1XTUhUXRh+ztx75yejaTuRqU1FtgkCFVtEiyToB0KjhUSF4SJBKXOCVi0KHdCyosDsh6hNy2kTrSpEaVq0ihDMVhURHwXp5My959zzfAs7pxlNpweGc4d77/vzvO/znnOFlJKu6wIASEIIUbGGYQjXdaG1RiQSAUloreE4DgzMPYMwDOE4jrXzN0SMUyklhBBQSkEIgTAMIYSAuV8qlQAAQgg4jgOlFLTWi0Z+Ow3D0AaltV7RKQCIMAyptYbrun+NsFQqIRaLQQhhgzPBlENKCc/z7P9isYhEIrGyY5IMwxBSSsTjcQRBAABwHAeRSKQikHJKFxYWsGbNGmitEQQB4vG4ZSkSiSyjfxmUUjQoFov2WilFrbVdpZQkSa01nz9/zqNHj3'+
			'L79u1saWnh6dOn+eHDB/uu1pq/E+JKECRZTpXWGiTx69cvrFu3riLIMAwxOzuLQ4cOoaamBm1tbfB9HxMTExBCIJfLoa6uDkqpFUtnUR4hSQZBwEKhwN27d3NwcJAk6fu+ZeHy5cvcvHkzP336RMPW169fWVtby6GhIWvHvLMS3PJaGOl4nocjR47gzp078DwPAwMDtllmZ2fR2NiIVCqFjx8/4sePH9Bao7a2FtPT0yAJpRSi0eiqdbaOlVJwHMdS09fXB9d1cfPmTbiui97eXtu9yWQSjuPg0qVLyOfz8DwPSinU19dDKVXR3SuinGZD+8LCgqV9ZGSE6XTa0jg5Ocn29nb6vs+ZmRnm83lOTU2xo6ODx44ds3aMjRWpFkJYSsyaSCQQhiE8z8P58+fh+z4ePnyIWCyG3t5ejI+PIxqNWuklEgkUCgUkk0lbstU0'+
			'vCzjUqlkr6WUVkokmc1m2dDQwOvXr9tsOjo6WFdXxx07djCVSrGzs5PkooyM/FYCtNY0P0N1Ocq1ODw8zI0bNzKbzZIkZ2dnOTU1xXw+z8OHD/PkyZMMw9AmUD4j/ko1AKu93xKDEALFYhHxeBxclDoGBgbgeR5u3boFkshkMkin09BaI5lMwvd9SCkRi8UAoGIjWdbVZicxTn3fRzwet7UzNTNGenp6oJTC2NgYXNfFwMCAVQUAxGIxG/jS+V0Bk3oQBBVUlI/Pcnz+/JkkOTg4yHQ6zWw2S601X7x4wa6urqq1tTWu9sDSeXvixAlOTk5SSsmRkRHW19fzypUrJFkxzVZLIgiC6o5J2s3i+/fvbGpq4qlTp0guNs/o6Ci3bdvGoaEhSikZhqF1vrRRywOo6ricuu7ubjY1NXFiYoJSSn779q0i89HRUZKLLM3Pz5'+
			'P8M0jKlSOl/LeMlVIcHx/n1q1b+erVKxYKBZ49e5aNjY2cmJggSV69epWpVIrDw8MV7y1lzqz/5Jgk9+7dy4MHD1Jrza6uLqbTaR4/fpzd3d3M5/MMw5A3btxgfX09s9kspZS2ROWsGY0vP8MsgZHEf//9h+bmZggh8Pr1a+zbtw9jY2MgiXPnziEIAvT19cH3fdy9exee56G/vx+O4yAMQ2vPyKuqY3M4WL9+vdVyMpm0BkiipqYGvb29ePv2LTKZDEji9u3bKJVKyGQy8DzPDiOzTVZ1bIbHzp078e7dOwBAe3s7njx5gosXL4Ikcrkc2tra4DgO3rx5gwsXLkAIgXv37iGRSKCnp8cOI/4+MletsWmQR48ecdOmTczlcpybm+OZM2fY0tLCXbt2sb+/n3Nzc8zlcqyrq+P09DS11rx27Rq3bNliG87UnPwHORnM'+
			'z8+zo6ODjY2NfPDgwbL79+/fZ3NzMzOZTEXAg4ODbG1tZaFQqJiO9rC3GoIgQDQaxfz8PDo7OzEzM4OGhga0trbCdV28fPkSX758wYYNG/Ds2TO7SRj8/PkTa9eutUdfpRSqOjY1Nl8GQgg8fvwYT58+xfv37xGJRLBnzx7s378fBw4cQDQarfgEMnU1TVUqlRCPx6s7Lt8uy4MhCdd1oZSyhk3XG4YMtNb2nWg0imKxWN2xidJ1Xbiuu8wo8Efr5Zn+bVtk2Tl7lW+MPw/H43GbtVnN/gv8GQrmDGacL33WDBIpJf4Hvsxl8OKIilMAAAAASUVORK5CYII=';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 1";
		el.ggDx=-119;
		el.ggDy=168;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 28px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 18px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._image_113.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_113.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._no_inclusoii.appendChild(me._image_113);
		me._no_inclusoi.appendChild(me._no_inclusoii);
		me.divSkin.appendChild(me._no_inclusoi);
		el=me._entretenimentoi=document.createElement('div');
		el.ggId="ENTRETENIMENTO-I";
		el.ggDx=2;
		el.ggDy=-6;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 20px;';
		hs+='border-radius : 20px;';
		hs+='background : #5e5e5e;';
		hs+='border : 5px solid #ffffff;';
		hs+='cursor : default;';
		hs+='height : 118px;';
		hs+='left : -10000px;';
		hs+='opacity : 0.7;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 265px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._entretenimentoi.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._entretenimentoi.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getViewerSize().height <= 400))
			)
			{
				newLogicStatePosition = 0;
			}
			else if (
				((player.getViewerSize().width < 1084))
			)
			{
				newLogicStatePosition = 1;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._entretenimentoi.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._entretenimentoi.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._entretenimentoi.style[domTransition]='left 0s, top 0s, ' + cssPrefix + 'transform 0s';
				if (me._entretenimentoi.ggCurrentLogicStatePosition == 0) {
					this.ggDx = 50;
					this.ggDy = 25;
					me._entretenimentoi.ggUpdatePosition(true);
				}
				else if (me._entretenimentoi.ggCurrentLogicStatePosition == 1) {
					this.ggDx = 55;
					this.ggDy = -135;
					me._entretenimentoi.ggUpdatePosition(true);
				}
				else {
					me._entretenimentoi.ggDx=2;
					me._entretenimentoi.ggDy=-6;
					me._entretenimentoi.ggUpdatePosition(true);
				}
			}
		}
		me._entretenimentoi.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getViewerSize().height <= 400))
			)
			{
				newLogicStateScaling = 0;
			}
			else if (
				((player.getViewerSize().width < 1084))
			)
			{
				newLogicStateScaling = 1;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._entretenimentoi.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._entretenimentoi.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._entretenimentoi.style[domTransition]='left 0s, top 0s, ' + cssPrefix + 'transform 0s';
				if (me._entretenimentoi.ggCurrentLogicStateScaling == 0) {
					me._entretenimentoi.ggParameter.sx = 0.85;
					me._entretenimentoi.ggParameter.sy = 0.75;
					me._entretenimentoi.style[domTransform]=parameterToTransform(me._entretenimentoi.ggParameter);
				}
				else if (me._entretenimentoi.ggCurrentLogicStateScaling == 1) {
					me._entretenimentoi.ggParameter.sx = 0.85;
					me._entretenimentoi.ggParameter.sy = 0.85;
					me._entretenimentoi.style[domTransform]=parameterToTransform(me._entretenimentoi.ggParameter);
				}
				else {
					me._entretenimentoi.ggParameter.sx = 1;
					me._entretenimentoi.ggParameter.sy = 1;
					me._entretenimentoi.style[domTransform]=parameterToTransform(me._entretenimentoi.ggParameter);
				}
			}
		}
		me._entretenimentoi.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('INFO') == false))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._entretenimentoi.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._entretenimentoi.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._entretenimentoi.style[domTransition]='left 0s, top 0s, ' + cssPrefix + 'transform 0s';
				if (me._entretenimentoi.ggCurrentLogicStateVisible == 0) {
					me._entretenimentoi.style.visibility="hidden";
					me._entretenimentoi.ggVisible=false;
				}
				else {
					me._entretenimentoi.style.visibility="hidden";
					me._entretenimentoi.ggVisible=false;
				}
			}
		}
		me._entretenimentoi.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._entretenimentoii=document.createElement('div');
		el.ggId="ENTRETENIMENTO-II";
		el.ggDx=-6;
		el.ggDy=-4;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 124px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 246px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._entretenimentoii.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._entretenimentoii.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._conexo_ethernet=document.createElement('div');
		els=me._conexo_ethernet__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Conex\xe3o \xe0 Ethernet";
		el.ggDx=19;
		el.ggDy=-25;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text tooltip";
		el.ggType='text';
		hs ='';
		hs+='height : 27px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 170px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 172px;';
		hs+='height: auto;';
		hs+='background: #ffffff;';
		hs+='background: rgba(255,255,255,0);';
		hs+='border: 1px solid #55aa7f;';
		hs+='border: 1px solid rgba(85,170,127,0);';
		hs+=cssPrefix + 'background-clip: padding-box;';
		hs+='background-clip: padding-box;';
		hs+='border-radius: 10px;';
		hs+=cssPrefix + 'border-radius: 10px;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: left;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 2px 3px 2px 3px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		els.innerHTML="Conex\xe3o \xe0 Ethernet";
		el.appendChild(els);
		me._conexo_ethernet.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._conexo_ethernet.logicBlock_text = function() {
			var newLogicStateText;
			if (
				((player.getVariableValue('POR') == true))
			)
			{
				newLogicStateText = 0;
			}
			else if (
				((player.getVariableValue('ENG') == true))
			)
			{
				newLogicStateText = 1;
			}
			else if (
				((player.getVariableValue('ESP') == true))
			)
			{
				newLogicStateText = 2;
			}
			else {
				newLogicStateText = -1;
			}
			if (me._conexo_ethernet.ggCurrentLogicStateText != newLogicStateText) {
				me._conexo_ethernet.ggCurrentLogicStateText = newLogicStateText;
				me._conexo_ethernet.style[domTransition]='';
				if (me._conexo_ethernet.ggCurrentLogicStateText == 0) {
					me._conexo_ethernet.ggText="Conex\xe3o \xe0 Ethernet";
					me._conexo_ethernet__text.innerHTML=me._conexo_ethernet.ggText;
					if (me._conexo_ethernet.ggUpdateText) {
					me._conexo_ethernet.ggUpdateText=function() {
						var hs="Conex\xe3o \xe0 Ethernet";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._conexo_ethernet.ggUpdatePosition) me._conexo_ethernet.ggUpdatePosition();
					}
				}
				else if (me._conexo_ethernet.ggCurrentLogicStateText == 1) {
					me._conexo_ethernet.ggText=" Ethernet connection";
					me._conexo_ethernet__text.innerHTML=me._conexo_ethernet.ggText;
					if (me._conexo_ethernet.ggUpdateText) {
					me._conexo_ethernet.ggUpdateText=function() {
						var hs=" Ethernet connection";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._conexo_ethernet.ggUpdatePosition) me._conexo_ethernet.ggUpdatePosition();
					}
				}
				else if (me._conexo_ethernet.ggCurrentLogicStateText == 2) {
					me._conexo_ethernet.ggText="Conexi\xf3n Ethernet";
					me._conexo_ethernet__text.innerHTML=me._conexo_ethernet.ggText;
					if (me._conexo_ethernet.ggUpdateText) {
					me._conexo_ethernet.ggUpdateText=function() {
						var hs="Conexi\xf3n Ethernet";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._conexo_ethernet.ggUpdatePosition) me._conexo_ethernet.ggUpdatePosition();
					}
				}
				else {
					me._conexo_ethernet.ggText="Conex\xe3o \xe0 Ethernet";
					me._conexo_ethernet__text.innerHTML=me._conexo_ethernet.ggText;
					if (me._conexo_ethernet.ggUpdateText) {
					me._conexo_ethernet.ggUpdateText=function() {
						var hs="Conex\xe3o \xe0 Ethernet";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._conexo_ethernet.ggUpdatePosition) me._conexo_ethernet.ggUpdatePosition();
					}
				}
			}
		}
		me._conexo_ethernet.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 2;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._entretenimentoii.appendChild(me._conexo_ethernet);
		el=me._rectangle_212=document.createElement('div');
		el.ggId="Rectangle 2";
		el.ggDx=-97;
		el.ggDy=-25;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 200px;';
		hs+='border-radius : 200px;';
		hs+='background : #ffffff;';
		hs+='border : 1px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 32px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 30px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._rectangle_212.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_212.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._entretenimentoii.appendChild(me._rectangle_212);
		el=me._ht_image_info112=document.createElement('div');
		el.ggId="ht_image_info-1";
		el.ggDx=-97;
		el.ggDy=-25;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 100px;';
		hs+='border-radius : 100px;';
		hs+='background : #ffffff;';
		hs+='border : 1px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 50px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_image_info112.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._ht_image_info112.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._ht_image_info212=document.createElement('div');
		el.ggId="ht_image_info-2";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 200px;';
		hs+='border-radius : 200px;';
		hs+='border : 4px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 32px;';
		hs+='left : -10000px;';
		hs+='opacity : 0.8;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 30px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_image_info212.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._ht_image_info212.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._ht_image_info112.appendChild(me._ht_image_info212);
		me._entretenimentoii.appendChild(me._ht_image_info112);
		el=me._image_112=document.createElement('div');
		els=me._image_112__img=document.createElement('img');
		els.className='ggskin ggskin_image_112';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAiCAYAAABMfblJAAAEtUlEQVRIib2XsWtUSxTGfzNzZzeJpDAQlBRhBUVsBAuxDFimFbFQlyDYqP+BjYto41+gIChIBEvb1CKIiASLqInYbKEISiB3986dO8cib+bdzd64ER7vwGWZuXfmzHfm+845q0REAEQEpRQA3nuyLOOfV380pRQhhLQ2zlVVhTFm7HsNUJYl9d8sy3DOoZSa+Hjv0VqncVVVuxtrTVEU4wesqkq01mnCOUer1QJgMBgwPT09EWVZllhr07gerTGHIiIhhBQKpRRlWZJl2b6L9rM8z5mZmQGgKAqstdTBAGQhhDQZ78x7z+bmJtvb2xOdiAhlWdJut5mfn+fIkSPMzMw0OksIB4MBrVYLYwwPHjzg6dOn7OzspI3+ZNZanHMAGGMwxnD37l0uXrxIUR'+
			'Rj65XUqPjq1Su63S6nT5/mypUrdDqdRIL9LIbfGMPGxgYPHz7k+/fvPHr0iKWlpfEFVVWJiIj3Xm7fvi3Hjx+X7e1tifMHNeeciIj0+33pdDrS6/UkhDD2nY5xNsbw5csXzp49y+zs7Ni9hhDw3qe5qqqIZIsoARYWFjhz5gyfP39u1PH4re4xpRSDwQCtNVmWJa0aY9Khog6jRT40sXyiQyBpMYSAtTZll7SJ1oQQEJE075wb+ebADuth01rjvaeqKrTWKaxKqSR2rTXGGESkMbVlkxxqrfnw4QNPnjyh3++ntAcwNzfHysoK586da9Rc436TPvDe8/jxY9bW1jDG4JzDWkuWZbx+/ZqXL19SFEUKc1mWCW2TpCYizLKMb9++cerUKZ49e5bmy7Lk2rVrbG1tpdyrtU4EiqH9a4QRpbUWEeHevXvcuXMHa+1IpYjs'+
			'hV3C1Md/hTCePOpwY2Mj6RH+1Wn9DpVSSZdjex3EYSw91lqMManOxcQNu7qMd2at3RfhRIciwsLCAuvr61y+fJk3b97w9etXut0uHz9+5MSJE0lzdbT7sTb7U7GM727evAlAv99ndnaWPM/J85ylpSVWVlZGSOO9Ty1KvfQlh5MQAiwuLtLr9Wi321y9epUQAqurqyPdQXSyNwmMIayj25tsI/ustUxNTaWkDbsZqNVq4b0f0VwsVXVi7YuwKbtbawkhEEJIm8VQ1RHWNRfTYVNI06jurMlxpHlRFGmT6KzenVVVhXOO6enpxpDq6EApxeLiIu/fv+fHjx/JqYgkHUYkMYHH99FxCIFfv37x7t07jh071lgtMiCxdHl5mdXVVS5cuMD169c5efJkWuS9p91uk+c5hw8fxhjDp0+f+PnzZ4rA5uYmz58/x1rL+fPnm5'+
			'so773UT37//n1evHhBWZYMh0OUUrTb7ZFC3Ov16Ha7XLp0ibdv3ybSZFmGtZZbt25x48aNxu47NVF1PeZ5ztbWFs45RIThcJgYefToUTqdDlpr1tfXGQ6HKe3Nzc3R6XRSb9pEGhVCEKUUzrnEwJjKoraaOnARSU9EMRwOmZqaSnfc1GKqEIKEENKivZknUj/WuniYSCStNTs7O7RarZF2vwkdgK5nhLIsE/sGgwGwS/2IJJ44irqqKrz3HDp0KDmLBTgefgxh/DNTR7YXZbz8eOo6GeJcDP8kG+m8/w87WOfzH9pvRGg1t1P5o3oAAAAASUVORK5CYII=';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 1";
		el.ggDx=-97;
		el.ggDy=-25;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 28px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 18px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._image_112.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_112.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._entretenimentoii.appendChild(me._image_112);
		el=me._hdtv_com_tv_a_cabo_premium=document.createElement('div');
		els=me._hdtv_com_tv_a_cabo_premium__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="HDTV com TV a cabo premium";
		el.ggDx=36;
		el.ggDy=36;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text tooltip";
		el.ggType='text';
		hs ='';
		hs+='height : 27px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 205px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 207px;';
		hs+='height: auto;';
		hs+='background: #ffffff;';
		hs+='background: rgba(255,255,255,0);';
		hs+='border: 1px solid #55aa7f;';
		hs+='border: 1px solid rgba(85,170,127,0);';
		hs+=cssPrefix + 'background-clip: padding-box;';
		hs+='background-clip: padding-box;';
		hs+='border-radius: 10px;';
		hs+=cssPrefix + 'border-radius: 10px;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: left;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 2px 3px 2px 3px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		els.innerHTML="HDTV com TV a cabo premium";
		el.appendChild(els);
		me._hdtv_com_tv_a_cabo_premium.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._hdtv_com_tv_a_cabo_premium.logicBlock_text = function() {
			var newLogicStateText;
			if (
				((player.getVariableValue('POR') == true))
			)
			{
				newLogicStateText = 0;
			}
			else if (
				((player.getVariableValue('ENG') == true))
			)
			{
				newLogicStateText = 1;
			}
			else if (
				((player.getVariableValue('ESP') == true))
			)
			{
				newLogicStateText = 2;
			}
			else {
				newLogicStateText = -1;
			}
			if (me._hdtv_com_tv_a_cabo_premium.ggCurrentLogicStateText != newLogicStateText) {
				me._hdtv_com_tv_a_cabo_premium.ggCurrentLogicStateText = newLogicStateText;
				me._hdtv_com_tv_a_cabo_premium.style[domTransition]='';
				if (me._hdtv_com_tv_a_cabo_premium.ggCurrentLogicStateText == 0) {
					me._hdtv_com_tv_a_cabo_premium.ggText="HDTV com TV a cabo premium";
					me._hdtv_com_tv_a_cabo_premium__text.innerHTML=me._hdtv_com_tv_a_cabo_premium.ggText;
					if (me._hdtv_com_tv_a_cabo_premium.ggUpdateText) {
					me._hdtv_com_tv_a_cabo_premium.ggUpdateText=function() {
						var hs="HDTV com TV a cabo premium";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._hdtv_com_tv_a_cabo_premium.ggUpdatePosition) me._hdtv_com_tv_a_cabo_premium.ggUpdatePosition();
					}
				}
				else if (me._hdtv_com_tv_a_cabo_premium.ggCurrentLogicStateText == 1) {
					me._hdtv_com_tv_a_cabo_premium.ggText="HDTV with premium cable";
					me._hdtv_com_tv_a_cabo_premium__text.innerHTML=me._hdtv_com_tv_a_cabo_premium.ggText;
					if (me._hdtv_com_tv_a_cabo_premium.ggUpdateText) {
					me._hdtv_com_tv_a_cabo_premium.ggUpdateText=function() {
						var hs="HDTV with premium cable";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._hdtv_com_tv_a_cabo_premium.ggUpdatePosition) me._hdtv_com_tv_a_cabo_premium.ggUpdatePosition();
					}
				}
				else if (me._hdtv_com_tv_a_cabo_premium.ggCurrentLogicStateText == 2) {
					me._hdtv_com_tv_a_cabo_premium.ggText="HDTV con cable premium ";
					me._hdtv_com_tv_a_cabo_premium__text.innerHTML=me._hdtv_com_tv_a_cabo_premium.ggText;
					if (me._hdtv_com_tv_a_cabo_premium.ggUpdateText) {
					me._hdtv_com_tv_a_cabo_premium.ggUpdateText=function() {
						var hs="HDTV con cable premium ";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._hdtv_com_tv_a_cabo_premium.ggUpdatePosition) me._hdtv_com_tv_a_cabo_premium.ggUpdatePosition();
					}
				}
				else {
					me._hdtv_com_tv_a_cabo_premium.ggText="HDTV com TV a cabo premium";
					me._hdtv_com_tv_a_cabo_premium__text.innerHTML=me._hdtv_com_tv_a_cabo_premium.ggText;
					if (me._hdtv_com_tv_a_cabo_premium.ggUpdateText) {
					me._hdtv_com_tv_a_cabo_premium.ggUpdateText=function() {
						var hs="HDTV com TV a cabo premium";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._hdtv_com_tv_a_cabo_premium.ggUpdatePosition) me._hdtv_com_tv_a_cabo_premium.ggUpdatePosition();
					}
				}
			}
		}
		me._hdtv_com_tv_a_cabo_premium.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 2;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._entretenimentoii.appendChild(me._hdtv_com_tv_a_cabo_premium);
		el=me._rectangle_211=document.createElement('div');
		el.ggId="Rectangle 2";
		el.ggDx=-98;
		el.ggDy=34;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 200px;';
		hs+='border-radius : 200px;';
		hs+='background : #ffffff;';
		hs+='border : 1px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 32px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 30px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._rectangle_211.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_211.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._entretenimentoii.appendChild(me._rectangle_211);
		el=me._ht_image_info111=document.createElement('div');
		el.ggId="ht_image_info-1";
		el.ggDx=-98;
		el.ggDy=34;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 100px;';
		hs+='border-radius : 100px;';
		hs+='background : #ffffff;';
		hs+='border : 1px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 50px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_image_info111.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._ht_image_info111.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._ht_image_info211=document.createElement('div');
		el.ggId="ht_image_info-2";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 200px;';
		hs+='border-radius : 200px;';
		hs+='border : 4px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 32px;';
		hs+='left : -10000px;';
		hs+='opacity : 0.8;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 30px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_image_info211.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._ht_image_info211.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._ht_image_info111.appendChild(me._ht_image_info211);
		me._entretenimentoii.appendChild(me._ht_image_info111);
		el=me._image_111=document.createElement('div');
		els=me._image_111__img=document.createElement('img');
		els.className='ggskin ggskin_image_111';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAWCAYAAACosj4+AAADSklEQVRIie1XsU7rShA9u2ubGEKDhEIVKoQgDRESBR8ADUg0EYpEifgAfiGi5A+oI0pqKCkoEDQIBBIUpETQBAixvbvnNnf32oQ8qF7FqSx7ZvbM7MzusSBJrTWCIABJkIS1FkEQYBhIAgCEEENt8jDGQCkFALDWQggBIQRIDsSQACCl9B+llAiCAGmawhgDrXWBiLMTQhS+DYPWukBGSglr7dCEBP+m64xJQmuNMAwLRPLOWmtIKSGl/FGFnA9JH9cl9zmGSNOU+cXzOD4+xsnJCV5eXtDtdiGEQBRFfsvy2Q6DMQbz8/NYW1vD4uIikiTByMjIUHthraXLPssy3zv7+/s4ODgASUxPT2NqagoAkCQJhBBQSvl++C9Ya3F6eoo4jtFqtdBsNv1uZF'+
			'mGgWKQpDGG1lo69Pt9Li0tcWNjg91ul8YYkqS11j+TZJZl/Anu7++5urrKhYUFv84wX+mycJkaY/Dw8IDHx0dsb29jfHzc77NremPMt5OYSxjVahWNRgPv7++4ubnBx8cHgiD4crulMaZARimFt7c3xHGMSqVScLLWgiSUUj/qH5dEGIao1+vQWuP19RVxHKPf7385FIEbSQBQShXOGGNMwelzgJ9OmZtcd1wAQKlU+tL253P7P+GX0Hf4JfQdfgl9B39Sk4Q7JEulEpRSuLu7gzEGwD8NlGWZd87rJwdrrfcxxviYnU4HWmtUKpWBOAVCaZpCSukvTACYm5tDFEVot9vodDqeMAB/XeQPujRNPYH8xauUglIKz8/PODw8xMTEBCYnJwEAYRj6mHkEURQVMnaBNzc30W63sbKyglqthtHRUWRZhiiKIIRAr9dDHMdI'+
			'09S/ywsvkkiSBFJKnJ+fwxiDvb09jI2NFRTkZwiSdEE/C7GjoyOcnZ3h6ekJJOGqeXl5iTAMUavV/gUSAtfX1wCA2dlZBEGAIAigtUa1WsX6+jqWl5e9HnISZAB52aG19rLAvdda8y9pkmSv1+POzg6bzab3s9bSWstGo8GtrS3vmyQJkyT5Um7k181DGGOYF0uuSq5qAPzz7e0tWq0WLi4uUC6XMTMzg36/j3K5DJK4urqCMQb1eh27u7uo1+sDBXD9FkUR3M9FHn8AAyG+2P0FnCoAAAAASUVORK5CYII=';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 1";
		el.ggDx=-98;
		el.ggDy=34;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 15px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 25px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._image_111.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_111.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._entretenimentoii.appendChild(me._image_111);
		me._entretenimentoi.appendChild(me._entretenimentoii);
		me.divSkin.appendChild(me._entretenimentoi);
		el=me._internet_e_escritrioi=document.createElement('div');
		el.ggId="INTERNET E ESCRIT\xd3RIO-I";
		el.ggDx=0;
		el.ggDy=-7;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 20px;';
		hs+='border-radius : 20px;';
		hs+='background : #5e5e5e;';
		hs+='border : 5px solid #ffffff;';
		hs+='cursor : default;';
		hs+='height : 140px;';
		hs+='left : -10000px;';
		hs+='opacity : 0.7;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 326px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._internet_e_escritrioi.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._internet_e_escritrioi.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getViewerSize().height <= 400))
			)
			{
				newLogicStatePosition = 0;
			}
			else if (
				((player.getViewerSize().width < 1084))
			)
			{
				newLogicStatePosition = 1;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._internet_e_escritrioi.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._internet_e_escritrioi.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._internet_e_escritrioi.style[domTransition]='left 0s, top 0s, ' + cssPrefix + 'transform 0s';
				if (me._internet_e_escritrioi.ggCurrentLogicStatePosition == 0) {
					this.ggDx = 50;
					this.ggDy = 25;
					me._internet_e_escritrioi.ggUpdatePosition(true);
				}
				else if (me._internet_e_escritrioi.ggCurrentLogicStatePosition == 1) {
					this.ggDx = 55;
					this.ggDy = -135;
					me._internet_e_escritrioi.ggUpdatePosition(true);
				}
				else {
					me._internet_e_escritrioi.ggDx=0;
					me._internet_e_escritrioi.ggDy=-7;
					me._internet_e_escritrioi.ggUpdatePosition(true);
				}
			}
		}
		me._internet_e_escritrioi.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getViewerSize().height <= 400))
			)
			{
				newLogicStateScaling = 0;
			}
			else if (
				((player.getViewerSize().width < 1084))
			)
			{
				newLogicStateScaling = 1;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._internet_e_escritrioi.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._internet_e_escritrioi.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._internet_e_escritrioi.style[domTransition]='left 0s, top 0s, ' + cssPrefix + 'transform 0s';
				if (me._internet_e_escritrioi.ggCurrentLogicStateScaling == 0) {
					me._internet_e_escritrioi.ggParameter.sx = 0.85;
					me._internet_e_escritrioi.ggParameter.sy = 0.75;
					me._internet_e_escritrioi.style[domTransform]=parameterToTransform(me._internet_e_escritrioi.ggParameter);
				}
				else if (me._internet_e_escritrioi.ggCurrentLogicStateScaling == 1) {
					me._internet_e_escritrioi.ggParameter.sx = 0.85;
					me._internet_e_escritrioi.ggParameter.sy = 0.85;
					me._internet_e_escritrioi.style[domTransform]=parameterToTransform(me._internet_e_escritrioi.ggParameter);
				}
				else {
					me._internet_e_escritrioi.ggParameter.sx = 1;
					me._internet_e_escritrioi.ggParameter.sy = 1;
					me._internet_e_escritrioi.style[domTransform]=parameterToTransform(me._internet_e_escritrioi.ggParameter);
				}
			}
		}
		me._internet_e_escritrioi.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('INFO') == false))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._internet_e_escritrioi.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._internet_e_escritrioi.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._internet_e_escritrioi.style[domTransition]='left 0s, top 0s, ' + cssPrefix + 'transform 0s';
				if (me._internet_e_escritrioi.ggCurrentLogicStateVisible == 0) {
					me._internet_e_escritrioi.style.visibility="hidden";
					me._internet_e_escritrioi.ggVisible=false;
				}
				else {
					me._internet_e_escritrioi.style.visibility="hidden";
					me._internet_e_escritrioi.ggVisible=false;
				}
			}
		}
		me._internet_e_escritrioi.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._internet_e_escritrioii=document.createElement('div');
		el.ggId="INTERNET E ESCRIT\xd3RIO-II";
		el.ggDx=4;
		el.ggDy=2;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 139px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 315px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._internet_e_escritrioii.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._internet_e_escritrioii.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._wifi0=document.createElement('div');
		els=me._wifi0__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Wi-Fi";
		el.ggDx=-7;
		el.ggDy=-32;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text tooltip";
		el.ggType='text';
		hs ='';
		hs+='height : 27px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 170px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 172px;';
		hs+='height: auto;';
		hs+='background: #ffffff;';
		hs+='background: rgba(255,255,255,0);';
		hs+='border: 1px solid #55aa7f;';
		hs+='border: 1px solid rgba(85,170,127,0);';
		hs+=cssPrefix + 'background-clip: padding-box;';
		hs+='background-clip: padding-box;';
		hs+='border-radius: 10px;';
		hs+=cssPrefix + 'border-radius: 10px;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: left;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 2px 3px 2px 3px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		els.innerHTML="Wi-Fi";
		el.appendChild(els);
		me._wifi0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._wifi0.logicBlock_text = function() {
			var newLogicStateText;
			if (
				((player.getVariableValue('POR') == true))
			)
			{
				newLogicStateText = 0;
			}
			else if (
				((player.getVariableValue('ENG') == true))
			)
			{
				newLogicStateText = 1;
			}
			else if (
				((player.getVariableValue('ESP') == true))
			)
			{
				newLogicStateText = 2;
			}
			else {
				newLogicStateText = -1;
			}
			if (me._wifi0.ggCurrentLogicStateText != newLogicStateText) {
				me._wifi0.ggCurrentLogicStateText = newLogicStateText;
				me._wifi0.style[domTransition]='';
				if (me._wifi0.ggCurrentLogicStateText == 0) {
					me._wifi0.ggText="Wi-Fi";
					me._wifi0__text.innerHTML=me._wifi0.ggText;
					if (me._wifi0.ggUpdateText) {
					me._wifi0.ggUpdateText=function() {
						var hs="Wi-Fi";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._wifi0.ggUpdatePosition) me._wifi0.ggUpdatePosition();
					}
				}
				else if (me._wifi0.ggCurrentLogicStateText == 1) {
					me._wifi0.ggText="Wi-Fi";
					me._wifi0__text.innerHTML=me._wifi0.ggText;
					if (me._wifi0.ggUpdateText) {
					me._wifi0.ggUpdateText=function() {
						var hs="Wi-Fi";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._wifi0.ggUpdatePosition) me._wifi0.ggUpdatePosition();
					}
				}
				else if (me._wifi0.ggCurrentLogicStateText == 2) {
					me._wifi0.ggText="Wi-Fi";
					me._wifi0__text.innerHTML=me._wifi0.ggText;
					if (me._wifi0.ggUpdateText) {
					me._wifi0.ggUpdateText=function() {
						var hs="Wi-Fi";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._wifi0.ggUpdatePosition) me._wifi0.ggUpdatePosition();
					}
				}
				else {
					me._wifi0.ggText="Wi-Fi";
					me._wifi0__text.innerHTML=me._wifi0.ggText;
					if (me._wifi0.ggUpdateText) {
					me._wifi0.ggUpdateText=function() {
						var hs="Wi-Fi";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._wifi0.ggUpdatePosition) me._wifi0.ggUpdatePosition();
					}
				}
			}
		}
		me._wifi0.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 2;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._internet_e_escritrioii.appendChild(me._wifi0);
		el=me._rectangle_210=document.createElement('div');
		el.ggId="Rectangle 2";
		el.ggDx=-129;
		el.ggDy=-32;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 200px;';
		hs+='border-radius : 200px;';
		hs+='background : #ffffff;';
		hs+='border : 1px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 32px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 30px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._rectangle_210.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_210.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._internet_e_escritrioii.appendChild(me._rectangle_210);
		el=me._ht_image_info110=document.createElement('div');
		el.ggId="ht_image_info-1";
		el.ggDx=-129;
		el.ggDy=-32;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 100px;';
		hs+='border-radius : 100px;';
		hs+='background : #ffffff;';
		hs+='border : 1px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 50px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_image_info110.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._ht_image_info110.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._ht_image_info210=document.createElement('div');
		el.ggId="ht_image_info-2";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 200px;';
		hs+='border-radius : 200px;';
		hs+='border : 4px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 32px;';
		hs+='left : -10000px;';
		hs+='opacity : 0.8;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 30px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_image_info210.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._ht_image_info210.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._ht_image_info110.appendChild(me._ht_image_info210);
		me._internet_e_escritrioii.appendChild(me._ht_image_info110);
		el=me._image_110=document.createElement('div');
		els=me._image_110__img=document.createElement('img');
		els.className='ggskin ggskin_image_110';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAeCAYAAAA/xX6fAAAE3klEQVRIie1WTUhUXRh+7plxlIZalG5MGEVqsnKUJGXIQFMXQdFCIgiiIJRoZSlFrkKNhDBaFLgVctEqoZ9FQRplP0QFkQpBQZQ2maKDNd57557ztNBzuDfr+742wQe9m3vvue95n/O8v8ciSfxBEX8S7C/gX8D/B2CYJCzLAgB4nodwOAwAkFIiFAqZ9efPn2NkZASvXr2CUgoAYFkWEokEamtrkUwmjb7jOMjNzQVJKKXMuuu6sPyFr0EymQxWrVqF4eFhDA0NYXR0FNPT04hGo8jPz8f69eth2zYWFhaQSqXgui6i0Shqampw4MAB7Nq1CwCgySwuLiIvL2+JmOd59Mu3b9/45csXHj16lMXFxUwkEmxvb+ebN2+Mjud5lFKa77dv37Kzs5Nbtm'+
			'zh5s2beeTIEX748IEkmclkSJJKKUopCb0xm82SJB88eMCKigpu2LCBXV1dTKfTxrCUkq7rGt3FxUWSpOu6VEoxnU6zu7ubJSUlrK+v56NHj4xtjRNw6a1bt3Dq1CmsW7cOfX192L59u3Hz2NgYbt++jbm5OczMzEBKicLCQuTn52P37t3YuHGjCcuzZ8/Q0dGBhYUF9Pf3I5lMQikFIQSsZfdgfHwchw4dQkFBAW7cuIFoNAoAePHiBc6fP4/Xr1/D8zysWbMGxcXFcBwHU1NTmJubQyQSwdatW3H69GlUVVUhFArh69evaG5uxqdPn3Dt2jWUlZXB8zxAu+vChQtsamri7OwslVIkyd7eXsZiMVZUVLCnp4eTk5MmhlonlUrx3LlzTCQSLCoq4sWLF00IPn/+zLq6Ol6+fNmsgSRt2yZJzs/PG0NtbW0sLS3l/v37'+
			'OT09bWLof2azWRPPVCrF5uZmlpaW8tixYyZJ0um00VdK0TDUCyR56dIlxmIxnjx50rBRSvHly5c8e/YsW1paePz4cXZ1dfHp06eBLDxx4gTj8Th7enr4MwnrYl9mC8uyIKXEjh070NfXBwB49+4dzpw5gydPniAcDqO8vByZTAYPHz7EwMAAtm3bhitXrmDt2rXo7e1FKpXC6tWr4bouIpFIsNX4a0XHx5/yk5OTLCsrY21tLe/duxfQs22bw8PDTCaTrKysNLU3Pz//U3YkCdu2jSv10w988OBBVlZWcmJiYsU/cin+ExMTrKqq4uHDhwPG/c3BuDQ3NzfAWNeL7n81NTXYu3cvNm3aBAC4efMm7t69CyEEGhoasGfPHsTjcbS2tpo92obneStdKqWk4zh0HOcfTyal5ODgIOPxOKurq9nQ0MBYLMarV68aHe0h13'+
			'V/6VIhhEAkEjEncV03wNa2bQCAEAIjIyMoKCjA48ePcefOHRQVFWF0dDQwPfQ7ALM3MJ6UUgFFDazdkpeXZ751BgshIKUMrFmWBcuyIISAEEtjVu/1ixBCwLIshEIhEwPNyJfJEEKgsbERHz9+RH19PZqamvD+/Xs0NjaCy+04m80CWJqfet+PEmjevxLbts1pr1+/jvv378PzPOzbtw87d+5cwUQ3fP9A/8+A/slP3+0gm80iJycHwJK7dUaShJRyBdBvMXQcB+FwGKFQCEopSCmRk5NjjCulTOx1jPXBfhtQM9QJ4jfkZ6yZ6thrsz8C/+utTSeAPrVSCkqppQuRZZmLkud5gZLQmfujfAdKQKNbr8k8fAAAAABJRU5ErkJggg==';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 1";
		el.ggDx=-129;
		el.ggDy=-32;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 23px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 23px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._image_110.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_110.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._internet_e_escritrioii.appendChild(me._image_110);
		el=me._espao_de_trabalho_exclusivo1=document.createElement('div');
		els=me._espao_de_trabalho_exclusivo1__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Espa\xe7o de trabalho exclusivo";
		el.ggDx=21;
		el.ggDy=28;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text tooltip";
		el.ggType='text';
		hs ='';
		hs+='height : 60px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 241px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 243px;';
		hs+='height: auto;';
		hs+='background: #ffffff;';
		hs+='background: rgba(255,255,255,0);';
		hs+='border: 1px solid #55aa7f;';
		hs+='border: 1px solid rgba(85,170,127,0);';
		hs+=cssPrefix + 'background-clip: padding-box;';
		hs+='background-clip: padding-box;';
		hs+='border-radius: 10px;';
		hs+=cssPrefix + 'border-radius: 10px;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: left;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 2px 3px 2px 3px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		els.innerHTML="Espa\xe7o de trabalho exclusivo<br\/>Em um espa\xe7o privativo com cadeira <br\/>ergon\xf4mica e suporte para notebook";
		el.appendChild(els);
		me._espao_de_trabalho_exclusivo1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._espao_de_trabalho_exclusivo1.logicBlock_text = function() {
			var newLogicStateText;
			if (
				((player.getVariableValue('POR') == true))
			)
			{
				newLogicStateText = 0;
			}
			else if (
				((player.getVariableValue('ENG') == true))
			)
			{
				newLogicStateText = 1;
			}
			else if (
				((player.getVariableValue('ESP') == true))
			)
			{
				newLogicStateText = 2;
			}
			else {
				newLogicStateText = -1;
			}
			if (me._espao_de_trabalho_exclusivo1.ggCurrentLogicStateText != newLogicStateText) {
				me._espao_de_trabalho_exclusivo1.ggCurrentLogicStateText = newLogicStateText;
				me._espao_de_trabalho_exclusivo1.style[domTransition]='';
				if (me._espao_de_trabalho_exclusivo1.ggCurrentLogicStateText == 0) {
					me._espao_de_trabalho_exclusivo1.ggText="Espa\xe7o de trabalho exclusivo\nEm um espa\xe7o privativo com cadeira \nergon\xf4mica e suporte para notebook";
					me._espao_de_trabalho_exclusivo1__text.innerHTML=me._espao_de_trabalho_exclusivo1.ggText;
					if (me._espao_de_trabalho_exclusivo1.ggUpdateText) {
					me._espao_de_trabalho_exclusivo1.ggUpdateText=function() {
						var hs="Espa\xe7o de trabalho exclusivo\nEm um espa\xe7o privativo com cadeira \nergon\xf4mica e suporte para notebook";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._espao_de_trabalho_exclusivo1.ggUpdatePosition) me._espao_de_trabalho_exclusivo1.ggUpdatePosition();
					}
				}
				else if (me._espao_de_trabalho_exclusivo1.ggCurrentLogicStateText == 1) {
					me._espao_de_trabalho_exclusivo1.ggText="Dedicated workspace\nin private space with an\nengonomic chair and laptop";
					me._espao_de_trabalho_exclusivo1__text.innerHTML=me._espao_de_trabalho_exclusivo1.ggText;
					if (me._espao_de_trabalho_exclusivo1.ggUpdateText) {
					me._espao_de_trabalho_exclusivo1.ggUpdateText=function() {
						var hs="Dedicated workspace\nin private space with an\nengonomic chair and laptop";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._espao_de_trabalho_exclusivo1.ggUpdatePosition) me._espao_de_trabalho_exclusivo1.ggUpdatePosition();
					}
				}
				else if (me._espao_de_trabalho_exclusivo1.ggCurrentLogicStateText == 2) {
					me._espao_de_trabalho_exclusivo1.ggText="Espacio de trabajo dedicado\nen un espacio privado con silla \nengonomica y soporte de notebook";
					me._espao_de_trabalho_exclusivo1__text.innerHTML=me._espao_de_trabalho_exclusivo1.ggText;
					if (me._espao_de_trabalho_exclusivo1.ggUpdateText) {
					me._espao_de_trabalho_exclusivo1.ggUpdateText=function() {
						var hs="Espacio de trabajo dedicado\nen un espacio privado con silla \nengonomica y soporte de notebook";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._espao_de_trabalho_exclusivo1.ggUpdatePosition) me._espao_de_trabalho_exclusivo1.ggUpdatePosition();
					}
				}
				else {
					me._espao_de_trabalho_exclusivo1.ggText="Espa\xe7o de trabalho exclusivo\nEm um espa\xe7o privativo com cadeira \nergon\xf4mica e suporte para notebook";
					me._espao_de_trabalho_exclusivo1__text.innerHTML=me._espao_de_trabalho_exclusivo1.ggText;
					if (me._espao_de_trabalho_exclusivo1.ggUpdateText) {
					me._espao_de_trabalho_exclusivo1.ggUpdateText=function() {
						var hs="Espa\xe7o de trabalho exclusivo\nEm um espa\xe7o privativo com cadeira \nergon\xf4mica e suporte para notebook";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._espao_de_trabalho_exclusivo1.ggUpdatePosition) me._espao_de_trabalho_exclusivo1.ggUpdatePosition();
					}
				}
			}
		}
		me._espao_de_trabalho_exclusivo1.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 2;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._internet_e_escritrioii.appendChild(me._espao_de_trabalho_exclusivo1);
		el=me._rectangle_29=document.createElement('div');
		el.ggId="Rectangle 2";
		el.ggDx=-130;
		el.ggDy=27;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 200px;';
		hs+='border-radius : 200px;';
		hs+='background : #ffffff;';
		hs+='border : 1px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 32px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 30px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._rectangle_29.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_29.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._internet_e_escritrioii.appendChild(me._rectangle_29);
		el=me._ht_image_info19=document.createElement('div');
		el.ggId="ht_image_info-1";
		el.ggDx=-130;
		el.ggDy=27;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 100px;';
		hs+='border-radius : 100px;';
		hs+='background : #ffffff;';
		hs+='border : 1px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 50px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_image_info19.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._ht_image_info19.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._ht_image_info29=document.createElement('div');
		el.ggId="ht_image_info-2";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 200px;';
		hs+='border-radius : 200px;';
		hs+='border : 4px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 32px;';
		hs+='left : -10000px;';
		hs+='opacity : 0.8;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 30px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_image_info29.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._ht_image_info29.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._ht_image_info19.appendChild(me._ht_image_info29);
		me._internet_e_escritrioii.appendChild(me._ht_image_info19);
		el=me._image_19=document.createElement('div');
		els=me._image_19__img=document.createElement('img');
		els.className='ggskin ggskin_image_19';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAE0UlEQVRIia2Xu4sUSxTGf/XqdnoNVERwQEUjZRODFXUFwUgQzHYwEEH/CR/g/yKCTKCYaKbRKqLigzHYBQPxFYiyBuLOznRXV9UN1qpbs7vcvffqSaZ7uqu+c77znXOqRQgh8JvmnEMpRdu2aK3x3iOlBCCEgBAiXVtrKYoC8SeAvfcACSxaDuqcQ0qZ7iff/J+gUkqklDjnCCEQYwkh4JxL1/n/vw2cmxACIQTWWmCSAa11ug4h/BmqNzJrLUoppJTrKFdK/T5wpFdrzcrKCv1+n7quqeuavXv3cubMGaqqSsJLFv6A1XUdQgjh3r17Yffu3eHQoUPh4MGDYdeuXeH+/fshhBCstRNrfjvHIQSKoiCEwMOHDzlw4ACDwYA3b96wb98+Hjx4APyd48'+
			'jQpsC5Kr33OOdS+cCqoJxzCCGYn5/nyJEjFEVBURQcO3aMR48erXMU/kU5KaX48uVLUmwuGGstIQSUUrx69Yrl5WXOnj1L0zQ45zh9+jQ/fvxgMBgwGo3w3qfINwV+/vw5p06d4smTJ6lUokqNMSmC+fl5mqZBSsmzZ894/fp1ahiPHz+m0+mk8hJCoP8JFODo0aNUVcWNGzeYnZ3FGAOsbxwfP35k69atXLp0CSklSinG4zFSShYWFmiaBgBjzCp7m5XT06dPuXz5Mt++fWNmZoa2bZmbm6PX66WaDCGwuLjIz58/KcuS69evY4zhypUrGGPodrt0u11gNcdN02we8cuXL/n8+TOzs7MAvH//ntu3b9Pr9VBKJeqmp6cBWFlZYdu2bUgpOX78eHKurmvKskQIQVmWmwMbY6jrmn6/D8Dc3BxVVeG9T/mNDrRtS1VV'+
			'OOcStUopvPeUZZkqwhizOfBwOGT79u3Aahusqoq6rpNQYmk55yY6U1mWwOSEUkqhlMJai2jbNkSPrbUMBgN6vR4ARVHQtm1aHDfw3qfSisD5zE21+kvV1lqEENy5c4fDhw+jtUZLKWnbNtHa7Xa5du0aN2/eRClFr9fbEDgHE0JMjMAI6L3n7t27eO+5ePEi3W4XrTVt265XddM0KKU4f/48Wmtu3bqVIohAMbL4GxtKLLE8+gsXLuCco9/vp9MHgM6PK9HbmIu1gz0Hzq/jfUxZbvnJQwiR2NW5IPKGEOnLKd7INnqWBxEZiWpOzkSJx/zEB845jDETAyHSGUspV/RadqLqjTHpeb6PjvTEF51zFEWBMSY19rzHbkR33GMtQ9ZaRqMRnU4nOaCUQmuNzLUVaYmL3r59y3g8Tmeo+E6+Zi0j0UajEV+/fmVxcZG6rl'+
			'NwkS0dE66UmigLpRTLy8ucPHmSPXv2sGPHDpqmScqUUlLXNd57pqam8N4zGo0wxrBlyxaWlpb48OED4/GYoiiSyGJgOp6X8hzGyTI9Pc2JEyd49+4dS0tLVFVFp9NhOBwmQCklw+EQIQRTU1PUdc3379/ZuXMnMzMzvHjxgvF4nKokKlyvPXDHfBlj0Fpz9erVtaL9T3bu3LkUZdzbOfd3A1n7NbCwsEBRFOzfv3/9mfhXV7LWYozZ8AsiKvnTp080TZOmV+p61toQ8xutaZrUpyNo27YTOcotCiaPKJ9YWuu0Z7SJiOOCfPK0bTuxIDoQRam1nujhuWNRWPkHXBTyX4pPkKd8pr4IAAAAAElFTkSuQmCC';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 1";
		el.ggDx=-130;
		el.ggDy=27;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 20px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 20px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._image_19.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_19.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._internet_e_escritrioii.appendChild(me._image_19);
		me._internet_e_escritrioi.appendChild(me._internet_e_escritrioii);
		me.divSkin.appendChild(me._internet_e_escritrioi);
		el=me._privacidade_e_seguranai=document.createElement('div');
		el.ggId="PRIVACIDADE E SEGURAN\xc7A-I";
		el.ggDx=-9;
		el.ggDy=-1;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 20px;';
		hs+='border-radius : 20px;';
		hs+='background : #5e5e5e;';
		hs+='border : 5px solid #ffffff;';
		hs+='cursor : default;';
		hs+='height : 62px;';
		hs+='left : -10000px;';
		hs+='opacity : 0.7;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 254px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._privacidade_e_seguranai.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._privacidade_e_seguranai.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getViewerSize().height <= 400))
			)
			{
				newLogicStatePosition = 0;
			}
			else if (
				((player.getViewerSize().width < 1084))
			)
			{
				newLogicStatePosition = 1;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._privacidade_e_seguranai.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._privacidade_e_seguranai.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._privacidade_e_seguranai.style[domTransition]='left 0s, top 0s, ' + cssPrefix + 'transform 0s';
				if (me._privacidade_e_seguranai.ggCurrentLogicStatePosition == 0) {
					this.ggDx = 50;
					this.ggDy = 25;
					me._privacidade_e_seguranai.ggUpdatePosition(true);
				}
				else if (me._privacidade_e_seguranai.ggCurrentLogicStatePosition == 1) {
					this.ggDx = 55;
					this.ggDy = -135;
					me._privacidade_e_seguranai.ggUpdatePosition(true);
				}
				else {
					me._privacidade_e_seguranai.ggDx=-9;
					me._privacidade_e_seguranai.ggDy=-1;
					me._privacidade_e_seguranai.ggUpdatePosition(true);
				}
			}
		}
		me._privacidade_e_seguranai.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getViewerSize().height <= 400))
			)
			{
				newLogicStateScaling = 0;
			}
			else if (
				((player.getViewerSize().width < 1084))
			)
			{
				newLogicStateScaling = 1;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._privacidade_e_seguranai.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._privacidade_e_seguranai.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._privacidade_e_seguranai.style[domTransition]='left 0s, top 0s, ' + cssPrefix + 'transform 0s';
				if (me._privacidade_e_seguranai.ggCurrentLogicStateScaling == 0) {
					me._privacidade_e_seguranai.ggParameter.sx = 0.85;
					me._privacidade_e_seguranai.ggParameter.sy = 0.75;
					me._privacidade_e_seguranai.style[domTransform]=parameterToTransform(me._privacidade_e_seguranai.ggParameter);
				}
				else if (me._privacidade_e_seguranai.ggCurrentLogicStateScaling == 1) {
					me._privacidade_e_seguranai.ggParameter.sx = 0.85;
					me._privacidade_e_seguranai.ggParameter.sy = 0.85;
					me._privacidade_e_seguranai.style[domTransform]=parameterToTransform(me._privacidade_e_seguranai.ggParameter);
				}
				else {
					me._privacidade_e_seguranai.ggParameter.sx = 1;
					me._privacidade_e_seguranai.ggParameter.sy = 1;
					me._privacidade_e_seguranai.style[domTransform]=parameterToTransform(me._privacidade_e_seguranai.ggParameter);
				}
			}
		}
		me._privacidade_e_seguranai.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('INFO') == false))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._privacidade_e_seguranai.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._privacidade_e_seguranai.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._privacidade_e_seguranai.style[domTransition]='left 0s, top 0s, ' + cssPrefix + 'transform 0s';
				if (me._privacidade_e_seguranai.ggCurrentLogicStateVisible == 0) {
					me._privacidade_e_seguranai.style.visibility="hidden";
					me._privacidade_e_seguranai.ggVisible=false;
				}
				else {
					me._privacidade_e_seguranai.style.visibility="hidden";
					me._privacidade_e_seguranai.ggVisible=false;
				}
			}
		}
		me._privacidade_e_seguranai.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._privacidade_e_seguranaii=document.createElement('div');
		el.ggId="PRIVACIDADE E SEGURAN\xc7A-II";
		el.ggDx=4;
		el.ggDy=-2;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 68px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 246px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._privacidade_e_seguranaii.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._privacidade_e_seguranaii.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._tranca_na_porta_do_quarto=document.createElement('div');
		els=me._tranca_na_porta_do_quarto__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Tranca na porta do quarto";
		el.ggDx=24;
		el.ggDy=1;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text tooltip";
		el.ggType='text';
		hs ='';
		hs+='height : 27px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 170px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 172px;';
		hs+='height: auto;';
		hs+='background: #ffffff;';
		hs+='background: rgba(255,255,255,0);';
		hs+='border: 1px solid #55aa7f;';
		hs+='border: 1px solid rgba(85,170,127,0);';
		hs+=cssPrefix + 'background-clip: padding-box;';
		hs+='background-clip: padding-box;';
		hs+='border-radius: 10px;';
		hs+=cssPrefix + 'border-radius: 10px;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: left;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 2px 3px 2px 3px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		els.innerHTML="Tranca na porta do quarto";
		el.appendChild(els);
		me._tranca_na_porta_do_quarto.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._tranca_na_porta_do_quarto.logicBlock_text = function() {
			var newLogicStateText;
			if (
				((player.getVariableValue('POR') == true))
			)
			{
				newLogicStateText = 0;
			}
			else if (
				((player.getVariableValue('ENG') == true))
			)
			{
				newLogicStateText = 1;
			}
			else if (
				((player.getVariableValue('ESP') == true))
			)
			{
				newLogicStateText = 2;
			}
			else {
				newLogicStateText = -1;
			}
			if (me._tranca_na_porta_do_quarto.ggCurrentLogicStateText != newLogicStateText) {
				me._tranca_na_porta_do_quarto.ggCurrentLogicStateText = newLogicStateText;
				me._tranca_na_porta_do_quarto.style[domTransition]='';
				if (me._tranca_na_porta_do_quarto.ggCurrentLogicStateText == 0) {
					me._tranca_na_porta_do_quarto.ggText="Tranca na porta do quarto";
					me._tranca_na_porta_do_quarto__text.innerHTML=me._tranca_na_porta_do_quarto.ggText;
					if (me._tranca_na_porta_do_quarto.ggUpdateText) {
					me._tranca_na_porta_do_quarto.ggUpdateText=function() {
						var hs="Tranca na porta do quarto";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._tranca_na_porta_do_quarto.ggUpdatePosition) me._tranca_na_porta_do_quarto.ggUpdatePosition();
					}
				}
				else if (me._tranca_na_porta_do_quarto.ggCurrentLogicStateText == 1) {
					me._tranca_na_porta_do_quarto.ggText="Lock on bedroom door";
					me._tranca_na_porta_do_quarto__text.innerHTML=me._tranca_na_porta_do_quarto.ggText;
					if (me._tranca_na_porta_do_quarto.ggUpdateText) {
					me._tranca_na_porta_do_quarto.ggUpdateText=function() {
						var hs="Lock on bedroom door";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._tranca_na_porta_do_quarto.ggUpdatePosition) me._tranca_na_porta_do_quarto.ggUpdatePosition();
					}
				}
				else if (me._tranca_na_porta_do_quarto.ggCurrentLogicStateText == 2) {
					me._tranca_na_porta_do_quarto.ggText="cerradura en la\npuerta del cuarto";
					me._tranca_na_porta_do_quarto__text.innerHTML=me._tranca_na_porta_do_quarto.ggText;
					if (me._tranca_na_porta_do_quarto.ggUpdateText) {
					me._tranca_na_porta_do_quarto.ggUpdateText=function() {
						var hs="cerradura en la\npuerta del cuarto";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._tranca_na_porta_do_quarto.ggUpdatePosition) me._tranca_na_porta_do_quarto.ggUpdatePosition();
					}
				}
				else {
					me._tranca_na_porta_do_quarto.ggText="Tranca na porta do quarto";
					me._tranca_na_porta_do_quarto__text.innerHTML=me._tranca_na_porta_do_quarto.ggText;
					if (me._tranca_na_porta_do_quarto.ggUpdateText) {
					me._tranca_na_porta_do_quarto.ggUpdateText=function() {
						var hs="Tranca na porta do quarto";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._tranca_na_porta_do_quarto.ggUpdatePosition) me._tranca_na_porta_do_quarto.ggUpdatePosition();
					}
				}
			}
		}
		me._tranca_na_porta_do_quarto.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 2;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._privacidade_e_seguranaii.appendChild(me._tranca_na_porta_do_quarto);
		el=me._rectangle_28=document.createElement('div');
		el.ggId="Rectangle 2";
		el.ggDx=-102;
		el.ggDy=3;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 200px;';
		hs+='border-radius : 200px;';
		hs+='background : #ffffff;';
		hs+='border : 1px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 32px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 30px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._rectangle_28.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_28.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._privacidade_e_seguranaii.appendChild(me._rectangle_28);
		el=me._ht_image_info18=document.createElement('div');
		el.ggId="ht_image_info-1";
		el.ggDx=-102;
		el.ggDy=3;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 100px;';
		hs+='border-radius : 100px;';
		hs+='background : #ffffff;';
		hs+='border : 1px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 50px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_image_info18.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._ht_image_info18.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._ht_image_info28=document.createElement('div');
		el.ggId="ht_image_info-2";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 200px;';
		hs+='border-radius : 200px;';
		hs+='border : 4px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 32px;';
		hs+='left : -10000px;';
		hs+='opacity : 0.8;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 30px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_image_info28.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._ht_image_info28.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._ht_image_info18.appendChild(me._ht_image_info28);
		me._privacidade_e_seguranaii.appendChild(me._ht_image_info18);
		el=me._image_18=document.createElement('div');
		els=me._image_18__img=document.createElement('img');
		els.className='ggskin ggskin_image_18';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAAAfCAYAAAAbW8YEAAAEzUlEQVRIiaVXTWsUTRB+unu6Z3cP6iWgkQS8SLwtfh0jBD1KIP4DBREPwZMX8RLwKOLVHyAo5CR6Cgi5KRIEr5qQb4iHFYy7sz3dXe8hVr09MSFvfAuG2Zmt6qe+q0YREQFASglaawBAjBHGGLkDABFBKQWmEAK01vJOKSVnxBihlILWGkQEIoLWWv7XvzEbBzKQMQbeexARYozyf13XcqhSCjFGeO8bZzAg8/E7AFApJWLm/dbmluTW5hblSrIHiqIQfpZpYCilwNbmlFISxsFg8Ic3+Jll+c4K1HUtISAipJREpsgtYCsBwForh3358gXeezjnoLWG9x5aawHw3gMAnHMIIcjvCxcuwForwA3QPMg5/fz5E1NTU/jx4wdSSkgpCVCMEUQEa63Ipp'+
			'QQQpB3ZVniw4cPOHHiRCMRC35gTditRITV1VXs7u7i4cOH6Ha7SCk13JhSamQ6W6i1xtLSEp4+fYr19XVMTEw0qqFgzfI48dXr9dDv93Hp0iV0u10QkYCxV3Kl2ZIYI0IIqKoKvV7vDw9qBpR0/i1IRHDOwTmHfr8vMeSa49gppaRc8mweDocwxjQM4tA0VTiAODYhBHG9975RFs451HUNYwxCCIgxwjknGbufiqNAhfE3SEoJzjkAwMbGBogIY2NjsNaK+5VScj+IjrSUiMSVeSzv37+P69ev48aNG5idnW0kIF+H0X9yL7uJAXd2dvD27VvcunULMzMzePPmDba2toSHs5qV3U9HurcsS5RlCWCvyxARNjc3obXG+fPnxbrt7W2MjIygKApJIJY7NmhVVVL0xhhorbGysoKyLPH48WNoreGcw8bGBq5cuSItL4Qg'+
			'nerYoKw1l8ra2hrm5uZw8eJFTE9PQymF+fl5PHnyBJcvX8bY2JiMNk6+Y4Oy+/iAV69ewXuP58+fSxZPTU1hcnIS8/PzePDgwd7MzHrzsUGJCP1+X4r/27dvGB8fx8jICGZnZ2GMwbNnz3D27Fl8/fpVMvzXr19/795Wq4WiKGTKnD59GouLi9je3sbc3BwAYGtrC6urq7h27ZrM2f+VSL1eD6dOnRL33r59Gy9fvsSjR49w8+ZNhBDw7t07EBHu3Lkj9Xry5Ens7u7+HWin08HOzg4mJiYAAOPj43j9+jXu3buHhYUFxBjl3ZkzZ0Tu+/fv6HQ6fwdaFIUkDPfXbreL9+/fY3NzE8YYjI6OoixLpJTgvUer1YJz7tCudCQoN/eUUmNitNttnDt3rjHUjTESR2vtoYl0ZBu01qKqKnnm8cXNnfssg3OJDYfDQ92rua'+
			'/mK2YIQbY+Xkl4hvIQZ8q3vFzWWtsYh3kfLliAs7Oua1hr8fHjRywvL4OI8OnTJ+HRWqOqKhRF0Rj4IQS0Wi1pgUtLSyAiLC8vwxiDq1evytmKiCjfVXkI3717F4uLi1BKodPpwHsvGwJ3m+FwCGBvKMQYxTP5xkFEmJycxIsXL/b2o6KAGg6HxNmZ0+fPnzEYDGCtxWAwEIF8J8pHXr4nseLtdht1XaPdbqPb7f4bEv6WqapKNrmD1tE83hzL/esogEObfL6m6jym3MLqum4wM8UYURSFWFzXtcxYfp8nZC5b17V8qsiGL5ua1of2zP0fWXkiHcSTU1mWwvcPJDIu2aevyD0AAAAASUVORK5CYII=';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 1";
		el.ggDx=-102;
		el.ggDy=3;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 28px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 18px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._image_18.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_18.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._privacidade_e_seguranaii.appendChild(me._image_18);
		me._privacidade_e_seguranai.appendChild(me._privacidade_e_seguranaii);
		me.divSkin.appendChild(me._privacidade_e_seguranai);
		el=me._estacionamento_e_instalaesi=document.createElement('div');
		el.ggId="ESTACIONAMENTO E INSTALA\xc7\xd5ES-I";
		el.ggDx=-14;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 20px;';
		hs+='border-radius : 20px;';
		hs+='background : #5e5e5e;';
		hs+='border : 5px solid #ffffff;';
		hs+='cursor : default;';
		hs+='height : 72px;';
		hs+='left : -10000px;';
		hs+='opacity : 0.7;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 244px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._estacionamento_e_instalaesi.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._estacionamento_e_instalaesi.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getViewerSize().height <= 400))
			)
			{
				newLogicStatePosition = 0;
			}
			else if (
				((player.getViewerSize().width < 1084))
			)
			{
				newLogicStatePosition = 1;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._estacionamento_e_instalaesi.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._estacionamento_e_instalaesi.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._estacionamento_e_instalaesi.style[domTransition]='left 0s, top 0s, ' + cssPrefix + 'transform 0s';
				if (me._estacionamento_e_instalaesi.ggCurrentLogicStatePosition == 0) {
					this.ggDx = 50;
					this.ggDy = 25;
					me._estacionamento_e_instalaesi.ggUpdatePosition(true);
				}
				else if (me._estacionamento_e_instalaesi.ggCurrentLogicStatePosition == 1) {
					this.ggDx = 55;
					this.ggDy = -135;
					me._estacionamento_e_instalaesi.ggUpdatePosition(true);
				}
				else {
					me._estacionamento_e_instalaesi.ggDx=-14;
					me._estacionamento_e_instalaesi.ggDy=0;
					me._estacionamento_e_instalaesi.ggUpdatePosition(true);
				}
			}
		}
		me._estacionamento_e_instalaesi.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getViewerSize().height <= 400))
			)
			{
				newLogicStateScaling = 0;
			}
			else if (
				((player.getViewerSize().width < 1084))
			)
			{
				newLogicStateScaling = 1;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._estacionamento_e_instalaesi.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._estacionamento_e_instalaesi.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._estacionamento_e_instalaesi.style[domTransition]='left 0s, top 0s, ' + cssPrefix + 'transform 0s';
				if (me._estacionamento_e_instalaesi.ggCurrentLogicStateScaling == 0) {
					me._estacionamento_e_instalaesi.ggParameter.sx = 0.85;
					me._estacionamento_e_instalaesi.ggParameter.sy = 0.75;
					me._estacionamento_e_instalaesi.style[domTransform]=parameterToTransform(me._estacionamento_e_instalaesi.ggParameter);
				}
				else if (me._estacionamento_e_instalaesi.ggCurrentLogicStateScaling == 1) {
					me._estacionamento_e_instalaesi.ggParameter.sx = 0.85;
					me._estacionamento_e_instalaesi.ggParameter.sy = 0.85;
					me._estacionamento_e_instalaesi.style[domTransform]=parameterToTransform(me._estacionamento_e_instalaesi.ggParameter);
				}
				else {
					me._estacionamento_e_instalaesi.ggParameter.sx = 1;
					me._estacionamento_e_instalaesi.ggParameter.sy = 1;
					me._estacionamento_e_instalaesi.style[domTransform]=parameterToTransform(me._estacionamento_e_instalaesi.ggParameter);
				}
			}
		}
		me._estacionamento_e_instalaesi.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('INFO') == false))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._estacionamento_e_instalaesi.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._estacionamento_e_instalaesi.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._estacionamento_e_instalaesi.style[domTransition]='left 0s, top 0s, ' + cssPrefix + 'transform 0s';
				if (me._estacionamento_e_instalaesi.ggCurrentLogicStateVisible == 0) {
					me._estacionamento_e_instalaesi.style.visibility="hidden";
					me._estacionamento_e_instalaesi.ggVisible=false;
				}
				else {
					me._estacionamento_e_instalaesi.style.visibility="hidden";
					me._estacionamento_e_instalaesi.ggVisible=false;
				}
			}
		}
		me._estacionamento_e_instalaesi.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._estacionamento_e_instalaesii=document.createElement('div');
		el.ggId="ESTACIONAMENTO E INSTALA\xc7\xd5ES-II";
		el.ggDx=11;
		el.ggDy=-4;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 68px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 246px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._estacionamento_e_instalaesii.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._estacionamento_e_instalaesii.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._garagem_residencial_gratuita_na_propriedade=document.createElement('div');
		els=me._garagem_residencial_gratuita_na_propriedade__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Garagem residencial gratuita na propriedade";
		el.ggDx=19;
		el.ggDy=2;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text tooltip";
		el.ggType='text';
		hs ='';
		hs+='height : 43px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 183px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 185px;';
		hs+='height: auto;';
		hs+='background: #ffffff;';
		hs+='background: rgba(255,255,255,0);';
		hs+='border: 1px solid #55aa7f;';
		hs+='border: 1px solid rgba(85,170,127,0);';
		hs+=cssPrefix + 'background-clip: padding-box;';
		hs+='background-clip: padding-box;';
		hs+='border-radius: 10px;';
		hs+=cssPrefix + 'border-radius: 10px;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: left;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 2px 3px 2px 3px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		els.innerHTML="Garagem residencial<br\/>gratuita na propriedade";
		el.appendChild(els);
		me._garagem_residencial_gratuita_na_propriedade.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._garagem_residencial_gratuita_na_propriedade.logicBlock_text = function() {
			var newLogicStateText;
			if (
				((player.getVariableValue('POR') == true))
			)
			{
				newLogicStateText = 0;
			}
			else if (
				((player.getVariableValue('ENG') == true))
			)
			{
				newLogicStateText = 1;
			}
			else if (
				((player.getVariableValue('ESP') == true))
			)
			{
				newLogicStateText = 2;
			}
			else {
				newLogicStateText = -1;
			}
			if (me._garagem_residencial_gratuita_na_propriedade.ggCurrentLogicStateText != newLogicStateText) {
				me._garagem_residencial_gratuita_na_propriedade.ggCurrentLogicStateText = newLogicStateText;
				me._garagem_residencial_gratuita_na_propriedade.style[domTransition]='';
				if (me._garagem_residencial_gratuita_na_propriedade.ggCurrentLogicStateText == 0) {
					me._garagem_residencial_gratuita_na_propriedade.ggText="Garagem residencial\ngratuita na propriedade";
					me._garagem_residencial_gratuita_na_propriedade__text.innerHTML=me._garagem_residencial_gratuita_na_propriedade.ggText;
					if (me._garagem_residencial_gratuita_na_propriedade.ggUpdateText) {
					me._garagem_residencial_gratuita_na_propriedade.ggUpdateText=function() {
						var hs="Garagem residencial\ngratuita na propriedade";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._garagem_residencial_gratuita_na_propriedade.ggUpdatePosition) me._garagem_residencial_gratuita_na_propriedade.ggUpdatePosition();
					}
				}
				else if (me._garagem_residencial_gratuita_na_propriedade.ggCurrentLogicStateText == 1) {
					me._garagem_residencial_gratuita_na_propriedade.ggText="Free residential\ngarage on premises";
					me._garagem_residencial_gratuita_na_propriedade__text.innerHTML=me._garagem_residencial_gratuita_na_propriedade.ggText;
					if (me._garagem_residencial_gratuita_na_propriedade.ggUpdateText) {
					me._garagem_residencial_gratuita_na_propriedade.ggUpdateText=function() {
						var hs="Free residential\ngarage on premises";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._garagem_residencial_gratuita_na_propriedade.ggUpdatePosition) me._garagem_residencial_gratuita_na_propriedade.ggUpdatePosition();
					}
				}
				else if (me._garagem_residencial_gratuita_na_propriedade.ggCurrentLogicStateText == 2) {
					me._garagem_residencial_gratuita_na_propriedade.ggText="Cochera residencial\ngratiuta en la propiedad";
					me._garagem_residencial_gratuita_na_propriedade__text.innerHTML=me._garagem_residencial_gratuita_na_propriedade.ggText;
					if (me._garagem_residencial_gratuita_na_propriedade.ggUpdateText) {
					me._garagem_residencial_gratuita_na_propriedade.ggUpdateText=function() {
						var hs="Cochera residencial\ngratiuta en la propiedad";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._garagem_residencial_gratuita_na_propriedade.ggUpdatePosition) me._garagem_residencial_gratuita_na_propriedade.ggUpdatePosition();
					}
				}
				else {
					me._garagem_residencial_gratuita_na_propriedade.ggText="Garagem residencial\ngratuita na propriedade";
					me._garagem_residencial_gratuita_na_propriedade__text.innerHTML=me._garagem_residencial_gratuita_na_propriedade.ggText;
					if (me._garagem_residencial_gratuita_na_propriedade.ggUpdateText) {
					me._garagem_residencial_gratuita_na_propriedade.ggUpdateText=function() {
						var hs="Garagem residencial\ngratuita na propriedade";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._garagem_residencial_gratuita_na_propriedade.ggUpdatePosition) me._garagem_residencial_gratuita_na_propriedade.ggUpdatePosition();
					}
				}
			}
		}
		me._garagem_residencial_gratuita_na_propriedade.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 2;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._estacionamento_e_instalaesii.appendChild(me._garagem_residencial_gratuita_na_propriedade);
		el=me._rectangle_27=document.createElement('div');
		el.ggId="Rectangle 2";
		el.ggDx=-102;
		el.ggDy=3;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 200px;';
		hs+='border-radius : 200px;';
		hs+='background : #ffffff;';
		hs+='border : 1px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 32px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 30px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._rectangle_27.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_27.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._estacionamento_e_instalaesii.appendChild(me._rectangle_27);
		el=me._ht_image_info17=document.createElement('div');
		el.ggId="ht_image_info-1";
		el.ggDx=-102;
		el.ggDy=3;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 100px;';
		hs+='border-radius : 100px;';
		hs+='background : #ffffff;';
		hs+='border : 1px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 50px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_image_info17.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._ht_image_info17.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._ht_image_info27=document.createElement('div');
		el.ggId="ht_image_info-2";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 200px;';
		hs+='border-radius : 200px;';
		hs+='border : 4px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 32px;';
		hs+='left : -10000px;';
		hs+='opacity : 0.8;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 30px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_image_info27.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._ht_image_info27.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._ht_image_info17.appendChild(me._ht_image_info27);
		me._estacionamento_e_instalaesii.appendChild(me._ht_image_info17);
		el=me._image_17=document.createElement('div');
		els=me._image_17__img=document.createElement('img');
		els.className='ggskin ggskin_image_17';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAVCAYAAAAjODzXAAAFBElEQVRIiYWWvWtVTRDGf2fPno+QYCxvsIoJMQgJiKjEQgSLgKBgkxRa2RkU/wNJH03hR2uvjWAaDQqmSSy00UIEu0swCJomJ/fuObs7b2F233OjL+/A4SzL7OzMPPPMbOKcE6UUzjnSNAVARDDGUJYlbWnr/JcEHRFBRFBKYYwhz3OSJBnQ8d6jlAIgqetasixDRPDeIyJorQeM13XN58+faZomHnbOobVGRAYuV0qhtWZ2dpYsy/5wMkmS+DVNE3USEZGQheAxgLU2XnL37l3evXtHkiQYY0jTNEYSxHuPc46yLBERLl68yMOHD1FKkSTJ/2ZSB0+999E7733MSrfbZX19ndu3b3PmzBnSNCVJEvI8p9/vkyQJRVFQ1zXee7z3fPjwgcePH7O9vc'+
			'34+HiEOwRqrUUpNRhM0zQSxHs/sLbWyvLyshw/flx2d3f/0LHWinPuj/O7u7syPj4uy8vLYq39w277fBDCwjkXjXrvxRgj3nuZnZ2VpaUlERExxsSDdV1Ho3Vdx/1+vy8iIrdu3ZKZmZl4Luh67wecD6IDFABKKXq9Hmtra7x69Yrv379TVRULCwt47yPOzrnfBXaQ6nbBaq3x3rO4uMj6+jqXL19mbGyM+fl5rly5wtDQUCRGGxp9mJJlWZLnOVVV0e12UUqRZRlbW1sURYG1FoA8z9nf30dEGB4epmma3wa1jnRVStHtdjly5AhFUTA0NBQDDgGFuxNrrbQjDTT8+vUrV69epa5ryrLEWou1luHhYfb29tBaR4Pee6y1jIyMUFUVWmu01vT7fbTWbGxs0Ol0IoP+1o8SEZE2nwGqquLs2bN0Oh0WFxeZnJxkeHiY'+
			'oijY29ujLMt4SWBB2BsZGcEYQ1VVfPv2jefPn9M0DS9fvmR0dBRrLVprnHODPatdxQdOybNnz+TkyZPy+vXrgcre398fKMi2hL2gE1jx5s0bmZiYkM3NTTHGDNhrr3UouLquyfMcrTXb29t47zl37hy/fv3i48ePXLp0iS9fvrC1tRWzIb97IUmSxKzMzc0xMzPD27dvOX36NBcuXKCqKj59+sTc3FwkxmF4dKjePM8B6Pf7ZFmGMYbR0VFevHjB06dPmZ+fZ2Njg0ePHiEiFEVBr9cDYGhoCGMMSZJw584dTp06xZMnT7h58ybXrl3j6NGjUTdAc7gz005RaG6rq6syMTER90OfOAyj9/6ve+0zzjmZmpqSBw8eSK/X+yucIiIq0KmdqjRNqev6X2odwBf+xpiBAeacwxjzV12lFPv7+7HYQ5E65yiK4l9oAs7h0k'+
			'C/NE25fv061lryPKdpGtI0pWmaSNM27QOtsyzDOUeWZdR1jdaasiypqmpg+LUHLIBqRwXE5pSmKc45dnZ22NzcjIMuTNkDWKPRw4Nzc3OTnZ2dGH27PTRNg1IqngegjVuoiZWVFTlx4oSIiNy/f18mJyelPRwPU69pmoFaaZpGpqamZHV1VUREpqenZWVlRQ5Le3bp0DWVUqRpSlVVjI2NUdc1CwsL/Pz5k7IsY+MJ2Rig3kGDCvtaa7IsY21tjffv30ebxhiKoohPgsBUgPTevXvL4Y0ResGxY8f48eNHbOlLS0tMT09HXIMTxpg4DEP7TpIE7z2dTodut4vWmvPnz3Pjxg1GR0fjsPPeD9RJEt6svV4vDqWgbK2NBSatN6i0Hjlhffgfsnd4vnjv4/xqj5Z/AGRY5Uvy5Z/YAAAAAElFTkSuQmCC';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 1";
		el.ggDx=-102;
		el.ggDy=3;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 20px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 23px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._image_17.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_17.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._estacionamento_e_instalaesii.appendChild(me._image_17);
		me._estacionamento_e_instalaesi.appendChild(me._estacionamento_e_instalaesii);
		me.divSkin.appendChild(me._estacionamento_e_instalaesi);
		el=me._climatizaoi=document.createElement('div');
		el.ggId="CLIMATIZA\xc7\xc3O-I";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 20px;';
		hs+='border-radius : 20px;';
		hs+='background : #5e5e5e;';
		hs+='border : 5px solid #ffffff;';
		hs+='cursor : default;';
		hs+='height : 71px;';
		hs+='left : -10000px;';
		hs+='opacity : 0.7;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 272px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._climatizaoi.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._climatizaoi.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getViewerSize().height <= 400))
			)
			{
				newLogicStatePosition = 0;
			}
			else if (
				((player.getViewerSize().width < 1084))
			)
			{
				newLogicStatePosition = 1;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._climatizaoi.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._climatizaoi.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._climatizaoi.style[domTransition]='left 0s, top 0s, ' + cssPrefix + 'transform 0s';
				if (me._climatizaoi.ggCurrentLogicStatePosition == 0) {
					this.ggDx = 50;
					this.ggDy = 25;
					me._climatizaoi.ggUpdatePosition(true);
				}
				else if (me._climatizaoi.ggCurrentLogicStatePosition == 1) {
					this.ggDx = 55;
					this.ggDy = -135;
					me._climatizaoi.ggUpdatePosition(true);
				}
				else {
					me._climatizaoi.ggDx=0;
					me._climatizaoi.ggDy=0;
					me._climatizaoi.ggUpdatePosition(true);
				}
			}
		}
		me._climatizaoi.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getViewerSize().height <= 400))
			)
			{
				newLogicStateScaling = 0;
			}
			else if (
				((player.getViewerSize().width < 1084))
			)
			{
				newLogicStateScaling = 1;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._climatizaoi.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._climatizaoi.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._climatizaoi.style[domTransition]='left 0s, top 0s, ' + cssPrefix + 'transform 0s';
				if (me._climatizaoi.ggCurrentLogicStateScaling == 0) {
					me._climatizaoi.ggParameter.sx = 0.85;
					me._climatizaoi.ggParameter.sy = 0.75;
					me._climatizaoi.style[domTransform]=parameterToTransform(me._climatizaoi.ggParameter);
				}
				else if (me._climatizaoi.ggCurrentLogicStateScaling == 1) {
					me._climatizaoi.ggParameter.sx = 0.85;
					me._climatizaoi.ggParameter.sy = 0.85;
					me._climatizaoi.style[domTransform]=parameterToTransform(me._climatizaoi.ggParameter);
				}
				else {
					me._climatizaoi.ggParameter.sx = 1;
					me._climatizaoi.ggParameter.sy = 1;
					me._climatizaoi.style[domTransform]=parameterToTransform(me._climatizaoi.ggParameter);
				}
			}
		}
		me._climatizaoi.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('INFO') == false))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._climatizaoi.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._climatizaoi.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._climatizaoi.style[domTransition]='left 0s, top 0s, ' + cssPrefix + 'transform 0s';
				if (me._climatizaoi.ggCurrentLogicStateVisible == 0) {
					me._climatizaoi.style.visibility="hidden";
					me._climatizaoi.ggVisible=false;
				}
				else {
					me._climatizaoi.style.visibility="hidden";
					me._climatizaoi.ggVisible=false;
				}
			}
		}
		me._climatizaoi.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._climatizaoii=document.createElement('div');
		el.ggId="CLIMATIZA\xc7\xc3O-II";
		el.ggDx=-1;
		el.ggDy=-3;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 68px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 246px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._climatizaoii.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._climatizaoii.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._ventilador_de_teto=document.createElement('div');
		els=me._ventilador_de_teto__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Ventilador de teto";
		el.ggDx=24;
		el.ggDy=1;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text tooltip";
		el.ggType='text';
		hs ='';
		hs+='height : 27px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 170px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 172px;';
		hs+='height: auto;';
		hs+='background: #ffffff;';
		hs+='background: rgba(255,255,255,0);';
		hs+='border: 1px solid #55aa7f;';
		hs+='border: 1px solid rgba(85,170,127,0);';
		hs+=cssPrefix + 'background-clip: padding-box;';
		hs+='background-clip: padding-box;';
		hs+='border-radius: 10px;';
		hs+=cssPrefix + 'border-radius: 10px;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: left;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 2px 3px 2px 3px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		els.innerHTML="Ventilador de teto";
		el.appendChild(els);
		me._ventilador_de_teto.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._ventilador_de_teto.logicBlock_text = function() {
			var newLogicStateText;
			if (
				((player.getVariableValue('POR') == true))
			)
			{
				newLogicStateText = 0;
			}
			else if (
				((player.getVariableValue('ENG') == true))
			)
			{
				newLogicStateText = 1;
			}
			else if (
				((player.getVariableValue('ESP') == true))
			)
			{
				newLogicStateText = 2;
			}
			else {
				newLogicStateText = -1;
			}
			if (me._ventilador_de_teto.ggCurrentLogicStateText != newLogicStateText) {
				me._ventilador_de_teto.ggCurrentLogicStateText = newLogicStateText;
				me._ventilador_de_teto.style[domTransition]='';
				if (me._ventilador_de_teto.ggCurrentLogicStateText == 0) {
					me._ventilador_de_teto.ggText="Ventilador de teto";
					me._ventilador_de_teto__text.innerHTML=me._ventilador_de_teto.ggText;
					if (me._ventilador_de_teto.ggUpdateText) {
					me._ventilador_de_teto.ggUpdateText=function() {
						var hs="Ventilador de teto";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._ventilador_de_teto.ggUpdatePosition) me._ventilador_de_teto.ggUpdatePosition();
					}
				}
				else if (me._ventilador_de_teto.ggCurrentLogicStateText == 1) {
					me._ventilador_de_teto.ggText="Ceiling fan";
					me._ventilador_de_teto__text.innerHTML=me._ventilador_de_teto.ggText;
					if (me._ventilador_de_teto.ggUpdateText) {
					me._ventilador_de_teto.ggUpdateText=function() {
						var hs="Ceiling fan";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._ventilador_de_teto.ggUpdatePosition) me._ventilador_de_teto.ggUpdatePosition();
					}
				}
				else if (me._ventilador_de_teto.ggCurrentLogicStateText == 2) {
					me._ventilador_de_teto.ggText="Ventilador de techo";
					me._ventilador_de_teto__text.innerHTML=me._ventilador_de_teto.ggText;
					if (me._ventilador_de_teto.ggUpdateText) {
					me._ventilador_de_teto.ggUpdateText=function() {
						var hs="Ventilador de techo";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._ventilador_de_teto.ggUpdatePosition) me._ventilador_de_teto.ggUpdatePosition();
					}
				}
				else {
					me._ventilador_de_teto.ggText="Ventilador de teto";
					me._ventilador_de_teto__text.innerHTML=me._ventilador_de_teto.ggText;
					if (me._ventilador_de_teto.ggUpdateText) {
					me._ventilador_de_teto.ggUpdateText=function() {
						var hs="Ventilador de teto";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._ventilador_de_teto.ggUpdatePosition) me._ventilador_de_teto.ggUpdatePosition();
					}
				}
			}
		}
		me._ventilador_de_teto.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 2;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._climatizaoii.appendChild(me._ventilador_de_teto);
		el=me._rectangle_26=document.createElement('div');
		el.ggId="Rectangle 2";
		el.ggDx=-102;
		el.ggDy=3;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 200px;';
		hs+='border-radius : 200px;';
		hs+='background : #ffffff;';
		hs+='border : 1px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 32px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 30px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._rectangle_26.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_26.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._climatizaoii.appendChild(me._rectangle_26);
		el=me._ht_image_info16=document.createElement('div');
		el.ggId="ht_image_info-1";
		el.ggDx=-102;
		el.ggDy=3;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 100px;';
		hs+='border-radius : 100px;';
		hs+='background : #ffffff;';
		hs+='border : 1px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 50px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_image_info16.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._ht_image_info16.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._ht_image_info26=document.createElement('div');
		el.ggId="ht_image_info-2";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 200px;';
		hs+='border-radius : 200px;';
		hs+='border : 4px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 32px;';
		hs+='left : -10000px;';
		hs+='opacity : 0.8;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 30px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_image_info26.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._ht_image_info26.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._ht_image_info16.appendChild(me._ht_image_info26);
		me._climatizaoii.appendChild(me._ht_image_info16);
		el=me._image_16=document.createElement('div');
		els=me._image_16__img=document.createElement('img');
		els.className='ggskin ggskin_image_16';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAeCAYAAABNChwpAAAGqklEQVRIiZ1XTUhVWxT+9vn1qkFBQkR4zTLJTEEohJtFWULlwAZJgSPTgRTURCiJRoGJNAwRjCIhjP6I6MeaRJYl1aRLiGaCGJSFmde/e/Y+e683qL31+t5L31uTe9hn3bXWXj/f+g4jIsIfRAgB13URhiEcxzHnRAQigmVZAACllHkOwxC2bae8/zf581sArusikUjAcRwopUBE4JyDMWaMc85hWRbCMIQQwgS6lHMAYEtlQEoJ27bBOYfneSAiMMaMY8dxYFkWiAhKKdi2DQAmEK37vwNY6HBxGRbqaDPLufV/CmChE2C+1kopDA8PY2JiAkSEgoICrFixAsB8ZpYT0LIyMDc3h/T0dHMWj8dx8uRJjI6OIgxDeJ6H1atX4/Dhwzh16tRy7mPk7/'+
			'lcHCFjxnkQBPA8D5cuXcLc3Bza29uRkZGB4eFhdHV1ob29HYWFhdizZ8/yS0FLSBAEKb9ERNXV1bR//35KJpPmbGZmhoqLi6mhoYGUUkREJIRYyjyZMIMgMEHNzs6aZ8/zIKU0EwAAJ06cQH9/P1paWoxeWloadu3ahc+fP4MxBiKCbdtQSqVcmHMOAObcAn6Nmu/7EEIAANLT0zE7O4sgCBAEgRktIkIYhigrK8PRo0dx9epVDA0NmcYcHR3FmjVrjCPGGBhjkFJCCIFkMgnP84w+5xwW59w4cF0XUkqEYYj09HT4vg/f941zAKa76+rq4Hke7t69CyklEokEPn78iNLSUhARfN9HGIZgjMG2bTDGkJaWZjKhlILnebB0ivWhbdtwHAdEBCGESRljzGRICIHc3FzEYjE8f/4cruuir68PExMTKC8vRxiGJlhte+Gz'+
			'HmPg9xTYtm3wW4uUEj9//sSNGzfw8uVL2LaNQ4cOYd++fWYq8vPz0dfXB845zp07h4MHDyIajZqMKaXw/v17XLlyBZxzNDU1ITs729h3HGe+BzRsJhIJAMCLFy8Qi8XQ1dUF3/cxPT2NpqYm7NixA2fOnMHIyAgGBgaQTCZRVFSEsbExVFVVGedSSnR2dqK6uhqfPn3Cu3fvUFtba26uS8uIiDTO6+aYnp7G3r17sXLlSty5cweRSASMMYyPj+P27dtoa2vD1NQULMvCtm3bYFkW4vE4SkpKUFFRgb6+PvT09CCRSCAWi6GlpQXxeBzHjx9Hd3c3otHoPHwvnkulFA0NDVFubi7dv3//b/MshKDJyUnKz8+n+vp6c15XV0cbN26knJwcKi4upvr6erp3757574cPHygajVJ/f7/BCSIig4RhGMKyLFiWhR8/foBzjp'+
			'KSElOe4eFhPHz4EDdv3sTXr18hhEBGRobpmczMTGRmZuLBgwdYtWoVIpGIaVgA+P79OwAgIyPDNDsRwdHrVo+XEAJZWVlIS0vD9PQ01q5di9bWVrS1tcGyLBQWFqKyshL9/f3o7u7G2bNnwTnH48ePkUwm0djYiObmZmRnZ0MpBdd1EQQBOjs7sX79emRlZZlmV0rNLyNdf/q9fMrLy7Fu3TrMzMxgcHAQRUVFaGhoQHl5OSzLwq1bt3D69GlIKeG6Lnbv3o2ysjJcvnwZg4OD2L59O0pLSwEAjx49wtjYGFpbW3HgwIHUPRGGIRGRwXVdsydPntDWrVtpw4YNdOHChZR3UkqqqqqinTt3kpSS8vLyqLm52dT12bNn1NzcTJWVlZSXl0c1NTX09OnTlF6bnJwk+t2JxrAOhih1+WinuknfvHlDmzZtoo6ODlJKUUVF'+
			'BdXW1pKUkjjnxo7+FUJQEAQkpTR2tC2LiOA4TgoQ6R0fBAGUUpBSpnDB3t5ehGGII0eOgDGG0tJS9Pb2Ynx8HLZtw7Zts0M0NfM8zzS55paMsV+7QMOj7gVNQH3fN1hu2zZc1wXnHD09PYjFYohEIpBS4tixY+Cc4+LFi8aOBhrXdaGUMk7pN1PWcG1pxYUKC0eTMQbO+a+OZcwgpqZftm0jOzsbtbW1uH79Ol69epWygvV46xtrfmkom1bUhnUZLMsyShol9XlmZiZGRkZMsESExsZGbN68GR0dHSldrm0s3DMATCBL8iZdIsdxkEwmAQA1NTWIx+M4f/48vn37BiEEXr9+DSklvnz5Yv67mIz8o9ASshA2iYg450REdO3aNdqyZQvl5ORQfn4+RaNRKigooLdv3xIRpdC1P8myaHlK11oWgiCA7/uYmprCwMAAZm'+
			'dnEYlEUFRUZCicJiFLybIC0N+HizIHxtgfvxn/7UPmPwWwEKL1jej3vl94SyGEoVmalC4nA38BPiJYowte3igAAAAASUVORK5CYII=';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 1";
		el.ggDx=-102;
		el.ggDy=3;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 24px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 24px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._image_16.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_16.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._climatizaoii.appendChild(me._image_16);
		me._climatizaoi.appendChild(me._climatizaoii);
		me.divSkin.appendChild(me._climatizaoi);
		el=me._banheiroi=document.createElement('div');
		el.ggId="BANHEIRO-I";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 20px;';
		hs+='border-radius : 20px;';
		hs+='background : #5e5e5e;';
		hs+='border : 5px solid #ffffff;';
		hs+='cursor : default;';
		hs+='height : 312px;';
		hs+='left : -10000px;';
		hs+='opacity : 0.7;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 272px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._banheiroi.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._banheiroi.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getViewerSize().height <= 400))
			)
			{
				newLogicStatePosition = 0;
			}
			else if (
				((player.getViewerSize().width < 1084))
			)
			{
				newLogicStatePosition = 1;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._banheiroi.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._banheiroi.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._banheiroi.style[domTransition]='left 0s, top 0s, ' + cssPrefix + 'transform 0s';
				if (me._banheiroi.ggCurrentLogicStatePosition == 0) {
					this.ggDx = 50;
					this.ggDy = 25;
					me._banheiroi.ggUpdatePosition(true);
				}
				else if (me._banheiroi.ggCurrentLogicStatePosition == 1) {
					this.ggDx = 55;
					this.ggDy = -135;
					me._banheiroi.ggUpdatePosition(true);
				}
				else {
					me._banheiroi.ggDx=0;
					me._banheiroi.ggDy=0;
					me._banheiroi.ggUpdatePosition(true);
				}
			}
		}
		me._banheiroi.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getViewerSize().height <= 400))
			)
			{
				newLogicStateScaling = 0;
			}
			else if (
				((player.getViewerSize().width < 1084))
			)
			{
				newLogicStateScaling = 1;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._banheiroi.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._banheiroi.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._banheiroi.style[domTransition]='left 0s, top 0s, ' + cssPrefix + 'transform 0s';
				if (me._banheiroi.ggCurrentLogicStateScaling == 0) {
					me._banheiroi.ggParameter.sx = 0.85;
					me._banheiroi.ggParameter.sy = 0.75;
					me._banheiroi.style[domTransform]=parameterToTransform(me._banheiroi.ggParameter);
				}
				else if (me._banheiroi.ggCurrentLogicStateScaling == 1) {
					me._banheiroi.ggParameter.sx = 0.85;
					me._banheiroi.ggParameter.sy = 0.85;
					me._banheiroi.style[domTransform]=parameterToTransform(me._banheiroi.ggParameter);
				}
				else {
					me._banheiroi.ggParameter.sx = 1;
					me._banheiroi.ggParameter.sy = 1;
					me._banheiroi.style[domTransform]=parameterToTransform(me._banheiroi.ggParameter);
				}
			}
		}
		me._banheiroi.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('INFO') == false))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._banheiroi.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._banheiroi.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._banheiroi.style[domTransition]='left 0s, top 0s, ' + cssPrefix + 'transform 0s';
				if (me._banheiroi.ggCurrentLogicStateVisible == 0) {
					me._banheiroi.style.visibility="hidden";
					me._banheiroi.ggVisible=false;
				}
				else {
					me._banheiroi.style.visibility="hidden";
					me._banheiroi.ggVisible=false;
				}
			}
		}
		me._banheiroi.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._banheiroii=document.createElement('div');
		el.ggId="BANHEIRO-II";
		el.ggDx=2;
		el.ggDy=-4;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 283px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 246px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._banheiroii.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._banheiroii.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._secador_de_cabelo=document.createElement('div');
		els=me._secador_de_cabelo__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Secador de cabelo";
		el.ggDx=27;
		el.ggDy=-110;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text tooltip";
		el.ggType='text';
		hs ='';
		hs+='height : 27px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 170px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 172px;';
		hs+='height: auto;';
		hs+='background: #ffffff;';
		hs+='background: rgba(255,255,255,0);';
		hs+='border: 1px solid #55aa7f;';
		hs+='border: 1px solid rgba(85,170,127,0);';
		hs+=cssPrefix + 'background-clip: padding-box;';
		hs+='background-clip: padding-box;';
		hs+='border-radius: 10px;';
		hs+=cssPrefix + 'border-radius: 10px;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: left;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 2px 3px 2px 3px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		els.innerHTML="Secador de cabelo";
		el.appendChild(els);
		me._secador_de_cabelo.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._secador_de_cabelo.logicBlock_text = function() {
			var newLogicStateText;
			if (
				((player.getVariableValue('POR') == true))
			)
			{
				newLogicStateText = 0;
			}
			else if (
				((player.getVariableValue('ENG') == true))
			)
			{
				newLogicStateText = 1;
			}
			else if (
				((player.getVariableValue('ESP') == true))
			)
			{
				newLogicStateText = 2;
			}
			else {
				newLogicStateText = -1;
			}
			if (me._secador_de_cabelo.ggCurrentLogicStateText != newLogicStateText) {
				me._secador_de_cabelo.ggCurrentLogicStateText = newLogicStateText;
				me._secador_de_cabelo.style[domTransition]='';
				if (me._secador_de_cabelo.ggCurrentLogicStateText == 0) {
					me._secador_de_cabelo.ggText="Secador de cabelo";
					me._secador_de_cabelo__text.innerHTML=me._secador_de_cabelo.ggText;
					if (me._secador_de_cabelo.ggUpdateText) {
					me._secador_de_cabelo.ggUpdateText=function() {
						var hs="Secador de cabelo";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._secador_de_cabelo.ggUpdatePosition) me._secador_de_cabelo.ggUpdatePosition();
					}
				}
				else if (me._secador_de_cabelo.ggCurrentLogicStateText == 1) {
					me._secador_de_cabelo.ggText="Hiair dryer";
					me._secador_de_cabelo__text.innerHTML=me._secador_de_cabelo.ggText;
					if (me._secador_de_cabelo.ggUpdateText) {
					me._secador_de_cabelo.ggUpdateText=function() {
						var hs="Hiair dryer";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._secador_de_cabelo.ggUpdatePosition) me._secador_de_cabelo.ggUpdatePosition();
					}
				}
				else if (me._secador_de_cabelo.ggCurrentLogicStateText == 2) {
					me._secador_de_cabelo.ggText="secador de pelo";
					me._secador_de_cabelo__text.innerHTML=me._secador_de_cabelo.ggText;
					if (me._secador_de_cabelo.ggUpdateText) {
					me._secador_de_cabelo.ggUpdateText=function() {
						var hs="secador de pelo";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._secador_de_cabelo.ggUpdatePosition) me._secador_de_cabelo.ggUpdatePosition();
					}
				}
				else {
					me._secador_de_cabelo.ggText="Secador de cabelo";
					me._secador_de_cabelo__text.innerHTML=me._secador_de_cabelo.ggText;
					if (me._secador_de_cabelo.ggUpdateText) {
					me._secador_de_cabelo.ggUpdateText=function() {
						var hs="Secador de cabelo";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._secador_de_cabelo.ggUpdatePosition) me._secador_de_cabelo.ggUpdatePosition();
					}
				}
			}
		}
		me._secador_de_cabelo.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 2;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._banheiroii.appendChild(me._secador_de_cabelo);
		el=me._rectangle_25=document.createElement('div');
		el.ggId="Rectangle 2";
		el.ggDx=-98;
		el.ggDy=-108;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 200px;';
		hs+='border-radius : 200px;';
		hs+='background : #ffffff;';
		hs+='border : 1px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 32px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 30px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._rectangle_25.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_25.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._banheiroii.appendChild(me._rectangle_25);
		el=me._ht_image_info15=document.createElement('div');
		el.ggId="ht_image_info-1";
		el.ggDx=-98;
		el.ggDy=-108;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 100px;';
		hs+='border-radius : 100px;';
		hs+='background : #ffffff;';
		hs+='border : 1px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 50px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_image_info15.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._ht_image_info15.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._ht_image_info25=document.createElement('div');
		el.ggId="ht_image_info-2";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 200px;';
		hs+='border-radius : 200px;';
		hs+='border : 4px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 32px;';
		hs+='left : -10000px;';
		hs+='opacity : 0.8;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 30px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_image_info25.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._ht_image_info25.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._ht_image_info15.appendChild(me._ht_image_info25);
		el=me._image_15=document.createElement('div');
		els=me._image_15__img=document.createElement('img');
		els.className='ggskin ggskin_image_15';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAG70lEQVRoge1Zz0tUaxh+zo9xjk0Wms6oI2kqFidzMmIc0mwltGqIfiAR5KLoP2hTizCCtlGboF0gRChBCwliFiGFC7EpiKYhFHXUsl9mzpyf33sXer47x/Q2c2fuvXLx2XjmzJxz3ud73+d73+coEBHhfwDxvw6gWNgistmwRWSzYYvIZsMWkc2GLSKbDVtENhu2iGw2FJUIY8z12bIsAMB6lmcjG8QYg23bG36/EQomYhgGgJWgBUEAAOi6DgCQZRkA+HnbtmFZFoiIn2OMuYIWRRGSJEEQBNi2nXMcQjEcYnZgDhhjPEOiKEIUf12ztdcxxiAIgovketeth4KJEBEYY5AkCcBKNkpKSiAIwi8rL4oiiAi2bUMQBH5NNrLJ54OiZARYIeD1egGslJ'+
			'ksyzzgvwrMyZxTTsDK4hBRXmQK1oijB6/Xy4+Xl5fx8uVLJBIJCILAA3I04sCyLIiiCFmWXTpxyiufNS6aRnRdx+PHj3H//n1MTk7yeq+rq0NjYyPC4TDC4TBaWlpQVlbGiTHG4PF4+H3yzURRiXz+/BmXLl3C2NgYuru7EYlEoKoqkskk4vE4kskkJiYmoOs6fD4fgsEg2tvb0dbWhkgkgurqauzYsYOTc7RTdLE7N88WolP/uq6jr68P7969Q39/P6LRKKanp7G4uIiqqioEAgEwxmAYBsbHx/H+/XskEgnE43F8+PABhmHA4/Ggvb0d+/btQygUQmdnJ/x+f36rSTmAMcaPbdsm27b553v37lEwGKSnT5/S1NQU9fb2kqqqFAwGqaWlhc6cOUOTk5Ou+2maRpZlkWVZlEgkaGBggK5fv07RaJQOHTpEXV1d9OnT'+
			'J9dzf4eciGSTYYxxIplMhrq6uujixYtERBSNRklVVbp16xYNDw/TjRs3SFVVOn36NC0vL/OFWLso2QGPjIxQfX09jY6O5kyCiEjONXOWZcHj8bga1szMDObn53H58mXMzc3h9evXOH/+PK5cuQJBENDT0wNZlnHnzh1omgav18vrP51OQ1EU3ltotefIsswbqGmafCP4HX6rJFqVUPYeD6zo5ufPnzBNE5WVlZienoYsy+ju7uZakiQJbW1tUBQFMzMzEASB941t27a5tLZ2CrBtO2cSORFxHuDMTdlBlpeXQ5IkzM3NobGxEZZl4fnz55AkCZZlQdM0jI6OQpIkVFVV8SCdQDVN4xly/pqmyftLJpPJmchvS+uvtr9AIIBdu3bh2bNnOHfuHA4cOIDBwUEoioIjR45gdHQUw8PDqKmpQU1NDYCVZunz+SBJEiRJ4j'+
			'uik2lFUeDz+ZBOp1FaWpozkZzEblnWL+cc0d69e5f27NlDsViMJiYmqLe3l5qbm6muro6ampro1KlTND8/T4wx0jSNX6tpGpmmSW/fvqVHjx7RzZs36eTJk6SqKjU3N9Ps7GxeYi+4IX79+hU9PT0wTRMPHjxAa2srfvz4gampKQQCAVRXVwMAMpkMkskkXr165eojS0tL2LlzJ+rr6xEKhRCJRHDw4EHU1tbmpZGiTL+pVAonTpzAwsICzp49i7a2NjQ1NeH79++IxWJ48+YNEokEFEWBpmmorKzE4cOH0d7ejq6uLvj9fgQCAdc919qCf5yIM0akUik8fPgQT548wezsLDdGZWVlKC0txZcvX9Df349wOIyGhgYeMADXqA/ANWSuN+qvi7wKcQNkMhmXbjo7OykajVIqlSLGGA0NDdHevXspmUy6GuLazs0Yy6ub'+
			'Z6Monl1RFH5sGAY6OjqwsLCA2tpaEBGOHTsGwzDw4sULvvU6vtyxymszQ/+2ZwcATdNg2zZEUURJSQmOHj2Kjx8/Ih6PQxRFVFRUoKGhAbFYzNWHnN8D4M6RVsf4fP1IwUQsy4KiKLyWbdtGJBIBYwzj4+M8mI6ODsTjcZimCUmSYBgGDMOArusu6+uMLADyEnzOs9aGN1i1tJIkIZPJoLS0FH6/H/v378fQ0BBUVYVpmqitrcXi4iKSySRaW1t5JhxkB589DuVKpijGyjCMXwIbGBjA1atXudUlIuzevRuDg4OoqKjIb0fKBX9ri1gHjDEyDINM0yRd14noz5H82rVrNDY2RqZpEtGfu5vzu2Kg4NKi1fSPjIygvLwc3759w/bt27G0tITbt2/D4/Hg+PHjaGhogCzLrrcta7NYCAom4viUvr4+GIYBRVG4fbUsCx'+
			'cuXEA4HObjhsfjycuL54qiaETXdYyPj0OWZd4DiAihUAherxeiKPJXqo73d8459qBQFExkvWCyzzml5/SZv/M6NBcUfCcnsHQ6zbu0owXn++w3iel0euXBoujq6gXHUYzSyvbWzvHa7TU7A07pFTMjRXv3+1/jf/Mfqz8AGPefYqLv+y8AAAAASUVORK5CYII=';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 1";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 26px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 22px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._image_15.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_15.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._ht_image_info15.appendChild(me._image_15);
		me._banheiroii.appendChild(me._ht_image_info15);
		el=me._xampu=document.createElement('div');
		els=me._xampu__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Xampu";
		el.ggDx=26;
		el.ggDy=-51;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text tooltip";
		el.ggType='text';
		hs ='';
		hs+='height : 27px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 170px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 172px;';
		hs+='height: auto;';
		hs+='background: #ffffff;';
		hs+='background: rgba(255,255,255,0);';
		hs+='border: 1px solid #55aa7f;';
		hs+='border: 1px solid rgba(85,170,127,0);';
		hs+=cssPrefix + 'background-clip: padding-box;';
		hs+='background-clip: padding-box;';
		hs+='border-radius: 10px;';
		hs+=cssPrefix + 'border-radius: 10px;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: left;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 2px 3px 2px 3px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		els.innerHTML="Xampu";
		el.appendChild(els);
		me._xampu.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._xampu.logicBlock_text = function() {
			var newLogicStateText;
			if (
				((player.getVariableValue('POR') == true))
			)
			{
				newLogicStateText = 0;
			}
			else if (
				((player.getVariableValue('ENG') == true))
			)
			{
				newLogicStateText = 1;
			}
			else if (
				((player.getVariableValue('ESP') == true))
			)
			{
				newLogicStateText = 2;
			}
			else {
				newLogicStateText = -1;
			}
			if (me._xampu.ggCurrentLogicStateText != newLogicStateText) {
				me._xampu.ggCurrentLogicStateText = newLogicStateText;
				me._xampu.style[domTransition]='';
				if (me._xampu.ggCurrentLogicStateText == 0) {
					me._xampu.ggText="Xampu";
					me._xampu__text.innerHTML=me._xampu.ggText;
					if (me._xampu.ggUpdateText) {
					me._xampu.ggUpdateText=function() {
						var hs="Xampu";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._xampu.ggUpdatePosition) me._xampu.ggUpdatePosition();
					}
				}
				else if (me._xampu.ggCurrentLogicStateText == 1) {
					me._xampu.ggText="Shampoo";
					me._xampu__text.innerHTML=me._xampu.ggText;
					if (me._xampu.ggUpdateText) {
					me._xampu.ggUpdateText=function() {
						var hs="Shampoo";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._xampu.ggUpdatePosition) me._xampu.ggUpdatePosition();
					}
				}
				else if (me._xampu.ggCurrentLogicStateText == 2) {
					me._xampu.ggText="Shampoo";
					me._xampu__text.innerHTML=me._xampu.ggText;
					if (me._xampu.ggUpdateText) {
					me._xampu.ggUpdateText=function() {
						var hs="Shampoo";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._xampu.ggUpdatePosition) me._xampu.ggUpdatePosition();
					}
				}
				else {
					me._xampu.ggText="Xampu";
					me._xampu__text.innerHTML=me._xampu.ggText;
					if (me._xampu.ggUpdateText) {
					me._xampu.ggUpdateText=function() {
						var hs="Xampu";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._xampu.ggUpdatePosition) me._xampu.ggUpdatePosition();
					}
				}
			}
		}
		me._xampu.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 2;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._banheiroii.appendChild(me._xampu);
		el=me._rectangle_24=document.createElement('div');
		el.ggId="Rectangle 2";
		el.ggDx=-99;
		el.ggDy=-50;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 200px;';
		hs+='border-radius : 200px;';
		hs+='background : #ffffff;';
		hs+='border : 1px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 32px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 30px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._rectangle_24.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_24.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._banheiroii.appendChild(me._rectangle_24);
		el=me._ht_image_info14=document.createElement('div');
		el.ggId="ht_image_info-1";
		el.ggDx=-99;
		el.ggDy=-50;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 100px;';
		hs+='border-radius : 100px;';
		hs+='background : #ffffff;';
		hs+='border : 1px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 50px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_image_info14.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._ht_image_info14.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._ht_image_info24=document.createElement('div');
		el.ggId="ht_image_info-2";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 200px;';
		hs+='border-radius : 200px;';
		hs+='border : 4px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 32px;';
		hs+='left : -10000px;';
		hs+='opacity : 0.8;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 30px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_image_info24.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._ht_image_info24.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._ht_image_info14.appendChild(me._ht_image_info24);
		me._banheiroii.appendChild(me._ht_image_info14);
		el=me._image_14=document.createElement('div');
		els=me._image_14__img=document.createElement('img');
		els.className='ggskin ggskin_image_14';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAAAlCAYAAAC+uuLPAAADtklEQVRYhe1XTUsjSxQ9/VH9YQZU0IULIRKJARFXAVH8CeLSXyDiH3ATEP9BUERwI7hxFVy6ciHZiBuzlIAGBBFEMLjpdLqq7p2Fdr0Jmuk4jzfwmLmbpknVPXXPPedWx2Jmxm8O+3cD/gX9C/r/BnWzFlxdXYGZIYRAHMdwHAe2bYOZQURwXRflchkAoLWG4zhmLxHBtj/WZWUNh3w+D9u2YVkWiAhCCEgpIYQAEUEphWazCd/3obU2a/9VpbVaDcwMy7JM0u3tbYRhiK2tLQRBAN/3zUEAQCkF13U/VD4w6NzcHDzPg9YaRIRms4lcLod2u40wDFEoFADAACZJAs/zAOBTQGAAetNgZmxsbODi4gKdTgdhGEJrjaWlJRwfHyOOY4RhaNYTEbTW5j'+
			'BfqjRNQESo1+tYXV3FysoKRkZGcHR0hLOzM1iW1QOY0vuZiIABLJMkCSzLQqvVgpQSnU4Ho6OjiKIIrutCSonb21tzuJSVnxGYSW+j0cD6+jra7TaYGUEQIIoiEBF834dSCkIITExM4PDwEMVi0VT4o7i+BLq2toa7uzvs7OxgfHwcjuNAKQXHcYyFLi8vcXBwgFKphFqtBq31T9ULzohSqcSVSsW8d7td1lozETEzs5SSmZkrlQrPzMz0rOsXmUKKogj39/fY3d2FlBJBEEAIgSiKYNs2HMdBFEVotVpQSgHotc1nkUlvoVAAM8NxHCMOKSWY2SR2XRdEhCiK8PDwYPb26+lA9FarVU6ShJmZ4zg2v0kpWSnFcRxztVrl2dnZrHSD0RvHMZRSRpG+74OIwMxw3bftqVheX18B/DP4+w38TJ8SEb59+2boVUrBsiyT'+
			'NO2j67rwff8t6TtQv+GQ2dNisYhut2sSpwPBcRxjDSkliAhBEODm5sZo4JcHPjNjYWEBi4uLsG3bVBeGIeI4NtU0Gg3U63UAMKz0G/iZQsrn87y3t8daa06ShJVSzMwfntVqlScnJ3v2aq0/zZnZ0/RKs20bQghTmdbaVAWgR2xJkvQVETCAkHK5HIgIUkporc0w9zzPiAh4u0+DIAARwfO8voDAAD1NkgQvLy+f34vvllFK4fn52fQ8BeT3L44vg87Pz+P09BSlUglTU1PGnym9QghcX1/j5OQEy8vL5iDpgVMb/RiZljk/P8fm5ibiOMbQ0BC63S583wczG7oty8LY2Bj29/dRLpf7j79BQYkIT09PeHx8hJTSUEdEZkAMDw9jenq6h+7Uv790n/4X8ef8rfhzQL8DoYgn79VRfdUAAAAASUVORK5CYII=';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 1";
		el.ggDx=-99;
		el.ggDy=-50;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 28px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 18px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._image_14.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_14.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._banheiroii.appendChild(me._image_14);
		el=me._condicionador=document.createElement('div');
		els=me._condicionador__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Condicionador";
		el.ggDx=24;
		el.ggDy=5;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text tooltip";
		el.ggType='text';
		hs ='';
		hs+='height : 27px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 170px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 172px;';
		hs+='height: auto;';
		hs+='background: #ffffff;';
		hs+='background: rgba(255,255,255,0);';
		hs+='border: 1px solid #55aa7f;';
		hs+='border: 1px solid rgba(85,170,127,0);';
		hs+=cssPrefix + 'background-clip: padding-box;';
		hs+='background-clip: padding-box;';
		hs+='border-radius: 10px;';
		hs+=cssPrefix + 'border-radius: 10px;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: left;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 2px 3px 2px 3px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		els.innerHTML="Condicionador";
		el.appendChild(els);
		me._condicionador.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._condicionador.logicBlock_text = function() {
			var newLogicStateText;
			if (
				((player.getVariableValue('POR') == true))
			)
			{
				newLogicStateText = 0;
			}
			else if (
				((player.getVariableValue('ENG') == true))
			)
			{
				newLogicStateText = 1;
			}
			else if (
				((player.getVariableValue('ESP') == true))
			)
			{
				newLogicStateText = 2;
			}
			else {
				newLogicStateText = -1;
			}
			if (me._condicionador.ggCurrentLogicStateText != newLogicStateText) {
				me._condicionador.ggCurrentLogicStateText = newLogicStateText;
				me._condicionador.style[domTransition]='';
				if (me._condicionador.ggCurrentLogicStateText == 0) {
					me._condicionador.ggText="Condicionador";
					me._condicionador__text.innerHTML=me._condicionador.ggText;
					if (me._condicionador.ggUpdateText) {
					me._condicionador.ggUpdateText=function() {
						var hs="Condicionador";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._condicionador.ggUpdatePosition) me._condicionador.ggUpdatePosition();
					}
				}
				else if (me._condicionador.ggCurrentLogicStateText == 1) {
					me._condicionador.ggText="Conditioner";
					me._condicionador__text.innerHTML=me._condicionador.ggText;
					if (me._condicionador.ggUpdateText) {
					me._condicionador.ggUpdateText=function() {
						var hs="Conditioner";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._condicionador.ggUpdatePosition) me._condicionador.ggUpdatePosition();
					}
				}
				else if (me._condicionador.ggCurrentLogicStateText == 2) {
					me._condicionador.ggText="Condicionador";
					me._condicionador__text.innerHTML=me._condicionador.ggText;
					if (me._condicionador.ggUpdateText) {
					me._condicionador.ggUpdateText=function() {
						var hs="Condicionador";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._condicionador.ggUpdatePosition) me._condicionador.ggUpdatePosition();
					}
				}
				else {
					me._condicionador.ggText="Condicionador";
					me._condicionador__text.innerHTML=me._condicionador.ggText;
					if (me._condicionador.ggUpdateText) {
					me._condicionador.ggUpdateText=function() {
						var hs="Condicionador";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._condicionador.ggUpdatePosition) me._condicionador.ggUpdatePosition();
					}
				}
			}
		}
		me._condicionador.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 2;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._banheiroii.appendChild(me._condicionador);
		el=me._rectangle_23=document.createElement('div');
		el.ggId="Rectangle 2";
		el.ggDx=-100;
		el.ggDy=6;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 200px;';
		hs+='border-radius : 200px;';
		hs+='background : #ffffff;';
		hs+='border : 1px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 32px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 30px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._rectangle_23.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_23.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._banheiroii.appendChild(me._rectangle_23);
		el=me._ht_image_info13=document.createElement('div');
		el.ggId="ht_image_info-1";
		el.ggDx=-100;
		el.ggDy=6;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 100px;';
		hs+='border-radius : 100px;';
		hs+='background : #ffffff;';
		hs+='border : 1px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 50px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_image_info13.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._ht_image_info13.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._ht_image_info23=document.createElement('div');
		el.ggId="ht_image_info-2";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 200px;';
		hs+='border-radius : 200px;';
		hs+='border : 4px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 32px;';
		hs+='left : -10000px;';
		hs+='opacity : 0.8;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 30px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_image_info23.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._ht_image_info23.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._ht_image_info13.appendChild(me._ht_image_info23);
		me._banheiroii.appendChild(me._ht_image_info13);
		el=me._image_13=document.createElement('div');
		els=me._image_13__img=document.createElement('img');
		els.className='ggskin ggskin_image_13';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAnCAYAAAAVW4iAAAAEWklEQVRIie2WPWsVTxTGfzM7696Lb4WVohDNi6IYCRaKn8HSXisbK1utBAsjpBHEL2BjayEY8AOIoCAkoKLpjK1gbvbOzJljoTPu3uSfKPztPM3uzss5Z57nnGfWqKryF83+Tef/AvwL8D8FUFVSSgDkllBVJtsjrwEYj8e9507mjDEYY3oOVJXXr18jIqgqMUaqqsI5x2g04sCBA3jvuXDhwq4BTNu22jQNqor3nqZpADh8+DD79u0jxkjTNCWItZaNjQ2MMaytrWHtzii77FBVaZqmZP38+XNGoxHW2uL8zp07hBBYXFwkxogxZneI4AeWdV0TY8Q5B8D8/DwppZLh27dvsdayd+9eAE6fPv1bAdAJa9tWVVW995pSUu+9Xr9+XWdmZnRqakqPHj'+
			'2qx48f16tXr2pKaXL7FjOqqiJCVVUl6OT39PQ0ly9f5tq1a6SUePLkCU+fPmVlZaW3bjuzAFVVlSpKKVFVFSEERIR3794RY2T//v1sbGzgvUdEEBHW1tZ2Rch074OUEiklnHO8fPmSmzdv8uXLF5xzbG5uMhgMMMYwHo9pmoa2bZmZmWFpaYmFhQUAQgjUdZ3hx3jvtTfwk7grV67w6dMnbt26xYkTJzDGMBqNABgMBnjvef/+PYuLi5w7d47Hjx9TVVXPh4j8IDmTmd9FROfm5vTu3bsaY1RV1RBCIS6EoCklbdtWb9++rWfOnFHvffERY1QRUVVVl4+1Z88eAGKM1HWNiPDq1SsePXqEiOC9ZzgcYozBe09d11hrWVlZYXNzk7quC8T5JCLyg4MtuBnD1NQUBw8e5OvXr2VzpivLSwiBQ4cOsb6+zvr6euHRWvur'+
			'h7o12z3i7Oys3rt3r8yJiKaUNKXUg+D+/fs6OzurIYQCp4gUX3Y7RcxlmskEsNaWzLMmxRgZDoeISFGAvLYoQ9YfgLqui3pmAczcZPi65pxDRIgxFuhy9WT1Naqqua4zyVVVMTc3h4hgrSWEQFVVpWtTSsWJiDAcDlldXS0Bupw6EellWVVVIfDixYtcunQJY0yRc2NMWZ9S4s2bN7x48aLcKRmePE8WrExcJu/kyZO6tLTUI7hred2DBw/02LFjpYdijL21LpdlV7RCCAVXVS1lJyIYY7DWlrEQQoEmz+UecM5hrbWF5GyZ7KZpeprvnCtNlKulaRoGg0Fvv7W2VJXtVoeIFFW11vL58+fenP78GcgJiQgfPnwoCWU0utXmcmtngjOZZ8+e5dmzZ0xPT3Pq1KleTzRNw2g0YnV1leXlZc6fP9+TmxwohPBLrvXn70'+
			'sOtry8zI0bN0pPZL3JHDVNw3g85siRIzx8+JCFhYUCZ/fq7d0HXalt25Zv377x8ePH0sE5CWMMdV3jnGN+fp6d7D8D5Ey6EgH0OPodMykl3WnzZNA8BmwZ385sl/G8IVdEhmNLVh3IdjPX/ehCMZnhn2Td87kTB5POtwu8m7nJgcxD9zR/mnXXvgPXfcxP0+N8WgAAAABJRU5ErkJggg==';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 1";
		el.ggDx=-100;
		el.ggDy=6;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 28px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 18px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._image_13.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_13.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._banheiroii.appendChild(me._image_13);
		el=me._sabonete_para_o_corpo=document.createElement('div');
		els=me._sabonete_para_o_corpo__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Sabonete para o corpo";
		el.ggDx=26;
		el.ggDy=64;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text tooltip";
		el.ggType='text';
		hs ='';
		hs+='height : 27px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 170px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 172px;';
		hs+='height: auto;';
		hs+='background: #ffffff;';
		hs+='background: rgba(255,255,255,0);';
		hs+='border: 1px solid #55aa7f;';
		hs+='border: 1px solid rgba(85,170,127,0);';
		hs+=cssPrefix + 'background-clip: padding-box;';
		hs+='background-clip: padding-box;';
		hs+='border-radius: 10px;';
		hs+=cssPrefix + 'border-radius: 10px;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: left;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 2px 3px 2px 3px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		els.innerHTML="Sabonete para o corpo";
		el.appendChild(els);
		me._sabonete_para_o_corpo.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._sabonete_para_o_corpo.logicBlock_text = function() {
			var newLogicStateText;
			if (
				((player.getVariableValue('POR') == true))
			)
			{
				newLogicStateText = 0;
			}
			else if (
				((player.getVariableValue('ENG') == true))
			)
			{
				newLogicStateText = 1;
			}
			else if (
				((player.getVariableValue('ESP') == true))
			)
			{
				newLogicStateText = 2;
			}
			else {
				newLogicStateText = -1;
			}
			if (me._sabonete_para_o_corpo.ggCurrentLogicStateText != newLogicStateText) {
				me._sabonete_para_o_corpo.ggCurrentLogicStateText = newLogicStateText;
				me._sabonete_para_o_corpo.style[domTransition]='';
				if (me._sabonete_para_o_corpo.ggCurrentLogicStateText == 0) {
					me._sabonete_para_o_corpo.ggText="Sabonete para o corpo";
					me._sabonete_para_o_corpo__text.innerHTML=me._sabonete_para_o_corpo.ggText;
					if (me._sabonete_para_o_corpo.ggUpdateText) {
					me._sabonete_para_o_corpo.ggUpdateText=function() {
						var hs="Sabonete para o corpo";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._sabonete_para_o_corpo.ggUpdatePosition) me._sabonete_para_o_corpo.ggUpdatePosition();
					}
				}
				else if (me._sabonete_para_o_corpo.ggCurrentLogicStateText == 1) {
					me._sabonete_para_o_corpo.ggText="Body soap";
					me._sabonete_para_o_corpo__text.innerHTML=me._sabonete_para_o_corpo.ggText;
					if (me._sabonete_para_o_corpo.ggUpdateText) {
					me._sabonete_para_o_corpo.ggUpdateText=function() {
						var hs="Body soap";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._sabonete_para_o_corpo.ggUpdatePosition) me._sabonete_para_o_corpo.ggUpdatePosition();
					}
				}
				else if (me._sabonete_para_o_corpo.ggCurrentLogicStateText == 2) {
					me._sabonete_para_o_corpo.ggText="jab\xf3n para el cuerpo";
					me._sabonete_para_o_corpo__text.innerHTML=me._sabonete_para_o_corpo.ggText;
					if (me._sabonete_para_o_corpo.ggUpdateText) {
					me._sabonete_para_o_corpo.ggUpdateText=function() {
						var hs="jab\xf3n para el cuerpo";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._sabonete_para_o_corpo.ggUpdatePosition) me._sabonete_para_o_corpo.ggUpdatePosition();
					}
				}
				else {
					me._sabonete_para_o_corpo.ggText="Sabonete para o corpo";
					me._sabonete_para_o_corpo__text.innerHTML=me._sabonete_para_o_corpo.ggText;
					if (me._sabonete_para_o_corpo.ggUpdateText) {
					me._sabonete_para_o_corpo.ggUpdateText=function() {
						var hs="Sabonete para o corpo";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._sabonete_para_o_corpo.ggUpdatePosition) me._sabonete_para_o_corpo.ggUpdatePosition();
					}
				}
			}
		}
		me._sabonete_para_o_corpo.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 2;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._banheiroii.appendChild(me._sabonete_para_o_corpo);
		el=me._rectangle_22=document.createElement('div');
		el.ggId="Rectangle 2";
		el.ggDx=-100;
		el.ggDy=64;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 200px;';
		hs+='border-radius : 200px;';
		hs+='background : #ffffff;';
		hs+='border : 1px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 32px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 30px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._rectangle_22.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_22.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._banheiroii.appendChild(me._rectangle_22);
		el=me._ht_image_info12=document.createElement('div');
		el.ggId="ht_image_info-1";
		el.ggDx=-100;
		el.ggDy=64;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 100px;';
		hs+='border-radius : 100px;';
		hs+='background : #ffffff;';
		hs+='border : 1px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 50px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_image_info12.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._ht_image_info12.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._ht_image_info22=document.createElement('div');
		el.ggId="ht_image_info-2";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 200px;';
		hs+='border-radius : 200px;';
		hs+='border : 4px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 32px;';
		hs+='left : -10000px;';
		hs+='opacity : 0.8;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 30px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_image_info22.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._ht_image_info22.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._ht_image_info12.appendChild(me._ht_image_info22);
		me._banheiroii.appendChild(me._ht_image_info12);
		el=me._agua_quente=document.createElement('div');
		els=me._agua_quente__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Agua quente";
		el.ggDx=25;
		el.ggDy=123;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text tooltip";
		el.ggType='text';
		hs ='';
		hs+='height : 27px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 170px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 172px;';
		hs+='height: auto;';
		hs+='background: #ffffff;';
		hs+='background: rgba(255,255,255,0);';
		hs+='border: 1px solid #55aa7f;';
		hs+='border: 1px solid rgba(85,170,127,0);';
		hs+=cssPrefix + 'background-clip: padding-box;';
		hs+='background-clip: padding-box;';
		hs+='border-radius: 10px;';
		hs+=cssPrefix + 'border-radius: 10px;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: left;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 2px 3px 2px 3px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		els.innerHTML="Agua quente";
		el.appendChild(els);
		me._agua_quente.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._agua_quente.logicBlock_text = function() {
			var newLogicStateText;
			if (
				((player.getVariableValue('POR') == true))
			)
			{
				newLogicStateText = 0;
			}
			else if (
				((player.getVariableValue('ENG') == true))
			)
			{
				newLogicStateText = 1;
			}
			else if (
				((player.getVariableValue('ESP') == true))
			)
			{
				newLogicStateText = 2;
			}
			else {
				newLogicStateText = -1;
			}
			if (me._agua_quente.ggCurrentLogicStateText != newLogicStateText) {
				me._agua_quente.ggCurrentLogicStateText = newLogicStateText;
				me._agua_quente.style[domTransition]='';
				if (me._agua_quente.ggCurrentLogicStateText == 0) {
					me._agua_quente.ggText="Agua quente";
					me._agua_quente__text.innerHTML=me._agua_quente.ggText;
					if (me._agua_quente.ggUpdateText) {
					me._agua_quente.ggUpdateText=function() {
						var hs="Agua quente";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._agua_quente.ggUpdatePosition) me._agua_quente.ggUpdatePosition();
					}
				}
				else if (me._agua_quente.ggCurrentLogicStateText == 1) {
					me._agua_quente.ggText="Hot Water";
					me._agua_quente__text.innerHTML=me._agua_quente.ggText;
					if (me._agua_quente.ggUpdateText) {
					me._agua_quente.ggUpdateText=function() {
						var hs="Hot Water";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._agua_quente.ggUpdatePosition) me._agua_quente.ggUpdatePosition();
					}
				}
				else if (me._agua_quente.ggCurrentLogicStateText == 2) {
					me._agua_quente.ggText="Agua caliente";
					me._agua_quente__text.innerHTML=me._agua_quente.ggText;
					if (me._agua_quente.ggUpdateText) {
					me._agua_quente.ggUpdateText=function() {
						var hs="Agua caliente";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._agua_quente.ggUpdatePosition) me._agua_quente.ggUpdatePosition();
					}
				}
				else {
					me._agua_quente.ggText="Agua quente";
					me._agua_quente__text.innerHTML=me._agua_quente.ggText;
					if (me._agua_quente.ggUpdateText) {
					me._agua_quente.ggUpdateText=function() {
						var hs="Agua quente";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._agua_quente.ggUpdatePosition) me._agua_quente.ggUpdatePosition();
					}
				}
			}
		}
		me._agua_quente.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 2;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._banheiroii.appendChild(me._agua_quente);
		el=me._rectangle_21=document.createElement('div');
		el.ggId="Rectangle 2";
		el.ggDx=-101;
		el.ggDy=123;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 200px;';
		hs+='border-radius : 200px;';
		hs+='background : #ffffff;';
		hs+='border : 1px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 32px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 30px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._rectangle_21.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_21.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._banheiroii.appendChild(me._rectangle_21);
		el=me._image_12=document.createElement('div');
		els=me._image_12__img=document.createElement('img');
		els.className='ggskin ggskin_image_12';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAAAmCAYAAAA4LpBhAAAGGUlEQVRYhe1XO2hUWxRd537mzkcSjCiT6JAhJlERtFALP4VB0tkIOpUgCDY2KhgLK7VUIaWdIIIGkiABQ4oIChZCYoYIEkQMERVmEMU4mcnce377FZNzvDfPh1YWD08z986cffZe+6y99h5GRIQ/vJw/7fCv079O/+dOTRkrpQAAWmtore2z+V1KaW3CMEycEUWRtScisN8RByEEXNeF4/yIUWtt34kIjLHEd+v3SCnhed7vIdVaw/d9OI6TjJYxmwETt3GglMLq6iocxwHnHGEYwvM8EBE457+H1Bzkui6AVrqCIPhXNhhjYIzZfUII+L5vAxVCIJVK/dpptVrFu3fv4Pu+TaHneXBdF2EYQmuNzs5O9PT0/GemhBA2yCiK4P0K4ejoKG7fvo1sNo'+
			'tGowHXdeG6rkUWBAHOnz+PCxcuAAA455ifn8ebN2+Qy+UwODiItrY2hGGIdDrdCv5XSN+/f48vX75gbm4Ow8PDGBoawv79+1Gv15HNZhFFEfL5PIrFIogIN27cwMOHD7GysoL29nZ4nofJyUl0dnZCa41UKgXQb6zPnz/T3bt3qVAo0L1792hhYYGIiIQQdg/nnGq1GuXzeTp9+jRVKhUaHx+n7u5uunbtmt2ntSaYByIipVTiU2tNs7OztHPnTurt7aVisUjFYpG2b99O5XLZ7uOcExFRuVym/v5+evz4sbU/duwYnTt3jqSUREQkpSRHa23pT0QgIlsGjDHMz8+jVqvh/v37GBsbw8jICDjnmJ2dheM4kFJahvb19UEphenpadTrdbx69QofPnzA1q1b4boutNZwXReeMVRKWYaZQzjnWFpaQi6XSxgFQYDFxUUA'+
			'sPVn7uvkyZN49OgRpqamoJTCpk2bcObMmYQ4MKUUmaIWQtiDXr9+jYsXL+Ljx48QQiCbzeLr16/YuHEj6vU62traUCgUMDw8jF27diUEY2ZmBi9fvkRXVxcOHjyIzZs32xqWUrbYGy98pRQajQb27duHrq4unDp1CgcOHIBSCp7nWcO5uTmMjo6iXq/jxYsXPyRuLXOe5yUExSwpJaC1TrCQiGhsbIx6e3vp6dOnlmRmxfc+efKE+vv7aXx8PMFOQ65ms0kLCwuWcMbWISIbpUlvtVqFUgqHDx8GY8xqrkELAJVKBd++fYNSCp8+fbJIlFJQSmFkZAR79+7FiRMnMDAwgNXV1Xg2HNuq4gSKv5s9ruuiWq1iaGgIR48exeXLlxPODB9c18WDBw+we/duXL16FUtLS3j27BmAtc5jDjWOTDtKpVKW1UQEx3EwNTWFgY'+
			'EBTE5O4sqVKyiXyxb9+rszxDJSaYA5jtPSXillS54AMMYQRRGklLh+/Tq2bNmClZUVTExMYHl5GYVCAXfu3EFfX5/tIkII+yylBGMMpVIJt27dwszMDHbs2IEjR44AWBP8+D0JIeA4Djo6OkBEmJ6eRqVSQRAE2LNnDy5duoRSqZQQBSEEPM+zbDV1e/bsWZRKJXz//h35fB6u64KIEAQBPJMWzrlFu7y8DMYYnj9/Dt/3fzoRGDvGGMIwBGPM7jFltWHDhkTqbYoNQuOw0Wggm82CMQbf9+190lozMhMBY8zeWxAE9plz3kqh54FzjnQ6bUlm2qITRZFlqZQSuVwOUko7XJnGbaLPZrMJxpqrCcMQSimkUimLzABxXRfNZtPaOUZvzUSwHrlSyiI1dxlnOeccnHNkMhlrG1c3MzFmMhlIKVvnGITxqS2dTlvamylh'+
			'fZrjd5xOp20wZqyRUibu3RBOKdUqGYoND0aB4oJgNNccalqg4zjwfR+1Wg2u69o9cRDm01yh53nwzIhp0sUYQ3d3N4QQmJiYwLZt22z9NZtN+L6PIAhQq9VQqVQghMChQ4dssHFZ/ZngA2h1GVMuJv+ccxw/fhxv37616TLZMCWglIIQAoODg7h58yba29sTpDOof7YS/RT4MdNqrbG4uIharYYoimxpKKXQbDaRyWTQ0dGBnp4eizJeq3Gy/cvpWmtDKpWytWZQ/Ve0cR3VWiOKIsteIkqMMD9FSmseDL3NhG4Y5zhO4j9LPPL4tGA01/Bi/e/x9Q/UraC6eDw5wQAAAABJRU5ErkJggg==';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 1";
		el.ggDx=-100;
		el.ggDy=64;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 28px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 18px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._image_12.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_12.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._banheiroii.appendChild(me._image_12);
		el=me._ht_image_info11=document.createElement('div');
		el.ggId="ht_image_info-1";
		el.ggDx=-101;
		el.ggDy=123;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 100px;';
		hs+='border-radius : 100px;';
		hs+='background : #ffffff;';
		hs+='border : 1px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 50px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_image_info11.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._ht_image_info11.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._ht_image_info21=document.createElement('div');
		el.ggId="ht_image_info-2";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 200px;';
		hs+='border-radius : 200px;';
		hs+='border : 4px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 32px;';
		hs+='left : -10000px;';
		hs+='opacity : 0.8;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 30px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_image_info21.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._ht_image_info21.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._ht_image_info11.appendChild(me._ht_image_info21);
		me._banheiroii.appendChild(me._ht_image_info11);
		el=me._image_11=document.createElement('div');
		els=me._image_11__img=document.createElement('img');
		els.className='ggskin ggskin_image_11';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACEAAAAdCAYAAAAkXAW5AAAGIklEQVRIiZVXy2tT3Rdd5z6SoDMHQkRTk1qpYgUJhhR1pKCDogOp9Km1f4BOLOJEdFgoKIgUJw5EQQcKjqUILbZCaQhaoRVa46DViRMlae4995z1G3w9x3vT/vT79qTN4TzWfqy19xUkiT8YSQghtl0zR4UQkFLC87zE3iiKIISA67p2TWsNx3FAElpruK4L508AWk1rDa01hBAIwzDxoO/7FoxSCiTheZ4F0Gw2QRKO42wB91cQ5qEoiuA4jv1tLhBCYGNjIwHGdV0IIdBsNqGUSoCMogie50FrjSAI/rkjno54eI2Zxx3HgZQSvu9Da233xkOtlILWGr7vJ9JoHjYWhiFSqdRvR7XWiZpozf/k5CSUUgiCAK7rolwuo1wuJ/aYPMediaIIvu8n1k'+
			'x0MpkMAFinoLWm1pr/z7LZLNvb23ngwAHmcjk+ePCAJNlsNhN/zR1BENizSin7O77eatgOgNaaSilGUUSSnJiYYFtbW2JPEATUWjMMQxYKBT558oRSSr59+5b79u1jtVql1prj4+M8evSo3W8sDEP7v9Ma/nj4SOL+/ftYXFwESTx8+BBTU1PQWtucLi4uQgiBbDYL13Xx5csX+L6PQqEAIQQ+ffqEvXv3IpVKWVaZQo0/xiiKqJSyyKSUJMmbN2+yUCgwn8+zvb2d+/fv5+HDh/nt2zcb7mvXrrFYLLLRaFBKyVKpxMuXL5MkP378yEKhwMnJyYTn8Te46e2WVIRhSK01R0ZGODw8TKUUlVKsVCrM5XJcWFggSc7Pz7Ojo4OPHj0iSY6PjzOfz/PDhw8kyb6+PpZKJf769YvG2daUkv9U8ZaaMF729vayt7fXgqvV'+
			'arx37x5XV1eplOLZs2d5+vRp/vz5k+vr6+zs7OT169cppeTr16/Z0dHBly9fMooiNhoNe3frmwkQ8ZSQZH9/P4eGhhJRMvb8+XMWCgW+efOGJDk6Osquri7W63UGQcBTp06xp6cnEfZms2nvMKwiSS8uNqZIjTQLIazOB0Fg+U0Sz549Q3d3N86cOYNGo4G5uTkMDAzA9328e/cOtVoNT58+tSLFTRk3PSedTlsR+y1jMRDcZIZRNyHEFhW8cOEC2traoJRCvV7H1atX0dvbC9/3sXv3bty4cQPHjh1Do9HAjh07QDKhrnEVtYq5HVWHhobgOA4eP35sD7RKsFIq0aTS6TSEEAkVvXv3Lkji9u3bNsLGUcdx4MQXtdYJEEopzMzMoKurC1euXMHc3Bw8z8P8/DwGBgbQ2dmJ0dFRvH//HlEUYWlpCefPn0c+n0dPTw'+
			'8qlQpI4vPnz1heXrYNMAgCm2obCQPCeGCADQwMYGVlBZcuXcLCwgLm5+eRzWaxtraGUqmEcrmM2dlZVCoV7NmzB2trazh+/Di6u7sxOzuLarWKYrGIarWKI0eO4MWLFzaapilasTImpUwwYHBwkIODg1RKUUrJ6elpjo2NcXp6OsGm6elp3rp1i1NTU3YtDEPOzMzwzp07PHHiBIeHhymlTIiWYSbi1IvTNQxD9vX1WZ2I08zsM/RrNpv2cnNX/LH+/n5evHhxC9UNYM9Q0nVdW2BKKUsn0yPCMITv+0in05Y5nudBSol0Op1gmGnRSilIKRO9wtSdSTmwOVm5rosoiiwAs4kkNjY2QBKpVApRFNnaab3cDDTxNdd1kclkkMlkQBJhGNpaiI+Hjnk0PpSYiMSjE5+qlFLWU3PeUNI4Y85orbG+vo5du3YlOqdxCgAc'+
			'g96AMI9GUYRisYiFhQXU6/WEx67rQkppQRpGxc+biPz48QO1Wg25XC4hhiadCXaYYotPWsvLy+zs7OTIyAi/fv3K7fpMfH/r9LSyssKhoSEePHiQq6uriXfiDS0x6G5nr169wtjYmK2Ler2OnTt3IggCKz5xkdtkHFzXtcU9MTGBc+fOWc/jkRNC4K8gAGBpaQmVSgXfv3+33wtSSqRSKTt5xxXQhNrzPJw8eRKHDh1KpLLV/goiCAKk0+nElGw8jveHeO8ht361mb1aazSbTdvU/nUkTBEaanmel/A6box14PinIlu66H+KhPHYdd0tHzQJ/f/DefPlFR+Qgd/R+R8LAIJpTy4bmgAAAABJRU5ErkJggg==';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 1";
		el.ggDx=-101;
		el.ggDy=123;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 20px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 25px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._image_11.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_11.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._banheiroii.appendChild(me._image_11);
		me._banheiroi.appendChild(me._banheiroii);
		me.divSkin.appendChild(me._banheiroi);
		el=me._serviosi=document.createElement('div');
		el.ggId="SERVI\xc7OS-I";
		el.ggDx=0;
		el.ggDy=-1;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 20px;';
		hs+='border-radius : 20px;';
		hs+='background : #5e5e5e;';
		hs+='border : 5px solid #ffffff;';
		hs+='cursor : default;';
		hs+='height : 130px;';
		hs+='left : -10000px;';
		hs+='opacity : 0.7;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 272px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._serviosi.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._serviosi.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getViewerSize().height <= 400))
			)
			{
				newLogicStatePosition = 0;
			}
			else if (
				((player.getViewerSize().width < 1084))
			)
			{
				newLogicStatePosition = 1;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._serviosi.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._serviosi.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._serviosi.style[domTransition]='left 0s, top 0s, ' + cssPrefix + 'transform 0s';
				if (me._serviosi.ggCurrentLogicStatePosition == 0) {
					this.ggDx = 50;
					this.ggDy = 25;
					me._serviosi.ggUpdatePosition(true);
				}
				else if (me._serviosi.ggCurrentLogicStatePosition == 1) {
					this.ggDx = 55;
					this.ggDy = -135;
					me._serviosi.ggUpdatePosition(true);
				}
				else {
					me._serviosi.ggDx=0;
					me._serviosi.ggDy=-1;
					me._serviosi.ggUpdatePosition(true);
				}
			}
		}
		me._serviosi.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getViewerSize().height <= 400))
			)
			{
				newLogicStateScaling = 0;
			}
			else if (
				((player.getViewerSize().width < 1084))
			)
			{
				newLogicStateScaling = 1;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._serviosi.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._serviosi.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._serviosi.style[domTransition]='left 0s, top 0s, ' + cssPrefix + 'transform 0s';
				if (me._serviosi.ggCurrentLogicStateScaling == 0) {
					me._serviosi.ggParameter.sx = 0.85;
					me._serviosi.ggParameter.sy = 0.75;
					me._serviosi.style[domTransform]=parameterToTransform(me._serviosi.ggParameter);
				}
				else if (me._serviosi.ggCurrentLogicStateScaling == 1) {
					me._serviosi.ggParameter.sx = 0.85;
					me._serviosi.ggParameter.sy = 0.85;
					me._serviosi.style[domTransform]=parameterToTransform(me._serviosi.ggParameter);
				}
				else {
					me._serviosi.ggParameter.sx = 1;
					me._serviosi.ggParameter.sy = 1;
					me._serviosi.style[domTransform]=parameterToTransform(me._serviosi.ggParameter);
				}
			}
		}
		me._serviosi.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('INFO') == false))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._serviosi.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._serviosi.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._serviosi.style[domTransition]='left 0s, top 0s, ' + cssPrefix + 'transform 0s';
				if (me._serviosi.ggCurrentLogicStateVisible == 0) {
					me._serviosi.style.visibility="hidden";
					me._serviosi.ggVisible=false;
				}
				else {
					me._serviosi.style.visibility="hidden";
					me._serviosi.ggVisible=false;
				}
			}
		}
		me._serviosi.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._serviosii=document.createElement('div');
		el.ggId="SERVI\xc7OS-II";
		el.ggDx=28;
		el.ggDy=1;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 124px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 315px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._serviosii.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._serviosii.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._wifi=document.createElement('div');
		els=me._wifi__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Wi-Fi";
		el.ggDx=3;
		el.ggDy=-24;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text tooltip";
		el.ggType='text';
		hs ='';
		hs+='height : 75px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 204px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 206px;';
		hs+='height: auto;';
		hs+='background: #ffffff;';
		hs+='background: rgba(255,255,255,0);';
		hs+='border: 1px solid #55aa7f;';
		hs+='border: 1px solid rgba(85,170,127,0);';
		hs+=cssPrefix + 'background-clip: padding-box;';
		hs+='background-clip: padding-box;';
		hs+='border-radius: 10px;';
		hs+=cssPrefix + 'border-radius: 10px;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: left;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 2px 3px 2px 3px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		els.innerHTML="\xc9 permitido dexiar as malas<br\/>Para a conveni\xeancia do <br\/>h\xf3spede quando chegar cedo<br\/>ou for embora tarde";
		el.appendChild(els);
		me._wifi.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._wifi.logicBlock_text = function() {
			var newLogicStateText;
			if (
				((player.getVariableValue('POR') == true))
			)
			{
				newLogicStateText = 0;
			}
			else if (
				((player.getVariableValue('ENG') == true))
			)
			{
				newLogicStateText = 1;
			}
			else if (
				((player.getVariableValue('ESP') == true))
			)
			{
				newLogicStateText = 2;
			}
			else {
				newLogicStateText = -1;
			}
			if (me._wifi.ggCurrentLogicStateText != newLogicStateText) {
				me._wifi.ggCurrentLogicStateText = newLogicStateText;
				me._wifi.style[domTransition]='';
				if (me._wifi.ggCurrentLogicStateText == 0) {
					me._wifi.ggText="\xc9 permitido dexiar as malas\nPara a conveni\xeancia do \nh\xf3spede quando chegar cedo\nou for embora tarde";
					me._wifi__text.innerHTML=me._wifi.ggText;
					if (me._wifi.ggUpdateText) {
					me._wifi.ggUpdateText=function() {
						var hs="\xc9 permitido dexiar as malas\nPara a conveni\xeancia do \nh\xf3spede quando chegar cedo\nou for embora tarde";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._wifi.ggUpdatePosition) me._wifi.ggUpdatePosition();
					}
				}
				else if (me._wifi.ggCurrentLogicStateText == 1) {
					me._wifi.ggText="Luggage dropoff allowed\nFor guests\xb4convenience\nwhen they have early arrival\nor late departure";
					me._wifi__text.innerHTML=me._wifi.ggText;
					if (me._wifi.ggUpdateText) {
					me._wifi.ggUpdateText=function() {
						var hs="Luggage dropoff allowed\nFor guests\xb4convenience\nwhen they have early arrival\nor late departure";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._wifi.ggUpdatePosition) me._wifi.ggUpdatePosition();
					}
				}
				else if (me._wifi.ggCurrentLogicStateText == 2) {
					me._wifi.ggText="Es permitido dejar la maletas\npara conveniencia del hu\xe9sped\ncuando llegar temprano o salir\ntarde";
					me._wifi__text.innerHTML=me._wifi.ggText;
					if (me._wifi.ggUpdateText) {
					me._wifi.ggUpdateText=function() {
						var hs="Es permitido dejar la maletas\npara conveniencia del hu\xe9sped\ncuando llegar temprano o salir\ntarde";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._wifi.ggUpdatePosition) me._wifi.ggUpdatePosition();
					}
				}
				else {
					me._wifi.ggText="\xc9 permitido dexiar as malas\nPara a conveni\xeancia do \nh\xf3spede quando chegar cedo\nou for embora tarde";
					me._wifi__text.innerHTML=me._wifi.ggText;
					if (me._wifi.ggUpdateText) {
					me._wifi.ggUpdateText=function() {
						var hs="\xc9 permitido dexiar as malas\nPara a conveni\xeancia do \nh\xf3spede quando chegar cedo\nou for embora tarde";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._wifi.ggUpdatePosition) me._wifi.ggUpdatePosition();
					}
				}
			}
		}
		me._wifi.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 2;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._serviosii.appendChild(me._wifi);
		el=me._rectangle_20=document.createElement('div');
		el.ggId="Rectangle 2";
		el.ggDx=-129;
		el.ggDy=-32;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 200px;';
		hs+='border-radius : 200px;';
		hs+='background : #ffffff;';
		hs+='border : 1px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 32px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 30px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._rectangle_20.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_20.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._serviosii.appendChild(me._rectangle_20);
		el=me._ht_image_info10=document.createElement('div');
		el.ggId="ht_image_info-1";
		el.ggDx=-129;
		el.ggDy=-32;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 100px;';
		hs+='border-radius : 100px;';
		hs+='background : #ffffff;';
		hs+='border : 1px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 50px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_image_info10.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._ht_image_info10.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._ht_image_info20=document.createElement('div');
		el.ggId="ht_image_info-2";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 200px;';
		hs+='border-radius : 200px;';
		hs+='border : 4px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 32px;';
		hs+='left : -10000px;';
		hs+='opacity : 0.8;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 30px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_image_info20.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._ht_image_info20.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._ht_image_info10.appendChild(me._ht_image_info20);
		me._serviosii.appendChild(me._ht_image_info10);
		el=me._image_10=document.createElement('div');
		els=me._image_10__img=document.createElement('img');
		els.className='ggskin ggskin_image_10';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAAAcCAYAAACdz7SqAAAFbUlEQVRIiaVWPWiUTRB+dt99fy6nRpSEQxDOmMrWwuIIChYKCiIIKSzsRIKFtXUKi5QRf8AmlVgJQYJRsBLETuQ02oWIOUTFy72592935yvOGd9Tq89t7m5vZ2fmmWeeWWWtJa01AEAphfqy1oKIEIYhAMA5hyAIxr4T0R92vKqqEtv60kEQQCkFpRS89wAAIoK1FsYYMaqqSoyGwyGCIIBzThwSEYgIZVnKuTAMQUTw3oOIZF8558haiyiKxJAz995LRrxHRHDOwRgjTvk/RsB7D2PMX9EjIij6GQJHxPAxvMYYFEWBMAyxvb2NXq8HpRTSNMXExIQENjU1hdnZ2b/CXC+Bcw6qqioyxozh75wDEcEYI47fvHmDy5cvY2dnB1prBEEA7z3CMESWZW'+
			'g2m3jw4AE6nQ4AoCgKxHEsmdfRMlprIQsRIcsyJEkyVjPvPV69eoV+v4/Hjx9L7b33qKoKk5OTuHDhArrdLk6cOAFjDOI4FmccoPceWuuRU45KKYUkSaC1xu7uLnq9Hr5//w4iQrfbRRzHsNaKQwDQWqMsSwyHQ3z8+BHv3r3DYDBAq9XC0aNH5W4+F0XRqKaMOUP57Nkz3Lx5E/1+H2VZQimFOI5RVRW891BKwRgjrGRS8W+tNYwxaLVauHv3LmZnZxGGodyviIjq/dfv99HpdDA9PY1Lly7h+PHjsNZiYmICZVnCWotGo4E8z0cXKCXBRFEERq7b7eLhw4cYDAZ48uQJpqenhS+w1hIv7z2trq5Su92mFy9ekPde/kvTlOprY2ODut0uOedkz1orNtZaWl9fp5mZGVpfXyf281OMfvWkUgqbm5tQSmFubg5KKWml'+
			'ZrMp54qiwOLiIhYXF6G1ljpba8UmCALMzc3BOYeNjY2xVtRKKTjnwCy21uL3QJxzIolaa8RxjN3dXREA/ozjWOy890iSBEmSIMuysb41zEA+rLWWRq63U52xzHImT1mWCMNQtJizKopC1ItFAgA0X1InE/dXlmUgItFdhg8AsiyTIH/va+ecIFBVlfQsgJFI1H8AQFmW4qTRaEBrLcLx4cMH5HkubGY4B4MB3r59+8cQYBWq6/lPBLVE4ZxDFEVoNBrimKNO0xQXL17EtWvX5OIsy+Ccw8LCAubn52X68J0MNU8eERSuXVVV4DHHOsxG1lrs3bsXy8vLePnyJa5evYqyLOG9x5UrV/D69WvcuXNHepkzq49LztxaOyISACHLcDhEfajXx9TZs2exvLyMGzduIM9zKcH9+/fR6XREIIDR/DXGIIoiEf4gCGCMGWVaVZ'+
			'XAWIebI87zXPbOnDmDpaUl7Nu3D0opLC0t4eTJk2NThLNSSuHbt29/jEzDWXIfNptNYR2PriRJhL3GGJw7dw7Hjh1DHMc4dOiQ9DnfwdrsnEOr1ZKZHMfxKJEao0BEOHz4MNI0xdra2th04DO8jhw5Ig45Kw6Sy/H8+XP8+PED7XZ77K2kvPdUFIVk8/nzZ5w/fx5FUWB+fh6nT59Gs9lEmqZIkkSEwHuPPM/RaDREsfbs2QPvPXZ2dvD+/Xs8evQIaZri6dOnOHjwoIiDPFe4hkoprKys4N69e+j1esJgfj8FQYA8zxHHMcIwlO9VVaEoCmitEUURqqpCq9XCrVu3cOrUKWRZhiiKRqh476k+S9lxURT48uULtre3pS+DIJB24j5kga8/0IgIBw4cwMzMzNjwBkZKNpYpAGxubmJra0u09V+X1hpTU1Not9u/SFZn'+
			'5XA4xNraGm7fvo2vX79i//79KIrin5waY7CwsIDr168Li5W1luo99OnTJ2xtbYlKMSz/dymlJFPZY3jLspTnBws2z9N/dVqfYADwH1Jd/m5TC/X0AAAAAElFTkSuQmCC';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 1";
		el.ggDx=-129;
		el.ggDy=-32;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 23px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 23px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._image_10.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_10.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._serviosii.appendChild(me._image_10);
		el=me._espao_de_trabalho_exclusivo0=document.createElement('div');
		els=me._espao_de_trabalho_exclusivo0__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Espa\xe7o de trabalho exclusivo";
		el.ggDx=-10;
		el.ggDy=34;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text tooltip";
		el.ggType='text';
		hs ='';
		hs+='height : 26px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 173px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 175px;';
		hs+='height: auto;';
		hs+='background: #ffffff;';
		hs+='background: rgba(255,255,255,0);';
		hs+='border: 1px solid #55aa7f;';
		hs+='border: 1px solid rgba(85,170,127,0);';
		hs+=cssPrefix + 'background-clip: padding-box;';
		hs+='background-clip: padding-box;';
		hs+='border-radius: 10px;';
		hs+=cssPrefix + 'border-radius: 10px;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: left;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 2px 3px 2px 3px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		els.innerHTML="O anfitr\xe3o recebe voc\xea";
		el.appendChild(els);
		me._espao_de_trabalho_exclusivo0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._espao_de_trabalho_exclusivo0.logicBlock_text = function() {
			var newLogicStateText;
			if (
				((player.getVariableValue('POR') == true))
			)
			{
				newLogicStateText = 0;
			}
			else if (
				((player.getVariableValue('ENG') == true))
			)
			{
				newLogicStateText = 1;
			}
			else if (
				((player.getVariableValue('ESP') == true))
			)
			{
				newLogicStateText = 2;
			}
			else {
				newLogicStateText = -1;
			}
			if (me._espao_de_trabalho_exclusivo0.ggCurrentLogicStateText != newLogicStateText) {
				me._espao_de_trabalho_exclusivo0.ggCurrentLogicStateText = newLogicStateText;
				me._espao_de_trabalho_exclusivo0.style[domTransition]='';
				if (me._espao_de_trabalho_exclusivo0.ggCurrentLogicStateText == 0) {
					me._espao_de_trabalho_exclusivo0.ggText="O anfitr\xe3o recebe voc\xea";
					me._espao_de_trabalho_exclusivo0__text.innerHTML=me._espao_de_trabalho_exclusivo0.ggText;
					if (me._espao_de_trabalho_exclusivo0.ggUpdateText) {
					me._espao_de_trabalho_exclusivo0.ggUpdateText=function() {
						var hs="O anfitr\xe3o recebe voc\xea";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._espao_de_trabalho_exclusivo0.ggUpdatePosition) me._espao_de_trabalho_exclusivo0.ggUpdatePosition();
					}
				}
				else if (me._espao_de_trabalho_exclusivo0.ggCurrentLogicStateText == 1) {
					me._espao_de_trabalho_exclusivo0.ggText="Host greets you";
					me._espao_de_trabalho_exclusivo0__text.innerHTML=me._espao_de_trabalho_exclusivo0.ggText;
					if (me._espao_de_trabalho_exclusivo0.ggUpdateText) {
					me._espao_de_trabalho_exclusivo0.ggUpdateText=function() {
						var hs="Host greets you";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._espao_de_trabalho_exclusivo0.ggUpdatePosition) me._espao_de_trabalho_exclusivo0.ggUpdatePosition();
					}
				}
				else if (me._espao_de_trabalho_exclusivo0.ggCurrentLogicStateText == 2) {
					me._espao_de_trabalho_exclusivo0.ggText="El anfitri\xf3n te recibe";
					me._espao_de_trabalho_exclusivo0__text.innerHTML=me._espao_de_trabalho_exclusivo0.ggText;
					if (me._espao_de_trabalho_exclusivo0.ggUpdateText) {
					me._espao_de_trabalho_exclusivo0.ggUpdateText=function() {
						var hs="El anfitri\xf3n te recibe";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._espao_de_trabalho_exclusivo0.ggUpdatePosition) me._espao_de_trabalho_exclusivo0.ggUpdatePosition();
					}
				}
				else {
					me._espao_de_trabalho_exclusivo0.ggText="O anfitr\xe3o recebe voc\xea";
					me._espao_de_trabalho_exclusivo0__text.innerHTML=me._espao_de_trabalho_exclusivo0.ggText;
					if (me._espao_de_trabalho_exclusivo0.ggUpdateText) {
					me._espao_de_trabalho_exclusivo0.ggUpdateText=function() {
						var hs="O anfitr\xe3o recebe voc\xea";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._espao_de_trabalho_exclusivo0.ggUpdatePosition) me._espao_de_trabalho_exclusivo0.ggUpdatePosition();
					}
				}
			}
		}
		me._espao_de_trabalho_exclusivo0.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 2;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._serviosii.appendChild(me._espao_de_trabalho_exclusivo0);
		el=me._rectangle_2=document.createElement('div');
		el.ggId="Rectangle 2";
		el.ggDx=-130;
		el.ggDy=34;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 200px;';
		hs+='border-radius : 200px;';
		hs+='background : #ffffff;';
		hs+='border : 1px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 32px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 30px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._rectangle_2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_2.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._serviosii.appendChild(me._rectangle_2);
		el=me._ht_image_info1=document.createElement('div');
		el.ggId="ht_image_info-1";
		el.ggDx=-130;
		el.ggDy=34;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 100px;';
		hs+='border-radius : 100px;';
		hs+='background : #ffffff;';
		hs+='border : 1px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 50px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_image_info1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._ht_image_info1.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._ht_image_info2=document.createElement('div');
		el.ggId="ht_image_info-2";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 200px;';
		hs+='border-radius : 200px;';
		hs+='border : 4px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 32px;';
		hs+='left : -10000px;';
		hs+='opacity : 0.8;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 30px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_image_info2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._ht_image_info2.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._ht_image_info1.appendChild(me._ht_image_info2);
		me._serviosii.appendChild(me._ht_image_info1);
		el=me._image_1=document.createElement('div');
		els=me._image_1__img=document.createElement('img');
		els.className='ggskin ggskin_image_1';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAhCAYAAAC803lsAAAGq0lEQVRYhbVYTUhU/Rd+7peOghsrsUARvzDKCrEW4cY+CMSFmAWlYW2iCFoIbYqgiIKojEKIAqmgrI2LXIRGKS0yYiZEEIWgJIhwGlOqcWbux+/3/Bev9/feO+NL/nl7z+bO3Dn33HOf8zznnDsaSWKVJoSAruvQNA0AQFJ9/rem/S6RlW7mX/KnkgAAfTVOQgh4nhdKgCSEEH8skd8i4tt/gULQfouIlDKUgBACUkqQxP9Br9+auRonPxkAMAxDfRZChL7/G1tVabLLIoSApmnQ9VVRbFX2W0Syb5pIJLC4uIiioiKsX7/+jyUCBszzPJKk4zgkSSEEXdellJK3b9/m7t27WV1dzbKyMtbW1rK9vZ3RaJRSSpKk67oqVjqdzjnnOI7yFUIEb01NSs'+
			'nsBhVsXMlkEocPH8aXL1/Q1taGhoYGFBUVYXp6GiMjI5icnMSlS5fQ1dUFAHAcB5qmwbIsSCmh6zo8z4Np/g2+j7KU8u/zfob+MWi2bfPUqVPcuXMnFxYWKIRQfplMhiR57do1lpeXMxaLha710fVNSknXdel5Xg4aJKnI6mfvHwEgGo3i6NGj6OvrQ3Nzc05ZU6kUCgoKsGvXLui6jra2NqUw13VhWRaqqqrQ2tqqkPgn1Zl+Ofzy6LquHEZHR6FpGpqbmyGlhBAClmUpqAsLCwEABw4cQG9vL27dugXHcVBUVISlpSVEIhGkUin8+PEDBw8ehGVZEELAdV1EIpHwUwXh9s0n2PHjx9nS0kKSvHLlCs+dO6d8lpaWcuANllgIQdu2eezYMdbU1HBoaEiJINuXJM0gAr75BFq7di2+fv0KANi7dy8sy0I6nUZBQYFC'+
			'AwA+fPiA4eFhnDx5Eq7r4v79+zAMA6lUCrFYDKWlpdi+fTssy0IqlUIkEglNcSCrj5CElFIlVVtbi+fPnyORSKCxsTFUWz8QSdy9exfPnj1DLBaDpmkYGxtDfn4+hBCorKzEwMAASkpKkMlkUFhYqEZEaG6RDEEW1P3CwgK3bNnC69ev55TAV8XU1BSrq6vZ1dXFiooK1tXVcWRkRJUneMyOHzTYtq2Cep4Xqls6nebw8DBramp4/vx5zs/Pq0Cu6/Ljx49sampiT08PSfLVq1d8/fp1iEMrSdW/PijxFWcNlyerL+cXL17gwoULiMfjaGpqAklkMhlMT09j27ZtGBgYCDUyAPA8D7quq73l06dPqKioyFXLsmnLSEAIgfz8fNUDgnLWdR2ZTAZDQ0N49+4dfv78iY0bN6K5uRn19fUwTVPV3CczAPz69Qv9/f148u'+
			'QJ5ubm0NLSgjt37ihxBEWiua5LXyVSSnieh7y8vBAxfZR8P79Z+YEcx4FpmtB1Ha7rQtd1DA0N4caNG/j27Rv27dunSNzf348dO3bkIGIGZ4CUUiXR19eHN2/ewDRNhU4wAdu2UVhYCNu2kZ+fD8/zEIlE0NbWhnv37mFmZgbV1dV4+vQp6uvrEY/HMTg4iEQioWIBUKXUpJQE/to1/BvNzs6itbUVZWVlKCkpQTKZRCQSUfLOy8tTKFiWhWQyibm5OXz//h3JZBLFxcXo6elBd3c3SCKRSKC7uxuzs7MYHR3Fhg0bckmSzWzbthmNRllWVsb3798rFQUZ7vv7g4wke3t7WVFRwY6ODs7Pz5P8qy08ePCAdXV1bGho4MuXL5Uas830GZ6XlwchhKq1vw74ZfGPnufBMAx0dnaq3zVNw9u3b6HrOi5fvow1a9YgHo/j'+
			'9OnTmJiYQFNTE65evYp169ZBCKGUw0BTM/0kgjuDbdswDAOZTCaEnp+orybP81SSR44cwf79+1FZWYlHjx6ht7cXJHHx4kUcOnQIQgg4jhMSQk5pHMdR+4WUktFolDU1NRwcHKRt2wq+4C6y0h4Tj8d54sQJ1tbWsqOjg58/f1a/+fEdx8kZflxuNuqL53lMp9NMJpPcs2cPy8vLWVlZyfb2dp49e5aPHz/m5ORkyN/nzMjICDdt2sSqqio+fPgw9ACLi4s510gpV+6svmJ8S6fTWFhYwMTEBMbHxzE1NYWZmRm1OG3duhWbN29GcXExotEoxsfH0djYiJs3b6K0tFTtNcHFO5PJ/HNn9TyPhmEo4riuqwgVJFM6nYZhGBgbG8PU1BQmJiYQi8VAEoZh4MyZM+js7IRpmmq6+g/mui5IKn44jgPLskLTNzRrsveS4B'+
			'udaZohQgdbeXAtCJ7PjhlcQ7PR0QJcyWnhQUSCXTW4i/jbePBlK/vvi2VRhFpC9na/6pfw/9r+B7ebrRrJGVKdAAAAAElFTkSuQmCC';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 1";
		el.ggDx=-130;
		el.ggDy=34;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 23px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 23px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._image_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_1.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._serviosii.appendChild(me._image_1);
		me._serviosi.appendChild(me._serviosii);
		me.divSkin.appendChild(me._serviosi);
		el=me._info=document.createElement('div');
		el.ggId="INFO";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 20px;';
		hs+='border-radius : 20px;';
		hs+='background : #515151;';
		hs+='border : 2px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 379px;';
		hs+='left : 10px;';
		hs+='position : absolute;';
		hs+='top : 76px;';
		hs+='visibility : hidden;';
		hs+='width : 147px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._info.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._info.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getViewerSize().height <= 400))
			)
			{
				newLogicStatePosition = 0;
			}
			else if (
				((player.getViewerSize().width < 1084))
			)
			{
				newLogicStatePosition = 1;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._info.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._info.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._info.style[domTransition]='left 0s, top 0s, ' + cssPrefix + 'transform 0s';
				if (me._info.ggCurrentLogicStatePosition == 0) {
					me._info.style.left='-10px';
					me._info.style.top='15px';
				}
				else if (me._info.ggCurrentLogicStatePosition == 1) {
					me._info.style.left='-10px';
					me._info.style.top='15px';
				}
				else {
					me._info.style.left='10px';
					me._info.style.top='76px';
				}
			}
		}
		me._info.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getViewerSize().width < 1084))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._info.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._info.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._info.style[domTransition]='left 0s, top 0s, ' + cssPrefix + 'transform 0s';
				if (me._info.ggCurrentLogicStateScaling == 0) {
					me._info.ggParameter.sx = 0.8;
					me._info.ggParameter.sy = 0.8;
					me._info.style[domTransform]=parameterToTransform(me._info.ggParameter);
				}
				else {
					me._info.ggParameter.sx = 1;
					me._info.ggParameter.sy = 1;
					me._info.style[domTransform]=parameterToTransform(me._info.ggParameter);
				}
			}
		}
		me._info.ggUpdatePosition=function (useTransition) {
		}
		el=me._banheiro_=document.createElement('div');
		els=me._banheiro___text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="BANHEIRO ";
		el.ggDx=3;
		el.ggDy=-170;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 24px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 135px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 137px;';
		hs+='height: auto;';
		hs+='background: #ffffff;';
		hs+='background: rgba(255,255,255,0);';
		hs+='border: 1px solid #ffffff;';
		hs+='border-radius: 10px;';
		hs+=cssPrefix + 'border-radius: 10px;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 2px 3px 2px 3px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		els.innerHTML="BANHEIRO";
		el.appendChild(els);
		me._banheiro_.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._banheiro_.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.elementMouseOver['banheiro_'] == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._banheiro_.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._banheiro_.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._banheiro___text.style[domTransition]='background-color 0s';
				if (me._banheiro_.ggCurrentLogicStateBackgroundColor == 0) {
					me._banheiro___text.style.backgroundColor="rgba(0,0,0,1)";
				}
				else {
					me._banheiro___text.style.backgroundColor="rgba(255,255,255,0)";
				}
			}
		}
		me._banheiro_.logicBlock_text = function() {
			var newLogicStateText;
			if (
				((player.getVariableValue('POR') == true))
			)
			{
				newLogicStateText = 0;
			}
			else if (
				((player.getVariableValue('ENG') == true))
			)
			{
				newLogicStateText = 1;
			}
			else if (
				((player.getVariableValue('ESP') == true))
			)
			{
				newLogicStateText = 2;
			}
			else {
				newLogicStateText = -1;
			}
			if (me._banheiro_.ggCurrentLogicStateText != newLogicStateText) {
				me._banheiro_.ggCurrentLogicStateText = newLogicStateText;
				me._banheiro_.style[domTransition]='background-color 0s';
				if (me._banheiro_.ggCurrentLogicStateText == 0) {
					me._banheiro_.ggText="BANHEIRO";
					me._banheiro___text.innerHTML=me._banheiro_.ggText;
					if (me._banheiro_.ggUpdateText) {
					me._banheiro_.ggUpdateText=function() {
						var hs="BANHEIRO";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._banheiro_.ggUpdatePosition) me._banheiro_.ggUpdatePosition();
					}
				}
				else if (me._banheiro_.ggCurrentLogicStateText == 1) {
					me._banheiro_.ggText="BATHROOM";
					me._banheiro___text.innerHTML=me._banheiro_.ggText;
					if (me._banheiro_.ggUpdateText) {
					me._banheiro_.ggUpdateText=function() {
						var hs="BATHROOM";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._banheiro_.ggUpdatePosition) me._banheiro_.ggUpdatePosition();
					}
				}
				else if (me._banheiro_.ggCurrentLogicStateText == 2) {
					me._banheiro_.ggText="BA\xd1O";
					me._banheiro___text.innerHTML=me._banheiro_.ggText;
					if (me._banheiro_.ggUpdateText) {
					me._banheiro_.ggUpdateText=function() {
						var hs="BA\xd1O";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._banheiro_.ggUpdatePosition) me._banheiro_.ggUpdatePosition();
					}
				}
				else {
					me._banheiro_.ggText="BANHEIRO";
					me._banheiro___text.innerHTML=me._banheiro_.ggText;
					if (me._banheiro_.ggUpdateText) {
					me._banheiro_.ggUpdateText=function() {
						var hs="BANHEIRO";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._banheiro_.ggUpdatePosition) me._banheiro_.ggUpdatePosition();
					}
				}
			}
		}
		me._banheiro_.onclick=function (e) {
			me._banheiroi.ggVisible = !me._banheiroi.ggVisible;
			var flag=me._banheiroi.ggVisible;
			me._banheiroi.style[domTransition]='none';
			me._banheiroi.style.visibility=((flag)&&(Number(me._banheiroi.style.opacity)>0||!me._banheiroi.style.opacity))?'inherit':'hidden';
			me._entretenimentoi.style[domTransition]='none';
			me._entretenimentoi.style.visibility='hidden';
			me._entretenimentoi.ggVisible=false;
			me._privacidade_e_seguranai.style[domTransition]='none';
			me._privacidade_e_seguranai.style.visibility='hidden';
			me._privacidade_e_seguranai.ggVisible=false;
			me._quarto_e_lavanderiai.style[domTransition]='none';
			me._quarto_e_lavanderiai.style.visibility='hidden';
			me._quarto_e_lavanderiai.ggVisible=false;
			me._climatizaoi.style[domTransition]='none';
			me._climatizaoi.style.visibility='hidden';
			me._climatizaoi.ggVisible=false;
			me._internet_e_escritrioi.style[domTransition]='none';
			me._internet_e_escritrioi.style.visibility='hidden';
			me._internet_e_escritrioi.ggVisible=false;
			me._cozinha_e_sala_de_jantari.style[domTransition]='none';
			me._cozinha_e_sala_de_jantari.style.visibility='hidden';
			me._cozinha_e_sala_de_jantari.ggVisible=false;
			me._estacionamento_e_instalaesi.style[domTransition]='none';
			me._estacionamento_e_instalaesi.style.visibility='hidden';
			me._estacionamento_e_instalaesi.ggVisible=false;
			me._serviosi.style[domTransition]='none';
			me._serviosi.style.visibility='hidden';
			me._serviosi.ggVisible=false;
			me._no_inclusoi.style[domTransition]='none';
			me._no_inclusoi.style.visibility='hidden';
			me._no_inclusoi.ggVisible=false;
			me._sobre_o_lugar.style[domTransition]='none';
			me._sobre_o_lugar.style.visibility='hidden';
			me._sobre_o_lugar.ggVisible=false;
		}
		me._banheiro_.onmouseover=function (e) {
			me.elementMouseOver['banheiro_']=true;
			me._banheiro_.logicBlock_backgroundcolor();
		}
		me._banheiro_.onmouseout=function (e) {
			if (e && e.toElement) {
				var current = e.toElement;
				while (current = current.parentNode) {
				if (current == me._banheiro___text)
					return;
				}
			}
			me.elementMouseOver['banheiro_']=false;
			me._banheiro_.logicBlock_backgroundcolor();
		}
		me._banheiro_.ontouchend=function (e) {
			me.elementMouseOver['banheiro_']=false;
			me._banheiro_.logicBlock_backgroundcolor();
		}
		me._banheiro_.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 2;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._info.appendChild(me._banheiro_);
		el=me._quarto_e_lavanderiab=document.createElement('div');
		els=me._quarto_e_lavanderiab__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="QUARTO E LAVANDERIA-b";
		el.ggDx=0;
		el.ggDy=-55;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 24px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 135px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 137px;';
		hs+='height: auto;';
		hs+='background: #ffffff;';
		hs+='background: rgba(255,255,255,0);';
		hs+='border: 1px solid #ffffff;';
		hs+='border-radius: 10px;';
		hs+=cssPrefix + 'border-radius: 10px;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 2px 3px 2px 3px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		els.innerHTML="QUARTO";
		el.appendChild(els);
		me._quarto_e_lavanderiab.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._quarto_e_lavanderiab.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.elementMouseOver['quarto_e_lavanderiab'] == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._quarto_e_lavanderiab.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._quarto_e_lavanderiab.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._quarto_e_lavanderiab__text.style[domTransition]='background-color 0s';
				if (me._quarto_e_lavanderiab.ggCurrentLogicStateBackgroundColor == 0) {
					me._quarto_e_lavanderiab__text.style.backgroundColor="rgba(0,0,0,1)";
				}
				else {
					me._quarto_e_lavanderiab__text.style.backgroundColor="rgba(255,255,255,0)";
				}
			}
		}
		me._quarto_e_lavanderiab.logicBlock_text = function() {
			var newLogicStateText;
			if (
				((player.getVariableValue('POR') == true))
			)
			{
				newLogicStateText = 0;
			}
			else if (
				((player.getVariableValue('ENG') == true))
			)
			{
				newLogicStateText = 1;
			}
			else if (
				((player.getVariableValue('ESP') == true))
			)
			{
				newLogicStateText = 2;
			}
			else {
				newLogicStateText = -1;
			}
			if (me._quarto_e_lavanderiab.ggCurrentLogicStateText != newLogicStateText) {
				me._quarto_e_lavanderiab.ggCurrentLogicStateText = newLogicStateText;
				me._quarto_e_lavanderiab.style[domTransition]='background-color 0s';
				if (me._quarto_e_lavanderiab.ggCurrentLogicStateText == 0) {
					me._quarto_e_lavanderiab.ggText="QUARTO ";
					me._quarto_e_lavanderiab__text.innerHTML=me._quarto_e_lavanderiab.ggText;
					if (me._quarto_e_lavanderiab.ggUpdateText) {
					me._quarto_e_lavanderiab.ggUpdateText=function() {
						var hs="QUARTO ";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._quarto_e_lavanderiab.ggUpdatePosition) me._quarto_e_lavanderiab.ggUpdatePosition();
					}
				}
				else if (me._quarto_e_lavanderiab.ggCurrentLogicStateText == 1) {
					me._quarto_e_lavanderiab.ggText="BEDROOM";
					me._quarto_e_lavanderiab__text.innerHTML=me._quarto_e_lavanderiab.ggText;
					if (me._quarto_e_lavanderiab.ggUpdateText) {
					me._quarto_e_lavanderiab.ggUpdateText=function() {
						var hs="BEDROOM";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._quarto_e_lavanderiab.ggUpdatePosition) me._quarto_e_lavanderiab.ggUpdatePosition();
					}
				}
				else if (me._quarto_e_lavanderiab.ggCurrentLogicStateText == 2) {
					me._quarto_e_lavanderiab.ggText="CUARTO";
					me._quarto_e_lavanderiab__text.innerHTML=me._quarto_e_lavanderiab.ggText;
					if (me._quarto_e_lavanderiab.ggUpdateText) {
					me._quarto_e_lavanderiab.ggUpdateText=function() {
						var hs="CUARTO";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._quarto_e_lavanderiab.ggUpdatePosition) me._quarto_e_lavanderiab.ggUpdatePosition();
					}
				}
				else {
					me._quarto_e_lavanderiab.ggText="QUARTO";
					me._quarto_e_lavanderiab__text.innerHTML=me._quarto_e_lavanderiab.ggText;
					if (me._quarto_e_lavanderiab.ggUpdateText) {
					me._quarto_e_lavanderiab.ggUpdateText=function() {
						var hs="QUARTO";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._quarto_e_lavanderiab.ggUpdatePosition) me._quarto_e_lavanderiab.ggUpdatePosition();
					}
				}
			}
		}
		me._quarto_e_lavanderiab.onclick=function (e) {
			me._quarto_e_lavanderiai.ggVisible = !me._quarto_e_lavanderiai.ggVisible;
			var flag=me._quarto_e_lavanderiai.ggVisible;
			me._quarto_e_lavanderiai.style[domTransition]='none';
			me._quarto_e_lavanderiai.style.visibility=((flag)&&(Number(me._quarto_e_lavanderiai.style.opacity)>0||!me._quarto_e_lavanderiai.style.opacity))?'inherit':'hidden';
			me._entretenimentoi.style[domTransition]='none';
			me._entretenimentoi.style.visibility='hidden';
			me._entretenimentoi.ggVisible=false;
			me._privacidade_e_seguranai.style[domTransition]='none';
			me._privacidade_e_seguranai.style.visibility='hidden';
			me._privacidade_e_seguranai.ggVisible=false;
			me._banheiroi.style[domTransition]='none';
			me._banheiroi.style.visibility='hidden';
			me._banheiroi.ggVisible=false;
			me._climatizaoi.style[domTransition]='none';
			me._climatizaoi.style.visibility='hidden';
			me._climatizaoi.ggVisible=false;
			me._internet_e_escritrioi.style[domTransition]='none';
			me._internet_e_escritrioi.style.visibility='hidden';
			me._internet_e_escritrioi.ggVisible=false;
			me._cozinha_e_sala_de_jantari.style[domTransition]='none';
			me._cozinha_e_sala_de_jantari.style.visibility='hidden';
			me._cozinha_e_sala_de_jantari.ggVisible=false;
			me._estacionamento_e_instalaesi.style[domTransition]='none';
			me._estacionamento_e_instalaesi.style.visibility='hidden';
			me._estacionamento_e_instalaesi.ggVisible=false;
			me._serviosi.style[domTransition]='none';
			me._serviosi.style.visibility='hidden';
			me._serviosi.ggVisible=false;
			me._no_inclusoi.style[domTransition]='none';
			me._no_inclusoi.style.visibility='hidden';
			me._no_inclusoi.ggVisible=false;
			me._sobre_o_lugar.style[domTransition]='none';
			me._sobre_o_lugar.style.visibility='hidden';
			me._sobre_o_lugar.ggVisible=false;
		}
		me._quarto_e_lavanderiab.onmouseover=function (e) {
			me.elementMouseOver['quarto_e_lavanderiab']=true;
			me._quarto_e_lavanderiab.logicBlock_backgroundcolor();
		}
		me._quarto_e_lavanderiab.onmouseout=function (e) {
			if (e && e.toElement) {
				var current = e.toElement;
				while (current = current.parentNode) {
				if (current == me._quarto_e_lavanderiab__text)
					return;
				}
			}
			me.elementMouseOver['quarto_e_lavanderiab']=false;
			me._quarto_e_lavanderiab.logicBlock_backgroundcolor();
		}
		me._quarto_e_lavanderiab.ontouchend=function (e) {
			me.elementMouseOver['quarto_e_lavanderiab']=false;
			me._quarto_e_lavanderiab.logicBlock_backgroundcolor();
		}
		me._quarto_e_lavanderiab.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 2;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._info.appendChild(me._quarto_e_lavanderiab);
		el=me._entretenimentob=document.createElement('div');
		els=me._entretenimentob__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="ENTRETENIMENTO-b";
		el.ggDx=1;
		el.ggDy=-133;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 24px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 135px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 137px;';
		hs+='height: auto;';
		hs+='background: #ffffff;';
		hs+='background: rgba(255,255,255,0);';
		hs+='border: 1px solid #ffffff;';
		hs+='border-radius: 10px;';
		hs+=cssPrefix + 'border-radius: 10px;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 2px 3px 2px 3px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		els.innerHTML="ENTRETENIMENTO";
		el.appendChild(els);
		me._entretenimentob.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._entretenimentob.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.elementMouseOver['entretenimentob'] == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._entretenimentob.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._entretenimentob.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._entretenimentob__text.style[domTransition]='background-color 0s';
				if (me._entretenimentob.ggCurrentLogicStateBackgroundColor == 0) {
					me._entretenimentob__text.style.backgroundColor="rgba(0,0,0,1)";
				}
				else {
					me._entretenimentob__text.style.backgroundColor="rgba(255,255,255,0)";
				}
			}
		}
		me._entretenimentob.logicBlock_text = function() {
			var newLogicStateText;
			if (
				((player.getVariableValue('POR') == true))
			)
			{
				newLogicStateText = 0;
			}
			else if (
				((player.getVariableValue('ENG') == true))
			)
			{
				newLogicStateText = 1;
			}
			else if (
				((player.getVariableValue('ESP') == true))
			)
			{
				newLogicStateText = 2;
			}
			else {
				newLogicStateText = -1;
			}
			if (me._entretenimentob.ggCurrentLogicStateText != newLogicStateText) {
				me._entretenimentob.ggCurrentLogicStateText = newLogicStateText;
				me._entretenimentob.style[domTransition]='background-color 0s';
				if (me._entretenimentob.ggCurrentLogicStateText == 0) {
					me._entretenimentob.ggText="ENTRETENIMENTO";
					me._entretenimentob__text.innerHTML=me._entretenimentob.ggText;
					if (me._entretenimentob.ggUpdateText) {
					me._entretenimentob.ggUpdateText=function() {
						var hs="ENTRETENIMENTO";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._entretenimentob.ggUpdatePosition) me._entretenimentob.ggUpdatePosition();
					}
				}
				else if (me._entretenimentob.ggCurrentLogicStateText == 1) {
					me._entretenimentob.ggText="ENTERTAINEMENT";
					me._entretenimentob__text.innerHTML=me._entretenimentob.ggText;
					if (me._entretenimentob.ggUpdateText) {
					me._entretenimentob.ggUpdateText=function() {
						var hs="ENTERTAINEMENT";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._entretenimentob.ggUpdatePosition) me._entretenimentob.ggUpdatePosition();
					}
				}
				else if (me._entretenimentob.ggCurrentLogicStateText == 2) {
					me._entretenimentob.ggText="ENTRETENIMIENTO";
					me._entretenimentob__text.innerHTML=me._entretenimentob.ggText;
					if (me._entretenimentob.ggUpdateText) {
					me._entretenimentob.ggUpdateText=function() {
						var hs="ENTRETENIMIENTO";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._entretenimentob.ggUpdatePosition) me._entretenimentob.ggUpdatePosition();
					}
				}
				else {
					me._entretenimentob.ggText="ENTRETENIMENTO";
					me._entretenimentob__text.innerHTML=me._entretenimentob.ggText;
					if (me._entretenimentob.ggUpdateText) {
					me._entretenimentob.ggUpdateText=function() {
						var hs="ENTRETENIMENTO";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._entretenimentob.ggUpdatePosition) me._entretenimentob.ggUpdatePosition();
					}
				}
			}
		}
		me._entretenimentob.onclick=function (e) {
			me._entretenimentoi.ggVisible = !me._entretenimentoi.ggVisible;
			var flag=me._entretenimentoi.ggVisible;
			me._entretenimentoi.style[domTransition]='none';
			me._entretenimentoi.style.visibility=((flag)&&(Number(me._entretenimentoi.style.opacity)>0||!me._entretenimentoi.style.opacity))?'inherit':'hidden';
			me._banheiroi.style[domTransition]='none';
			me._banheiroi.style.visibility='hidden';
			me._banheiroi.ggVisible=false;
			me._privacidade_e_seguranai.style[domTransition]='none';
			me._privacidade_e_seguranai.style.visibility='hidden';
			me._privacidade_e_seguranai.ggVisible=false;
			me._quarto_e_lavanderiai.style[domTransition]='none';
			me._quarto_e_lavanderiai.style.visibility='hidden';
			me._quarto_e_lavanderiai.ggVisible=false;
			me._climatizaoi.style[domTransition]='none';
			me._climatizaoi.style.visibility='hidden';
			me._climatizaoi.ggVisible=false;
			me._internet_e_escritrioi.style[domTransition]='none';
			me._internet_e_escritrioi.style.visibility='hidden';
			me._internet_e_escritrioi.ggVisible=false;
			me._cozinha_e_sala_de_jantari.style[domTransition]='none';
			me._cozinha_e_sala_de_jantari.style.visibility='hidden';
			me._cozinha_e_sala_de_jantari.ggVisible=false;
			me._estacionamento_e_instalaesi.style[domTransition]='none';
			me._estacionamento_e_instalaesi.style.visibility='hidden';
			me._estacionamento_e_instalaesi.ggVisible=false;
			me._serviosi.style[domTransition]='none';
			me._serviosi.style.visibility='hidden';
			me._serviosi.ggVisible=false;
			me._no_inclusoi.style[domTransition]='none';
			me._no_inclusoi.style.visibility='hidden';
			me._no_inclusoi.ggVisible=false;
			me._sobre_o_lugar.style[domTransition]='none';
			me._sobre_o_lugar.style.visibility='hidden';
			me._sobre_o_lugar.ggVisible=false;
		}
		me._entretenimentob.onmouseover=function (e) {
			me.elementMouseOver['entretenimentob']=true;
			me._entretenimentob.logicBlock_backgroundcolor();
		}
		me._entretenimentob.onmouseout=function (e) {
			if (e && e.toElement) {
				var current = e.toElement;
				while (current = current.parentNode) {
				if (current == me._entretenimentob__text)
					return;
				}
			}
			me.elementMouseOver['entretenimentob']=false;
			me._entretenimentob.logicBlock_backgroundcolor();
		}
		me._entretenimentob.ontouchend=function (e) {
			me.elementMouseOver['entretenimentob']=false;
			me._entretenimentob.logicBlock_backgroundcolor();
		}
		me._entretenimentob.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 2;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._info.appendChild(me._entretenimentob);
		el=me._climatizaob=document.createElement('div');
		els=me._climatizaob__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="CLIMATIZA\xc7\xc3O-b";
		el.ggDx=0;
		el.ggDy=-14;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 24px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 135px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 137px;';
		hs+='height: auto;';
		hs+='background: #ffffff;';
		hs+='background: rgba(255,255,255,0);';
		hs+='border: 1px solid #ffffff;';
		hs+='border-radius: 10px;';
		hs+=cssPrefix + 'border-radius: 10px;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 2px 3px 2px 3px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		els.innerHTML="CLIMATIZA\xc7\xc3O";
		el.appendChild(els);
		me._climatizaob.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._climatizaob.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.elementMouseOver['climatizaob'] == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._climatizaob.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._climatizaob.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._climatizaob__text.style[domTransition]='background-color 0s';
				if (me._climatizaob.ggCurrentLogicStateBackgroundColor == 0) {
					me._climatizaob__text.style.backgroundColor="rgba(0,0,0,1)";
				}
				else {
					me._climatizaob__text.style.backgroundColor="rgba(255,255,255,0)";
				}
			}
		}
		me._climatizaob.logicBlock_text = function() {
			var newLogicStateText;
			if (
				((player.getVariableValue('POR') == true))
			)
			{
				newLogicStateText = 0;
			}
			else if (
				((player.getVariableValue('ENG') == true))
			)
			{
				newLogicStateText = 1;
			}
			else if (
				((player.getVariableValue('ESP') == true))
			)
			{
				newLogicStateText = 2;
			}
			else {
				newLogicStateText = -1;
			}
			if (me._climatizaob.ggCurrentLogicStateText != newLogicStateText) {
				me._climatizaob.ggCurrentLogicStateText = newLogicStateText;
				me._climatizaob.style[domTransition]='background-color 0s';
				if (me._climatizaob.ggCurrentLogicStateText == 0) {
					me._climatizaob.ggText="CLIMATIZA\xc7\xc3O";
					me._climatizaob__text.innerHTML=me._climatizaob.ggText;
					if (me._climatizaob.ggUpdateText) {
					me._climatizaob.ggUpdateText=function() {
						var hs="CLIMATIZA\xc7\xc3O";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._climatizaob.ggUpdatePosition) me._climatizaob.ggUpdatePosition();
					}
				}
				else if (me._climatizaob.ggCurrentLogicStateText == 1) {
					me._climatizaob.ggText=" COOLING";
					me._climatizaob__text.innerHTML=me._climatizaob.ggText;
					if (me._climatizaob.ggUpdateText) {
					me._climatizaob.ggUpdateText=function() {
						var hs=" COOLING";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._climatizaob.ggUpdatePosition) me._climatizaob.ggUpdatePosition();
					}
				}
				else if (me._climatizaob.ggCurrentLogicStateText == 2) {
					me._climatizaob.ggText="CLIMATIZACI\xd3N";
					me._climatizaob__text.innerHTML=me._climatizaob.ggText;
					if (me._climatizaob.ggUpdateText) {
					me._climatizaob.ggUpdateText=function() {
						var hs="CLIMATIZACI\xd3N";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._climatizaob.ggUpdatePosition) me._climatizaob.ggUpdatePosition();
					}
				}
				else {
					me._climatizaob.ggText="CLIMATIZA\xc7\xc3O";
					me._climatizaob__text.innerHTML=me._climatizaob.ggText;
					if (me._climatizaob.ggUpdateText) {
					me._climatizaob.ggUpdateText=function() {
						var hs="CLIMATIZA\xc7\xc3O";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._climatizaob.ggUpdatePosition) me._climatizaob.ggUpdatePosition();
					}
				}
			}
		}
		me._climatizaob.onclick=function (e) {
			me._climatizaoi.ggVisible = !me._climatizaoi.ggVisible;
			var flag=me._climatizaoi.ggVisible;
			me._climatizaoi.style[domTransition]='none';
			me._climatizaoi.style.visibility=((flag)&&(Number(me._climatizaoi.style.opacity)>0||!me._climatizaoi.style.opacity))?'inherit':'hidden';
			me._entretenimentoi.style[domTransition]='none';
			me._entretenimentoi.style.visibility='hidden';
			me._entretenimentoi.ggVisible=false;
			me._privacidade_e_seguranai.style[domTransition]='none';
			me._privacidade_e_seguranai.style.visibility='hidden';
			me._privacidade_e_seguranai.ggVisible=false;
			me._quarto_e_lavanderiai.style[domTransition]='none';
			me._quarto_e_lavanderiai.style.visibility='hidden';
			me._quarto_e_lavanderiai.ggVisible=false;
			me._banheiroi.style[domTransition]='none';
			me._banheiroi.style.visibility='hidden';
			me._banheiroi.ggVisible=false;
			me._internet_e_escritrioi.style[domTransition]='none';
			me._internet_e_escritrioi.style.visibility='hidden';
			me._internet_e_escritrioi.ggVisible=false;
			me._cozinha_e_sala_de_jantari.style[domTransition]='none';
			me._cozinha_e_sala_de_jantari.style.visibility='hidden';
			me._cozinha_e_sala_de_jantari.ggVisible=false;
			me._estacionamento_e_instalaesi.style[domTransition]='none';
			me._estacionamento_e_instalaesi.style.visibility='hidden';
			me._estacionamento_e_instalaesi.ggVisible=false;
			me._serviosi.style[domTransition]='none';
			me._serviosi.style.visibility='hidden';
			me._serviosi.ggVisible=false;
			me._no_inclusoi.style[domTransition]='none';
			me._no_inclusoi.style.visibility='hidden';
			me._no_inclusoi.ggVisible=false;
			me._sobre_o_lugar.style[domTransition]='none';
			me._sobre_o_lugar.style.visibility='hidden';
			me._sobre_o_lugar.ggVisible=false;
		}
		me._climatizaob.onmouseover=function (e) {
			me.elementMouseOver['climatizaob']=true;
			me._climatizaob.logicBlock_backgroundcolor();
		}
		me._climatizaob.onmouseout=function (e) {
			if (e && e.toElement) {
				var current = e.toElement;
				while (current = current.parentNode) {
				if (current == me._climatizaob__text)
					return;
				}
			}
			me.elementMouseOver['climatizaob']=false;
			me._climatizaob.logicBlock_backgroundcolor();
		}
		me._climatizaob.ontouchend=function (e) {
			me.elementMouseOver['climatizaob']=false;
			me._climatizaob.logicBlock_backgroundcolor();
		}
		me._climatizaob.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 2;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._info.appendChild(me._climatizaob);
		el=me._privacidade_e_seguranab=document.createElement('div');
		els=me._privacidade_e_seguranab__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="PRIVACIDADE E SEGURAN\xc7A-b";
		el.ggDx=0;
		el.ggDy=-94;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 24px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 135px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 137px;';
		hs+='height: auto;';
		hs+='background: #ffffff;';
		hs+='background: rgba(255,255,255,0);';
		hs+='border: 1px solid #ffffff;';
		hs+='border-radius: 10px;';
		hs+=cssPrefix + 'border-radius: 10px;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 2px 3px 2px 3px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		els.innerHTML="PRIVACIDADE";
		el.appendChild(els);
		me._privacidade_e_seguranab.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._privacidade_e_seguranab.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.elementMouseOver['privacidade_e_seguranab'] == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._privacidade_e_seguranab.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._privacidade_e_seguranab.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._privacidade_e_seguranab__text.style[domTransition]='background-color 0s';
				if (me._privacidade_e_seguranab.ggCurrentLogicStateBackgroundColor == 0) {
					me._privacidade_e_seguranab__text.style.backgroundColor="rgba(0,0,0,1)";
				}
				else {
					me._privacidade_e_seguranab__text.style.backgroundColor="rgba(255,255,255,0)";
				}
			}
		}
		me._privacidade_e_seguranab.logicBlock_text = function() {
			var newLogicStateText;
			if (
				((player.getVariableValue('POR') == true))
			)
			{
				newLogicStateText = 0;
			}
			else if (
				((player.getVariableValue('ENG') == true))
			)
			{
				newLogicStateText = 1;
			}
			else if (
				((player.getVariableValue('ESP') == true))
			)
			{
				newLogicStateText = 2;
			}
			else {
				newLogicStateText = -1;
			}
			if (me._privacidade_e_seguranab.ggCurrentLogicStateText != newLogicStateText) {
				me._privacidade_e_seguranab.ggCurrentLogicStateText = newLogicStateText;
				me._privacidade_e_seguranab.style[domTransition]='background-color 0s';
				if (me._privacidade_e_seguranab.ggCurrentLogicStateText == 0) {
					me._privacidade_e_seguranab.ggText="PRIVACIDADE";
					me._privacidade_e_seguranab__text.innerHTML=me._privacidade_e_seguranab.ggText;
					if (me._privacidade_e_seguranab.ggUpdateText) {
					me._privacidade_e_seguranab.ggUpdateText=function() {
						var hs="PRIVACIDADE";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._privacidade_e_seguranab.ggUpdatePosition) me._privacidade_e_seguranab.ggUpdatePosition();
					}
				}
				else if (me._privacidade_e_seguranab.ggCurrentLogicStateText == 1) {
					me._privacidade_e_seguranab.ggText="PRIVACY";
					me._privacidade_e_seguranab__text.innerHTML=me._privacidade_e_seguranab.ggText;
					if (me._privacidade_e_seguranab.ggUpdateText) {
					me._privacidade_e_seguranab.ggUpdateText=function() {
						var hs="PRIVACY";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._privacidade_e_seguranab.ggUpdatePosition) me._privacidade_e_seguranab.ggUpdatePosition();
					}
				}
				else if (me._privacidade_e_seguranab.ggCurrentLogicStateText == 2) {
					me._privacidade_e_seguranab.ggText="PRIVACIDAD";
					me._privacidade_e_seguranab__text.innerHTML=me._privacidade_e_seguranab.ggText;
					if (me._privacidade_e_seguranab.ggUpdateText) {
					me._privacidade_e_seguranab.ggUpdateText=function() {
						var hs="PRIVACIDAD";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._privacidade_e_seguranab.ggUpdatePosition) me._privacidade_e_seguranab.ggUpdatePosition();
					}
				}
				else {
					me._privacidade_e_seguranab.ggText="PRIVACIDADE";
					me._privacidade_e_seguranab__text.innerHTML=me._privacidade_e_seguranab.ggText;
					if (me._privacidade_e_seguranab.ggUpdateText) {
					me._privacidade_e_seguranab.ggUpdateText=function() {
						var hs="PRIVACIDADE";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._privacidade_e_seguranab.ggUpdatePosition) me._privacidade_e_seguranab.ggUpdatePosition();
					}
				}
			}
		}
		me._privacidade_e_seguranab.onclick=function (e) {
			me._privacidade_e_seguranai.ggVisible = !me._privacidade_e_seguranai.ggVisible;
			var flag=me._privacidade_e_seguranai.ggVisible;
			me._privacidade_e_seguranai.style[domTransition]='none';
			me._privacidade_e_seguranai.style.visibility=((flag)&&(Number(me._privacidade_e_seguranai.style.opacity)>0||!me._privacidade_e_seguranai.style.opacity))?'inherit':'hidden';
			me._entretenimentoi.style[domTransition]='none';
			me._entretenimentoi.style.visibility='hidden';
			me._entretenimentoi.ggVisible=false;
			me._banheiroi.style[domTransition]='none';
			me._banheiroi.style.visibility='hidden';
			me._banheiroi.ggVisible=false;
			me._quarto_e_lavanderiai.style[domTransition]='none';
			me._quarto_e_lavanderiai.style.visibility='hidden';
			me._quarto_e_lavanderiai.ggVisible=false;
			me._climatizaoi.style[domTransition]='none';
			me._climatizaoi.style.visibility='hidden';
			me._climatizaoi.ggVisible=false;
			me._internet_e_escritrioi.style[domTransition]='none';
			me._internet_e_escritrioi.style.visibility='hidden';
			me._internet_e_escritrioi.ggVisible=false;
			me._cozinha_e_sala_de_jantari.style[domTransition]='none';
			me._cozinha_e_sala_de_jantari.style.visibility='hidden';
			me._cozinha_e_sala_de_jantari.ggVisible=false;
			me._estacionamento_e_instalaesi.style[domTransition]='none';
			me._estacionamento_e_instalaesi.style.visibility='hidden';
			me._estacionamento_e_instalaesi.ggVisible=false;
			me._serviosi.style[domTransition]='none';
			me._serviosi.style.visibility='hidden';
			me._serviosi.ggVisible=false;
			me._no_inclusoi.style[domTransition]='none';
			me._no_inclusoi.style.visibility='hidden';
			me._no_inclusoi.ggVisible=false;
			me._sobre_o_lugar.style[domTransition]='none';
			me._sobre_o_lugar.style.visibility='hidden';
			me._sobre_o_lugar.ggVisible=false;
		}
		me._privacidade_e_seguranab.onmouseover=function (e) {
			me.elementMouseOver['privacidade_e_seguranab']=true;
			me._privacidade_e_seguranab.logicBlock_backgroundcolor();
		}
		me._privacidade_e_seguranab.onmouseout=function (e) {
			if (e && e.toElement) {
				var current = e.toElement;
				while (current = current.parentNode) {
				if (current == me._privacidade_e_seguranab__text)
					return;
				}
			}
			me.elementMouseOver['privacidade_e_seguranab']=false;
			me._privacidade_e_seguranab.logicBlock_backgroundcolor();
		}
		me._privacidade_e_seguranab.ontouchend=function (e) {
			me.elementMouseOver['privacidade_e_seguranab']=false;
			me._privacidade_e_seguranab.logicBlock_backgroundcolor();
		}
		me._privacidade_e_seguranab.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 2;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._info.appendChild(me._privacidade_e_seguranab);
		el=me._internet_e_escritriob=document.createElement('div');
		els=me._internet_e_escritriob__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="INTERNET E ESCRIT\xd3RIO-b";
		el.ggDx=1;
		el.ggDy=22;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 24px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 135px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 137px;';
		hs+='height: auto;';
		hs+='background: #ffffff;';
		hs+='background: rgba(255,255,255,0);';
		hs+='border: 1px solid #ffffff;';
		hs+='border-radius: 10px;';
		hs+=cssPrefix + 'border-radius: 10px;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 2px 3px 2px 3px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		els.innerHTML="INTERNET ";
		el.appendChild(els);
		me._internet_e_escritriob.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._internet_e_escritriob.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.elementMouseOver['internet_e_escritriob'] == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._internet_e_escritriob.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._internet_e_escritriob.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._internet_e_escritriob__text.style[domTransition]='background-color 0s';
				if (me._internet_e_escritriob.ggCurrentLogicStateBackgroundColor == 0) {
					me._internet_e_escritriob__text.style.backgroundColor="rgba(0,0,0,1)";
				}
				else {
					me._internet_e_escritriob__text.style.backgroundColor="rgba(255,255,255,0)";
				}
			}
		}
		me._internet_e_escritriob.logicBlock_text = function() {
			var newLogicStateText;
			if (
				((player.getVariableValue('POR') == true))
			)
			{
				newLogicStateText = 0;
			}
			else if (
				((player.getVariableValue('ENG') == true))
			)
			{
				newLogicStateText = 1;
			}
			else if (
				((player.getVariableValue('ESP') == true))
			)
			{
				newLogicStateText = 2;
			}
			else {
				newLogicStateText = -1;
			}
			if (me._internet_e_escritriob.ggCurrentLogicStateText != newLogicStateText) {
				me._internet_e_escritriob.ggCurrentLogicStateText = newLogicStateText;
				me._internet_e_escritriob.style[domTransition]='background-color 0s';
				if (me._internet_e_escritriob.ggCurrentLogicStateText == 0) {
					me._internet_e_escritriob.ggText="QUARTO ";
					me._internet_e_escritriob__text.innerHTML=me._internet_e_escritriob.ggText;
					if (me._internet_e_escritriob.ggUpdateText) {
					me._internet_e_escritriob.ggUpdateText=function() {
						var hs="QUARTO ";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._internet_e_escritriob.ggUpdatePosition) me._internet_e_escritriob.ggUpdatePosition();
					}
				}
				else if (me._internet_e_escritriob.ggCurrentLogicStateText == 1) {
					me._internet_e_escritriob.ggText="INTERNET ";
					me._internet_e_escritriob__text.innerHTML=me._internet_e_escritriob.ggText;
					if (me._internet_e_escritriob.ggUpdateText) {
					me._internet_e_escritriob.ggUpdateText=function() {
						var hs="INTERNET ";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._internet_e_escritriob.ggUpdatePosition) me._internet_e_escritriob.ggUpdatePosition();
					}
				}
				else if (me._internet_e_escritriob.ggCurrentLogicStateText == 2) {
					me._internet_e_escritriob.ggText="INTERNET ";
					me._internet_e_escritriob__text.innerHTML=me._internet_e_escritriob.ggText;
					if (me._internet_e_escritriob.ggUpdateText) {
					me._internet_e_escritriob.ggUpdateText=function() {
						var hs="INTERNET ";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._internet_e_escritriob.ggUpdatePosition) me._internet_e_escritriob.ggUpdatePosition();
					}
				}
				else {
					me._internet_e_escritriob.ggText="INTERNET ";
					me._internet_e_escritriob__text.innerHTML=me._internet_e_escritriob.ggText;
					if (me._internet_e_escritriob.ggUpdateText) {
					me._internet_e_escritriob.ggUpdateText=function() {
						var hs="INTERNET ";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._internet_e_escritriob.ggUpdatePosition) me._internet_e_escritriob.ggUpdatePosition();
					}
				}
			}
		}
		me._internet_e_escritriob.onclick=function (e) {
			me._internet_e_escritrioi.ggVisible = !me._internet_e_escritrioi.ggVisible;
			var flag=me._internet_e_escritrioi.ggVisible;
			me._internet_e_escritrioi.style[domTransition]='none';
			me._internet_e_escritrioi.style.visibility=((flag)&&(Number(me._internet_e_escritrioi.style.opacity)>0||!me._internet_e_escritrioi.style.opacity))?'inherit':'hidden';
			me._entretenimentoi.style[domTransition]='none';
			me._entretenimentoi.style.visibility='hidden';
			me._entretenimentoi.ggVisible=false;
			me._privacidade_e_seguranai.style[domTransition]='none';
			me._privacidade_e_seguranai.style.visibility='hidden';
			me._privacidade_e_seguranai.ggVisible=false;
			me._quarto_e_lavanderiai.style[domTransition]='none';
			me._quarto_e_lavanderiai.style.visibility='hidden';
			me._quarto_e_lavanderiai.ggVisible=false;
			me._climatizaoi.style[domTransition]='none';
			me._climatizaoi.style.visibility='hidden';
			me._climatizaoi.ggVisible=false;
			me._banheiroi.style[domTransition]='none';
			me._banheiroi.style.visibility='hidden';
			me._banheiroi.ggVisible=false;
			me._cozinha_e_sala_de_jantari.style[domTransition]='none';
			me._cozinha_e_sala_de_jantari.style.visibility='hidden';
			me._cozinha_e_sala_de_jantari.ggVisible=false;
			me._estacionamento_e_instalaesi.style[domTransition]='none';
			me._estacionamento_e_instalaesi.style.visibility='hidden';
			me._estacionamento_e_instalaesi.ggVisible=false;
			me._serviosi.style[domTransition]='none';
			me._serviosi.style.visibility='hidden';
			me._serviosi.ggVisible=false;
			me._no_inclusoi.style[domTransition]='none';
			me._no_inclusoi.style.visibility='hidden';
			me._no_inclusoi.ggVisible=false;
			me._sobre_o_lugar.style[domTransition]='none';
			me._sobre_o_lugar.style.visibility='hidden';
			me._sobre_o_lugar.ggVisible=false;
		}
		me._internet_e_escritriob.onmouseover=function (e) {
			me.elementMouseOver['internet_e_escritriob']=true;
			me._internet_e_escritriob.logicBlock_backgroundcolor();
		}
		me._internet_e_escritriob.onmouseout=function (e) {
			if (e && e.toElement) {
				var current = e.toElement;
				while (current = current.parentNode) {
				if (current == me._internet_e_escritriob__text)
					return;
				}
			}
			me.elementMouseOver['internet_e_escritriob']=false;
			me._internet_e_escritriob.logicBlock_backgroundcolor();
		}
		me._internet_e_escritriob.ontouchend=function (e) {
			me.elementMouseOver['internet_e_escritriob']=false;
			me._internet_e_escritriob.logicBlock_backgroundcolor();
		}
		me._internet_e_escritriob.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 2;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._info.appendChild(me._internet_e_escritriob);
		el=me._cozinha_e_sala_de_jantarb=document.createElement('div');
		els=me._cozinha_e_sala_de_jantarb__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="COZINHA E SALA DE JANTAR-b";
		el.ggDx=2;
		el.ggDy=59;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 24px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 135px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 137px;';
		hs+='height: auto;';
		hs+='background: #ffffff;';
		hs+='background: rgba(255,255,255,0);';
		hs+='border: 1px solid #ffffff;';
		hs+='border-radius: 10px;';
		hs+=cssPrefix + 'border-radius: 10px;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 2px 3px 2px 3px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		els.innerHTML="SALA JANTAR";
		el.appendChild(els);
		me._cozinha_e_sala_de_jantarb.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._cozinha_e_sala_de_jantarb.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.elementMouseOver['cozinha_e_sala_de_jantarb'] == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._cozinha_e_sala_de_jantarb.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._cozinha_e_sala_de_jantarb.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._cozinha_e_sala_de_jantarb__text.style[domTransition]='background-color 0s';
				if (me._cozinha_e_sala_de_jantarb.ggCurrentLogicStateBackgroundColor == 0) {
					me._cozinha_e_sala_de_jantarb__text.style.backgroundColor="rgba(0,0,0,1)";
				}
				else {
					me._cozinha_e_sala_de_jantarb__text.style.backgroundColor="rgba(255,255,255,0)";
				}
			}
		}
		me._cozinha_e_sala_de_jantarb.logicBlock_text = function() {
			var newLogicStateText;
			if (
				((player.getVariableValue('POR') == true))
			)
			{
				newLogicStateText = 0;
			}
			else if (
				((player.getVariableValue('ENG') == true))
			)
			{
				newLogicStateText = 1;
			}
			else if (
				((player.getVariableValue('ESP') == true))
			)
			{
				newLogicStateText = 2;
			}
			else {
				newLogicStateText = -1;
			}
			if (me._cozinha_e_sala_de_jantarb.ggCurrentLogicStateText != newLogicStateText) {
				me._cozinha_e_sala_de_jantarb.ggCurrentLogicStateText = newLogicStateText;
				me._cozinha_e_sala_de_jantarb.style[domTransition]='background-color 0s';
				if (me._cozinha_e_sala_de_jantarb.ggCurrentLogicStateText == 0) {
					me._cozinha_e_sala_de_jantarb.ggText="SALA JANTAR";
					me._cozinha_e_sala_de_jantarb__text.innerHTML=me._cozinha_e_sala_de_jantarb.ggText;
					if (me._cozinha_e_sala_de_jantarb.ggUpdateText) {
					me._cozinha_e_sala_de_jantarb.ggUpdateText=function() {
						var hs="SALA JANTAR";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._cozinha_e_sala_de_jantarb.ggUpdatePosition) me._cozinha_e_sala_de_jantarb.ggUpdatePosition();
					}
				}
				else if (me._cozinha_e_sala_de_jantarb.ggCurrentLogicStateText == 1) {
					me._cozinha_e_sala_de_jantarb.ggText="DINING";
					me._cozinha_e_sala_de_jantarb__text.innerHTML=me._cozinha_e_sala_de_jantarb.ggText;
					if (me._cozinha_e_sala_de_jantarb.ggUpdateText) {
					me._cozinha_e_sala_de_jantarb.ggUpdateText=function() {
						var hs="DINING";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._cozinha_e_sala_de_jantarb.ggUpdatePosition) me._cozinha_e_sala_de_jantarb.ggUpdatePosition();
					}
				}
				else if (me._cozinha_e_sala_de_jantarb.ggCurrentLogicStateText == 2) {
					me._cozinha_e_sala_de_jantarb.ggText="COMEDOR";
					me._cozinha_e_sala_de_jantarb__text.innerHTML=me._cozinha_e_sala_de_jantarb.ggText;
					if (me._cozinha_e_sala_de_jantarb.ggUpdateText) {
					me._cozinha_e_sala_de_jantarb.ggUpdateText=function() {
						var hs="COMEDOR";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._cozinha_e_sala_de_jantarb.ggUpdatePosition) me._cozinha_e_sala_de_jantarb.ggUpdatePosition();
					}
				}
				else {
					me._cozinha_e_sala_de_jantarb.ggText="SALA JANTAR";
					me._cozinha_e_sala_de_jantarb__text.innerHTML=me._cozinha_e_sala_de_jantarb.ggText;
					if (me._cozinha_e_sala_de_jantarb.ggUpdateText) {
					me._cozinha_e_sala_de_jantarb.ggUpdateText=function() {
						var hs="SALA JANTAR";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._cozinha_e_sala_de_jantarb.ggUpdatePosition) me._cozinha_e_sala_de_jantarb.ggUpdatePosition();
					}
				}
			}
		}
		me._cozinha_e_sala_de_jantarb.onclick=function (e) {
			me._cozinha_e_sala_de_jantari.ggVisible = !me._cozinha_e_sala_de_jantari.ggVisible;
			var flag=me._cozinha_e_sala_de_jantari.ggVisible;
			me._cozinha_e_sala_de_jantari.style[domTransition]='none';
			me._cozinha_e_sala_de_jantari.style.visibility=((flag)&&(Number(me._cozinha_e_sala_de_jantari.style.opacity)>0||!me._cozinha_e_sala_de_jantari.style.opacity))?'inherit':'hidden';
			me._entretenimentoi.style[domTransition]='none';
			me._entretenimentoi.style.visibility='hidden';
			me._entretenimentoi.ggVisible=false;
			me._privacidade_e_seguranai.style[domTransition]='none';
			me._privacidade_e_seguranai.style.visibility='hidden';
			me._privacidade_e_seguranai.ggVisible=false;
			me._quarto_e_lavanderiai.style[domTransition]='none';
			me._quarto_e_lavanderiai.style.visibility='hidden';
			me._quarto_e_lavanderiai.ggVisible=false;
			me._climatizaoi.style[domTransition]='none';
			me._climatizaoi.style.visibility='hidden';
			me._climatizaoi.ggVisible=false;
			me._internet_e_escritrioi.style[domTransition]='none';
			me._internet_e_escritrioi.style.visibility='hidden';
			me._internet_e_escritrioi.ggVisible=false;
			me._banheiroi.style[domTransition]='none';
			me._banheiroi.style.visibility='hidden';
			me._banheiroi.ggVisible=false;
			me._estacionamento_e_instalaesi.style[domTransition]='none';
			me._estacionamento_e_instalaesi.style.visibility='hidden';
			me._estacionamento_e_instalaesi.ggVisible=false;
			me._serviosi.style[domTransition]='none';
			me._serviosi.style.visibility='hidden';
			me._serviosi.ggVisible=false;
			me._no_inclusoi.style[domTransition]='none';
			me._no_inclusoi.style.visibility='hidden';
			me._no_inclusoi.ggVisible=false;
			me._sobre_o_lugar.style[domTransition]='none';
			me._sobre_o_lugar.style.visibility='hidden';
			me._sobre_o_lugar.ggVisible=false;
		}
		me._cozinha_e_sala_de_jantarb.onmouseover=function (e) {
			me.elementMouseOver['cozinha_e_sala_de_jantarb']=true;
			me._cozinha_e_sala_de_jantarb.logicBlock_backgroundcolor();
		}
		me._cozinha_e_sala_de_jantarb.onmouseout=function (e) {
			if (e && e.toElement) {
				var current = e.toElement;
				while (current = current.parentNode) {
				if (current == me._cozinha_e_sala_de_jantarb__text)
					return;
				}
			}
			me.elementMouseOver['cozinha_e_sala_de_jantarb']=false;
			me._cozinha_e_sala_de_jantarb.logicBlock_backgroundcolor();
		}
		me._cozinha_e_sala_de_jantarb.ontouchend=function (e) {
			me.elementMouseOver['cozinha_e_sala_de_jantarb']=false;
			me._cozinha_e_sala_de_jantarb.logicBlock_backgroundcolor();
		}
		me._cozinha_e_sala_de_jantarb.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 2;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._info.appendChild(me._cozinha_e_sala_de_jantarb);
		el=me._estacionamento_e_instalaesb=document.createElement('div');
		els=me._estacionamento_e_instalaesb__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="ESTACIONAMENTO E INSTALA\xc7\xd5ES-b";
		el.ggDx=0;
		el.ggDy=94;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 24px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 135px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 137px;';
		hs+='height: auto;';
		hs+='background: #ffffff;';
		hs+='background: rgba(255,255,255,0);';
		hs+='border: 1px solid #ffffff;';
		hs+='border-radius: 10px;';
		hs+=cssPrefix + 'border-radius: 10px;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 2px 3px 2px 3px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		els.innerHTML="ESTACIONAMENTO";
		el.appendChild(els);
		me._estacionamento_e_instalaesb.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._estacionamento_e_instalaesb.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.elementMouseOver['estacionamento_e_instalaesb'] == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._estacionamento_e_instalaesb.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._estacionamento_e_instalaesb.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._estacionamento_e_instalaesb__text.style[domTransition]='background-color 0s';
				if (me._estacionamento_e_instalaesb.ggCurrentLogicStateBackgroundColor == 0) {
					me._estacionamento_e_instalaesb__text.style.backgroundColor="rgba(0,0,0,1)";
				}
				else {
					me._estacionamento_e_instalaesb__text.style.backgroundColor="rgba(255,255,255,0)";
				}
			}
		}
		me._estacionamento_e_instalaesb.logicBlock_text = function() {
			var newLogicStateText;
			if (
				((player.getVariableValue('POR') == true))
			)
			{
				newLogicStateText = 0;
			}
			else if (
				((player.getVariableValue('ENG') == true))
			)
			{
				newLogicStateText = 1;
			}
			else if (
				((player.getVariableValue('ESP') == true))
			)
			{
				newLogicStateText = 2;
			}
			else {
				newLogicStateText = -1;
			}
			if (me._estacionamento_e_instalaesb.ggCurrentLogicStateText != newLogicStateText) {
				me._estacionamento_e_instalaesb.ggCurrentLogicStateText = newLogicStateText;
				me._estacionamento_e_instalaesb.style[domTransition]='background-color 0s';
				if (me._estacionamento_e_instalaesb.ggCurrentLogicStateText == 0) {
					me._estacionamento_e_instalaesb.ggText="ESTACIONAMENTO";
					me._estacionamento_e_instalaesb__text.innerHTML=me._estacionamento_e_instalaesb.ggText;
					if (me._estacionamento_e_instalaesb.ggUpdateText) {
					me._estacionamento_e_instalaesb.ggUpdateText=function() {
						var hs="ESTACIONAMENTO";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._estacionamento_e_instalaesb.ggUpdatePosition) me._estacionamento_e_instalaesb.ggUpdatePosition();
					}
				}
				else if (me._estacionamento_e_instalaesb.ggCurrentLogicStateText == 1) {
					me._estacionamento_e_instalaesb.ggText="PARKING";
					me._estacionamento_e_instalaesb__text.innerHTML=me._estacionamento_e_instalaesb.ggText;
					if (me._estacionamento_e_instalaesb.ggUpdateText) {
					me._estacionamento_e_instalaesb.ggUpdateText=function() {
						var hs="PARKING";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._estacionamento_e_instalaesb.ggUpdatePosition) me._estacionamento_e_instalaesb.ggUpdatePosition();
					}
				}
				else if (me._estacionamento_e_instalaesb.ggCurrentLogicStateText == 2) {
					me._estacionamento_e_instalaesb.ggText="ESTACIONAMENTO";
					me._estacionamento_e_instalaesb__text.innerHTML=me._estacionamento_e_instalaesb.ggText;
					if (me._estacionamento_e_instalaesb.ggUpdateText) {
					me._estacionamento_e_instalaesb.ggUpdateText=function() {
						var hs="ESTACIONAMENTO";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._estacionamento_e_instalaesb.ggUpdatePosition) me._estacionamento_e_instalaesb.ggUpdatePosition();
					}
				}
				else {
					me._estacionamento_e_instalaesb.ggText="ESTACIONAMENTO";
					me._estacionamento_e_instalaesb__text.innerHTML=me._estacionamento_e_instalaesb.ggText;
					if (me._estacionamento_e_instalaesb.ggUpdateText) {
					me._estacionamento_e_instalaesb.ggUpdateText=function() {
						var hs="ESTACIONAMENTO";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._estacionamento_e_instalaesb.ggUpdatePosition) me._estacionamento_e_instalaesb.ggUpdatePosition();
					}
				}
			}
		}
		me._estacionamento_e_instalaesb.onclick=function (e) {
			me._estacionamento_e_instalaesi.ggVisible = !me._estacionamento_e_instalaesi.ggVisible;
			var flag=me._estacionamento_e_instalaesi.ggVisible;
			me._estacionamento_e_instalaesi.style[domTransition]='none';
			me._estacionamento_e_instalaesi.style.visibility=((flag)&&(Number(me._estacionamento_e_instalaesi.style.opacity)>0||!me._estacionamento_e_instalaesi.style.opacity))?'inherit':'hidden';
			me._entretenimentoi.style[domTransition]='none';
			me._entretenimentoi.style.visibility='hidden';
			me._entretenimentoi.ggVisible=false;
			me._privacidade_e_seguranai.style[domTransition]='none';
			me._privacidade_e_seguranai.style.visibility='hidden';
			me._privacidade_e_seguranai.ggVisible=false;
			me._quarto_e_lavanderiai.style[domTransition]='none';
			me._quarto_e_lavanderiai.style.visibility='hidden';
			me._quarto_e_lavanderiai.ggVisible=false;
			me._climatizaoi.style[domTransition]='none';
			me._climatizaoi.style.visibility='hidden';
			me._climatizaoi.ggVisible=false;
			me._internet_e_escritrioi.style[domTransition]='none';
			me._internet_e_escritrioi.style.visibility='hidden';
			me._internet_e_escritrioi.ggVisible=false;
			me._cozinha_e_sala_de_jantari.style[domTransition]='none';
			me._cozinha_e_sala_de_jantari.style.visibility='hidden';
			me._cozinha_e_sala_de_jantari.ggVisible=false;
			me._banheiroi.style[domTransition]='none';
			me._banheiroi.style.visibility='hidden';
			me._banheiroi.ggVisible=false;
			me._serviosi.style[domTransition]='none';
			me._serviosi.style.visibility='hidden';
			me._serviosi.ggVisible=false;
			me._no_inclusoi.style[domTransition]='none';
			me._no_inclusoi.style.visibility='hidden';
			me._no_inclusoi.ggVisible=false;
			me._sobre_o_lugar.style[domTransition]='none';
			me._sobre_o_lugar.style.visibility='hidden';
			me._sobre_o_lugar.ggVisible=false;
		}
		me._estacionamento_e_instalaesb.onmouseover=function (e) {
			me.elementMouseOver['estacionamento_e_instalaesb']=true;
			me._estacionamento_e_instalaesb.logicBlock_backgroundcolor();
		}
		me._estacionamento_e_instalaesb.onmouseout=function (e) {
			if (e && e.toElement) {
				var current = e.toElement;
				while (current = current.parentNode) {
				if (current == me._estacionamento_e_instalaesb__text)
					return;
				}
			}
			me.elementMouseOver['estacionamento_e_instalaesb']=false;
			me._estacionamento_e_instalaesb.logicBlock_backgroundcolor();
		}
		me._estacionamento_e_instalaesb.ontouchend=function (e) {
			me.elementMouseOver['estacionamento_e_instalaesb']=false;
			me._estacionamento_e_instalaesb.logicBlock_backgroundcolor();
		}
		me._estacionamento_e_instalaesb.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 2;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._info.appendChild(me._estacionamento_e_instalaesb);
		el=me._serviosb=document.createElement('div');
		els=me._serviosb__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="SERVI\xc7OS-b";
		el.ggDx=0;
		el.ggDy=130;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 24px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 135px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 137px;';
		hs+='height: auto;';
		hs+='background: #ffffff;';
		hs+='background: rgba(255,255,255,0);';
		hs+='border: 1px solid #ffffff;';
		hs+='border-radius: 10px;';
		hs+=cssPrefix + 'border-radius: 10px;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 2px 3px 2px 3px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		els.innerHTML="SERVI\xc7OS";
		el.appendChild(els);
		me._serviosb.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._serviosb.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.elementMouseOver['serviosb'] == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._serviosb.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._serviosb.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._serviosb__text.style[domTransition]='background-color 0s';
				if (me._serviosb.ggCurrentLogicStateBackgroundColor == 0) {
					me._serviosb__text.style.backgroundColor="rgba(0,0,0,1)";
				}
				else {
					me._serviosb__text.style.backgroundColor="rgba(255,255,255,0)";
				}
			}
		}
		me._serviosb.logicBlock_text = function() {
			var newLogicStateText;
			if (
				((player.getVariableValue('POR') == true))
			)
			{
				newLogicStateText = 0;
			}
			else if (
				((player.getVariableValue('ENG') == true))
			)
			{
				newLogicStateText = 1;
			}
			else if (
				((player.getVariableValue('ESP') == true))
			)
			{
				newLogicStateText = 2;
			}
			else {
				newLogicStateText = -1;
			}
			if (me._serviosb.ggCurrentLogicStateText != newLogicStateText) {
				me._serviosb.ggCurrentLogicStateText = newLogicStateText;
				me._serviosb.style[domTransition]='background-color 0s';
				if (me._serviosb.ggCurrentLogicStateText == 0) {
					me._serviosb.ggText="SERVI\xc7OS";
					me._serviosb__text.innerHTML=me._serviosb.ggText;
					if (me._serviosb.ggUpdateText) {
					me._serviosb.ggUpdateText=function() {
						var hs="SERVI\xc7OS";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._serviosb.ggUpdatePosition) me._serviosb.ggUpdatePosition();
					}
				}
				else if (me._serviosb.ggCurrentLogicStateText == 1) {
					me._serviosb.ggText="SERVICES";
					me._serviosb__text.innerHTML=me._serviosb.ggText;
					if (me._serviosb.ggUpdateText) {
					me._serviosb.ggUpdateText=function() {
						var hs="SERVICES";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._serviosb.ggUpdatePosition) me._serviosb.ggUpdatePosition();
					}
				}
				else if (me._serviosb.ggCurrentLogicStateText == 2) {
					me._serviosb.ggText="SERVICIOS";
					me._serviosb__text.innerHTML=me._serviosb.ggText;
					if (me._serviosb.ggUpdateText) {
					me._serviosb.ggUpdateText=function() {
						var hs="SERVICIOS";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._serviosb.ggUpdatePosition) me._serviosb.ggUpdatePosition();
					}
				}
				else {
					me._serviosb.ggText="SERVI\xc7OS";
					me._serviosb__text.innerHTML=me._serviosb.ggText;
					if (me._serviosb.ggUpdateText) {
					me._serviosb.ggUpdateText=function() {
						var hs="SERVI\xc7OS";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._serviosb.ggUpdatePosition) me._serviosb.ggUpdatePosition();
					}
				}
			}
		}
		me._serviosb.onclick=function (e) {
			me._serviosi.ggVisible = !me._serviosi.ggVisible;
			var flag=me._serviosi.ggVisible;
			me._serviosi.style[domTransition]='none';
			me._serviosi.style.visibility=((flag)&&(Number(me._serviosi.style.opacity)>0||!me._serviosi.style.opacity))?'inherit':'hidden';
			me._entretenimentoi.style[domTransition]='none';
			me._entretenimentoi.style.visibility='hidden';
			me._entretenimentoi.ggVisible=false;
			me._privacidade_e_seguranai.style[domTransition]='none';
			me._privacidade_e_seguranai.style.visibility='hidden';
			me._privacidade_e_seguranai.ggVisible=false;
			me._quarto_e_lavanderiai.style[domTransition]='none';
			me._quarto_e_lavanderiai.style.visibility='hidden';
			me._quarto_e_lavanderiai.ggVisible=false;
			me._climatizaoi.style[domTransition]='none';
			me._climatizaoi.style.visibility='hidden';
			me._climatizaoi.ggVisible=false;
			me._internet_e_escritrioi.style[domTransition]='none';
			me._internet_e_escritrioi.style.visibility='hidden';
			me._internet_e_escritrioi.ggVisible=false;
			me._cozinha_e_sala_de_jantari.style[domTransition]='none';
			me._cozinha_e_sala_de_jantari.style.visibility='hidden';
			me._cozinha_e_sala_de_jantari.ggVisible=false;
			me._estacionamento_e_instalaesi.style[domTransition]='none';
			me._estacionamento_e_instalaesi.style.visibility='hidden';
			me._estacionamento_e_instalaesi.ggVisible=false;
			me._banheiroi.style[domTransition]='none';
			me._banheiroi.style.visibility='hidden';
			me._banheiroi.ggVisible=false;
			me._no_inclusoi.style[domTransition]='none';
			me._no_inclusoi.style.visibility='hidden';
			me._no_inclusoi.ggVisible=false;
			me._sobre_o_lugar.style[domTransition]='none';
			me._sobre_o_lugar.style.visibility='hidden';
			me._sobre_o_lugar.ggVisible=false;
		}
		me._serviosb.onmouseover=function (e) {
			me.elementMouseOver['serviosb']=true;
			me._serviosb.logicBlock_backgroundcolor();
		}
		me._serviosb.onmouseout=function (e) {
			if (e && e.toElement) {
				var current = e.toElement;
				while (current = current.parentNode) {
				if (current == me._serviosb__text)
					return;
				}
			}
			me.elementMouseOver['serviosb']=false;
			me._serviosb.logicBlock_backgroundcolor();
		}
		me._serviosb.ontouchend=function (e) {
			me.elementMouseOver['serviosb']=false;
			me._serviosb.logicBlock_backgroundcolor();
		}
		me._serviosb.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 2;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._info.appendChild(me._serviosb);
		el=me._no_inclusob=document.createElement('div');
		els=me._no_inclusob__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="N\xc3O INCLUSO-b";
		el.ggDx=1;
		el.ggDy=168;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 24px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 135px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 137px;';
		hs+='height: auto;';
		hs+='background: #ffffff;';
		hs+='background: rgba(255,255,255,0);';
		hs+='border: 1px solid #ffffff;';
		hs+='border-radius: 10px;';
		hs+=cssPrefix + 'border-radius: 10px;';
		hs+='color: rgba(252,252,252,1);';
		hs+='text-align: center;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 2px 3px 2px 3px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		els.innerHTML="N\xc3O INCLUSO";
		el.appendChild(els);
		me._no_inclusob.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._no_inclusob.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.elementMouseOver['no_inclusob'] == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._no_inclusob.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._no_inclusob.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._no_inclusob__text.style[domTransition]='background-color 0s';
				if (me._no_inclusob.ggCurrentLogicStateBackgroundColor == 0) {
					me._no_inclusob__text.style.backgroundColor="rgba(0,0,0,1)";
				}
				else {
					me._no_inclusob__text.style.backgroundColor="rgba(255,255,255,0)";
				}
			}
		}
		me._no_inclusob.logicBlock_text = function() {
			var newLogicStateText;
			if (
				((player.getVariableValue('POR') == true))
			)
			{
				newLogicStateText = 0;
			}
			else if (
				((player.getVariableValue('ENG') == true))
			)
			{
				newLogicStateText = 1;
			}
			else if (
				((player.getVariableValue('ESP') == true))
			)
			{
				newLogicStateText = 2;
			}
			else {
				newLogicStateText = -1;
			}
			if (me._no_inclusob.ggCurrentLogicStateText != newLogicStateText) {
				me._no_inclusob.ggCurrentLogicStateText = newLogicStateText;
				me._no_inclusob.style[domTransition]='background-color 0s';
				if (me._no_inclusob.ggCurrentLogicStateText == 0) {
					me._no_inclusob.ggText="N\xc3O INCLUSO";
					me._no_inclusob__text.innerHTML=me._no_inclusob.ggText;
					if (me._no_inclusob.ggUpdateText) {
					me._no_inclusob.ggUpdateText=function() {
						var hs="N\xc3O INCLUSO";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._no_inclusob.ggUpdatePosition) me._no_inclusob.ggUpdatePosition();
					}
				}
				else if (me._no_inclusob.ggCurrentLogicStateText == 1) {
					me._no_inclusob.ggText="NOT INCLUDED";
					me._no_inclusob__text.innerHTML=me._no_inclusob.ggText;
					if (me._no_inclusob.ggUpdateText) {
					me._no_inclusob.ggUpdateText=function() {
						var hs="NOT INCLUDED";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._no_inclusob.ggUpdatePosition) me._no_inclusob.ggUpdatePosition();
					}
				}
				else if (me._no_inclusob.ggCurrentLogicStateText == 2) {
					me._no_inclusob.ggText="NO INCLUIDO";
					me._no_inclusob__text.innerHTML=me._no_inclusob.ggText;
					if (me._no_inclusob.ggUpdateText) {
					me._no_inclusob.ggUpdateText=function() {
						var hs="NO INCLUIDO";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._no_inclusob.ggUpdatePosition) me._no_inclusob.ggUpdatePosition();
					}
				}
				else {
					me._no_inclusob.ggText="N\xc3O INCLUSO";
					me._no_inclusob__text.innerHTML=me._no_inclusob.ggText;
					if (me._no_inclusob.ggUpdateText) {
					me._no_inclusob.ggUpdateText=function() {
						var hs="N\xc3O INCLUSO";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._no_inclusob.ggUpdatePosition) me._no_inclusob.ggUpdatePosition();
					}
				}
			}
		}
		me._no_inclusob.onclick=function (e) {
			me._no_inclusoi.ggVisible = !me._no_inclusoi.ggVisible;
			var flag=me._no_inclusoi.ggVisible;
			me._no_inclusoi.style[domTransition]='none';
			me._no_inclusoi.style.visibility=((flag)&&(Number(me._no_inclusoi.style.opacity)>0||!me._no_inclusoi.style.opacity))?'inherit':'hidden';
			me._entretenimentoi.style[domTransition]='none';
			me._entretenimentoi.style.visibility='hidden';
			me._entretenimentoi.ggVisible=false;
			me._privacidade_e_seguranai.style[domTransition]='none';
			me._privacidade_e_seguranai.style.visibility='hidden';
			me._privacidade_e_seguranai.ggVisible=false;
			me._quarto_e_lavanderiai.style[domTransition]='none';
			me._quarto_e_lavanderiai.style.visibility='hidden';
			me._quarto_e_lavanderiai.ggVisible=false;
			me._climatizaoi.style[domTransition]='none';
			me._climatizaoi.style.visibility='hidden';
			me._climatizaoi.ggVisible=false;
			me._internet_e_escritrioi.style[domTransition]='none';
			me._internet_e_escritrioi.style.visibility='hidden';
			me._internet_e_escritrioi.ggVisible=false;
			me._cozinha_e_sala_de_jantari.style[domTransition]='none';
			me._cozinha_e_sala_de_jantari.style.visibility='hidden';
			me._cozinha_e_sala_de_jantari.ggVisible=false;
			me._estacionamento_e_instalaesi.style[domTransition]='none';
			me._estacionamento_e_instalaesi.style.visibility='hidden';
			me._estacionamento_e_instalaesi.ggVisible=false;
			me._serviosi.style[domTransition]='none';
			me._serviosi.style.visibility='hidden';
			me._serviosi.ggVisible=false;
			me._banheiroi.style[domTransition]='none';
			me._banheiroi.style.visibility='hidden';
			me._banheiroi.ggVisible=false;
			me._sobre_o_lugar.style[domTransition]='none';
			me._sobre_o_lugar.style.visibility='hidden';
			me._sobre_o_lugar.ggVisible=false;
		}
		me._no_inclusob.onmouseover=function (e) {
			me.elementMouseOver['no_inclusob']=true;
			me._no_inclusob.logicBlock_backgroundcolor();
		}
		me._no_inclusob.onmouseout=function (e) {
			if (e && e.toElement) {
				var current = e.toElement;
				while (current = current.parentNode) {
				if (current == me._no_inclusob__text)
					return;
				}
			}
			me.elementMouseOver['no_inclusob']=false;
			me._no_inclusob.logicBlock_backgroundcolor();
		}
		me._no_inclusob.ontouchend=function (e) {
			me.elementMouseOver['no_inclusob']=false;
			me._no_inclusob.logicBlock_backgroundcolor();
		}
		me._no_inclusob.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 2;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._info.appendChild(me._no_inclusob);
		me.divSkin.appendChild(me._info);
		el=me._sobre_o_lugar=document.createElement('div');
		el.ggId="SOBRE O LUGAR";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 20px;';
		hs+='border-radius : 20px;';
		hs+='background : #5e5e5e;';
		hs+='border : 5px solid #ffffff;';
		hs+='cursor : default;';
		hs+='height : 240px;';
		hs+='left : -10000px;';
		hs+='opacity : 0.7;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 402px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._sobre_o_lugar.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._sobre_o_lugar.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getViewerSize().height <= 300))
			)
			{
				newLogicStatePosition = 0;
			}
			else if (
				((player.getViewerSize().width < 1084))
			)
			{
				newLogicStatePosition = 1;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._sobre_o_lugar.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._sobre_o_lugar.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._sobre_o_lugar.style[domTransition]='left 0s, top 0s, ' + cssPrefix + 'transform 0s';
				if (me._sobre_o_lugar.ggCurrentLogicStatePosition == 0) {
					this.ggDx = 30;
					this.ggDy = 0;
					me._sobre_o_lugar.ggUpdatePosition(true);
				}
				else if (me._sobre_o_lugar.ggCurrentLogicStatePosition == 1) {
					this.ggDx = 0;
					this.ggDy = 120;
					me._sobre_o_lugar.ggUpdatePosition(true);
				}
				else {
					me._sobre_o_lugar.ggDx=0;
					me._sobre_o_lugar.ggDy=0;
					me._sobre_o_lugar.ggUpdatePosition(true);
				}
			}
		}
		me._sobre_o_lugar.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getViewerSize().width < 1084))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._sobre_o_lugar.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._sobre_o_lugar.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._sobre_o_lugar.style[domTransition]='left 0s, top 0s, ' + cssPrefix + 'transform 0s';
				if (me._sobre_o_lugar.ggCurrentLogicStateScaling == 0) {
					me._sobre_o_lugar.ggParameter.sx = 0.85;
					me._sobre_o_lugar.ggParameter.sy = 0.85;
					me._sobre_o_lugar.style[domTransform]=parameterToTransform(me._sobre_o_lugar.ggParameter);
				}
				else {
					me._sobre_o_lugar.ggParameter.sx = 1;
					me._sobre_o_lugar.ggParameter.sy = 1;
					me._sobre_o_lugar.style[domTransform]=parameterToTransform(me._sobre_o_lugar.ggParameter);
				}
			}
		}
		me._sobre_o_lugar.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('INFO') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((player.getVariableValue('INFO') == false))
			)
			{
				newLogicStateVisible = 1;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._sobre_o_lugar.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._sobre_o_lugar.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._sobre_o_lugar.style[domTransition]='left 0s, top 0s, ' + cssPrefix + 'transform 0s';
				if (me._sobre_o_lugar.ggCurrentLogicStateVisible == 0) {
					me._sobre_o_lugar.style.visibility=(Number(me._sobre_o_lugar.style.opacity)>0||!me._sobre_o_lugar.style.opacity)?'inherit':'hidden';
					me._sobre_o_lugar.ggVisible=true;
				}
				else if (me._sobre_o_lugar.ggCurrentLogicStateVisible == 1) {
					me._sobre_o_lugar.style.visibility="hidden";
					me._sobre_o_lugar.ggVisible=false;
				}
				else {
					me._sobre_o_lugar.style.visibility="hidden";
					me._sobre_o_lugar.ggVisible=false;
				}
			}
		}
		me._sobre_o_lugar.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._sobre_este_lugari=document.createElement('div');
		el.ggId="SOBRE ESTE LUGAR-I";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 236px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 407px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._sobre_este_lugari.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._sobre_este_lugari.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._sobre_o_lugar0=document.createElement('div');
		els=me._sobre_o_lugar0__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Sobre o lugar";
		el.ggDx=9;
		el.ggDy=-73;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text tooltip";
		el.ggType='text';
		hs ='';
		hs+='height : 78px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 374px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 376px;';
		hs+='height: auto;';
		hs+='background: #ffffff;';
		hs+='background: rgba(255,255,255,0);';
		hs+='border: 1px solid #55aa7f;';
		hs+='border: 1px solid rgba(85,170,127,0);';
		hs+=cssPrefix + 'background-clip: padding-box;';
		hs+='background-clip: padding-box;';
		hs+='border-radius: 10px;';
		hs+=cssPrefix + 'border-radius: 10px;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: justify;';
		hs+='white-space: normal;';
		hs+='padding: 2px 3px 2px 3px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		els.innerHTML="Quarto confort\xe1vel para  pessoa en rua residencia<br\/>com vigil\xe1ncia privada em bairro nobre de S\xe3o Paulo,<br\/>pr\xf3ximo \xe0 esta\xe7\xf5es de metr\xf4 e trem, Consulado americano,<br\/>shopping centers, restaurantes e anchonetes<br\/>";
		el.appendChild(els);
		me._sobre_o_lugar0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._sobre_o_lugar0.logicBlock_text = function() {
			var newLogicStateText;
			if (
				((player.getVariableValue('POR') == true))
			)
			{
				newLogicStateText = 0;
			}
			else if (
				((player.getVariableValue('ENG') == true))
			)
			{
				newLogicStateText = 1;
			}
			else if (
				((player.getVariableValue('ESP') == true))
			)
			{
				newLogicStateText = 2;
			}
			else {
				newLogicStateText = -1;
			}
			if (me._sobre_o_lugar0.ggCurrentLogicStateText != newLogicStateText) {
				me._sobre_o_lugar0.ggCurrentLogicStateText = newLogicStateText;
				me._sobre_o_lugar0.style[domTransition]='';
				if (me._sobre_o_lugar0.ggCurrentLogicStateText == 0) {
					me._sobre_o_lugar0.ggText="Quarto confort\xe1vel para pessoa en rua residencia com vigil\xe1ncia privada em bairro nobre de S\xe3o Paulo, pr\xf3ximo \xe0 esta\xe7\xf5es de metr\xf4 e trem, Consulado americano,shopping centers, restaurantes e anchonetes";
					me._sobre_o_lugar0__text.innerHTML=me._sobre_o_lugar0.ggText;
					if (me._sobre_o_lugar0.ggUpdateText) {
					me._sobre_o_lugar0.ggUpdateText=function() {
						var hs="Quarto confort\xe1vel para pessoa en rua residencia com vigil\xe1ncia privada em bairro nobre de S\xe3o Paulo, pr\xf3ximo \xe0 esta\xe7\xf5es de metr\xf4 e trem, Consulado americano,shopping centers, restaurantes e anchonetes";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._sobre_o_lugar0.ggUpdatePosition) me._sobre_o_lugar0.ggUpdatePosition();
					}
				}
				else if (me._sobre_o_lugar0.ggCurrentLogicStateText == 1) {
					me._sobre_o_lugar0.ggText="Confortable room for people on a \nresidential street with private sureveillance\nin an upscale neighborhood of S\xe3o Paulo,\nclose to subway and train stations, American\nConsulate, shopping centers, restaurants and\neateries";
					me._sobre_o_lugar0__text.innerHTML=me._sobre_o_lugar0.ggText;
					if (me._sobre_o_lugar0.ggUpdateText) {
					me._sobre_o_lugar0.ggUpdateText=function() {
						var hs="Confortable room for people on a \nresidential street with private sureveillance\nin an upscale neighborhood of S\xe3o Paulo,\nclose to subway and train stations, American\nConsulate, shopping centers, restaurants and\neateries";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._sobre_o_lugar0.ggUpdatePosition) me._sobre_o_lugar0.ggUpdatePosition();
					}
				}
				else if (me._sobre_o_lugar0.ggCurrentLogicStateText == 2) {
					me._sobre_o_lugar0.ggText="C\xf3moda habitaci\xf3n para personas en \nuna calle residencial con vigilancia privada\nen un barrio exclusivo de San Pablo, cerca\nde esraciones de metro y tren, Consulado \nAmericano, centro comerciales y restaurantes";
					me._sobre_o_lugar0__text.innerHTML=me._sobre_o_lugar0.ggText;
					if (me._sobre_o_lugar0.ggUpdateText) {
					me._sobre_o_lugar0.ggUpdateText=function() {
						var hs="C\xf3moda habitaci\xf3n para personas en \nuna calle residencial con vigilancia privada\nen un barrio exclusivo de San Pablo, cerca\nde esraciones de metro y tren, Consulado \nAmericano, centro comerciales y restaurantes";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._sobre_o_lugar0.ggUpdatePosition) me._sobre_o_lugar0.ggUpdatePosition();
					}
				}
				else {
					me._sobre_o_lugar0.ggText="Quarto confort\xe1vel para  pessoa en rua residencia\ncom vigil\xe1ncia privada em bairro nobre de S\xe3o Paulo,\npr\xf3ximo \xe0 esta\xe7\xf5es de metr\xf4 e trem, Consulado americano,\nshopping centers, restaurantes e anchonetes\n";
					me._sobre_o_lugar0__text.innerHTML=me._sobre_o_lugar0.ggText;
					if (me._sobre_o_lugar0.ggUpdateText) {
					me._sobre_o_lugar0.ggUpdateText=function() {
						var hs="Quarto confort\xe1vel para  pessoa en rua residencia\ncom vigil\xe1ncia privada em bairro nobre de S\xe3o Paulo,\npr\xf3ximo \xe0 esta\xe7\xf5es de metr\xf4 e trem, Consulado americano,\nshopping centers, restaurantes e anchonetes\n";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._sobre_o_lugar0.ggUpdatePosition) me._sobre_o_lugar0.ggUpdatePosition();
					}
				}
			}
		}
		me._sobre_o_lugar0.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 2;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._sobre_este_lugari.appendChild(me._sobre_o_lugar0);
		el=me._espao_de_trabalho_exclusivo=document.createElement('div');
		els=me._espao_de_trabalho_exclusivo__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Espa\xe7o de trabalho exclusivo";
		el.ggDx=-9;
		el.ggDy=13;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text tooltip";
		el.ggType='text';
		hs ='';
		hs+='height : 72px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 333px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 335px;';
		hs+='height: auto;';
		hs+='background: #ffffff;';
		hs+='background: rgba(255,255,255,0);';
		hs+='border: 1px solid #55aa7f;';
		hs+='border: 1px solid rgba(85,170,127,0);';
		hs+=cssPrefix + 'background-clip: padding-box;';
		hs+='background-clip: padding-box;';
		hs+='border-radius: 10px;';
		hs+=cssPrefix + 'border-radius: 10px;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: justify;';
		hs+='white-space: normal;';
		hs+='padding: 2px 3px 2px 3px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		els.innerHTML="O espa\xe7o<br\/>Quarto situado nos fundos da resid\xeancia. <br\/>Ambiente com privacidade e entrada independente";
		el.appendChild(els);
		me._espao_de_trabalho_exclusivo.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._espao_de_trabalho_exclusivo.logicBlock_text = function() {
			var newLogicStateText;
			if (
				((player.getVariableValue('POR') == true))
			)
			{
				newLogicStateText = 0;
			}
			else if (
				((player.getVariableValue('ENG') == true))
			)
			{
				newLogicStateText = 1;
			}
			else if (
				((player.getVariableValue('ESP') == true))
			)
			{
				newLogicStateText = 2;
			}
			else {
				newLogicStateText = -1;
			}
			if (me._espao_de_trabalho_exclusivo.ggCurrentLogicStateText != newLogicStateText) {
				me._espao_de_trabalho_exclusivo.ggCurrentLogicStateText = newLogicStateText;
				me._espao_de_trabalho_exclusivo.style[domTransition]='';
				if (me._espao_de_trabalho_exclusivo.ggCurrentLogicStateText == 0) {
					me._espao_de_trabalho_exclusivo.ggText="O espa\xe7o\nQuarto situado nos fundos da resid\xeancia. \nAmbiente com privacidade e entrada independente";
					me._espao_de_trabalho_exclusivo__text.innerHTML=me._espao_de_trabalho_exclusivo.ggText;
					if (me._espao_de_trabalho_exclusivo.ggUpdateText) {
					me._espao_de_trabalho_exclusivo.ggUpdateText=function() {
						var hs="O espa\xe7o\nQuarto situado nos fundos da resid\xeancia. \nAmbiente com privacidade e entrada independente";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._espao_de_trabalho_exclusivo.ggUpdatePosition) me._espao_de_trabalho_exclusivo.ggUpdatePosition();
					}
				}
				else if (me._espao_de_trabalho_exclusivo.ggCurrentLogicStateText == 1) {
					me._espao_de_trabalho_exclusivo.ggText="The space\nRoom located at the back of the \nresidence, Privacy environment\nand independent entrance";
					me._espao_de_trabalho_exclusivo__text.innerHTML=me._espao_de_trabalho_exclusivo.ggText;
					if (me._espao_de_trabalho_exclusivo.ggUpdateText) {
					me._espao_de_trabalho_exclusivo.ggUpdateText=function() {
						var hs="The space\nRoom located at the back of the \nresidence, Privacy environment\nand independent entrance";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._espao_de_trabalho_exclusivo.ggUpdatePosition) me._espao_de_trabalho_exclusivo.ggUpdatePosition();
					}
				}
				else if (me._espao_de_trabalho_exclusivo.ggCurrentLogicStateText == 2) {
					me._espao_de_trabalho_exclusivo.ggText="El espacio\nCuarto situado en el fondo de la \nresidencia. Ambiente con privacidad\ne entrada independiente";
					me._espao_de_trabalho_exclusivo__text.innerHTML=me._espao_de_trabalho_exclusivo.ggText;
					if (me._espao_de_trabalho_exclusivo.ggUpdateText) {
					me._espao_de_trabalho_exclusivo.ggUpdateText=function() {
						var hs="El espacio\nCuarto situado en el fondo de la \nresidencia. Ambiente con privacidad\ne entrada independiente";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._espao_de_trabalho_exclusivo.ggUpdatePosition) me._espao_de_trabalho_exclusivo.ggUpdatePosition();
					}
				}
				else {
					me._espao_de_trabalho_exclusivo.ggText="O espa\xe7o\nQuarto situado nos fundos da resid\xeancia. \nAmbiente com privacidade e entrada independente";
					me._espao_de_trabalho_exclusivo__text.innerHTML=me._espao_de_trabalho_exclusivo.ggText;
					if (me._espao_de_trabalho_exclusivo.ggUpdateText) {
					me._espao_de_trabalho_exclusivo.ggUpdateText=function() {
						var hs="O espa\xe7o\nQuarto situado nos fundos da resid\xeancia. \nAmbiente com privacidade e entrada independente";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._espao_de_trabalho_exclusivo.ggUpdatePosition) me._espao_de_trabalho_exclusivo.ggUpdatePosition();
					}
				}
			}
		}
		me._espao_de_trabalho_exclusivo.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 2;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._sobre_este_lugari.appendChild(me._espao_de_trabalho_exclusivo);
		el=me._durante_sua_estadia=document.createElement('div');
		els=me._durante_sua_estadia__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Durante sua estadia";
		el.ggDx=-12;
		el.ggDy=80;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text tooltip";
		el.ggType='text';
		hs ='';
		hs+='height : 72px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 333px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 335px;';
		hs+='height: auto;';
		hs+='background: #ffffff;';
		hs+='background: rgba(255,255,255,0);';
		hs+='border: 1px solid #55aa7f;';
		hs+='border: 1px solid rgba(85,170,127,0);';
		hs+=cssPrefix + 'background-clip: padding-box;';
		hs+='background-clip: padding-box;';
		hs+='border-radius: 10px;';
		hs+=cssPrefix + 'border-radius: 10px;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: justify;';
		hs+='white-space: normal;';
		hs+='padding: 2px 3px 2px 3px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		els.innerHTML="Durante sua estadia<br\/>Eu moro na resid\xeancia e estarei dispon\xedvel para <br\/>tirar d\xfavidas pessoalmente ou por mensagem";
		el.appendChild(els);
		me._durante_sua_estadia.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._durante_sua_estadia.logicBlock_text = function() {
			var newLogicStateText;
			if (
				((player.getVariableValue('POR') == true))
			)
			{
				newLogicStateText = 0;
			}
			else if (
				((player.getVariableValue('ENG') == true))
			)
			{
				newLogicStateText = 1;
			}
			else if (
				((player.getVariableValue('ESP') == true))
			)
			{
				newLogicStateText = 2;
			}
			else {
				newLogicStateText = -1;
			}
			if (me._durante_sua_estadia.ggCurrentLogicStateText != newLogicStateText) {
				me._durante_sua_estadia.ggCurrentLogicStateText = newLogicStateText;
				me._durante_sua_estadia.style[domTransition]='';
				if (me._durante_sua_estadia.ggCurrentLogicStateText == 0) {
					me._durante_sua_estadia.ggText="Durante sua estadia\nEu moro na resid\xeancia e estarei dispon\xedvel para \ntirar d\xfavidas pessoalmente ou por mensagem";
					me._durante_sua_estadia__text.innerHTML=me._durante_sua_estadia.ggText;
					if (me._durante_sua_estadia.ggUpdateText) {
					me._durante_sua_estadia.ggUpdateText=function() {
						var hs="Durante sua estadia\nEu moro na resid\xeancia e estarei dispon\xedvel para \ntirar d\xfavidas pessoalmente ou por mensagem";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._durante_sua_estadia.ggUpdatePosition) me._durante_sua_estadia.ggUpdatePosition();
					}
				}
				else if (me._durante_sua_estadia.ggCurrentLogicStateText == 1) {
					me._durante_sua_estadia.ggText="During your stay I live in the residence \nand will be availablefor ask questions \nin person or by message";
					me._durante_sua_estadia__text.innerHTML=me._durante_sua_estadia.ggText;
					if (me._durante_sua_estadia.ggUpdateText) {
					me._durante_sua_estadia.ggUpdateText=function() {
						var hs="During your stay I live in the residence \nand will be availablefor ask questions \nin person or by message";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._durante_sua_estadia.ggUpdatePosition) me._durante_sua_estadia.ggUpdatePosition();
					}
				}
				else if (me._durante_sua_estadia.ggCurrentLogicStateText == 2) {
					me._durante_sua_estadia.ggText="Durante tu estadia,vivo en la residencia\ny estar\xe9 disponible para hacer preguntas\nen persona o por mensaje";
					me._durante_sua_estadia__text.innerHTML=me._durante_sua_estadia.ggText;
					if (me._durante_sua_estadia.ggUpdateText) {
					me._durante_sua_estadia.ggUpdateText=function() {
						var hs="Durante tu estadia,vivo en la residencia\ny estar\xe9 disponible para hacer preguntas\nen persona o por mensaje";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._durante_sua_estadia.ggUpdatePosition) me._durante_sua_estadia.ggUpdatePosition();
					}
				}
				else {
					me._durante_sua_estadia.ggText="Durante sua estadia\nEu moro na resid\xeancia e estarei dispon\xedvel para \ntirar d\xfavidas pessoalmente ou por mensagem";
					me._durante_sua_estadia__text.innerHTML=me._durante_sua_estadia.ggText;
					if (me._durante_sua_estadia.ggUpdateText) {
					me._durante_sua_estadia.ggUpdateText=function() {
						var hs="Durante sua estadia\nEu moro na resid\xeancia e estarei dispon\xedvel para \ntirar d\xfavidas pessoalmente ou por mensagem";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._durante_sua_estadia.ggUpdatePosition) me._durante_sua_estadia.ggUpdatePosition();
					}
				}
			}
		}
		me._durante_sua_estadia.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 2;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._sobre_este_lugari.appendChild(me._durante_sua_estadia);
		me._sobre_o_lugar.appendChild(me._sobre_este_lugari);
		me.divSkin.appendChild(me._sobre_o_lugar);
		el=me._menu=document.createElement('div');
		el.ggId="MENU";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 1px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 35px;';
		hs+='left : -1px;';
		hs+='position : absolute;';
		hs+='top : -1px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._menu.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._menu.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getViewerSize().width <= 1084))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._menu.ggCurrentLogicStateSize != newLogicStateSize) {
				me._menu.ggCurrentLogicStateSize = newLogicStateSize;
				me._menu.style[domTransition]='width 0s, height 0s';
				if (me._menu.ggCurrentLogicStateSize == 0) {
					me._menu.style.width='100%';
					me._menu.style.height='50px';
					skin.updateSize(me._menu);
				}
				else {
					me._menu.style.width='100%';
					me._menu.style.height='35px';
					skin.updateSize(me._menu);
				}
			}
		}
		me._menu.ggUpdatePosition=function (useTransition) {
		}
		el=me._banheiro_menu=document.createElement('div');
		els=me._banheiro_menu__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="BANHEIRO MENU";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 24px;';
		hs+='left : 123px;';
		hs+='position : absolute;';
		hs+='top : 4px;';
		hs+='visibility : inherit;';
		hs+='width : 110px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 112px;';
		hs+='height: auto;';
		hs+='background: #ffffff;';
		hs+='border: 1px solid #000000;';
		hs+='border-radius: 10px;';
		hs+=cssPrefix + 'border-radius: 10px;';
		hs+='color: #000000;';
		hs+='text-align: center;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 2px 3px 2px 3px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		els.innerHTML="BANHEIRO";
		el.appendChild(els);
		me._banheiro_menu.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._banheiro_menu.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getViewerSize().width < 1084))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._banheiro_menu.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._banheiro_menu.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._banheiro_menu.style[domTransition]='left 0s, top 0s, ' + cssPrefix + 'transform 0s, background-color 0s, color 0s';
				if (me._banheiro_menu.ggCurrentLogicStatePosition == 0) {
					me._banheiro_menu.style.left='0px';
					me._banheiro_menu.style.top='27px';
				}
				else {
					me._banheiro_menu.style.left='123px';
					me._banheiro_menu.style.top='4px';
				}
			}
		}
		me._banheiro_menu.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getViewerSize().width < 1084))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._banheiro_menu.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._banheiro_menu.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._banheiro_menu.style[domTransition]='left 0s, top 0s, ' + cssPrefix + 'transform 0s, background-color 0s, color 0s';
				if (me._banheiro_menu.ggCurrentLogicStateScaling == 0) {
					me._banheiro_menu.ggParameter.sx = 0.9;
					me._banheiro_menu.ggParameter.sy = 0.9;
					me._banheiro_menu.style[domTransform]=parameterToTransform(me._banheiro_menu.ggParameter);
				}
				else {
					me._banheiro_menu.ggParameter.sx = 1;
					me._banheiro_menu.ggParameter.sy = 1;
					me._banheiro_menu.style[domTransform]=parameterToTransform(me._banheiro_menu.ggParameter);
				}
			}
		}
		me._banheiro_menu.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.elementMouseOver['banheiro_menu'] == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._banheiro_menu.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._banheiro_menu.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._banheiro_menu__text.style[domTransition]='left 0s, top 0s, ' + cssPrefix + 'transform 0s, background-color 0s, color 0s';
				if (me._banheiro_menu.ggCurrentLogicStateBackgroundColor == 0) {
					me._banheiro_menu__text.style.backgroundColor="rgba(0,0,0,1)";
				}
				else {
					me._banheiro_menu__text.style.backgroundColor="rgba(255,255,255,1)";
				}
			}
		}
		me._banheiro_menu.logicBlock_text = function() {
			var newLogicStateText;
			if (
				((player.getVariableValue('POR') == true))
			)
			{
				newLogicStateText = 0;
			}
			else if (
				((player.getVariableValue('ENG') == true))
			)
			{
				newLogicStateText = 1;
			}
			else if (
				((player.getVariableValue('ESP') == true))
			)
			{
				newLogicStateText = 2;
			}
			else {
				newLogicStateText = -1;
			}
			if (me._banheiro_menu.ggCurrentLogicStateText != newLogicStateText) {
				me._banheiro_menu.ggCurrentLogicStateText = newLogicStateText;
				me._banheiro_menu.style[domTransition]='left 0s, top 0s, ' + cssPrefix + 'transform 0s, background-color 0s, color 0s';
				if (me._banheiro_menu.ggCurrentLogicStateText == 0) {
					me._banheiro_menu.ggText="BANHEIRO";
					me._banheiro_menu__text.innerHTML=me._banheiro_menu.ggText;
					if (me._banheiro_menu.ggUpdateText) {
					me._banheiro_menu.ggUpdateText=function() {
						var hs="BANHEIRO";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._banheiro_menu.ggUpdatePosition) me._banheiro_menu.ggUpdatePosition();
					}
				}
				else if (me._banheiro_menu.ggCurrentLogicStateText == 1) {
					me._banheiro_menu.ggText="BATHROOM";
					me._banheiro_menu__text.innerHTML=me._banheiro_menu.ggText;
					if (me._banheiro_menu.ggUpdateText) {
					me._banheiro_menu.ggUpdateText=function() {
						var hs="BATHROOM";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._banheiro_menu.ggUpdatePosition) me._banheiro_menu.ggUpdatePosition();
					}
				}
				else if (me._banheiro_menu.ggCurrentLogicStateText == 2) {
					me._banheiro_menu.ggText="BA\xd1O";
					me._banheiro_menu__text.innerHTML=me._banheiro_menu.ggText;
					if (me._banheiro_menu.ggUpdateText) {
					me._banheiro_menu.ggUpdateText=function() {
						var hs="BA\xd1O";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._banheiro_menu.ggUpdatePosition) me._banheiro_menu.ggUpdatePosition();
					}
				}
				else {
					me._banheiro_menu.ggText="BANHEIRO";
					me._banheiro_menu__text.innerHTML=me._banheiro_menu.ggText;
					if (me._banheiro_menu.ggUpdateText) {
					me._banheiro_menu.ggUpdateText=function() {
						var hs="BANHEIRO";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._banheiro_menu.ggUpdatePosition) me._banheiro_menu.ggUpdatePosition();
					}
				}
			}
		}
		me._banheiro_menu.logicBlock_textcolor = function() {
			var newLogicStateTextColor;
			if (
				((me.elementMouseOver['banheiro_menu'] == true))
			)
			{
				newLogicStateTextColor = 0;
			}
			else {
				newLogicStateTextColor = -1;
			}
			if (me._banheiro_menu.ggCurrentLogicStateTextColor != newLogicStateTextColor) {
				me._banheiro_menu.ggCurrentLogicStateTextColor = newLogicStateTextColor;
				me._banheiro_menu__text.style[domTransition]='left 0s, top 0s, ' + cssPrefix + 'transform 0s, background-color 0s, color 0s';
				if (me._banheiro_menu.ggCurrentLogicStateTextColor == 0) {
					me._banheiro_menu__text.style.color="rgba(255,255,255,1)";
				}
				else {
					me._banheiro_menu__text.style.color="rgba(0,0,0,1)";
				}
			}
		}
		me._banheiro_menu.onclick=function (e) {
			player.openNext("{node9}",player.hotspot.target);
		}
		me._banheiro_menu.onmouseover=function (e) {
			me.elementMouseOver['banheiro_menu']=true;
			me._banheiro_menu.logicBlock_backgroundcolor();
			me._banheiro_menu.logicBlock_textcolor();
		}
		me._banheiro_menu.onmouseout=function (e) {
			if (e && e.toElement) {
				var current = e.toElement;
				while (current = current.parentNode) {
				if (current == me._banheiro_menu__text)
					return;
				}
			}
			me.elementMouseOver['banheiro_menu']=false;
			me._banheiro_menu.logicBlock_backgroundcolor();
			me._banheiro_menu.logicBlock_textcolor();
		}
		me._banheiro_menu.ontouchend=function (e) {
			me.elementMouseOver['banheiro_menu']=false;
			me._banheiro_menu.logicBlock_backgroundcolor();
			me._banheiro_menu.logicBlock_textcolor();
		}
		me._banheiro_menu.ggUpdatePosition=function (useTransition) {
		}
		me._menu.appendChild(me._banheiro_menu);
		el=me._cozinha_menu=document.createElement('div');
		els=me._cozinha_menu__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="COZINHA MENU";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 24px;';
		hs+='left : 243px;';
		hs+='position : absolute;';
		hs+='top : 4px;';
		hs+='visibility : inherit;';
		hs+='width : 110px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 112px;';
		hs+='height: auto;';
		hs+='background: #ffffff;';
		hs+='border: 1px solid #000000;';
		hs+='border-radius: 10px;';
		hs+=cssPrefix + 'border-radius: 10px;';
		hs+='color: #000000;';
		hs+='text-align: center;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 2px 3px 2px 3px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		els.innerHTML="COZINHA";
		el.appendChild(els);
		me._cozinha_menu.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._cozinha_menu.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getViewerSize().width < 1084))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._cozinha_menu.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._cozinha_menu.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._cozinha_menu.style[domTransition]='left 0s, top 0s, ' + cssPrefix + 'transform 0s, background-color 0s, color 0s';
				if (me._cozinha_menu.ggCurrentLogicStatePosition == 0) {
					me._cozinha_menu.style.left='105px';
					me._cozinha_menu.style.top='2px';
				}
				else {
					me._cozinha_menu.style.left='243px';
					me._cozinha_menu.style.top='4px';
				}
			}
		}
		me._cozinha_menu.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getViewerSize().width < 1084))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._cozinha_menu.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._cozinha_menu.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._cozinha_menu.style[domTransition]='left 0s, top 0s, ' + cssPrefix + 'transform 0s, background-color 0s, color 0s';
				if (me._cozinha_menu.ggCurrentLogicStateScaling == 0) {
					me._cozinha_menu.ggParameter.sx = 0.9;
					me._cozinha_menu.ggParameter.sy = 0.9;
					me._cozinha_menu.style[domTransform]=parameterToTransform(me._cozinha_menu.ggParameter);
				}
				else {
					me._cozinha_menu.ggParameter.sx = 1;
					me._cozinha_menu.ggParameter.sy = 1;
					me._cozinha_menu.style[domTransform]=parameterToTransform(me._cozinha_menu.ggParameter);
				}
			}
		}
		me._cozinha_menu.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.elementMouseOver['cozinha_menu'] == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._cozinha_menu.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._cozinha_menu.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._cozinha_menu__text.style[domTransition]='left 0s, top 0s, ' + cssPrefix + 'transform 0s, background-color 0s, color 0s';
				if (me._cozinha_menu.ggCurrentLogicStateBackgroundColor == 0) {
					me._cozinha_menu__text.style.backgroundColor="rgba(0,0,0,1)";
				}
				else {
					me._cozinha_menu__text.style.backgroundColor="rgba(255,255,255,1)";
				}
			}
		}
		me._cozinha_menu.logicBlock_text = function() {
			var newLogicStateText;
			if (
				((player.getVariableValue('POR') == true))
			)
			{
				newLogicStateText = 0;
			}
			else if (
				((player.getVariableValue('ENG') == true))
			)
			{
				newLogicStateText = 1;
			}
			else if (
				((player.getVariableValue('ESP') == true))
			)
			{
				newLogicStateText = 2;
			}
			else {
				newLogicStateText = -1;
			}
			if (me._cozinha_menu.ggCurrentLogicStateText != newLogicStateText) {
				me._cozinha_menu.ggCurrentLogicStateText = newLogicStateText;
				me._cozinha_menu.style[domTransition]='left 0s, top 0s, ' + cssPrefix + 'transform 0s, background-color 0s, color 0s';
				if (me._cozinha_menu.ggCurrentLogicStateText == 0) {
					me._cozinha_menu.ggText="COZINHA";
					me._cozinha_menu__text.innerHTML=me._cozinha_menu.ggText;
					if (me._cozinha_menu.ggUpdateText) {
					me._cozinha_menu.ggUpdateText=function() {
						var hs="COZINHA";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._cozinha_menu.ggUpdatePosition) me._cozinha_menu.ggUpdatePosition();
					}
				}
				else if (me._cozinha_menu.ggCurrentLogicStateText == 1) {
					me._cozinha_menu.ggText="KITCHEN";
					me._cozinha_menu__text.innerHTML=me._cozinha_menu.ggText;
					if (me._cozinha_menu.ggUpdateText) {
					me._cozinha_menu.ggUpdateText=function() {
						var hs="KITCHEN";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._cozinha_menu.ggUpdatePosition) me._cozinha_menu.ggUpdatePosition();
					}
				}
				else if (me._cozinha_menu.ggCurrentLogicStateText == 2) {
					me._cozinha_menu.ggText="COCINA";
					me._cozinha_menu__text.innerHTML=me._cozinha_menu.ggText;
					if (me._cozinha_menu.ggUpdateText) {
					me._cozinha_menu.ggUpdateText=function() {
						var hs="COCINA";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._cozinha_menu.ggUpdatePosition) me._cozinha_menu.ggUpdatePosition();
					}
				}
				else {
					me._cozinha_menu.ggText="COZINHA";
					me._cozinha_menu__text.innerHTML=me._cozinha_menu.ggText;
					if (me._cozinha_menu.ggUpdateText) {
					me._cozinha_menu.ggUpdateText=function() {
						var hs="COZINHA";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._cozinha_menu.ggUpdatePosition) me._cozinha_menu.ggUpdatePosition();
					}
				}
			}
		}
		me._cozinha_menu.logicBlock_textcolor = function() {
			var newLogicStateTextColor;
			if (
				((me.elementMouseOver['cozinha_menu'] == true))
			)
			{
				newLogicStateTextColor = 0;
			}
			else {
				newLogicStateTextColor = -1;
			}
			if (me._cozinha_menu.ggCurrentLogicStateTextColor != newLogicStateTextColor) {
				me._cozinha_menu.ggCurrentLogicStateTextColor = newLogicStateTextColor;
				me._cozinha_menu__text.style[domTransition]='left 0s, top 0s, ' + cssPrefix + 'transform 0s, background-color 0s, color 0s';
				if (me._cozinha_menu.ggCurrentLogicStateTextColor == 0) {
					me._cozinha_menu__text.style.color="rgba(255,255,255,1)";
				}
				else {
					me._cozinha_menu__text.style.color="rgba(0,0,0,1)";
				}
			}
		}
		me._cozinha_menu.onclick=function (e) {
			player.openNext("{node10}",player.hotspot.target);
		}
		me._cozinha_menu.onmouseover=function (e) {
			me.elementMouseOver['cozinha_menu']=true;
			me._cozinha_menu.logicBlock_backgroundcolor();
			me._cozinha_menu.logicBlock_textcolor();
		}
		me._cozinha_menu.onmouseout=function (e) {
			if (e && e.toElement) {
				var current = e.toElement;
				while (current = current.parentNode) {
				if (current == me._cozinha_menu__text)
					return;
				}
			}
			me.elementMouseOver['cozinha_menu']=false;
			me._cozinha_menu.logicBlock_backgroundcolor();
			me._cozinha_menu.logicBlock_textcolor();
		}
		me._cozinha_menu.ontouchend=function (e) {
			me.elementMouseOver['cozinha_menu']=false;
			me._cozinha_menu.logicBlock_backgroundcolor();
			me._cozinha_menu.logicBlock_textcolor();
		}
		me._cozinha_menu.ggUpdatePosition=function (useTransition) {
		}
		me._menu.appendChild(me._cozinha_menu);
		el=me._frigobar_menu=document.createElement('div');
		els=me._frigobar_menu__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="FRIGOBAR MENU";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 24px;';
		hs+='left : 363px;';
		hs+='position : absolute;';
		hs+='top : 3px;';
		hs+='visibility : inherit;';
		hs+='width : 110px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 112px;';
		hs+='height: auto;';
		hs+='background: #ffffff;';
		hs+='border: 1px solid #000000;';
		hs+='border-radius: 10px;';
		hs+=cssPrefix + 'border-radius: 10px;';
		hs+='color: #000000;';
		hs+='text-align: center;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 2px 3px 2px 3px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		els.innerHTML="SALA";
		el.appendChild(els);
		me._frigobar_menu.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._frigobar_menu.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getViewerSize().width < 1084))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._frigobar_menu.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._frigobar_menu.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._frigobar_menu.style[domTransition]='left 0s, top 0s, ' + cssPrefix + 'transform 0s, background-color 0s, color 0s';
				if (me._frigobar_menu.ggCurrentLogicStatePosition == 0) {
					me._frigobar_menu.style.left='105px';
					me._frigobar_menu.style.top='27px';
				}
				else {
					me._frigobar_menu.style.left='363px';
					me._frigobar_menu.style.top='3px';
				}
			}
		}
		me._frigobar_menu.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getViewerSize().width < 1084))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._frigobar_menu.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._frigobar_menu.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._frigobar_menu.style[domTransition]='left 0s, top 0s, ' + cssPrefix + 'transform 0s, background-color 0s, color 0s';
				if (me._frigobar_menu.ggCurrentLogicStateScaling == 0) {
					me._frigobar_menu.ggParameter.sx = 0.9;
					me._frigobar_menu.ggParameter.sy = 0.9;
					me._frigobar_menu.style[domTransform]=parameterToTransform(me._frigobar_menu.ggParameter);
				}
				else {
					me._frigobar_menu.ggParameter.sx = 1;
					me._frigobar_menu.ggParameter.sy = 1;
					me._frigobar_menu.style[domTransform]=parameterToTransform(me._frigobar_menu.ggParameter);
				}
			}
		}
		me._frigobar_menu.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.elementMouseOver['frigobar_menu'] == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._frigobar_menu.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._frigobar_menu.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._frigobar_menu__text.style[domTransition]='left 0s, top 0s, ' + cssPrefix + 'transform 0s, background-color 0s, color 0s';
				if (me._frigobar_menu.ggCurrentLogicStateBackgroundColor == 0) {
					me._frigobar_menu__text.style.backgroundColor="rgba(0,0,0,1)";
				}
				else {
					me._frigobar_menu__text.style.backgroundColor="rgba(255,255,255,1)";
				}
			}
		}
		me._frigobar_menu.logicBlock_text = function() {
			var newLogicStateText;
			if (
				((player.getVariableValue('POR') == true))
			)
			{
				newLogicStateText = 0;
			}
			else if (
				((player.getVariableValue('ENG') == true))
			)
			{
				newLogicStateText = 1;
			}
			else if (
				((player.getVariableValue('ESP') == true))
			)
			{
				newLogicStateText = 2;
			}
			else {
				newLogicStateText = -1;
			}
			if (me._frigobar_menu.ggCurrentLogicStateText != newLogicStateText) {
				me._frigobar_menu.ggCurrentLogicStateText = newLogicStateText;
				me._frigobar_menu.style[domTransition]='left 0s, top 0s, ' + cssPrefix + 'transform 0s, background-color 0s, color 0s';
				if (me._frigobar_menu.ggCurrentLogicStateText == 0) {
					me._frigobar_menu.ggText="SALA";
					me._frigobar_menu__text.innerHTML=me._frigobar_menu.ggText;
					if (me._frigobar_menu.ggUpdateText) {
					me._frigobar_menu.ggUpdateText=function() {
						var hs="SALA";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._frigobar_menu.ggUpdatePosition) me._frigobar_menu.ggUpdatePosition();
					}
				}
				else if (me._frigobar_menu.ggCurrentLogicStateText == 1) {
					me._frigobar_menu.ggText="LIVING";
					me._frigobar_menu__text.innerHTML=me._frigobar_menu.ggText;
					if (me._frigobar_menu.ggUpdateText) {
					me._frigobar_menu.ggUpdateText=function() {
						var hs="LIVING";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._frigobar_menu.ggUpdatePosition) me._frigobar_menu.ggUpdatePosition();
					}
				}
				else if (me._frigobar_menu.ggCurrentLogicStateText == 2) {
					me._frigobar_menu.ggText="SALA";
					me._frigobar_menu__text.innerHTML=me._frigobar_menu.ggText;
					if (me._frigobar_menu.ggUpdateText) {
					me._frigobar_menu.ggUpdateText=function() {
						var hs="SALA";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._frigobar_menu.ggUpdatePosition) me._frigobar_menu.ggUpdatePosition();
					}
				}
				else {
					me._frigobar_menu.ggText="SALA";
					me._frigobar_menu__text.innerHTML=me._frigobar_menu.ggText;
					if (me._frigobar_menu.ggUpdateText) {
					me._frigobar_menu.ggUpdateText=function() {
						var hs="SALA";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._frigobar_menu.ggUpdatePosition) me._frigobar_menu.ggUpdatePosition();
					}
				}
			}
		}
		me._frigobar_menu.logicBlock_textcolor = function() {
			var newLogicStateTextColor;
			if (
				((me.elementMouseOver['frigobar_menu'] == true))
			)
			{
				newLogicStateTextColor = 0;
			}
			else {
				newLogicStateTextColor = -1;
			}
			if (me._frigobar_menu.ggCurrentLogicStateTextColor != newLogicStateTextColor) {
				me._frigobar_menu.ggCurrentLogicStateTextColor = newLogicStateTextColor;
				me._frigobar_menu__text.style[domTransition]='left 0s, top 0s, ' + cssPrefix + 'transform 0s, background-color 0s, color 0s';
				if (me._frigobar_menu.ggCurrentLogicStateTextColor == 0) {
					me._frigobar_menu__text.style.color="rgba(255,255,255,1)";
				}
				else {
					me._frigobar_menu__text.style.color="rgba(0,0,0,1)";
				}
			}
		}
		me._frigobar_menu.onclick=function (e) {
			player.openNext("{node14}",player.hotspot.target);
		}
		me._frigobar_menu.onmouseover=function (e) {
			me.elementMouseOver['frigobar_menu']=true;
			me._frigobar_menu.logicBlock_backgroundcolor();
			me._frigobar_menu.logicBlock_textcolor();
		}
		me._frigobar_menu.onmouseout=function (e) {
			if (e && e.toElement) {
				var current = e.toElement;
				while (current = current.parentNode) {
				if (current == me._frigobar_menu__text)
					return;
				}
			}
			me.elementMouseOver['frigobar_menu']=false;
			me._frigobar_menu.logicBlock_backgroundcolor();
			me._frigobar_menu.logicBlock_textcolor();
		}
		me._frigobar_menu.ontouchend=function (e) {
			me.elementMouseOver['frigobar_menu']=false;
			me._frigobar_menu.logicBlock_backgroundcolor();
			me._frigobar_menu.logicBlock_textcolor();
		}
		me._frigobar_menu.ggUpdatePosition=function (useTransition) {
		}
		me._menu.appendChild(me._frigobar_menu);
		el=me._quarto_menu=document.createElement('div');
		els=me._quarto_menu__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="QUARTO MENU";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 25px;';
		hs+='left : 482px;';
		hs+='position : absolute;';
		hs+='top : 3px;';
		hs+='visibility : inherit;';
		hs+='width : 110px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 112px;';
		hs+='height: auto;';
		hs+='background: #ffffff;';
		hs+='border: 1px solid #000000;';
		hs+='border-radius: 10px;';
		hs+=cssPrefix + 'border-radius: 10px;';
		hs+='color: #000000;';
		hs+='text-align: center;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 2px 3px 2px 3px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		els.innerHTML="QUARTO ";
		el.appendChild(els);
		me._quarto_menu.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._quarto_menu.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getViewerSize().width < 1084))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._quarto_menu.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._quarto_menu.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._quarto_menu.style[domTransition]='left 0s, top 0s, ' + cssPrefix + 'transform 0s, background-color 0s, color 0s';
				if (me._quarto_menu.ggCurrentLogicStatePosition == 0) {
					me._quarto_menu.style.left='210px';
					me._quarto_menu.style.top='2px';
				}
				else {
					me._quarto_menu.style.left='482px';
					me._quarto_menu.style.top='3px';
				}
			}
		}
		me._quarto_menu.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getViewerSize().width < 1084))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._quarto_menu.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._quarto_menu.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._quarto_menu.style[domTransition]='left 0s, top 0s, ' + cssPrefix + 'transform 0s, background-color 0s, color 0s';
				if (me._quarto_menu.ggCurrentLogicStateScaling == 0) {
					me._quarto_menu.ggParameter.sx = 0.9;
					me._quarto_menu.ggParameter.sy = 0.9;
					me._quarto_menu.style[domTransform]=parameterToTransform(me._quarto_menu.ggParameter);
				}
				else {
					me._quarto_menu.ggParameter.sx = 1;
					me._quarto_menu.ggParameter.sy = 1;
					me._quarto_menu.style[domTransform]=parameterToTransform(me._quarto_menu.ggParameter);
				}
			}
		}
		me._quarto_menu.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.elementMouseOver['quarto_menu'] == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._quarto_menu.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._quarto_menu.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._quarto_menu__text.style[domTransition]='left 0s, top 0s, ' + cssPrefix + 'transform 0s, background-color 0s, color 0s';
				if (me._quarto_menu.ggCurrentLogicStateBackgroundColor == 0) {
					me._quarto_menu__text.style.backgroundColor="rgba(0,0,0,1)";
				}
				else {
					me._quarto_menu__text.style.backgroundColor="rgba(255,255,255,1)";
				}
			}
		}
		me._quarto_menu.logicBlock_text = function() {
			var newLogicStateText;
			if (
				((player.getVariableValue('POR') == true))
			)
			{
				newLogicStateText = 0;
			}
			else if (
				((player.getVariableValue('ENG') == true))
			)
			{
				newLogicStateText = 1;
			}
			else if (
				((player.getVariableValue('ESP') == true))
			)
			{
				newLogicStateText = 2;
			}
			else {
				newLogicStateText = -1;
			}
			if (me._quarto_menu.ggCurrentLogicStateText != newLogicStateText) {
				me._quarto_menu.ggCurrentLogicStateText = newLogicStateText;
				me._quarto_menu.style[domTransition]='left 0s, top 0s, ' + cssPrefix + 'transform 0s, background-color 0s, color 0s';
				if (me._quarto_menu.ggCurrentLogicStateText == 0) {
					me._quarto_menu.ggText="QUARTO ";
					me._quarto_menu__text.innerHTML=me._quarto_menu.ggText;
					if (me._quarto_menu.ggUpdateText) {
					me._quarto_menu.ggUpdateText=function() {
						var hs="QUARTO ";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._quarto_menu.ggUpdatePosition) me._quarto_menu.ggUpdatePosition();
					}
				}
				else if (me._quarto_menu.ggCurrentLogicStateText == 1) {
					me._quarto_menu.ggText="BEDROOM";
					me._quarto_menu__text.innerHTML=me._quarto_menu.ggText;
					if (me._quarto_menu.ggUpdateText) {
					me._quarto_menu.ggUpdateText=function() {
						var hs="BEDROOM";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._quarto_menu.ggUpdatePosition) me._quarto_menu.ggUpdatePosition();
					}
				}
				else if (me._quarto_menu.ggCurrentLogicStateText == 2) {
					me._quarto_menu.ggText="CUARTO";
					me._quarto_menu__text.innerHTML=me._quarto_menu.ggText;
					if (me._quarto_menu.ggUpdateText) {
					me._quarto_menu.ggUpdateText=function() {
						var hs="CUARTO";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._quarto_menu.ggUpdatePosition) me._quarto_menu.ggUpdatePosition();
					}
				}
				else {
					me._quarto_menu.ggText="QUARTO ";
					me._quarto_menu__text.innerHTML=me._quarto_menu.ggText;
					if (me._quarto_menu.ggUpdateText) {
					me._quarto_menu.ggUpdateText=function() {
						var hs="QUARTO ";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._quarto_menu.ggUpdatePosition) me._quarto_menu.ggUpdatePosition();
					}
				}
			}
		}
		me._quarto_menu.logicBlock_textcolor = function() {
			var newLogicStateTextColor;
			if (
				((me.elementMouseOver['quarto_menu'] == true))
			)
			{
				newLogicStateTextColor = 0;
			}
			else if (
				((player.getVariableValue('POR') == true))
			)
			{
				newLogicStateTextColor = 1;
			}
			else if (
				((player.getVariableValue('ENG') == true))
			)
			{
				newLogicStateTextColor = 2;
			}
			else if (
				((player.getVariableValue('ESP') == true))
			)
			{
				newLogicStateTextColor = 3;
			}
			else {
				newLogicStateTextColor = -1;
			}
			if (me._quarto_menu.ggCurrentLogicStateTextColor != newLogicStateTextColor) {
				me._quarto_menu.ggCurrentLogicStateTextColor = newLogicStateTextColor;
				me._quarto_menu__text.style[domTransition]='left 0s, top 0s, ' + cssPrefix + 'transform 0s, background-color 0s, color 0s';
				if (me._quarto_menu.ggCurrentLogicStateTextColor == 0) {
					me._quarto_menu__text.style.color="rgba(255,255,255,1)";
				}
				else if (me._quarto_menu.ggCurrentLogicStateTextColor == 1) {
					me._quarto_menu__text.style.color="rgba(0,0,0,1)";
				}
				else if (me._quarto_menu.ggCurrentLogicStateTextColor == 2) {
					me._quarto_menu__text.style.color="rgba(0,0,0,1)";
				}
				else if (me._quarto_menu.ggCurrentLogicStateTextColor == 3) {
					me._quarto_menu__text.style.color="rgba(0,0,0,1)";
				}
				else {
					me._quarto_menu__text.style.color="rgba(0,0,0,1)";
				}
			}
		}
		me._quarto_menu.onclick=function (e) {
			player.openNext("{node13}",player.hotspot.target);
		}
		me._quarto_menu.onmouseover=function (e) {
			me.elementMouseOver['quarto_menu']=true;
			me._quarto_menu.logicBlock_backgroundcolor();
			me._quarto_menu.logicBlock_textcolor();
		}
		me._quarto_menu.onmouseout=function (e) {
			if (e && e.toElement) {
				var current = e.toElement;
				while (current = current.parentNode) {
				if (current == me._quarto_menu__text)
					return;
				}
			}
			me.elementMouseOver['quarto_menu']=false;
			me._quarto_menu.logicBlock_backgroundcolor();
			me._quarto_menu.logicBlock_textcolor();
		}
		me._quarto_menu.ontouchend=function (e) {
			me.elementMouseOver['quarto_menu']=false;
			me._quarto_menu.logicBlock_backgroundcolor();
			me._quarto_menu.logicBlock_textcolor();
		}
		me._quarto_menu.ggUpdatePosition=function (useTransition) {
		}
		me._menu.appendChild(me._quarto_menu);
		el=me._garagem_menu=document.createElement('div');
		els=me._garagem_menu__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="GARAGEM MENU";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 24px;';
		hs+='left : 597px;';
		hs+='position : absolute;';
		hs+='top : 4px;';
		hs+='visibility : inherit;';
		hs+='width : 110px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 112px;';
		hs+='height: auto;';
		hs+='background: #ffffff;';
		hs+='border: 1px solid #000000;';
		hs+='border-radius: 10px;';
		hs+=cssPrefix + 'border-radius: 10px;';
		hs+='color: #000000;';
		hs+='text-align: center;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 2px 3px 2px 3px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		els.innerHTML="GARAGEM";
		el.appendChild(els);
		me._garagem_menu.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._garagem_menu.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getViewerSize().width < 1084))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._garagem_menu.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._garagem_menu.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._garagem_menu.style[domTransition]='left 0s, top 0s, ' + cssPrefix + 'transform 0s, background-color 0s, color 0s';
				if (me._garagem_menu.ggCurrentLogicStatePosition == 0) {
					me._garagem_menu.style.left='210px';
					me._garagem_menu.style.top='25px';
				}
				else {
					me._garagem_menu.style.left='597px';
					me._garagem_menu.style.top='4px';
				}
			}
		}
		me._garagem_menu.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getViewerSize().width < 1084))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._garagem_menu.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._garagem_menu.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._garagem_menu.style[domTransition]='left 0s, top 0s, ' + cssPrefix + 'transform 0s, background-color 0s, color 0s';
				if (me._garagem_menu.ggCurrentLogicStateScaling == 0) {
					me._garagem_menu.ggParameter.sx = 0.9;
					me._garagem_menu.ggParameter.sy = 0.9;
					me._garagem_menu.style[domTransform]=parameterToTransform(me._garagem_menu.ggParameter);
				}
				else {
					me._garagem_menu.ggParameter.sx = 1;
					me._garagem_menu.ggParameter.sy = 1;
					me._garagem_menu.style[domTransform]=parameterToTransform(me._garagem_menu.ggParameter);
				}
			}
		}
		me._garagem_menu.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.elementMouseOver['garagem_menu'] == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._garagem_menu.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._garagem_menu.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._garagem_menu__text.style[domTransition]='left 0s, top 0s, ' + cssPrefix + 'transform 0s, background-color 0s, color 0s';
				if (me._garagem_menu.ggCurrentLogicStateBackgroundColor == 0) {
					me._garagem_menu__text.style.backgroundColor="rgba(0,0,0,1)";
				}
				else {
					me._garagem_menu__text.style.backgroundColor="rgba(255,255,255,1)";
				}
			}
		}
		me._garagem_menu.logicBlock_text = function() {
			var newLogicStateText;
			if (
				((player.getVariableValue('POR') == true))
			)
			{
				newLogicStateText = 0;
			}
			else if (
				((player.getVariableValue('ENG') == true))
			)
			{
				newLogicStateText = 1;
			}
			else if (
				((player.getVariableValue('ESP') == true))
			)
			{
				newLogicStateText = 2;
			}
			else {
				newLogicStateText = -1;
			}
			if (me._garagem_menu.ggCurrentLogicStateText != newLogicStateText) {
				me._garagem_menu.ggCurrentLogicStateText = newLogicStateText;
				me._garagem_menu.style[domTransition]='left 0s, top 0s, ' + cssPrefix + 'transform 0s, background-color 0s, color 0s';
				if (me._garagem_menu.ggCurrentLogicStateText == 0) {
					me._garagem_menu.ggText="GARAGEM";
					me._garagem_menu__text.innerHTML=me._garagem_menu.ggText;
					if (me._garagem_menu.ggUpdateText) {
					me._garagem_menu.ggUpdateText=function() {
						var hs="GARAGEM";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._garagem_menu.ggUpdatePosition) me._garagem_menu.ggUpdatePosition();
					}
				}
				else if (me._garagem_menu.ggCurrentLogicStateText == 1) {
					me._garagem_menu.ggText="GARAGE";
					me._garagem_menu__text.innerHTML=me._garagem_menu.ggText;
					if (me._garagem_menu.ggUpdateText) {
					me._garagem_menu.ggUpdateText=function() {
						var hs="GARAGE";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._garagem_menu.ggUpdatePosition) me._garagem_menu.ggUpdatePosition();
					}
				}
				else if (me._garagem_menu.ggCurrentLogicStateText == 2) {
					me._garagem_menu.ggText="COCHERA";
					me._garagem_menu__text.innerHTML=me._garagem_menu.ggText;
					if (me._garagem_menu.ggUpdateText) {
					me._garagem_menu.ggUpdateText=function() {
						var hs="COCHERA";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._garagem_menu.ggUpdatePosition) me._garagem_menu.ggUpdatePosition();
					}
				}
				else {
					me._garagem_menu.ggText="GARAGEM";
					me._garagem_menu__text.innerHTML=me._garagem_menu.ggText;
					if (me._garagem_menu.ggUpdateText) {
					me._garagem_menu.ggUpdateText=function() {
						var hs="GARAGEM";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._garagem_menu.ggUpdatePosition) me._garagem_menu.ggUpdatePosition();
					}
				}
			}
		}
		me._garagem_menu.logicBlock_textcolor = function() {
			var newLogicStateTextColor;
			if (
				((me.elementMouseOver['garagem_menu'] == true))
			)
			{
				newLogicStateTextColor = 0;
			}
			else {
				newLogicStateTextColor = -1;
			}
			if (me._garagem_menu.ggCurrentLogicStateTextColor != newLogicStateTextColor) {
				me._garagem_menu.ggCurrentLogicStateTextColor = newLogicStateTextColor;
				me._garagem_menu__text.style[domTransition]='left 0s, top 0s, ' + cssPrefix + 'transform 0s, background-color 0s, color 0s';
				if (me._garagem_menu.ggCurrentLogicStateTextColor == 0) {
					me._garagem_menu__text.style.color="rgba(255,255,255,1)";
				}
				else {
					me._garagem_menu__text.style.color="rgba(0,0,0,1)";
				}
			}
		}
		me._garagem_menu.onclick=function (e) {
			player.openNext("{node8}",player.hotspot.target);
		}
		me._garagem_menu.onmouseover=function (e) {
			me.elementMouseOver['garagem_menu']=true;
			me._garagem_menu.logicBlock_backgroundcolor();
			me._garagem_menu.logicBlock_textcolor();
		}
		me._garagem_menu.onmouseout=function (e) {
			if (e && e.toElement) {
				var current = e.toElement;
				while (current = current.parentNode) {
				if (current == me._garagem_menu__text)
					return;
				}
			}
			me.elementMouseOver['garagem_menu']=false;
			me._garagem_menu.logicBlock_backgroundcolor();
			me._garagem_menu.logicBlock_textcolor();
		}
		me._garagem_menu.ontouchend=function (e) {
			me.elementMouseOver['garagem_menu']=false;
			me._garagem_menu.logicBlock_backgroundcolor();
			me._garagem_menu.logicBlock_textcolor();
		}
		me._garagem_menu.ggUpdatePosition=function (useTransition) {
		}
		me._menu.appendChild(me._garagem_menu);
		el=me._info_menu=document.createElement('div');
		els=me._info_menu__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="INFO MENU";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 24px;';
		hs+='left : 7px;';
		hs+='position : absolute;';
		hs+='top : 4px;';
		hs+='visibility : inherit;';
		hs+='width : 110px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 112px;';
		hs+='height: auto;';
		hs+='background: #070707;';
		hs+='border: 1px solid #ffffff;';
		hs+='border-radius: 10px;';
		hs+=cssPrefix + 'border-radius: 10px;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 2px 3px 2px 3px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		els.innerHTML="INFORMA\xc7\xc3O";
		el.appendChild(els);
		me._info_menu.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._info_menu.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getViewerSize().width < 1084))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._info_menu.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._info_menu.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._info_menu.style[domTransition]='left 0s, top 0s, ' + cssPrefix + 'transform 0s, background-color 0s, border-color 0s, color 0s';
				if (me._info_menu.ggCurrentLogicStatePosition == 0) {
					me._info_menu.style.left='0px';
					me._info_menu.style.top='2px';
				}
				else {
					me._info_menu.style.left='7px';
					me._info_menu.style.top='4px';
				}
			}
		}
		me._info_menu.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getViewerSize().width < 1084))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._info_menu.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._info_menu.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._info_menu.style[domTransition]='left 0s, top 0s, ' + cssPrefix + 'transform 0s, background-color 0s, border-color 0s, color 0s';
				if (me._info_menu.ggCurrentLogicStateScaling == 0) {
					me._info_menu.ggParameter.sx = 0.9;
					me._info_menu.ggParameter.sy = 0.9;
					me._info_menu.style[domTransform]=parameterToTransform(me._info_menu.ggParameter);
				}
				else {
					me._info_menu.ggParameter.sx = 1;
					me._info_menu.ggParameter.sy = 1;
					me._info_menu.style[domTransform]=parameterToTransform(me._info_menu.ggParameter);
				}
			}
		}
		me._info_menu.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.elementMouseOver['info_menu'] == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._info_menu.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._info_menu.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._info_menu__text.style[domTransition]='left 0s, top 0s, ' + cssPrefix + 'transform 0s, background-color 0s, border-color 0s, color 0s';
				if (me._info_menu.ggCurrentLogicStateBackgroundColor == 0) {
					me._info_menu__text.style.backgroundColor="rgba(255,255,255,1)";
				}
				else {
					me._info_menu__text.style.backgroundColor="rgba(7,7,7,1)";
				}
			}
		}
		me._info_menu.logicBlock_bordercolor = function() {
			var newLogicStateBorderColor;
			if (
				((me.elementMouseOver['info_menu'] == true))
			)
			{
				newLogicStateBorderColor = 0;
			}
			else {
				newLogicStateBorderColor = -1;
			}
			if (me._info_menu.ggCurrentLogicStateBorderColor != newLogicStateBorderColor) {
				me._info_menu.ggCurrentLogicStateBorderColor = newLogicStateBorderColor;
				me._info_menu__text.style[domTransition]='left 0s, top 0s, ' + cssPrefix + 'transform 0s, background-color 0s, border-color 0s, color 0s';
				if (me._info_menu.ggCurrentLogicStateBorderColor == 0) {
					me._info_menu__text.style.borderColor="rgba(0,0,0,1)";
				}
				else {
					me._info_menu__text.style.borderColor="rgba(255,255,255,1)";
				}
			}
		}
		me._info_menu.logicBlock_text = function() {
			var newLogicStateText;
			if (
				((player.getVariableValue('POR') == true))
			)
			{
				newLogicStateText = 0;
			}
			else if (
				((player.getVariableValue('ENG') == true))
			)
			{
				newLogicStateText = 1;
			}
			else if (
				((player.getVariableValue('ESP') == true))
			)
			{
				newLogicStateText = 2;
			}
			else {
				newLogicStateText = -1;
			}
			if (me._info_menu.ggCurrentLogicStateText != newLogicStateText) {
				me._info_menu.ggCurrentLogicStateText = newLogicStateText;
				me._info_menu.style[domTransition]='left 0s, top 0s, ' + cssPrefix + 'transform 0s, background-color 0s, border-color 0s, color 0s';
				if (me._info_menu.ggCurrentLogicStateText == 0) {
					me._info_menu.ggText="INFORMA\xc7\xc3O";
					me._info_menu__text.innerHTML=me._info_menu.ggText;
					if (me._info_menu.ggUpdateText) {
					me._info_menu.ggUpdateText=function() {
						var hs="INFORMA\xc7\xc3O";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._info_menu.ggUpdatePosition) me._info_menu.ggUpdatePosition();
					}
				}
				else if (me._info_menu.ggCurrentLogicStateText == 1) {
					me._info_menu.ggText="INFORMATION";
					me._info_menu__text.innerHTML=me._info_menu.ggText;
					if (me._info_menu.ggUpdateText) {
					me._info_menu.ggUpdateText=function() {
						var hs="INFORMATION";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._info_menu.ggUpdatePosition) me._info_menu.ggUpdatePosition();
					}
				}
				else if (me._info_menu.ggCurrentLogicStateText == 2) {
					me._info_menu.ggText="INFORMACI\xd3N";
					me._info_menu__text.innerHTML=me._info_menu.ggText;
					if (me._info_menu.ggUpdateText) {
					me._info_menu.ggUpdateText=function() {
						var hs="INFORMACI\xd3N";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._info_menu.ggUpdatePosition) me._info_menu.ggUpdatePosition();
					}
				}
				else {
					me._info_menu.ggText="INFORMA\xc7\xc3O";
					me._info_menu__text.innerHTML=me._info_menu.ggText;
					if (me._info_menu.ggUpdateText) {
					me._info_menu.ggUpdateText=function() {
						var hs="INFORMA\xc7\xc3O";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._info_menu.ggUpdatePosition) me._info_menu.ggUpdatePosition();
					}
				}
			}
		}
		me._info_menu.logicBlock_textcolor = function() {
			var newLogicStateTextColor;
			if (
				((me.elementMouseOver['info_menu'] == true))
			)
			{
				newLogicStateTextColor = 0;
			}
			else {
				newLogicStateTextColor = -1;
			}
			if (me._info_menu.ggCurrentLogicStateTextColor != newLogicStateTextColor) {
				me._info_menu.ggCurrentLogicStateTextColor = newLogicStateTextColor;
				me._info_menu__text.style[domTransition]='left 0s, top 0s, ' + cssPrefix + 'transform 0s, background-color 0s, border-color 0s, color 0s';
				if (me._info_menu.ggCurrentLogicStateTextColor == 0) {
					me._info_menu__text.style.color="rgba(0,0,0,1)";
				}
				else {
					me._info_menu__text.style.color="rgba(255,255,255,1)";
				}
			}
		}
		me._info_menu.onclick=function (e) {
			me._info.ggVisible = !me._info.ggVisible;
			var flag=me._info.ggVisible;
			me._info.style[domTransition]='none';
			me._info.style.visibility=((flag)&&(Number(me._info.style.opacity)>0||!me._info.style.opacity))?'inherit':'hidden';
			player.setVariableValue('INFO', !player.getVariableValue('INFO'));
		}
		me._info_menu.onmouseover=function (e) {
			me.elementMouseOver['info_menu']=true;
			me._info_menu.logicBlock_backgroundcolor();
			me._info_menu.logicBlock_bordercolor();
			me._info_menu.logicBlock_textcolor();
		}
		me._info_menu.onmouseout=function (e) {
			if (e && e.toElement) {
				var current = e.toElement;
				while (current = current.parentNode) {
				if (current == me._info_menu__text)
					return;
				}
			}
			me.elementMouseOver['info_menu']=false;
			me._info_menu.logicBlock_backgroundcolor();
			me._info_menu.logicBlock_bordercolor();
			me._info_menu.logicBlock_textcolor();
		}
		me._info_menu.ontouchend=function (e) {
			me.elementMouseOver['info_menu']=false;
			me._info_menu.logicBlock_backgroundcolor();
			me._info_menu.logicBlock_bordercolor();
			me._info_menu.logicBlock_textcolor();
		}
		me._info_menu.ggUpdatePosition=function (useTransition) {
		}
		me._menu.appendChild(me._info_menu);
		me.divSkin.appendChild(me._menu);
		el=me._button_mute=document.createElement('div');
		el.ggId="button_mute";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 32px;';
		hs+='position : absolute;';
		hs+='right : 40px;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._button_mute.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._button_mute.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getViewerSize().width < 1084))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._button_mute.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._button_mute.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._button_mute.style[domTransition]='right 0s, top 0s';
				if (me._button_mute.ggCurrentLogicStatePosition == 0) {
					me._button_mute.style.right='3px';
					me._button_mute.style.top='-2px';
				}
				else {
					me._button_mute.style.right='40px';
					me._button_mute.style.top='0px';
				}
			}
		}
		me._button_mute.ggUpdatePosition=function (useTransition) {
		}
		el=me._unmute=document.createElement('div');
		els=me._unmute__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEgQmFzaWMvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEtYmFzaWMuZHRkJz4KPCEtLSBHYXJkZW4gR25vbWUgU29mdHdhcmUgLSBTa2luIEJ1dHRvbnMgLS0+CjxzdmcgdmVyc2lvbj0iMS4xIiB4PSIwcHgiIGJhc2VQcm9maWxlPSJiYXNpYyIgd2lkdGg9IjMycHgiIHk9IjBweCIgaWQ9IkxheWVyXzEiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4bWw6c3BhY2U9InByZXNlcn'+
			'ZlIiB2aWV3Qm94PSIwIDAgMzIgMzIiIGhlaWdodD0iMzJweCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KIDxnIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2U9IiMzQzNDM0MiIG9wYWNpdHk9IjAuNCI+CiAgPHBhdGggZD0iTTE2LDMuNUM5LjA5NiwzLjUsMy41LDkuMDk2LDMuNSwxNmMwLDYuOTA0LDUuNTk2LDEyLjQ5OSwxMi41LDEyLjVjNi45MDMtMC4wMDEsMTIuNDk5LTUuNTk2LDEyLjUtMTIuNSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtDMjguNDk5LDkuMDk2LDIyLjkwMywzLjUsMTYsMy41eiBNMjMuMTQ3LDIzLjE0N2MtMS44MzMsMS44My00LjM1MywyLjk1OS03'+
			'LjE0NywyLjk2Yy0yLjc5NS0wLjAwMS01LjMxNC0xLjEzLTcuMTQ2LTIuOTYmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7QzcuMDIyLDIxLjMxNCw1Ljg5NCwxOC43OTUsNS44OTMsMTZjMC4wMDEtMi43OTUsMS4xMjktNS4zMTQsMi45NjEtNy4xNDdjMS44MzMtMS44MzEsNC4zNTItMi45Niw3LjE0Ni0yLjk2MSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjMi43OTUsMC4wMDEsNS4zMTMsMS4xMyw3LjE0NywyLjk2MWMxLjgzMSwxLjgzMywyLjk1OSw0LjM1MiwyLjk2LDcuMTQ3QzI2LjEwNiwxOC43OTUsMjQuOTc5LDIxLjMxNCwyMy4xNDcsMjMuMTQ3eiYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OT'+
			'sgTTE2LjAzMiw4LjkxN2MtMC40NDMtMC4xODYtMC45NTgtMC4wODctMS4zMDEsMC4yNDhsLTMuMTAzLDMuMDM3bC0yLjIzOCwwYy0wLjMxNSwwLTAuNjI0LDAuMTI3LTAuODQ2LDAuMzUmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7cy0wLjM1MSwwLjUzMS0wLjM1MSwwLjg0NnY1LjI5NmMwLDAuMzE1LDAuMTI4LDAuNjI0LDAuMzUxLDAuODQ3czAuNTMxLDAuMzUsMC44NDYsMC4zNWgyLjIzOGwzLjEwMywzLjAzOCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjMC4yMjgsMC4yMjMsMC41MzEsMC4zNDEsMC44MzgsMC4zNDFjMC4xNTYsMCwwLjMxMy0wLjAzLDAuNDYyLTAuMDkzYzAuNDQzLTAuMTg2'+
			'LDAuNzMzLTAuNjIyLDAuNzMzLTEuMTAzVjEwLjAyJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O0MxNi43NjUsOS41NCwxNi40NzUsOS4xMDMsMTYuMDMyLDguOTE3eiBNMTQuMzcyLDE5LjIyOWwtMS40MTctMS4zODljLTAuMjI2LTAuMjIxLTAuNTIyLTAuMzQxLTAuODM3LTAuMzQxaC0xLjUzMXYtMi45MDVoMS41MzEmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7YzAuMzE1LDAsMC42MTItMC4xMjEsMC44MzctMC4zNDFsMS40MTctMS4zODhWMTkuMjI5eiBNMTkuNTQzLDE4Ljk3OWMwLjc4NC0wLjc0NSwxLjI4LTEuODA3LDEuMjgtMi45NzgmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7YzAtMS4xND'+
			'YtMC40NzUtMi4xODktMS4yMy0yLjkzMmMtMC4zNjYtMC4zNi0wLjk1NS0wLjM1NS0xLjMxNSwwLjAxMWMtMC4zNiwwLjM2Ni0wLjM1NSwwLjk1NSwwLjAxMSwxLjMxNSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjMC40MTgsMC40MTIsMC42NzQsMC45NzUsMC42NzQsMS42MDVjMCwwLjY0My0wLjI2OCwxLjIxNC0wLjcwMiwxLjYzYy0wLjM3MiwwLjM1NC0wLjM4NywwLjk0My0wLjAzMiwxLjMxNSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjMC4xODMsMC4xOTIsMC40MjksMC4yODksMC42NzUsMC4yODlDMTkuMTMzLDE5LjIzNSwxOS4zNjMsMTkuMTUsMTkuNTQzLDE4Ljk3OUwxOS41NDMsMTgu'+
			'OTc5eiBNMjAuNzY2LDkuMTMyJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MtMC40MTQtMC4zMDYtMC45OTYtMC4yMTctMS4zMDEsMC4xOTdjLTAuMzA1LDAuNDE0LTAuMjE3LDAuOTk2LDAuMTk3LDEuMzAxYzEuNjQ5LDEuMjE3LDIuNzE3LDMuMTY0LDIuNzE3LDUuMzY5JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MwLDIuMjIzLTEuMDg0LDQuMTgzLTIuNzU2LDUuMzk3Yy0wLjQxNywwLjMwMy0wLjUwOSwwLjg4NC0wLjIwNiwxLjMwMWMwLjE4MiwwLjI1LDAuNDY2LDAuMzgzLDAuNzU0LDAuMzgzJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MwLjE4OSwwLDAuMzgxLTAuMDU4LDAuNTQ2LTAuMT'+
			'c3aC0wLjAwMWMyLjEzMy0xLjU0NywzLjUyNC00LjA2NiwzLjUyNC02LjkwNEMyNC4yNCwxMy4xODMsMjIuODcxLDEwLjY4MSwyMC43NjYsOS4xMzJ6Ii8+CiA8L2c+CiA8ZyBmaWxsLW9wYWNpdHk9IjEiIHN0cm9rZS13aWR0aD0iMC4yIiBmaWxsPSIjMDAwMDAwIiBzdHJva2U9IiMwMDAwMDAiPgogIDxwYXRoIGQ9Ik0xNiwzLjVDOS4wOTYsMy41LDMuNSw5LjA5NiwzLjUsMTZjMCw2LjkwNCw1LjU5NiwxMi40OTksMTIuNSwxMi41YzYuOTAzLTAuMDAxLDEyLjQ5OS01LjU5NiwxMi41LTEyLjUmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7QzI4LjQ5OSw5LjA5NiwyMi45MDMsMy41LDE2LDMuNXog'+
			'TTIzLjE0NywyMy4xNDdjLTEuODMzLDEuODMtNC4zNTMsMi45NTktNy4xNDcsMi45NmMtMi43OTUtMC4wMDEtNS4zMTQtMS4xMy03LjE0Ni0yLjk2JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O0M3LjAyMiwyMS4zMTQsNS44OTQsMTguNzk1LDUuODkzLDE2YzAuMDAxLTIuNzk1LDEuMTI5LTUuMzE0LDIuOTYxLTcuMTQ3YzEuODMzLTEuODMxLDQuMzUyLTIuOTYsNy4xNDYtMi45NjEmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7YzIuNzk1LDAuMDAxLDUuMzEzLDEuMTMsNy4xNDcsMi45NjFjMS44MzEsMS44MzMsMi45NTksNC4zNTIsMi45Niw3LjE0N0MyNi4xMDYsMTguNzk1LDI0Ljk3OSwyMS4zMT'+
			'QsMjMuMTQ3LDIzLjE0N3omI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7IE0xNi4wMzIsOC45MTdjLTAuNDQzLTAuMTg2LTAuOTU4LTAuMDg3LTEuMzAxLDAuMjQ4bC0zLjEwMywzLjAzN2wtMi4yMzgsMGMtMC4zMTUsMC0wLjYyNCwwLjEyNy0wLjg0NiwwLjM1JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O3MtMC4zNTEsMC41MzEtMC4zNTEsMC44NDZ2NS4yOTZjMCwwLjMxNSwwLjEyOCwwLjYyNCwwLjM1MSwwLjg0N3MwLjUzMSwwLjM1LDAuODQ2LDAuMzVoMi4yMzhsMy4xMDMsMy4wMzgmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7YzAuMjI4LDAuMjIzLDAuNTMxLDAuMzQxLDAuODM4LDAuMzQxYzAu'+
			'MTU2LDAsMC4zMTMtMC4wMywwLjQ2Mi0wLjA5M2MwLjQ0My0wLjE4NiwwLjczMy0wLjYyMiwwLjczMy0xLjEwM1YxMC4wMiYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtDMTYuNzY1LDkuNTQsMTYuNDc1LDkuMTAzLDE2LjAzMiw4LjkxN3ogTTE0LjM3MiwxOS4yMjlsLTEuNDE3LTEuMzg5Yy0wLjIyNi0wLjIyMS0wLjUyMi0wLjM0MS0wLjgzNy0wLjM0MWgtMS41MzF2LTIuOTA1aDEuNTMxJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MwLjMxNSwwLDAuNjEyLTAuMTIxLDAuODM3LTAuMzQxbDEuNDE3LTEuMzg4VjE5LjIyOXogTTE5LjU0MywxOC45NzljMC43ODQtMC43NDUsMS4yOC0xLjgwNywxLj'+
			'I4LTIuOTc4JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MwLTEuMTQ2LTAuNDc1LTIuMTg5LTEuMjMtMi45MzJjLTAuMzY2LTAuMzYtMC45NTUtMC4zNTUtMS4zMTUsMC4wMTFjLTAuMzYsMC4zNjYtMC4zNTUsMC45NTUsMC4wMTEsMS4zMTUmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7YzAuNDE4LDAuNDEyLDAuNjc0LDAuOTc1LDAuNjc0LDEuNjA1YzAsMC42NDMtMC4yNjgsMS4yMTQtMC43MDIsMS42M2MtMC4zNzIsMC4zNTQtMC4zODcsMC45NDMtMC4wMzIsMS4zMTUmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7YzAuMTgzLDAuMTkyLDAuNDI5LDAuMjg5LDAuNjc1LDAuMjg5QzE5LjEzMywxOS4y'+
			'MzUsMTkuMzYzLDE5LjE1LDE5LjU0MywxOC45NzlMMTkuNTQzLDE4Ljk3OXogTTIwLjc2Niw5LjEzMiYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjLTAuNDE0LTAuMzA2LTAuOTk2LTAuMjE3LTEuMzAxLDAuMTk3Yy0wLjMwNSwwLjQxNC0wLjIxNywwLjk5NiwwLjE5NywxLjMwMWMxLjY0OSwxLjIxNywyLjcxNywzLjE2NCwyLjcxNyw1LjM2OSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjMCwyLjIyMy0xLjA4NCw0LjE4My0yLjc1Niw1LjM5N2MtMC40MTcsMC4zMDMtMC41MDksMC44ODQtMC4yMDYsMS4zMDFjMC4xODIsMC4yNSwwLjQ2NiwwLjM4MywwLjc1NCwwLjM4MyYjeGQ7JiN4YTsmI3g5Oy'+
			'YjeDk7JiN4OTtjMC4xODksMCwwLjM4MS0wLjA1OCwwLjU0Ni0wLjE3N2gtMC4wMDFjMi4xMzMtMS41NDcsMy41MjQtNC4wNjYsMy41MjQtNi45MDRDMjQuMjQsMTMuMTgzLDIyLjg3MSwxMC42ODEsMjAuNzY2LDkuMTMyeiIvPgogPC9nPgo8L3N2Zz4K';
		me._unmute__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._unmute__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEgQmFzaWMvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEtYmFzaWMuZHRkJz4KPCEtLSBHYXJkZW4gR25vbWUgU29mdHdhcmUgLSBTa2luIEJ1dHRvbnMgLS0+CjxzdmcgdmVyc2lvbj0iMS4xIiB4PSIwcHgiIGJhc2VQcm9maWxlPSJiYXNpYyIgd2lkdGg9IjMycHgiIHk9IjBweCIgaWQ9IkxheWVyXzEiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4bWw6c3BhY2U9InByZXNlcn'+
			'ZlIiB2aWV3Qm94PSIwIDAgMzIgMzIiIGhlaWdodD0iMzJweCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE2LDE2KSBzY2FsZSgxLjEpIHRyYW5zbGF0ZSgtMTYsLTE2KSIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZT0iIzNDM0MzQyIgb3BhY2l0eT0iMC40Ij4KICA8cGF0aCBkPSJNMTYsMy41QzkuMDk2LDMuNSwzLjUsOS4wOTYsMy41LDE2YzAsNi45MDQsNS41OTYsMTIuNDk5LDEyLjUsMTIuNWM2LjkwMy0wLjAwMSwxMi40OTktNS41OTYsMTIuNS0xMi41JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O0MyOC40OTksOS4wOTYs'+
			'MjIuOTAzLDMuNSwxNiwzLjV6IE0yMy4xNDcsMjMuMTQ3Yy0xLjgzMywxLjgzLTQuMzUzLDIuOTU5LTcuMTQ3LDIuOTZjLTIuNzk1LTAuMDAxLTUuMzE0LTEuMTMtNy4xNDYtMi45NiYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtDNy4wMjIsMjEuMzE0LDUuODk0LDE4Ljc5NSw1Ljg5MywxNmMwLjAwMS0yLjc5NSwxLjEyOS01LjMxNCwyLjk2MS03LjE0N2MxLjgzMy0xLjgzMSw0LjM1Mi0yLjk2LDcuMTQ2LTIuOTYxJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MyLjc5NSwwLjAwMSw1LjMxMywxLjEzLDcuMTQ3LDIuOTYxYzEuODMxLDEuODMzLDIuOTU5LDQuMzUyLDIuOTYsNy4xNDdDMjYuMTA2LD'+
			'E4Ljc5NSwyNC45NzksMjEuMzE0LDIzLjE0NywyMy4xNDd6JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyBNMTYuMDMyLDguOTE3Yy0wLjQ0My0wLjE4Ni0wLjk1OC0wLjA4Ny0xLjMwMSwwLjI0OGwtMy4xMDMsMy4wMzdsLTIuMjM4LDBjLTAuMzE1LDAtMC42MjQsMC4xMjctMC44NDYsMC4zNSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtzLTAuMzUxLDAuNTMxLTAuMzUxLDAuODQ2djUuMjk2YzAsMC4zMTUsMC4xMjgsMC42MjQsMC4zNTEsMC44NDdzMC41MzEsMC4zNSwwLjg0NiwwLjM1aDIuMjM4bDMuMTAzLDMuMDM4JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MwLjIyOCwwLjIyMywwLjUzMSww'+
			'LjM0MSwwLjgzOCwwLjM0MWMwLjE1NiwwLDAuMzEzLTAuMDMsMC40NjItMC4wOTNjMC40NDMtMC4xODYsMC43MzMtMC42MjIsMC43MzMtMS4xMDNWMTAuMDImI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7QzE2Ljc2NSw5LjU0LDE2LjQ3NSw5LjEwMywxNi4wMzIsOC45MTd6IE0xNC4zNzIsMTkuMjI5bC0xLjQxNy0xLjM4OWMtMC4yMjYtMC4yMjEtMC41MjItMC4zNDEtMC44MzctMC4zNDFoLTEuNTMxdi0yLjkwNWgxLjUzMSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjMC4zMTUsMCwwLjYxMi0wLjEyMSwwLjgzNy0wLjM0MWwxLjQxNy0xLjM4OFYxOS4yMjl6IE0xOS41NDMsMTguOTc5YzAuNzg0LT'+
			'AuNzQ1LDEuMjgtMS44MDcsMS4yOC0yLjk3OCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjMC0xLjE0Ni0wLjQ3NS0yLjE4OS0xLjIzLTIuOTMyYy0wLjM2Ni0wLjM2LTAuOTU1LTAuMzU1LTEuMzE1LDAuMDExYy0wLjM2LDAuMzY2LTAuMzU1LDAuOTU1LDAuMDExLDEuMzE1JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MwLjQxOCwwLjQxMiwwLjY3NCwwLjk3NSwwLjY3NCwxLjYwNWMwLDAuNjQzLTAuMjY4LDEuMjE0LTAuNzAyLDEuNjNjLTAuMzcyLDAuMzU0LTAuMzg3LDAuOTQzLTAuMDMyLDEuMzE1JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MwLjE4MywwLjE5MiwwLjQyOSwwLjI4OSwwLjY3'+
			'NSwwLjI4OUMxOS4xMzMsMTkuMjM1LDE5LjM2MywxOS4xNSwxOS41NDMsMTguOTc5TDE5LjU0MywxOC45Nzl6IE0yMC43NjYsOS4xMzImI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7Yy0wLjQxNC0wLjMwNi0wLjk5Ni0wLjIxNy0xLjMwMSwwLjE5N2MtMC4zMDUsMC40MTQtMC4yMTcsMC45OTYsMC4xOTcsMS4zMDFjMS42NDksMS4yMTcsMi43MTcsMy4xNjQsMi43MTcsNS4zNjkmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7YzAsMi4yMjMtMS4wODQsNC4xODMtMi43NTYsNS4zOTdjLTAuNDE3LDAuMzAzLTAuNTA5LDAuODg0LTAuMjA2LDEuMzAxYzAuMTgyLDAuMjUsMC40NjYsMC4zODMsMC43NTQsMC'+
			'4zODMmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7YzAuMTg5LDAsMC4zODEtMC4wNTgsMC41NDYtMC4xNzdoLTAuMDAxYzIuMTMzLTEuNTQ3LDMuNTI0LTQuMDY2LDMuNTI0LTYuOTA0QzI0LjI0LDEzLjE4MywyMi44NzEsMTAuNjgxLDIwLjc2Niw5LjEzMnoiLz4KIDwvZz4KIDxnIGZpbGwtb3BhY2l0eT0iMSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTYsMTYpIHNjYWxlKDEuMSkgdHJhbnNsYXRlKC0xNiwtMTYpIiBzdHJva2Utd2lkdGg9IjAuMiIgZmlsbD0iIzAwMDAwMCIgc3Ryb2tlPSIjMDAwMDAwIj4KICA8cGF0aCBkPSJNMTYsMy41QzkuMDk2LDMuNSwzLjUsOS4wOTYsMy41LDE2YzAsNi45'+
			'MDQsNS41OTYsMTIuNDk5LDEyLjUsMTIuNWM2LjkwMy0wLjAwMSwxMi40OTktNS41OTYsMTIuNS0xMi41JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O0MyOC40OTksOS4wOTYsMjIuOTAzLDMuNSwxNiwzLjV6IE0yMy4xNDcsMjMuMTQ3Yy0xLjgzMywxLjgzLTQuMzUzLDIuOTU5LTcuMTQ3LDIuOTZjLTIuNzk1LTAuMDAxLTUuMzE0LTEuMTMtNy4xNDYtMi45NiYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtDNy4wMjIsMjEuMzE0LDUuODk0LDE4Ljc5NSw1Ljg5MywxNmMwLjAwMS0yLjc5NSwxLjEyOS01LjMxNCwyLjk2MS03LjE0N2MxLjgzMy0xLjgzMSw0LjM1Mi0yLjk2LDcuMTQ2LTIuOTYxJiN4ZD'+
			'smI3hhOyYjeDk7JiN4OTsmI3g5O2MyLjc5NSwwLjAwMSw1LjMxMywxLjEzLDcuMTQ3LDIuOTYxYzEuODMxLDEuODMzLDIuOTU5LDQuMzUyLDIuOTYsNy4xNDdDMjYuMTA2LDE4Ljc5NSwyNC45NzksMjEuMzE0LDIzLjE0NywyMy4xNDd6JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyBNMTYuMDMyLDguOTE3Yy0wLjQ0My0wLjE4Ni0wLjk1OC0wLjA4Ny0xLjMwMSwwLjI0OGwtMy4xMDMsMy4wMzdsLTIuMjM4LDBjLTAuMzE1LDAtMC42MjQsMC4xMjctMC44NDYsMC4zNSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtzLTAuMzUxLDAuNTMxLTAuMzUxLDAuODQ2djUuMjk2YzAsMC4zMTUsMC4xMjgsMC42'+
			'MjQsMC4zNTEsMC44NDdzMC41MzEsMC4zNSwwLjg0NiwwLjM1aDIuMjM4bDMuMTAzLDMuMDM4JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MwLjIyOCwwLjIyMywwLjUzMSwwLjM0MSwwLjgzOCwwLjM0MWMwLjE1NiwwLDAuMzEzLTAuMDMsMC40NjItMC4wOTNjMC40NDMtMC4xODYsMC43MzMtMC42MjIsMC43MzMtMS4xMDNWMTAuMDImI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7QzE2Ljc2NSw5LjU0LDE2LjQ3NSw5LjEwMywxNi4wMzIsOC45MTd6IE0xNC4zNzIsMTkuMjI5bC0xLjQxNy0xLjM4OWMtMC4yMjYtMC4yMjEtMC41MjItMC4zNDEtMC44MzctMC4zNDFoLTEuNTMxdi0yLjkwNWgxLjUzMS'+
			'YjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjMC4zMTUsMCwwLjYxMi0wLjEyMSwwLjgzNy0wLjM0MWwxLjQxNy0xLjM4OFYxOS4yMjl6IE0xOS41NDMsMTguOTc5YzAuNzg0LTAuNzQ1LDEuMjgtMS44MDcsMS4yOC0yLjk3OCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjMC0xLjE0Ni0wLjQ3NS0yLjE4OS0xLjIzLTIuOTMyYy0wLjM2Ni0wLjM2LTAuOTU1LTAuMzU1LTEuMzE1LDAuMDExYy0wLjM2LDAuMzY2LTAuMzU1LDAuOTU1LDAuMDExLDEuMzE1JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MwLjQxOCwwLjQxMiwwLjY3NCwwLjk3NSwwLjY3NCwxLjYwNWMwLDAuNjQzLTAuMjY4LDEuMjE0LTAu'+
			'NzAyLDEuNjNjLTAuMzcyLDAuMzU0LTAuMzg3LDAuOTQzLTAuMDMyLDEuMzE1JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MwLjE4MywwLjE5MiwwLjQyOSwwLjI4OSwwLjY3NSwwLjI4OUMxOS4xMzMsMTkuMjM1LDE5LjM2MywxOS4xNSwxOS41NDMsMTguOTc5TDE5LjU0MywxOC45Nzl6IE0yMC43NjYsOS4xMzImI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7Yy0wLjQxNC0wLjMwNi0wLjk5Ni0wLjIxNy0xLjMwMSwwLjE5N2MtMC4zMDUsMC40MTQtMC4yMTcsMC45OTYsMC4xOTcsMS4zMDFjMS42NDksMS4yMTcsMi43MTcsMy4xNjQsMi43MTcsNS4zNjkmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7Yz'+
			'AsMi4yMjMtMS4wODQsNC4xODMtMi43NTYsNS4zOTdjLTAuNDE3LDAuMzAzLTAuNTA5LDAuODg0LTAuMjA2LDEuMzAxYzAuMTgyLDAuMjUsMC40NjYsMC4zODMsMC43NTQsMC4zODMmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7YzAuMTg5LDAsMC4zODEtMC4wNTgsMC41NDYtMC4xNzdoLTAuMDAxYzIuMTMzLTEuNTQ3LDMuNTI0LTQuMDY2LDMuNTI0LTYuOTA0QzI0LjI0LDEzLjE4MywyMi44NzEsMTAuNjgxLDIwLjc2Niw5LjEzMnoiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._unmute__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="unmute";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='bottom : 0px;';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._unmute.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._unmute.onclick=function (e) {
			player.setVolume("_main",0.8);
			me._unmute.style[domTransition]='none';
			me._unmute.style.visibility='hidden';
			me._unmute.ggVisible=false;
			me._mute.style[domTransition]='none';
			me._mute.style.visibility=(Number(me._mute.style.opacity)>0||!me._mute.style.opacity)?'inherit':'hidden';
			me._mute.ggVisible=true;
		}
		me._unmute.onmouseover=function (e) {
			me._unmute__img.style.visibility='hidden';
			me._unmute__imgo.style.visibility='inherit';
			me.elementMouseOver['unmute']=true;
			me._tt_unmute.logicBlock_visible();
		}
		me._unmute.onmouseout=function (e) {
			me._unmute__img.style.visibility='inherit';
			me._unmute__imgo.style.visibility='hidden';
			me.elementMouseOver['unmute']=false;
			me._tt_unmute.logicBlock_visible();
		}
		me._unmute.ontouchend=function (e) {
			me.elementMouseOver['unmute']=false;
			me._tt_unmute.logicBlock_visible();
		}
		me._unmute.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		el=me._tt_unmute=document.createElement('div');
		els=me._tt_unmute__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt_unmute";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='z-index: 100;';
		hs+='height : 20px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : 32px;';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		hs+='text-shadow: 1px 1px 4px #000000;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="Som";
		el.appendChild(els);
		me._tt_unmute.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._tt_unmute.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['unmute'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._tt_unmute.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._tt_unmute.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._tt_unmute.style[domTransition]='';
				if (me._tt_unmute.ggCurrentLogicStateVisible == 0) {
					me._tt_unmute.style.visibility=(Number(me._tt_unmute.style.opacity)>0||!me._tt_unmute.style.opacity)?'inherit':'hidden';
					me._tt_unmute.ggVisible=true;
				}
				else {
					me._tt_unmute.style.visibility="hidden";
					me._tt_unmute.ggVisible=false;
				}
			}
		}
		me._tt_unmute.logicBlock_text = function() {
			var newLogicStateText;
			if (
				((player.getVariableValue('POR') == true))
			)
			{
				newLogicStateText = 0;
			}
			else if (
				((player.getVariableValue('ENG') == true))
			)
			{
				newLogicStateText = 1;
			}
			else if (
				((player.getVariableValue('ESP') == true))
			)
			{
				newLogicStateText = 2;
			}
			else {
				newLogicStateText = -1;
			}
			if (me._tt_unmute.ggCurrentLogicStateText != newLogicStateText) {
				me._tt_unmute.ggCurrentLogicStateText = newLogicStateText;
				me._tt_unmute.style[domTransition]='';
				if (me._tt_unmute.ggCurrentLogicStateText == 0) {
					me._tt_unmute.ggText="Som";
					me._tt_unmute__text.innerHTML=me._tt_unmute.ggText;
					if (me._tt_unmute.ggUpdateText) {
					me._tt_unmute.ggUpdateText=function() {
						var hs="Som";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._tt_unmute.ggUpdatePosition) me._tt_unmute.ggUpdatePosition();
					}
				}
				else if (me._tt_unmute.ggCurrentLogicStateText == 1) {
					me._tt_unmute.ggText="Sound";
					me._tt_unmute__text.innerHTML=me._tt_unmute.ggText;
					if (me._tt_unmute.ggUpdateText) {
					me._tt_unmute.ggUpdateText=function() {
						var hs="Sound";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._tt_unmute.ggUpdatePosition) me._tt_unmute.ggUpdatePosition();
					}
				}
				else if (me._tt_unmute.ggCurrentLogicStateText == 2) {
					me._tt_unmute.ggText="Sonido";
					me._tt_unmute__text.innerHTML=me._tt_unmute.ggText;
					if (me._tt_unmute.ggUpdateText) {
					me._tt_unmute.ggUpdateText=function() {
						var hs="Sonido";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._tt_unmute.ggUpdatePosition) me._tt_unmute.ggUpdatePosition();
					}
				}
				else {
					me._tt_unmute.ggText="Som";
					me._tt_unmute__text.innerHTML=me._tt_unmute.ggText;
					if (me._tt_unmute.ggUpdateText) {
					me._tt_unmute.ggUpdateText=function() {
						var hs="Som";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._tt_unmute.ggUpdatePosition) me._tt_unmute.ggUpdatePosition();
					}
				}
			}
		}
		me._tt_unmute.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((98-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me._unmute.appendChild(me._tt_unmute);
		me._button_mute.appendChild(me._unmute);
		el=me._mute=document.createElement('div');
		els=me._mute__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEgQmFzaWMvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEtYmFzaWMuZHRkJz4KPCEtLSBHYXJkZW4gR25vbWUgU29mdHdhcmUgLSBTa2luIEJ1dHRvbnMgLS0+CjxzdmcgdmVyc2lvbj0iMS4xIiB4PSIwcHgiIGJhc2VQcm9maWxlPSJiYXNpYyIgd2lkdGg9IjMycHgiIHk9IjBweCIgaWQ9IkxheWVyXzEiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4bWw6c3BhY2U9InByZXNlcn'+
			'ZlIiB2aWV3Qm94PSIwIDAgMzIgMzIiIGhlaWdodD0iMzJweCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KIDxnIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2U9IiMzQzNDM0MiIG9wYWNpdHk9IjAuNCI+CiAgPHBhdGggZD0iTTE2LjAzMSw4LjkxN2MtMC40NDItMC4xODYtMC45NTgtMC4wODctMS4zLDAuMjQ4bC0zLjEwMywzLjAzN2wtMi4yMzgsMGMtMC4zMTUsMC0wLjYyNCwwLjEyNy0wLjg0NiwwLjM1JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MtMC4yMjMsMC4yMjMtMC4zNTEsMC41MzEtMC4zNTEsMC44NDZ2NS4yOTZjMCwwLjMxNSwwLjEyOCwwLjYyMywwLjM1MSww'+
			'Ljg0N2MwLjIyMywwLjIyMiwwLjUzMSwwLjM1MSwwLjg0NiwwLjM1MWgyLjIzOCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtsMy4xMDMsMy4wMzdjMC4yMjcsMC4yMjMsMC41MywwLjM0MSwwLjgzOCwwLjM0MWMwLjE1NiwwLDAuMzEzLTAuMDMsMC40NjItMC4wOTNjMC40NDMtMC4xODcsMC43MzMtMC42MjMsMC43MzMtMS4xMDNWMTAuMDImI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7QzE2Ljc2NCw5LjUzOSwxNi40NzQsOS4xMDMsMTYuMDMxLDguOTE3eiBNMTQuMzcyLDE5LjIyOGwtMS40MTgtMS4zODhjLTAuMjI1LTAuMjIxLTAuNTIyLTAuMzQyLTAuODM3LTAuMzQyaC0xLjUzdi0yLjkwNGgxLj'+
			'UzMSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjMC4zMTUsMCwwLjYxMi0wLjEyMSwwLjgzNy0wLjM0MWwxLjQxOC0xLjM4OFYxOS4yMjh6IE0xNiwzLjVDOS4wOTYsMy41LDMuNSw5LjA5NiwzLjUsMTZjMCw2LjkwMyw1LjU5NiwxMi40OTksMTIuNSwxMi41JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2M2LjkwMy0wLjAwMSwxMi40OTktNS41OTcsMTIuNS0xMi41QzI4LjQ5OSw5LjA5NiwyMi45MDMsMy41LDE2LDMuNXogTTIzLjE0NywyMy4xNDZjLTEuODMzLDEuODMxLTQuMzUzLDIuOTYtNy4xNDcsMi45NiYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtzLTUuMzE0LTEuMTI5LTcuMTQ2LTIuOTZD'+
			'Ny4wMjIsMjEuMzEzLDUuODk0LDE4Ljc5NSw1Ljg5MywxNmMwLjAwMS0yLjc5NSwxLjEyOS01LjMxNCwyLjk2MS03LjE0NyYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjMS44MzMtMS44MzEsNC4zNTItMi45Niw3LjE0Ni0yLjk2YzIuNzk1LDAsNS4zMTMsMS4xMyw3LjE0NywyLjk2YzEuODMxLDEuODMzLDIuOTU5LDQuMzUyLDIuOTYsNy4xNDcmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7QzI2LjEwNiwxOC43OTUsMjQuOTc5LDIxLjMxMywyMy4xNDcsMjMuMTQ2eiBNMjIuMzI3LDE2LjAzMWwxLjQ4NS0xLjQ4NWMwLjM2My0wLjM2NCwwLjM2My0wLjk1MywwLTEuMzE2JiN4ZDsmI3hhOyYjeDk7Ji'+
			'N4OTsmI3g5O2MtMC4zNjQtMC4zNjMtMC45NTMtMC4zNjMtMS4zMTUsMGwtMS40ODUsMS40ODVsLTEuNDg1LTEuNDg1Yy0wLjM2My0wLjM2My0wLjk1Mi0wLjM2My0xLjMxNiwwYy0wLjM2MiwwLjM2NC0wLjM2MiwwLjk1MywwLDEuMzE2JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2wxLjQ4NSwxLjQ4NWwtMS40ODUsMS40ODVjLTAuMzYyLDAuMzYyLTAuMzYyLDAuOTUyLDAsMS4zMTVjMC4xODMsMC4xODIsMC40MiwwLjI3MiwwLjY1OCwwLjI3MnMwLjQ3Ny0wLjA5MSwwLjY1OC0wLjI3MiYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtsMS40ODUtMS40ODVsMS40ODUsMS40ODVjMC4xODEsMC4xODIs'+
			'MC40MTksMC4yNzIsMC42NTcsMC4yNzJzMC40NzctMC4wOTEsMC42NTgtMC4yNzJjMC4zNjMtMC4zNjMsMC4zNjMtMC45NTMsMC0xLjMxNSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtMMjIuMzI3LDE2LjAzMXoiLz4KIDwvZz4KIDxnIGZpbGwtb3BhY2l0eT0iMSIgc3Ryb2tlLXdpZHRoPSIwLjIiIGZpbGw9IiMwMDAwMDAiIHN0cm9rZT0iIzAwMDAwMCI+CiAgPHBhdGggZD0iTTE2LjAzMSw4LjkxN2MtMC40NDItMC4xODYtMC45NTgtMC4wODctMS4zLDAuMjQ4bC0zLjEwMywzLjAzN2wtMi4yMzgsMGMtMC4zMTUsMC0wLjYyNCwwLjEyNy0wLjg0NiwwLjM1JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3'+
			'g5O2MtMC4yMjMsMC4yMjMtMC4zNTEsMC41MzEtMC4zNTEsMC44NDZ2NS4yOTZjMCwwLjMxNSwwLjEyOCwwLjYyMywwLjM1MSwwLjg0N2MwLjIyMywwLjIyMiwwLjUzMSwwLjM1MSwwLjg0NiwwLjM1MWgyLjIzOCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtsMy4xMDMsMy4wMzdjMC4yMjcsMC4yMjMsMC41MywwLjM0MSwwLjgzOCwwLjM0MWMwLjE1NiwwLDAuMzEzLTAuMDMsMC40NjItMC4wOTNjMC40NDMtMC4xODcsMC43MzMtMC42MjMsMC43MzMtMS4xMDNWMTAuMDImI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7QzE2Ljc2NCw5LjUzOSwxNi40NzQsOS4xMDMsMTYuMDMxLDguOTE3eiBNMTQuMzcy'+
			'LDE5LjIyOGwtMS40MTgtMS4zODhjLTAuMjI1LTAuMjIxLTAuNTIyLTAuMzQyLTAuODM3LTAuMzQyaC0xLjUzdi0yLjkwNGgxLjUzMSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjMC4zMTUsMCwwLjYxMi0wLjEyMSwwLjgzNy0wLjM0MWwxLjQxOC0xLjM4OFYxOS4yMjh6IE0xNiwzLjVDOS4wOTYsMy41LDMuNSw5LjA5NiwzLjUsMTZjMCw2LjkwMyw1LjU5NiwxMi40OTksMTIuNSwxMi41JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2M2LjkwMy0wLjAwMSwxMi40OTktNS41OTcsMTIuNS0xMi41QzI4LjQ5OSw5LjA5NiwyMi45MDMsMy41LDE2LDMuNXogTTIzLjE0NywyMy4xNDZjLTEuODMzLDEuOD'+
			'MxLTQuMzUzLDIuOTYtNy4xNDcsMi45NiYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtzLTUuMzE0LTEuMTI5LTcuMTQ2LTIuOTZDNy4wMjIsMjEuMzEzLDUuODk0LDE4Ljc5NSw1Ljg5MywxNmMwLjAwMS0yLjc5NSwxLjEyOS01LjMxNCwyLjk2MS03LjE0NyYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjMS44MzMtMS44MzEsNC4zNTItMi45Niw3LjE0Ni0yLjk2YzIuNzk1LDAsNS4zMTMsMS4xMyw3LjE0NywyLjk2YzEuODMxLDEuODMzLDIuOTU5LDQuMzUyLDIuOTYsNy4xNDcmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7QzI2LjEwNiwxOC43OTUsMjQuOTc5LDIxLjMxMywyMy4xNDcsMjMuMTQ2eiBN'+
			'MjIuMzI3LDE2LjAzMWwxLjQ4NS0xLjQ4NWMwLjM2My0wLjM2NCwwLjM2My0wLjk1MywwLTEuMzE2JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MtMC4zNjQtMC4zNjMtMC45NTMtMC4zNjMtMS4zMTUsMGwtMS40ODUsMS40ODVsLTEuNDg1LTEuNDg1Yy0wLjM2My0wLjM2My0wLjk1Mi0wLjM2My0xLjMxNiwwYy0wLjM2MiwwLjM2NC0wLjM2MiwwLjk1MywwLDEuMzE2JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2wxLjQ4NSwxLjQ4NWwtMS40ODUsMS40ODVjLTAuMzYyLDAuMzYyLTAuMzYyLDAuOTUyLDAsMS4zMTVjMC4xODMsMC4xODIsMC40MiwwLjI3MiwwLjY1OCwwLjI3MnMwLjQ3Ny0wLjA5MS'+
			'wwLjY1OC0wLjI3MiYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtsMS40ODUtMS40ODVsMS40ODUsMS40ODVjMC4xODEsMC4xODIsMC40MTksMC4yNzIsMC42NTcsMC4yNzJzMC40NzctMC4wOTEsMC42NTgtMC4yNzJjMC4zNjMtMC4zNjMsMC4zNjMtMC45NTMsMC0xLjMxNSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtMMjIuMzI3LDE2LjAzMXoiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._mute__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._mute__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEgQmFzaWMvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEtYmFzaWMuZHRkJz4KPCEtLSBHYXJkZW4gR25vbWUgU29mdHdhcmUgLSBTa2luIEJ1dHRvbnMgLS0+CjxzdmcgdmVyc2lvbj0iMS4xIiB4PSIwcHgiIGJhc2VQcm9maWxlPSJiYXNpYyIgd2lkdGg9IjMycHgiIHk9IjBweCIgaWQ9IkxheWVyXzEiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4bWw6c3BhY2U9InByZXNlcn'+
			'ZlIiB2aWV3Qm94PSIwIDAgMzIgMzIiIGhlaWdodD0iMzJweCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE2LDE2KSBzY2FsZSgxLjEpIHRyYW5zbGF0ZSgtMTYsLTE2KSIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZT0iIzNDM0MzQyIgb3BhY2l0eT0iMC40Ij4KICA8cGF0aCBkPSJNMTYuMDMxLDguOTE3Yy0wLjQ0Mi0wLjE4Ni0wLjk1OC0wLjA4Ny0xLjMsMC4yNDhsLTMuMTAzLDMuMDM3bC0yLjIzOCwwYy0wLjMxNSwwLTAuNjI0LDAuMTI3LTAuODQ2LDAuMzUmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7Yy0wLjIyMywwLjIy'+
			'My0wLjM1MSwwLjUzMS0wLjM1MSwwLjg0NnY1LjI5NmMwLDAuMzE1LDAuMTI4LDAuNjIzLDAuMzUxLDAuODQ3YzAuMjIzLDAuMjIyLDAuNTMxLDAuMzUxLDAuODQ2LDAuMzUxaDIuMjM4JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2wzLjEwMywzLjAzN2MwLjIyNywwLjIyMywwLjUzLDAuMzQxLDAuODM4LDAuMzQxYzAuMTU2LDAsMC4zMTMtMC4wMywwLjQ2Mi0wLjA5M2MwLjQ0My0wLjE4NywwLjczMy0wLjYyMywwLjczMy0xLjEwM1YxMC4wMiYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtDMTYuNzY0LDkuNTM5LDE2LjQ3NCw5LjEwMywxNi4wMzEsOC45MTd6IE0xNC4zNzIsMTkuMjI4bC0xLjQxOC'+
			'0xLjM4OGMtMC4yMjUtMC4yMjEtMC41MjItMC4zNDItMC44MzctMC4zNDJoLTEuNTN2LTIuOTA0aDEuNTMxJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MwLjMxNSwwLDAuNjEyLTAuMTIxLDAuODM3LTAuMzQxbDEuNDE4LTEuMzg4VjE5LjIyOHogTTE2LDMuNUM5LjA5NiwzLjUsMy41LDkuMDk2LDMuNSwxNmMwLDYuOTAzLDUuNTk2LDEyLjQ5OSwxMi41LDEyLjUmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7YzYuOTAzLTAuMDAxLDEyLjQ5OS01LjU5NywxMi41LTEyLjVDMjguNDk5LDkuMDk2LDIyLjkwMywzLjUsMTYsMy41eiBNMjMuMTQ3LDIzLjE0NmMtMS44MzMsMS44MzEtNC4zNTMsMi45Ni03'+
			'LjE0NywyLjk2JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O3MtNS4zMTQtMS4xMjktNy4xNDYtMi45NkM3LjAyMiwyMS4zMTMsNS44OTQsMTguNzk1LDUuODkzLDE2YzAuMDAxLTIuNzk1LDEuMTI5LTUuMzE0LDIuOTYxLTcuMTQ3JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MxLjgzMy0xLjgzMSw0LjM1Mi0yLjk2LDcuMTQ2LTIuOTZjMi43OTUsMCw1LjMxMywxLjEzLDcuMTQ3LDIuOTZjMS44MzEsMS44MzMsMi45NTksNC4zNTIsMi45Niw3LjE0NyYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtDMjYuMTA2LDE4Ljc5NSwyNC45NzksMjEuMzEzLDIzLjE0NywyMy4xNDZ6IE0yMi4zMjcsMTYuMDMxbD'+
			'EuNDg1LTEuNDg1YzAuMzYzLTAuMzY0LDAuMzYzLTAuOTUzLDAtMS4zMTYmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7Yy0wLjM2NC0wLjM2My0wLjk1My0wLjM2My0xLjMxNSwwbC0xLjQ4NSwxLjQ4NWwtMS40ODUtMS40ODVjLTAuMzYzLTAuMzYzLTAuOTUyLTAuMzYzLTEuMzE2LDBjLTAuMzYyLDAuMzY0LTAuMzYyLDAuOTUzLDAsMS4zMTYmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7bDEuNDg1LDEuNDg1bC0xLjQ4NSwxLjQ4NWMtMC4zNjIsMC4zNjItMC4zNjIsMC45NTIsMCwxLjMxNWMwLjE4MywwLjE4MiwwLjQyLDAuMjcyLDAuNjU4LDAuMjcyczAuNDc3LTAuMDkxLDAuNjU4LTAuMjcyJiN4'+
			'ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2wxLjQ4NS0xLjQ4NWwxLjQ4NSwxLjQ4NWMwLjE4MSwwLjE4MiwwLjQxOSwwLjI3MiwwLjY1NywwLjI3MnMwLjQ3Ny0wLjA5MSwwLjY1OC0wLjI3MmMwLjM2My0wLjM2MywwLjM2My0wLjk1MywwLTEuMzE1JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O0wyMi4zMjcsMTYuMDMxeiIvPgogPC9nPgogPGcgZmlsbC1vcGFjaXR5PSIxIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNiwxNikgc2NhbGUoMS4xKSB0cmFuc2xhdGUoLTE2LC0xNikiIHN0cm9rZS13aWR0aD0iMC4yIiBmaWxsPSIjMDAwMDAwIiBzdHJva2U9IiMwMDAwMDAiPgogIDxwYXRoIGQ9Ik0xNi4wMz'+
			'EsOC45MTdjLTAuNDQyLTAuMTg2LTAuOTU4LTAuMDg3LTEuMywwLjI0OGwtMy4xMDMsMy4wMzdsLTIuMjM4LDBjLTAuMzE1LDAtMC42MjQsMC4xMjctMC44NDYsMC4zNSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjLTAuMjIzLDAuMjIzLTAuMzUxLDAuNTMxLTAuMzUxLDAuODQ2djUuMjk2YzAsMC4zMTUsMC4xMjgsMC42MjMsMC4zNTEsMC44NDdjMC4yMjMsMC4yMjIsMC41MzEsMC4zNTEsMC44NDYsMC4zNTFoMi4yMzgmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7bDMuMTAzLDMuMDM3YzAuMjI3LDAuMjIzLDAuNTMsMC4zNDEsMC44MzgsMC4zNDFjMC4xNTYsMCwwLjMxMy0wLjAzLDAuNDYyLTAu'+
			'MDkzYzAuNDQzLTAuMTg3LDAuNzMzLTAuNjIzLDAuNzMzLTEuMTAzVjEwLjAyJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O0MxNi43NjQsOS41MzksMTYuNDc0LDkuMTAzLDE2LjAzMSw4LjkxN3ogTTE0LjM3MiwxOS4yMjhsLTEuNDE4LTEuMzg4Yy0wLjIyNS0wLjIyMS0wLjUyMi0wLjM0Mi0wLjgzNy0wLjM0MmgtMS41M3YtMi45MDRoMS41MzEmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7YzAuMzE1LDAsMC42MTItMC4xMjEsMC44MzctMC4zNDFsMS40MTgtMS4zODhWMTkuMjI4eiBNMTYsMy41QzkuMDk2LDMuNSwzLjUsOS4wOTYsMy41LDE2YzAsNi45MDMsNS41OTYsMTIuNDk5LDEyLjUsMTIuNS'+
			'YjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjNi45MDMtMC4wMDEsMTIuNDk5LTUuNTk3LDEyLjUtMTIuNUMyOC40OTksOS4wOTYsMjIuOTAzLDMuNSwxNiwzLjV6IE0yMy4xNDcsMjMuMTQ2Yy0xLjgzMywxLjgzMS00LjM1MywyLjk2LTcuMTQ3LDIuOTYmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7cy01LjMxNC0xLjEyOS03LjE0Ni0yLjk2QzcuMDIyLDIxLjMxMyw1Ljg5NCwxOC43OTUsNS44OTMsMTZjMC4wMDEtMi43OTUsMS4xMjktNS4zMTQsMi45NjEtNy4xNDcmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7YzEuODMzLTEuODMxLDQuMzUyLTIuOTYsNy4xNDYtMi45NmMyLjc5NSwwLDUuMzEzLDEu'+
			'MTMsNy4xNDcsMi45NmMxLjgzMSwxLjgzMywyLjk1OSw0LjM1MiwyLjk2LDcuMTQ3JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O0MyNi4xMDYsMTguNzk1LDI0Ljk3OSwyMS4zMTMsMjMuMTQ3LDIzLjE0NnogTTIyLjMyNywxNi4wMzFsMS40ODUtMS40ODVjMC4zNjMtMC4zNjQsMC4zNjMtMC45NTMsMC0xLjMxNiYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjLTAuMzY0LTAuMzYzLTAuOTUzLTAuMzYzLTEuMzE1LDBsLTEuNDg1LDEuNDg1bC0xLjQ4NS0xLjQ4NWMtMC4zNjMtMC4zNjMtMC45NTItMC4zNjMtMS4zMTYsMGMtMC4zNjIsMC4zNjQtMC4zNjIsMC45NTMsMCwxLjMxNiYjeGQ7JiN4YTsmI3'+
			'g5OyYjeDk7JiN4OTtsMS40ODUsMS40ODVsLTEuNDg1LDEuNDg1Yy0wLjM2MiwwLjM2Mi0wLjM2MiwwLjk1MiwwLDEuMzE1YzAuMTgzLDAuMTgyLDAuNDIsMC4yNzIsMC42NTgsMC4yNzJzMC40NzctMC4wOTEsMC42NTgtMC4yNzImI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7bDEuNDg1LTEuNDg1bDEuNDg1LDEuNDg1YzAuMTgxLDAuMTgyLDAuNDE5LDAuMjcyLDAuNjU3LDAuMjcyczAuNDc3LTAuMDkxLDAuNjU4LTAuMjcyYzAuMzYzLTAuMzYzLDAuMzYzLTAuOTUzLDAtMS4zMTUmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7TDIyLjMyNywxNi4wMzF6Ii8+CiA8L2c+Cjwvc3ZnPgo=';
		me._mute__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="mute";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='bottom : 1px;';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._mute.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._mute.onclick=function (e) {
			player.setVolume("_main",0);
			me._mute.style[domTransition]='none';
			me._mute.style.visibility='hidden';
			me._mute.ggVisible=false;
			me._unmute.style[domTransition]='none';
			me._unmute.style.visibility=(Number(me._unmute.style.opacity)>0||!me._unmute.style.opacity)?'inherit':'hidden';
			me._unmute.ggVisible=true;
		}
		me._mute.onmouseover=function (e) {
			me._mute__img.style.visibility='hidden';
			me._mute__imgo.style.visibility='inherit';
			me.elementMouseOver['mute']=true;
			me._tt_mute.logicBlock_visible();
		}
		me._mute.onmouseout=function (e) {
			me._mute__img.style.visibility='inherit';
			me._mute__imgo.style.visibility='hidden';
			me.elementMouseOver['mute']=false;
			me._tt_mute.logicBlock_visible();
		}
		me._mute.ontouchend=function (e) {
			me.elementMouseOver['mute']=false;
			me._tt_mute.logicBlock_visible();
		}
		me._mute.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		el=me._tt_mute=document.createElement('div');
		els=me._tt_mute__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt_mute";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='z-index: 100;';
		hs+='height : 20px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : 32px;';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		hs+='text-shadow: 1px 1px 4px #000000;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="Mudo";
		el.appendChild(els);
		me._tt_mute.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._tt_mute.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['mute'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._tt_mute.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._tt_mute.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._tt_mute.style[domTransition]='';
				if (me._tt_mute.ggCurrentLogicStateVisible == 0) {
					me._tt_mute.style.visibility=(Number(me._tt_mute.style.opacity)>0||!me._tt_mute.style.opacity)?'inherit':'hidden';
					me._tt_mute.ggVisible=true;
				}
				else {
					me._tt_mute.style.visibility="hidden";
					me._tt_mute.ggVisible=false;
				}
			}
		}
		me._tt_mute.logicBlock_text = function() {
			var newLogicStateText;
			if (
				((player.getVariableValue('POR') == true))
			)
			{
				newLogicStateText = 0;
			}
			else if (
				((player.getVariableValue('ENG') == true))
			)
			{
				newLogicStateText = 1;
			}
			else if (
				((player.getVariableValue('ESP') == true))
			)
			{
				newLogicStateText = 2;
			}
			else {
				newLogicStateText = -1;
			}
			if (me._tt_mute.ggCurrentLogicStateText != newLogicStateText) {
				me._tt_mute.ggCurrentLogicStateText = newLogicStateText;
				me._tt_mute.style[domTransition]='';
				if (me._tt_mute.ggCurrentLogicStateText == 0) {
					me._tt_mute.ggText="Mudo";
					me._tt_mute__text.innerHTML=me._tt_mute.ggText;
					if (me._tt_mute.ggUpdateText) {
					me._tt_mute.ggUpdateText=function() {
						var hs="Mudo";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._tt_mute.ggUpdatePosition) me._tt_mute.ggUpdatePosition();
					}
				}
				else if (me._tt_mute.ggCurrentLogicStateText == 1) {
					me._tt_mute.ggText="Mute";
					me._tt_mute__text.innerHTML=me._tt_mute.ggText;
					if (me._tt_mute.ggUpdateText) {
					me._tt_mute.ggUpdateText=function() {
						var hs="Mute";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._tt_mute.ggUpdatePosition) me._tt_mute.ggUpdatePosition();
					}
				}
				else if (me._tt_mute.ggCurrentLogicStateText == 2) {
					me._tt_mute.ggText="Mudo";
					me._tt_mute__text.innerHTML=me._tt_mute.ggText;
					if (me._tt_mute.ggUpdateText) {
					me._tt_mute.ggUpdateText=function() {
						var hs="Mudo";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._tt_mute.ggUpdatePosition) me._tt_mute.ggUpdatePosition();
					}
				}
				else {
					me._tt_mute.ggText="Mudo";
					me._tt_mute__text.innerHTML=me._tt_mute.ggText;
					if (me._tt_mute.ggUpdateText) {
					me._tt_mute.ggUpdateText=function() {
						var hs="Mudo";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._tt_mute.ggUpdatePosition) me._tt_mute.ggUpdatePosition();
					}
				}
			}
		}
		me._tt_mute.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((98-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me._mute.appendChild(me._tt_mute);
		me._button_mute.appendChild(me._mute);
		me.divSkin.appendChild(me._button_mute);
		el=me._button_fullscreen=document.createElement('div');
		el.ggId="button_fullscreen";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 32px;';
		hs+='position : absolute;';
		hs+='right : 10px;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._button_fullscreen.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._button_fullscreen.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getViewerSize().width < 1084))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._button_fullscreen.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._button_fullscreen.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._button_fullscreen.style[domTransition]='right 0s, top 0s';
				if (me._button_fullscreen.ggCurrentLogicStatePosition == 0) {
					me._button_fullscreen.style.right='3px';
					me._button_fullscreen.style.top='20px';
				}
				else {
					me._button_fullscreen.style.right='10px';
					me._button_fullscreen.style.top='0px';
				}
			}
		}
		me._button_fullscreen.onclick=function (e) {
			player.toggleFullscreen();
		}
		me._button_fullscreen.onmouseover=function (e) {
			me.elementMouseOver['button_fullscreen']=true;
			me._tt_fullscreen.logicBlock_visible();
		}
		me._button_fullscreen.onmouseout=function (e) {
			me.elementMouseOver['button_fullscreen']=false;
			me._tt_fullscreen.logicBlock_visible();
		}
		me._button_fullscreen.ontouchend=function (e) {
			me.elementMouseOver['button_fullscreen']=false;
			me._tt_fullscreen.logicBlock_visible();
		}
		me._button_fullscreen.ggUpdatePosition=function (useTransition) {
		}
		el=me._button_image_normalscreen=document.createElement('div');
		els=me._button_image_normalscreen__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEgQmFzaWMvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEtYmFzaWMuZHRkJz4KPCEtLSBHYXJkZW4gR25vbWUgU29mdHdhcmUgLSBTa2luIEJ1dHRvbnMgLS0+CjxzdmcgdmVyc2lvbj0iMS4xIiBiYXNlUHJvZmlsZT0iYmFzaWMiIHg9IjBweCIgd2lkdGg9IjMycHgiIHk9IjBweCIgaWQ9IkxheWVyXzEiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgMzIgMz'+
			'IiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgaGVpZ2h0PSIzMnB4Ij4KIDxnIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2U9IiMzQzNDM0MiIG9wYWNpdHk9IjAuNCI+CiAgPHBhdGggZD0iTTE2LDE0LjgwNEg0LjY5N2MtMC4zMTUsMC0wLjYyNCwwLjEyOC0wLjg0NiwwLjM1MUMzLjYyNywxNS4zNzcsMy41LDE1LjY4NiwzLjUsMTZ2OC4xMiYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAsMC4zMTUsMC4xMjcsMC42MjQsMC4zNSwwLjg0NmMwLjIyMywwLjIyNCwwLjUzMSwwLjM1MSwwLjg0NiwwLjM1MUgxNmMwLjMyLDAsMC42Mi0wLjEyNCwwLjg0'+
			'Ni0wLjM1MSYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAuMjI2LTAuMjI2LDAuMzUtMC41MjUsMC4zNS0wLjg0NlYxNmMwLTAuMzE0LTAuMTI4LTAuNjIzLTAuMzUtMC44NDZDMTYuNjIzLDE0LjkzMiwxNi4zMTQsMTQuODA0LDE2LDE0LjgwNHogTTE0LjgwNCwyMi45MjQmI3hkOyYjeGE7JiN4OTsmI3g5O0g1Ljg5M3YtNS43MjhoOC45MTFWMjIuOTI0eiBNNC42OTcsMTMuOTk4YzAuNjYxLDAsMS4xOTYtMC41MzYsMS4xOTYtMS4xOTZ2LTAuMzA4YzAtMC42Ni0wLjUzNi0xLjE5NS0xLjE5Ni0xLjE5NSYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjY2MSwwLTEuMTk2LDAuNTM1LTEuMTk2LDEuMTk1djAuMz'+
			'A4QzMuNSwxMy40NjIsNC4wMzYsMTMuOTk4LDQuNjk3LDEzLjk5OHogTTQuNjk3LDEwLjQ3N2MwLjY2MSwwLDEuMTk3LTAuNTM2LDEuMTk3LTEuMTk3aDAmI3hkOyYjeGE7JiN4OTsmI3g5O1Y5LjA3NmMwLjY2MSwwLDEuMTk2LTAuNTM1LDEuMTk2LTEuMTk2YzAtMC42Ni0wLjUzNi0xLjE5Ni0xLjE5Ni0xLjE5Nkg0LjY5N2MtMC4zMTUsMC0wLjYyMywwLjEyNy0wLjg0NiwwLjM1JiN4ZDsmI3hhOyYjeDk7JiN4OTtDMy42MjgsNy4yNTcsMy41LDcuNTY0LDMuNSw3Ljg4djEuMzk5QzMuNSw5Ljk0LDQuMDM2LDEwLjQ3Nyw0LjY5NywxMC40Nzd6IE0xOS4yODksOS4wNzZoMC4yNDJjMC42NjEsMCwx'+
			'LjE5Ni0wLjUzNiwxLjE5Ni0xLjE5NiYjeGQ7JiN4YTsmI3g5OyYjeDk7cy0wLjUzNS0xLjE5Ni0xLjE5Ni0xLjE5NmgtMC4yNDJjLTAuNjYxLDAtMS4xOTcsMC41MzYtMS4xOTcsMS4xOTZTMTguNjI4LDkuMDc2LDE5LjI4OSw5LjA3NnogTTE2LjEyMiw2LjY4NGgtMC4yNDMmI3hkOyYjeGE7JiN4OTsmI3g5O2MtMC42NjEsMC0xLjE5NiwwLjUzNi0xLjE5NiwxLjE5NnMwLjUzNiwxLjE5NiwxLjE5NiwxLjE5NmgwLjI0M2MwLjY2MSwwLDEuMTk3LTAuNTM2LDEuMTk3LTEuMTk2UzE2Ljc4Miw2LjY4NCwxNi4xMjIsNi42ODR6JiN4ZDsmI3hhOyYjeDk7JiN4OTsgTTIyLjY5OCw5LjA3NmgwLjI0M2'+
			'MwLjY2LDAsMS4xOTYtMC41MzYsMS4xOTYtMS4xOTZzLTAuNTM2LTEuMTk2LTEuMTk2LTEuMTk2aC0wLjI0M2MtMC42NiwwLTEuMTk2LDAuNTM2LTEuMTk2LDEuMTk2JiN4ZDsmI3hhOyYjeDk7JiN4OTtTMjIuMDM4LDkuMDc2LDIyLjY5OCw5LjA3NnogTTkuMDYsOS4wNzZoMC4yNDJjMC42NiwwLDEuMTk2LTAuNTM2LDEuMTk2LTEuMTk2UzkuOTYyLDYuNjg0LDkuMzAyLDYuNjg0SDkuMDYmI3hkOyYjeGE7JiN4OTsmI3g5O2MtMC42NjEsMC0xLjE5NywwLjUzNi0xLjE5NywxLjE5NlM4LjM5OSw5LjA3Niw5LjA2LDkuMDc2eiBNMTIuNDY5LDkuMDc2aDAuMjQzYzAuNjYxLDAsMS4xOTYtMC41MzYs'+
			'MS4xOTYtMS4xOTYmI3hkOyYjeGE7JiN4OTsmI3g5O3MtMC41MzYtMS4xOTYtMS4xOTYtMS4xOTZoLTAuMjQzYy0wLjY2MSwwLTEuMTk2LDAuNTM2LTEuMTk2LDEuMTk2UzExLjgwOCw5LjA3NiwxMi40NjksOS4wNzZ6IE0yNy4zMDQsMTEuMTExJiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTAuNjYxLDAtMS4xOTYsMC41MzUtMS4xOTYsMS4xOTZ2MC4zMDhjMCwwLjY2LDAuNTM1LDEuMTk2LDEuMTk2LDEuMTk2YzAuNjYsMCwxLjE5Ni0wLjUzNiwxLjE5Ni0xLjE5NnYtMC4zMDgmI3hkOyYjeGE7JiN4OTsmI3g5O0MyOC41LDExLjY0NiwyNy45NjQsMTEuMTExLDI3LjMwNCwxMS4xMTF6IE0yNy4zMDQsMT'+
			'QuNjVjLTAuNjYxLDAtMS4xOTYsMC41MzUtMS4xOTYsMS4xOTZ2MC4zMDhjMCwwLjY2LDAuNTM1LDEuMTk2LDEuMTk2LDEuMTk2JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC42NiwwLDEuMTk2LTAuNTM2LDEuMTk2LTEuMTk2di0wLjMwOEMyOC41LDE1LjE4NiwyNy45NjQsMTQuNjUsMjcuMzA0LDE0LjY1eiBNMjcuMzA0LDIxLjcyOGMtMC42NjEsMC0xLjE5NiwwLjUzNS0xLjE5NiwxLjE5NiYjeGQ7JiN4YTsmI3g5OyYjeDk7aC0wLjIzNGMtMC42NiwwLTEuMTk2LDAuNTM2LTEuMTk2LDEuMTk2YzAsMC42NjEsMC41MzYsMS4xOTYsMS4xOTYsMS4xOTZoMS40MzFjMC4zMTQsMCwwLjYyMy0wLjEyOCww'+
			'Ljg0Ni0wLjM1MSYjeGQ7JiN4YTsmI3g5OyYjeDk7czAuMzUxLTAuNTMsMC4zNTEtMC44NDZ2LTEuMTk2QzI4LjUsMjIuMjY0LDI3Ljk2NCwyMS43MjgsMjcuMzA0LDIxLjcyOHogTTI3LjMwNCwxOC4xODljLTAuNjYxLDAtMS4xOTYsMC41MzYtMS4xOTYsMS4xOTZ2MC4zMDgmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLDAuNjYsMC41MzUsMS4xOTYsMS4xOTYsMS4xOTZjMC42NiwwLDEuMTk2LTAuNTM2LDEuMTk2LTEuMTk2di0wLjMwOEMyOC41LDE4LjcyNiwyNy45NjQsMTguMTg5LDI3LjMwNCwxOC4xODl6IE0yOC4xNDksNy4wMzMmI3hkOyYjeGE7JiN4OTsmI3g5O2MtMC4yMjMtMC4yMjItMC41Mz'+
			'EtMC4zNS0wLjg0Ni0wLjM1aC0xLjE5NmMtMC42NjEsMC0xLjE5NiwwLjUzNi0xLjE5NiwxLjE5NmMwLDAuNjYxLDAuNTM1LDEuMTk2LDEuMTk2LDEuMTk2JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMCwwLjY2MSwwLjUzNSwxLjE5NiwxLjE5NiwxLjE5NmMwLjY2LDAsMS4xOTYtMC41MzUsMS4xOTYtMS4xOTZWNy44OEMyOC41LDcuNTY0LDI4LjM3Miw3LjI1NywyOC4xNDksNy4wMzN6IE0yMS44NjMsMTMuMjYxJiN4ZDsmI3hhOyYjeDk7JiN4OTtsMC4yMjEtMC4xNDdjMC40MjgtMC4yODUsMC41NDItMC44NjMsMC4yNTctMS4yOTFjLTAuMjg2LTAuNDI4LTAuODYzLTAuNTQyLTEuMjkxLTAuMjU2bC0w'+
			'LjIyMSwwLjE0NiYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjQyNywwLjI4Ni0wLjU0MiwwLjg2My0wLjI1NywxLjI5MWMwLjE4LDAuMjY5LDAuNDc0LDAuNDE0LDAuNzc0LDAuNDE0QzIxLjUyNCwxMy40MTgsMjEuNzA0LDEzLjM2NywyMS44NjMsMTMuMjYxeiYjeGQ7JiN4YTsmI3g5OyYjeDk7IE0xOS4zMjksMjIuOTI0aC0wLjI0MmMtMC42NjEsMC0xLjE5NiwwLjUzNi0xLjE5NiwxLjE5NmMwLDAuNjYxLDAuNTM1LDEuMTk2LDEuMTk2LDEuMTk2aDAuMjQyYzAuNjYxLDAsMS4xOTYtMC41MzUsMS4xOTYtMS4xOTYmI3hkOyYjeGE7JiN4OTsmI3g5O0MyMC41MjUsMjMuNDYsMTkuOTksMjIuOTI0LD'+
			'E5LjMyOSwyMi45MjR6IE0xOC41ODQsMTUuMjY0YzAuMTc4LDAsMC4zNTctMC4wNTEsMC41MTctMC4xNTdsMC4yMjEtMC4xNDcmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLjQyOC0wLjI4NSwwLjU0Mi0wLjg2MywwLjI1Ny0xLjI5Yy0wLjI4NS0wLjQyOC0wLjg2My0wLjU0Mi0xLjI5MS0wLjI1N2wtMC4yMjIsMC4xNDdjLTAuNDI3LDAuMjg2LTAuNTQyLDAuODYzLTAuMjU2LDEuMjkxJiN4ZDsmI3hhOyYjeDk7JiN4OTtDMTcuOTg5LDE1LjExOSwxOC4yODMsMTUuMjY0LDE4LjU4NCwxNS4yNjR6IE0yMi43MzksMjIuOTI0aC0wLjI0MmMtMC42NjEsMC0xLjE5NiwwLjUzNi0xLjE5NiwxLjE5NiYjeGQ7'+
			'JiN4YTsmI3g5OyYjeDk7YzAsMC42NjEsMC41MzUsMS4xOTYsMS4xOTYsMS4xOTZoMC4yNDJjMC42NiwwLDEuMTk2LTAuNTM1LDEuMTk2LTEuMTk2QzIzLjkzNiwyMy40NiwyMy4zOTksMjIuOTI0LDIyLjczOSwyMi45MjR6IE0yNS4xMDQsOS45NzYmI3hkOyYjeGE7JiN4OTsmI3g5O2MtMC4yODUtMC40MjctMC44NjMtMC41NDItMS4yOTEtMC4yNTZsLTAuMjIxLDAuMTQ3Yy0wLjQyOCwwLjI4NS0wLjU0MiwwLjg2My0wLjI1NiwxLjI5YzAuMTc5LDAuMjY5LDAuNDc0LDAuNDE0LDAuNzc0LDAuNDE0JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC4xNzgsMCwwLjM1Ny0wLjA1MSwwLjUxNi0wLjE1NmwwLj'+
			'IyMi0wLjE0OEMyNS4yNzQsMTAuOTgxLDI1LjM4OSwxMC40MDMsMjUuMTA0LDkuOTc2eiIvPgogPC9nPgogPGcgZmlsbC1vcGFjaXR5PSIxIiBzdHJva2Utd2lkdGg9IjAuMiIgZmlsbD0iIzAwMDAwMCIgc3Ryb2tlPSIjMDAwMDAwIj4KICA8cGF0aCBkPSJNMTYsMTQuODA0SDQuNjk3Yy0wLjMxNSwwLTAuNjI0LDAuMTI4LTAuODQ2LDAuMzUxQzMuNjI3LDE1LjM3NywzLjUsMTUuNjg2LDMuNSwxNnY4LjEyJiN4ZDsmI3hhOyYjeDk7JiN4OTtjMCwwLjMxNSwwLjEyNywwLjYyNCwwLjM1LDAuODQ2YzAuMjIzLDAuMjI0LDAuNTMxLDAuMzUxLDAuODQ2LDAuMzUxSDE2YzAuMzIsMCwwLjYyLTAuMTI0'+
			'LDAuODQ2LTAuMzUxJiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC4yMjYtMC4yMjYsMC4zNS0wLjUyNSwwLjM1LTAuODQ2VjE2YzAtMC4zMTQtMC4xMjgtMC42MjMtMC4zNS0wLjg0NkMxNi42MjMsMTQuOTMyLDE2LjMxNCwxNC44MDQsMTYsMTQuODA0eiBNMTQuODA0LDIyLjkyNCYjeGQ7JiN4YTsmI3g5OyYjeDk7SDUuODkzdi01LjcyOGg4LjkxMVYyMi45MjR6IE00LjY5NywxMy45OThjMC42NjEsMCwxLjE5Ni0wLjUzNiwxLjE5Ni0xLjE5NnYtMC4zMDhjMC0wLjY2LTAuNTM2LTEuMTk1LTEuMTk2LTEuMTk1JiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTAuNjYxLDAtMS4xOTYsMC41MzUtMS4xOTYsMS4xOT'+
			'V2MC4zMDhDMy41LDEzLjQ2Miw0LjAzNiwxMy45OTgsNC42OTcsMTMuOTk4eiBNNC42OTcsMTAuNDc3YzAuNjYxLDAsMS4xOTctMC41MzYsMS4xOTctMS4xOTdoMCYjeGQ7JiN4YTsmI3g5OyYjeDk7VjkuMDc2YzAuNjYxLDAsMS4xOTYtMC41MzUsMS4xOTYtMS4xOTZjMC0wLjY2LTAuNTM2LTEuMTk2LTEuMTk2LTEuMTk2SDQuNjk3Yy0wLjMxNSwwLTAuNjIzLDAuMTI3LTAuODQ2LDAuMzUmI3hkOyYjeGE7JiN4OTsmI3g5O0MzLjYyOCw3LjI1NywzLjUsNy41NjQsMy41LDcuODh2MS4zOTlDMy41LDkuOTQsNC4wMzYsMTAuNDc3LDQuNjk3LDEwLjQ3N3ogTTE5LjI4OSw5LjA3NmgwLjI0MmMwLjY2'+
			'MSwwLDEuMTk2LTAuNTM2LDEuMTk2LTEuMTk2JiN4ZDsmI3hhOyYjeDk7JiN4OTtzLTAuNTM1LTEuMTk2LTEuMTk2LTEuMTk2aC0wLjI0MmMtMC42NjEsMC0xLjE5NywwLjUzNi0xLjE5NywxLjE5NlMxOC42MjgsOS4wNzYsMTkuMjg5LDkuMDc2eiBNMTYuMTIyLDYuNjg0aC0wLjI0MyYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjY2MSwwLTEuMTk2LDAuNTM2LTEuMTk2LDEuMTk2czAuNTM2LDEuMTk2LDEuMTk2LDEuMTk2aDAuMjQzYzAuNjYxLDAsMS4xOTctMC41MzYsMS4xOTctMS4xOTZTMTYuNzgyLDYuNjg0LDE2LjEyMiw2LjY4NHomI3hkOyYjeGE7JiN4OTsmI3g5OyBNMjIuNjk4LDkuMDc2aD'+
			'AuMjQzYzAuNjYsMCwxLjE5Ni0wLjUzNiwxLjE5Ni0xLjE5NnMtMC41MzYtMS4xOTYtMS4xOTYtMS4xOTZoLTAuMjQzYy0wLjY2LDAtMS4xOTYsMC41MzYtMS4xOTYsMS4xOTYmI3hkOyYjeGE7JiN4OTsmI3g5O1MyMi4wMzgsOS4wNzYsMjIuNjk4LDkuMDc2eiBNOS4wNiw5LjA3NmgwLjI0MmMwLjY2LDAsMS4xOTYtMC41MzYsMS4xOTYtMS4xOTZTOS45NjIsNi42ODQsOS4zMDIsNi42ODRIOS4wNiYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjY2MSwwLTEuMTk3LDAuNTM2LTEuMTk3LDEuMTk2UzguMzk5LDkuMDc2LDkuMDYsOS4wNzZ6IE0xMi40NjksOS4wNzZoMC4yNDNjMC42NjEsMCwxLjE5Ni0w'+
			'LjUzNiwxLjE5Ni0xLjE5NiYjeGQ7JiN4YTsmI3g5OyYjeDk7cy0wLjUzNi0xLjE5Ni0xLjE5Ni0xLjE5NmgtMC4yNDNjLTAuNjYxLDAtMS4xOTYsMC41MzYtMS4xOTYsMS4xOTZTMTEuODA4LDkuMDc2LDEyLjQ2OSw5LjA3NnogTTI3LjMwNCwxMS4xMTEmI3hkOyYjeGE7JiN4OTsmI3g5O2MtMC42NjEsMC0xLjE5NiwwLjUzNS0xLjE5NiwxLjE5NnYwLjMwOGMwLDAuNjYsMC41MzUsMS4xOTYsMS4xOTYsMS4xOTZjMC42NiwwLDEuMTk2LTAuNTM2LDEuMTk2LTEuMTk2di0wLjMwOCYjeGQ7JiN4YTsmI3g5OyYjeDk7QzI4LjUsMTEuNjQ2LDI3Ljk2NCwxMS4xMTEsMjcuMzA0LDExLjExMXogTTI3Lj'+
			'MwNCwxNC42NWMtMC42NjEsMC0xLjE5NiwwLjUzNS0xLjE5NiwxLjE5NnYwLjMwOGMwLDAuNjYsMC41MzUsMS4xOTYsMS4xOTYsMS4xOTYmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLjY2LDAsMS4xOTYtMC41MzYsMS4xOTYtMS4xOTZ2LTAuMzA4QzI4LjUsMTUuMTg2LDI3Ljk2NCwxNC42NSwyNy4zMDQsMTQuNjV6IE0yNy4zMDQsMjEuNzI4Yy0wLjY2MSwwLTEuMTk2LDAuNTM1LTEuMTk2LDEuMTk2JiN4ZDsmI3hhOyYjeDk7JiN4OTtoLTAuMjM0Yy0wLjY2LDAtMS4xOTYsMC41MzYtMS4xOTYsMS4xOTZjMCwwLjY2MSwwLjUzNiwxLjE5NiwxLjE5NiwxLjE5NmgxLjQzMWMwLjMxNCwwLDAuNjIzLTAu'+
			'MTI4LDAuODQ2LTAuMzUxJiN4ZDsmI3hhOyYjeDk7JiN4OTtzMC4zNTEtMC41MywwLjM1MS0wLjg0NnYtMS4xOTZDMjguNSwyMi4yNjQsMjcuOTY0LDIxLjcyOCwyNy4zMDQsMjEuNzI4eiBNMjcuMzA0LDE4LjE4OWMtMC42NjEsMC0xLjE5NiwwLjUzNi0xLjE5NiwxLjE5NnYwLjMwOCYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAsMC42NiwwLjUzNSwxLjE5NiwxLjE5NiwxLjE5NmMwLjY2LDAsMS4xOTYtMC41MzYsMS4xOTYtMS4xOTZ2LTAuMzA4QzI4LjUsMTguNzI2LDI3Ljk2NCwxOC4xODksMjcuMzA0LDE4LjE4OXogTTI4LjE0OSw3LjAzMyYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjIyMy0wLjIyMi'+
			'0wLjUzMS0wLjM1LTAuODQ2LTAuMzVoLTEuMTk2Yy0wLjY2MSwwLTEuMTk2LDAuNTM2LTEuMTk2LDEuMTk2YzAsMC42NjEsMC41MzUsMS4xOTYsMS4xOTYsMS4xOTYmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLDAuNjYxLDAuNTM1LDEuMTk2LDEuMTk2LDEuMTk2YzAuNjYsMCwxLjE5Ni0wLjUzNSwxLjE5Ni0xLjE5NlY3Ljg4QzI4LjUsNy41NjQsMjguMzcyLDcuMjU3LDI4LjE0OSw3LjAzM3ogTTIxLjg2MywxMy4yNjEmI3hkOyYjeGE7JiN4OTsmI3g5O2wwLjIyMS0wLjE0N2MwLjQyOC0wLjI4NSwwLjU0Mi0wLjg2MywwLjI1Ny0xLjI5MWMtMC4yODYtMC40MjgtMC44NjMtMC41NDItMS4yOTEtMC4y'+
			'NTZsLTAuMjIxLDAuMTQ2JiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTAuNDI3LDAuMjg2LTAuNTQyLDAuODYzLTAuMjU3LDEuMjkxYzAuMTgsMC4yNjksMC40NzQsMC40MTQsMC43NzQsMC40MTRDMjEuNTI0LDEzLjQxOCwyMS43MDQsMTMuMzY3LDIxLjg2MywxMy4yNjF6JiN4ZDsmI3hhOyYjeDk7JiN4OTsgTTE5LjMyOSwyMi45MjRoLTAuMjQyYy0wLjY2MSwwLTEuMTk2LDAuNTM2LTEuMTk2LDEuMTk2YzAsMC42NjEsMC41MzUsMS4xOTYsMS4xOTYsMS4xOTZoMC4yNDJjMC42NjEsMCwxLjE5Ni0wLjUzNSwxLjE5Ni0xLjE5NiYjeGQ7JiN4YTsmI3g5OyYjeDk7QzIwLjUyNSwyMy40NiwxOS45OSwyMi'+
			'45MjQsMTkuMzI5LDIyLjkyNHogTTE4LjU4NCwxNS4yNjRjMC4xNzgsMCwwLjM1Ny0wLjA1MSwwLjUxNy0wLjE1N2wwLjIyMS0wLjE0NyYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAuNDI4LTAuMjg1LDAuNTQyLTAuODYzLDAuMjU3LTEuMjljLTAuMjg1LTAuNDI4LTAuODYzLTAuNTQyLTEuMjkxLTAuMjU3bC0wLjIyMiwwLjE0N2MtMC40MjcsMC4yODYtMC41NDIsMC44NjMtMC4yNTYsMS4yOTEmI3hkOyYjeGE7JiN4OTsmI3g5O0MxNy45ODksMTUuMTE5LDE4LjI4MywxNS4yNjQsMTguNTg0LDE1LjI2NHogTTIyLjczOSwyMi45MjRoLTAuMjQyYy0wLjY2MSwwLTEuMTk2LDAuNTM2LTEuMTk2LDEuMTk2'+
			'JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMCwwLjY2MSwwLjUzNSwxLjE5NiwxLjE5NiwxLjE5NmgwLjI0MmMwLjY2LDAsMS4xOTYtMC41MzUsMS4xOTYtMS4xOTZDMjMuOTM2LDIzLjQ2LDIzLjM5OSwyMi45MjQsMjIuNzM5LDIyLjkyNHogTTI1LjEwNCw5Ljk3NiYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjI4NS0wLjQyNy0wLjg2My0wLjU0Mi0xLjI5MS0wLjI1NmwtMC4yMjEsMC4xNDdjLTAuNDI4LDAuMjg1LTAuNTQyLDAuODYzLTAuMjU2LDEuMjljMC4xNzksMC4yNjksMC40NzQsMC40MTQsMC43NzQsMC40MTQmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLjE3OCwwLDAuMzU3LTAuMDUxLDAuNTE2LTAuMT'+
			'U2bDAuMjIyLTAuMTQ4QzI1LjI3NCwxMC45ODEsMjUuMzg5LDEwLjQwMywyNS4xMDQsOS45NzZ6Ii8+CiA8L2c+Cjwvc3ZnPgo=';
		me._button_image_normalscreen__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._button_image_normalscreen__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEgQmFzaWMvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEtYmFzaWMuZHRkJz4KPCEtLSBHYXJkZW4gR25vbWUgU29mdHdhcmUgLSBTa2luIEJ1dHRvbnMgLS0+CjxzdmcgdmVyc2lvbj0iMS4xIiBiYXNlUHJvZmlsZT0iYmFzaWMiIHg9IjBweCIgd2lkdGg9IjMycHgiIHk9IjBweCIgaWQ9IkxheWVyXzEiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgMzIgMz'+
			'IiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgaGVpZ2h0PSIzMnB4Ij4KIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE2LDE2KSBzY2FsZSgxLjEpIHRyYW5zbGF0ZSgtMTYsLTE2KSIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZT0iIzNDM0MzQyIgb3BhY2l0eT0iMC40Ij4KICA8cGF0aCBkPSJNMTYsMTQuODA0SDQuNjk3Yy0wLjMxNSwwLTAuNjI0LDAuMTI4LTAuODQ2LDAuMzUxQzMuNjI3LDE1LjM3NywzLjUsMTUuNjg2LDMuNSwxNnY4LjEyJiN4ZDsmI3hhOyYjeDk7JiN4OTtjMCwwLjMxNSwwLjEyNywwLjYyNCwwLjM1LDAuODQ2YzAu'+
			'MjIzLDAuMjI0LDAuNTMxLDAuMzUxLDAuODQ2LDAuMzUxSDE2YzAuMzIsMCwwLjYyLTAuMTI0LDAuODQ2LTAuMzUxJiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC4yMjYtMC4yMjYsMC4zNS0wLjUyNSwwLjM1LTAuODQ2VjE2YzAtMC4zMTQtMC4xMjgtMC42MjMtMC4zNS0wLjg0NkMxNi42MjMsMTQuOTMyLDE2LjMxNCwxNC44MDQsMTYsMTQuODA0eiBNMTQuODA0LDIyLjkyNCYjeGQ7JiN4YTsmI3g5OyYjeDk7SDUuODkzdi01LjcyOGg4LjkxMVYyMi45MjR6IE00LjY5NywxMy45OThjMC42NjEsMCwxLjE5Ni0wLjUzNiwxLjE5Ni0xLjE5NnYtMC4zMDhjMC0wLjY2LTAuNTM2LTEuMTk1LTEuMTk2LTEuMT'+
			'k1JiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTAuNjYxLDAtMS4xOTYsMC41MzUtMS4xOTYsMS4xOTV2MC4zMDhDMy41LDEzLjQ2Miw0LjAzNiwxMy45OTgsNC42OTcsMTMuOTk4eiBNNC42OTcsMTAuNDc3YzAuNjYxLDAsMS4xOTctMC41MzYsMS4xOTctMS4xOTdoMCYjeGQ7JiN4YTsmI3g5OyYjeDk7VjkuMDc2YzAuNjYxLDAsMS4xOTYtMC41MzUsMS4xOTYtMS4xOTZjMC0wLjY2LTAuNTM2LTEuMTk2LTEuMTk2LTEuMTk2SDQuNjk3Yy0wLjMxNSwwLTAuNjIzLDAuMTI3LTAuODQ2LDAuMzUmI3hkOyYjeGE7JiN4OTsmI3g5O0MzLjYyOCw3LjI1NywzLjUsNy41NjQsMy41LDcuODh2MS4zOTlDMy41LDku'+
			'OTQsNC4wMzYsMTAuNDc3LDQuNjk3LDEwLjQ3N3ogTTE5LjI4OSw5LjA3NmgwLjI0MmMwLjY2MSwwLDEuMTk2LTAuNTM2LDEuMTk2LTEuMTk2JiN4ZDsmI3hhOyYjeDk7JiN4OTtzLTAuNTM1LTEuMTk2LTEuMTk2LTEuMTk2aC0wLjI0MmMtMC42NjEsMC0xLjE5NywwLjUzNi0xLjE5NywxLjE5NlMxOC42MjgsOS4wNzYsMTkuMjg5LDkuMDc2eiBNMTYuMTIyLDYuNjg0aC0wLjI0MyYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjY2MSwwLTEuMTk2LDAuNTM2LTEuMTk2LDEuMTk2czAuNTM2LDEuMTk2LDEuMTk2LDEuMTk2aDAuMjQzYzAuNjYxLDAsMS4xOTctMC41MzYsMS4xOTctMS4xOTZTMTYuNzgyLD'+
			'YuNjg0LDE2LjEyMiw2LjY4NHomI3hkOyYjeGE7JiN4OTsmI3g5OyBNMjIuNjk4LDkuMDc2aDAuMjQzYzAuNjYsMCwxLjE5Ni0wLjUzNiwxLjE5Ni0xLjE5NnMtMC41MzYtMS4xOTYtMS4xOTYtMS4xOTZoLTAuMjQzYy0wLjY2LDAtMS4xOTYsMC41MzYtMS4xOTYsMS4xOTYmI3hkOyYjeGE7JiN4OTsmI3g5O1MyMi4wMzgsOS4wNzYsMjIuNjk4LDkuMDc2eiBNOS4wNiw5LjA3NmgwLjI0MmMwLjY2LDAsMS4xOTYtMC41MzYsMS4xOTYtMS4xOTZTOS45NjIsNi42ODQsOS4zMDIsNi42ODRIOS4wNiYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjY2MSwwLTEuMTk3LDAuNTM2LTEuMTk3LDEuMTk2UzguMzk5'+
			'LDkuMDc2LDkuMDYsOS4wNzZ6IE0xMi40NjksOS4wNzZoMC4yNDNjMC42NjEsMCwxLjE5Ni0wLjUzNiwxLjE5Ni0xLjE5NiYjeGQ7JiN4YTsmI3g5OyYjeDk7cy0wLjUzNi0xLjE5Ni0xLjE5Ni0xLjE5NmgtMC4yNDNjLTAuNjYxLDAtMS4xOTYsMC41MzYtMS4xOTYsMS4xOTZTMTEuODA4LDkuMDc2LDEyLjQ2OSw5LjA3NnogTTI3LjMwNCwxMS4xMTEmI3hkOyYjeGE7JiN4OTsmI3g5O2MtMC42NjEsMC0xLjE5NiwwLjUzNS0xLjE5NiwxLjE5NnYwLjMwOGMwLDAuNjYsMC41MzUsMS4xOTYsMS4xOTYsMS4xOTZjMC42NiwwLDEuMTk2LTAuNTM2LDEuMTk2LTEuMTk2di0wLjMwOCYjeGQ7JiN4YTsmI3'+
			'g5OyYjeDk7QzI4LjUsMTEuNjQ2LDI3Ljk2NCwxMS4xMTEsMjcuMzA0LDExLjExMXogTTI3LjMwNCwxNC42NWMtMC42NjEsMC0xLjE5NiwwLjUzNS0xLjE5NiwxLjE5NnYwLjMwOGMwLDAuNjYsMC41MzUsMS4xOTYsMS4xOTYsMS4xOTYmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLjY2LDAsMS4xOTYtMC41MzYsMS4xOTYtMS4xOTZ2LTAuMzA4QzI4LjUsMTUuMTg2LDI3Ljk2NCwxNC42NSwyNy4zMDQsMTQuNjV6IE0yNy4zMDQsMjEuNzI4Yy0wLjY2MSwwLTEuMTk2LDAuNTM1LTEuMTk2LDEuMTk2JiN4ZDsmI3hhOyYjeDk7JiN4OTtoLTAuMjM0Yy0wLjY2LDAtMS4xOTYsMC41MzYtMS4xOTYsMS4xOTZj'+
			'MCwwLjY2MSwwLjUzNiwxLjE5NiwxLjE5NiwxLjE5NmgxLjQzMWMwLjMxNCwwLDAuNjIzLTAuMTI4LDAuODQ2LTAuMzUxJiN4ZDsmI3hhOyYjeDk7JiN4OTtzMC4zNTEtMC41MywwLjM1MS0wLjg0NnYtMS4xOTZDMjguNSwyMi4yNjQsMjcuOTY0LDIxLjcyOCwyNy4zMDQsMjEuNzI4eiBNMjcuMzA0LDE4LjE4OWMtMC42NjEsMC0xLjE5NiwwLjUzNi0xLjE5NiwxLjE5NnYwLjMwOCYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAsMC42NiwwLjUzNSwxLjE5NiwxLjE5NiwxLjE5NmMwLjY2LDAsMS4xOTYtMC41MzYsMS4xOTYtMS4xOTZ2LTAuMzA4QzI4LjUsMTguNzI2LDI3Ljk2NCwxOC4xODksMjcuMzA0LD'+
			'E4LjE4OXogTTI4LjE0OSw3LjAzMyYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjIyMy0wLjIyMi0wLjUzMS0wLjM1LTAuODQ2LTAuMzVoLTEuMTk2Yy0wLjY2MSwwLTEuMTk2LDAuNTM2LTEuMTk2LDEuMTk2YzAsMC42NjEsMC41MzUsMS4xOTYsMS4xOTYsMS4xOTYmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLDAuNjYxLDAuNTM1LDEuMTk2LDEuMTk2LDEuMTk2YzAuNjYsMCwxLjE5Ni0wLjUzNSwxLjE5Ni0xLjE5NlY3Ljg4QzI4LjUsNy41NjQsMjguMzcyLDcuMjU3LDI4LjE0OSw3LjAzM3ogTTIxLjg2MywxMy4yNjEmI3hkOyYjeGE7JiN4OTsmI3g5O2wwLjIyMS0wLjE0N2MwLjQyOC0wLjI4NSwwLjU0'+
			'Mi0wLjg2MywwLjI1Ny0xLjI5MWMtMC4yODYtMC40MjgtMC44NjMtMC41NDItMS4yOTEtMC4yNTZsLTAuMjIxLDAuMTQ2JiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTAuNDI3LDAuMjg2LTAuNTQyLDAuODYzLTAuMjU3LDEuMjkxYzAuMTgsMC4yNjksMC40NzQsMC40MTQsMC43NzQsMC40MTRDMjEuNTI0LDEzLjQxOCwyMS43MDQsMTMuMzY3LDIxLjg2MywxMy4yNjF6JiN4ZDsmI3hhOyYjeDk7JiN4OTsgTTE5LjMyOSwyMi45MjRoLTAuMjQyYy0wLjY2MSwwLTEuMTk2LDAuNTM2LTEuMTk2LDEuMTk2YzAsMC42NjEsMC41MzUsMS4xOTYsMS4xOTYsMS4xOTZoMC4yNDJjMC42NjEsMCwxLjE5Ni0wLjUzNS'+
			'wxLjE5Ni0xLjE5NiYjeGQ7JiN4YTsmI3g5OyYjeDk7QzIwLjUyNSwyMy40NiwxOS45OSwyMi45MjQsMTkuMzI5LDIyLjkyNHogTTE4LjU4NCwxNS4yNjRjMC4xNzgsMCwwLjM1Ny0wLjA1MSwwLjUxNy0wLjE1N2wwLjIyMS0wLjE0NyYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAuNDI4LTAuMjg1LDAuNTQyLTAuODYzLDAuMjU3LTEuMjljLTAuMjg1LTAuNDI4LTAuODYzLTAuNTQyLTEuMjkxLTAuMjU3bC0wLjIyMiwwLjE0N2MtMC40MjcsMC4yODYtMC41NDIsMC44NjMtMC4yNTYsMS4yOTEmI3hkOyYjeGE7JiN4OTsmI3g5O0MxNy45ODksMTUuMTE5LDE4LjI4MywxNS4yNjQsMTguNTg0LDE1LjI2NHog'+
			'TTIyLjczOSwyMi45MjRoLTAuMjQyYy0wLjY2MSwwLTEuMTk2LDAuNTM2LTEuMTk2LDEuMTk2JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMCwwLjY2MSwwLjUzNSwxLjE5NiwxLjE5NiwxLjE5NmgwLjI0MmMwLjY2LDAsMS4xOTYtMC41MzUsMS4xOTYtMS4xOTZDMjMuOTM2LDIzLjQ2LDIzLjM5OSwyMi45MjQsMjIuNzM5LDIyLjkyNHogTTI1LjEwNCw5Ljk3NiYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjI4NS0wLjQyNy0wLjg2My0wLjU0Mi0xLjI5MS0wLjI1NmwtMC4yMjEsMC4xNDdjLTAuNDI4LDAuMjg1LTAuNTQyLDAuODYzLTAuMjU2LDEuMjljMC4xNzksMC4yNjksMC40NzQsMC40MTQsMC43NzQsMC'+
			'40MTQmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLjE3OCwwLDAuMzU3LTAuMDUxLDAuNTE2LTAuMTU2bDAuMjIyLTAuMTQ4QzI1LjI3NCwxMC45ODEsMjUuMzg5LDEwLjQwMywyNS4xMDQsOS45NzZ6Ii8+CiA8L2c+CiA8ZyBmaWxsLW9wYWNpdHk9IjEiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE2LDE2KSBzY2FsZSgxLjEpIHRyYW5zbGF0ZSgtMTYsLTE2KSIgc3Ryb2tlLXdpZHRoPSIwLjIiIGZpbGw9IiMwMDAwMDAiIHN0cm9rZT0iIzAwMDAwMCI+CiAgPHBhdGggZD0iTTE2LDE0LjgwNEg0LjY5N2MtMC4zMTUsMC0wLjYyNCwwLjEyOC0wLjg0NiwwLjM1MUMzLjYyNywxNS4zNzcsMy41LDE1LjY4Niwz'+
			'LjUsMTZ2OC4xMiYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAsMC4zMTUsMC4xMjcsMC42MjQsMC4zNSwwLjg0NmMwLjIyMywwLjIyNCwwLjUzMSwwLjM1MSwwLjg0NiwwLjM1MUgxNmMwLjMyLDAsMC42Mi0wLjEyNCwwLjg0Ni0wLjM1MSYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAuMjI2LTAuMjI2LDAuMzUtMC41MjUsMC4zNS0wLjg0NlYxNmMwLTAuMzE0LTAuMTI4LTAuNjIzLTAuMzUtMC44NDZDMTYuNjIzLDE0LjkzMiwxNi4zMTQsMTQuODA0LDE2LDE0LjgwNHogTTE0LjgwNCwyMi45MjQmI3hkOyYjeGE7JiN4OTsmI3g5O0g1Ljg5M3YtNS43MjhoOC45MTFWMjIuOTI0eiBNNC42OTcsMTMuOTk4YzAuNj'+
			'YxLDAsMS4xOTYtMC41MzYsMS4xOTYtMS4xOTZ2LTAuMzA4YzAtMC42Ni0wLjUzNi0xLjE5NS0xLjE5Ni0xLjE5NSYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjY2MSwwLTEuMTk2LDAuNTM1LTEuMTk2LDEuMTk1djAuMzA4QzMuNSwxMy40NjIsNC4wMzYsMTMuOTk4LDQuNjk3LDEzLjk5OHogTTQuNjk3LDEwLjQ3N2MwLjY2MSwwLDEuMTk3LTAuNTM2LDEuMTk3LTEuMTk3aDAmI3hkOyYjeGE7JiN4OTsmI3g5O1Y5LjA3NmMwLjY2MSwwLDEuMTk2LTAuNTM1LDEuMTk2LTEuMTk2YzAtMC42Ni0wLjUzNi0xLjE5Ni0xLjE5Ni0xLjE5Nkg0LjY5N2MtMC4zMTUsMC0wLjYyMywwLjEyNy0wLjg0NiwwLjM1'+
			'JiN4ZDsmI3hhOyYjeDk7JiN4OTtDMy42MjgsNy4yNTcsMy41LDcuNTY0LDMuNSw3Ljg4djEuMzk5QzMuNSw5Ljk0LDQuMDM2LDEwLjQ3Nyw0LjY5NywxMC40Nzd6IE0xOS4yODksOS4wNzZoMC4yNDJjMC42NjEsMCwxLjE5Ni0wLjUzNiwxLjE5Ni0xLjE5NiYjeGQ7JiN4YTsmI3g5OyYjeDk7cy0wLjUzNS0xLjE5Ni0xLjE5Ni0xLjE5NmgtMC4yNDJjLTAuNjYxLDAtMS4xOTcsMC41MzYtMS4xOTcsMS4xOTZTMTguNjI4LDkuMDc2LDE5LjI4OSw5LjA3NnogTTE2LjEyMiw2LjY4NGgtMC4yNDMmI3hkOyYjeGE7JiN4OTsmI3g5O2MtMC42NjEsMC0xLjE5NiwwLjUzNi0xLjE5NiwxLjE5NnMwLjUzNi'+
			'wxLjE5NiwxLjE5NiwxLjE5NmgwLjI0M2MwLjY2MSwwLDEuMTk3LTAuNTM2LDEuMTk3LTEuMTk2UzE2Ljc4Miw2LjY4NCwxNi4xMjIsNi42ODR6JiN4ZDsmI3hhOyYjeDk7JiN4OTsgTTIyLjY5OCw5LjA3NmgwLjI0M2MwLjY2LDAsMS4xOTYtMC41MzYsMS4xOTYtMS4xOTZzLTAuNTM2LTEuMTk2LTEuMTk2LTEuMTk2aC0wLjI0M2MtMC42NiwwLTEuMTk2LDAuNTM2LTEuMTk2LDEuMTk2JiN4ZDsmI3hhOyYjeDk7JiN4OTtTMjIuMDM4LDkuMDc2LDIyLjY5OCw5LjA3NnogTTkuMDYsOS4wNzZoMC4yNDJjMC42NiwwLDEuMTk2LTAuNTM2LDEuMTk2LTEuMTk2UzkuOTYyLDYuNjg0LDkuMzAyLDYuNjg0'+
			'SDkuMDYmI3hkOyYjeGE7JiN4OTsmI3g5O2MtMC42NjEsMC0xLjE5NywwLjUzNi0xLjE5NywxLjE5NlM4LjM5OSw5LjA3Niw5LjA2LDkuMDc2eiBNMTIuNDY5LDkuMDc2aDAuMjQzYzAuNjYxLDAsMS4xOTYtMC41MzYsMS4xOTYtMS4xOTYmI3hkOyYjeGE7JiN4OTsmI3g5O3MtMC41MzYtMS4xOTYtMS4xOTYtMS4xOTZoLTAuMjQzYy0wLjY2MSwwLTEuMTk2LDAuNTM2LTEuMTk2LDEuMTk2UzExLjgwOCw5LjA3NiwxMi40NjksOS4wNzZ6IE0yNy4zMDQsMTEuMTExJiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTAuNjYxLDAtMS4xOTYsMC41MzUtMS4xOTYsMS4xOTZ2MC4zMDhjMCwwLjY2LDAuNTM1LDEuMT'+
			'k2LDEuMTk2LDEuMTk2YzAuNjYsMCwxLjE5Ni0wLjUzNiwxLjE5Ni0xLjE5NnYtMC4zMDgmI3hkOyYjeGE7JiN4OTsmI3g5O0MyOC41LDExLjY0NiwyNy45NjQsMTEuMTExLDI3LjMwNCwxMS4xMTF6IE0yNy4zMDQsMTQuNjVjLTAuNjYxLDAtMS4xOTYsMC41MzUtMS4xOTYsMS4xOTZ2MC4zMDhjMCwwLjY2LDAuNTM1LDEuMTk2LDEuMTk2LDEuMTk2JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC42NiwwLDEuMTk2LTAuNTM2LDEuMTk2LTEuMTk2di0wLjMwOEMyOC41LDE1LjE4NiwyNy45NjQsMTQuNjUsMjcuMzA0LDE0LjY1eiBNMjcuMzA0LDIxLjcyOGMtMC42NjEsMC0xLjE5NiwwLjUzNS0xLjE5Niwx'+
			'LjE5NiYjeGQ7JiN4YTsmI3g5OyYjeDk7aC0wLjIzNGMtMC42NiwwLTEuMTk2LDAuNTM2LTEuMTk2LDEuMTk2YzAsMC42NjEsMC41MzYsMS4xOTYsMS4xOTYsMS4xOTZoMS40MzFjMC4zMTQsMCwwLjYyMy0wLjEyOCwwLjg0Ni0wLjM1MSYjeGQ7JiN4YTsmI3g5OyYjeDk7czAuMzUxLTAuNTMsMC4zNTEtMC44NDZ2LTEuMTk2QzI4LjUsMjIuMjY0LDI3Ljk2NCwyMS43MjgsMjcuMzA0LDIxLjcyOHogTTI3LjMwNCwxOC4xODljLTAuNjYxLDAtMS4xOTYsMC41MzYtMS4xOTYsMS4xOTZ2MC4zMDgmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLDAuNjYsMC41MzUsMS4xOTYsMS4xOTYsMS4xOTZjMC42NiwwLD'+
			'EuMTk2LTAuNTM2LDEuMTk2LTEuMTk2di0wLjMwOEMyOC41LDE4LjcyNiwyNy45NjQsMTguMTg5LDI3LjMwNCwxOC4xODl6IE0yOC4xNDksNy4wMzMmI3hkOyYjeGE7JiN4OTsmI3g5O2MtMC4yMjMtMC4yMjItMC41MzEtMC4zNS0wLjg0Ni0wLjM1aC0xLjE5NmMtMC42NjEsMC0xLjE5NiwwLjUzNi0xLjE5NiwxLjE5NmMwLDAuNjYxLDAuNTM1LDEuMTk2LDEuMTk2LDEuMTk2JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMCwwLjY2MSwwLjUzNSwxLjE5NiwxLjE5NiwxLjE5NmMwLjY2LDAsMS4xOTYtMC41MzUsMS4xOTYtMS4xOTZWNy44OEMyOC41LDcuNTY0LDI4LjM3Miw3LjI1NywyOC4xNDksNy4wMzN6'+
			'IE0yMS44NjMsMTMuMjYxJiN4ZDsmI3hhOyYjeDk7JiN4OTtsMC4yMjEtMC4xNDdjMC40MjgtMC4yODUsMC41NDItMC44NjMsMC4yNTctMS4yOTFjLTAuMjg2LTAuNDI4LTAuODYzLTAuNTQyLTEuMjkxLTAuMjU2bC0wLjIyMSwwLjE0NiYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjQyNywwLjI4Ni0wLjU0MiwwLjg2My0wLjI1NywxLjI5MWMwLjE4LDAuMjY5LDAuNDc0LDAuNDE0LDAuNzc0LDAuNDE0QzIxLjUyNCwxMy40MTgsMjEuNzA0LDEzLjM2NywyMS44NjMsMTMuMjYxeiYjeGQ7JiN4YTsmI3g5OyYjeDk7IE0xOS4zMjksMjIuOTI0aC0wLjI0MmMtMC42NjEsMC0xLjE5NiwwLjUzNi0xLjE5Ni'+
			'wxLjE5NmMwLDAuNjYxLDAuNTM1LDEuMTk2LDEuMTk2LDEuMTk2aDAuMjQyYzAuNjYxLDAsMS4xOTYtMC41MzUsMS4xOTYtMS4xOTYmI3hkOyYjeGE7JiN4OTsmI3g5O0MyMC41MjUsMjMuNDYsMTkuOTksMjIuOTI0LDE5LjMyOSwyMi45MjR6IE0xOC41ODQsMTUuMjY0YzAuMTc4LDAsMC4zNTctMC4wNTEsMC41MTctMC4xNTdsMC4yMjEtMC4xNDcmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLjQyOC0wLjI4NSwwLjU0Mi0wLjg2MywwLjI1Ny0xLjI5Yy0wLjI4NS0wLjQyOC0wLjg2My0wLjU0Mi0xLjI5MS0wLjI1N2wtMC4yMjIsMC4xNDdjLTAuNDI3LDAuMjg2LTAuNTQyLDAuODYzLTAuMjU2LDEuMjkx'+
			'JiN4ZDsmI3hhOyYjeDk7JiN4OTtDMTcuOTg5LDE1LjExOSwxOC4yODMsMTUuMjY0LDE4LjU4NCwxNS4yNjR6IE0yMi43MzksMjIuOTI0aC0wLjI0MmMtMC42NjEsMC0xLjE5NiwwLjUzNi0xLjE5NiwxLjE5NiYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAsMC42NjEsMC41MzUsMS4xOTYsMS4xOTYsMS4xOTZoMC4yNDJjMC42NiwwLDEuMTk2LTAuNTM1LDEuMTk2LTEuMTk2QzIzLjkzNiwyMy40NiwyMy4zOTksMjIuOTI0LDIyLjczOSwyMi45MjR6IE0yNS4xMDQsOS45NzYmI3hkOyYjeGE7JiN4OTsmI3g5O2MtMC4yODUtMC40MjctMC44NjMtMC41NDItMS4yOTEtMC4yNTZsLTAuMjIxLDAuMTQ3Yy0wLj'+
			'QyOCwwLjI4NS0wLjU0MiwwLjg2My0wLjI1NiwxLjI5YzAuMTc5LDAuMjY5LDAuNDc0LDAuNDE0LDAuNzc0LDAuNDE0JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC4xNzgsMCwwLjM1Ny0wLjA1MSwwLjUxNi0wLjE1NmwwLjIyMi0wLjE0OEMyNS4yNzQsMTAuOTgxLDI1LjM4OSwxMC40MDMsMjUuMTA0LDkuOTc2eiIvPgogPC9nPgo8L3N2Zz4K';
		me._button_image_normalscreen__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="button_image_normalscreen";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._button_image_normalscreen.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._button_image_normalscreen.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getIsFullscreen() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._button_image_normalscreen.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._button_image_normalscreen.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._button_image_normalscreen.style[domTransition]='';
				if (me._button_image_normalscreen.ggCurrentLogicStateVisible == 0) {
					me._button_image_normalscreen.style.visibility=(Number(me._button_image_normalscreen.style.opacity)>0||!me._button_image_normalscreen.style.opacity)?'inherit':'hidden';
					me._button_image_normalscreen.ggVisible=true;
				}
				else {
					me._button_image_normalscreen.style.visibility="hidden";
					me._button_image_normalscreen.ggVisible=false;
				}
			}
		}
		me._button_image_normalscreen.onmouseover=function (e) {
			me._button_image_normalscreen__img.style.visibility='hidden';
			me._button_image_normalscreen__imgo.style.visibility='inherit';
		}
		me._button_image_normalscreen.onmouseout=function (e) {
			me._button_image_normalscreen__img.style.visibility='inherit';
			me._button_image_normalscreen__imgo.style.visibility='hidden';
		}
		me._button_image_normalscreen.ggUpdatePosition=function (useTransition) {
		}
		me._button_fullscreen.appendChild(me._button_image_normalscreen);
		el=me._button_image_fullscreen=document.createElement('div');
		els=me._button_image_fullscreen__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEgQmFzaWMvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEtYmFzaWMuZHRkJz4KPCEtLSBHYXJkZW4gR25vbWUgU29mdHdhcmUgLSBTa2luIEJ1dHRvbnMgLS0+CjxzdmcgdmVyc2lvbj0iMS4xIiBiYXNlUHJvZmlsZT0iYmFzaWMiIHg9IjBweCIgd2lkdGg9IjMycHgiIHk9IjBweCIgaWQ9IkxheWVyXzEiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgMzIgMz'+
			'IiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgaGVpZ2h0PSIzMnB4Ij4KIDxnIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2U9IiMzQzNDM0MiIG9wYWNpdHk9IjAuNCI+CiAgPHBhdGggZD0iTTI4LjE0OSw3LjAzNGMtMC4yMjMtMC4yMjMtMC41MzEtMC4zNTEtMC44NDYtMC4zNTFINC42OTdjLTAuMzE1LDAtMC42MjQsMC4xMjgtMC44NDYsMC4zNTEmI3hkOyYjeGE7JiN4OTsmI3g5O1MzLjUsNy41NjUsMy41LDcuODh2MTYuMjRjMCwwLjMxNSwwLjEyOCwwLjYyMywwLjM1MSwwLjg0NmMwLjIyMywwLjIyNCwwLjUzMSwwLjM1MSwwLjg0Niww'+
			'LjM1MWgyMi42MDcmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLjMxOSwwLDAuNjItMC4xMjQsMC44NDYtMC4zNTFjMC4yMjctMC4yMjYsMC4zNTEtMC41MjYsMC4zNTEtMC44NDZWNy44OEMyOC41LDcuNTY1LDI4LjM3Miw3LjI1NywyOC4xNDksNy4wMzR6IE01Ljg5MywyMi45MjQmI3hkOyYjeGE7JiN4OTsmI3g5O1Y5LjA3NmgyMC4yMTV2MTMuODQ4SDUuODkzeiBNMTYsMTkuMjRjLTAuNjYxLDAtMS4xOTcsMC41MzUtMS4xOTcsMS4xOTZ2MC40NDhjMCwwLjY2MSwwLjUzNiwxLjE5NiwxLjE5NywxLjE5NiYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAuNjYsMCwxLjE5Ni0wLjUzNSwxLjE5Ni0xLjE5NnYtMC'+
			'40NDhDMTcuMTk2LDE5Ljc3NSwxNi42NjEsMTkuMjQsMTYsMTkuMjR6IE0xMS42NywxNC44MDRoLTAuMzQyJiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTAuNjYxLDAtMS4xOTcsMC41MzUtMS4xOTcsMS4xOTZjMCwwLjY2MSwwLjUzNiwxLjE5NiwxLjE5NywxLjE5NmgwLjM0MmMwLjY2MSwwLDEuMTk2LTAuNTM1LDEuMTk2LTEuMTk2JiN4ZDsmI3hhOyYjeDk7JiN4OTtDMTIuODY2LDE1LjMzOSwxMi4zMzEsMTQuODA0LDExLjY3LDE0LjgwNHogTTguMTk1LDE0LjgwNEg3Ljg1NGMtMC42NjEsMC0xLjE5NywwLjUzNS0xLjE5NywxLjE5NiYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAsMC42NjEsMC41MzYsMS4x'+
			'OTYsMS4xOTcsMS4xOTZoMC4zNDFjMC42NiwwLDEuMTk2LTAuNTM1LDEuMTk2LTEuMTk2QzkuMzkyLDE1LjMzOSw4Ljg1NSwxNC44MDQsOC4xOTUsMTQuODA0eiBNMTguMjg3LDEzLjQxMiYjeGQ7JiN4YTsmI3g5OyYjeDk7bC0wLjIyMiwwLjE0OGMtMC40MjcsMC4yODUtMC41NDEsMC44NjMtMC4yNTYsMS4yOWMwLjE4LDAuMjY5LDAuNDc0LDAuNDE0LDAuNzc0LDAuNDE0YzAuMTc4LDAsMC4zNTctMC4wNSwwLjUxNy0wLjE1NyYjeGQ7JiN4YTsmI3g5OyYjeDk7bDAuMjIxLTAuMTQ4YzAuNDI4LTAuMjg1LDAuNTQyLTAuODYzLDAuMjU3LTEuMjlDMTkuMjkzLDEzLjI0MiwxOC43MTUsMTMuMTI2LD'+
			'E4LjI4NywxMy40MTJ6IE0yMy44MTMsOS43MmwtMC4yMjIsMC4xNDcmI3hkOyYjeGE7JiN4OTsmI3g5O2MtMC40MjcsMC4yODYtMC41NDIsMC44NjQtMC4yNTYsMS4yOTFjMC4xNzksMC4yNjksMC40NzQsMC40MTQsMC43NzQsMC40MTRjMC4xNzgsMCwwLjM1Ny0wLjA1LDAuNTE3LTAuMTU3bDAuMjIxLTAuMTQ4JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC40MjctMC4yODUsMC41NDItMC44NjMsMC4yNTYtMS4yOTFDMjQuODE4LDkuNTQ5LDI0LjI0MSw5LjQzNCwyMy44MTMsOS43MnogTTE2LDE0LjgwNGgtMS4xOTZjLTAuNjYxLDAtMS4xOTYsMC41MzYtMS4xOTYsMS4xOTYmI3hkOyYjeGE7JiN4OTsm'+
			'I3g5O2MwLDAuNjYsMC41MzUsMS4xOTYsMS4xOTYsMS4xOTZjMCwwLjY2MSwwLjUzNSwxLjE5NiwxLjE5NiwxLjE5NmMwLjY2LDAsMS4xOTYtMC41MzUsMS4xOTYtMS4xOTZWMTYmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLTAuMzE1LTAuMTI4LTAuNjIzLTAuMzUtMC44NDZDMTYuNjIzLDE0LjkzMSwxNi4zMTQsMTQuODA0LDE2LDE0LjgwNHogTTIxLjA1LDExLjU2NWwtMC4yMjEsMC4xNDgmI3hkOyYjeGE7JiN4OTsmI3g5O2MtMC40MjcsMC4yODYtMC41NDIsMC44NjMtMC4yNTcsMS4yOTFjMC4xOCwwLjI2OCwwLjQ3NSwwLjQxMywwLjc3NCwwLjQxM2MwLjE3OCwwLDAuMzU3LTAuMDUxLDAuNTE3LT'+
			'AuMTU3bDAuMjIxLTAuMTQ4JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC40MjgtMC4yODYsMC41NDItMC44NjMsMC4yNTctMS4yOTFTMjEuNDc4LDExLjI4LDIxLjA1LDExLjU2NXoiLz4KIDwvZz4KIDxnIGZpbGwtb3BhY2l0eT0iMSIgc3Ryb2tlLXdpZHRoPSIwLjIiIGZpbGw9IiMwMDAwMDAiIHN0cm9rZT0iIzAwMDAwMCI+CiAgPHBhdGggZD0iTTI4LjE0OSw3LjAzNGMtMC4yMjMtMC4yMjMtMC41MzEtMC4zNTEtMC44NDYtMC4zNTFINC42OTdjLTAuMzE1LDAtMC42MjQsMC4xMjgtMC44NDYsMC4zNTEmI3hkOyYjeGE7JiN4OTsmI3g5O1MzLjUsNy41NjUsMy41LDcuODh2MTYuMjRjMCwwLjMxNSww'+
			'LjEyOCwwLjYyMywwLjM1MSwwLjg0NmMwLjIyMywwLjIyNCwwLjUzMSwwLjM1MSwwLjg0NiwwLjM1MWgyMi42MDcmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLjMxOSwwLDAuNjItMC4xMjQsMC44NDYtMC4zNTFjMC4yMjctMC4yMjYsMC4zNTEtMC41MjYsMC4zNTEtMC44NDZWNy44OEMyOC41LDcuNTY1LDI4LjM3Miw3LjI1NywyOC4xNDksNy4wMzR6IE01Ljg5MywyMi45MjQmI3hkOyYjeGE7JiN4OTsmI3g5O1Y5LjA3NmgyMC4yMTV2MTMuODQ4SDUuODkzeiBNMTYsMTkuMjRjLTAuNjYxLDAtMS4xOTcsMC41MzUtMS4xOTcsMS4xOTZ2MC40NDhjMCwwLjY2MSwwLjUzNiwxLjE5NiwxLjE5NywxLjE5Ni'+
			'YjeGQ7JiN4YTsmI3g5OyYjeDk7YzAuNjYsMCwxLjE5Ni0wLjUzNSwxLjE5Ni0xLjE5NnYtMC40NDhDMTcuMTk2LDE5Ljc3NSwxNi42NjEsMTkuMjQsMTYsMTkuMjR6IE0xMS42NywxNC44MDRoLTAuMzQyJiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTAuNjYxLDAtMS4xOTcsMC41MzUtMS4xOTcsMS4xOTZjMCwwLjY2MSwwLjUzNiwxLjE5NiwxLjE5NywxLjE5NmgwLjM0MmMwLjY2MSwwLDEuMTk2LTAuNTM1LDEuMTk2LTEuMTk2JiN4ZDsmI3hhOyYjeDk7JiN4OTtDMTIuODY2LDE1LjMzOSwxMi4zMzEsMTQuODA0LDExLjY3LDE0LjgwNHogTTguMTk1LDE0LjgwNEg3Ljg1NGMtMC42NjEsMC0xLjE5Nyww'+
			'LjUzNS0xLjE5NywxLjE5NiYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAsMC42NjEsMC41MzYsMS4xOTYsMS4xOTcsMS4xOTZoMC4zNDFjMC42NiwwLDEuMTk2LTAuNTM1LDEuMTk2LTEuMTk2QzkuMzkyLDE1LjMzOSw4Ljg1NSwxNC44MDQsOC4xOTUsMTQuODA0eiBNMTguMjg3LDEzLjQxMiYjeGQ7JiN4YTsmI3g5OyYjeDk7bC0wLjIyMiwwLjE0OGMtMC40MjcsMC4yODUtMC41NDEsMC44NjMtMC4yNTYsMS4yOWMwLjE4LDAuMjY5LDAuNDc0LDAuNDE0LDAuNzc0LDAuNDE0YzAuMTc4LDAsMC4zNTctMC4wNSwwLjUxNy0wLjE1NyYjeGQ7JiN4YTsmI3g5OyYjeDk7bDAuMjIxLTAuMTQ4YzAuNDI4LTAuMj'+
			'g1LDAuNTQyLTAuODYzLDAuMjU3LTEuMjlDMTkuMjkzLDEzLjI0MiwxOC43MTUsMTMuMTI2LDE4LjI4NywxMy40MTJ6IE0yMy44MTMsOS43MmwtMC4yMjIsMC4xNDcmI3hkOyYjeGE7JiN4OTsmI3g5O2MtMC40MjcsMC4yODYtMC41NDIsMC44NjQtMC4yNTYsMS4yOTFjMC4xNzksMC4yNjksMC40NzQsMC40MTQsMC43NzQsMC40MTRjMC4xNzgsMCwwLjM1Ny0wLjA1LDAuNTE3LTAuMTU3bDAuMjIxLTAuMTQ4JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC40MjctMC4yODUsMC41NDItMC44NjMsMC4yNTYtMS4yOTFDMjQuODE4LDkuNTQ5LDI0LjI0MSw5LjQzNCwyMy44MTMsOS43MnogTTE2LDE0LjgwNGgt'+
			'MS4xOTZjLTAuNjYxLDAtMS4xOTYsMC41MzYtMS4xOTYsMS4xOTYmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLDAuNjYsMC41MzUsMS4xOTYsMS4xOTYsMS4xOTZjMCwwLjY2MSwwLjUzNSwxLjE5NiwxLjE5NiwxLjE5NmMwLjY2LDAsMS4xOTYtMC41MzUsMS4xOTYtMS4xOTZWMTYmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLTAuMzE1LTAuMTI4LTAuNjIzLTAuMzUtMC44NDZDMTYuNjIzLDE0LjkzMSwxNi4zMTQsMTQuODA0LDE2LDE0LjgwNHogTTIxLjA1LDExLjU2NWwtMC4yMjEsMC4xNDgmI3hkOyYjeGE7JiN4OTsmI3g5O2MtMC40MjcsMC4yODYtMC41NDIsMC44NjMtMC4yNTcsMS4yOTFjMC4xOCwwLj'+
			'I2OCwwLjQ3NSwwLjQxMywwLjc3NCwwLjQxM2MwLjE3OCwwLDAuMzU3LTAuMDUxLDAuNTE3LTAuMTU3bDAuMjIxLTAuMTQ4JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC40MjgtMC4yODYsMC41NDItMC44NjMsMC4yNTctMS4yOTFTMjEuNDc4LDExLjI4LDIxLjA1LDExLjU2NXoiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._button_image_fullscreen__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._button_image_fullscreen__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEgQmFzaWMvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEtYmFzaWMuZHRkJz4KPCEtLSBHYXJkZW4gR25vbWUgU29mdHdhcmUgLSBTa2luIEJ1dHRvbnMgLS0+CjxzdmcgdmVyc2lvbj0iMS4xIiBiYXNlUHJvZmlsZT0iYmFzaWMiIHg9IjBweCIgd2lkdGg9IjMycHgiIHk9IjBweCIgaWQ9IkxheWVyXzEiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgMzIgMz'+
			'IiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgaGVpZ2h0PSIzMnB4Ij4KIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE2LDE2KSBzY2FsZSgxLjEpIHRyYW5zbGF0ZSgtMTYsLTE2KSIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZT0iIzNDM0MzQyIgb3BhY2l0eT0iMC40Ij4KICA8cGF0aCBkPSJNMjguMTQ5LDcuMDM0Yy0wLjIyMy0wLjIyMy0wLjUzMS0wLjM1MS0wLjg0Ni0wLjM1MUg0LjY5N2MtMC4zMTUsMC0wLjYyNCwwLjEyOC0wLjg0NiwwLjM1MSYjeGQ7JiN4YTsmI3g5OyYjeDk7UzMuNSw3LjU2NSwzLjUsNy44OHYxNi4yNGMwLDAu'+
			'MzE1LDAuMTI4LDAuNjIzLDAuMzUxLDAuODQ2YzAuMjIzLDAuMjI0LDAuNTMxLDAuMzUxLDAuODQ2LDAuMzUxaDIyLjYwNyYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAuMzE5LDAsMC42Mi0wLjEyNCwwLjg0Ni0wLjM1MWMwLjIyNy0wLjIyNiwwLjM1MS0wLjUyNiwwLjM1MS0wLjg0NlY3Ljg4QzI4LjUsNy41NjUsMjguMzcyLDcuMjU3LDI4LjE0OSw3LjAzNHogTTUuODkzLDIyLjkyNCYjeGQ7JiN4YTsmI3g5OyYjeDk7VjkuMDc2aDIwLjIxNXYxMy44NDhINS44OTN6IE0xNiwxOS4yNGMtMC42NjEsMC0xLjE5NywwLjUzNS0xLjE5NywxLjE5NnYwLjQ0OGMwLDAuNjYxLDAuNTM2LDEuMTk2LDEuMTk3LD'+
			'EuMTk2JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC42NiwwLDEuMTk2LTAuNTM1LDEuMTk2LTEuMTk2di0wLjQ0OEMxNy4xOTYsMTkuNzc1LDE2LjY2MSwxOS4yNCwxNiwxOS4yNHogTTExLjY3LDE0LjgwNGgtMC4zNDImI3hkOyYjeGE7JiN4OTsmI3g5O2MtMC42NjEsMC0xLjE5NywwLjUzNS0xLjE5NywxLjE5NmMwLDAuNjYxLDAuNTM2LDEuMTk2LDEuMTk3LDEuMTk2aDAuMzQyYzAuNjYxLDAsMS4xOTYtMC41MzUsMS4xOTYtMS4xOTYmI3hkOyYjeGE7JiN4OTsmI3g5O0MxMi44NjYsMTUuMzM5LDEyLjMzMSwxNC44MDQsMTEuNjcsMTQuODA0eiBNOC4xOTUsMTQuODA0SDcuODU0Yy0wLjY2MSwwLTEu'+
			'MTk3LDAuNTM1LTEuMTk3LDEuMTk2JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMCwwLjY2MSwwLjUzNiwxLjE5NiwxLjE5NywxLjE5NmgwLjM0MWMwLjY2LDAsMS4xOTYtMC41MzUsMS4xOTYtMS4xOTZDOS4zOTIsMTUuMzM5LDguODU1LDE0LjgwNCw4LjE5NSwxNC44MDR6IE0xOC4yODcsMTMuNDEyJiN4ZDsmI3hhOyYjeDk7JiN4OTtsLTAuMjIyLDAuMTQ4Yy0wLjQyNywwLjI4NS0wLjU0MSwwLjg2My0wLjI1NiwxLjI5YzAuMTgsMC4yNjksMC40NzQsMC40MTQsMC43NzQsMC40MTRjMC4xNzgsMCwwLjM1Ny0wLjA1LDAuNTE3LTAuMTU3JiN4ZDsmI3hhOyYjeDk7JiN4OTtsMC4yMjEtMC4xNDhjMC40Mj'+
			'gtMC4yODUsMC41NDItMC44NjMsMC4yNTctMS4yOUMxOS4yOTMsMTMuMjQyLDE4LjcxNSwxMy4xMjYsMTguMjg3LDEzLjQxMnogTTIzLjgxMyw5LjcybC0wLjIyMiwwLjE0NyYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjQyNywwLjI4Ni0wLjU0MiwwLjg2NC0wLjI1NiwxLjI5MWMwLjE3OSwwLjI2OSwwLjQ3NCwwLjQxNCwwLjc3NCwwLjQxNGMwLjE3OCwwLDAuMzU3LTAuMDUsMC41MTctMC4xNTdsMC4yMjEtMC4xNDgmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLjQyNy0wLjI4NSwwLjU0Mi0wLjg2MywwLjI1Ni0xLjI5MUMyNC44MTgsOS41NDksMjQuMjQxLDkuNDM0LDIzLjgxMyw5LjcyeiBNMTYsMTQu'+
			'ODA0aC0xLjE5NmMtMC42NjEsMC0xLjE5NiwwLjUzNi0xLjE5NiwxLjE5NiYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAsMC42NiwwLjUzNSwxLjE5NiwxLjE5NiwxLjE5NmMwLDAuNjYxLDAuNTM1LDEuMTk2LDEuMTk2LDEuMTk2YzAuNjYsMCwxLjE5Ni0wLjUzNSwxLjE5Ni0xLjE5NlYxNiYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAtMC4zMTUtMC4xMjgtMC42MjMtMC4zNS0wLjg0NkMxNi42MjMsMTQuOTMxLDE2LjMxNCwxNC44MDQsMTYsMTQuODA0eiBNMjEuMDUsMTEuNTY1bC0wLjIyMSwwLjE0OCYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjQyNywwLjI4Ni0wLjU0MiwwLjg2My0wLjI1NywxLjI5MWMwLj'+
			'E4LDAuMjY4LDAuNDc1LDAuNDEzLDAuNzc0LDAuNDEzYzAuMTc4LDAsMC4zNTctMC4wNTEsMC41MTctMC4xNTdsMC4yMjEtMC4xNDgmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLjQyOC0wLjI4NiwwLjU0Mi0wLjg2MywwLjI1Ny0xLjI5MVMyMS40NzgsMTEuMjgsMjEuMDUsMTEuNTY1eiIvPgogPC9nPgogPGcgZmlsbC1vcGFjaXR5PSIxIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNiwxNikgc2NhbGUoMS4xKSB0cmFuc2xhdGUoLTE2LC0xNikiIHN0cm9rZS13aWR0aD0iMC4yIiBmaWxsPSIjMDAwMDAwIiBzdHJva2U9IiMwMDAwMDAiPgogIDxwYXRoIGQ9Ik0yOC4xNDksNy4wMzRjLTAuMjIzLTAuMjIz'+
			'LTAuNTMxLTAuMzUxLTAuODQ2LTAuMzUxSDQuNjk3Yy0wLjMxNSwwLTAuNjI0LDAuMTI4LTAuODQ2LDAuMzUxJiN4ZDsmI3hhOyYjeDk7JiN4OTtTMy41LDcuNTY1LDMuNSw3Ljg4djE2LjI0YzAsMC4zMTUsMC4xMjgsMC42MjMsMC4zNTEsMC44NDZjMC4yMjMsMC4yMjQsMC41MzEsMC4zNTEsMC44NDYsMC4zNTFoMjIuNjA3JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC4zMTksMCwwLjYyLTAuMTI0LDAuODQ2LTAuMzUxYzAuMjI3LTAuMjI2LDAuMzUxLTAuNTI2LDAuMzUxLTAuODQ2VjcuODhDMjguNSw3LjU2NSwyOC4zNzIsNy4yNTcsMjguMTQ5LDcuMDM0eiBNNS44OTMsMjIuOTI0JiN4ZDsmI3hhOy'+
			'YjeDk7JiN4OTtWOS4wNzZoMjAuMjE1djEzLjg0OEg1Ljg5M3ogTTE2LDE5LjI0Yy0wLjY2MSwwLTEuMTk3LDAuNTM1LTEuMTk3LDEuMTk2djAuNDQ4YzAsMC42NjEsMC41MzYsMS4xOTYsMS4xOTcsMS4xOTYmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLjY2LDAsMS4xOTYtMC41MzUsMS4xOTYtMS4xOTZ2LTAuNDQ4QzE3LjE5NiwxOS43NzUsMTYuNjYxLDE5LjI0LDE2LDE5LjI0eiBNMTEuNjcsMTQuODA0aC0wLjM0MiYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjY2MSwwLTEuMTk3LDAuNTM1LTEuMTk3LDEuMTk2YzAsMC42NjEsMC41MzYsMS4xOTYsMS4xOTcsMS4xOTZoMC4zNDJjMC42NjEsMCwxLjE5'+
			'Ni0wLjUzNSwxLjE5Ni0xLjE5NiYjeGQ7JiN4YTsmI3g5OyYjeDk7QzEyLjg2NiwxNS4zMzksMTIuMzMxLDE0LjgwNCwxMS42NywxNC44MDR6IE04LjE5NSwxNC44MDRINy44NTRjLTAuNjYxLDAtMS4xOTcsMC41MzUtMS4xOTcsMS4xOTYmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLDAuNjYxLDAuNTM2LDEuMTk2LDEuMTk3LDEuMTk2aDAuMzQxYzAuNjYsMCwxLjE5Ni0wLjUzNSwxLjE5Ni0xLjE5NkM5LjM5MiwxNS4zMzksOC44NTUsMTQuODA0LDguMTk1LDE0LjgwNHogTTE4LjI4NywxMy40MTImI3hkOyYjeGE7JiN4OTsmI3g5O2wtMC4yMjIsMC4xNDhjLTAuNDI3LDAuMjg1LTAuNTQxLDAuODYzLT'+
			'AuMjU2LDEuMjljMC4xOCwwLjI2OSwwLjQ3NCwwLjQxNCwwLjc3NCwwLjQxNGMwLjE3OCwwLDAuMzU3LTAuMDUsMC41MTctMC4xNTcmI3hkOyYjeGE7JiN4OTsmI3g5O2wwLjIyMS0wLjE0OGMwLjQyOC0wLjI4NSwwLjU0Mi0wLjg2MywwLjI1Ny0xLjI5QzE5LjI5MywxMy4yNDIsMTguNzE1LDEzLjEyNiwxOC4yODcsMTMuNDEyeiBNMjMuODEzLDkuNzJsLTAuMjIyLDAuMTQ3JiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTAuNDI3LDAuMjg2LTAuNTQyLDAuODY0LTAuMjU2LDEuMjkxYzAuMTc5LDAuMjY5LDAuNDc0LDAuNDE0LDAuNzc0LDAuNDE0YzAuMTc4LDAsMC4zNTctMC4wNSwwLjUxNy0wLjE1N2ww'+
			'LjIyMS0wLjE0OCYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAuNDI3LTAuMjg1LDAuNTQyLTAuODYzLDAuMjU2LTEuMjkxQzI0LjgxOCw5LjU0OSwyNC4yNDEsOS40MzQsMjMuODEzLDkuNzJ6IE0xNiwxNC44MDRoLTEuMTk2Yy0wLjY2MSwwLTEuMTk2LDAuNTM2LTEuMTk2LDEuMTk2JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMCwwLjY2LDAuNTM1LDEuMTk2LDEuMTk2LDEuMTk2YzAsMC42NjEsMC41MzUsMS4xOTYsMS4xOTYsMS4xOTZjMC42NiwwLDEuMTk2LTAuNTM1LDEuMTk2LTEuMTk2VjE2JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC0wLjMxNS0wLjEyOC0wLjYyMy0wLjM1LTAuODQ2QzE2LjYyMywxNC45Mz'+
			'EsMTYuMzE0LDE0LjgwNCwxNiwxNC44MDR6IE0yMS4wNSwxMS41NjVsLTAuMjIxLDAuMTQ4JiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTAuNDI3LDAuMjg2LTAuNTQyLDAuODYzLTAuMjU3LDEuMjkxYzAuMTgsMC4yNjgsMC40NzUsMC40MTMsMC43NzQsMC40MTNjMC4xNzgsMCwwLjM1Ny0wLjA1MSwwLjUxNy0wLjE1N2wwLjIyMS0wLjE0OCYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAuNDI4LTAuMjg2LDAuNTQyLTAuODYzLDAuMjU3LTEuMjkxUzIxLjQ3OCwxMS4yOCwyMS4wNSwxMS41NjV6Ii8+CiA8L2c+Cjwvc3ZnPgo=';
		me._button_image_fullscreen__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="button_image_fullscreen";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._button_image_fullscreen.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._button_image_fullscreen.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getIsFullscreen() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._button_image_fullscreen.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._button_image_fullscreen.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._button_image_fullscreen.style[domTransition]='';
				if (me._button_image_fullscreen.ggCurrentLogicStateVisible == 0) {
					me._button_image_fullscreen.style.visibility="hidden";
					me._button_image_fullscreen.ggVisible=false;
				}
				else {
					me._button_image_fullscreen.style.visibility=(Number(me._button_image_fullscreen.style.opacity)>0||!me._button_image_fullscreen.style.opacity)?'inherit':'hidden';
					me._button_image_fullscreen.ggVisible=true;
				}
			}
		}
		me._button_image_fullscreen.onmouseover=function (e) {
			me._button_image_fullscreen__img.style.visibility='hidden';
			me._button_image_fullscreen__imgo.style.visibility='inherit';
		}
		me._button_image_fullscreen.onmouseout=function (e) {
			me._button_image_fullscreen__img.style.visibility='inherit';
			me._button_image_fullscreen__imgo.style.visibility='hidden';
		}
		me._button_image_fullscreen.ggUpdatePosition=function (useTransition) {
		}
		me._button_fullscreen.appendChild(me._button_image_fullscreen);
		el=me._tt_fullscreen=document.createElement('div');
		els=me._tt_fullscreen__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt_fullscreen";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 20px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : 32px;';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		hs+='text-shadow: 1px 1px 4px #000000;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="";
		el.appendChild(els);
		me._tt_fullscreen.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._tt_fullscreen.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getHasTouch() == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._tt_fullscreen.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._tt_fullscreen.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._tt_fullscreen.style[domTransition]='left 0s, top 0s';
				if (me._tt_fullscreen.ggCurrentLogicStatePosition == 0) {
					this.ggDx = 0;
					me._tt_fullscreen.style.top='-25px';
					me._tt_fullscreen.ggUpdatePosition(true);
				}
				else {
					me._tt_fullscreen.ggDx=0;
					me._tt_fullscreen.style.top='32px';
					me._tt_fullscreen.ggUpdatePosition(true);
				}
			}
		}
		me._tt_fullscreen.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['button_fullscreen'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._tt_fullscreen.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._tt_fullscreen.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._tt_fullscreen.style[domTransition]='left 0s, top 0s';
				if (me._tt_fullscreen.ggCurrentLogicStateVisible == 0) {
					me._tt_fullscreen.style.visibility=(Number(me._tt_fullscreen.style.opacity)>0||!me._tt_fullscreen.style.opacity)?'inherit':'hidden';
					me._tt_fullscreen.ggVisible=true;
				}
				else {
					me._tt_fullscreen.style.visibility="hidden";
					me._tt_fullscreen.ggVisible=false;
				}
			}
		}
		me._tt_fullscreen.logicBlock_text = function() {
			var newLogicStateText;
			if (
				((player.getIsFullscreen() == false))
			)
			{
				newLogicStateText = 0;
			}
			else if (
				((player.getIsFullscreen() == true))
			)
			{
				newLogicStateText = 1;
			}
			else {
				newLogicStateText = -1;
			}
			if (me._tt_fullscreen.ggCurrentLogicStateText != newLogicStateText) {
				me._tt_fullscreen.ggCurrentLogicStateText = newLogicStateText;
				me._tt_fullscreen.style[domTransition]='left 0s, top 0s';
				if (me._tt_fullscreen.ggCurrentLogicStateText == 0) {
					me._tt_fullscreen.ggText="Enter Fullscreen";
					me._tt_fullscreen__text.innerHTML=me._tt_fullscreen.ggText;
					if (me._tt_fullscreen.ggUpdateText) {
					me._tt_fullscreen.ggUpdateText=function() {
						var hs="Enter Fullscreen";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._tt_fullscreen.ggUpdatePosition) me._tt_fullscreen.ggUpdatePosition();
					}
				}
				else if (me._tt_fullscreen.ggCurrentLogicStateText == 1) {
					me._tt_fullscreen.ggText="Exit Fullscreen";
					me._tt_fullscreen__text.innerHTML=me._tt_fullscreen.ggText;
					if (me._tt_fullscreen.ggUpdateText) {
					me._tt_fullscreen.ggUpdateText=function() {
						var hs="Exit Fullscreen";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._tt_fullscreen.ggUpdatePosition) me._tt_fullscreen.ggUpdatePosition();
					}
				}
				else {
					me._tt_fullscreen.ggText="";
					me._tt_fullscreen__text.innerHTML=me._tt_fullscreen.ggText;
					if (me._tt_fullscreen.ggUpdateText) {
					me._tt_fullscreen.ggUpdateText=function() {
						var hs="";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._tt_fullscreen.ggUpdatePosition) me._tt_fullscreen.ggUpdatePosition();
					}
				}
			}
		}
		me._tt_fullscreen.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((98-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me._button_fullscreen.appendChild(me._tt_fullscreen);
		me.divSkin.appendChild(me._button_fullscreen);
		el=me._indicaes_de_uso=document.createElement('div');
		el.ggId="Indica\xe7\xf5es de Uso";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 30px;';
		hs+='border-radius : 30px;';
		hs+='background : #ffffff;';
		hs+='border : 7px solid #3a3a3a;';
		hs+='cursor : default;';
		hs+='height : 401px;';
		hs+='left : -10000px;';
		hs+='opacity : 0.3;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 291px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._indicaes_de_uso.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._indicaes_de_uso.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getViewerSize().height <= 500))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._indicaes_de_uso.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._indicaes_de_uso.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._indicaes_de_uso.style[domTransition]='left 0s, top 0s, ' + cssPrefix + 'transform 0s, opacity 0s';
				if (me._indicaes_de_uso.ggCurrentLogicStatePosition == 0) {
					this.ggDx = 0;
					this.ggDy = 20;
					me._indicaes_de_uso.ggUpdatePosition(true);
				}
				else {
					me._indicaes_de_uso.ggDx=0;
					me._indicaes_de_uso.ggDy=0;
					me._indicaes_de_uso.ggUpdatePosition(true);
				}
			}
		}
		me._indicaes_de_uso.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getViewerSize().height <= 500))
			)
			{
				newLogicStateScaling = 0;
			}
			else if (
				((player.getViewerSize().width <= 900))
			)
			{
				newLogicStateScaling = 1;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._indicaes_de_uso.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._indicaes_de_uso.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._indicaes_de_uso.style[domTransition]='left 0s, top 0s, ' + cssPrefix + 'transform 0s, opacity 0s';
				if (me._indicaes_de_uso.ggCurrentLogicStateScaling == 0) {
					me._indicaes_de_uso.ggParameter.sx = 0.8;
					me._indicaes_de_uso.ggParameter.sy = 0.6;
					me._indicaes_de_uso.style[domTransform]=parameterToTransform(me._indicaes_de_uso.ggParameter);
				}
				else if (me._indicaes_de_uso.ggCurrentLogicStateScaling == 1) {
					me._indicaes_de_uso.ggParameter.sx = 0.8;
					me._indicaes_de_uso.ggParameter.sy = 0.8;
					me._indicaes_de_uso.style[domTransform]=parameterToTransform(me._indicaes_de_uso.ggParameter);
				}
				else {
					me._indicaes_de_uso.ggParameter.sx = 1;
					me._indicaes_de_uso.ggParameter.sy = 1;
					me._indicaes_de_uso.style[domTransform]=parameterToTransform(me._indicaes_de_uso.ggParameter);
				}
			}
		}
		me._indicaes_de_uso.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['indicaes_de_uso'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._indicaes_de_uso.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._indicaes_de_uso.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._indicaes_de_uso.style[domTransition]='left 0s, top 0s, ' + cssPrefix + 'transform 0s, opacity 0s';
				if (me._indicaes_de_uso.ggCurrentLogicStateAlpha == 0) {
					me._indicaes_de_uso.style.visibility=me._indicaes_de_uso.ggVisible?'inherit':'hidden';
					me._indicaes_de_uso.style.opacity=1;
				}
				else {
					me._indicaes_de_uso.style.visibility=me._indicaes_de_uso.ggVisible?'inherit':'hidden';
					me._indicaes_de_uso.style.opacity=0.3;
				}
			}
		}
		me._indicaes_de_uso.onmouseover=function (e) {
			me.elementMouseOver['indicaes_de_uso']=true;
			me._indicaes_de_uso.logicBlock_alpha();
		}
		me._indicaes_de_uso.onmouseout=function (e) {
			me.elementMouseOver['indicaes_de_uso']=false;
			me._indicaes_de_uso.logicBlock_alpha();
		}
		me._indicaes_de_uso.ontouchend=function (e) {
			me.elementMouseOver['indicaes_de_uso']=false;
			me._indicaes_de_uso.logicBlock_alpha();
		}
		me._indicaes_de_uso.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._iniciar=document.createElement('div');
		el.ggId="Iniciar";
		el.ggDx=1;
		el.ggDy=160;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 30px;';
		hs+='border-radius : 30px;';
		hs+='background : #3a3a3a;';
		hs+='border : 7px solid #3a3a3a;';
		hs+='cursor : default;';
		hs+='height : 71px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 290px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._iniciar.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._iniciar.onclick=function (e) {
			player.setVariableValue('indicativo', true);
			me._indicaes_de_uso.style[domTransition]='none';
			me._indicaes_de_uso.style.visibility='hidden';
			me._indicaes_de_uso.ggVisible=false;
		}
		me._iniciar.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._iniciar0=document.createElement('div');
		els=me._iniciar0__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Iniciar";
		el.ggDx=0;
		el.ggDy=-1;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text tooltip";
		el.ggType='text';
		hs ='';
		hs+='height : 36px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 165px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background: #ffffff;';
		hs+='background: rgba(255,255,255,0);';
		hs+='border: 1px solid #55aa7f;';
		hs+='border: 1px solid rgba(85,170,127,0);';
		hs+=cssPrefix + 'background-clip: padding-box;';
		hs+='background-clip: padding-box;';
		hs+='border-radius: 10px;';
		hs+=cssPrefix + 'border-radius: 10px;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 28px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 2px 3px 2px 3px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		els.innerHTML="CONTINUAR";
		el.appendChild(els);
		me._iniciar0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._iniciar0.logicBlock_text = function() {
			var newLogicStateText;
			if (
				((player.getVariableValue('POR') == true))
			)
			{
				newLogicStateText = 0;
			}
			else if (
				((player.getVariableValue('ENG') == true))
			)
			{
				newLogicStateText = 1;
			}
			else if (
				((player.getVariableValue('ESP') == true))
			)
			{
				newLogicStateText = 2;
			}
			else {
				newLogicStateText = -1;
			}
			if (me._iniciar0.ggCurrentLogicStateText != newLogicStateText) {
				me._iniciar0.ggCurrentLogicStateText = newLogicStateText;
				me._iniciar0.style[domTransition]='';
				if (me._iniciar0.ggCurrentLogicStateText == 0) {
					me._iniciar0.ggText="CONTINUAR";
					me._iniciar0__text.innerHTML=me._iniciar0.ggText;
					if (me._iniciar0.ggUpdateText) {
					me._iniciar0.ggUpdateText=function() {
						var hs="CONTINUAR";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._iniciar0.ggUpdatePosition) me._iniciar0.ggUpdatePosition();
					}
				}
				else if (me._iniciar0.ggCurrentLogicStateText == 1) {
					me._iniciar0.ggText="CONTINUE";
					me._iniciar0__text.innerHTML=me._iniciar0.ggText;
					if (me._iniciar0.ggUpdateText) {
					me._iniciar0.ggUpdateText=function() {
						var hs="CONTINUE";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._iniciar0.ggUpdatePosition) me._iniciar0.ggUpdatePosition();
					}
				}
				else if (me._iniciar0.ggCurrentLogicStateText == 2) {
					me._iniciar0.ggText="CONTINUAR";
					me._iniciar0__text.innerHTML=me._iniciar0.ggText;
					if (me._iniciar0.ggUpdateText) {
					me._iniciar0.ggUpdateText=function() {
						var hs="CONTINUAR";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._iniciar0.ggUpdatePosition) me._iniciar0.ggUpdatePosition();
					}
				}
				else {
					me._iniciar0.ggText="CONTINUAR";
					me._iniciar0__text.innerHTML=me._iniciar0.ggText;
					if (me._iniciar0.ggUpdateText) {
					me._iniciar0.ggUpdateText=function() {
						var hs="CONTINUAR";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._iniciar0.ggUpdatePosition) me._iniciar0.ggUpdatePosition();
					}
				}
			}
		}
		me._iniciar0.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 2;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((167-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me._iniciar.appendChild(me._iniciar0);
		me._indicaes_de_uso.appendChild(me._iniciar);
		el=me._iniciar_1=document.createElement('div');
		els=me._iniciar_1__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Iniciar_1";
		el.ggDx=3;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text tooltip";
		el.ggType='text';
		hs ='';
		hs+='height : 36px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : 22px;';
		hs+='visibility : inherit;';
		hs+='width : 212px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background: #ffffff;';
		hs+='background: rgba(255,255,255,0);';
		hs+='border: 1px solid #55aa7f;';
		hs+='border: 1px solid rgba(85,170,127,0);';
		hs+=cssPrefix + 'background-clip: padding-box;';
		hs+='background-clip: padding-box;';
		hs+='border-radius: 10px;';
		hs+=cssPrefix + 'border-radius: 10px;';
		hs+='color: rgba(58,58,58,1);';
		hs+='font-size: 28px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 2px 3px 2px 3px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		els.innerHTML="Tour Virtual 360";
		el.appendChild(els);
		me._iniciar_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._iniciar_1.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 2;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((214-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me._indicaes_de_uso.appendChild(me._iniciar_1);
		el=me._indicativo2=document.createElement('div');
		els=me._indicativo2__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Indicativo2";
		el.ggDx=-3;
		el.ggDy=68;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text tooltip";
		el.ggType='text';
		hs ='';
		hs+='height : 67px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 260px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 262px;';
		hs+='height: auto;';
		hs+='background: #ffffff;';
		hs+='background: rgba(255,255,255,0);';
		hs+='border: 1px solid #55aa7f;';
		hs+='border: 1px solid rgba(85,170,127,0);';
		hs+=cssPrefix + 'background-clip: padding-box;';
		hs+='background-clip: padding-box;';
		hs+='border-radius: 10px;';
		hs+=cssPrefix + 'border-radius: 10px;';
		hs+='color: rgba(58,58,58,1);';
		hs+='text-align: center;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 2px 3px 2px 3px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		els.innerHTML="COMO NAVEGAR NO AMBIENTE?<br\/>Clique na imagem e arrastre";
		el.appendChild(els);
		me._indicativo2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._indicativo2.logicBlock_text = function() {
			var newLogicStateText;
			if (
				((player.getVariableValue('POR') == true))
			)
			{
				newLogicStateText = 0;
			}
			else if (
				((player.getVariableValue('ENG') == true))
			)
			{
				newLogicStateText = 1;
			}
			else if (
				((player.getVariableValue('ESP') == true))
			)
			{
				newLogicStateText = 2;
			}
			else {
				newLogicStateText = -1;
			}
			if (me._indicativo2.ggCurrentLogicStateText != newLogicStateText) {
				me._indicativo2.ggCurrentLogicStateText = newLogicStateText;
				me._indicativo2.style[domTransition]='';
				if (me._indicativo2.ggCurrentLogicStateText == 0) {
					me._indicativo2.ggText="COMO NAVEGAR NO AMBIENTE?\nClique na imagem e arrastre";
					me._indicativo2__text.innerHTML=me._indicativo2.ggText;
					if (me._indicativo2.ggUpdateText) {
					me._indicativo2.ggUpdateText=function() {
						var hs="COMO NAVEGAR NO AMBIENTE?\nClique na imagem e arrastre";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._indicativo2.ggUpdatePosition) me._indicativo2.ggUpdatePosition();
					}
				}
				else if (me._indicativo2.ggCurrentLogicStateText == 1) {
					me._indicativo2.ggText="HOW TO NAVIGATE THE \nENVIRONMENT?\nClick on the image and drag";
					me._indicativo2__text.innerHTML=me._indicativo2.ggText;
					if (me._indicativo2.ggUpdateText) {
					me._indicativo2.ggUpdateText=function() {
						var hs="HOW TO NAVIGATE THE \nENVIRONMENT?\nClick on the image and drag";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._indicativo2.ggUpdatePosition) me._indicativo2.ggUpdatePosition();
					}
				}
				else if (me._indicativo2.ggCurrentLogicStateText == 2) {
					me._indicativo2.ggText="COMO NAVEGAR EN EL AMBIENTE?\nClick en la imagem y arrastrar";
					me._indicativo2__text.innerHTML=me._indicativo2.ggText;
					if (me._indicativo2.ggUpdateText) {
					me._indicativo2.ggUpdateText=function() {
						var hs="COMO NAVEGAR EN EL AMBIENTE?\nClick en la imagem y arrastrar";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._indicativo2.ggUpdatePosition) me._indicativo2.ggUpdatePosition();
					}
				}
				else {
					me._indicativo2.ggText="COMO NAVEGAR NO AMBIENTE?\nClique na imagem e arrastre";
					me._indicativo2__text.innerHTML=me._indicativo2.ggText;
					if (me._indicativo2.ggUpdateText) {
					me._indicativo2.ggUpdateText=function() {
						var hs="COMO NAVEGAR NO AMBIENTE?\nClique na imagem e arrastre";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._indicativo2.ggUpdatePosition) me._indicativo2.ggUpdatePosition();
					}
				}
			}
		}
		me._indicativo2.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 2;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._indicaes_de_uso.appendChild(me._indicativo2);
		el=me._dedo=document.createElement('div');
		els=me._dedo__img=document.createElement('img');
		els.className='ggskin ggskin_dedo';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAYAAAD0eNT6AAARwUlEQVR4nO3dy1rbyBqGUbGfXBS+/4G5K/agm7RDDOhQ52+taXegpCj+X5WwedmgkNvt9b33GmAW9/vbS+81kM0FyCWGPlwnBujBRccpBj/UIQZoxYXGIQY/tCEEqM0Fxi4GP7QnAqjJxcWPDH/oSwhQg4uKbxn+MAYRQGkuKJ4y+GE8IoCSXEz8xfCHcYkASvlf7wUAsJ9ApxQlyR+8uMAc7ARwlR0AfjP8AXIoSLZtM/xhRnYBuMIOAMCkhDtXCAC8iAAEsn0UzvCH+XkUwBl2AAAgkGoM5u4f1mEXgKPsAABAIAEAAIEEAMACPNLjqF+9F0AfXizaSn0+6zqDcdkBgMpSh/+2/XPsyccPIxMAUJHhR0t2XDhCAABAIAEAAIEEAFRkS9Y5gFF5Ph'+
			'nICzKsy8+dsJcdAAAIJAAAIJAAAIBAAgAAAgkAAAgkAAAgkAAAgEACAAACCQAACCQAACCQAACAQAIAAAIJAAAIJAAAIJAAAIBAAgAAAgkAAAgkAAAg0K/eC2AN9/vbS+81wGxut9f33msglx0AAAgkAAAgkAAAgEACAAACCQAACCQAACCQAACAQAIAAAIJAAAIJAAAIJAAAIBAAgAAAgkAAAgkAAAgkAAAgEACAAACCQAACCQAACCQAACAQAIAAAIJAAAIJAAAIJAAAIBAAgAAAgkAAAgkAAAgkAAAgEACAAACCQAACCQAACCQAACAQAIAAAIJAAAIJAAAIJAAAIBAAgAAAgkAAAgkAAAgkAAAgEACAAACCQAACCQAACCQAACAQAIAAAIJAAAIJAAAIJAAAIBAAgAAAgkAAAgkAAAgkAAAgEACAAACCQAACCQAACCQ'+
			'AACAQAIAAAIJAAAIJAAAIJAAAIBAAgAAAgkAAAgkAAAgkAAAgEACAAACCQAACCQAACCQAACAQAIAAAIJAAAIJAAAIJAAAIBAAgAAAgkAAAgkAAAgkAAAgEACAAACCQAACCQAACCQAACAQAIAAAIJAAAIJAAAIJAAAIBAAgAAAgkAAAgkAAAgkAAAgEACAAACCQAACCQAACCQAACAQAIAAAIJAAAIJAAAIJAAAIBAAgAAAgkAAAgkAAAgkAAAgEACAAACCQAACCQAACCQAACAQAIAAAIJAAAIJAAAIJAAAIBAAgAAAgkAAAgkAAAgkAAAgEACAAACCQAACCQAACCQAACAQAIAAAIJAAAIJAAAIJAAAIBAAgAAAgkAAAgkAAAgkAAAgEACAAACCQAACCQAACCQAACAQAIAAAL96r0AYAy32+v7V//tfn97abkWoD4BAA'+
			'G+G+6l/rxIgLkIAFjQ1YFf6nuKAhiXAIAF9Bj4e3xelyCAcQgAmNSoQ/87H2sWAtCfAICJzDj0n3k8DjEAfQgAmMAqg/8ZuwLQhwCAga08+D8TAtCWAIAB9Rz8jwO497sJxADUIwBgILUH7tGBuvf/r7Xu2+31XQRAHQIABlFjiLYanp+/T8lj8WgA6hAA0FnJYTnKkKwRBEIAyhIA0EmpwT/DQPxYY6kQmOGYYXQCADooMQhnHIKlfsBQBMB1AgAauzr8Vxl8V3cFPBKAawQANGLwP1ciBFY9N1DT/3ovABJcGf73+9tLwoC7cpxJH5gEpQgAqOzscEoZ/J+JAGhDAEBFV4Z/6bXM5Gz83G6v70IA9hEAUMmZQZR61/+VKyFQYz2wEgEAFZwd/jXWsgIRAOUJACjs6OBx17+PCICyBAAUdGb411rLis7EkgiA5wQA'+
			'FGL4t+PcwXUCAAow/Ns7cg7tAsDffBIgXLTS8P/qWEZd8/3+9rL3/PvEQPiTAICGeg+gq5+7/0zvYxIBcI4AgAuODNReg6f29vfj1+91jCIAjhMAcNLIw7/XM+/P37flcYsAOMYPAcIJow7/0T4Kt/V6DHXYTwBARa0G0miD/7OW69t7zkc+X9CCAICD9g6OFsN/9MH/2WhrHW090JIAgANGGf6zDf5HLdbuUQD8TADAZGYd/J/VDgGPAuB7AgB2GuHuf8VhJQKgDwEAOxj+da18bDAqAQCDm/l5/xG1jtEuADwnAOAHPe/+04ZS7wiAJAIACjD8y+m545F6zskkAOAbBtE67ALAnwQAXFR6sIww/EcYluIL6vLLgOALCYPgu0H/3X9rdW5K/9KeI78wCFYnAOCC2e7+S6338eu0+HXDPX6b4gi7IFCTRwAwiNofiF'+
			'NroNX82h9KnhuDHf5hBwCe2DNwSg6SFd7+9vG9bLHDHOwAwKJ63enW2hFovQsgZFidAIBPZr/7b7Elv3cdpb+moQzlCADoqMbwL/n1rhptPY9GXhu0IABgEaMOtNI7Ei13Aew4sDIBAA9abv+n/WT7DGuEJAIAJjfTYB0tnmY6d1CaAIADDLA8HgOwKgEAk5p1+I8WUZBKAMC/Wn6+fYvvM7KR4mWktUBLAgAmtMLQWuEYYGYCAHYysMZj1wbOEwAwmZVCZKVjgdkIAGjo6p2kgVmH80oiAQCbLd6erg5ff3dwjgAAgEACAHYosUVs+x8YiQAAupshbjxqYDUCAAACCQCYwAx3yD2VuDt3jkkjAAAg0K/eCwDGsedOutad8v3+9uI5O7QjACDc0aH7+P/bNod5eQQAwa7ecd9ur+/u2mFOAgAClR7cIgDmIwCggZEG'+
			'ZK21jHSMwM8EADQwyrPy2kNaBMA8BABQlAiAOQgACGEwA48EAARoPfzPfD+BAm0JAAAIJACAKma7o59tvXCVAIAJXBlOBhvwjAAApjfK2yxhJgIA6G6GXQqRwWoEAOwwwu+bn2FIAvMQAAAQSADAZnu3p6s7G/7u4BwBABPxGKAO55VEAgB2GuHnAFZj8EI/AgAmY2i2J9xYkQCACa0QAXZUoC8BAP9qNUwMrbECZqS1QEsCAA4YaViMtJYjSq1bsME1AgA6KDVUZo0AoD8BAJObKQJGu/uf6dxBaQIAHuwZLKMNsW2bY5DNsEZIIgBgEaMO2Nvt9b3k2lo+k/f8n5UJAOio9IAZLQJGW8+jkdcGLQgA+KTlY4C93++I0nfcI3FHDuUIAFjUqhFQwp5zIzZYnQCAJ2bfBfiwUgQYyFCWAIBBGHBfa/2OCX8XJBAAcM'+
			'FKd9ijMoyhDgEAX+gxeAy7P/V4l4S/A1IIALio9C6AAQS0IADgG72GsQhY/zMSoDcBAAXUGC7JEdBr+Cefc/IIAPjB3qEgAq67399e0o4ZehEAMLiUodj7sxASzjE8EgCwQ89dgKNrmJHhD+0JANhJBNSx4jHBDH71XgBwzMfAnP2n2msPfnf/8D07AHDACLsAR9cyIsMf+hMAcNBoETDTEGux3tl3RqAVAQAVtRpGo4dAq/UdOd8jny9oQQDACUeGR8s70tFCYLT1fBhxTdCaAICTRo2Abftv8CYNOlv/cIwAgAtGjoAktv7hOAEADYmA8gx/OEcAwEVHh4oIKMfwh/MEABQgAtq63V7fDX+4RgBAISKgjaPnzfCH5wQAFHQmAoTAfoY/lCMAoLAzQ0cE/Mzwh7IEAFQgAsqxSwJ1CACo5GwEGHb/OXsu3P3DzwQA'+
			'VHR2EKVHwNkQSvv0Q7hCAEBlVyIgLQSuHLPBD8f86r0ASPAxnM4Mt48/s/KAuxo6s56bWdfNGuwAQENXXvBX3RG4cky2/OE8OwDQ2P3+9nJl6K2wI1AiZGY+fhiBAIAOrjwS+DBbCJTcvZjlmGFkAgA6urobsG1/DtYRB6PBD2PyjylQjefIXpivqfVsv0RgjMI1BmX5BxVIAIxrlWFdkmsL6vAIAAZS4mcDVmHwQ10CAAaUHAIGP7QhAGBgSSFg8ENbAgAmsGoIGPrQjwCAiTwOzJljwOCH/gQATGq2GDD0YSwCABYwagwY+jAuAQCL+Tx0RwoCYBx+GyAABBIAABBIAABAIAEAAIEEAAAE8i4AYDhH3rnQ4q2G1sOKBAAwjDNvWfz4M6UH3dm3T6ash/kJAKC7Ep9VUHLQjbSeUp/jIAT4zM8AAF2V/qCiq19vpP'+
			'XU+BAnHwzFBwEAdFNrGF3dLi/tyqONGkQA2yYAgE5qD6GjX3+k9bQY0CIAAQA012r47P0+o60HWhAAQLTRhnLL9Yx27LQlAICmWg+d0YbcaOshlwAAGESPOBAkuQQAsLyvhpzhRzIBADRj4P7DeWAEAgAgnCDJJAAAIJAAABiAu3BaEwAAEEgAAEAgAQAAgQQAAAQSAAAQSAAAQCABAACBBAAABBIAABBIAABAIAEAAIEEAAAEEgAAEEgAAEAgAQAAgX71XgCwrpF+x/1Ia9m28dZDHjsAABBIAABAIAEAAIEEAAAEEgAAEEgAAEAgAQAAgQQAAAQSAAAQSAAAQCABAACBBAAABBIAABBIAABAIL8OGA46+mtc7/e3l1prAThLAMBOZ39/+8efEwLASDwCgB/cbq/vZ4f/569TYj0AJQgA+EbpoV0qJgCuEgDwhZqD'+
			'WgQAvQkA6EQEAD0JAHii1XAWAUAvAgA6EwFAD94GSBG9h1jJt9j1OJbb7fXd2wSBluwAsITeAVLCCscAzEMAAEAgAcAyVriDXuEYgDkIABiMCABaEAAsZZXhucpxAOMSADAoEQDUJABYjsEJ8DMBAAMTM0AtAoAlrTQ4VzoWYBwCgGWtNDhXOhZgDAIAPhn1I3lFAFCSAGBphibAcwIAJiJogFIEAMs7MzRHfQywbSIAKEMAwIREAHCVACDCarsAAFcJAJiUXQDgCgFAjBV3AUQAcJYAgMmJAOAMAUCUFXcBtk0EAMcJAFiECACOEADEWXUXYNtEALCfAICdZokAgD0EAJFWvlNe+diAcgQAsTwKAJIJAFiUCAC+M8XdDOUZDv85c1fv/LGaWXa3KMcOAAAEEgDEW/lnAQC+IgAAIJAAgM0uAJBHAMAFIgCYlQAIZX'+
			'D9zU/2A0kEAFwkpoAZCQB4YBcASCEAgrlzLce5BGYjAOATuwBAAgEQzp1rOc4lMBMBAE/YBQBWJwBw5/oFHw4ErEwAQGEiAJiBAGDbNkPrKx4FAKsSAPwmAspxLoHRCQD+YHD9zS4AsCIBwF9EQBnOIzAyAcBThtef7AIAqxEAfEkEXOccAqMSAHzLAPuPXQBgJQKAH4mAa5w/YERemDjEXfD5ge7cMTKhmscOAIfc728vXigA5ueFnMsS72ztArAaYZ/nV+8FML/HFw4DDmAOig8aE0mMyA5AHj8DAACBBAA05k4LGIEAAIBAAgA6sAsA9CYAoBMRAPQkAAAgkACAjuwCAL0IAAAIJACgM7sAQA8CAAACCQAYgF0AoDUBAACBBAAMwi4A0JIAgIGIAKAVAQAAgQQADMYuANCCAACAQAIABmQXAKhNAABAIAEAg7IL'+
			'ANQkAGBgIgCoRQAAQCABAIOzCwDUIAAAIJAAgAnYBQBKEwAAEEgAwCTsAgAlCQCYiAgAShEAAOGEZSYBAJPxYg2UIAAAIJAAgAnZBQCuEgAAEEgAwKTsAgBXCACYmAgAzhIAAMFEZC4BAJPzAg6cIQAAIJAAgAXYBQCOEgAAoYRjNgEAi/BiDhwhAGAhIgDYSwAAQCB3C7Cg2+31vfcaGJvdIuwAAEAgAQALcncH/EQAAIQRiGybAIBleZEHviMAYGEiAPiKAAAIIgr5IABgcV7wgWcEAEAIMcgjAQABvPADnwkAgAAikM8EAIQwAIBHAgBgceKPZwQABDEIgA8CAGBhoo+vuDAgkF8XnMHw5zt2ACCQwQAIAIAFiTx+IgAglAEB2bwAQDg/D7AeccceLhJABCzE8GcvjwAAFmH4c4SLBdi2zS7A7Ax/jnLBAL+JgD'+
			'kZ/pzhEQDwm0ECOfxjB/5iJ2Aeoo2zXDjAUyJgbAY/V7mAgG8JgfEY/pTgIgJ+JALGYfhTigsJ2EUE9Gf4U5KLCThECPRh+FOaCwo4TAS0Y/BTiwsLOE0I1GX4U5OLC7hMCJRl8NOCiwwoQgSUYfjTigsNKEoInGPw05oLDqhCCOxj8NOLCw+oTgz8zeCnNxcg0FRyDBj6jMTFCHSTEAOGPqNyYQLDWCUIDH1m4CIFhjZ6FBj2zMqFC0ynVxQY9qzk/9x+EV0UirVsAAAAAElFTkSuQmCC';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="dedo";
		el.ggDx=71;
		el.ggDy=-37;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 129px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 135px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._dedo.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._dedo.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._indicaes_de_uso.appendChild(me._dedo);
		el=me._mouse=document.createElement('div');
		els=me._mouse__img=document.createElement('img');
		els.className='ggskin ggskin_mouse';
		hs=basePath + 'images/mouse.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="mouse";
		el.ggDx=-55;
		el.ggDy=-42;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 145px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 152px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._mouse.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._mouse.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._indicaes_de_uso.appendChild(me._mouse);
		me.divSkin.appendChild(me._indicaes_de_uso);
		el=me._esp=document.createElement('div');
		els=me._esp__img=document.createElement('img');
		els.className='ggskin ggskin_esp';
		hs=basePath + 'images/esp.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="ESP";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='bottom : 3px;';
		hs+='height : 20px;';
		hs+='opacity : 0.5;';
		hs+='position : absolute;';
		hs+='right : -1px;';
		hs+='visibility : inherit;';
		hs+='width : 20px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._esp.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._esp.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['esp'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._esp.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._esp.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._esp.style[domTransition]='opacity 0s';
				if (me._esp.ggCurrentLogicStateAlpha == 0) {
					me._esp.style.visibility=me._esp.ggVisible?'inherit':'hidden';
					me._esp.style.opacity=1;
				}
				else {
					me._esp.style.visibility=me._esp.ggVisible?'inherit':'hidden';
					me._esp.style.opacity=0.5;
				}
			}
		}
		me._esp.onclick=function (e) {
			player.setVariableValue('ENG', false);
			player.setVariableValue('POR', false);
			player.setVariableValue('ESP', true);
		}
		me._esp.onmouseover=function (e) {
			me.elementMouseOver['esp']=true;
			me._esp.logicBlock_alpha();
		}
		me._esp.onmouseout=function (e) {
			me.elementMouseOver['esp']=false;
			me._esp.logicBlock_alpha();
		}
		me._esp.ontouchend=function (e) {
			me.elementMouseOver['esp']=false;
			me._esp.logicBlock_alpha();
		}
		me._esp.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._esp);
		el=me._ing=document.createElement('div');
		els=me._ing__img=document.createElement('img');
		els.className='ggskin ggskin_ing';
		hs=basePath + 'images/ing.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="ING";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='bottom : 26px;';
		hs+='height : 23px;';
		hs+='opacity : 0.5;';
		hs+='position : absolute;';
		hs+='right : -5px;';
		hs+='visibility : inherit;';
		hs+='width : 28px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ing.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._ing.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['ing'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._ing.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._ing.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._ing.style[domTransition]='opacity 0s';
				if (me._ing.ggCurrentLogicStateAlpha == 0) {
					me._ing.style.visibility=me._ing.ggVisible?'inherit':'hidden';
					me._ing.style.opacity=1;
				}
				else {
					me._ing.style.visibility=me._ing.ggVisible?'inherit':'hidden';
					me._ing.style.opacity=0.5;
				}
			}
		}
		me._ing.onclick=function (e) {
			player.setVariableValue('ESP', false);
			player.setVariableValue('POR', false);
			player.setVariableValue('ENG', true);
		}
		me._ing.onmouseover=function (e) {
			me.elementMouseOver['ing']=true;
			me._ing.logicBlock_alpha();
		}
		me._ing.onmouseout=function (e) {
			me.elementMouseOver['ing']=false;
			me._ing.logicBlock_alpha();
		}
		me._ing.ontouchend=function (e) {
			me.elementMouseOver['ing']=false;
			me._ing.logicBlock_alpha();
		}
		me._ing.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._ing);
		el=me._por=document.createElement('div');
		els=me._por__img=document.createElement('img');
		els.className='ggskin ggskin_por';
		hs=basePath + 'images/por.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="POR";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='bottom : 55px;';
		hs+='height : 19px;';
		hs+='opacity : 0.5;';
		hs+='position : absolute;';
		hs+='right : -1px;';
		hs+='visibility : inherit;';
		hs+='width : 20px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._por.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._por.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['por'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._por.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._por.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._por.style[domTransition]='opacity 0s';
				if (me._por.ggCurrentLogicStateAlpha == 0) {
					me._por.style.visibility=me._por.ggVisible?'inherit':'hidden';
					me._por.style.opacity=1;
				}
				else {
					me._por.style.visibility=me._por.ggVisible?'inherit':'hidden';
					me._por.style.opacity=0.5;
				}
			}
		}
		me._por.onclick=function (e) {
			player.setVariableValue('POR', true);
			player.setVariableValue('ENG', false);
			player.setVariableValue('ESP', false);
		}
		me._por.onmouseover=function (e) {
			me.elementMouseOver['por']=true;
			me._por.logicBlock_alpha();
		}
		me._por.onmouseout=function (e) {
			me.elementMouseOver['por']=false;
			me._por.logicBlock_alpha();
		}
		me._por.ontouchend=function (e) {
			me.elementMouseOver['por']=false;
			me._por.logicBlock_alpha();
		}
		me._por.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._por);
		el=me._enter_vr=document.createElement('div');
		els=me._enter_vr__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE2LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgeD0iMHB4IiB3aWR0aD0iMzJweCIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAtMzM0NS4yNSAtMjYwNiAzMiAzMiIgeT0iMHB4IiB4bWxuczp4bGluaz'+
			'0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgdmlld0JveD0iLTMzNDUuMjUgLTI2MDYgMzIgMzIiIGhlaWdodD0iMzJweCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KIDxnIGlkPSJMYXllcl8xIi8+CiA8ZyBpZD0iRWJlbmVfMSI+CiAgPGc+CiAgIDxnPgogICAgPHBhdGggZD0iTS0zMzI5LjI0OS0yNjAyLjVjLTYuODkyLDAtMTIuNSw1LjYwNy0xMi41LDEyLjVzNS42MDcsMTIuNSwxMi41LDEyLjVjNi44OTMsMCwxMi41LTUuNjA3LDEyLjUtMTIuNSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O1MtMzMyMi4zNTUtMjYw'+
			'Mi41LTMzMjkuMjQ5LTI2MDIuNXogTS0zMzI5LjI0OS0yNTgwLjEzMmMtNS40NDEsMC05Ljg3LTQuNDI3LTkuODctOS44NjhjMC01LjQ0Miw0LjQyOS05Ljg2OSw5Ljg3LTkuODY5JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7YzUuNDQyLDAsOS44Nyw0LjQyOCw5Ljg3LDkuODY5Qy0zMzE5LjM3OC0yNTg0LjU2LTMzMjMuODA1LTI1ODAuMTMyLTMzMjkuMjQ5LTI1ODAuMTMyeiIgZmlsbD0iIzFBMTcxQiIvPgogICAgPHBhdGggZD0iTS0zMzIxLjU4OS0yNTkzLjgwOGMtMC45LTEuMjYtMi4zOTktMS40MjItMy42MDQtMS40MjJoLTEuNzA0di0xLjY0NmMwLTAuNjY4LTAuNTQyLTEuMjA5LT'+
			'EuMjEtMS4yMDkmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtoLTIuMjgxYy0wLjY2OCwwLTEuMjEsMC41NDEtMS4yMSwxLjIwOXYxLjY0NmgtMS43MDJjLTEuMjA1LDAtMi43MDQsMC4xNjItMy42MDYsMS40MjJjLTAuNjg4LDAuOTYxLTEuMDA3LDIuMjItMS4wMDcsMy45NjMmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjMCwyLjEsMC42MDEsMy44MTcsMS42MDksNC41OTNjMC44ODEsMC42NzksMS41MDYsMC43OTMsMi41NzMsMC43OTNjMS4yNTgsMCwyLjIxNC0wLjQ5LDIuOTgyLTAuODgzJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7YzAuNTc5LTAuMjk3LDEuMDM2LTAu'+
			'NTMxLDEuNTAxLTAuNTMxczAuOTIzLDAuMjM0LDEuNTAyLDAuNTMyYzAuNzY3LDAuMzkzLDEuNzI0LDAuODgyLDIuOTgyLDAuODgyJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7YzEuMDY1LDAsMS42OS0wLjExNCwyLjU3Mi0wLjc5MmMxLjAwOS0wLjc3NiwxLjYxMS0yLjQ5MywxLjYxMS00LjU5NUMtMzMyMC41ODEtMjU5MS41ODgtMzMyMC45MDItMjU5Mi44NDgtMzMyMS41ODktMjU5My44MDh6JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7IE0tMzMyMy42NjctMjU4Ny4xNjhjLTAuMzM1LDAuMjU5LTAuMzc4LDAuMjkyLTEuMDk3LDAuMjkyYy0wLjY3NSwwLTEuMjMzLTAuMjg3LT'+
			'EuODc5LTAuNjE4JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7Yy0wLjcyOS0wLjM3My0xLjU1Ny0wLjc5Ni0yLjYwNS0wLjc5NnMtMS44NzUsMC40MjMtMi42MDQsMC43OTZjLTAuNjQ2LDAuMzMyLTEuMjA0LDAuNjE4LTEuODc5LDAuNjE4JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7Yy0wLjcxOSwwLTAuNzYyLTAuMDMzLTEuMDk2LTAuMjkyYy0wLjE0Mi0wLjExMi0wLjY2OC0wLjg5My0wLjY2OC0yLjY3N2MwLTEuMTk3LDAuMTgxLTIuMDMzLDAuNTU1LTIuNTU1JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7YzAuMTI2LTAuMTc2LDAuNDM0LTAuNDExLDEuNjQtMC40MTFo'+
			'OC4xMDdjMS4yMDUsMCwxLjUxMiwwLjIzNCwxLjYzOCwwLjQxMWMwLjM3NCwwLjUyMiwwLjU1NiwxLjM1OCwwLjU1NiwyLjU1NSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O0MtMzMyMy0yNTg4LjA2LTMzMjMuNTI3LTI1ODcuMjgtMzMyMy42NjctMjU4Ny4xNjh6IiBmaWxsPSIjMUExNzFCIi8+CiAgIDwvZz4KICAgPGcgb3BhY2l0eT0iMC40Ij4KICAgIDxwYXRoIGQ9Ik0tMzMyOS4yNDktMjYwMi41Yy02Ljg5MiwwLTEyLjUsNS42MDctMTIuNSwxMi41czUuNjA3LDEyLjUsMTIuNSwxMi41JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7YzYuODkzLDAsMTIuNS01LjYwNywxMi41LT'+
			'EyLjVTLTMzMjIuMzU1LTI2MDIuNS0zMzI5LjI0OS0yNjAyLjV6IE0tMzMyOS4yNDktMjU4MC4xMzJjLTUuNDQxLDAtOS44Ny00LjQyNy05Ljg3LTkuODY4JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7YzAtNS40NDIsNC40MjktOS44NjksOS44Ny05Ljg2OWM1LjQ0MiwwLDkuODcsNC40MjgsOS44Nyw5Ljg2OUMtMzMxOS4zNzgtMjU4NC41Ni0zMzIzLjgwNS0yNTgwLjEzMi0zMzI5LjI0OS0yNTgwLjEzMnoiIHN0cm9rZS13aWR0aD0iMS41IiBmaWxsPSJub25lIiBzdHJva2U9IiMxQTE3MUIiLz4KICAgIDxwYXRoIGQ9Ik0tMzMyMS41ODktMjU5My44MDhjLTAuOS0xLjI2LTIuMzk5LTEu'+
			'NDIyLTMuNjA0LTEuNDIyaC0xLjcwNHYtMS42NDYmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjMC0wLjY2OC0wLjU0Mi0xLjIwOS0xLjIxLTEuMjA5aC0yLjI4MWMtMC42NjgsMC0xLjIxLDAuNTQxLTEuMjEsMS4yMDl2MS42NDZoLTEuNzAyYy0xLjIwNSwwLTIuNzA0LDAuMTYyLTMuNjA2LDEuNDIyJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7Yy0wLjY4OCwwLjk2MS0xLjAwNywyLjIyLTEuMDA3LDMuOTYzYzAsMi4xLDAuNjAxLDMuODE3LDEuNjA5LDQuNTkzYzAuODgxLDAuNjc5LDEuNTA2LDAuNzkzLDIuNTczLDAuNzkzJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7Yz'+
			'EuMjU4LDAsMi4yMTQtMC40OSwyLjk4Mi0wLjg4M2MwLjU3OS0wLjI5NywxLjAzNi0wLjUzMSwxLjUwMS0wLjUzMXMwLjkyMywwLjIzNCwxLjUwMiwwLjUzMiYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2MwLjc2NywwLjM5MywxLjcyNCwwLjg4MiwyLjk4MiwwLjg4MmMxLjA2NSwwLDEuNjktMC4xMTQsMi41NzItMC43OTJjMS4wMDktMC43NzYsMS42MTEtMi40OTMsMS42MTEtNC41OTUmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtDLTMzMjAuNTgxLTI1OTEuNTg4LTMzMjAuOTAyLTI1OTIuODQ4LTMzMjEuNTg5LTI1OTMuODA4eiBNLTMzMjMuNjY3LTI1ODcuMTY4Yy0wLjMzNSww'+
			'LjI1OS0wLjM3OCwwLjI5Mi0xLjA5NywwLjI5MiYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2MtMC42NzUsMC0xLjIzMy0wLjI4Ny0xLjg3OS0wLjYxOGMtMC43MjktMC4zNzMtMS41NTctMC43OTYtMi42MDUtMC43OTZzLTEuODc1LDAuNDIzLTIuNjA0LDAuNzk2JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7Yy0wLjY0NiwwLjMzMi0xLjIwNCwwLjYxOC0xLjg3OSwwLjYxOGMtMC43MTksMC0wLjc2Mi0wLjAzMy0xLjA5Ni0wLjI5MmMtMC4xNDItMC4xMTItMC42NjgtMC44OTMtMC42NjgtMi42NzcmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjMC0xLjE5NywwLjE4MS0yLj'+
			'AzMywwLjU1NS0yLjU1NWMwLjEyNi0wLjE3NiwwLjQzNC0wLjQxMSwxLjY0LTAuNDExaDguMTA3YzEuMjA1LDAsMS41MTIsMC4yMzQsMS42MzgsMC40MTEmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjMC4zNzQsMC41MjIsMC41NTYsMS4zNTgsMC41NTYsMi41NTVDLTMzMjMtMjU4OC4wNi0zMzIzLjUyNy0yNTg3LjI4LTMzMjMuNjY3LTI1ODcuMTY4eiIgc3Ryb2tlLXdpZHRoPSIxLjUiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzFBMTcxQiIvPgogICA8L2c+CiAgIDxnPgogICAgPHBhdGggZD0iTS0zMzI5LjI0OS0yNjAyLjVjLTYuODkyLDAtMTIuNSw1LjYwNy0xMi41LDEyLjVzNS42MDcs'+
			'MTIuNSwxMi41LDEyLjVjNi44OTMsMCwxMi41LTUuNjA3LDEyLjUtMTIuNSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O1MtMzMyMi4zNTUtMjYwMi41LTMzMjkuMjQ5LTI2MDIuNXogTS0zMzI5LjI0OS0yNTgwLjEzMmMtNS40NDEsMC05Ljg3LTQuNDI3LTkuODctOS44NjhjMC01LjQ0Miw0LjQyOS05Ljg2OSw5Ljg3LTkuODY5JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7YzUuNDQyLDAsOS44Nyw0LjQyOCw5Ljg3LDkuODY5Qy0zMzE5LjM3OC0yNTg0LjU2LTMzMjMuODA1LTI1ODAuMTMyLTMzMjkuMjQ5LTI1ODAuMTMyeiIgZmlsbC1vcGFjaXR5PSIxIiBmaWxsPSIjMDAwMDAwIi'+
			'8+CiAgICA8cGF0aCBkPSJNLTMzMjEuNTg5LTI1OTMuODA4Yy0wLjktMS4yNi0yLjM5OS0xLjQyMi0zLjYwNC0xLjQyMmgtMS43MDR2LTEuNjQ2YzAtMC42NjgtMC41NDItMS4yMDktMS4yMS0xLjIwOSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2gtMi4yODFjLTAuNjY4LDAtMS4yMSwwLjU0MS0xLjIxLDEuMjA5djEuNjQ2aC0xLjcwMmMtMS4yMDUsMC0yLjcwNCwwLjE2Mi0zLjYwNiwxLjQyMmMtMC42ODgsMC45NjEtMS4wMDcsMi4yMi0xLjAwNywzLjk2MyYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2MwLDIuMSwwLjYwMSwzLjgxNywxLjYwOSw0LjU5M2MwLjg4MSwwLjY3OSwx'+
			'LjUwNiwwLjc5MywyLjU3MywwLjc5M2MxLjI1OCwwLDIuMjE0LTAuNDksMi45ODItMC44ODMmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjMC41NzktMC4yOTcsMS4wMzYtMC41MzEsMS41MDEtMC41MzFzMC45MjMsMC4yMzQsMS41MDIsMC41MzJjMC43NjcsMC4zOTMsMS43MjQsMC44ODIsMi45ODIsMC44ODImI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjMS4wNjUsMCwxLjY5LTAuMTE0LDIuNTcyLTAuNzkyYzEuMDA5LTAuNzc2LDEuNjExLTIuNDkzLDEuNjExLTQuNTk1Qy0zMzIwLjU4MS0yNTkxLjU4OC0zMzIwLjkwMi0yNTkyLjg0OC0zMzIxLjU4OS0yNTkzLjgwOHomI3hkOy'+
			'YjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTsgTS0zMzIzLjY2Ny0yNTg3LjE2OGMtMC4zMzUsMC4yNTktMC4zNzgsMC4yOTItMS4wOTcsMC4yOTJjLTAuNjc1LDAtMS4yMzMtMC4yODctMS44NzktMC42MTgmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjLTAuNzI5LTAuMzczLTEuNTU3LTAuNzk2LTIuNjA1LTAuNzk2cy0xLjg3NSwwLjQyMy0yLjYwNCwwLjc5NmMtMC42NDYsMC4zMzItMS4yMDQsMC42MTgtMS44NzksMC42MTgmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjLTAuNzE5LDAtMC43NjItMC4wMzMtMS4wOTYtMC4yOTJjLTAuMTQyLTAuMTEyLTAuNjY4LTAuODkzLTAuNjY4'+
			'LTIuNjc3YzAtMS4xOTcsMC4xODEtMi4wMzMsMC41NTUtMi41NTUmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjMC4xMjYtMC4xNzYsMC40MzQtMC40MTEsMS42NC0wLjQxMWg4LjEwN2MxLjIwNSwwLDEuNTEyLDAuMjM0LDEuNjM4LDAuNDExYzAuMzc0LDAuNTIyLDAuNTU2LDEuMzU4LDAuNTU2LDIuNTU1JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7Qy0zMzIzLTI1ODguMDYtMzMyMy41MjctMjU4Ny4yOC0zMzIzLjY2Ny0yNTg3LjE2OHoiIGZpbGwtb3BhY2l0eT0iMSIgZmlsbD0iIzAwMDAwMCIvPgogICA8L2c+CiAgIDxnPgogICAgPHBhdGggZD0iTS0zMzI5LjI0OS0yNjAyLj'+
			'VjLTYuODkyLDAtMTIuNSw1LjYwNy0xMi41LDEyLjVzNS42MDcsMTIuNSwxMi41LDEyLjUmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjNi44OTMsMCwxMi41LTUuNjA3LDEyLjUtMTIuNVMtMzMyMi4zNTUtMjYwMi41LTMzMjkuMjQ5LTI2MDIuNXogTS0zMzI5LjI0OS0yNTgwLjEzMmMtNS40NDEsMC05Ljg3LTQuNDI3LTkuODctOS44NjgmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjMC01LjQ0Miw0LjQyOS05Ljg2OSw5Ljg3LTkuODY5YzUuNDQyLDAsOS44Nyw0LjQyOCw5Ljg3LDkuODY5Qy0zMzE5LjM3OC0yNTg0LjU2LTMzMjMuODA1LTI1ODAuMTMyLTMzMjkuMjQ5LTI1ODAu'+
			'MTMyeiIgc3Ryb2tlLXdpZHRoPSIwLjIiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzFBMTcxQiIvPgogICAgPHBhdGggZD0iTS0zMzIxLjU4OS0yNTkzLjgwOGMtMC45LTEuMjYtMi4zOTktMS40MjItMy42MDQtMS40MjJoLTEuNzA0di0xLjY0NiYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2MwLTAuNjY4LTAuNTQyLTEuMjA5LTEuMjEtMS4yMDloLTIuMjgxYy0wLjY2OCwwLTEuMjEsMC41NDEtMS4yMSwxLjIwOXYxLjY0NmgtMS43MDJjLTEuMjA1LDAtMi43MDQsMC4xNjItMy42MDYsMS40MjImI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjLTAuNjg4LDAuOTYxLTEuMDA3LDIuMjItMS'+
			'4wMDcsMy45NjNjMCwyLjEsMC42MDEsMy44MTcsMS42MDksNC41OTNjMC44ODEsMC42NzksMS41MDYsMC43OTMsMi41NzMsMC43OTMmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjMS4yNTgsMCwyLjIxNC0wLjQ5LDIuOTgyLTAuODgzYzAuNTc5LTAuMjk3LDEuMDM2LTAuNTMxLDEuNTAxLTAuNTMxczAuOTIzLDAuMjM0LDEuNTAyLDAuNTMyJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7YzAuNzY3LDAuMzkzLDEuNzI0LDAuODgyLDIuOTgyLDAuODgyYzEuMDY1LDAsMS42OS0wLjExNCwyLjU3Mi0wLjc5MmMxLjAwOS0wLjc3NiwxLjYxMS0yLjQ5MywxLjYxMS00LjU5NSYjeGQ7JiN4'+
			'YTsmI3g5OyYjeDk7JiN4OTsmI3g5O0MtMzMyMC41ODEtMjU5MS41ODgtMzMyMC45MDItMjU5Mi44NDgtMzMyMS41ODktMjU5My44MDh6IE0tMzMyMy42NjctMjU4Ny4xNjhjLTAuMzM1LDAuMjU5LTAuMzc4LDAuMjkyLTEuMDk3LDAuMjkyJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7Yy0wLjY3NSwwLTEuMjMzLTAuMjg3LTEuODc5LTAuNjE4Yy0wLjcyOS0wLjM3My0xLjU1Ny0wLjc5Ni0yLjYwNS0wLjc5NnMtMS44NzUsMC40MjMtMi42MDQsMC43OTYmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjLTAuNjQ2LDAuMzMyLTEuMjA0LDAuNjE4LTEuODc5LDAuNjE4Yy0wLjcxOSwwLT'+
			'AuNzYyLTAuMDMzLTEuMDk2LTAuMjkyYy0wLjE0Mi0wLjExMi0wLjY2OC0wLjg5My0wLjY2OC0yLjY3NyYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2MwLTEuMTk3LDAuMTgxLTIuMDMzLDAuNTU1LTIuNTU1YzAuMTI2LTAuMTc2LDAuNDM0LTAuNDExLDEuNjQtMC40MTFoOC4xMDdjMS4yMDUsMCwxLjUxMiwwLjIzNCwxLjYzOCwwLjQxMSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2MwLjM3NCwwLjUyMiwwLjU1NiwxLjM1OCwwLjU1NiwyLjU1NUMtMzMyMy0yNTg4LjA2LTMzMjMuNTI3LTI1ODcuMjgtMzMyMy42NjctMjU4Ny4xNjh6IiBzdHJva2Utd2lkdGg9IjAuMiIgZmlsbD0i'+
			'bm9uZSIgc3Ryb2tlPSIjMUExNzFCIi8+CiAgIDwvZz4KICA8L2c+CiA8L2c+CiA8ZyBpZD0iTGF5ZXJfMiIvPgo8L3N2Zz4K';
		me._enter_vr__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._enter_vr__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE2LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgeD0iMHB4IiB3aWR0aD0iMzJweCIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAtMzM0NS4yNSAtMjU3MS4zMzMgMzIgMzIiIHk9IjBweCIgeG1sbnM6eG'+
			'xpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHZpZXdCb3g9Ii0zMzQ1LjI1IC0yNTcxLjMzMyAzMiAzMiIgaGVpZ2h0PSIzMnB4IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogPGcgaWQ9IkxheWVyXzEiLz4KIDxnIGlkPSJFYmVuZV8xIj4KICA8Zz4KICAgPGc+CiAgICA8cGF0aCBkPSJNLTMzMjkuMjUtMjU2OS4wODNjLTcuNTgxLDAtMTMuNzUsNi4xNjgtMTMuNzUsMTMuNzQ5YzAsNy41ODMsNi4xNjgsMTMuNzUsMTMuNzUsMTMuNzUmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjNy41ODMsMCwxMy43NS02LjE2'+
			'NywxMy43NS0xMy43NUMtMzMxNS41LTI1NjIuOTE1LTMzMjEuNjY3LTI1NjkuMDgzLTMzMjkuMjUtMjU2OS4wODN6IE0tMzMyOS4yNS0yNTQ0LjQ3OSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2MtNS45ODUsMC0xMC44NTctNC44NjktMTAuODU3LTEwLjg1NWMwLTUuOTg2LDQuODcyLTEwLjg1NSwxMC44NTctMTAuODU1YzUuOTg3LDAsMTAuODU3LDQuODcxLDEwLjg1NywxMC44NTUmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtDLTMzMTguMzkzLTI1NDkuMzQ5LTMzMjMuMjYyLTI1NDQuNDc5LTMzMjkuMjUtMjU0NC40Nzl6IiBmaWxsPSIjMUExNzFCIi8+CiAgICA8cGF0aCBkPS'+
			'JNLTMzMjAuODI1LTI1NTkuNTIxYy0wLjk5LTEuMzg3LTIuNjM5LTEuNTY0LTMuOTY1LTEuNTY0aC0xLjg3NXYtMS44MTJjMC0wLjczNC0wLjU5Ni0xLjMzLTEuMzMxLTEuMzMmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtoLTIuNTA5Yy0wLjczNSwwLTEuMzMxLDAuNTk2LTEuMzMxLDEuMzN2MS44MTJoLTEuODczYy0xLjMyNSwwLTIuOTc0LDAuMTc4LTMuOTY3LDEuNTY0Yy0wLjc1NiwxLjA1Ny0xLjEwNywyLjQ0Mi0xLjEwNyw0LjM1OSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2MwLDIuMzEsMC42NjIsNC4xOTksMS43Nyw1LjA1M2MwLjk2OSwwLjc0NywxLjY1NywwLjg3Mywy'+
			'LjgzMSwwLjg3M2MxLjM4NCwwLDIuNDM2LTAuNTM5LDMuMjgxLTAuOTcxJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7YzAuNjM3LTAuMzI3LDEuMTQtMC41ODQsMS42NTEtMC41ODRjMC41MTIsMCwxLjAxNSwwLjI1NywxLjY1MiwwLjU4NGMwLjg0NCwwLjQzMiwxLjg5NywwLjk3LDMuMjgxLDAuOTcmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjMS4xNzEsMCwxLjg1OS0wLjEyNSwyLjgzLTAuODcxYzEuMTA5LTAuODU0LDEuNzcyLTIuNzQzLDEuNzcyLTUuMDU0Qy0zMzE5LjcxNS0yNTU3LjA4MS0zMzIwLjA2OC0yNTU4LjQ2Ni0zMzIwLjgyNS0yNTU5LjUyMXomI3hkOyYjeGE7Ji'+
			'N4OTsmI3g5OyYjeDk7JiN4OTsgTS0zMzIzLjExMS0yNTUyLjIxOGMtMC4zNjksMC4yODUtMC40MTYsMC4zMjEtMS4yMDYsMC4zMjFjLTAuNzQyLDAtMS4zNTctMC4zMTUtMi4wNjctMC42NzkmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjLTAuODAyLTAuNDExLTEuNzEyLTAuODc2LTIuODY2LTAuODc2Yy0xLjE1MywwLTIuMDYyLDAuNDY1LTIuODY1LDAuODc2Yy0wLjcxLDAuMzY0LTEuMzI1LDAuNjc5LTIuMDY3LDAuNjc5JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7Yy0wLjc5MSwwLTAuODM4LTAuMDM2LTEuMjA1LTAuMzJjLTAuMTU2LTAuMTIzLTAuNzM1LTAuOTgxLTAuNzM1'+
			'LTIuOTQ1YzAtMS4zMTcsMC4yLTIuMjM2LDAuNjEtMi44MTEmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjMC4xMzgtMC4xOTQsMC40NzctMC40NTIsMS44MDMtMC40NTJoOC45MThjMS4zMjYsMCwxLjY2MywwLjI1NywxLjgwMSwwLjQ1MmMwLjQxMiwwLjU3NSwwLjYxMSwxLjQ5NCwwLjYxMSwyLjgxMSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O0MtMzMyMi4zNzctMjU1My4xOTktMzMyMi45NTYtMjU1Mi4zNDEtMzMyMy4xMTEtMjU1Mi4yMTh6IiBmaWxsPSIjMUExNzFCIi8+CiAgIDwvZz4KICAgPGcgb3BhY2l0eT0iMC40Ij4KICAgIDxwYXRoIGQ9Ik0tMzMyOS4yNS0yNTY5Lj'+
			'A4M2MtNy41ODEsMC0xMy43NSw2LjE2OC0xMy43NSwxMy43NDkmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjMCw3LjU4Myw2LjE2OCwxMy43NSwxMy43NSwxMy43NWM3LjU4MywwLDEzLjc1LTYuMTY3LDEzLjc1LTEzLjc1Qy0zMzE1LjUtMjU2Mi45MTUtMzMyMS42NjctMjU2OS4wODMtMzMyOS4yNS0yNTY5LjA4M3omI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTsgTS0zMzI5LjI1LTI1NDQuNDc5Yy01Ljk4NSwwLTEwLjg1Ny00Ljg2OS0xMC44NTctMTAuODU1YzAtNS45ODYsNC44NzItMTAuODU1LDEwLjg1Ny0xMC44NTUmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjNS45'+
			'ODcsMCwxMC44NTcsNC44NzEsMTAuODU3LDEwLjg1NUMtMzMxOC4zOTMtMjU0OS4zNDktMzMyMy4yNjItMjU0NC40NzktMzMyOS4yNS0yNTQ0LjQ3OXoiIHN0cm9rZS13aWR0aD0iMS41IiBmaWxsPSJub25lIiBzdHJva2U9IiMxQTE3MUIiLz4KICAgIDxwYXRoIGQ9Ik0tMzMyMC44MjUtMjU1OS41MjFjLTAuOTktMS4zODctMi42MzktMS41NjQtMy45NjUtMS41NjRoLTEuODc1JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7di0xLjgxMmMwLTAuNzM0LTAuNTk2LTEuMzMtMS4zMzEtMS4zM2gtMi41MDljLTAuNzM1LDAtMS4zMzEsMC41OTYtMS4zMzEsMS4zM3YxLjgxMmgtMS44NzNjLTEuMz'+
			'I1LDAtMi45NzQsMC4xNzgtMy45NjcsMS41NjQmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjLTAuNzU2LDEuMDU3LTEuMTA3LDIuNDQyLTEuMTA3LDQuMzU5YzAsMi4zMSwwLjY2Miw0LjE5OSwxLjc3LDUuMDUzYzAuOTY5LDAuNzQ3LDEuNjU3LDAuODczLDIuODMxLDAuODczJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7YzEuMzg0LDAsMi40MzYtMC41MzksMy4yODEtMC45NzFjMC42MzctMC4zMjcsMS4xNC0wLjU4NCwxLjY1MS0wLjU4NGMwLjUxMiwwLDEuMDE1LDAuMjU3LDEuNjUyLDAuNTg0JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7YzAuODQ0LDAuNDMyLDEuODk3'+
			'LDAuOTcsMy4yODEsMC45N2MxLjE3MSwwLDEuODU5LTAuMTI1LDIuODMtMC44NzFjMS4xMDktMC44NTQsMS43NzItMi43NDMsMS43NzItNS4wNTQmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtDLTMzMTkuNzE1LTI1NTcuMDgxLTMzMjAuMDY4LTI1NTguNDY2LTMzMjAuODI1LTI1NTkuNTIxeiBNLTMzMjMuMTExLTI1NTIuMjE4Yy0wLjM2OSwwLjI4NS0wLjQxNiwwLjMyMS0xLjIwNiwwLjMyMSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2MtMC43NDIsMC0xLjM1Ny0wLjMxNS0yLjA2Ny0wLjY3OWMtMC44MDItMC40MTEtMS43MTItMC44NzYtMi44NjYtMC44NzZjLTEuMTUzLDAtMi'+
			'4wNjIsMC40NjUtMi44NjUsMC44NzYmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjLTAuNzEsMC4zNjQtMS4zMjUsMC42NzktMi4wNjcsMC42NzljLTAuNzkxLDAtMC44MzgtMC4wMzYtMS4yMDUtMC4zMmMtMC4xNTYtMC4xMjMtMC43MzUtMC45ODEtMC43MzUtMi45NDUmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjMC0xLjMxNywwLjItMi4yMzYsMC42MS0yLjgxMWMwLjEzOC0wLjE5NCwwLjQ3Ny0wLjQ1MiwxLjgwMy0wLjQ1Mmg4LjkxOGMxLjMyNiwwLDEuNjYzLDAuMjU3LDEuODAxLDAuNDUyJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7YzAuNDEyLDAuNTc1LDAuNjEx'+
			'LDEuNDk0LDAuNjExLDIuODExQy0zMzIyLjM3Ny0yNTUzLjE5OS0zMzIyLjk1Ni0yNTUyLjM0MS0zMzIzLjExMS0yNTUyLjIxOHoiIHN0cm9rZS13aWR0aD0iMS41IiBmaWxsPSJub25lIiBzdHJva2U9IiMxQTE3MUIiLz4KICAgPC9nPgogICA8Zz4KICAgIDxwYXRoIGQ9Ik0tMzMyOS4yNS0yNTY5LjA4M2MtNy41ODEsMC0xMy43NSw2LjE2OC0xMy43NSwxMy43NDljMCw3LjU4Myw2LjE2OCwxMy43NSwxMy43NSwxMy43NSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2M3LjU4MywwLDEzLjc1LTYuMTY3LDEzLjc1LTEzLjc1Qy0zMzE1LjUtMjU2Mi45MTUtMzMyMS42NjctMjU2OS4wODMtMz'+
			'MyOS4yNS0yNTY5LjA4M3ogTS0zMzI5LjI1LTI1NDQuNDc5JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7Yy01Ljk4NSwwLTEwLjg1Ny00Ljg2OS0xMC44NTctMTAuODU1YzAtNS45ODYsNC44NzItMTAuODU1LDEwLjg1Ny0xMC44NTVjNS45ODcsMCwxMC44NTcsNC44NzEsMTAuODU3LDEwLjg1NSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O0MtMzMxOC4zOTMtMjU0OS4zNDktMzMyMy4yNjItMjU0NC40NzktMzMyOS4yNS0yNTQ0LjQ3OXoiIGZpbGwtb3BhY2l0eT0iMSIgZmlsbD0iIzAwMDAwMCIvPgogICAgPHBhdGggZD0iTS0zMzIwLjgyNS0yNTU5LjUyMWMtMC45OS0xLjM4Ny0y'+
			'LjYzOS0xLjU2NC0zLjk2NS0xLjU2NGgtMS44NzV2LTEuODEyYzAtMC43MzQtMC41OTYtMS4zMy0xLjMzMS0xLjMzJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7aC0yLjUwOWMtMC43MzUsMC0xLjMzMSwwLjU5Ni0xLjMzMSwxLjMzdjEuODEyaC0xLjg3M2MtMS4zMjUsMC0yLjk3NCwwLjE3OC0zLjk2NywxLjU2NGMtMC43NTYsMS4wNTctMS4xMDcsMi40NDItMS4xMDcsNC4zNTkmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjMCwyLjMxLDAuNjYyLDQuMTk5LDEuNzcsNS4wNTNjMC45NjksMC43NDcsMS42NTcsMC44NzMsMi44MzEsMC44NzNjMS4zODQsMCwyLjQzNi0wLjUzOSwzLj'+
			'I4MS0wLjk3MSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2MwLjYzNy0wLjMyNywxLjE0LTAuNTg0LDEuNjUxLTAuNTg0YzAuNTEyLDAsMS4wMTUsMC4yNTcsMS42NTIsMC41ODRjMC44NDQsMC40MzIsMS44OTcsMC45NywzLjI4MSwwLjk3JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7YzEuMTcxLDAsMS44NTktMC4xMjUsMi44My0wLjg3MWMxLjEwOS0wLjg1NCwxLjc3Mi0yLjc0MywxLjc3Mi01LjA1NEMtMzMxOS43MTUtMjU1Ny4wODEtMzMyMC4wNjgtMjU1OC40NjYtMzMyMC44MjUtMjU1OS41MjF6JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7IE0tMzMyMy4xMTEtMjU1'+
			'Mi4yMThjLTAuMzY5LDAuMjg1LTAuNDE2LDAuMzIxLTEuMjA2LDAuMzIxYy0wLjc0MiwwLTEuMzU3LTAuMzE1LTIuMDY3LTAuNjc5JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7Yy0wLjgwMi0wLjQxMS0xLjcxMi0wLjg3Ni0yLjg2Ni0wLjg3NmMtMS4xNTMsMC0yLjA2MiwwLjQ2NS0yLjg2NSwwLjg3NmMtMC43MSwwLjM2NC0xLjMyNSwwLjY3OS0yLjA2NywwLjY3OSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2MtMC43OTEsMC0wLjgzOC0wLjAzNi0xLjIwNS0wLjMyYy0wLjE1Ni0wLjEyMy0wLjczNS0wLjk4MS0wLjczNS0yLjk0NWMwLTEuMzE3LDAuMi0yLjIzNiwwLjYxLTIuOD'+
			'ExJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7YzAuMTM4LTAuMTk0LDAuNDc3LTAuNDUyLDEuODAzLTAuNDUyaDguOTE4YzEuMzI2LDAsMS42NjMsMC4yNTcsMS44MDEsMC40NTJjMC40MTIsMC41NzUsMC42MTEsMS40OTQsMC42MTEsMi44MTEmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtDLTMzMjIuMzc3LTI1NTMuMTk5LTMzMjIuOTU2LTI1NTIuMzQxLTMzMjMuMTExLTI1NTIuMjE4eiIgZmlsbC1vcGFjaXR5PSIxIiBmaWxsPSIjMDAwMDAwIi8+CiAgIDwvZz4KICAgPGc+CiAgICA8cGF0aCBkPSJNLTMzMjkuMjUtMjU2OS4wODNjLTcuNTgxLDAtMTMuNzUsNi4xNjgtMTMuNzUs'+
			'MTMuNzQ5JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7YzAsNy41ODMsNi4xNjgsMTMuNzUsMTMuNzUsMTMuNzVjNy41ODMsMCwxMy43NS02LjE2NywxMy43NS0xMy43NUMtMzMxNS41LTI1NjIuOTE1LTMzMjEuNjY3LTI1NjkuMDgzLTMzMjkuMjUtMjU2OS4wODN6JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7IE0tMzMyOS4yNS0yNTQ0LjQ3OWMtNS45ODUsMC0xMC44NTctNC44NjktMTAuODU3LTEwLjg1NWMwLTUuOTg2LDQuODcyLTEwLjg1NSwxMC44NTctMTAuODU1JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7YzUuOTg3LDAsMTAuODU3LDQuODcxLDEwLjg1NywxMC44NT'+
			'VDLTMzMTguMzkzLTI1NDkuMzQ5LTMzMjMuMjYyLTI1NDQuNDc5LTMzMjkuMjUtMjU0NC40Nzl6IiBzdHJva2Utd2lkdGg9IjAuMiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMUExNzFCIi8+CiAgICA8cGF0aCBkPSJNLTMzMjAuODI1LTI1NTkuNTIxYy0wLjk5LTEuMzg3LTIuNjM5LTEuNTY0LTMuOTY1LTEuNTY0aC0xLjg3NSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O3YtMS44MTJjMC0wLjczNC0wLjU5Ni0xLjMzLTEuMzMxLTEuMzNoLTIuNTA5Yy0wLjczNSwwLTEuMzMxLDAuNTk2LTEuMzMxLDEuMzN2MS44MTJoLTEuODczYy0xLjMyNSwwLTIuOTc0LDAuMTc4LTMuOTY3LDEuNTY0JiN4'+
			'ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7Yy0wLjc1NiwxLjA1Ny0xLjEwNywyLjQ0Mi0xLjEwNyw0LjM1OWMwLDIuMzEsMC42NjIsNC4xOTksMS43Nyw1LjA1M2MwLjk2OSwwLjc0NywxLjY1NywwLjg3MywyLjgzMSwwLjg3MyYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2MxLjM4NCwwLDIuNDM2LTAuNTM5LDMuMjgxLTAuOTcxYzAuNjM3LTAuMzI3LDEuMTQtMC41ODQsMS42NTEtMC41ODRjMC41MTIsMCwxLjAxNSwwLjI1NywxLjY1MiwwLjU4NCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2MwLjg0NCwwLjQzMiwxLjg5NywwLjk3LDMuMjgxLDAuOTdjMS4xNzEsMCwxLjg1OS'+
			'0wLjEyNSwyLjgzLTAuODcxYzEuMTA5LTAuODU0LDEuNzcyLTIuNzQzLDEuNzcyLTUuMDU0JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7Qy0zMzE5LjcxNS0yNTU3LjA4MS0zMzIwLjA2OC0yNTU4LjQ2Ni0zMzIwLjgyNS0yNTU5LjUyMXogTS0zMzIzLjExMS0yNTUyLjIxOGMtMC4zNjksMC4yODUtMC40MTYsMC4zMjEtMS4yMDYsMC4zMjEmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjLTAuNzQyLDAtMS4zNTctMC4zMTUtMi4wNjctMC42NzljLTAuODAyLTAuNDExLTEuNzEyLTAuODc2LTIuODY2LTAuODc2Yy0xLjE1MywwLTIuMDYyLDAuNDY1LTIuODY1LDAuODc2JiN4ZDsmI3hh'+
			'OyYjeDk7JiN4OTsmI3g5OyYjeDk7Yy0wLjcxLDAuMzY0LTEuMzI1LDAuNjc5LTIuMDY3LDAuNjc5Yy0wLjc5MSwwLTAuODM4LTAuMDM2LTEuMjA1LTAuMzJjLTAuMTU2LTAuMTIzLTAuNzM1LTAuOTgxLTAuNzM1LTIuOTQ1JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7YzAtMS4zMTcsMC4yLTIuMjM2LDAuNjEtMi44MTFjMC4xMzgtMC4xOTQsMC40NzctMC40NTIsMS44MDMtMC40NTJoOC45MThjMS4zMjYsMCwxLjY2MywwLjI1NywxLjgwMSwwLjQ1MiYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2MwLjQxMiwwLjU3NSwwLjYxMSwxLjQ5NCwwLjYxMSwyLjgxMUMtMzMyMi4zNzctMj'+
			'U1My4xOTktMzMyMi45NTYtMjU1Mi4zNDEtMzMyMy4xMTEtMjU1Mi4yMTh6IiBzdHJva2Utd2lkdGg9IjAuMiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMUExNzFCIi8+CiAgIDwvZz4KICA8L2c+CiA8L2c+CiA8ZyBpZD0iTGF5ZXJfMiIvPgo8L3N2Zz4K';
		me._enter_vr__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="enter_vr";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='position : absolute;';
		hs+='right : 10px;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._enter_vr.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._enter_vr.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getViewerSize().width < 1084))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._enter_vr.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._enter_vr.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._enter_vr.style[domTransition]='right 0s, top 0s';
				if (me._enter_vr.ggCurrentLogicStatePosition == 0) {
					me._enter_vr.style.right='3px';
					me._enter_vr.style.top='30px';
				}
				else {
					me._enter_vr.style.right='10px';
					me._enter_vr.style.top='0px';
				}
			}
		}
		me._enter_vr.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.hasVR() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._enter_vr.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._enter_vr.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._enter_vr.style[domTransition]='right 0s, top 0s';
				if (me._enter_vr.ggCurrentLogicStateVisible == 0) {
					me._enter_vr.style.visibility=(Number(me._enter_vr.style.opacity)>0||!me._enter_vr.style.opacity)?'inherit':'hidden';
					me._enter_vr.ggVisible=true;
				}
				else {
					me._enter_vr.style.visibility="hidden";
					me._enter_vr.ggVisible=false;
				}
			}
		}
		me._enter_vr.onclick=function (e) {
			player.enterVR();
		}
		me._enter_vr.onmouseover=function (e) {
			me._enter_vr__img.style.visibility='hidden';
			me._enter_vr__imgo.style.visibility='inherit';
			me.elementMouseOver['enter_vr']=true;
			me._tt_enter_vr.logicBlock_visible();
		}
		me._enter_vr.onmouseout=function (e) {
			me._enter_vr__img.style.visibility='inherit';
			me._enter_vr__imgo.style.visibility='hidden';
			me.elementMouseOver['enter_vr']=false;
			me._tt_enter_vr.logicBlock_visible();
		}
		me._enter_vr.ontouchend=function (e) {
			me.elementMouseOver['enter_vr']=false;
			me._tt_enter_vr.logicBlock_visible();
		}
		me._enter_vr.ggUpdatePosition=function (useTransition) {
		}
		el=me._tt_enter_vr=document.createElement('div');
		els=me._tt_enter_vr__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt_enter_vr";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 20px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : 32px;';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		hs+='text-shadow: 1px 1px 4px #000000;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="Enter VR";
		el.appendChild(els);
		me._tt_enter_vr.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._tt_enter_vr.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['enter_vr'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._tt_enter_vr.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._tt_enter_vr.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._tt_enter_vr.style[domTransition]='';
				if (me._tt_enter_vr.ggCurrentLogicStateVisible == 0) {
					me._tt_enter_vr.style.visibility=(Number(me._tt_enter_vr.style.opacity)>0||!me._tt_enter_vr.style.opacity)?'inherit':'hidden';
					me._tt_enter_vr.ggVisible=true;
				}
				else {
					me._tt_enter_vr.style.visibility="hidden";
					me._tt_enter_vr.ggVisible=false;
				}
			}
		}
		me._tt_enter_vr.logicBlock_text = function() {
			var newLogicStateText;
			if (
				((player.getVariableValue('POR') == true))
			)
			{
				newLogicStateText = 0;
			}
			else if (
				((player.getVariableValue('ENG') == true))
			)
			{
				newLogicStateText = 1;
			}
			else if (
				((player.getVariableValue('ESP') == true))
			)
			{
				newLogicStateText = 2;
			}
			else {
				newLogicStateText = -1;
			}
			if (me._tt_enter_vr.ggCurrentLogicStateText != newLogicStateText) {
				me._tt_enter_vr.ggCurrentLogicStateText = newLogicStateText;
				me._tt_enter_vr.style[domTransition]='';
				if (me._tt_enter_vr.ggCurrentLogicStateText == 0) {
					me._tt_enter_vr.ggText="Entrar VR";
					me._tt_enter_vr__text.innerHTML=me._tt_enter_vr.ggText;
					if (me._tt_enter_vr.ggUpdateText) {
					me._tt_enter_vr.ggUpdateText=function() {
						var hs="Entrar VR";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._tt_enter_vr.ggUpdatePosition) me._tt_enter_vr.ggUpdatePosition();
					}
				}
				else if (me._tt_enter_vr.ggCurrentLogicStateText == 1) {
					me._tt_enter_vr.ggText="Enter VR";
					me._tt_enter_vr__text.innerHTML=me._tt_enter_vr.ggText;
					if (me._tt_enter_vr.ggUpdateText) {
					me._tt_enter_vr.ggUpdateText=function() {
						var hs="Enter VR";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._tt_enter_vr.ggUpdatePosition) me._tt_enter_vr.ggUpdatePosition();
					}
				}
				else if (me._tt_enter_vr.ggCurrentLogicStateText == 2) {
					me._tt_enter_vr.ggText="Entrar VR";
					me._tt_enter_vr__text.innerHTML=me._tt_enter_vr.ggText;
					if (me._tt_enter_vr.ggUpdateText) {
					me._tt_enter_vr.ggUpdateText=function() {
						var hs="Entrar VR";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._tt_enter_vr.ggUpdatePosition) me._tt_enter_vr.ggUpdatePosition();
					}
				}
				else {
					me._tt_enter_vr.ggText="Enter VR";
					me._tt_enter_vr__text.innerHTML=me._tt_enter_vr.ggText;
					if (me._tt_enter_vr.ggUpdateText) {
					me._tt_enter_vr.ggUpdateText=function() {
						var hs="Enter VR";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._tt_enter_vr.ggUpdatePosition) me._tt_enter_vr.ggUpdatePosition();
					}
				}
			}
		}
		me._tt_enter_vr.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((98-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me._enter_vr.appendChild(me._tt_enter_vr);
		me.divSkin.appendChild(me._enter_vr);
		player.addListener('sizechanged', function() {
			me.updateSize(me.divSkin);
		});
	};
	this.hotspotProxyClick=function(id, url) {
	}
	this.hotspotProxyDoubleClick=function(id, url) {
	}
	me.hotspotProxyOver=function(id, url) {
	}
	me.hotspotProxyOut=function(id, url) {
	}
	me.callChildLogicBlocksHotspot_ht_node_changenode = function(){
		if(hotspotTemplates['ht_node']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_node'].length; i++) {
				if (hotspotTemplates['ht_node'][i]._chevron_white_lower && hotspotTemplates['ht_node'][i]._chevron_white_lower.logicBlock_visible) {
					hotspotTemplates['ht_node'][i]._chevron_white_lower.logicBlock_visible();
				}
				if (hotspotTemplates['ht_node'][i]._chevron_black && hotspotTemplates['ht_node'][i]._chevron_black.logicBlock_visible) {
					hotspotTemplates['ht_node'][i]._chevron_black.logicBlock_visible();
				}
				if (hotspotTemplates['ht_node'][i]._chevron_white && hotspotTemplates['ht_node'][i]._chevron_white.logicBlock_visible) {
					hotspotTemplates['ht_node'][i]._chevron_white.logicBlock_visible();
				}
				if (hotspotTemplates['ht_node'][i]._hs_preview_image && hotspotTemplates['ht_node'][i]._hs_preview_image.logicBlock_alpha) {
					hotspotTemplates['ht_node'][i]._hs_preview_image.logicBlock_alpha();
				}
				if (hotspotTemplates['ht_node'][i]._tt_ht_3d && hotspotTemplates['ht_node'][i]._tt_ht_3d.logicBlock_visible) {
					hotspotTemplates['ht_node'][i]._tt_ht_3d.logicBlock_visible();
				}
				if (hotspotTemplates['ht_node'][i]._tt_ht_3d && hotspotTemplates['ht_node'][i]._tt_ht_3d.logicBlock_text) {
					hotspotTemplates['ht_node'][i]._tt_ht_3d.logicBlock_text();
				}
				if (hotspotTemplates['ht_node'][i]._ht_node_customimage && hotspotTemplates['ht_node'][i]._ht_node_customimage.logicBlock_visible) {
					hotspotTemplates['ht_node'][i]._ht_node_customimage.logicBlock_visible();
				}
				if (hotspotTemplates['ht_node'][i]._hs_tt && hotspotTemplates['ht_node'][i]._hs_tt.logicBlock_visible) {
					hotspotTemplates['ht_node'][i]._hs_tt.logicBlock_visible();
				}
				if (hotspotTemplates['ht_node'][i]._hs_tt && hotspotTemplates['ht_node'][i]._hs_tt.logicBlock_text) {
					hotspotTemplates['ht_node'][i]._hs_tt.logicBlock_text();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_node_configloaded = function(){
		if(hotspotTemplates['ht_node']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_node'].length; i++) {
				if (hotspotTemplates['ht_node'][i]._hs_preview_image && hotspotTemplates['ht_node'][i]._hs_preview_image.logicBlock_alpha) {
					hotspotTemplates['ht_node'][i]._hs_preview_image.logicBlock_alpha();
				}
				if (hotspotTemplates['ht_node'][i]._tt_ht_3d && hotspotTemplates['ht_node'][i]._tt_ht_3d.logicBlock_visible) {
					hotspotTemplates['ht_node'][i]._tt_ht_3d.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_node_mouseover = function(){
		if(hotspotTemplates['ht_node']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_node'].length; i++) {
				if (hotspotTemplates['ht_node'][i]._chevron_white_lower && hotspotTemplates['ht_node'][i]._chevron_white_lower.logicBlock_alpha) {
					hotspotTemplates['ht_node'][i]._chevron_white_lower.logicBlock_alpha();
				}
				if (hotspotTemplates['ht_node'][i]._chevron_black && hotspotTemplates['ht_node'][i]._chevron_black.logicBlock_alpha) {
					hotspotTemplates['ht_node'][i]._chevron_black.logicBlock_alpha();
				}
				if (hotspotTemplates['ht_node'][i]._chevron_white && hotspotTemplates['ht_node'][i]._chevron_white.logicBlock_alpha) {
					hotspotTemplates['ht_node'][i]._chevron_white.logicBlock_alpha();
				}
				if (hotspotTemplates['ht_node'][i]._hs_preview_image && hotspotTemplates['ht_node'][i]._hs_preview_image.logicBlock_alpha) {
					hotspotTemplates['ht_node'][i]._hs_preview_image.logicBlock_alpha();
				}
				if (hotspotTemplates['ht_node'][i]._tt_ht_3d && hotspotTemplates['ht_node'][i]._tt_ht_3d.logicBlock_visible) {
					hotspotTemplates['ht_node'][i]._tt_ht_3d.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_node_active = function(){
		if(hotspotTemplates['ht_node']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_node'].length; i++) {
				if (hotspotTemplates['ht_node'][i]._ht_checkmark_tick && hotspotTemplates['ht_node'][i]._ht_checkmark_tick.logicBlock_visible) {
					hotspotTemplates['ht_node'][i]._ht_checkmark_tick.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_node_changevisitednodes = function(){
		if(hotspotTemplates['ht_node']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_node'].length; i++) {
				if (hotspotTemplates['ht_node'][i]._ht_checkmark_tick && hotspotTemplates['ht_node'][i]._ht_checkmark_tick.logicBlock_visible) {
					hotspotTemplates['ht_node'][i]._ht_checkmark_tick.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_node_activehotspotchanged = function(){
		if(hotspotTemplates['ht_node']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_node'].length; i++) {
				if (hotspotTemplates['ht_node'][i]._chevron_white_lower && hotspotTemplates['ht_node'][i]._chevron_white_lower.logicBlock_visible) {
					hotspotTemplates['ht_node'][i]._chevron_white_lower.logicBlock_visible();
				}
				if (hotspotTemplates['ht_node'][i]._chevron_black && hotspotTemplates['ht_node'][i]._chevron_black.logicBlock_visible) {
					hotspotTemplates['ht_node'][i]._chevron_black.logicBlock_visible();
				}
				if (hotspotTemplates['ht_node'][i]._chevron_white && hotspotTemplates['ht_node'][i]._chevron_white.logicBlock_visible) {
					hotspotTemplates['ht_node'][i]._chevron_white.logicBlock_visible();
				}
				if (hotspotTemplates['ht_node'][i]._tt_ht_3d && hotspotTemplates['ht_node'][i]._tt_ht_3d.logicBlock_visible) {
					hotspotTemplates['ht_node'][i]._tt_ht_3d.logicBlock_visible();
				}
				if (hotspotTemplates['ht_node'][i]._tt_ht_3d && hotspotTemplates['ht_node'][i]._tt_ht_3d.logicBlock_text) {
					hotspotTemplates['ht_node'][i]._tt_ht_3d.logicBlock_text();
				}
				if (hotspotTemplates['ht_node'][i]._ht_node_customimage && hotspotTemplates['ht_node'][i]._ht_node_customimage.logicBlock_visible) {
					hotspotTemplates['ht_node'][i]._ht_node_customimage.logicBlock_visible();
				}
				if (hotspotTemplates['ht_node'][i]._hs_tt && hotspotTemplates['ht_node'][i]._hs_tt.logicBlock_visible) {
					hotspotTemplates['ht_node'][i]._hs_tt.logicBlock_visible();
				}
				if (hotspotTemplates['ht_node'][i]._hs_tt && hotspotTemplates['ht_node'][i]._hs_tt.logicBlock_text) {
					hotspotTemplates['ht_node'][i]._hs_tt.logicBlock_text();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_node_varchanged_POR = function(){
		if(hotspotTemplates['ht_node']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_node'].length; i++) {
				if (hotspotTemplates['ht_node'][i]._tt_ht_3d && hotspotTemplates['ht_node'][i]._tt_ht_3d.logicBlock_text) {
					hotspotTemplates['ht_node'][i]._tt_ht_3d.logicBlock_text();
				}
				if (hotspotTemplates['ht_node'][i]._hs_tt && hotspotTemplates['ht_node'][i]._hs_tt.logicBlock_text) {
					hotspotTemplates['ht_node'][i]._hs_tt.logicBlock_text();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_node_varchanged_ENG = function(){
		if(hotspotTemplates['ht_node']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_node'].length; i++) {
				if (hotspotTemplates['ht_node'][i]._tt_ht_3d && hotspotTemplates['ht_node'][i]._tt_ht_3d.logicBlock_text) {
					hotspotTemplates['ht_node'][i]._tt_ht_3d.logicBlock_text();
				}
				if (hotspotTemplates['ht_node'][i]._hs_tt && hotspotTemplates['ht_node'][i]._hs_tt.logicBlock_text) {
					hotspotTemplates['ht_node'][i]._hs_tt.logicBlock_text();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_node_varchanged_ESP = function(){
		if(hotspotTemplates['ht_node']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_node'].length; i++) {
				if (hotspotTemplates['ht_node'][i]._tt_ht_3d && hotspotTemplates['ht_node'][i]._tt_ht_3d.logicBlock_text) {
					hotspotTemplates['ht_node'][i]._tt_ht_3d.logicBlock_text();
				}
				if (hotspotTemplates['ht_node'][i]._hs_tt && hotspotTemplates['ht_node'][i]._hs_tt.logicBlock_text) {
					hotspotTemplates['ht_node'][i]._hs_tt.logicBlock_text();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_node_varchanged_opt_3d_preview = function(){
		if(hotspotTemplates['ht_node']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_node'].length; i++) {
				if (hotspotTemplates['ht_node'][i]._hs_preview_image && hotspotTemplates['ht_node'][i]._hs_preview_image.logicBlock_alpha) {
					hotspotTemplates['ht_node'][i]._hs_preview_image.logicBlock_alpha();
				}
				if (hotspotTemplates['ht_node'][i]._tt_ht_3d && hotspotTemplates['ht_node'][i]._tt_ht_3d.logicBlock_visible) {
					hotspotTemplates['ht_node'][i]._tt_ht_3d.logicBlock_visible();
				}
			}
		}
	}
	player.addListener('changenode', function() {
		me.ggUserdata=player.userdata;
	});
	me.skinTimerEvent=function() {
		me.ggCurrentTime=new Date().getTime();
	};
	player.addListener('timer', me.skinTimerEvent);
	function SkinHotspotClass_ht_node(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_node=document.createElement('div');
		el.ggId="ht_node";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 75px;';
		hs+='position : absolute;';
		hs+='top : 220px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		hs+='transform-style: preserve-3d;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_node.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_node.onclick=function (e) {
			player.openNext(me.hotspot.url,me.hotspot.target);
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_node.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_node.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ht_node']=true;
			me._chevron_white_lower.logicBlock_alpha();
			me._chevron_black.logicBlock_alpha();
			me._chevron_white.logicBlock_alpha();
			me._hs_preview_image.logicBlock_alpha();
			me._tt_ht_3d.logicBlock_visible();
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._ht_node.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['ht_node']=false;
			me._chevron_white_lower.logicBlock_alpha();
			me._chevron_black.logicBlock_alpha();
			me._chevron_white.logicBlock_alpha();
			me._hs_preview_image.logicBlock_alpha();
			me._tt_ht_3d.logicBlock_visible();
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._ht_node.ontouchend=function (e) {
			me.elementMouseOver['ht_node']=false;
			me._chevron_white_lower.logicBlock_alpha();
			me._chevron_black.logicBlock_alpha();
			me._chevron_white.logicBlock_alpha();
			me._hs_preview_image.logicBlock_alpha();
			me._tt_ht_3d.logicBlock_visible();
		}
		me._ht_node.ggUpdatePosition=function (useTransition) {
		}
		el=me._chevron_white_lower=document.createElement('div');
		els=me._chevron_white_lower__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMCIgeD0iMHB4IiB5PSIwcHgiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDEwMDAgMTAwMDsiIGlkPSJMYXllcl8xIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmlld0JveD0iMCAwIDEwMDAgMTAwMCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3'+
			'JnLzIwMDAvc3ZnIj4KIDxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGw6I0ZGRkZGRjt9Cjwvc3R5bGU+CiA8Zz4KICA8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMzQuOSw0MzkuN2w0MDAtNDAxYzE3LjktMTcuOSw0MS43LTI1LjQsNjUuMi0yNGMyMy40LTEuNCw0Ny4yLDYuMSw2NS4xLDI0bDQwMCw0MDEmI3hhOyYjeDk7JiN4OTtjMzMuMiwzMy4zLDMzLjIsODcuNCwwLDEyMC43Yy0zMy4yLDMzLjMtODcuMSwzMy4zLTEyMC40LDBMNTAwLDIxNC43TDE1NS4yLDU2MC40Yy0zMy4yLDMzLjMtODcuMSwzMy4zLTEyMC40LDAmI3hhOyYjeDk7JiN4OTtTMS43LDQ3MywzNC45LDQzOS43eiIv'+
			'PgogPC9nPgo8L3N2Zz4K';
		me._chevron_white_lower__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="chevron_white_lower";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 80px;';
		hs+='left : -10000px;';
		hs+='opacity : 0.6;';
		hs+='position : absolute;';
		hs+='top : -145px;';
		hs+='visibility : inherit;';
		hs+='width : 80px;';
		hs+='pointer-events:auto;';
		hs+='transform:translate3d(0px,0px,-1px);';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._chevron_white_lower.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._chevron_white_lower.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.customimage != ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._chevron_white_lower.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._chevron_white_lower.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._chevron_white_lower.style[domTransition]='opacity 500ms ease 0ms';
				if (me._chevron_white_lower.ggCurrentLogicStateVisible == 0) {
					me._chevron_white_lower.style.visibility="hidden";
					me._chevron_white_lower.ggVisible=false;
				}
				else {
					me._chevron_white_lower.style.visibility=(Number(me._chevron_white_lower.style.opacity)>0||!me._chevron_white_lower.style.opacity)?'inherit':'hidden';
					me._chevron_white_lower.ggVisible=true;
				}
			}
		}
		me._chevron_white_lower.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['ht_node'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._chevron_white_lower.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._chevron_white_lower.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._chevron_white_lower.style[domTransition]='opacity 500ms ease 0ms';
				if (me._chevron_white_lower.ggCurrentLogicStateAlpha == 0) {
					me._chevron_white_lower.style.visibility=me._chevron_white_lower.ggVisible?'inherit':'hidden';
					me._chevron_white_lower.style.opacity=1;
				}
				else {
					me._chevron_white_lower.style.visibility=me._chevron_white_lower.ggVisible?'inherit':'hidden';
					me._chevron_white_lower.style.opacity=0.6;
				}
			}
		}
		me._chevron_white_lower.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._ht_node.appendChild(me._chevron_white_lower);
		el=me._chevron_black=document.createElement('div');
		els=me._chevron_black__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMCIgeD0iMHB4IiB5PSIwcHgiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDEwMDAgMTAwMDsiIGlkPSJMYXllcl8xIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmlld0JveD0iMCAwIDEwMDAgMTAwMCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3'+
			'JnLzIwMDAvc3ZnIj4KIDxnPgogIDxwYXRoIGQ9Ik0zNC45LDQzOS43bDQwMC00MDFjMTcuOS0xNy45LDQxLjctMjUuNCw2NS4yLTI0YzIzLjQtMS40LDQ3LjIsNi4xLDY1LjEsMjRsNDAwLDQwMWMzMy4yLDMzLjMsMzMuMiw4Ny40LDAsMTIwLjcmI3hhOyYjeDk7JiN4OTtjLTMzLjIsMzMuMy04Ny4xLDMzLjMtMTIwLjQsMEw1MDAsMjE0LjdMMTU1LjIsNTYwLjRjLTMzLjIsMzMuMy04Ny4xLDMzLjMtMTIwLjQsMFMxLjcsNDczLDM0LjksNDM5Ljd6Ii8+CiA8L2c+Cjwvc3ZnPgo=';
		me._chevron_black__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="chevron_black";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 80px;';
		hs+='left : -10000px;';
		hs+='opacity : 0.4;';
		hs+='position : absolute;';
		hs+='top : -145px;';
		hs+='visibility : inherit;';
		hs+='width : 80px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._chevron_black.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._chevron_black.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.customimage != ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._chevron_black.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._chevron_black.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._chevron_black.style[domTransition]='opacity 500ms ease 0ms';
				if (me._chevron_black.ggCurrentLogicStateVisible == 0) {
					me._chevron_black.style.visibility="hidden";
					me._chevron_black.ggVisible=false;
				}
				else {
					me._chevron_black.style.visibility=(Number(me._chevron_black.style.opacity)>0||!me._chevron_black.style.opacity)?'inherit':'hidden';
					me._chevron_black.ggVisible=true;
				}
			}
		}
		me._chevron_black.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['ht_node'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._chevron_black.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._chevron_black.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._chevron_black.style[domTransition]='opacity 500ms ease 0ms';
				if (me._chevron_black.ggCurrentLogicStateAlpha == 0) {
					me._chevron_black.style.visibility=me._chevron_black.ggVisible?'inherit':'hidden';
					me._chevron_black.style.opacity=1;
				}
				else {
					me._chevron_black.style.visibility=me._chevron_black.ggVisible?'inherit':'hidden';
					me._chevron_black.style.opacity=0.4;
				}
			}
		}
		me._chevron_black.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._ht_node.appendChild(me._chevron_black);
		el=me._chevron_white=document.createElement('div');
		els=me._chevron_white__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMCIgeD0iMHB4IiB5PSIwcHgiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDEwMDAgMTAwMDsiIGlkPSJMYXllcl8xIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmlld0JveD0iMCAwIDEwMDAgMTAwMCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3'+
			'JnLzIwMDAvc3ZnIj4KIDxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGw6I0ZGRkZGRjt9Cjwvc3R5bGU+CiA8Zz4KICA8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMzQuOSw0MzkuN2w0MDAtNDAxYzE3LjktMTcuOSw0MS43LTI1LjQsNjUuMi0yNGMyMy40LTEuNCw0Ny4yLDYuMSw2NS4xLDI0bDQwMCw0MDEmI3hhOyYjeDk7JiN4OTtjMzMuMiwzMy4zLDMzLjIsODcuNCwwLDEyMC43Yy0zMy4yLDMzLjMtODcuMSwzMy4zLTEyMC40LDBMNTAwLDIxNC43TDE1NS4yLDU2MC40Yy0zMy4yLDMzLjMtODcuMSwzMy4zLTEyMC40LDAmI3hhOyYjeDk7JiN4OTtTMS43LDQ3MywzNC45LDQzOS43eiIv'+
			'PgogPC9nPgo8L3N2Zz4K';
		me._chevron_white__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="chevron_white";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 80px;';
		hs+='left : -10000px;';
		hs+='opacity : 0.6;';
		hs+='position : absolute;';
		hs+='top : -145px;';
		hs+='visibility : inherit;';
		hs+='width : 80px;';
		hs+='pointer-events:auto;';
		hs+='transform:translate3d(0px,0px,1px);';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._chevron_white.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._chevron_white.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.customimage != ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._chevron_white.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._chevron_white.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._chevron_white.style[domTransition]='opacity 500ms ease 0ms';
				if (me._chevron_white.ggCurrentLogicStateVisible == 0) {
					me._chevron_white.style.visibility="hidden";
					me._chevron_white.ggVisible=false;
				}
				else {
					me._chevron_white.style.visibility=(Number(me._chevron_white.style.opacity)>0||!me._chevron_white.style.opacity)?'inherit':'hidden';
					me._chevron_white.ggVisible=true;
				}
			}
		}
		me._chevron_white.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['ht_node'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._chevron_white.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._chevron_white.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._chevron_white.style[domTransition]='opacity 500ms ease 0ms';
				if (me._chevron_white.ggCurrentLogicStateAlpha == 0) {
					me._chevron_white.style.visibility=me._chevron_white.ggVisible?'inherit':'hidden';
					me._chevron_white.style.opacity=1;
				}
				else {
					me._chevron_white.style.visibility=me._chevron_white.ggVisible?'inherit':'hidden';
					me._chevron_white.style.opacity=0.6;
				}
			}
		}
		me._chevron_white.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._ht_node.appendChild(me._chevron_white);
		el=me._hs_preview_image=document.createElement('div');
		els=me._hs_preview_image__img=document.createElement('img');
		els.className='ggskin ggskin_nodeimage';
		els.setAttribute('src',basePath + "images/hs_preview_image_" + nodeId + ".jpg");
		el.ggNodeId=nodeId;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_nodeimage';
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="hs_preview_image";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_nodeimage ";
		el.ggType='nodeimage';
		hs ='';
		hs+='z-index: -5;';
		hs+='height : 90px;';
		hs+='left : -10000px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : -220px;';
		hs+='visibility : hidden;';
		hs+='width : 140px;';
		hs+='pointer-events:none;';
		hs+='border-radius: 5px; overflow: hidden; box-shadow: 0px 0px 2px #ffffff; transform:translate3d(0px,0px,80px) rotateX(-90deg) scale(1.5); transform-style: preserve-3d; -webkit-backface-visibility: hidden; backface-visibility: hidden;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._hs_preview_image.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return this.ggNodeId;
		}
		me._hs_preview_image.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['ht_node'] == true)) && 
				((player.getVariableValue('opt_3d_preview') == true)) && 
				((player.getIsTour() == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._hs_preview_image.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._hs_preview_image.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._hs_preview_image.style[domTransition]='opacity 500ms ease 0ms';
				if (me._hs_preview_image.ggCurrentLogicStateAlpha == 0) {
					me._hs_preview_image.style.visibility=me._hs_preview_image.ggVisible?'inherit':'hidden';
					me._hs_preview_image.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._hs_preview_image.style.opacity == 0.0) { me._hs_preview_image.style.visibility="hidden"; } }, 505);
					me._hs_preview_image.style.opacity=0;
				}
			}
		}
		me._hs_preview_image.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		el=me._ht_checkmark_tick=document.createElement('div');
		els=me._ht_checkmark_tick__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE2LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgeD0iMHB4IiB3aWR0aD0iMzJweCIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAtMzcyMiAtMjYwNiAzMiAzMiIgeG1sbnM6aT0iaHR0cDovL25zLmFkb2'+
			'JlLmNvbS9BZG9iZUlsbHVzdHJhdG9yLzEwLjAvIiB5PSIwcHgiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4bWxuczphPSJodHRwOi8vbnMuYWRvYmUuY29tL0Fkb2JlU1ZHVmlld2VyRXh0ZW5zaW9ucy8zLjAvIiB4bWxuczpncmFwaD0iaHR0cDovL25zLmFkb2JlLmNvbS9HcmFwaHMvMS4wLyIgeG1sbnM6eD0iaHR0cDovL25zLmFkb2JlLmNvbS9FeHRlbnNpYmlsaXR5LzEuMC8iIHZpZXdCb3g9Ii0zNzIyIC0yNjA2IDMyIDMyIiB4bWw6c3BhY2U9InByZXNlcnZlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMzJweCI+CiA8'+
			'ZyBpZD0iTGF5ZXJfMSIvPgogPGcgaWQ9IkViZW5lXzEiLz4KIDxnIGlkPSJMYXllcl8yIj4KICA8Zz4KICAgPGc+CiAgICA8cGF0aCBkPSJNLTM2OTUuNDczLTI1OTguMTQ2Yy0wLjUxOS0wLjUxOS0xLjM2MS0wLjUxOS0xLjg3OSwwbC04Ljc4Nyw4Ljc4N2wtMi4yOTEtMi4yNDMmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjLTAuNTI1LTAuNTEzLTEuMzY2LTAuNTA0LTEuODgsMC4wMmMtMC41MTMsMC41MjUtMC41MDQsMS4zNjcsMC4wMjEsMS44OGwzLjIzLDMuMTYzYzAuMjU5LDAuMjUzLDAuNTk0LDAuMzc5LDAuOTMsMC4zNzkmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjMC'+
			'4zNCwwLDAuNjgtMC4xMywwLjk0LTAuMzlsOS43MTctOS43MTdDLTM2OTQuOTU0LTI1OTYuNzg1LTM2OTQuOTU0LTI1OTcuNjI2LTM2OTUuNDczLTI1OTguMTQ2eiIgZmlsbD0iI0ZGRkZGRiIvPgogICAgPHBhdGggZD0iTS0zNjk5Ljk2LTI1ODMuODM3aC0xMi4zMjV2LTEyLjMyNmgxMS44MjFsMi4yNTItMi4yNTJjLTAuMTY2LTAuMDg2LTAuMzUyLTAuMTQxLTAuNTUyLTAuMTQxaC0xNC43MTgmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjLTAuNjYxLDAtMS4xOTYsMC41MzYtMS4xOTYsMS4xOTZ2MTQuNzE5YzAsMC42NiwwLjUzNSwxLjE5NiwxLjE5NiwxLjE5NmgxNC43MThjMC42NjEs'+
			'MCwxLjE5Ny0wLjUzNiwxLjE5Ny0xLjE5NnYtMTAuNDAzJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7bC0yLjM5MywyLjM5M1YtMjU4My44Mzd6IiBmaWxsPSIjRkZGRkZGIi8+CiAgIDwvZz4KICAgPGcgYTphZG9iZS1ibGVuZGluZy1tb2RlPSJtdWx0aXBseSIgb3BhY2l0eT0iMC40Ij4KICAgIDxwYXRoIGQ9IiYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O00tMzY5NS40NzMtMjU5OC4xNDZjLTAuNTE5LTAuNTE5LTEuMzYxLTAuNTE5LTEuODc5LDBsLTguNzg3LDguNzg3bC0yLjI5MS0yLjI0M2MtMC41MjUtMC41MTMtMS4zNjYtMC41MDQtMS44OCwwLjAyJiN4ZDsmI3hhOyYjeD'+
			'k7JiN4OTsmI3g5OyYjeDk7Yy0wLjUxMywwLjUyNS0wLjUwNCwxLjM2NywwLjAyMSwxLjg4bDMuMjMsMy4xNjNjMC4yNTksMC4yNTMsMC41OTQsMC4zNzksMC45MywwLjM3OWMwLjM0LDAsMC42OC0wLjEzLDAuOTQtMC4zOWw5LjcxNy05LjcxNyYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O0MtMzY5NC45NTQtMjU5Ni43ODUtMzY5NC45NTQtMjU5Ny42MjYtMzY5NS40NzMtMjU5OC4xNDZ6IiBhOmFkb2JlLWJsZW5kaW5nLW1vZGU9Im5vcm1hbCIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgZmlsbD0ibm9uZSIgc3Ry'+
			'b2tlPSIjMUExNzFCIi8+CiAgICA8cGF0aCBkPSImI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtNLTM2OTkuOTYtMjU4My44MzdoLTEyLjMyNXYtMTIuMzI2aDExLjgyMWwyLjI1Mi0yLjI1MmMtMC4xNjYtMC4wODYtMC4zNTItMC4xNDEtMC41NTItMC4xNDFoLTE0LjcxOCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2MtMC42NjEsMC0xLjE5NiwwLjUzNi0xLjE5NiwxLjE5NnYxNC43MTljMCwwLjY2LDAuNTM1LDEuMTk2LDEuMTk2LDEuMTk2aDE0LjcxOGMwLjY2MSwwLDEuMTk3LTAuNTM2LDEuMTk3LTEuMTk2di0xMC40MDMmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtsLT'+
			'IuMzkzLDIuMzkzVi0yNTgzLjgzN3oiIGE6YWRvYmUtYmxlbmRpbmctbW9kZT0ibm9ybWFsIiBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBmaWxsPSJub25lIiBzdHJva2U9IiMxQTE3MUIiLz4KICAgPC9nPgogICA8Zz4KICAgIDxwYXRoIGQ9Ik0tMzY5NS40NzMtMjU5OC4xNDZjLTAuNTE5LTAuNTE5LTEuMzYxLTAuNTE5LTEuODc5LDBsLTguNzg3LDguNzg3bC0yLjI5MS0yLjI0MyYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2MtMC41MjUtMC41MTMtMS4zNjYtMC41MDQtMS44OCwwLjAyYy0wLjUxMywwLjUyNS0w'+
			'LjUwNCwxLjM2NywwLjAyMSwxLjg4bDMuMjMsMy4xNjNjMC4yNTksMC4yNTMsMC41OTQsMC4zNzksMC45MywwLjM3OSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2MwLjM0LDAsMC42OC0wLjEzLDAuOTQtMC4zOWw5LjcxNy05LjcxN0MtMzY5NC45NTQtMjU5Ni43ODUtMzY5NC45NTQtMjU5Ny42MjYtMzY5NS40NzMtMjU5OC4xNDZ6IiBmaWxsPSIjRkZGRkZGIi8+CiAgICA8cGF0aCBkPSJNLTM2OTkuOTYtMjU4My44MzdoLTEyLjMyNXYtMTIuMzI2aDExLjgyMWwyLjI1Mi0yLjI1MmMtMC4xNjYtMC4wODYtMC4zNTItMC4xNDEtMC41NTItMC4xNDFoLTE0LjcxOCYjeGQ7JiN4YTsmI3g5Oy'+
			'YjeDk7JiN4OTsmI3g5O2MtMC42NjEsMC0xLjE5NiwwLjUzNi0xLjE5NiwxLjE5NnYxNC43MTljMCwwLjY2LDAuNTM1LDEuMTk2LDEuMTk2LDEuMTk2aDE0LjcxOGMwLjY2MSwwLDEuMTk3LTAuNTM2LDEuMTk3LTEuMTk2di0xMC40MDMmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtsLTIuMzkzLDIuMzkzVi0yNTgzLjgzN3oiIGZpbGw9IiNGRkZGRkYiLz4KICAgPC9nPgogICA8Zz4KICAgIDxwYXRoIGQ9Ik0tMzY5NS40NzMtMjU5OC4xNDYmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjLTAuNTE5LTAuNTE5LTEuMzYxLTAuNTE5LTEuODc5LDBsLTguNzg3LDguNzg3bC0yLjI5MS0y'+
			'LjI0M2MtMC41MjUtMC41MTMtMS4zNjYtMC41MDQtMS44OCwwLjAyJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7Yy0wLjUxMywwLjUyNS0wLjUwNCwxLjM2NywwLjAyMSwxLjg4bDMuMjMsMy4xNjNjMC4yNTksMC4yNTMsMC41OTQsMC4zNzksMC45MywwLjM3OWMwLjM0LDAsMC42OC0wLjEzLDAuOTQtMC4zOWw5LjcxNy05LjcxNyYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O0MtMzY5NC45NTQtMjU5Ni43ODUtMzY5NC45NTQtMjU5Ny42MjYtMzY5NS40NzMtMjU5OC4xNDZ6IiBzdHJva2Utd2lkdGg9IjAuMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49In'+
			'JvdW5kIiBmaWxsPSJub25lIiBzdHJva2U9IiMxQTE3MUIiLz4KICAgIDxwYXRoIGQ9Ik0tMzY5OS45Ni0yNTgzLjgzNyYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2gtMTIuMzI1di0xMi4zMjZoMTEuODIxbDIuMjUyLTIuMjUyYy0wLjE2Ni0wLjA4Ni0wLjM1Mi0wLjE0MS0wLjU1Mi0wLjE0MWgtMTQuNzE4Yy0wLjY2MSwwLTEuMTk2LDAuNTM2LTEuMTk2LDEuMTk2djE0LjcxOSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2MwLDAuNjYsMC41MzUsMS4xOTYsMS4xOTYsMS4xOTZoMTQuNzE4YzAuNjYxLDAsMS4xOTctMC41MzYsMS4xOTctMS4xOTZ2LTEwLjQwM2wtMi4zOTMsMi4z'+
			'OTNWLTI1ODMuODM3eiIgc3Ryb2tlLXdpZHRoPSIwLjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMUExNzFCIi8+CiAgIDwvZz4KICA8L2c+CiA8L2c+Cjwvc3ZnPgo=';
		me._ht_checkmark_tick__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="ht_checkmark_tick";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 30px;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 30px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_checkmark_tick.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_checkmark_tick.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.nodeVisited(me._ht_checkmark_tick.ggElementNodeId()) == true)) || 
				((me._ht_checkmark_tick.ggIsActive() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_checkmark_tick.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_checkmark_tick.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_checkmark_tick.style[domTransition]='';
				if (me._ht_checkmark_tick.ggCurrentLogicStateVisible == 0) {
					me._ht_checkmark_tick.style.visibility=(Number(me._ht_checkmark_tick.style.opacity)>0||!me._ht_checkmark_tick.style.opacity)?'inherit':'hidden';
					me._ht_checkmark_tick.ggVisible=true;
				}
				else {
					me._ht_checkmark_tick.style.visibility="hidden";
					me._ht_checkmark_tick.ggVisible=false;
				}
			}
		}
		me._ht_checkmark_tick.ggUpdatePosition=function (useTransition) {
		}
		me._hs_preview_image.appendChild(me._ht_checkmark_tick);
		el=me._hs_tt=document.createElement('div');
		els=me._hs_tt__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="hs_tt";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='bottom : 0px;';
		hs+='height : 20px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 140px;';
		hs+='pointer-events:none;';
		hs+='text-shadow: 1px 1px 2px #000000;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 100%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='bottom:  0px;';
		hs+='width: 140px;';
		hs+='height: auto;';
		hs+='pointer-events: none;';
		hs+='background: #000000;';
		hs+='background: rgba(0,0,0,0.196078);';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 12px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 0px 2px 0px 2px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="";
		el.appendChild(els);
		me._hs_tt.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._hs_tt.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.title == ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._hs_tt.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._hs_tt.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._hs_tt.style[domTransition]='';
				if (me._hs_tt.ggCurrentLogicStateVisible == 0) {
					me._hs_tt.style.visibility="hidden";
					me._hs_tt.ggVisible=false;
				}
				else {
					me._hs_tt.style.visibility=(Number(me._hs_tt.style.opacity)>0||!me._hs_tt.style.opacity)?'inherit':'hidden';
					me._hs_tt.ggVisible=true;
				}
			}
		}
		me._hs_tt.logicBlock_text = function() {
			var newLogicStateText;
			if (
				((player.getVariableValue('POR') == true)) && 
				((me.ggUserdata.title == "Sala"))
			)
			{
				newLogicStateText = 0;
			}
			else if (
				((player.getVariableValue('POR') == true)) && 
				((me.ggUserdata.title == "QuartoFundo"))
			)
			{
				newLogicStateText = 1;
			}
			else if (
				((player.getVariableValue('POR') == true)) && 
				((me.ggUserdata.title == "Acesso"))
			)
			{
				newLogicStateText = 2;
			}
			else if (
				((player.getVariableValue('POR') == true)) && 
				((me.ggUserdata.title == "Garagem"))
			)
			{
				newLogicStateText = 3;
			}
			else if (
				((player.getVariableValue('POR') == true)) && 
				((me.ggUserdata.title == "AcessoSala"))
			)
			{
				newLogicStateText = 4;
			}
			else if (
				((player.getVariableValue('POR') == true)) && 
				((me.ggUserdata.title == "Banheiro"))
			)
			{
				newLogicStateText = 5;
			}
			else if (
				((player.getVariableValue('POR') == true)) && 
				((me.ggUserdata.title == "Cozinha"))
			)
			{
				newLogicStateText = 6;
			}
			else if (
				((player.getVariableValue('POR') == true)) && 
				((me.ggUserdata.title == "Acesso Cozinha"))
			)
			{
				newLogicStateText = 7;
			}
			else if (
				((player.getVariableValue('ENG') == true)) && 
				((me.ggUserdata.title == "QuartoFundo"))
			)
			{
				newLogicStateText = 8;
			}
			else if (
				((player.getVariableValue('ENG') == true)) && 
				((me.ggUserdata.title == "Acesso"))
			)
			{
				newLogicStateText = 9;
			}
			else if (
				((player.getVariableValue('ENG') == true)) && 
				((me.ggUserdata.title == "Garagem"))
			)
			{
				newLogicStateText = 10;
			}
			else if (
				((player.getVariableValue('ENG') == true)) && 
				((me.ggUserdata.title == "AcessoSala"))
			)
			{
				newLogicStateText = 11;
			}
			else if (
				((player.getVariableValue('ENG') == true)) && 
				((me.ggUserdata.title == "Banheiro"))
			)
			{
				newLogicStateText = 12;
			}
			else if (
				((player.getVariableValue('ENG') == true)) && 
				((me.ggUserdata.title == "Cozinha"))
			)
			{
				newLogicStateText = 13;
			}
			else if (
				((player.getVariableValue('ENG') == true)) && 
				((me.ggUserdata.title == "Acesso Cozinha"))
			)
			{
				newLogicStateText = 14;
			}
			else if (
				((player.getVariableValue('ENG') == true)) && 
				((me.hotspot.title == "Sala"))
			)
			{
				newLogicStateText = 15;
			}
			else if (
				((player.getVariableValue('ESP') == true)) && 
				((me.ggUserdata.title == "QuartoFundo"))
			)
			{
				newLogicStateText = 16;
			}
			else if (
				((player.getVariableValue('ENG') == true)) && 
				((me.ggUserdata.title == "Acesso"))
			)
			{
				newLogicStateText = 17;
			}
			else if (
				((player.getVariableValue('ESP') == true)) && 
				((me.ggUserdata.title == "Garagem"))
			)
			{
				newLogicStateText = 18;
			}
			else if (
				((player.getVariableValue('ESP') == true)) && 
				((me.ggUserdata.title == "AcessoSala"))
			)
			{
				newLogicStateText = 19;
			}
			else if (
				((player.getVariableValue('ESP') == true)) && 
				((me.ggUserdata.title == "Banheiro"))
			)
			{
				newLogicStateText = 20;
			}
			else if (
				((player.getVariableValue('ESP') == true)) && 
				((me.ggUserdata.title == "Cozinha"))
			)
			{
				newLogicStateText = 21;
			}
			else if (
				((player.getVariableValue('ESP') == true)) && 
				((me.ggUserdata.title == "Acesso Cozinha"))
			)
			{
				newLogicStateText = 22;
			}
			else if (
				((player.getVariableValue('ESP') == true)) && 
				((me.ggUserdata.title == "Sala"))
			)
			{
				newLogicStateText = 23;
			}
			else {
				newLogicStateText = -1;
			}
			if (me._hs_tt.ggCurrentLogicStateText != newLogicStateText) {
				me._hs_tt.ggCurrentLogicStateText = newLogicStateText;
				me._hs_tt.style[domTransition]='';
				if (me._hs_tt.ggCurrentLogicStateText == 0) {
					me._hs_tt.ggText="Sala";
					me._hs_tt__text.innerHTML=me._hs_tt.ggText;
					if (me._hs_tt.ggUpdateText) {
					me._hs_tt.ggUpdateText=function() {
						var hs="Sala";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._hs_tt.ggUpdatePosition) me._hs_tt.ggUpdatePosition();
					}
				}
				else if (me._hs_tt.ggCurrentLogicStateText == 1) {
					me._hs_tt.ggText="QuartoFundo";
					me._hs_tt__text.innerHTML=me._hs_tt.ggText;
					if (me._hs_tt.ggUpdateText) {
					me._hs_tt.ggUpdateText=function() {
						var hs="QuartoFundo";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._hs_tt.ggUpdatePosition) me._hs_tt.ggUpdatePosition();
					}
				}
				else if (me._hs_tt.ggCurrentLogicStateText == 2) {
					me._hs_tt.ggText="Acesso";
					me._hs_tt__text.innerHTML=me._hs_tt.ggText;
					if (me._hs_tt.ggUpdateText) {
					me._hs_tt.ggUpdateText=function() {
						var hs="Acesso";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._hs_tt.ggUpdatePosition) me._hs_tt.ggUpdatePosition();
					}
				}
				else if (me._hs_tt.ggCurrentLogicStateText == 3) {
					me._hs_tt.ggText="Garagem";
					me._hs_tt__text.innerHTML=me._hs_tt.ggText;
					if (me._hs_tt.ggUpdateText) {
					me._hs_tt.ggUpdateText=function() {
						var hs="Garagem";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._hs_tt.ggUpdatePosition) me._hs_tt.ggUpdatePosition();
					}
				}
				else if (me._hs_tt.ggCurrentLogicStateText == 4) {
					me._hs_tt.ggText="AcessoSala";
					me._hs_tt__text.innerHTML=me._hs_tt.ggText;
					if (me._hs_tt.ggUpdateText) {
					me._hs_tt.ggUpdateText=function() {
						var hs="AcessoSala";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._hs_tt.ggUpdatePosition) me._hs_tt.ggUpdatePosition();
					}
				}
				else if (me._hs_tt.ggCurrentLogicStateText == 5) {
					me._hs_tt.ggText="Banheiro";
					me._hs_tt__text.innerHTML=me._hs_tt.ggText;
					if (me._hs_tt.ggUpdateText) {
					me._hs_tt.ggUpdateText=function() {
						var hs="Banheiro";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._hs_tt.ggUpdatePosition) me._hs_tt.ggUpdatePosition();
					}
				}
				else if (me._hs_tt.ggCurrentLogicStateText == 6) {
					me._hs_tt.ggText="Cozinha";
					me._hs_tt__text.innerHTML=me._hs_tt.ggText;
					if (me._hs_tt.ggUpdateText) {
					me._hs_tt.ggUpdateText=function() {
						var hs="Cozinha";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._hs_tt.ggUpdatePosition) me._hs_tt.ggUpdatePosition();
					}
				}
				else if (me._hs_tt.ggCurrentLogicStateText == 7) {
					me._hs_tt.ggText="Acesso Cozinha";
					me._hs_tt__text.innerHTML=me._hs_tt.ggText;
					if (me._hs_tt.ggUpdateText) {
					me._hs_tt.ggUpdateText=function() {
						var hs="Acesso Cozinha";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._hs_tt.ggUpdatePosition) me._hs_tt.ggUpdatePosition();
					}
				}
				else if (me._hs_tt.ggCurrentLogicStateText == 8) {
					me._hs_tt.ggText="Bedroom";
					me._hs_tt__text.innerHTML=me._hs_tt.ggText;
					if (me._hs_tt.ggUpdateText) {
					me._hs_tt.ggUpdateText=function() {
						var hs="Bedroom";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._hs_tt.ggUpdatePosition) me._hs_tt.ggUpdatePosition();
					}
				}
				else if (me._hs_tt.ggCurrentLogicStateText == 9) {
					me._hs_tt.ggText="Access";
					me._hs_tt__text.innerHTML=me._hs_tt.ggText;
					if (me._hs_tt.ggUpdateText) {
					me._hs_tt.ggUpdateText=function() {
						var hs="Access";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._hs_tt.ggUpdatePosition) me._hs_tt.ggUpdatePosition();
					}
				}
				else if (me._hs_tt.ggCurrentLogicStateText == 10) {
					me._hs_tt.ggText="Garage";
					me._hs_tt__text.innerHTML=me._hs_tt.ggText;
					if (me._hs_tt.ggUpdateText) {
					me._hs_tt.ggUpdateText=function() {
						var hs="Garage";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._hs_tt.ggUpdatePosition) me._hs_tt.ggUpdatePosition();
					}
				}
				else if (me._hs_tt.ggCurrentLogicStateText == 11) {
					me._hs_tt.ggText="Access Living";
					me._hs_tt__text.innerHTML=me._hs_tt.ggText;
					if (me._hs_tt.ggUpdateText) {
					me._hs_tt.ggUpdateText=function() {
						var hs="Access Living";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._hs_tt.ggUpdatePosition) me._hs_tt.ggUpdatePosition();
					}
				}
				else if (me._hs_tt.ggCurrentLogicStateText == 12) {
					me._hs_tt.ggText="Bathroom";
					me._hs_tt__text.innerHTML=me._hs_tt.ggText;
					if (me._hs_tt.ggUpdateText) {
					me._hs_tt.ggUpdateText=function() {
						var hs="Bathroom";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._hs_tt.ggUpdatePosition) me._hs_tt.ggUpdatePosition();
					}
				}
				else if (me._hs_tt.ggCurrentLogicStateText == 13) {
					me._hs_tt.ggText="Kitchen";
					me._hs_tt__text.innerHTML=me._hs_tt.ggText;
					if (me._hs_tt.ggUpdateText) {
					me._hs_tt.ggUpdateText=function() {
						var hs="Kitchen";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._hs_tt.ggUpdatePosition) me._hs_tt.ggUpdatePosition();
					}
				}
				else if (me._hs_tt.ggCurrentLogicStateText == 14) {
					me._hs_tt.ggText="Access Kitchen";
					me._hs_tt__text.innerHTML=me._hs_tt.ggText;
					if (me._hs_tt.ggUpdateText) {
					me._hs_tt.ggUpdateText=function() {
						var hs="Access Kitchen";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._hs_tt.ggUpdatePosition) me._hs_tt.ggUpdatePosition();
					}
				}
				else if (me._hs_tt.ggCurrentLogicStateText == 15) {
					me._hs_tt.ggText="Living";
					me._hs_tt__text.innerHTML=me._hs_tt.ggText;
					if (me._hs_tt.ggUpdateText) {
					me._hs_tt.ggUpdateText=function() {
						var hs="Living";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._hs_tt.ggUpdatePosition) me._hs_tt.ggUpdatePosition();
					}
				}
				else if (me._hs_tt.ggCurrentLogicStateText == 16) {
					me._hs_tt.ggText="Cuarto Fondo";
					me._hs_tt__text.innerHTML=me._hs_tt.ggText;
					if (me._hs_tt.ggUpdateText) {
					me._hs_tt.ggUpdateText=function() {
						var hs="Cuarto Fondo";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._hs_tt.ggUpdatePosition) me._hs_tt.ggUpdatePosition();
					}
				}
				else if (me._hs_tt.ggCurrentLogicStateText == 17) {
					me._hs_tt.ggText="Acceso";
					me._hs_tt__text.innerHTML=me._hs_tt.ggText;
					if (me._hs_tt.ggUpdateText) {
					me._hs_tt.ggUpdateText=function() {
						var hs="Acceso";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._hs_tt.ggUpdatePosition) me._hs_tt.ggUpdatePosition();
					}
				}
				else if (me._hs_tt.ggCurrentLogicStateText == 18) {
					me._hs_tt.ggText="Cochera";
					me._hs_tt__text.innerHTML=me._hs_tt.ggText;
					if (me._hs_tt.ggUpdateText) {
					me._hs_tt.ggUpdateText=function() {
						var hs="Cochera";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._hs_tt.ggUpdatePosition) me._hs_tt.ggUpdatePosition();
					}
				}
				else if (me._hs_tt.ggCurrentLogicStateText == 19) {
					me._hs_tt.ggText="Acceso Sala";
					me._hs_tt__text.innerHTML=me._hs_tt.ggText;
					if (me._hs_tt.ggUpdateText) {
					me._hs_tt.ggUpdateText=function() {
						var hs="Acceso Sala";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._hs_tt.ggUpdatePosition) me._hs_tt.ggUpdatePosition();
					}
				}
				else if (me._hs_tt.ggCurrentLogicStateText == 20) {
					me._hs_tt.ggText="Ba\xf1o";
					me._hs_tt__text.innerHTML=me._hs_tt.ggText;
					if (me._hs_tt.ggUpdateText) {
					me._hs_tt.ggUpdateText=function() {
						var hs="Ba\xf1o";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._hs_tt.ggUpdatePosition) me._hs_tt.ggUpdatePosition();
					}
				}
				else if (me._hs_tt.ggCurrentLogicStateText == 21) {
					me._hs_tt.ggText="Cocina";
					me._hs_tt__text.innerHTML=me._hs_tt.ggText;
					if (me._hs_tt.ggUpdateText) {
					me._hs_tt.ggUpdateText=function() {
						var hs="Cocina";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._hs_tt.ggUpdatePosition) me._hs_tt.ggUpdatePosition();
					}
				}
				else if (me._hs_tt.ggCurrentLogicStateText == 22) {
					me._hs_tt.ggText="Acceso Cocina";
					me._hs_tt__text.innerHTML=me._hs_tt.ggText;
					if (me._hs_tt.ggUpdateText) {
					me._hs_tt.ggUpdateText=function() {
						var hs="Acceso Cocina";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._hs_tt.ggUpdatePosition) me._hs_tt.ggUpdatePosition();
					}
				}
				else if (me._hs_tt.ggCurrentLogicStateText == 23) {
					me._hs_tt.ggText="Sala";
					me._hs_tt__text.innerHTML=me._hs_tt.ggText;
					if (me._hs_tt.ggUpdateText) {
					me._hs_tt.ggUpdateText=function() {
						var hs="Sala";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._hs_tt.ggUpdatePosition) me._hs_tt.ggUpdatePosition();
					}
				}
				else {
					me._hs_tt.ggText="";
					me._hs_tt__text.innerHTML=me._hs_tt.ggText;
					if (me._hs_tt.ggUpdateText) {
					me._hs_tt.ggUpdateText=function() {
						var hs="";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._hs_tt.ggUpdatePosition) me._hs_tt.ggUpdatePosition();
					}
				}
			}
		}
		me._hs_tt.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._hs_preview_image.appendChild(me._hs_tt);
		me._ht_node.appendChild(me._hs_preview_image);
		el=me.__code=document.createElement('div');
		els=me.__code__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="_code";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 37px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : -39px;';
		hs+='visibility : hidden;';
		hs+='width : 66px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 68px;';
		hs+='height: 39px;';
		hs+='pointer-events: none;';
		hs+='background: #ffffff;';
		hs+='border: 1px solid #000000;';
		hs+='color: #000000;';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 2px 0px 2px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="";
this.onUpdatePosition=function(player,hotspot) {
var vs=player.getViewerSize();
var y=vs.height * (1/6*(1+Math.cos(player.getTilt() * Math.PI/90.0)));
var hs= 'translate3d(0px,0px,-1000px) perspective(500px) translate3d(0px,' + (y) + 'px,0px) ';
hs += 'rotateZ(' + ( player.getRoll()).toFixed(10) + 'deg) ';
hs += 'rotateX(' + ( player.getTilt()).toFixed(10) + 'deg) ';
hs += 'rotateY(' + (-player.getPan()).toFixed(10)  + 'deg) ';
hs += 'rotateY(' + ( hotspot.pan).toFixed(2)  + 'deg) ';
hs += 'rotateX(' + (-hotspot.tilt).toFixed(2) + 'deg) ';
hs += 'rotateX(90deg) ';
this.__div.style.transform=hs;
this.__div.style.left = vs.width / 2 + "px";
this.__div.style.top = vs.height / 2 + "px";
};
		el.appendChild(els);
		me.__code.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me.__code.ggUpdatePosition=function (useTransition) {
		}
		me._ht_node.appendChild(me.__code);
		el=me._tt_ht_3d=document.createElement('div');
		els=me._tt_ht_3d__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt_ht_3d";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='z-index: 100;';
		hs+='height : 20px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -170px;';
		hs+='visibility : hidden;';
		hs+='width : 150px;';
		hs+='pointer-events:none;';
		hs+='transform:translate3d(0px,0px,40px) rotateX(-90deg); text-shadow: 1px 1px 2px #000000; -webkit-backface-visibility: hidden; backface-visibility: hidden;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 100%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 150px;';
		hs+='height: auto;';
		hs+='pointer-events: none;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 18px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 0px 2px 0px 2px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="";
		el.appendChild(els);
		me._tt_ht_3d.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._tt_ht_3d.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getIsTour() == false)) && 
				((me.hotspot.title != "")) && 
				((me.elementMouseOver['ht_node'] == true)) && 
				((player.getVariableValue('opt_3d_preview') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._tt_ht_3d.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._tt_ht_3d.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._tt_ht_3d.style[domTransition]='';
				if (me._tt_ht_3d.ggCurrentLogicStateVisible == 0) {
					me._tt_ht_3d.style.visibility=(Number(me._tt_ht_3d.style.opacity)>0||!me._tt_ht_3d.style.opacity)?'inherit':'hidden';
					me._tt_ht_3d.ggVisible=true;
				}
				else {
					me._tt_ht_3d.style.visibility="hidden";
					me._tt_ht_3d.ggVisible=false;
				}
			}
		}
		me._tt_ht_3d.logicBlock_text = function() {
			var newLogicStateText;
			if (
				((player.getVariableValue('POR') == true)) && 
				((me.ggUserdata.title == "Sala"))
			)
			{
				newLogicStateText = 0;
			}
			else if (
				((player.getVariableValue('POR') == true)) && 
				((me.ggUserdata.title == "QuartoFundo"))
			)
			{
				newLogicStateText = 1;
			}
			else if (
				((player.getVariableValue('POR') == true)) && 
				((me.ggUserdata.title == "Acesso"))
			)
			{
				newLogicStateText = 2;
			}
			else if (
				((player.getVariableValue('POR') == true)) && 
				((me.ggUserdata.title == "Garagem"))
			)
			{
				newLogicStateText = 3;
			}
			else if (
				((player.getVariableValue('POR') == true)) && 
				((me.ggUserdata.title == "AcessoSala"))
			)
			{
				newLogicStateText = 4;
			}
			else if (
				((player.getVariableValue('POR') == true)) && 
				((me.ggUserdata.title == "Banheiro"))
			)
			{
				newLogicStateText = 5;
			}
			else if (
				((player.getVariableValue('POR') == true)) && 
				((me.ggUserdata.title == "Cozinha"))
			)
			{
				newLogicStateText = 6;
			}
			else if (
				((player.getVariableValue('POR') == true)) && 
				((me.ggUserdata.title == "Acesso Cozinha"))
			)
			{
				newLogicStateText = 7;
			}
			else if (
				((player.getVariableValue('ENG') == true)) && 
				((me.ggUserdata.title == "QuartoFundo"))
			)
			{
				newLogicStateText = 8;
			}
			else if (
				((player.getVariableValue('ENG') == true)) && 
				((me.ggUserdata.title == "Acesso"))
			)
			{
				newLogicStateText = 9;
			}
			else if (
				((player.getVariableValue('ENG') == true)) && 
				((me.ggUserdata.title == "Garagem"))
			)
			{
				newLogicStateText = 10;
			}
			else if (
				((player.getVariableValue('ENG') == true)) && 
				((me.ggUserdata.title == "AcessoSala"))
			)
			{
				newLogicStateText = 11;
			}
			else if (
				((player.getVariableValue('ENG') == true)) && 
				((me.ggUserdata.title == "Banheiro"))
			)
			{
				newLogicStateText = 12;
			}
			else if (
				((player.getVariableValue('ENG') == true)) && 
				((me.ggUserdata.title == "Cozinha"))
			)
			{
				newLogicStateText = 13;
			}
			else if (
				((player.getVariableValue('ENG') == true)) && 
				((me.ggUserdata.title == "Acesso Cozinha"))
			)
			{
				newLogicStateText = 14;
			}
			else if (
				((player.getVariableValue('ENG') == true)) && 
				((me.hotspot.title == "Sala"))
			)
			{
				newLogicStateText = 15;
			}
			else if (
				((player.getVariableValue('ESP') == true)) && 
				((me.ggUserdata.title == "QuartoFundo"))
			)
			{
				newLogicStateText = 16;
			}
			else if (
				((player.getVariableValue('ENG') == true)) && 
				((me.ggUserdata.title == "Acesso"))
			)
			{
				newLogicStateText = 17;
			}
			else if (
				((player.getVariableValue('ESP') == true)) && 
				((me.ggUserdata.title == "Garagem"))
			)
			{
				newLogicStateText = 18;
			}
			else if (
				((player.getVariableValue('ESP') == true)) && 
				((me.ggUserdata.title == "AcessoSala"))
			)
			{
				newLogicStateText = 19;
			}
			else if (
				((player.getVariableValue('ESP') == true)) && 
				((me.ggUserdata.title == "Banheiro"))
			)
			{
				newLogicStateText = 20;
			}
			else if (
				((player.getVariableValue('ESP') == true)) && 
				((me.ggUserdata.title == "Cozinha"))
			)
			{
				newLogicStateText = 21;
			}
			else if (
				((player.getVariableValue('ESP') == true)) && 
				((me.ggUserdata.title == "Acesso Cozinha"))
			)
			{
				newLogicStateText = 22;
			}
			else if (
				((player.getVariableValue('ESP') == true)) && 
				((me.ggUserdata.title == "Sala"))
			)
			{
				newLogicStateText = 23;
			}
			else {
				newLogicStateText = -1;
			}
			if (me._tt_ht_3d.ggCurrentLogicStateText != newLogicStateText) {
				me._tt_ht_3d.ggCurrentLogicStateText = newLogicStateText;
				me._tt_ht_3d.style[domTransition]='';
				if (me._tt_ht_3d.ggCurrentLogicStateText == 0) {
					me._tt_ht_3d.ggText="Sala";
					me._tt_ht_3d__text.innerHTML=me._tt_ht_3d.ggText;
					if (me._tt_ht_3d.ggUpdateText) {
					me._tt_ht_3d.ggUpdateText=function() {
						var hs="Sala";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._tt_ht_3d.ggUpdatePosition) me._tt_ht_3d.ggUpdatePosition();
					}
				}
				else if (me._tt_ht_3d.ggCurrentLogicStateText == 1) {
					me._tt_ht_3d.ggText="QuartoFundo";
					me._tt_ht_3d__text.innerHTML=me._tt_ht_3d.ggText;
					if (me._tt_ht_3d.ggUpdateText) {
					me._tt_ht_3d.ggUpdateText=function() {
						var hs="QuartoFundo";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._tt_ht_3d.ggUpdatePosition) me._tt_ht_3d.ggUpdatePosition();
					}
				}
				else if (me._tt_ht_3d.ggCurrentLogicStateText == 2) {
					me._tt_ht_3d.ggText="Acesso";
					me._tt_ht_3d__text.innerHTML=me._tt_ht_3d.ggText;
					if (me._tt_ht_3d.ggUpdateText) {
					me._tt_ht_3d.ggUpdateText=function() {
						var hs="Acesso";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._tt_ht_3d.ggUpdatePosition) me._tt_ht_3d.ggUpdatePosition();
					}
				}
				else if (me._tt_ht_3d.ggCurrentLogicStateText == 3) {
					me._tt_ht_3d.ggText="Garagem";
					me._tt_ht_3d__text.innerHTML=me._tt_ht_3d.ggText;
					if (me._tt_ht_3d.ggUpdateText) {
					me._tt_ht_3d.ggUpdateText=function() {
						var hs="Garagem";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._tt_ht_3d.ggUpdatePosition) me._tt_ht_3d.ggUpdatePosition();
					}
				}
				else if (me._tt_ht_3d.ggCurrentLogicStateText == 4) {
					me._tt_ht_3d.ggText="AcessoSala";
					me._tt_ht_3d__text.innerHTML=me._tt_ht_3d.ggText;
					if (me._tt_ht_3d.ggUpdateText) {
					me._tt_ht_3d.ggUpdateText=function() {
						var hs="AcessoSala";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._tt_ht_3d.ggUpdatePosition) me._tt_ht_3d.ggUpdatePosition();
					}
				}
				else if (me._tt_ht_3d.ggCurrentLogicStateText == 5) {
					me._tt_ht_3d.ggText="Banheiro";
					me._tt_ht_3d__text.innerHTML=me._tt_ht_3d.ggText;
					if (me._tt_ht_3d.ggUpdateText) {
					me._tt_ht_3d.ggUpdateText=function() {
						var hs="Banheiro";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._tt_ht_3d.ggUpdatePosition) me._tt_ht_3d.ggUpdatePosition();
					}
				}
				else if (me._tt_ht_3d.ggCurrentLogicStateText == 6) {
					me._tt_ht_3d.ggText="Cozinha";
					me._tt_ht_3d__text.innerHTML=me._tt_ht_3d.ggText;
					if (me._tt_ht_3d.ggUpdateText) {
					me._tt_ht_3d.ggUpdateText=function() {
						var hs="Cozinha";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._tt_ht_3d.ggUpdatePosition) me._tt_ht_3d.ggUpdatePosition();
					}
				}
				else if (me._tt_ht_3d.ggCurrentLogicStateText == 7) {
					me._tt_ht_3d.ggText="Acesso Cozinha";
					me._tt_ht_3d__text.innerHTML=me._tt_ht_3d.ggText;
					if (me._tt_ht_3d.ggUpdateText) {
					me._tt_ht_3d.ggUpdateText=function() {
						var hs="Acesso Cozinha";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._tt_ht_3d.ggUpdatePosition) me._tt_ht_3d.ggUpdatePosition();
					}
				}
				else if (me._tt_ht_3d.ggCurrentLogicStateText == 8) {
					me._tt_ht_3d.ggText="Bedroom";
					me._tt_ht_3d__text.innerHTML=me._tt_ht_3d.ggText;
					if (me._tt_ht_3d.ggUpdateText) {
					me._tt_ht_3d.ggUpdateText=function() {
						var hs="Bedroom";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._tt_ht_3d.ggUpdatePosition) me._tt_ht_3d.ggUpdatePosition();
					}
				}
				else if (me._tt_ht_3d.ggCurrentLogicStateText == 9) {
					me._tt_ht_3d.ggText="Access";
					me._tt_ht_3d__text.innerHTML=me._tt_ht_3d.ggText;
					if (me._tt_ht_3d.ggUpdateText) {
					me._tt_ht_3d.ggUpdateText=function() {
						var hs="Access";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._tt_ht_3d.ggUpdatePosition) me._tt_ht_3d.ggUpdatePosition();
					}
				}
				else if (me._tt_ht_3d.ggCurrentLogicStateText == 10) {
					me._tt_ht_3d.ggText="Garage";
					me._tt_ht_3d__text.innerHTML=me._tt_ht_3d.ggText;
					if (me._tt_ht_3d.ggUpdateText) {
					me._tt_ht_3d.ggUpdateText=function() {
						var hs="Garage";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._tt_ht_3d.ggUpdatePosition) me._tt_ht_3d.ggUpdatePosition();
					}
				}
				else if (me._tt_ht_3d.ggCurrentLogicStateText == 11) {
					me._tt_ht_3d.ggText="Access Living";
					me._tt_ht_3d__text.innerHTML=me._tt_ht_3d.ggText;
					if (me._tt_ht_3d.ggUpdateText) {
					me._tt_ht_3d.ggUpdateText=function() {
						var hs="Access Living";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._tt_ht_3d.ggUpdatePosition) me._tt_ht_3d.ggUpdatePosition();
					}
				}
				else if (me._tt_ht_3d.ggCurrentLogicStateText == 12) {
					me._tt_ht_3d.ggText="Bathroom";
					me._tt_ht_3d__text.innerHTML=me._tt_ht_3d.ggText;
					if (me._tt_ht_3d.ggUpdateText) {
					me._tt_ht_3d.ggUpdateText=function() {
						var hs="Bathroom";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._tt_ht_3d.ggUpdatePosition) me._tt_ht_3d.ggUpdatePosition();
					}
				}
				else if (me._tt_ht_3d.ggCurrentLogicStateText == 13) {
					me._tt_ht_3d.ggText="Kitchen";
					me._tt_ht_3d__text.innerHTML=me._tt_ht_3d.ggText;
					if (me._tt_ht_3d.ggUpdateText) {
					me._tt_ht_3d.ggUpdateText=function() {
						var hs="Kitchen";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._tt_ht_3d.ggUpdatePosition) me._tt_ht_3d.ggUpdatePosition();
					}
				}
				else if (me._tt_ht_3d.ggCurrentLogicStateText == 14) {
					me._tt_ht_3d.ggText="Access Kitchen";
					me._tt_ht_3d__text.innerHTML=me._tt_ht_3d.ggText;
					if (me._tt_ht_3d.ggUpdateText) {
					me._tt_ht_3d.ggUpdateText=function() {
						var hs="Access Kitchen";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._tt_ht_3d.ggUpdatePosition) me._tt_ht_3d.ggUpdatePosition();
					}
				}
				else if (me._tt_ht_3d.ggCurrentLogicStateText == 15) {
					me._tt_ht_3d.ggText="Living";
					me._tt_ht_3d__text.innerHTML=me._tt_ht_3d.ggText;
					if (me._tt_ht_3d.ggUpdateText) {
					me._tt_ht_3d.ggUpdateText=function() {
						var hs="Living";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._tt_ht_3d.ggUpdatePosition) me._tt_ht_3d.ggUpdatePosition();
					}
				}
				else if (me._tt_ht_3d.ggCurrentLogicStateText == 16) {
					me._tt_ht_3d.ggText="Cuarto Fondo";
					me._tt_ht_3d__text.innerHTML=me._tt_ht_3d.ggText;
					if (me._tt_ht_3d.ggUpdateText) {
					me._tt_ht_3d.ggUpdateText=function() {
						var hs="Cuarto Fondo";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._tt_ht_3d.ggUpdatePosition) me._tt_ht_3d.ggUpdatePosition();
					}
				}
				else if (me._tt_ht_3d.ggCurrentLogicStateText == 17) {
					me._tt_ht_3d.ggText="Acceso";
					me._tt_ht_3d__text.innerHTML=me._tt_ht_3d.ggText;
					if (me._tt_ht_3d.ggUpdateText) {
					me._tt_ht_3d.ggUpdateText=function() {
						var hs="Acceso";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._tt_ht_3d.ggUpdatePosition) me._tt_ht_3d.ggUpdatePosition();
					}
				}
				else if (me._tt_ht_3d.ggCurrentLogicStateText == 18) {
					me._tt_ht_3d.ggText="Cochera";
					me._tt_ht_3d__text.innerHTML=me._tt_ht_3d.ggText;
					if (me._tt_ht_3d.ggUpdateText) {
					me._tt_ht_3d.ggUpdateText=function() {
						var hs="Cochera";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._tt_ht_3d.ggUpdatePosition) me._tt_ht_3d.ggUpdatePosition();
					}
				}
				else if (me._tt_ht_3d.ggCurrentLogicStateText == 19) {
					me._tt_ht_3d.ggText="Acceso Sala";
					me._tt_ht_3d__text.innerHTML=me._tt_ht_3d.ggText;
					if (me._tt_ht_3d.ggUpdateText) {
					me._tt_ht_3d.ggUpdateText=function() {
						var hs="Acceso Sala";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._tt_ht_3d.ggUpdatePosition) me._tt_ht_3d.ggUpdatePosition();
					}
				}
				else if (me._tt_ht_3d.ggCurrentLogicStateText == 20) {
					me._tt_ht_3d.ggText="Ba\xf1o";
					me._tt_ht_3d__text.innerHTML=me._tt_ht_3d.ggText;
					if (me._tt_ht_3d.ggUpdateText) {
					me._tt_ht_3d.ggUpdateText=function() {
						var hs="Ba\xf1o";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._tt_ht_3d.ggUpdatePosition) me._tt_ht_3d.ggUpdatePosition();
					}
				}
				else if (me._tt_ht_3d.ggCurrentLogicStateText == 21) {
					me._tt_ht_3d.ggText="Cocina";
					me._tt_ht_3d__text.innerHTML=me._tt_ht_3d.ggText;
					if (me._tt_ht_3d.ggUpdateText) {
					me._tt_ht_3d.ggUpdateText=function() {
						var hs="Cocina";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._tt_ht_3d.ggUpdatePosition) me._tt_ht_3d.ggUpdatePosition();
					}
				}
				else if (me._tt_ht_3d.ggCurrentLogicStateText == 22) {
					me._tt_ht_3d.ggText="Acceso Cocina";
					me._tt_ht_3d__text.innerHTML=me._tt_ht_3d.ggText;
					if (me._tt_ht_3d.ggUpdateText) {
					me._tt_ht_3d.ggUpdateText=function() {
						var hs="Acceso Cocina";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._tt_ht_3d.ggUpdatePosition) me._tt_ht_3d.ggUpdatePosition();
					}
				}
				else if (me._tt_ht_3d.ggCurrentLogicStateText == 23) {
					me._tt_ht_3d.ggText="Sala";
					me._tt_ht_3d__text.innerHTML=me._tt_ht_3d.ggText;
					if (me._tt_ht_3d.ggUpdateText) {
					me._tt_ht_3d.ggUpdateText=function() {
						var hs="Sala";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._tt_ht_3d.ggUpdatePosition) me._tt_ht_3d.ggUpdatePosition();
					}
				}
				else {
					me._tt_ht_3d.ggText="";
					me._tt_ht_3d__text.innerHTML=me._tt_ht_3d.ggText;
					if (me._tt_ht_3d.ggUpdateText) {
					me._tt_ht_3d.ggUpdateText=function() {
						var hs="";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					} else {
						if (me._tt_ht_3d.ggUpdatePosition) me._tt_ht_3d.ggUpdatePosition();
					}
				}
			}
		}
		me._tt_ht_3d.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._ht_node.appendChild(me._tt_ht_3d);
		el=me._ht_node_customimage=document.createElement('div');
		els=me._ht_node_customimage__img=document.createElement('img');
		els.className='ggskin ggskin_external';
		els.setAttribute('style','position: absolute;-webkit-user-drag:none;pointer-events:none;;');
		els.onload=function() {me._ht_node_customimage.ggUpdatePosition();}
		if ((hotspot) && (hotspot.customimage)) {
			el.ggText=hotspot.customimage;
			els.setAttribute('src', hotspot.customimage);
			els.style.width=hotspot.customimagewidth + 'px';
			els.style.height=hotspot.customimageheight + 'px';
			me.ggUse3d = hotspot.use3D;
			me.gg3dDistance = hotspot.distance3D;
		}
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		hs ='';
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="ht_node_CustomImage";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_external ";
		el.ggType='external';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -145px;';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_node_customimage.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_node_customimage.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.customimage == ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_node_customimage.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_node_customimage.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_node_customimage.style[domTransition]='';
				if (me._ht_node_customimage.ggCurrentLogicStateVisible == 0) {
					me._ht_node_customimage.style.visibility="hidden";
					me._ht_node_customimage__img.src = '';
					me._ht_node_customimage.ggVisible=false;
				}
				else {
					me._ht_node_customimage.style.visibility=(Number(me._ht_node_customimage.style.opacity)>0||!me._ht_node_customimage.style.opacity)?'inherit':'hidden';
					me._ht_node_customimage.ggSubElement.src=me._ht_node_customimage.ggText;
					me._ht_node_customimage.ggVisible=true;
				}
			}
		}
		me._ht_node_customimage.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
			var parentWidth = me._ht_node_customimage.clientWidth;
			var parentHeight = me._ht_node_customimage.clientHeight;
			var img = me._ht_node_customimage__img;
			var aspectRatioDiv = me._ht_node_customimage.clientWidth / me._ht_node_customimage.clientHeight;
			var aspectRatioImg = img.naturalWidth / img.naturalHeight;
			if (img.naturalWidth < parentWidth) parentWidth = img.naturalWidth;
			if (img.naturalHeight < parentHeight) parentHeight = img.naturalHeight;
			var currentWidth,currentHeight;
			if ((hotspot) && (hotspot.customimage)) {
				currentWidth  = hotspot.customimagewidth;
				currentHeight = hotspot.customimageheight;
			}
			img.style.left='50%';
			img.style.marginLeft='-' + currentWidth/2 + 'px';
			img.style.top='50%';
			img.style.marginTop='-' + currentHeight/2 + 'px';
		}
		me._ht_node.appendChild(me._ht_node_customimage);
		if ((hotspot) && (hotspot.customimage)) {
			el.style.width=hotspot.customimagewidth + 'px';
			el.style.height=hotspot.customimageheight + 'px';
		}
		me.__div = me._ht_node;
	};
	me.addSkinHotspot=function(hotspot) {
		var hsinst = null;
		{
			hotspot.skinid = 'ht_node';
			hsinst = new SkinHotspotClass_ht_node(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
			me.callChildLogicBlocksHotspot_ht_node_changenode();;
			me.callChildLogicBlocksHotspot_ht_node_configloaded();;
			me.callChildLogicBlocksHotspot_ht_node_mouseover();;
			me.callChildLogicBlocksHotspot_ht_node_active();;
			me.callChildLogicBlocksHotspot_ht_node_changevisitednodes();;
			me.callChildLogicBlocksHotspot_ht_node_activehotspotchanged();;
			me.callChildLogicBlocksHotspot_ht_node_varchanged_POR();;
			me.callChildLogicBlocksHotspot_ht_node_varchanged_ENG();;
			me.callChildLogicBlocksHotspot_ht_node_varchanged_ESP();;
			me.callChildLogicBlocksHotspot_ht_node_varchanged_opt_3d_preview();;
		}
		return hsinst;
	}
	me.removeSkinHotspots=function() {
		if(hotspotTemplates['ht_node']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_node'].length; i++) {
				hotspotTemplates['ht_node'][i] = null;
			}
		}
		hotspotTemplates = [];
	}
	me.addSkin();
	var style = document.createElement('style');
	style.type = 'text/css';
	style.appendChild(document.createTextNode('.ggskin { font-family: Verdana, Arial, Helvetica, sans-serif; font-size: 14px; } .ggskin.tooltip { font-family: "Josefin Sans", sans-serif;; font-size: 14px; } .ggskin.info { font-family: "Orbitron", sans-serif; font-size: 14px; }'));
	document.head.appendChild(style);
	me._quarto_e_lavanderiai.logicBlock_position();
	me._quarto_e_lavanderiai.logicBlock_scaling();
	me._cozinha_e_sala_de_jantari.logicBlock_position();
	me._cozinha_e_sala_de_jantari.logicBlock_scaling();
	me._no_inclusoi.logicBlock_position();
	me._no_inclusoi.logicBlock_scaling();
	me._entretenimentoi.logicBlock_position();
	me._entretenimentoi.logicBlock_scaling();
	me._internet_e_escritrioi.logicBlock_position();
	me._internet_e_escritrioi.logicBlock_scaling();
	me._privacidade_e_seguranai.logicBlock_position();
	me._privacidade_e_seguranai.logicBlock_scaling();
	me._estacionamento_e_instalaesi.logicBlock_position();
	me._estacionamento_e_instalaesi.logicBlock_scaling();
	me._climatizaoi.logicBlock_position();
	me._climatizaoi.logicBlock_scaling();
	me._banheiroi.logicBlock_position();
	me._banheiroi.logicBlock_scaling();
	me._serviosi.logicBlock_position();
	me._serviosi.logicBlock_scaling();
	me._info.logicBlock_position();
	me._info.logicBlock_scaling();
	me._sobre_o_lugar.logicBlock_position();
	me._sobre_o_lugar.logicBlock_scaling();
	me._menu.logicBlock_size();
	me._banheiro_menu.logicBlock_position();
	me._banheiro_menu.logicBlock_scaling();
	me._cozinha_menu.logicBlock_position();
	me._cozinha_menu.logicBlock_scaling();
	me._frigobar_menu.logicBlock_position();
	me._frigobar_menu.logicBlock_scaling();
	me._quarto_menu.logicBlock_position();
	me._quarto_menu.logicBlock_scaling();
	me._garagem_menu.logicBlock_position();
	me._garagem_menu.logicBlock_scaling();
	me._info_menu.logicBlock_position();
	me._info_menu.logicBlock_scaling();
	me._button_mute.logicBlock_position();
	me._button_fullscreen.logicBlock_position();
	me._indicaes_de_uso.logicBlock_position();
	me._indicaes_de_uso.logicBlock_scaling();
	me._enter_vr.logicBlock_position();
	me._button_image_normalscreen.logicBlock_visible();
	me._button_image_fullscreen.logicBlock_visible();
	me._tt_fullscreen.logicBlock_text();
	me._quarto_e_lavanderiai.logicBlock_visible();
	me._bsico0.logicBlock_text();
	me._cabides.logicBlock_text();
	me._roupa_de_cama.logicBlock_text();
	me._cobertores_e_travesseiros_extras.logicBlock_text();
	me._varal_para_secar_roupas.logicBlock_text();
	me._local_para_guardar_as_roupas_closet.logicBlock_text();
	me._cozinha_e_sala_de_jantari.logicBlock_visible();
	me._bsico.logicBlock_text();
	me._microondas.logicBlock_text();
	me._louas_e_talheres.logicBlock_text();
	me._frigobar0.logicBlock_text();
	me._fogo.logicBlock_text();
	me._chaleira_de_gua_quente.logicBlock_text();
	me._no_inclusoi.logicBlock_visible();
	me._cmeras_de_segurana_na_propriedade.logicBlock_text();
	me._mquina_de_lavar.logicBlock_text();
	me._secadora.logicBlock_text();
	me._frigobar.logicBlock_text();
	me._detector_de_fumaa.logicBlock_text();
	me._alarme_de_monxido_de_carbono.logicBlock_text();
	me._aquecimento_central.logicBlock_text();
	me._entretenimentoi.logicBlock_visible();
	me._conexo_ethernet.logicBlock_text();
	me._hdtv_com_tv_a_cabo_premium.logicBlock_text();
	me._internet_e_escritrioi.logicBlock_visible();
	me._wifi0.logicBlock_text();
	me._espao_de_trabalho_exclusivo1.logicBlock_text();
	me._privacidade_e_seguranai.logicBlock_visible();
	me._tranca_na_porta_do_quarto.logicBlock_text();
	me._estacionamento_e_instalaesi.logicBlock_visible();
	me._garagem_residencial_gratuita_na_propriedade.logicBlock_text();
	me._climatizaoi.logicBlock_visible();
	me._ventilador_de_teto.logicBlock_text();
	me._banheiroi.logicBlock_visible();
	me._secador_de_cabelo.logicBlock_text();
	me._xampu.logicBlock_text();
	me._condicionador.logicBlock_text();
	me._sabonete_para_o_corpo.logicBlock_text();
	me._agua_quente.logicBlock_text();
	me._serviosi.logicBlock_visible();
	me._wifi.logicBlock_text();
	me._espao_de_trabalho_exclusivo0.logicBlock_text();
	me._banheiro_.logicBlock_text();
	me._quarto_e_lavanderiab.logicBlock_text();
	me._entretenimentob.logicBlock_text();
	me._climatizaob.logicBlock_text();
	me._privacidade_e_seguranab.logicBlock_text();
	me._internet_e_escritriob.logicBlock_text();
	me._cozinha_e_sala_de_jantarb.logicBlock_text();
	me._estacionamento_e_instalaesb.logicBlock_text();
	me._serviosb.logicBlock_text();
	me._no_inclusob.logicBlock_text();
	me._sobre_o_lugar.logicBlock_visible();
	me._sobre_o_lugar0.logicBlock_text();
	me._espao_de_trabalho_exclusivo.logicBlock_text();
	me._durante_sua_estadia.logicBlock_text();
	me._banheiro_menu.logicBlock_text();
	me._cozinha_menu.logicBlock_text();
	me._frigobar_menu.logicBlock_text();
	me._quarto_menu.logicBlock_text();
	me._quarto_menu.logicBlock_textcolor();
	me._garagem_menu.logicBlock_text();
	me._info_menu.logicBlock_text();
	me._tt_unmute.logicBlock_text();
	me._tt_mute.logicBlock_text();
	me._iniciar0.logicBlock_text();
	me._indicativo2.logicBlock_text();
	me._tt_enter_vr.logicBlock_text();
	me._tt_fullscreen.logicBlock_position();
	me._enter_vr.logicBlock_visible();
	player.addListener('sizechanged', function(args) { me._quarto_e_lavanderiai.logicBlock_position();me._quarto_e_lavanderiai.logicBlock_scaling();me._cozinha_e_sala_de_jantari.logicBlock_position();me._cozinha_e_sala_de_jantari.logicBlock_scaling();me._no_inclusoi.logicBlock_position();me._no_inclusoi.logicBlock_scaling();me._entretenimentoi.logicBlock_position();me._entretenimentoi.logicBlock_scaling();me._internet_e_escritrioi.logicBlock_position();me._internet_e_escritrioi.logicBlock_scaling();me._privacidade_e_seguranai.logicBlock_position();me._privacidade_e_seguranai.logicBlock_scaling();me._estacionamento_e_instalaesi.logicBlock_position();me._estacionamento_e_instalaesi.logicBlock_scaling();me._climatizaoi.logicBlock_position();me._climatizaoi.logicBlock_scaling();me._banheiroi.logicBlock_position();me._banheiroi.logicBlock_scaling();me._serviosi.logicBlock_position();me._serviosi.logicBlock_scaling();me._info.logicBlock_position();me._info.logicBlock_scaling();me._sobre_o_lugar.logicBlock_position();me._sobre_o_lugar.logicBlock_scaling();me._menu.logicBlock_size();me._banheiro_menu.logicBlock_position();me._banheiro_menu.logicBlock_scaling();me._cozinha_menu.logicBlock_position();me._cozinha_menu.logicBlock_scaling();me._frigobar_menu.logicBlock_position();me._frigobar_menu.logicBlock_scaling();me._quarto_menu.logicBlock_position();me._quarto_menu.logicBlock_scaling();me._garagem_menu.logicBlock_position();me._garagem_menu.logicBlock_scaling();me._info_menu.logicBlock_position();me._info_menu.logicBlock_scaling();me._button_mute.logicBlock_position();me._button_fullscreen.logicBlock_position();me._indicaes_de_uso.logicBlock_position();me._indicaes_de_uso.logicBlock_scaling();me._enter_vr.logicBlock_position(); });
	player.addListener('fullscreenenter', function(args) { me._button_image_normalscreen.logicBlock_visible();me._button_image_fullscreen.logicBlock_visible();me._tt_fullscreen.logicBlock_text(); });
	player.addListener('fullscreenexit', function(args) { me._button_image_normalscreen.logicBlock_visible();me._button_image_fullscreen.logicBlock_visible();me._tt_fullscreen.logicBlock_text(); });
	player.addListener('changenode', function(args) { me._quarto_e_lavanderiai.logicBlock_visible();me._bsico0.logicBlock_text();me._cabides.logicBlock_text();me._roupa_de_cama.logicBlock_text();me._cobertores_e_travesseiros_extras.logicBlock_text();me._varal_para_secar_roupas.logicBlock_text();me._local_para_guardar_as_roupas_closet.logicBlock_text();me._cozinha_e_sala_de_jantari.logicBlock_visible();me._bsico.logicBlock_text();me._microondas.logicBlock_text();me._louas_e_talheres.logicBlock_text();me._frigobar0.logicBlock_text();me._fogo.logicBlock_text();me._chaleira_de_gua_quente.logicBlock_text();me._no_inclusoi.logicBlock_visible();me._cmeras_de_segurana_na_propriedade.logicBlock_text();me._mquina_de_lavar.logicBlock_text();me._secadora.logicBlock_text();me._frigobar.logicBlock_text();me._detector_de_fumaa.logicBlock_text();me._alarme_de_monxido_de_carbono.logicBlock_text();me._aquecimento_central.logicBlock_text();me._entretenimentoi.logicBlock_visible();me._conexo_ethernet.logicBlock_text();me._hdtv_com_tv_a_cabo_premium.logicBlock_text();me._internet_e_escritrioi.logicBlock_visible();me._wifi0.logicBlock_text();me._espao_de_trabalho_exclusivo1.logicBlock_text();me._privacidade_e_seguranai.logicBlock_visible();me._tranca_na_porta_do_quarto.logicBlock_text();me._estacionamento_e_instalaesi.logicBlock_visible();me._garagem_residencial_gratuita_na_propriedade.logicBlock_text();me._climatizaoi.logicBlock_visible();me._ventilador_de_teto.logicBlock_text();me._banheiroi.logicBlock_visible();me._secador_de_cabelo.logicBlock_text();me._xampu.logicBlock_text();me._condicionador.logicBlock_text();me._sabonete_para_o_corpo.logicBlock_text();me._agua_quente.logicBlock_text();me._serviosi.logicBlock_visible();me._wifi.logicBlock_text();me._espao_de_trabalho_exclusivo0.logicBlock_text();me._banheiro_.logicBlock_text();me._quarto_e_lavanderiab.logicBlock_text();me._entretenimentob.logicBlock_text();me._climatizaob.logicBlock_text();me._privacidade_e_seguranab.logicBlock_text();me._internet_e_escritriob.logicBlock_text();me._cozinha_e_sala_de_jantarb.logicBlock_text();me._estacionamento_e_instalaesb.logicBlock_text();me._serviosb.logicBlock_text();me._no_inclusob.logicBlock_text();me._sobre_o_lugar.logicBlock_visible();me._sobre_o_lugar0.logicBlock_text();me._espao_de_trabalho_exclusivo.logicBlock_text();me._durante_sua_estadia.logicBlock_text();me._banheiro_menu.logicBlock_text();me._cozinha_menu.logicBlock_text();me._frigobar_menu.logicBlock_text();me._quarto_menu.logicBlock_text();me._quarto_menu.logicBlock_textcolor();me._garagem_menu.logicBlock_text();me._info_menu.logicBlock_text();me._tt_unmute.logicBlock_text();me._tt_mute.logicBlock_text();me._iniciar0.logicBlock_text();me._indicativo2.logicBlock_text();me._tt_enter_vr.logicBlock_text(); });
	player.addListener('configloaded', function(args) { me._tt_fullscreen.logicBlock_position(); });
	player.addListener('vrchanged', function(args) { me._enter_vr.logicBlock_visible(); });
	player.addListener('hastouch', function(args) { me._tt_fullscreen.logicBlock_position(); });
	player.addListener('varchanged_INFO', function(args) { me._quarto_e_lavanderiai.logicBlock_visible();me._cozinha_e_sala_de_jantari.logicBlock_visible();me._no_inclusoi.logicBlock_visible();me._entretenimentoi.logicBlock_visible();me._internet_e_escritrioi.logicBlock_visible();me._privacidade_e_seguranai.logicBlock_visible();me._estacionamento_e_instalaesi.logicBlock_visible();me._climatizaoi.logicBlock_visible();me._banheiroi.logicBlock_visible();me._serviosi.logicBlock_visible();me._sobre_o_lugar.logicBlock_visible(); });
	player.addListener('varchanged_POR', function(args) { me._bsico0.logicBlock_text();me._cabides.logicBlock_text();me._roupa_de_cama.logicBlock_text();me._cobertores_e_travesseiros_extras.logicBlock_text();me._varal_para_secar_roupas.logicBlock_text();me._local_para_guardar_as_roupas_closet.logicBlock_text();me._bsico.logicBlock_text();me._microondas.logicBlock_text();me._louas_e_talheres.logicBlock_text();me._frigobar0.logicBlock_text();me._fogo.logicBlock_text();me._chaleira_de_gua_quente.logicBlock_text();me._cmeras_de_segurana_na_propriedade.logicBlock_text();me._mquina_de_lavar.logicBlock_text();me._secadora.logicBlock_text();me._frigobar.logicBlock_text();me._detector_de_fumaa.logicBlock_text();me._alarme_de_monxido_de_carbono.logicBlock_text();me._aquecimento_central.logicBlock_text();me._conexo_ethernet.logicBlock_text();me._hdtv_com_tv_a_cabo_premium.logicBlock_text();me._wifi0.logicBlock_text();me._espao_de_trabalho_exclusivo1.logicBlock_text();me._tranca_na_porta_do_quarto.logicBlock_text();me._garagem_residencial_gratuita_na_propriedade.logicBlock_text();me._ventilador_de_teto.logicBlock_text();me._secador_de_cabelo.logicBlock_text();me._xampu.logicBlock_text();me._condicionador.logicBlock_text();me._sabonete_para_o_corpo.logicBlock_text();me._agua_quente.logicBlock_text();me._wifi.logicBlock_text();me._espao_de_trabalho_exclusivo0.logicBlock_text();me._banheiro_.logicBlock_text();me._quarto_e_lavanderiab.logicBlock_text();me._entretenimentob.logicBlock_text();me._climatizaob.logicBlock_text();me._privacidade_e_seguranab.logicBlock_text();me._internet_e_escritriob.logicBlock_text();me._cozinha_e_sala_de_jantarb.logicBlock_text();me._estacionamento_e_instalaesb.logicBlock_text();me._serviosb.logicBlock_text();me._no_inclusob.logicBlock_text();me._sobre_o_lugar0.logicBlock_text();me._espao_de_trabalho_exclusivo.logicBlock_text();me._durante_sua_estadia.logicBlock_text();me._banheiro_menu.logicBlock_text();me._cozinha_menu.logicBlock_text();me._frigobar_menu.logicBlock_text();me._quarto_menu.logicBlock_text();me._quarto_menu.logicBlock_textcolor();me._garagem_menu.logicBlock_text();me._info_menu.logicBlock_text();me._tt_unmute.logicBlock_text();me._tt_mute.logicBlock_text();me._iniciar0.logicBlock_text();me._indicativo2.logicBlock_text();me._tt_enter_vr.logicBlock_text(); });
	player.addListener('varchanged_ENG', function(args) { me._bsico0.logicBlock_text();me._cabides.logicBlock_text();me._roupa_de_cama.logicBlock_text();me._cobertores_e_travesseiros_extras.logicBlock_text();me._varal_para_secar_roupas.logicBlock_text();me._local_para_guardar_as_roupas_closet.logicBlock_text();me._bsico.logicBlock_text();me._microondas.logicBlock_text();me._louas_e_talheres.logicBlock_text();me._frigobar0.logicBlock_text();me._fogo.logicBlock_text();me._chaleira_de_gua_quente.logicBlock_text();me._cmeras_de_segurana_na_propriedade.logicBlock_text();me._mquina_de_lavar.logicBlock_text();me._secadora.logicBlock_text();me._frigobar.logicBlock_text();me._detector_de_fumaa.logicBlock_text();me._alarme_de_monxido_de_carbono.logicBlock_text();me._aquecimento_central.logicBlock_text();me._conexo_ethernet.logicBlock_text();me._hdtv_com_tv_a_cabo_premium.logicBlock_text();me._wifi0.logicBlock_text();me._espao_de_trabalho_exclusivo1.logicBlock_text();me._tranca_na_porta_do_quarto.logicBlock_text();me._garagem_residencial_gratuita_na_propriedade.logicBlock_text();me._ventilador_de_teto.logicBlock_text();me._secador_de_cabelo.logicBlock_text();me._xampu.logicBlock_text();me._condicionador.logicBlock_text();me._sabonete_para_o_corpo.logicBlock_text();me._agua_quente.logicBlock_text();me._wifi.logicBlock_text();me._espao_de_trabalho_exclusivo0.logicBlock_text();me._banheiro_.logicBlock_text();me._quarto_e_lavanderiab.logicBlock_text();me._entretenimentob.logicBlock_text();me._climatizaob.logicBlock_text();me._privacidade_e_seguranab.logicBlock_text();me._internet_e_escritriob.logicBlock_text();me._cozinha_e_sala_de_jantarb.logicBlock_text();me._estacionamento_e_instalaesb.logicBlock_text();me._serviosb.logicBlock_text();me._no_inclusob.logicBlock_text();me._sobre_o_lugar0.logicBlock_text();me._espao_de_trabalho_exclusivo.logicBlock_text();me._durante_sua_estadia.logicBlock_text();me._banheiro_menu.logicBlock_text();me._cozinha_menu.logicBlock_text();me._frigobar_menu.logicBlock_text();me._quarto_menu.logicBlock_text();me._quarto_menu.logicBlock_textcolor();me._garagem_menu.logicBlock_text();me._info_menu.logicBlock_text();me._tt_unmute.logicBlock_text();me._tt_mute.logicBlock_text();me._iniciar0.logicBlock_text();me._indicativo2.logicBlock_text();me._tt_enter_vr.logicBlock_text(); });
	player.addListener('varchanged_ESP', function(args) { me._bsico0.logicBlock_text();me._cabides.logicBlock_text();me._roupa_de_cama.logicBlock_text();me._cobertores_e_travesseiros_extras.logicBlock_text();me._varal_para_secar_roupas.logicBlock_text();me._local_para_guardar_as_roupas_closet.logicBlock_text();me._bsico.logicBlock_text();me._microondas.logicBlock_text();me._louas_e_talheres.logicBlock_text();me._frigobar0.logicBlock_text();me._fogo.logicBlock_text();me._chaleira_de_gua_quente.logicBlock_text();me._cmeras_de_segurana_na_propriedade.logicBlock_text();me._mquina_de_lavar.logicBlock_text();me._secadora.logicBlock_text();me._frigobar.logicBlock_text();me._detector_de_fumaa.logicBlock_text();me._alarme_de_monxido_de_carbono.logicBlock_text();me._aquecimento_central.logicBlock_text();me._conexo_ethernet.logicBlock_text();me._hdtv_com_tv_a_cabo_premium.logicBlock_text();me._wifi0.logicBlock_text();me._espao_de_trabalho_exclusivo1.logicBlock_text();me._tranca_na_porta_do_quarto.logicBlock_text();me._garagem_residencial_gratuita_na_propriedade.logicBlock_text();me._ventilador_de_teto.logicBlock_text();me._secador_de_cabelo.logicBlock_text();me._xampu.logicBlock_text();me._condicionador.logicBlock_text();me._sabonete_para_o_corpo.logicBlock_text();me._agua_quente.logicBlock_text();me._wifi.logicBlock_text();me._espao_de_trabalho_exclusivo0.logicBlock_text();me._banheiro_.logicBlock_text();me._quarto_e_lavanderiab.logicBlock_text();me._entretenimentob.logicBlock_text();me._climatizaob.logicBlock_text();me._privacidade_e_seguranab.logicBlock_text();me._internet_e_escritriob.logicBlock_text();me._cozinha_e_sala_de_jantarb.logicBlock_text();me._estacionamento_e_instalaesb.logicBlock_text();me._serviosb.logicBlock_text();me._no_inclusob.logicBlock_text();me._sobre_o_lugar0.logicBlock_text();me._espao_de_trabalho_exclusivo.logicBlock_text();me._durante_sua_estadia.logicBlock_text();me._banheiro_menu.logicBlock_text();me._cozinha_menu.logicBlock_text();me._frigobar_menu.logicBlock_text();me._quarto_menu.logicBlock_text();me._quarto_menu.logicBlock_textcolor();me._garagem_menu.logicBlock_text();me._info_menu.logicBlock_text();me._tt_unmute.logicBlock_text();me._tt_mute.logicBlock_text();me._iniciar0.logicBlock_text();me._indicativo2.logicBlock_text();me._tt_enter_vr.logicBlock_text(); });
	player.addListener('changenode', function(args) { me.callChildLogicBlocksHotspot_ht_node_changenode(); });
	player.addListener('configloaded', function(args) { me.callChildLogicBlocksHotspot_ht_node_configloaded(); });
	player.addListener('mouseover', function(args) { me.callChildLogicBlocksHotspot_ht_node_mouseover(); });
	player.addListener('changenode', function(args) { me.callChildLogicBlocksHotspot_ht_node_active(); });
	player.addListener('changevisitednodes', function(args) { me.callChildLogicBlocksHotspot_ht_node_changevisitednodes(); });
	player.addListener('activehotspotchanged', function(args) { me.callChildLogicBlocksHotspot_ht_node_activehotspotchanged(); });
	player.addListener('varchanged_POR', function(args) { me.callChildLogicBlocksHotspot_ht_node_varchanged_POR(); });
	player.addListener('varchanged_ENG', function(args) { me.callChildLogicBlocksHotspot_ht_node_varchanged_ENG(); });
	player.addListener('varchanged_ESP', function(args) { me.callChildLogicBlocksHotspot_ht_node_varchanged_ESP(); });
	player.addListener('varchanged_opt_3d_preview', function(args) { me.callChildLogicBlocksHotspot_ht_node_varchanged_opt_3d_preview(); });
	player.addListener('hotspotsremoved', function(args) { me.removeSkinHotspots(); });
	me.skinTimerEvent();
};