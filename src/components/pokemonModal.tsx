import {
  Text,
  useDisclosure,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
} from "@chakra-ui/react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import PokemonDetail from "../domain/models/pokemonDetail";
import getPokemon from "../Hooks/getPokemon";
import PokemonDetails from "./pokemonDetails";

interface Props {
  name: string;
}

const PokemonModal = ({ name }: Props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const { fetchData, isLoading } = getPokemon((pokemon) => {
    setPokemon(pokemon);
  });

  const [pokemon, setPokemon] = useState<PokemonDetail>();
  const { t } = useTranslation();

  return (
    <>
      <Button
        isLoading={isLoading}
        loadingText="Loading"
        colorScheme="teal"
        variant="outline"
        onClick={async () => {
          await fetchData(name);
          onOpen();
        }}
        className="mb-2"
      >
        {t("interface.info")}
      </Button>
      {pokemon && (
        <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>{pokemon.name}</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <PokemonDetails pokemon={pokemon} />
            </ModalBody>

            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={onClose}>
                {t("interface.close")}
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      )}
    </>
  );
};
export default PokemonModal;
