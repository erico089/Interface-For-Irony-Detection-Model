from flask import Flask, request, jsonify
import tensorflow as tf
import numpy as np

app = Flask(__name__)

@app.route('/mi_ruta', methods=['POST'])
def getSentence():

    sentence = request.json['sentence_']
    
    resultado = predict(sentence)
    
    return jsonify(resultado=resultado)

def predict(sentece):
    model = tf.keras.models.load_model('./Models/model..')

    input_tensor = tf.convert_to_tensor([sentece], dtype=tf.float32)

    output_tensor = model.predict(input_tensor)

    predicted_value = output_tensor[0]

    return predicted_value

if __name__ == '__main__':
    app.run()
