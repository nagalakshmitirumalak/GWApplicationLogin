import { GetURL } from "./GetURL";
import { Input } from "./Input";

class Guidewire_Application{

    userNavigate(input: Input){

        switch(input){
            case Input.PC: GetURL.getPolicyCenter();
            break;
            case Input.BC: GetURL.getBillingCenter();
            break;
            case Input.CC: GetURL.getClaimCenter();
            break;
            case Input.CM: GetURL.getContactManager();
            break;
        }
    }

}

let userchoice = new Guidewire_Application();
userchoice.userNavigate(Input.BC);