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
$('.form__section--vat-information p').html("Les résidents de l'UE, en dehors de la France, peuvent indiquer leur numéro de TVA pour être exonérés de la taxe. Veuillez saisir votre numéro de TVA sans le code pays");

// CREDIT / DEBIT
$('#subscription_payment_profile_attributes_payment_method_credit_card').closest('label')
  // get all child nodes including text and comment
  .contents()
  // iterate and filter out elements
  .filter(function() {
    // check node is text and non-empty
    return this.nodeType === 3 && this.textContent.trim().length;
    // replace it with new text
  }).replaceWith(' Carte de crédit ');

$('#subscription_payment_profile_attributes_payment_method_direct_debit').closest('label')
  // get all child nodes including text and comment
  .contents()
  // iterate and filter out elements
  .filter(function() {
    // check node is text and non-empty
    return this.nodeType === 3 && this.textContent.trim().length;
    // replace it with new text
  }).replaceWith(' Prélèvement automatique ');

// DIRECT DEBIT PAYMENT INFORMATION
$('label[for="subscription_payment_profile_attributes_bank_name"]').html("Nom de la banque *"); 
$('label[for="subscription_payment_profile_attributes_bank_branch_code"]').text("Code de tri *"); 
$('label[for="subscription_payment_profile_attributes_bank_account_number"]').html("Numéro de compte *"); 

$('label[for="subscription_payment_profile_attributes_bank_account_holder_type"]').html("Est-ce un compte professionnel ou un compte personnel ?"); 
$('label[for="subscription_payment_profile_attributes_bank_account_holder_type_personal"]').html("Compte personnel "); 
$('label[for="subscription_payment_profile_attributes_bank_account_holder_type_business"]').html("Compte professionnel "); 
$('.show-local-details-text').html("ou entrez les détails locaux");
$('.show-iban-text').html("ou entrez IBAN");


// CUSTOMER INFORMATION
// Mistake in Maxio code - There are two h3's nested in this element: "Payment Method" & "Customer Information". Unsure if the first one (Payment Method) is always used so solution is to set all H3's to Payment Method translation and then select the last H3 (which will be Customer Information either way) and make it the Customer Information translation
$('.form__section--customer-information h3').html("Mode de paiement");
$('.form__section--customer-information h3:last-of-type').html("Information du client");

$('label[for="subscription_customer_attributes_first_name"]').html("Prénom *"); 
$('label[for="subscription_customer_attributes_last_name"]').html("Nom *"); 
$('label[for="subscription_customer_attributes_email"]').html("Adresse email *"); 
$('label[for="subscription_customer_attributes_phone"]').html("Téléphone"); 
$('label[for="subscription_customer_attributes_organization"]').html("Société");

$('label[for="subscription_customer_attributes_address"]').html("Adresse 1 *"); 
$('label[for="subscription_customer_attributes_address_2"]').html("Adresse 2"); 
$('label[for="subscription_customer_attributes_city"]').html("Ville *"); 
$('label[for="subscription_customer_attributes_country"]').html("Pays *"); 

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

// SHIPPING INFORMATION
$('.form__section--shipping-information h3').html("Informations sur l'expédition");

// BILLING ADDRESS
$('.form__section--billing-address h3').html("Adresse de facturation");
$('.form__section--billing-address header label:first').contents().last().replaceWith("Utiliser l'adresse de livraison");
$('.form__section--billing-address header label:last').contents().last().replaceWith("Utiliser une autre adresse de facturation");

$('label[for="subscription_payment_profile_attributes_billing_address"]').html("Adresse de facturation 1 *");
$('label[for="subscription_payment_profile_attributes_billing_address_2"]').html("Adresse de facturation 2");
$('label[for="subscription_payment_profile_attributes_billing_city"]').html("Ville *");
$('label[for="subscription_payment_profile_attributes_billing_country"]').html("Pays *");
// $('#subscription_payment_profile_attributes_billing_country').find('option').html("Pays");
$('label[for="subscription_payment_profile_attributes_billing_state"]').html("Département *");
$('#subscription_payment_profile_attributes_billing_state').find('option').html("Département");
$('label[for="subscription_payment_profile_attributes_billing_zip"]').html("Code Postal");

// ADDITIONAL INFORMATION
$('.form__section--additional-information h3').html("Informations supplémentaires");

// TERMS
$('.form__section--terms-submit label').contents().slice(3).remove();
$('.form__section--terms-submit label').append(`J'accepte les <a href="" target="_blank">termes et conditions</a>`);

// SUBMIT
$('#subscription_submit').html("Placer ma commande");

// PLAN SUMMARY
$('.content__secondary .content__heading h2').html("Résumé du plan");

// CAPTCHA
// function changeCaptchaText(newText) {
//   const recaptchaLabel = document.getElementById('recaptcha-anchor-label');
//   console.log(recaptchaLabel);
//   const childNodes = recaptchaLabel.childNodes;
//   childNodes[1].textContent = newText;
// }

// setTimeout(() => {
//   changeCaptchaText('Je ne suis pas un robot');
// }, 1000);


// FOOTER
function changeFooterText(newText, newInfoText, newPrivacyText) {
  const footerLink = document.querySelector('.footer__operated-by-link');
  const childNodes = footerLink.childNodes;

  childNodes[0].textContent = newText;
  childNodes[1].textContent = newInfoText;
  childNodes[3].textContent = newPrivacyText;
}

const footerTranslation = "Cette page est hébergée par Chargify au nom de B2E Limited, ";

const footerInfoTranslation = "Voir plus d'informations.";

const footerPrivacyTranslation = "Politique de confidentialité";

changeFooterText(footerTranslation, footerInfoTranslation, footerPrivacyTranslation);