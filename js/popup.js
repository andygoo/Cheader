$(function() {
	$('#xForward').val(localStorage['xForward']);
	$('#referer').val(localStorage['referer']);
	
	var israndomip = localStorage['israndomip']=='true' ? true : false;
	$('#israndomip').prop('checked', israndomip);
	$('#xForward, #randomip').prop('disabled', israndomip);
	
	var targeturl = localStorage['targeturl']=='true' ? true : false;
	$('#targeturl').prop('checked', targeturl);
	$('#referer').prop('disabled', targeturl);
	
	var needAjax = localStorage['needAjax']=='true' ? true : false;
	$('#needAjax').prop('checked', needAjax);
	
	$('#randomip').click(function() {
		var randomip = rand_ip();
		$('#xForward').val(randomip);
		localStorage['xForward'] = randomip;
	});
	
	$('#israndomip').change(function() {
		var checked = $(this).prop('checked');
		$('#xForward, #randomip').prop('disabled', checked);
		localStorage['israndomip'] = checked;
	});
		
	$('#targeturl').change(function() {
		var checked = $(this).prop('checked');
		$('#referer').prop('disabled', checked);
		localStorage['targeturl'] = checked;
	});
	
	$('#needAjax').change(function() {
		var checked = $(this).prop('checked');
		localStorage['needAjax'] = checked;
	});
	
	$('#xForward').blur(function(){
		localStorage['xForward'] = $('#xForward').val();
	});
	
	$('#referer').blur(function() {
		localStorage['referer'] = $('#referer').val();
	});
});

function long2ip(ip) {
	if (!isFinite(ip)) return false;
	return [ip >>> 24, ip >>> 16 & 0xFF, ip >>> 8 & 0xFF, ip & 0xFF].join('.');
}

function mt_rand(min, max) {
	var argc = arguments.length;
	if (argc === 0) {
		min = 0;
		max = 2147483647;
	} else if (argc === 1) {
		throw new Error('Warning: mt_rand() expects exactly 2 parameters, 1 given');
	} else {
		min = parseInt(min, 10);
		max = parseInt(max, 10);
	}
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

function rand_ip() {
    var ip_long = [
		['607649792','608174079'], //36.56.0.0-36.63.255.255
        ['1038614528','1039007743'], //61.232.0.0-61.237.255.255
        ['1783627776','1784676351'], //106.80.0.0-106.95.255.255
        ['2035023872','2035154943'], //121.76.0.0-121.77.255.255
        ['2078801920','2079064063'], //123.232.0.0-123.235.255.255
        ['-1950089216','-1948778497'], //139.196.0.0-139.215.255.255
        ['-1425539072','-1425014785'], //171.8.0.0-171.15.255.255
        ['-1236271104','-1235419137'], //182.80.0.0-182.92.255.255
        ['-770113536','-768606209'], //210.25.0.0-210.47.255.255
        ['-569376768','-564133889']  //222.16.0.0-222.95.255.255
    ];
    var rand_key = mt_rand(0, 9);
    var ip = long2ip(mt_rand(ip_long[rand_key][0], ip_long[rand_key][1]));
    return ip;
}

function rand_ip2() {
	return Math.floor(Math.random()*225)+'.'+Math.floor(Math.random()*255)+'.'+Math.floor(Math.random()*255)+'.'+Math.floor(Math.random()*255);
}
