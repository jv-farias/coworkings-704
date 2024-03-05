import { MenuIcon } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import logoCoworking from "../../assets/logo.png"


export const Header = () => {
    return (
        <Card className="w-full bg-gray-300" >
            <CardContent className="p-5 flex justify-between items-center flex-row">
                <a href="/" >
                    <img src={logoCoworking} alt="" className="w-[120px]" />
                </a>
                <Sheet>
                    <SheetTrigger asChild>
                        <Button variant="outline" size="icon" className="h-8 w-8">
                            <MenuIcon size={16} />
                        </Button>
                    </SheetTrigger>

                    <SheetContent className="p-0">

                    </SheetContent>
                </Sheet>
            </CardContent>
        </Card>
    );
};

export default Header;