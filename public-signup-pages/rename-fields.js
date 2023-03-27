// CONFIGURE YOUR PLAN
$('.form__section--configure-plan h3').html("Configurez votre plan");
$('#form__section-apply-components').html("Actualiser les totaux");
$('#form__section-apply-components').data("loading-text", "<i class='fa fa-refresh fa-spin fa-fw'></i> Actualisation...");
$('#form__section-apply-components').data("button-text", "Actualiser les totaux");

// COUPON CODE
$('.form__section--coupon h3').html("Code promo");
$('#coupon_button').html("Appliquer promo");
$('#coupon_button').data("loading-text", "<i class='fa fa-refresh fa-spin fa-fw'></i> Appliquant...");
$('#coupon_button').data("button-text", "Appliquer promo");

// VAT INFORMATION
$('.form__section--vat-information h3').html("Informations sur la TVA");
$('#vat_button').html("Valider la TVA");
$('#vat_button').data("loading-text", "<i class='fa fa-refresh fa-spin fa-fw'></i> Validation...");
$('#vat_button').data("button-text", "Valider la TVA");

// CUSTOMER INFORMATION
$('.form__section--customer-information h3').html("Information du client");
$('label[for="subscription_customer_attributes_first_name"]').html("Prénom *"); 
$('label[for="subscription_customer_attributes_last_name"]').html("Nom *"); 
$('label[for="subscription_customer_attributes_email"]').html("Adresse email *"); 
$('label[for="subscription_customer_attributes_phone"]').html("Téléphone"); 
$('label[for="subscription_customer_attributes_organization"]').html("Société");

$('label[for="subscription_customer_attributes_address"]').html("Adresse 1 *"); 
$('label[for="subscription_customer_attributes_address_2"]').html("Adresse 2"); 
$('label[for="subscription_customer_attributes_city"]').html("Ville *"); 
$('label[for="subscription_customer_attributes_country"]').html("Pays *"); 
$('#subscription_customer_attributes_country').find('option').html("Pays"); 
$('label[for="subscription_customer_attributes_state"]').html("Département *"); 
$('#subscription_customer_attributes_state').find('option').html("Département"); 
$('label[for="subscription_customer_attributes_zip"]').html("Code postal"); 

// BILLING INFORMATION
$('.form__section--billing-information h3').html("Informations de facturation");
$('.form__section--billing-information p:first').html("Toutes les transactions sont sécurisées et cryptées.");
$('.form__section--credit-card .form__header-section--title').html('Carte de crédit');

$('label[for="subscription_payment_profile_attributes_first_name"]').html("Prénom sur le compte *");
$('label[for="subscription_payment_profile_attributes_last_name"]').html("Nom sur le compte *");
$('label[for="subscription_payment_profile_attributes_full_number"]').html("Numéro de la carte *");
$('label[for="subscription_payment_profile_attributes_cvv"]').html("CVV");
$('label[for="subscription_payment_profile_attributes_expiration_month"]').html("Mois d'expiration *");
$('label[for="subscription_payment_profile_attributes_expiration_year"]').html("Année d'expiration *");

// BILLING ADDRESS
$('.form__section--billing-address h3').html("Adresse de facturation");
$('.form__section--billing-address header label:first').contents().last().replaceWith("Utiliser l'adresse de livraison");
$('.form__section--billing-address header label:last').contents().last().replaceWith("Utiliser une autre adresse de facturation");

$('label[for="subscription_payment_profile_attributes_billing_address"]').html("BILLING ADDRESS 1 *");
$('label[for="subscription_payment_profile_attributes_billing_address_2"]').html("BILLING ADDRESS 2");
$('label[for="subscription_payment_profile_attributes_billing_city"]').html("CITY *");
$('label[for="subscription_payment_profile_attributes_billing_country"]').html("COUNTRY *");
$('#subscription_payment_profile_attributes_billing_country').find('option').html("COUNTRY");
$('label[for="subscription_payment_profile_attributes_billing_state"]').html("STATE *");
$('#subscription_payment_profile_attributes_billing_state').find('option').html("STATE");
$('label[for="subscription_payment_profile_attributes_billing_zip"]').html("ZIP CODE");

// ADDITIONAL INFORMATION
$('.form__section--additional-information h3').html("ADDITIONAL INFORMATION");

// TERMS
$('.form__section--terms-submit label').contents().slice(3).remove();
$('.form__section--terms-submit label').append('I ACCEPT THE <a href="" target="_blank">TERMS AND CONDITIONS</a>');

// SUBMIT
$('#subscription_submit').html("PLACE MY ORDER");

// PLAN SUMMARY
$('.content__secondary .content__heading h2').html("PLAN SUMMARY");