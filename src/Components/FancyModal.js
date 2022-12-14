import React from 'react';

// @ts-ignore
import Modal from 'react-native-modal';
import ModalBaseScene from './ModalBaseScene';

class FancyModal extends ModalBaseScene {
  renderModal(): React.ReactElement<any> {
    return (
      <Modal
        testID={'modal'}
        isVisible={this.isVisible()}
        backdropColor="#B4B3DB"
        backdropOpacity={0.8}
        animationIn="zoomInDown"
        animationOut="zoomOutUp"
        animationInTiming={600}
        animationOutTiming={600}
        backdropTransitionInTiming={600}
        backdropTransitionOutTiming={600}>
        <Text>Hello World</Text>
      </Modal>
    );
  }
}

export default FancyModal;
