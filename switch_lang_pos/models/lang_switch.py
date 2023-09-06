# -*- coding: utf-8 -*-
from odoo import models, fields, api

class PosOrderExtended(models.Model):
    _inherit = 'pos.order'

    @api.model
    def switch_lang(self, id):
        if id:
            lang = self.env['res.lang'].browse(id)
            self.env.user.lang = lang.code
