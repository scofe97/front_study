import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Button,
} from '@chakra-ui/react';
import { useRef } from 'react';

interface ConfirmBHPros {
  isOpen: boolean;
  onClose: () => void;
  handelDelete: () => void;
  item?: object;
}

const ConfirmBH = ({ isOpen, onClose, handelDelete }: ConfirmBHPros) => {
  const cancelRef = useRef<HTMLButtonElement>(null);

  return (
    <>
      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              삭제
            </AlertDialogHeader>

            <AlertDialogBody>정말로 삭제하시겠습니까?</AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                취소
              </Button>
              <Button
                colorScheme="red"
                ml={3}
                onClick={() => {
                  onClose();
                  handelDelete();
                }}
              >
                삭제
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
};

export default ConfirmBH;
