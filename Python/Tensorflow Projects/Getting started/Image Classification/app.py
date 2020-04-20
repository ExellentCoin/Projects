import tensorflow as tf
from tensorflow import keras
import numpy as np
import matplotlib.pyplot as plt

# Loading in the data from mnist
data = keras.datasets.fashion_mnist
(train_images, train_labels), (test_images, test_labels) = data.load_data()

# Defining all the possible classes
class_names = ['T-Shirt/Top', 'Trouser', 'Pullover', 'Dress', 'Coat', 'Sandal', 'Shirt', 'Sneaker', 'Bag', 'Ankle Boot']

train_images = train_images/255.0 # Normalizing the array
test_images = test_images/255.0 # Normalizing the array

model = keras.Sequential([
    keras.layers.Flatten(input_shape=(28, 28)),
    keras.layers.Dense(128, activation='relu'),
    keras.layers.Dense(10, activation='sigmoid')
])

model.compile(optimizer='adam', loss='sparse_categorical_crossentropy', metrics=['accuracy'])

model.fit(train_images, train_labels, epochs=3)

predictions = model.predict(test_images)

for i in range(len(test_images)):
    plt.grid(False)
    plt.imshow(test_images[i], cmap=plt.cm.binary_r)
    plt.xlabel('Actual: ' + class_names[test_labels[i]])
    plt.title('Prediction: ' + class_names[np.argmax(predictions[i])])
    plt.show()