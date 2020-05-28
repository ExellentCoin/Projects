class NeuralNetwork {
    constructor(i, h, o) {
        this.input_nodes = i;
        this.hidden_nodes = h;
        this.output_nodes = o;
        this.createModel();
    }

    createModel() {
        //Initialize model
        this.model = tf.sequential();
        //Add first input layer and hidden layer
        this.model.add(
            tf.layers.dense({
                units: this.hidden_nodes,
                inputShape: [this.input_nodes],
                activation: 'sigmoid',
            })
        );
        //Add output layer
        this.model.add(
            tf.layers.dense({
                units: this.output_nodes,
                activation: 'softmax',
            })
        );
    }
}
