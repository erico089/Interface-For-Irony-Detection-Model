var CONTROLLER = 
{

    ironic_input: document.getElementById("INPUT_LABEL"),
    ironic_button: document.getElementById("INPUT_BTTN"),
    
    output_label: document.getElementById("OUTPUT_LABEL"),

    init: function() {

        this.ironic_button.addEventListener("click", CONTROLLER.predict.bind(this));
        this.ironic_input.addEventListener("keydown", CONTROLLER.predict.bind(this));
    },

    predict: function(event) {
        if(this.ironic_input.value.trim().length > 0)
        {
            switch (event.type) 
            {
                case "click":
                    TENSOR.predict(this.ironic_input.value.trim())
                    break;
                case "keydown":
                if(event.code == "Enter")
                    TENSOR.predict(this.ironic_input.value.trim())
                break;
            }
        }
        else
        {
            console.warn("INPUT IS EMPTY")
        }
        
    }
};

CONTROLLER.init();