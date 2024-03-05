import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import { Hour } from "@/pages/home/types";


interface CardItemProps {
    id: number
    name: string
    description: string
    imageUrl: string
    hours: Hour[]
}

export const CardItem = ({ id, name, description, imageUrl, hours }: CardItemProps) => {

    return (
        <Card key={id} className="bg-neutral-50 border-2 border-zinc-200 min-w-[300px] max-w-[300px] rounded-2xl">
            <CardContent className="flex flex-col gap-3 px-1 py-0">
                <div className="flex w-full h-[200px] ">
                    <img
                        src={imageUrl}
                        className="shadow-sm rounded-2xl py-1 w-full object-cover"
                        alt={name} />
                </div>
                <div className="flex justify-center items-center gap-[0.350rem] flex-wrap mt-1" >
                    {hours.map((hour, index) => (
                        <Button
                            variant="default" key={index}>{hour.time}</Button>
                    ))}
                </div>
                <div className="px-2 pb-3">
                    <h2 className="font-bold mt-2 overflow-hidden text-ellipsis text-nowrap">{name}</h2>
                    <p className="text-sm text-gray-800 overflow-hidden text-wrap">{description}</p>
                    <Button variant="secondary" className="bg-zinc-200 w-full mt-3">Reservar</Button>
                </div>
            </CardContent>
        </Card>
    );
};