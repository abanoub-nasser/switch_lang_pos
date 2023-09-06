# -*- coding: utf-8 -*-

{
    'name': 'POS Language Switcher Menu',
    'version': '16.0.1.0.0',
    'category': 'Point of Sale',
    'summary': 'Switch Languages in POS',
    'author': 'Abanoub Nasser Murice Ramzy',
    'depends': ['point_of_sale', 'base'],
    'assets': {
        'point_of_sale.assets': [
            'lang_switch_pos/static/src/css/custom.css',
            'lang_switch_pos/static/src/js/lang_widget.js',
            'lang_switch_pos/static/src/js/LangMenuItem.js',
            'lang_switch_pos/static/src/js/PosMenu.js',
            'lang_switch_pos/static/src/xml/chrome.xml',
            'lang_switch_pos/static/src/xml/pos.xml',
            'lang_switch_pos/static/src/xml/PosMenu.xml',
            'lang_switch_pos/static/src/xml/LangMenuItem.xml',
        ],
    },
    'license': 'LGPL-3',
    'installable': True,
    'application': False,
    'auto_install': False,
}
