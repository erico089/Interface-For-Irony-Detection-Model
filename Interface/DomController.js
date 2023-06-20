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
                    request(this.ironic_input.value.trim())
                    break;
                case "keydown":
                if(event.code == "Enter")
                    request(this.ironic_input.value.trim())
                break;
            }
        }
        else
        {
            console.warn("INPUT IS EMPTY")
        }
        
    },

    request: function(sentence) {
        fetch('/', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              sentence_: sentence
            })
          })
          .then(response => response.json())
          .then(data => {
            var resultado = data.resultado;
            if (int(resultado) => 0.5)
            output_label.textContent = "Frase ironica en un "+str(int(resultado)*100)+"%"
            else
            output_label.textContent = "Frase no ironica en un "+str(int(resultado)*100)+"%"
          })
          .catch(error => {
            
            console.error('Error:', error);
          });
    }
};

CONTROLLER.init();