import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
  useDisclosure,
} from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

import i18n from "../config/i18n";
/*Maneja el cambio de idioma*/
const handleLanguageChange = (languageCode: string) => {
  i18n.changeLanguage(languageCode);
};

const LanguageSelector = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { t } = useTranslation();

  return (
    <>
      <Button onClick={() => onOpen()}>{t("interface.changeLanguage")}</Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{t("interface.changeLanguage")}</ModalHeader>
          <ModalBody>
            <Stack spacing={4} direction="row" className="flex justify-center">
              <Button onClick={() => handleLanguageChange("es")}>
                Español
              </Button>
              <Button onClick={() => handleLanguageChange("en")}>
                English
              </Button>
            </Stack>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              {t("interface.close")}
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default LanguageSelector;
