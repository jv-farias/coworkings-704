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
          <h1 className="my-8 text-center text-3xl font-bold px-5 py-4 text-gray-800 ">
            {coworking.name}
          </h1>
          <div className="flex gap-20 justify-between items-center flex-col md:flex-row px-10">
            <img
              className="rounded md:w-1/2"
              src={coworking.image}
              alt={coworking.name}
            />
            <div className="flex flex-col md:w-1/2 items-center">
              <div className="flex items-center justify-center flex-col w-full md:w-1/2">
                <p className="text-xl font-bold px-5 py-4 text-gray-800 ">
                  {`Agende seu horário:`}
                </p>
                <div className="flex justify-center flex-wrap items-start gap-1 w-[250px] h-[100px]">
                  {coworking.hours.map((hour: Hour, index: number) => (
                    <Card key={index}>
                      <Button variant="default" key={index}>
                        {hour.time}
                      </Button>
                    </Card>
                  ))}
                </div>
              </div>
              <div className="mt-5 text-gray-800">
                <p className="font-semibold text-xl text-center">
                  {" "}
                  {coworking.description}{" "}
                </p>
                <p className="font-normal text-lg mt-2 text-gray-600 text-center ">
                  {" "}
                  Expanda sua empresa em um endereço prestigiado no centro da
                  Aldeota, mais precisamente na Rua Nunes Valnte. Encontre um
                  ótimo equilíbrio profissional e pessoal no distrito financeiro
                  de Fortaleza, perto de todos os principais polos de serviços.{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="mt-20 flex justify-center items-center flex-col">
            <h3 className="  px-5 py-0 text-2xl font-bold mb-8 text-center">
              Vantagens de trabalhar em um Coworking
            </h3>

            <div className="m-5 py-2 flex justify-center flex-wrap items-center gap-4">
              <Card className="mt-2 min-w-[300px] max-w-[300px] text-center">
                <CardContent className=" p-4 flex items-center flex-col gap-2">
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
              <Card className="mt-2 min-w-[300px] max-w-[300px] text-center">
                <CardContent className="p-4 flex items-center flex-col gap-2">
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
              <Card className="mt-2 min-w-[300px] max-w-[300px] text-center">
                <CardContent className=" p-4 flex items-center flex-col gap-2">
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
          </div>
        </>
      ) : (
        "Carregando..."
      )}
    </>
  );
};
