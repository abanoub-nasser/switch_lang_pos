odoo.define('switch_lang_pos.multi_uom_widget', function (require) {
    "use strict";
    const PosComponent = require('point_of_sale.PosComponent');
    const Registries = require('point_of_sale.Registries');

    const { useState } = owl;

    class LangWidget extends PosComponent {


        setup() {
            super.setup();
            this.lang_list = [];
            this.PosMenuState = useState({ show: true });

        }
        get isPosMenuShown() {
				return this.PosMenuState.show;
			}

        get getPosLangs() {
                return this.env.pos.langs;
            }

    }

    LangWidget.template = 'LangWidget';
    Registries.Component.add(LangWidget);
    return LangWidget;
});

