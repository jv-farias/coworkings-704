import { useState, useEffect } from "react";
import axios, { AxiosError } from "axios";
import { Coworking } from "./types";
import { Header } from "@/components/Header";
import { CardItem } from "@/components/Card";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";

const useDebounce = (value: string, delay: number) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
};

const Home = () => {
  const [data, setData] = useState<Coworking[]>([]);
  const [filteredData, setFilteredData] = useState<Coworking[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const debouncedSearchTerm = useDebounce(searchTerm, 300); //

  useEffect(() => {
    axios
      .get<Coworking[]>("https://api-backend-teste.vercel.app/coworkings")
      .then((resp) => {
        setData(resp.data);
        setFilteredData(resp.data);
      })
      .catch((error: AxiosError) => {
        console.error(error);
      });
  }, []);

  // Função para filtrar os dados com base no termo de pesquisa
  useEffect(() => {
    const filtered = data.filter((item) =>
      item.name.toLowerCase().includes(debouncedSearchTerm.toLowerCase().trim())
    );
    setFilteredData(filtered);
  }, [debouncedSearchTerm, data]);
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="pb-5 bg-zinc-50">
      <Header />
      <div className="px-5 mt-6 relative">
        <input
          type="text"
          placeholder="Procure uma sala..."
          value={searchTerm}
          onChange={handleSearch}
          className="border border-gray-500 rounded-md px-3 py-2 w-2/2 placeholder:font-bold placeholder-gray-500 focus:outline-none focus:border-blue-500 transition duration-400 ease-in-out hover:border-blue-300"/>
      </div>
      <div className="px-5 mt-6">
        <Card className="p-0">
          <CardHeader className="py-2 px-4">
            <CardTitle>
              <Badge>Confirmado</Badge>
            </CardTitle>
            <CardContent className="p-0 flex items-center justify-between">
              <div className="flex items-center justify-start mt-2">
                <div className="flex items-center gap-2">
                  <Avatar>
                    <AvatarImage
                      className="h-6 w-6 rounded-full object-cover"
                      src="https://www.elospace.com.br/wp-content/uploads/2022/12/sala-01.jpg"
                    />
                    <AvatarFallback> HG+ </AvatarFallback>
                  </Avatar>
                  <p className="font-bold">Sala de Workshop</p>
                </div>
                <div className="flex ml-2 items-center border-l-2 border-solid border-secondary px-3 gap-2 flex-1">
                  <p className="text-lg">19/Março - 11:00</p>
                </div>
              </div>
            </CardContent>
          </CardHeader>
        </Card>
      </div>
      <h1 className="px-5 mt-6 font-bold text-sm">RECOMENDADOS</h1>
      <div className="flex px-5 gap-4 lg:flex-wrap lg:justify-evenly lg:gap-1 overflow-x-auto [&::-webkit-scrollbar]:hidden :flex-nowrap">
        {filteredData.map((item) => (
          <CardItem
            description={item.description}
            id={item.id}
            imageUrl={item.image}
            name={item.name}
            key={item.id.toString()}
          />
        ))}
      </div>
    </div>
  );
};

export { Home };
