odoo.define('lang_switch_pos.PosMenu', function(require) {
	'use strict';
	const PosComponent = require('point_of_sale.PosComponent');
	const Registries = require('point_of_sale.Registries');
	const { Gui } = require('point_of_sale.Gui');

	class PosMenu extends PosComponent {

		setup() {
			super.setup();
		}

		onClick() {
			Gui.showPopup('LangWidget');
			this.trigger('toggle-posMenu');
		}
	}
	PosMenu.template = 'PosMenu';
	Registries.Component.add(PosMenu);
	return PosMenu;
});