/* eslint-disable react/prop-types */
import styled from 'styled-components';
import { AnimatePresence, motion } from 'framer-motion';

const ImageModal = ({ isOpen, onClose, imgSrc }) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 0 }} // 초기 상태: 아래에 위치하고 투명
        animate={{ opacity: 1, y: 0 }} // 애니메이션 후: 제자리로 이동하고 불투명
        exit={{ opacity: 0, y: -50 }} // 종료 시: 위로 이동하며 투명
        transition={{ duration: 0.5 }} // 애니메이션 지속 시간: 0.5초
      >
        <ModalBackground onClick={onClose}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <ZoomedImage src={imgSrc} alt="확대된 이미지" />
          </ModalContent>
        </ModalBackground>{' '}
      </motion.div>
    </AnimatePresence>
  );
};

export default ImageModal;

const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.8); /* 어두운 배경 */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ZoomedImage = styled.img`
  width: 500px;
  height: auto;
  border-radius: 10px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.3);
  cursor: zoom-out;
`;
