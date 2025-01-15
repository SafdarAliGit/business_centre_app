// Copyright (c) 2025, Safdar Ali and contributors
// For license information, please see license.txt

frappe.ui.form.on('Rental Contract', {
    rental_amount: function (frm) {
        calculate_contract_amount(frm);
        calculate_net_amount(frm);
    },
    special_discount: function (frm) {
        calculate_contract_amount(frm);
        calculate_net_amount(frm);
    },
    vat_: function (frm) {
        calculate_net_amount(frm);
    }
});

function calculate_contract_amount(frm) {
    let contract_amount = 0;
    let rental_amount = frm.doc.rental_amount || 0;
    let special_discount = frm.doc.special_discount || 0;
    contract_amount = rental_amount - special_discount;
    frm.set_value("contract_amount", contract_amount);
}

function calculate_net_amount(frm) {
    let contract_amount = frm.doc.contract_amount || 0;
    let rental_amount = frm.doc.rental_amount || 0;
    let vat_ = frm.doc.vat_ || 0;
    let vat_amount = 0; // Declare once outside the block
    let net_amount = 0;

    if (vat_ > 0) {
        vat_amount = (vat_ / 100) * rental_amount; // Calculate VAT amount
        frm.set_value("vat_amount", vat_amount);
    }

    // Calculate net amount regardless of VAT
    net_amount = vat_amount + contract_amount;
    frm.set_value("net_amount", net_amount);
}
