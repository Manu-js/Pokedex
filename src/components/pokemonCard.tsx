import {
  Card,
  CardBody,
  CardFooter,
  Heading,
  Stack,
  Image,
} from "@chakra-ui/react";
import PokemonModal from "./pokemonModal";
import { SPRITE_URL } from "../config/config";

interface Props {
  name: string;
  url: string;
}

const PokemonCard = ({ name, url }: Props) => {
  return (
    <Card variant="outline">
      <Image
        objectFit="contain"
        src={`${SPRITE_URL}${
          url.split("/")[url.split("/").length - 2]
        }.png`}
        alt={name}
      />
      <Stack>
        <CardBody>
          <Heading size="md" className="capitalize">
            {name}
          </Heading>
        </CardBody>
        <CardFooter>
          <PokemonModal name={name} />
        </CardFooter>
      </Stack>
    </Card>
  );
};
export default PokemonCard;
