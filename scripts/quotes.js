
	var easeInTypeArr = ['fadeInDown', ];
// var easeOutTypeArr = ['rollOut', 'fadeOut', 'fadeOutUp', 'fadeOutDown', 'fadeOutLeft', 'fadeOutRight', 'bounceOut', 'bounceOutDown', 'bounceOutUp', 'bounceOutLeft', 'bounceOutRight', 'rotateOutDownLeft', 'rotateOutDownRight', 'rotateOutUpLeft', 'rotateOutUpRight', 'fadeOutLeftBig', 'fadeOutRightBig', 'fadeOutUpBig', 'fadeOutDownBig', 'flipOutX', 'flipOutY', 'lightSpeedOut'];
(function (_0x30b5x3) {
    _0x30b5x3['fn']['quoteRotator'] = function (_0x30b5x4) {
        var _0x30b5x5 = {
            container: '.word-container',
            easeIn: 'fadeInLeft',
            // easeOut: 'fadeOutLeft',
            easeInTypeArr: ['fadeInDown', ],
            // easeOutTypeArr: ['fadeOutLeft', 'fadeOutRight', 'fadeOutUp', 'fadeOutDown', 'rollOut', 'bounceOut', 'lightSpeedOut'],
            slideshow: true,
            slideshowDelay: 3000,
            hoverToPause: false,
            clickToNext: true
        };
        if (_0x30b5x4) {
            _0x30b5x3['extend'](_0x30b5x5, _0x30b5x4);
        };
        var _0x30b5x6 = this;
        var _0x30b5x7 = [];
        var _0x30b5x8 = [];
        var _0x30b5x9 = [];
        var _0x30b5xa = [];
        _0x30b5x3(_0x30b5x5['container'], _0x30b5x6)['find']('li')['each'](function (_0x30b5xb) {
            _0x30b5x7[_0x30b5xb] = _0x30b5x3(this)['text']();
            _0x30b5x8[_0x30b5xb] = _0x30b5x3(this)['data']('author');
            _0x30b5x9[_0x30b5xb] = _0x30b5x3(this)['data']('easein');
            // _0x30b5xa[_0x30b5xb] = _0x30b5x3(this)['data']('easeout');
        });
        var _0x30b5xc = _0x30b5x3('.quote', _0x30b5x6);
        var _0x30b5xd = _0x30b5x3('.quote-content', _0x30b5x6);
        var _0x30b5xe = _0x30b5x3('.quote-author', _0x30b5x6);
        var _0x30b5xf = 0;
        _0x30b5x6['data']('_currentIndex', _0x30b5xf);
        var _0x30b5x10 = _0x30b5x5['easeInTypeArr'] || easeInTypeArr;
        // var _0x30b5x11 = _0x30b5x5['easeOutTypeArr'] || easeOutTypeArr;
        var _0x30b5x12 = _0x30b5x10['length'];
        // var _0x30b5x13 = _0x30b5x11['length'];
        if (_0x30b5x5['clickToNext']) {
            _0x30b5x6['on']('click', _0x30b5x16);
        };
        if (_0x30b5x5['hoverToPause']) {
            if (_0x30b5x5['slideshow']) {
                _0x30b5x6['on']('mouseover', function (_0x30b5xb) {
                    clearTimeout(_0x30b5x6['data']('_timerID'));
                })['on']('mouseleave', function (_0x30b5xb) {
                    clearTimeout(_0x30b5x14);
                    _0x30b5x14 = setTimeout(function () {
                        _0x30b5x16(null);
                    }, _0x30b5x5['slideshowDelay']);
                    _0x30b5x6['data']('_timerID', _0x30b5x14);
                });
            };
        };
        var _0x30b5x14 = 0;
        var _0x30b5x15 = 0;

        function _0x30b5x16(_0x30b5x17) {
            clearTimeout(_0x30b5x6['data']('_timerID'));
            var _0x30b5x18 = _0x30b5x7[_0x30b5xf]['split'](' ')['length'];
            var _0x30b5xb = _0x30b5xa[_0x30b5xf] || _0x30b5x5['easeOut'];
            _0x30b5xd['find']('span')['each'](function (_0x30b5x19) {
                if (_0x30b5xa[_0x30b5xf]) {
                    _0x30b5x3(this)['removeClass']()['addClass']('quick animate' + Math['floor'](Math['random']() * _0x30b5x13 / 2) + ' ' + _0x30b5xb);
                } else {
                    // var _0x30b5x1a = _0x30b5x11[Math['floor'](Math['random']() * _0x30b5x13)];
                    // _0x30b5x3(this)['removeClass']()['addClass']('quick animate' + Math['floor'](Math['random']() * _0x30b5x13 / 2) + ' ' + _0x30b5x1a);
                };
            });
            _0x30b5xe['find']('span')['each'](function (_0x30b5x19) {
                if (_0x30b5xa[_0x30b5xf]) {
                    // _0x30b5x3(this)['removeClass']()['addClass']('quick animate' + Math['floor'](Math['random']() * _0x30b5x13 / 2) + ' ' + _0x30b5xb);
                } else {
                    // var _0x30b5x1a = _0x30b5x11[Math['floor'](Math['random']() * _0x30b5x13)];
                    // _0x30b5x3(this)['removeClass']()['addClass']('quick animate' + Math['floor'](Math['random']() * _0x30b5x13 / 2) + ' ' + _0x30b5x1a);
                };
            });
            clearTimeout(_0x30b5x15);
            _0x30b5x15 = setTimeout(function () {
                _0x30b5xf++;
                if (_0x30b5xf > _0x30b5x7['length'] - 1) {
                    _0x30b5xf = 0;
                };
                _0x30b5x6['data']('_currentIndex', _0x30b5xf);
                _0x30b5x1d();
            }, _0x30b5x18 * 0.5 * 100);
        };
        _0x30b5x1d();
        var _0x30b5x1b = [];
        var _0x30b5x1c = [];

        function _0x30b5x1d() {
            _0x30b5xd['empty']();
            _0x30b5xe['empty']();
            var _0x30b5x17 = _0x30b5x7[_0x30b5xf]['split'](' ')['length'];
            var _0x30b5x18 = _0x30b5x9[_0x30b5xf] || _0x30b5x5['easeIn'];
            var _0x30b5xb = 0;
            _0x30b5x3['each'](_0x30b5x7[_0x30b5xf]['split'](' '), function (_0x30b5x19, _0x30b5x1a) {
                if (_0x30b5x9[_0x30b5xf]) {
                    _0x30b5xd['append']('<span class="animate' + _0x30b5x19 + ' ' + _0x30b5x18 + '" data-easein="' + _0x30b5x18 + '">' + _0x30b5x1a + '</span> ');
                } else {
                    var _0x30b5x1e = _0x30b5x10[Math['floor'](Math['random']() * _0x30b5x12)];
                    _0x30b5xd['append']('<span class="animate' + _0x30b5x19 + ' ' + _0x30b5x1e + '" data-easein="' + _0x30b5x1e + '">' + _0x30b5x1a + '</span> ');
                };
            });
            _0x30b5x3['each'](_0x30b5x8[_0x30b5xf]['split'](' '), function (_0x30b5x19, _0x30b5x1a) {
                _0x30b5xb++;
                if (_0x30b5x9[_0x30b5xf]) {
                    _0x30b5xe['append']('<span class="animate' + (_0x30b5x17 + _0x30b5x19) + ' ' + _0x30b5x18 + '" data-easein="' + _0x30b5x18 + '">' + _0x30b5x1a + '</span> ');
                } else {
                    var _0x30b5x1e = _0x30b5x10[Math['floor'](Math['random']() * _0x30b5x12)];
                    _0x30b5xe['append']('<span class="animate' + (_0x30b5x17 + _0x30b5x19) + ' ' + _0x30b5x1e + '" data-easein="' + _0x30b5x1e + '">' + _0x30b5x1a + '</span> ');
                };
            });
            if (_0x30b5x5['slideshow']) {
                clearTimeout(_0x30b5x14);
                _0x30b5x14 = setTimeout(function () {
                    _0x30b5x16(null);
                }, (_0x30b5x17 + _0x30b5xb + 1) * 200 + _0x30b5x5['slideshowDelay']);
                _0x30b5x6['data']('_timerID', _0x30b5x14);
            };
        };
        return this;
    };
})(jQuery);