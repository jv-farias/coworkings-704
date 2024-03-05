import { CardItem } from "@/components/Card";
import { Header } from "@/components/Header";
import axios, { AxiosError } from "axios";
import { useEffect, useState } from "react";
import { Coworking } from "./types";
import Search from "@/components/Search";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";

export const Home = () => {
    const [data, setData] = useState<Coworking[]>([]);

    useEffect(() => {
        axios
            .get<Coworking[]>("http://localhost:3000/coworkings")
            .then((resp) => {
                setData(resp.data);
            })
            .catch((error: AxiosError) => {
                console.error(error as AxiosError);
            });
    }, []);

    return (
        <div>
            <Header />
            <div className="px-5 mt-6">
                <Search />
            </div>
            <div className="px-5 mt-6" >
                <Card className="p-0" >
                    <CardHeader className="py-2 px-4" >
                        <CardTitle><Badge>Confirmado</Badge> </CardTitle>
                        <CardContent className="p-0 flex items-center justify-between" >
                            <div className="flex items-center justify-start mt-2" >
                                <div className="flex items-center gap-2" >
                                    <Avatar>
                                        <AvatarImage className="h-6 w-6 rounded-full object-cover" src="https://www.elospace.com.br/wp-content/uploads/2022/12/sala-01.jpg" />
                                        <AvatarFallback> HG+ </AvatarFallback>
                                    </Avatar>
                                    <p className="font-bold " >Sala de Workshop</p>
                                </div>
                                <div className="flex ml-2 items-center border-l-2 border-solid border-secondary px-3 gap-1 flex-1 ">
                                    <p className="text-lg">19/Março - 11:00</p>
                                </div>
                            </div>
                        </CardContent>
                    </CardHeader>
                </Card>
            </div>
            <h1 className="px-5 mt-6 font-bold text-sm" >RECOMENDADOS</h1>
            <div className="mt-2 px-5 flex gap-2 overflow-x-auto [&::-webkit-scrollbar]:hidden " >
                {data.map((item) => (
                    <CardItem
                        description={item.description}
                        hours={item.hours} // Corrigido para 'hours'
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