(function(){var n,r;n=["angular","core/module"],r=function(n){var r;return r=function($translate){return function(n){switch(n){case"INIT":return $translate.instant("options.order_history.status_name.init");case"WAIT_BUYER_PAY":return $translate.instant("options.order_history.status_name.wait_buyer_pay");case"WAIT_SELLER_SEND_GOODS":return $translate.instant("options.order_history.status_name.wait_seller_send_goods");case"WAIT_BUYER_CONFIRM_GOODS":return $translate.instant("options.order_history.status_name.wait_buyer_confirm_goods");case"TRADE_FINISHED":return $translate.instant("options.order_history.status_name.trade_finished");case"TRADE_CLOSED":return $translate.instant("options.order_history.status_name.trade_closed");default:return""+$translate.instant("options.order_history.status_name.unknown")+"_"+n}}},n.module("core").filter("renderTradeStatus",r)},define(n,r)}).call(this);