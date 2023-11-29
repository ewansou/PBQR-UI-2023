/*GENERAL*/
export const API_BASE = "https://pbqr-backend-2023.herokuapp.com/api"
//export const API_BASE = "http://localhost:23168/api"
//export const API_BASE = "https://3a82-42-60-39-219.ngrok-free.app/api"
export const EVENT_NAME = "LauPaSat";
export const ENABLE_PROMO = true;
export const IS_4R = false;
export const PRIVACY_CLAUSE= `
<p>By making payment and utilising this photo booth service, you agree to the below</p>
<p>(1) You consent to the collection, use and sharing of your photos for marketing purposes. The companies 
(Instantly Singapore Pte Ltd and Kopitiam Investment Pte Ltd may use your photos in their marketing materials, 
including but not limited to social media, website, and print advertisements. Your photos will not be shared with 
third parties for marketing purposes.</p>
<p>(2) The email address you entered is for the purpose of sending you soft copies of your photos and you consent 
to the collection and use of your email address for marketing purposes. Your email address will not be shared with 
any third parties.</p>
<p>(3) In order to protect our equipment, a CCTV has been installed to monitor usage at the photo booth. You consent 
to having your usage footage recorded for this sole purpose. Your footage will not be shared with any third parties
or used for any other purposes.</p>
<p>(3) The company is not liable for any injury, damage, or loss that may occur during the photo booth session. Please 
use the photo booth with care and at your own risk.</p>
<p>(4) You consent to waive all rights to inspect or approve any photographs taken.</p>
<p>If you do not consent to any of the above clause, please DO NOT proceed to use this photo booth.</p>
`;

/*COLOR BLOCKS FOR AHK*/
export const PROMO_SUCCESS_COLOR = "#f3f18c";
export const TOP_OPTION_SUCCESS_COLOR = "#f8aaaa";
export const MIDDLE_OPTION_SUCCESS_COLOR = "#afffb6";
export const BOTTOM_OPTION_SUCCESS_COLOR = "#8ca1f3";

/*TOP OPTION*/
export const APP_TOP_OPTION_PAYMENT_IN_PROCESS_CLAUSE = "By making payment, you agree to the terms and " +
    "conditions of using this photo booth service (displayed in the previous screen)."
export const APP_TOP_OPTION_PAYMENT_AMOUNT = "1000"
export const APP_TOP_OPTION_PAYMENT_SUCCESS_URL = "/paymentsuccessgif2"
export const APP_TOP_OPTION_4R_PRINT_COUNT = "1"
export const APP_TOP_OPTION_BOOKMARK_PRINT_COUNT = "2"
export const TOP_OPTION_URL = "/gif2prints"
export const TOP_OPTION_AMOUNT = "$10"
export const TOP_OPTION_HEADERTEXT = ""
export const TOP_OPTION_DESCRIPTION = ""

/*MIDDLE OPTION*/
export const APP_MIDDLE_OPTION_PAYMENT_IN_PROCESS_CLAUSE = "By making payment, you agree to the terms and " +
    "conditions of using this photo booth service (displayed in the previous screen)."
export const APP_MIDDLE_OPTION_PAYMENT_AMOUNT = "1200"
export const APP_MIDDLE_OPTION_PAYMENT_SUCCESS_URL = "/paymentsuccessgif4"
export const APP_MIDDLE_OPTION_4R_PRINT_COUNT = "2"
export const APP_MIDDLE_OPTION_PRINT_COUNT = "4"
export const MIDDLE_OPTION_URL = "/gif4prints"
export const MIDDLE_OPTION_AMOUNT = "$12"
export const MIDDLE_OPTION_HEADERTEXT = ""
export const MIDDLE_OPTION_DESCRIPTION = ""

/*BOTTOM OPTION*/
export const APP_BOTTOM_OPTION_PAYMENT_IN_PROCESS_CLAUSE = "By making payment, you agree to the terms and " +
    "conditions of using this photo booth service (displayed in the previous screen)."
export const APP_BOTTOM_OPTION_PAYMENT_AMOUNT = "1400"
export const APP_BOTTOM_OPTION_PAYMENT_SUCCESS_URL = "/paymentsuccessgif6"
export const APP_BOTTOM_OPTION_4R_PRINT_COUNT = "3"
export const APP_BOTTOM_OPTION_PRINT_COUNT = "6"
export const BOTTOM_OPTION_URL = "/gif6prints"
export const BOTTOM_OPTION_AMOUNT = "$14"
export const BOTTOM_OPTION_HEADERTEXT = ""
export const BOTTOM_OPTION_DESCRIPTION = ""