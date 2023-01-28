import {
  Card,
  CardBody,
  CardFooter,
  Heading,
  Stack,
  Image,
  Grid,
} from "@chakra-ui/react";

import PokemonModalInfo from "./PokemonModalInfo";

interface Props {
  name: string;
  url: string;
}

const PokemonDetail = ({ name, url }: Props) => {
  return (
      <Card
        variant="outline"
      >
        <Image
          objectFit="contain"
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
            url.split("/")[url.split("/").length - 2]
          }.png`}
          alt={name}
        />
        <Stack>
          <CardBody>
            <Heading size="md" className="capitalize">{name}</Heading>
          </CardBody>
          <CardFooter>
            <PokemonModalInfo name={name} />
          </CardFooter>
        </Stack>
      </Card>
  );
};
export default PokemonDetail;
