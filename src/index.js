import scroll from "./modules/scroll.js";
import servicesModal from "./modules/servicesModal.js";
import modalRequest from "./modules/modalRequest.js";
import timer from "./modules/timer.js";
import validateForm from "./modules/validateForm.js";
import sendForm from "./modules/sendForm.js";
import calculator from "./modules/calculator.js";
import {benefitsSplide,serviceSplide} from "./modules/sliderSplade.js"
import certificates from "./modules/certificates.js";
scroll();
servicesModal();
modalRequest();
timer("31 may 2024");
validateForm();
sendForm();
calculator();

benefitsSplide();
serviceSplide();
certificates()
