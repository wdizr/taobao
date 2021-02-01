        $(function () {
            var isShow = 0;
            var ua = navigator.userAgent.toLowerCase();
            if (ua.match(/iphone/i) == "iphone" || ua.match(/ipad/i) == "ipad") {
                var iphoneInfo = ua.match(/iphone os (\d{1,})/i);
                var iosVersion = iphoneInfo[1];
                if (iosVersion >= 10 || ua.match(/ipad/i) == 'ipad') {
                    $('.itemCopy').show();
                }
            } else {
                $('.itemCopy').show();
            }

            //设置弹框全屏宽高
            $('.popUp').width($(window).width())
            $('.popUp').height($(window).height());
            $('.popRightClose').click(function(){
                $('.popUp').hide()
            })
            //点击复制淘口令
            $('.popFooter').click(function(){
                var clipboard = new Clipboard('.popFooter');

                clipboard.on('success', function (e) {

                    console.info('Action:', e.action);
                    console.info('Text:', e.text);
                    console.info('Trigger:', e.trigger);
                    $('.tips').show(function(){
                        $('.tips').html('复制成功，前往淘宝领取红包吧！');
                        setTimeout(function(){
                            $('.tips').hide().html('')
                        },2000)
                    })
                    // e.clearSelection();
                });
                clipboard.on('error', function (e) {
                    $('.tips').show(function () {
                        $('.tips').html('复制失败，重新复制');
                        setTimeout(function () {
                            $('.tips').hide().html('')
                        }, 2000)
                    })
                });
            })
            //点击复制淘口令
            $('.fuzhi').click(function(){
                var clipboard = new Clipboard('.fuzhi');

                clipboard.on('success', function (e) {

                    console.info('Action:', e.action);
                    console.info('Text:', e.text);
                    console.info('Trigger:', e.trigger);
                    $('.tips_1').show(function(){
                        $('.tips_1').html('复制成功，前往淘宝领取红包吧！');
                        setTimeout(function(){
                            $('.tips_1').hide().html('')
                        },2000)
                    })
                    // e.clearSelection();
                });
                clipboard.on('error', function (e) {
                    $('.tips_1').show(function () {
                        $('.tips_1').html('复制失败，重新复制');
                        setTimeout(function () {
                            $('.tips_1').hide().html('')
                        }, 2000)
                    })
                });
            })
        });