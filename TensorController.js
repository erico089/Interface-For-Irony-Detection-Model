// import * as tf from '@tensorflow/tfjs';

// Namespace to control the model
var TENSOR = 
{

state: false,
model: null,

init: async function()
{
    // TODO
    if(!this.state)
    {
        // Load the model
        console.log("loading the model")
        tf.serialization.registerClass('kerasLayer');
        // tf.keras.models.load_model((path),custom_objects={'KerasLayer':hub.KerasLayer})
        // await tf.loadLayersModel('models/javascript/MODEL_JAVASCRIPT2/model.json');
        this.model = tf.keras.models.load_model(('models/javascript/MODEL_JAVASCRIPT2/my_model.h5'),custom_objects={'KerasLayer':hub.KerasLayer})
        console.log("model loaded")
    }
    else
        console.warn('Warning: TENSOR ALREADY initialized');
    
},

predict:function()
{
    //TODO
    if(this.state)
    {
        console.log("PREDICT");
    }
    else    
        console.error('Error:', 'Tensor no initialized, please init using TENSOR.init(); in your code');
}

}
TENSOR.init();