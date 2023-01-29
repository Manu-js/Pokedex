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
import getPokemon from "../Hooks/getPokemon";
import PokemonDetails from "./pokemonDetails";

interface Props {
  name: string;
}

const PokemonModalInfo = ({ name }: Props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const { pokemon, isLoading } = getPokemon(name);

  return (
    <>
      <Button
        isLoading={isLoading}
        loadingText="Cargando"
        colorScheme="teal"
        variant="outline"
        onClick={onOpen}
        className="mb-2"
      >
        Open for more details
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
export default PokemonModalInfo;
