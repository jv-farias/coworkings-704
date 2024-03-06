import Header from "@/components/Header";
import { Card, CardContent } from "@/components/ui/card";
import axios from "axios";
import { Lightbulb, MapPin, UsersRound } from "lucide-react"; // Assuming you have Clock icon
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Hour } from "../home/types";
import { Button } from "@/components/ui/button";

export const Coworking = () => {
  const params = useParams();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [coworking, setCoworking] = useState<any>();

  useEffect(() => {
    axios
      .get(`http://localhost:3000/coworkings/${params.id}`)
      .then((response) => {
        setCoworking(response.data);
      })
      .catch((error) => console.error(`Error: ${error}`));
  }, [params.id]);

  return (
    <>
      {coworking ? (
        <>
          <Header />
          <h1 className="text-xl font-bold px-5 py-4 text-gray-800 ">
            {coworking.name}
          </h1>
          <div className="w-full px-5">
            <img
              className="rounded-lg"
              src={coworking.image}
              alt={coworking.name}
            />
          </div>
          <p className="text-xl font-bold px-5 py-4 text-gray-800 ">
            {`Agende seu horário:`}
          </p>
          <div className="ml-5 w-2/3 flex justify-start items-center gap-[0.300rem] flex-wrap mt-1">
            {coworking.hours.map((hour: Hour, index: number) => (
              <Card key={index}>
                    <Button variant="default" key={index}>
                         {hour.time}
                    </Button>
              </Card>
            ))}
          </div>
          <div className="mt-5 px-5 py-4 d text-gray-800">
            <h2 className="text-lg font-bold">Descrição</h2>
            <p className="font-semibold text-base mt-2">
              {" "}
              {coworking.description}{" "}
            </p>
            <p className="font-normal text-base mt-2 text-gray-600 ">
              {" "}
              Expanda sua empresa em um endereço prestigiado no centro da
              Aldeota, mais precisamente na Rua Nunes Valnte. Encontre um ótimo
              equilíbrio profissional e pessoal no distrito financeiro de
              Fortaleza, perto de todos os principais polos de serviços.{" "}
            </p>
          </div>
          <h3 className="  px-5 py-0 text-xl font-bold">
            Vantagens de trabalhar em um Coworking
          </h3>
          <div className=" px-5 py-2  overflow-x-auto [&::-webkit-scrollbar]:hidden flex items-center gap-2  ">
            <Card className="mt-2 min-w-[300px] max-w-[300px]">
              <CardContent className=" p-4 flex items-start flex-col gap-2">
                <p className="font-semibold text-lg flex items-center gap-2">
                  Networking{" "}
                  <span>
                    {" "}
                    <UsersRound size={20} />{" "}
                  </span>
                </p>
                <p>
                  Você tem a oportunidade de se conectar com outros
                  profissionais e empresas, o que pode resultar em novas
                  parcerias, negócios e oportunidades de carreira.
                </p>
              </CardContent>
            </Card>
            <Card className="mt-2 min-w-[300px] max-w-[300px]">
              <CardContent className=" p-4 flex items-start flex-col gap-2">
                <p className="font-semibold text-lg flex items-center  gap-2">
                  Ambiente
                  <span>
                    {" "}
                    <Lightbulb size={20} />{" "}
                  </span>
                </p>
                <p>
                  Os espaços de coworking são projetados para promover a
                  colaboração e o trabalho em equipe, o que pode levar a ideias
                  inovadoras e soluções criativas.
                </p>
              </CardContent>
            </Card>
            <Card className="mt-2 min-w-[300px] max-w-[300px]">
              <CardContent className=" p-4 flex items-start flex-col gap-2">
                <p className="font-semibold text-lg flex items-center gap-2">
                  Localização
                  <span>
                    {" "}
                    <MapPin size={20} />{" "}
                  </span>
                </p>
                <p>
                  Estão localizados em áreas privilegiadas da cidade, o que pode
                  ser um fator importante para profissionais que precisam estar
                  próximos de seus clientes.
                </p>
              </CardContent>
            </Card>
          </div>
        </>
      ) : (
        "Carregando..."
      )}
    </>
  );
};
