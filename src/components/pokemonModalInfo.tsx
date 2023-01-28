import {
  Text,
  useDisclosure,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  Image,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  ListItem,
  UnorderedList,
  Grid,
} from "@chakra-ui/react";
import getPokemon from "../Hooks/getPokemon";

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
              <Text fontWeight="bold" mb="1rem">
                <span className="grid"> Weight: {pokemon.weight} Kg</span>
                <span className="grid"> Height: {pokemon.height} Cm</span>
                <span className="grid">Types: </span>
              </Text>

              <UnorderedList>
                {pokemon.types.map(({ type }, i) => (
                  <ListItem key={i}>{type.name}</ListItem>
                ))}
              </UnorderedList>
              <Grid templateColumns="repeat(2, 1fr)">
                <span>
                  <Text textAlign="center">Normal</Text>
                  <Image
                    className="w-full h-full object-cover"
                    src={pokemon.sprites.front_default}
                    alt={pokemon.name}
                  />
                </span>
                <span>
                  <Text textAlign="center">Shiny</Text>
                  <Image
                    className="w-full h-full object-cover"
                    src={pokemon.sprites.front_shiny}
                    alt={pokemon.name}
                  />
                </span>
              </Grid>
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
