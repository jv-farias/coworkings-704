import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";

interface CardItemProps {
    id: number
    name: string
    description: string
    imageUrl: string
}

export const CardItem = ({ id, name, description, imageUrl}: CardItemProps) => {

    return (
        <Card key={id} className="bg-neutral-50 border-2 border-zinc-200 min-w-[300px] max-w-[300px] rounded-2xl mt-4">
            <CardContent className="flex flex-col gap-4 px-0 py-0">
                <div className="flex w-full h-[200px] ">
                    <img
                        src={imageUrl}
                        className="rounded-t-xl w-full object-cover"
                        alt={name} />
                </div>
                <div className="px-2 pb-3">
                    <h2 className="font-bold mt-2 overflow-hidden text-ellipsis text-nowrap">{name}</h2>
                    <p className="text-sm text-gray-800 overflow-hidden text-wrap">{description}</p>
                    <Link to={`/coworking/${id}`}>
                        <Button variant="secondary" className="bg-zinc-200 w-full mt-3">Reservar</Button>
                    </Link>
                </div>
            </CardContent>
        </Card>
    );
};