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
import PokemonDetail from "../domain/models/PokemonDetail";
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

  return (
    <>
      <Button
        isLoading={isLoading}
        loadingText="Cargando"
        colorScheme="teal"
        variant="outline"
        onClick={() => {
          fetchData(name);
          if (!isLoading) {
            onOpen();
          }
        }}
        className="mb-2"
      >
        More info
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
                Close
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      )}
    </>
  );
};
export default PokemonModal;
