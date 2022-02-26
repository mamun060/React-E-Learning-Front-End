import React, { useEffect , useState} from 'react';

const InputValidation = ({inputElem, isValidState}) => {

    const [isInValid, setIsInValid] = useState(true);
    const [errorMsg, setErrorMsg] = useState('');
    

    useEffect(()=>{

        if(inputElem){
            
            const val  = inputElem.value;
            const type = inputElem.type;
            const status = checkValidation(inputElem, type, val);
    
            setIsInValid(status);
            isValidState(status);
        }

    });


    const checkValidation = (input, type="text", val) => {
        let 
        msg   = null,
        valid = false;

        switch (type) {
            case 'email':
                valid = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val)
                msg   = "Invalid Email!";
                break;

            case 'password':
                valid = val.trim() === "" || val.trim().length < 8 ? false : true;
                break;

            case 'number':
                valid = val.trim() === "" || !/^(?:\+?88|0088)?01[15-9]\d{8}$/.test(val) ? false : true;
                break;

            case 'text':
                if(/number/i.test(input.getAttribute('data-type'))){
                    valid = val && /(\d{4})+$/im.test(val);
                    msg   = "Invalid OTP!";
                }else{
                    valid = /^[A-Za-z\'\s\.\:\-]+$/.test(val);
                    msg   = "This Field is Required!";
                }
                break;
        
            default:
                valid = /^[A-Za-z\'\s\.\:\-]+$/.test(val);
                break;
        }

        setErrorMsg(msg)

        return valid;
    }

    return (
        <>
            {
             !isInValid ? (
             <span className='text-danger font-weight-bold'>{ errorMsg ?? 'This field is Invalid!'}</span>
             ):null
            }
        </>
    );
};

export default InputValidation;