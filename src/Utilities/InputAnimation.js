

const InputAnimation = (elems) => {
  
    if (elems?.length) {

        elems.forEach(elem => {
            elem.addEventListener('focus', function () {
                const placeText  = this.getAttribute('data-text');
                this.placeholder = placeText;
                this.placeholder = "";
            });

            elem.addEventListener('blur', function () {
                const placeText = this.getAttribute('data-text');
                this.placeholder= placeText;
            });
        })
    }
}


export default InputAnimation