odoo.define('lang_switch_pos.LangmenuItem', function(require) {
	'use strict';
    const PosComponent = require('point_of_sale.PosComponent');
	const Registries = require('point_of_sale.Registries');
    var rpc = require('web.rpc');
    class LangmenuItem extends PosComponent {
		onClick() {
			rpc.query({
                model: 'pos.order',
                method: 'switch_lang',
                args: [this.props.langId],
            }).then(val => {
                this.env.services.reloadPage();
            })
        }
    }
    LangmenuItem.template = 'lang_switch_pos.LangMenuItem';
    Registries.Component.add(LangmenuItem);
    return LangmenuItem;


});