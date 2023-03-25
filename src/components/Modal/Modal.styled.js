import styled from '@emotion/styled';

export const ModalBackdrop = styled.div`
  position: fixed;
  background-color: rgba(0, 0, 0, 0.75);
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  transition: all 0.3s;
`;

export const ModalContent = styled.div`
  background-color: white;
  position: absolute;

  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 8px;
`;
