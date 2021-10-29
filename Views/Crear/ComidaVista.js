import React, { Component } from 'react'
import { Text, View, Button, Image } from 'react-native'
import { launchCamera, launchImageLibrary } from "react-native-image-picker"

import ImagePicker from 'react-native-image-crop-picker';

export default class ComidaVista extends Component {
    constructor() {
        super()

        this.state = {
            imagen: ''
        }

    }

    launchImagePicker = () => {
        ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: true
          }).then(image => {
            console.log(image);
            this.setState({ imagen: image })
          });
      /*  const options = {
            path: 'images',
            mediaType: 'photo',
            includeBase64: true,
            cameraType: 'front'
        }
        launchCamera(options, response => {
            console.log('repson', response)
            if (response.didCancel) {

            } else if (response.error) {

            } else if (response.customButton) {

            } else {
                const recurso = { uri: 'data:image/jpeg;base64,' + response.base64 }
                this.setState({ image: recurso })
            }
        })*/
    }
    render() {
        return (
            <View>
                <Text> textInComponentdsf </Text>
                <Image image={this.state.imagen} style={{ width: 100, height: 100 }} />
                <Button title="seleccionar imagen" onPress={this.launchImagePicker}> </Button>
            </View>
        )
    }
}
