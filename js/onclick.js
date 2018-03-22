 var $plus = $('.plus'),//加
        $reduce = $('.reduce'),//减
        $all_sum = $('.show_num');
    $plus.click(function () {

        var $spanText = $(this).prev('input'),
            $count = parseInt($spanText.val())+1,
            $obj = $(this).parents('.o_r_num').find('.reduce'),
            $priceTotalObj = $(this).parents('.order_lists').find('.sum_price'),
            $price = $(this).parents('.order_lists').find('.o_r_price').html(),  //单价
            $priceTotal = $count*parseInt($price.substring(1));
        	$spanText.val($count);
        	$priceTotalObj.html('￥'+$priceTotal);
	        // if($spanText.text()>1 && $obj.hasClass('reSty')){
	        //     $obj.removeClass('reSty');
	        // }
	        if($spanText.val()>9){
        		$spanText.val(10);
        		$priceTotalObj.html('￥'+10*parseInt($price.substring(1)));
        	}
        // totalMoney();
    });
    $reduce.click(function () {

        var $spanText = $(this).next('input'),
            $count = parseInt($spanText.val())-1,
            $priceTotalObj = $(this).parents('.order_lists').find('.sum_price'),
            $price = $(this).parents('.order_lists').find('.o_r_price').html(),  //单价
            $priceTotal = $count*parseInt($price.substring(1));
       	 	$spanText.val($count);
        	$priceTotalObj.html('￥'+$priceTotal);
	        if($spanText.val()>1){
	            $spanText.val($count);
	            $priceTotalObj.html('￥'+$priceTotal);
	        }
	        // if($spanText.text()==1 && !$(this).hasClass('reSty')){
	        //     $(this).addClass('reSty');
	        // }
	        // if($spanText.text()<1){
	        // 	 $(this).addClass('disabled');
	        // }
        // totalMoney();
        	if($spanText.val()<1){
        		$spanText.val(1);
        		$priceTotalObj.html($price);
        	}
    });